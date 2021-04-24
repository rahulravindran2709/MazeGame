// Global imports -
import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
// data
import Config from '../data/config';
// Local imports -
// Components
import Renderer from './components/renderer';
import Controls from './components/controls';
import Camera from './components/camera';
import Material from './components/material';
// Helpers
import Stats from './helpers/stats';
// Model
import Texture from './model/texture';
import Geometry from './components/geometry';
import  '../utils/orbitControls';
import { BufferGeometryUtils } from '../utils/bufferGeometryUtils';
import { Object3D } from 'three';




// -- End of imports
let directions;
// This class instantiates and ties all of the components together, starts the loading process and renders the main loop
export default class Main {
  container;
  clock;
  scene;
  mazeDimension;
  renderer;
  camera;
  texture;
  maze;
  material;
  geometry;
  controls;
  constructor(container: HTMLElement) {
    // Set container property to container element
    this.container = container;

    // Start Three clock
    this.clock = new THREE.Clock();
    this.mazeDimension = 11;
    // Main scene creation
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(Config.fog.color, Config.fog.near);
    this.material = new Material();
    this.geometry = new Geometry(this.scene, this.mazeDimension);

    // Get Device Pixel Ratio first for retina
    if (window.devicePixelRatio) {
      Config.dpr = window.devicePixelRatio;
    }
    
    // Main renderer constructor
    this.renderer = new Renderer(this.scene, container);
    this.camera = new Camera(this.renderer.threeRenderer);
    this.scene.add(this.camera.threeCamera);
    this.controls = new Controls(this.camera.threeCamera, container);
    //Point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(1, 1, 1.3);
    this.scene.add(pointLight);
    //Ambient light
    this.scene.add(new THREE.AmbientLight(0x404040));
    // Instantiate texture class
    this.texture = new Texture();
    const ball = this.geometry.makeBall();

    const groundGeometry = this.geometry.makeGround();

    this.maze = this.generateSquareMaze(this.mazeDimension);
    this.maze[this.mazeDimension - 1][this.mazeDimension - 2] = false;

    // Start loading the textures and then go on to load the model after the texture Promises have resolved
    this.texture.load().then(() => {

      const { grass: groundTexture, ball: ballTexture, wall: brickTexture } = this.texture.textures;
      const ballMaterial = this.material.makePhongMaterial(ballTexture);
      const ballMesh = new THREE.Mesh(ball, ballMaterial);
      ballMesh.position.set(1, 1, 0.25);
      this.scene.add(ballMesh);
      const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
      const boxMaterial = this.material.makePhongMaterial(brickTexture);
      const originHelper = new Object3D();
      const positionHelper = new Object3D();
      positionHelper.position.x = 2;
      positionHelper.position.y = 2;
      positionHelper.position.z = 0;
      positionHelper.add(originHelper);
      originHelper.updateWorldMatrix(true,false);
      boxGeometry.applyMatrix4(originHelper.matrixWorld);
      // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      positionHelper.position.x = 2;
      positionHelper.position.y = 3;
      positionHelper.position.z = 0;
      originHelper.updateWorldMatrix(true,false);
      const secondBoxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
      secondBoxGeometry.applyMatrix4(originHelper.matrixWorld);
      // boxMesh.position.x = 2;
      // boxMesh.position.y = 2;
      // boxMesh.position.z = 0.5;
      //boxMesh.updateMatrix();
      //this.scene.add(boxMesh);
      
      // const secondMesh = new THREE.Mesh(secondBoxGeometry, boxMaterial);

      // secondMesh.position.x = 2;
      // secondMesh.position.y = 4;
      // secondMesh.position.z = 0.5;
      // secondMesh.updateMatrix();
      //this.scene.add(secondMesh);
      const mergedGeom = BufferGeometryUtils.mergeBufferGeometries([boxGeometry,secondBoxGeometry]);
      const mergedMesh = new THREE.Mesh(mergedGeom, boxMaterial);
      mergedMesh.position.z = 0.5;
      this.scene.add(mergedMesh);

      //this.maze.dimension = this.mazeDimension;
      //this.maze[this.mazeDimension -1][this.mazeDimension -2] = false;
      //const mergedMesh = generate_maze_mesh(this.maze);
      //this.scene.add(mergedMesh)
      //maze texture

      groundTexture.wrapS = THREE.RepeatWrapping;
      groundTexture.wrapT = THREE.RepeatWrapping;
      groundTexture.repeat.set(this.mazeDimension * 5, this.mazeDimension * 5);
      const groundMaterial = this.material.makePhongMaterial(groundTexture);
      const planeMesh = new THREE.Mesh(groundGeometry, groundMaterial);
      planeMesh.position.set((this.mazeDimension - 1) / 2, (this.mazeDimension - 1) / 2, 0);
      //planeMesh.position.set(,1,0.15);
      planeMesh.rotation.set(0, 0, 0);
      this.scene.add(planeMesh);


      //new Interaction(this.renderer.threeRenderer, this.scene, this.camera.threeCamera, this.controls.threeControls);

    });

    // Start render which does not wait for model fully loaded
    this.render();
  }
  generate_maze_mesh(field: Array<Array<boolean>>, dimension: number) {
    var dummy = new THREE.BufferGeometry();
    for (var i = 0; i < dimension; i++) {
      for (var j = 0; j < dimension; j++) {
        if (field[i][j]) {
          var geometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);
          var mesh_ij = new THREE.Mesh(geometry);
          mesh_ij.position.x = i;
          mesh_ij.position.y = j;
          mesh_ij.position.z = 0.5;
          //THREE.BufferGeometryUtils.mergeBufferGeometries(dummy, mesh_ij);
        }
      }
    }
    // var material = new THREE.MeshPhongMaterial({ map: brickTexture });
    // var mesh = new THREE.Mesh(dummy, material);
    //return mesh;
  }
  generateSquareMaze(dimension: number) {
    console.log(dimension, 'Dimension')
    console.log(field)
    function iterate(field: Array<Array<boolean>>, x: number, y: number) {
      field[x][y] = false;
      while (true) {
        directions = [];
        if (x > 1 && field[x - 2][y] == true) {
          directions.push([-1, 0]);
        }
        if (x < dimension - 2 && field[x + 2][y] == true) {
          directions.push([1, 0]);
        }
        if (y > 1 && field[x][y - 2] == true) {
          directions.push([0, -1]);
        }
        if (y < dimension - 2 && field[x][y + 2] == true) {
          directions.push([0, 1]);
        }
        if (directions.length == 0) {
          return field;
        }
        const dir = directions[Math.floor(Math.random() * directions.length)];
        field[x + dir[0]][y + dir[1]] = false;
        field = iterate(field, x + dir[0] * 2, y + dir[1] * 2);
      }
    }

    // Initialize the field.
    var field = new Array(dimension);
    for (var i = 0; i < dimension; i++) {
      field[i] = new Array(dimension);
      for (var j = 0; j < dimension; j++) {
        field[i][j] = true;
      }
    }
    // Gnerate the maze recursively.
    field = iterate(field, 1, 1);
    return field;

  }
  render() {
    // Render rStats if Dev
    // if (Config.isDev && Config.isShowingStats) {
    //   Stats.start();
    // }

    // Call render function and pass in created scene and camera
    this.renderer.render(this.scene, this.camera.threeCamera);

    // rStats has finished determining render call now
    // if (Config.isDev && Config.isShowingStats) {
    //   Stats.end();
    // }

    // Delta time is sometimes needed for certain updates
    //const delta = this.clock.getDelta();
    // Call any vendor or module frame updates here
    TWEEN.update();
    //this.controls.threeControls.update();

    // RAF
    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }
}

// Global imports -
import TWEEN from '@tweenjs/tween.js';
import * as THREE from 'three';
import * as Cannon from 'cannon';
// data
import Config from '../data/config';
import Camera from './components/camera';
import Controls from './components/controls';
import Geometry from './components/geometry';
import Light from './components/light';
import Material from './components/material';
// Local imports -
// Components
import Renderer from './components/renderer';
// Model
import Texture from './model/texture';
import Interaction from './managers/interaction';




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
  gameState;
  lights;
  world;
  ballBody;
  fixedTimeStep =1/60;
  maxSubSteps = 3;
  lastTime: number;
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
    this.lights = new Light(this.scene);
    this.lights.place('ambient');
    this.lights.place('point');
    // Instantiate texture class
    this.texture = new Texture();
    const ball = this.geometry.makeBall();

    const groundGeometry = this.geometry.makeGround();

    this.maze = this.generateSquareMaze(this.mazeDimension);
    this.maze[this.mazeDimension - 1][this.mazeDimension - 2] = false;
    const wallGeometry = this.geometry.makeWalls(this.maze);

    this.world = new Cannon.World();
    this.world.gravity.set(0, 0, 0);
    const ballShape = new Cannon.Sphere(0.25);
    this.ballBody = new Cannon.Body({
      shape: ballShape,
      position: new Cannon.Vec3(1, 1, 0)
    });
    this.world.addBody(this.ballBody);

    // Start loading the textures and then go on to load the model after the texture Promises have resolved
    this.texture.load().then(() => {

      const { grass: groundTexture, ball: ballTexture, wall: brickTexture } = this.texture.textures;
      const ballMaterial = this.material.makePhongMaterial(ballTexture);
      const ballMesh = new THREE.Mesh(ball, ballMaterial);
      ballMesh.position.set(1, 1, 0.25);
      this.scene.add(ballMesh);
      const boxMaterial = this.material.makePhongMaterial(brickTexture);

      const mergedMesh = new THREE.Mesh(wallGeometry, boxMaterial);
      mergedMesh.position.z = 0.5;
      this.scene.add(mergedMesh);
      //Add ground texture and create ground mesh
      groundTexture.wrapS = THREE.RepeatWrapping;
      groundTexture.wrapT = THREE.RepeatWrapping;
      groundTexture.repeat.set(this.mazeDimension * 5, this.mazeDimension * 5);
      const groundMaterial = this.material.makePhongMaterial(groundTexture);
      const planeMesh = new THREE.Mesh(groundGeometry, groundMaterial);
      planeMesh.position.set((this.mazeDimension - 1) / 2, (this.mazeDimension - 1) / 2, 0);
      planeMesh.rotation.set(0, 0, 0);
      this.scene.add(planeMesh);


      new Interaction(this.renderer.threeRenderer, this.scene, this.camera.threeCamera, this.controls.threeControls);

    });
    this.gameState = 'initialize';
    // Start render which does not wait for model fully loaded
    this.render(Date.now());
  }
  generateSquareMaze(dimension: number) {
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
  render(time: number) {
    TWEEN.update();
    switch (this.gameState) {
      case 'initialize': {
        this.gameState = 'fade in';
        this.lights.pointLight.intensity = 0;
      }
      case 'fade in': {
        const pointLightIntensity = this.lights.pointLight.intensity;
        this.lights.pointLight.intensity += 0.01 * (1.0 - pointLightIntensity);
        this.renderer.render(this.scene, this.camera.threeCamera);
        if (Math.abs(pointLightIntensity - 1.0) < 0.05) {
          this.lights.pointLight.intensity = 1.0;
          this.gameState = "play";
        }

        break;

      }
      case 'play': {
        //console.log('play');
        this.renderer.render(this.scene, this.camera.threeCamera);
        if(this.lastTime !== undefined){
          var dt = (time - this.lastTime) / 1000;
          this.world.step(this.fixedTimeStep, dt, this.maxSubSteps);
       }
       //console.log("Sphere z position: " + this.ballBody.position.z);
       this.lastTime = time;
        break;
      }
    }
    //this.controls.threeControls.update();

    // RAF
    requestAnimationFrame(this.render.bind(this)); // Bind the main class instead of window object
  }
}

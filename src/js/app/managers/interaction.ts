import * as THREE from 'three';
import Keyboard,{ ALIAS } from '../../utils/keyboard';
import Helpers from '../../utils/helpers';
import Config from '../../data/config';

// Manages all input interactions
export default class Interaction {
  renderer: THREE.Renderer;
  scene;
  camera;
  controls;
  timeout: NodeJS.Timeout;
  keyboard;
  constructor(renderer: THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera, controls: THREE.OrbitControls) {
    // Properties
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;

    this.timeout = null;

    // Instantiate keyboard helper
    this.keyboard = new Keyboard();

    // Listeners
    // Mouse events
    this.renderer.domElement.addEventListener('mousemove', (event) => Helpers.throttle(this.onMouseMove(event), 250), false);
    this.renderer.domElement.addEventListener('mouseleave', (event) => this.onMouseLeave(event), false);
    this.renderer.domElement.addEventListener('mouseover', (event) => this.onMouseOver(event), false);

    // Keyboard events
    this.keyboard.domElement.addEventListener('keydown', (event: KeyboardEvent) => {
      // Only once
      if(event.repeat) {
        return;
      }

      if(this.keyboard.eventMatches(event, 'escape')) {
        console.log('Escape pressed');
      }
      if(this.keyboard.eventMatches(event,'left')){
        console.log('Left pressed');
      }
      if(this.keyboard.eventMatches(event,'right')){
        console.log('Right pressed');
      }
      if(this.keyboard.eventMatches(event,'down')){
        console.log('Down pressed');
      }
      
      if(this.keyboard.eventMatches(event,'up')){
        console.log('Up pressed');
      }
    });
  }

  onMouseOver(event: MouseEvent) {
    event.preventDefault();

    Config.isMouseOver = true;
  }

  onMouseLeave(event: MouseEvent) {
    event.preventDefault();

    Config.isMouseOver = false;
  }

  onMouseMove(event: MouseEvent) {
    event.preventDefault();

    clearTimeout(this.timeout);

    this.timeout = setTimeout(function() {
      Config.isMouseMoving = false;
    }, 200);

    Config.isMouseMoving = true;
  }
}

import * as THREE from 'three';
import Config from '../../data/config';
import Helpers from '../../utils/helpers';
import Keyboard from '../../utils/keyboard';

// Manages all input interactions
export default class Interaction {
  renderer: THREE.Renderer;
  scene;
  camera;
  controls;
  timeout: NodeJS.Timeout;
  keyboard;
  constructor(renderer: THREE.Renderer, scene: THREE.Scene, camera: THREE.Camera, controls: THREE.OrbitControls, moveHandler: (direction: string) => void) {
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
    this.renderer.domElement.addEventListener('mousemove', (event) => Helpers.throttle(() => this.onMouseMove(event), 250), false);
    this.renderer.domElement.addEventListener('mouseleave', (event) => this.onMouseLeave(event), false);
    this.renderer.domElement.addEventListener('mouseover', (event) => this.onMouseOver(event), false);

    // Keyboard events
    this.keyboard.domElement.addEventListener('keydown', (event: KeyboardEvent) => {
      // Only once
      if (event.repeat) {
        return;
      }

      if (this.keyboard.eventMatches(event, 'escape')) {
        console.log('Escape pressed');
      }
      if (this.keyboard.eventMatches(event, 'left')) {
        console.log('Left pressed');
        moveHandler('left');
      }
      if (this.keyboard.eventMatches(event, 'right')) {
        console.log('Right pressed');
        moveHandler('right');
      }
      if (this.keyboard.eventMatches(event, 'down')) {
        console.log('Down pressed');
        moveHandler('down');
      }

      if (this.keyboard.eventMatches(event, 'up')) {
        console.log('Up pressed');
        moveHandler('up');
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

    this.timeout = setTimeout(function () {
      Config.isMouseMoving = false;
    }, 200);

    Config.isMouseMoving = true;
  }
}

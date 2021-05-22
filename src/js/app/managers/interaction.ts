import * as THREE from "three";
import Config from "../../data/config";
import Helpers from "../../utils/helpers";
import Keyboard from "../../utils/keyboard";

// Manages all input interactions
export default class Interaction {
  renderer: THREE.Renderer;
  scene;
  camera;
  controls;
  timeout: NodeJS.Timeout;
  keyboard;
  rightKey: HTMLButtonElement;
  leftKey: HTMLButtonElement;
  upKey: HTMLButtonElement;
  downKey: HTMLButtonElement;
  constructor(
    renderer: THREE.Renderer,
    scene: THREE.Scene,
    camera: THREE.Camera,
    controls: THREE.OrbitControls,
    moveHandler: (direction: string) => void
  ) {
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
    this.renderer.domElement.addEventListener(
      "mousemove",
      (event) => Helpers.throttle(() => this.onMouseMove(event), 250),
      false
    );
    this.renderer.domElement.addEventListener(
      "mouseleave",
      (event) => this.onMouseLeave(event),
      false
    );
    this.renderer.domElement.addEventListener(
      "mouseover",
      (event) => this.onMouseOver(event),
      false
    );

    // Keyboard events
    this.keyboard.domElement.addEventListener(
      "keydown",
      (event: KeyboardEvent) => {
        // Only once

        if (this.keyboard.eventMatches(event, "escape")) {
          console.log("Escape pressed");
        }
        if (this.keyboard.eventMatches(event, "left")) {
          moveHandler("left");
        }
        if (this.keyboard.eventMatches(event, "right")) {

          moveHandler("right");
        }
        if (this.keyboard.eventMatches(event, "down")) {

          moveHandler("down");
        }

        if (this.keyboard.eventMatches(event, "up")) {

          moveHandler("up");
        }
      }
    );

    //Button events
    this.upKey = document.querySelector('#upkey');
    this.leftKey = document.querySelector('#leftkey');
    this.downKey = document.querySelector('#downkey');
    this.rightKey = document.querySelector('#rightkey');
    this.pressAndHold(this.upKey, Helpers.debounce(() => moveHandler('up'),30,true));
    this.pressAndHold(this.leftKey, Helpers.debounce(() => moveHandler('left'),30,true));
    this.pressAndHold(this.rightKey, Helpers.debounce(() => moveHandler('right'),30,true));
    this.pressAndHold(this.downKey, Helpers.debounce(() => moveHandler('down'),30,true));
  }
  requestInterval = (fn: () => void, delay: number) => {
    var requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        function (callback: () => void) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })(),
      start = new Date().getTime(),
      handle: { value?: number } = {};
    function loop() {
      handle.value = requestAnimFrame(loop);
      var current = new Date().getTime(),
        delta = current - start;
      if (delta >= delay) {
        //@ts-ignore
        fn.call();
        start = new Date().getTime();
      }
    }
    handle.value = requestAnimFrame(loop);
    return handle;
  }
  pressAndHold = (element: HTMLButtonElement, cb: (...args: any[]) => void) => {
    let timer: { value?: number };
    const pressingDown = (event: MouseEvent) => {
      event.preventDefault();
      timer = this.requestInterval(cb, 1000 / 60);
    }
    element.addEventListener("mousedown", pressingDown);
    element.addEventListener("mouseup", depress);
    element.addEventListener("touchstart", pressingDown);
    element.addEventListener("touchend", depress);

    function depress(event: MouseEvent) {
      event.preventDefault();
      cancelAnimationFrame(timer.value);
    }
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

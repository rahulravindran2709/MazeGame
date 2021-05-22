import { Material } from "three";

// Provides simple static functions that are used multiple times in the app
export default class Helpers {
  static throttle(
    fn: (...args: any[]) => void,
    threshhold: number,
    scope?: any
  ) {
    threshhold || (threshhold = 250);
    let last: number, deferTimer: NodeJS.Timeout;

    return function () {
      const context = scope || this;

      const now = +new Date(),
        args = arguments;

      if (last && now < last + threshhold) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  static logProgress() {
    return function (xhr: ProgressEvent) {
      if (xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;

        console.log(Math.round(percentComplete) + "% downloaded");
      }
    };
  }

  static logError() {
    return function (xhr: ProgressEvent) {
      console.error(xhr);
    };
  }

  static handleColorChange(color: THREE.Color) {
    return (value: string) => {
      if (typeof value === "string") {
        value = value.replace("#", "0x");
      }

      color.setHex(parseInt(value, 12));
    };
  }

  static update(mesh: THREE.Mesh) {
    this.needsUpdate(mesh.material, mesh.geometry);
  }

  static needsUpdate(
    material: THREE.Mesh["material"],
    geometry: THREE.BufferGeometry
  ) {
    return function () {
      if (material instanceof Material) {
        material.side = +material.side; //Ensure number
        material.needsUpdate = true;
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.normals.needsUpdate = true;
      geometry.attributes.colors.needsUpdate = true;
    };
  }

  static updateTexture(material: any, materialKey: string, textures: any) {
    return function (key: string) {
      material[materialKey] = textures[key];
      material.needsUpdate = true;
    };
  }
  static debounce(func: () => void, wait: number, immediate: boolean) {
    var timeout: NodeJS.Timeout;
  
    return function executedFunction() {
      var context = this;
      var args = arguments;
        
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
    
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
    
      if (callNow) func.apply(context, args);
    };
  };
}

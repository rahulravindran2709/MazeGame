import * as THREE from 'three';

import Material from '../components/material';
import Helpers from '../../utils/helpers';
import { BufferGeometryUtils } from '../../utils/bufferGeometryUtils';
import { GLTFLoader } from '../loaders/GLTFLoader';
import Config from '../../data/config';

// Loads in a single object from the config file
export default class Model {
  constructor(scene, manager, textures) {
    this.scene = scene;
    this.textures = textures;
    this.manager = manager;

    this.obj = null;
    this.ref = null;
  }

  load(type) {
    // Manager is passed in to loader to determine when loading done in main

    switch (type) {
      

      case 'object':
        // Load model with ObjectLoader
        new THREE.ObjectLoader(this.manager).load(
          Config.models[Config.model.selected].path,
          obj => {
            obj.traverse(child => {
              if(child instanceof THREE.Mesh) {
                // Create material for mesh and set its map to texture by name from preloaded textures
                const material = new Material(0xffffff).standard;
                material.map = this.textures.Grass;
                child.material = material;

                // Set to cast and receive shadow if enabled
                if(Config.shadow.enabled) {
                  child.receiveShadow = true;
                  child.castShadow = true;
                }
              }
            });

            // Set prop to obj so it can be accessed from outside the class
            this.obj = obj;
            this.ref = obj;

            obj.scale.multiplyScalar(Config.models[Config.model.selected].scale);
            this.scene.add(obj);
          },
          Helpers.logProgress(),
          Helpers.logError()
        );
        break;
    }
  }

  unload() {
    this.scene.remove(this.ref);
  }
}

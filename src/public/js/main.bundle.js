/*! For license information please see main.bundle.js.LICENSE.txt */
(self.webpackChunkthreejs_es6_webpack_boilerplate =
  self.webpackChunkthreejs_es6_webpack_boilerplate || []).push([
  ["main"],
  {
    "./src/js/app.js": (e, t, n) => {
      "use strict";
      n.r(t);
      var r = n("./src/js/data/config.js"),
        a = n("./src/js/utils/detector.js"),
        o = n("./src/js/app/main.js");
      n("./src/css/app.scss");
      console.log("----- RUNNING IN DEV ENVIRONMENT! -----"),
        (r.default.isDev = !0),
        (function () {
          if (a.default.webgl) {
            var e = document.getElementById("appContainer");
            new o.default(e);
          } else a.default.addGetWebGLMessage();
        })();
    },
    "./src/js/app/components/camera.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => i });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/data/config.js");
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var o = t.domElement.width,
            i = t.domElement.height;
          (this.threeCamera = new r.PerspectiveCamera(
            a.default.camera.fov,
            o / i,
            a.default.camera.near,
            a.default.camera.far
          )),
            this.threeCamera.position.set(
              a.default.camera.posX,
              a.default.camera.posY,
              a.default.camera.posZ
            ),
            this.updateSize(t),
            window.addEventListener(
              "resize",
              function () {
                return n.updateSize(t);
              },
              !1
            );
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "updateSize",
              value: function (e) {
                (this.threeCamera.aspect =
                  e.domElement.width / e.domElement.height),
                  this.threeCamera.updateProjectionMatrix();
              },
            },
          ]) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })();
    },
    "./src/js/app/components/controls.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/utils/orbitControls.js"),
        o = n.n(a),
        i = n("./src/js/data/config.js");
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var l = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
          var a = new (o())(r);
          (this.threeControls = new a(t, n)), this.init();
        }
        var t, n, a;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                this.threeControls.target.set(
                  i.default.controls.target.x,
                  i.default.controls.target.y,
                  i.default.controls.target.z
                ),
                  (this.threeControls.autoRotate =
                    i.default.controls.autoRotate),
                  (this.threeControls.autoRotateSpeed =
                    i.default.controls.autoRotateSpeed),
                  (this.threeControls.rotateSpeed =
                    i.default.controls.rotateSpeed),
                  (this.threeControls.zoomSpeed = i.default.controls.zoomSpeed),
                  (this.threeControls.minDistance =
                    i.default.controls.minDistance),
                  (this.threeControls.maxDistance =
                    i.default.controls.maxDistance),
                  (this.threeControls.minPolarAngle =
                    i.default.controls.minPolarAngle),
                  (this.threeControls.maxPolarAngle =
                    i.default.controls.maxPolarAngle),
                  (this.threeControls.enableDamping =
                    i.default.controls.enableDamping),
                  (this.threeControls.enableZoom =
                    i.default.controls.enableZoom),
                  (this.threeControls.dampingFactor =
                    i.default.controls.dampingFactor);
              },
            },
          ]) && s(t.prototype, n),
          a && s(t, a),
          e
        );
      })();
    },
    "./src/js/app/components/geometry.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/app/components/material.js"),
        o = n("./src/js/data/config.js");
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return s(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return s(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return s(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var c = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.scene = t),
            (this.geo = null);
        }
        var t, n, s;
        return (
          (t = e),
          (n = [
            {
              key: "make",
              value: function (e) {
                var t = this;
                return "plane" === e
                  ? function (e, n) {
                      var a =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 1,
                        o =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : 1;
                      t.geo = new r.PlaneGeometry(e, n, a, o);
                    }
                  : "sphere" === e
                  ? function (e) {
                      var n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 32,
                        a =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 32;
                      t.geo = new r.SphereGeometry(e, n, a);
                    }
                  : void 0;
              },
            },
            {
              key: "place",
              value: function (e, t) {
                var n,
                  s,
                  l = new a.default(15658734).standard,
                  c = new r.Mesh(this.geo, l);
                (n = c.position).set.apply(n, i(e)),
                  (s = c.rotation).set.apply(s, i(t)),
                  o.default.shadow.enabled && (c.receiveShadow = !0),
                  this.scene.add(c);
              },
            },
          ]) && l(t.prototype, n),
          s && l(t, s),
          e
        );
      })();
    },
    "./src/js/app/components/light.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => i });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/data/config.js");
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.scene = t),
            this.init();
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "init",
              value: function () {
                (this.ambientLight = new r.AmbientLight(
                  a.default.ambientLight.color
                )),
                  (this.ambientLight.visible = a.default.ambientLight.enabled),
                  (this.pointLight = new r.PointLight(
                    a.default.pointLight.color,
                    a.default.pointLight.intensity,
                    a.default.pointLight.distance
                  )),
                  this.pointLight.position.set(
                    a.default.pointLight.x,
                    a.default.pointLight.y,
                    a.default.pointLight.z
                  ),
                  (this.pointLight.visible = a.default.pointLight.enabled),
                  (this.directionalLight = new r.DirectionalLight(
                    a.default.directionalLight.color,
                    a.default.directionalLight.intensity
                  )),
                  this.directionalLight.position.set(
                    a.default.directionalLight.x,
                    a.default.directionalLight.y,
                    a.default.directionalLight.z
                  ),
                  (this.directionalLight.visible =
                    a.default.directionalLight.enabled),
                  (this.directionalLight.castShadow = a.default.shadow.enabled),
                  (this.directionalLight.shadow.bias = a.default.shadow.bias),
                  (this.directionalLight.shadow.camera.near =
                    a.default.shadow.near),
                  (this.directionalLight.shadow.camera.far =
                    a.default.shadow.far),
                  (this.directionalLight.shadow.camera.left =
                    a.default.shadow.left),
                  (this.directionalLight.shadow.camera.right =
                    a.default.shadow.right),
                  (this.directionalLight.shadow.camera.top =
                    a.default.shadow.top),
                  (this.directionalLight.shadow.camera.bottom =
                    a.default.shadow.bottom),
                  (this.directionalLight.shadow.mapSize.width =
                    a.default.shadow.mapWidth),
                  (this.directionalLight.shadow.mapSize.height =
                    a.default.shadow.mapHeight),
                  a.default.isDev &&
                    ((this.directionalLightHelper = new r.CameraHelper(
                      this.directionalLight.shadow.camera
                    )),
                    (this.directionalLightHelper.visible =
                      a.default.shadow.helperEnabled)),
                  (this.hemiLight = new r.HemisphereLight(
                    a.default.hemiLight.color,
                    a.default.hemiLight.groundColor,
                    a.default.hemiLight.intensity
                  )),
                  this.hemiLight.position.set(
                    a.default.hemiLight.x,
                    a.default.hemiLight.y,
                    a.default.hemiLight.z
                  ),
                  (this.hemiLight.visible = a.default.hemiLight.enabled);
              },
            },
            {
              key: "place",
              value: function (e) {
                switch (e) {
                  case "ambient":
                    this.scene.add(this.ambientLight);
                    break;
                  case "directional":
                    this.scene.add(this.directionalLight),
                      a.default.isDev &&
                        this.scene.add(this.directionalLightHelper);
                    break;
                  case "point":
                    this.scene.add(this.pointLight);
                    break;
                  case "hemi":
                    this.scene.add(this.hemiLight);
                }
              },
            },
          ]) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })();
    },
    "./src/js/app/components/material.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var r = n("./node_modules/three/build/three.module.js");
      var a = function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.basic = new r.MeshBasicMaterial({
            color: t,
            side: r.DoubleSide,
          })),
          (this.standard = new r.MeshStandardMaterial({
            color: t,
            shading: r.FlatShading,
            roughness: 1,
            metalness: 0,
            side: r.DoubleSide,
          })),
          (this.wire = new r.MeshBasicMaterial({ wireframe: !0 }));
      };
    },
    "./src/js/app/components/renderer.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => i });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/data/config.js");
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function () {
        function e(t, n) {
          var o = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.scene = t),
            (this.container = n),
            (this.threeRenderer = new r.WebGLRenderer({ antialias: !0 })),
            this.threeRenderer.setClearColor(t.fog.color),
            this.threeRenderer.setPixelRatio(window.devicePixelRatio),
            n.appendChild(this.threeRenderer.domElement),
            (this.threeRenderer.shadowMap.enabled = !0),
            (this.threeRenderer.shadowMap.type = r.PCFSoftShadowMap),
            (a.default.maxAnisotropy = this.threeRenderer.capabilities.getMaxAnisotropy()),
            this.updateSize(),
            document.addEventListener(
              "DOMContentLoaded",
              function () {
                return o.updateSize();
              },
              !1
            ),
            window.addEventListener(
              "resize",
              function () {
                return o.updateSize();
              },
              !1
            );
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "updateSize",
              value: function () {
                this.threeRenderer.setSize(
                  this.container.offsetWidth,
                  this.container.offsetHeight
                );
              },
            },
            {
              key: "render",
              value: function (e, t) {
                this.threeRenderer.render(e, t);
              },
            },
          ]) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })();
    },
    "./src/js/app/helpers/meshHelper.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => i });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/app/helpers/vertexNormalsHelper.js");
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var i = (function () {
        function e(t, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.mesh = n),
            (this.scene = t);
          var o = new r.WireframeGeometry(this.mesh.geometry);
          (this.wireLine = new r.LineSegments(o)),
            (this.wireLine.material.depthTest = !1),
            (this.wireLine.material.opacity = 0.25),
            (this.wireLine.material.transparent = !0);
          var i = new r.EdgesGeometry(this.mesh.geometry);
          (this.edgesLine = new r.LineSegments(i)),
            (this.edgesLine.material.depthTest = !1),
            (this.edgesLine.material.opacity = 0.25),
            (this.edgesLine.material.transparent = !0),
            (this.vertexHelper = new a.VertexNormalsHelper(this.mesh, 2)),
            (this.boxHelper = new r.BoxHelper(this.mesh));
        }
        var t, n, i;
        return (
          (t = e),
          (n = [
            {
              key: "enable",
              value: function () {
                this.mesh.add(this.wireLine),
                  this.mesh.add(this.edgesLine),
                  this.scene.add(this.vertexHelper),
                  this.scene.add(this.boxHelper);
              },
            },
            {
              key: "disable",
              value: function () {
                this.mesh.remove(this.wireLine),
                  this.mesh.remove(this.edgesLine),
                  this.scene.remove(this.vertexHelper),
                  this.scene.remove(this.boxHelper);
              },
            },
          ]) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })();
    },
    "./src/js/app/helpers/stats.js": (e, t, n) => {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a, o, i, s;
      n.r(t), n.d(t, { default: () => l });
      var l = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.renderer = t);
        }
        var t, n, l;
        return (
          (t = e),
          (l = [
            {
              key: "start",
              value: function () {
                a("frame").start(),
                  i.start(),
                  a("rAF").tick(),
                  a("FPS").frame(),
                  a("render").start();
              },
            },
            {
              key: "end",
              value: function () {
                a("render").end(),
                  a("frame").end(),
                  a("rStats").start(),
                  a().update(),
                  a("rStats").end();
              },
            },
          ]),
          (n = [
            {
              key: "setUp",
              value: function () {
                (o = new BrowserStats()),
                  (i = new glStats()),
                  (s = new threeStats(this.renderer.threeRenderer)),
                  (a = new rStats({
                    CSSPath: "./css/",
                    userTimingAPI: !0,
                    values: {
                      frame: {
                        caption: "Total frame time (ms)",
                        over: 16,
                        average: !0,
                        avgMs: 100,
                      },
                      fps: { caption: "Framerate (FPS)", below: 30 },
                      calls: { caption: "Calls (three.js)", over: 3e3 },
                      raf: {
                        caption: "Time since last rAF (ms)",
                        average: !0,
                        avgMs: 100,
                      },
                      rstats: {
                        caption: "rStats update (ms)",
                        average: !0,
                        avgMs: 100,
                      },
                      texture: { caption: "GenTex", average: !0, avgMs: 100 },
                    },
                    groups: [
                      { caption: "Framerate", values: ["fps", "raf"] },
                      {
                        caption: "Frame Budget",
                        values: ["frame", "texture", "setup", "render"],
                      },
                    ],
                    fractions: [
                      { base: "frame", steps: ["texture", "setup", "render"] },
                    ],
                    plugins: [o, s],
                  }));
              },
            },
          ]) && r(t.prototype, n),
          l && r(t, l),
          e
        );
      })();
    },
    "./src/js/app/helpers/vertexNormalsHelper.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { VertexNormalsHelper: () => l });
      var r = n("./node_modules/three/build/three.module.js"),
        a = new r.Vector3(),
        o = new r.Vector3(),
        i = new r.Matrix3(),
        s = ["a", "b", "c"];
      function l(e, t, n) {
        (this.object = e), (this.size = void 0 !== t ? t : 0.1);
        var a = void 0 !== n ? n : 16711680,
          o = 0,
          i = this.object.geometry;
        i && i.isGeometry
          ? (o = 3 * i.faces.length)
          : i && i.isBufferGeometry && (o = i.attributes.normal.count);
        var s = new r.BufferGeometry(),
          l = new r.Float32BufferAttribute(2 * o * 3, 3);
        s.setAttribute("position", l),
          r.LineSegments.call(
            this,
            s,
            new r.LineBasicMaterial({ color: a, toneMapped: !1 })
          ),
          (this.type = "VertexNormalsHelper"),
          (this.matrixAutoUpdate = !1),
          this.update();
      }
      (l.prototype = Object.create(r.LineSegments.prototype)),
        (l.prototype.constructor = l),
        (l.prototype.update = function () {
          var e;
          this.object.updateMatrixWorld(!0),
            i.getNormalMatrix(this.object.matrixWorld);
          var t = this.object.matrixWorld,
            n = this.geometry.attributes.position,
            r = this.object.geometry;
          if (r && r.isGeometry) {
            var l = r.vertices,
              c = r.faces;
            e = 0;
            for (var u = 0, d = c.length; u < d; u++)
              for (
                var h = c[u], f = 0, m = h.vertexNormals.length;
                f < m;
                f++
              ) {
                var p = l[h[s[f]]],
                  g = h.vertexNormals[f];
                a.copy(p).applyMatrix4(t),
                  o
                    .copy(g)
                    .applyMatrix3(i)
                    .normalize()
                    .multiplyScalar(this.size)
                    .add(a),
                  n.setXYZ(e, a.x, a.y, a.z),
                  (e += 1),
                  n.setXYZ(e, o.x, o.y, o.z),
                  (e += 1);
              }
          } else if (r && r.isBufferGeometry) {
            var v = r.attributes.position,
              b = r.attributes.normal;
            e = 0;
            for (var y = 0, w = v.count; y < w; y++)
              a.set(v.getX(y), v.getY(y), v.getZ(y)).applyMatrix4(t),
                o.set(b.getX(y), b.getY(y), b.getZ(y)),
                o.applyMatrix3(i).normalize().multiplyScalar(this.size).add(a),
                n.setXYZ(e, a.x, a.y, a.z),
                (e += 1),
                n.setXYZ(e, o.x, o.y, o.z),
                (e += 1);
          }
          n.needsUpdate = !0;
        });
    },
    "./src/js/app/loaders/GLTFLoader.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { GLTFLoader: () => o });
      var r = n("./node_modules/three/build/three.module.js");
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var o = (function () {
        function e(e) {
          r.Loader.call(this, e),
            (this.dracoLoader = null),
            (this.ddsLoader = null);
        }
        function t() {
          var e = {};
          return {
            get: function (t) {
              return e[t];
            },
            add: function (t, n) {
              e[t] = n;
            },
            remove: function (t) {
              delete e[t];
            },
            removeAll: function () {
              e = {};
            },
          };
        }
        e.prototype = Object.assign(Object.create(r.Loader.prototype), {
          constructor: e,
          load: function (e, t, n, a) {
            var o,
              i = this;
            (o =
              "" !== this.resourcePath
                ? this.resourcePath
                : "" !== this.path
                ? this.path
                : r.LoaderUtils.extractUrlBase(e)),
              i.manager.itemStart(e);
            var s = function (t) {
                a ? a(t) : console.error(t),
                  i.manager.itemError(e),
                  i.manager.itemEnd(e);
              },
              l = new r.FileLoader(i.manager);
            l.setPath(this.path),
              l.setResponseType("arraybuffer"),
              "use-credentials" === i.crossOrigin && l.setWithCredentials(!0),
              l.load(
                e,
                function (n) {
                  try {
                    i.parse(
                      n,
                      o,
                      function (n) {
                        t(n), i.manager.itemEnd(e);
                      },
                      s
                    );
                  } catch (e) {
                    s(e);
                  }
                },
                n,
                s
              );
          },
          setDRACOLoader: function (e) {
            return (this.dracoLoader = e), this;
          },
          setDDSLoader: function (e) {
            return (this.ddsLoader = e), this;
          },
          parse: function (e, t, a, u) {
            var d,
              p = {};
            if ("string" == typeof e) d = e;
            else if (r.LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === c) {
              try {
                p[n.KHR_BINARY_GLTF] = new h(e);
              } catch (e) {
                return void (u && u(e));
              }
              d = p[n.KHR_BINARY_GLTF].content;
            } else d = r.LoaderUtils.decodeText(new Uint8Array(e));
            var b = JSON.parse(d);
            if (void 0 === b.asset || b.asset.version[0] < 2)
              u &&
                u(
                  new Error(
                    "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                  )
                );
            else {
              if (b.extensionsUsed)
                for (var y = 0; y < b.extensionsUsed.length; ++y) {
                  var w = b.extensionsUsed[y],
                    L = b.extensionsRequired || [];
                  switch (w) {
                    case n.KHR_LIGHTS_PUNCTUAL:
                      p[w] = new i(b);
                      break;
                    case n.KHR_MATERIALS_CLEARCOAT:
                      p[w] = new l();
                      break;
                    case n.KHR_MATERIALS_UNLIT:
                      p[w] = new s();
                      break;
                    case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                      p[w] = new g();
                      break;
                    case n.KHR_DRACO_MESH_COMPRESSION:
                      p[w] = new f(b, this.dracoLoader);
                      break;
                    case n.MSFT_TEXTURE_DDS:
                      p[w] = new o(this.ddsLoader);
                      break;
                    case n.KHR_TEXTURE_TRANSFORM:
                      p[w] = new m();
                      break;
                    case n.KHR_MESH_QUANTIZATION:
                      p[w] = new v();
                      break;
                    default:
                      L.indexOf(w) >= 0 &&
                        console.warn(
                          'THREE.GLTFLoader: Unknown extension "' + w + '".'
                        );
                  }
                }
              new N(b, p, {
                path: t || this.resourcePath || "",
                crossOrigin: this.crossOrigin,
                manager: this.manager,
              }).parse(a, u);
            }
          },
        });
        var n = {
          KHR_BINARY_GLTF: "KHR_binary_glTF",
          KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
          KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
          KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
          KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
            "KHR_materials_pbrSpecularGlossiness",
          KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
          KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
          KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
          MSFT_TEXTURE_DDS: "MSFT_texture_dds",
        };
        function o(e) {
          if (!e)
            throw new Error(
              "THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader"
            );
          (this.name = n.MSFT_TEXTURE_DDS), (this.ddsLoader = e);
        }
        function i(e) {
          this.name = n.KHR_LIGHTS_PUNCTUAL;
          var t = (e.extensions && e.extensions[n.KHR_LIGHTS_PUNCTUAL]) || {};
          this.lightDefs = t.lights || [];
        }
        function s() {
          this.name = n.KHR_MATERIALS_UNLIT;
        }
        function l() {
          this.name = n.KHR_MATERIALS_CLEARCOAT;
        }
        (i.prototype.loadLight = function (e) {
          var t,
            n = this.lightDefs[e],
            a = new r.Color(16777215);
          void 0 !== n.color && a.fromArray(n.color);
          var o = void 0 !== n.range ? n.range : 0;
          switch (n.type) {
            case "directional":
              (t = new r.DirectionalLight(a)).target.position.set(0, 0, -1),
                t.add(t.target);
              break;
            case "point":
              (t = new r.PointLight(a)).distance = o;
              break;
            case "spot":
              ((t = new r.SpotLight(a)).distance = o),
                (n.spot = n.spot || {}),
                (n.spot.innerConeAngle =
                  void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0),
                (n.spot.outerConeAngle =
                  void 0 !== n.spot.outerConeAngle
                    ? n.spot.outerConeAngle
                    : Math.PI / 4),
                (t.angle = n.spot.outerConeAngle),
                (t.penumbra =
                  1 - n.spot.innerConeAngle / n.spot.outerConeAngle),
                t.target.position.set(0, 0, -1),
                t.add(t.target);
              break;
            default:
              throw new Error(
                'THREE.GLTFLoader: Unexpected light type, "' + n.type + '".'
              );
          }
          return (
            t.position.set(0, 0, 0),
            (t.decay = 2),
            void 0 !== n.intensity && (t.intensity = n.intensity),
            (t.name = n.name || "light_" + e),
            Promise.resolve(t)
          );
        }),
          (s.prototype.getMaterialType = function () {
            return r.MeshBasicMaterial;
          }),
          (s.prototype.extendParams = function (e, t, n) {
            var a = [];
            (e.color = new r.Color(1, 1, 1)), (e.opacity = 1);
            var o = t.pbrMetallicRoughness;
            if (o) {
              if (Array.isArray(o.baseColorFactor)) {
                var i = o.baseColorFactor;
                e.color.fromArray(i), (e.opacity = i[3]);
              }
              void 0 !== o.baseColorTexture &&
                a.push(n.assignTexture(e, "map", o.baseColorTexture));
            }
            return Promise.all(a);
          }),
          (l.prototype.getMaterialType = function () {
            return r.MeshPhysicalMaterial;
          }),
          (l.prototype.extendParams = function (e, t, n) {
            var a = [],
              o = t.extensions[this.name];
            if (
              (void 0 !== o.clearcoatFactor &&
                (e.clearcoat = o.clearcoatFactor),
              void 0 !== o.clearcoatTexture &&
                a.push(n.assignTexture(e, "clearcoatMap", o.clearcoatTexture)),
              void 0 !== o.clearcoatRoughnessFactor &&
                (e.clearcoatRoughness = o.clearcoatRoughnessFactor),
              void 0 !== o.clearcoatRoughnessTexture &&
                a.push(
                  n.assignTexture(
                    e,
                    "clearcoatRoughnessMap",
                    o.clearcoatRoughnessTexture
                  )
                ),
              void 0 !== o.clearcoatNormalTexture &&
                (a.push(
                  n.assignTexture(
                    e,
                    "clearcoatNormalMap",
                    o.clearcoatNormalTexture
                  )
                ),
                void 0 !== o.clearcoatNormalTexture.scale))
            ) {
              var i = o.clearcoatNormalTexture.scale;
              e.clearcoatNormalScale = new r.Vector2(i, i);
            }
            return Promise.all(a);
          });
        var c = "glTF",
          u = 1313821514,
          d = 5130562;
        function h(e) {
          (this.name = n.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          var t = new DataView(e, 0, 12);
          if (
            ((this.header = {
              magic: r.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== c)
          )
            throw new Error(
              "THREE.GLTFLoader: Unsupported glTF-Binary header."
            );
          if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
          for (var a = new DataView(e, 12), o = 0; o < a.byteLength; ) {
            var i = a.getUint32(o, !0);
            o += 4;
            var s = a.getUint32(o, !0);
            if (((o += 4), s === u)) {
              var l = new Uint8Array(e, 12 + o, i);
              this.content = r.LoaderUtils.decodeText(l);
            } else if (s === d) {
              var h = 12 + o;
              this.body = e.slice(h, h + i);
            }
            o += i;
          }
          if (null === this.content)
            throw new Error("THREE.GLTFLoader: JSON content not found.");
        }
        function f(e, t) {
          if (!t)
            throw new Error(
              "THREE.GLTFLoader: No DRACOLoader instance provided."
            );
          (this.name = n.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        function m() {
          this.name = n.KHR_TEXTURE_TRANSFORM;
        }
        function p(e) {
          r.MeshStandardMaterial.call(this),
            (this.isGLTFSpecularGlossinessMaterial = !0);
          var t = [
              "#ifdef USE_SPECULARMAP",
              "\tuniform sampler2D specularMap;",
              "#endif",
            ].join("\n"),
            n = [
              "#ifdef USE_GLOSSINESSMAP",
              "\tuniform sampler2D glossinessMap;",
              "#endif",
            ].join("\n"),
            a = [
              "vec3 specularFactor = specular;",
              "#ifdef USE_SPECULARMAP",
              "\tvec4 texelSpecular = texture2D( specularMap, vUv );",
              "\ttexelSpecular = sRGBToLinear( texelSpecular );",
              "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
              "\tspecularFactor *= texelSpecular.rgb;",
              "#endif",
            ].join("\n"),
            o = [
              "float glossinessFactor = glossiness;",
              "#ifdef USE_GLOSSINESSMAP",
              "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );",
              "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
              "\tglossinessFactor *= texelGlossiness.a;",
              "#endif",
            ].join("\n"),
            i = [
              "PhysicalMaterial material;",
              "material.diffuseColor = diffuseColor.rgb;",
              "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
              "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
              "material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.",
              "material.specularRoughness += geometryRoughness;",
              "material.specularRoughness = min( material.specularRoughness, 1.0 );",
              "material.specularColor = specularFactor.rgb;",
            ].join("\n"),
            s = {
              specular: { value: new r.Color().setHex(16777215) },
              glossiness: { value: 1 },
              specularMap: { value: null },
              glossinessMap: { value: null },
            };
          (this._extraUniforms = s),
            (this.onBeforeCompile = function (e) {
              for (var r in s) e.uniforms[r] = s[r];
              (e.fragmentShader = e.fragmentShader.replace(
                "uniform float roughness;",
                "uniform vec3 specular;"
              )),
                (e.fragmentShader = e.fragmentShader.replace(
                  "uniform float metalness;",
                  "uniform float glossiness;"
                )),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <roughnessmap_pars_fragment>",
                  t
                )),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <metalnessmap_pars_fragment>",
                  n
                )),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <roughnessmap_fragment>",
                  a
                )),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <metalnessmap_fragment>",
                  o
                )),
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <lights_physical_fragment>",
                  i
                ));
            }),
            Object.defineProperties(this, {
              specular: {
                get: function () {
                  return s.specular.value;
                },
                set: function (e) {
                  s.specular.value = e;
                },
              },
              specularMap: {
                get: function () {
                  return s.specularMap.value;
                },
                set: function (e) {
                  s.specularMap.value = e;
                },
              },
              glossiness: {
                get: function () {
                  return s.glossiness.value;
                },
                set: function (e) {
                  s.glossiness.value = e;
                },
              },
              glossinessMap: {
                get: function () {
                  return s.glossinessMap.value;
                },
                set: function (e) {
                  (s.glossinessMap.value = e),
                    e
                      ? ((this.defines.USE_GLOSSINESSMAP = ""),
                        (this.defines.USE_ROUGHNESSMAP = ""))
                      : (delete this.defines.USE_ROUGHNESSMAP,
                        delete this.defines.USE_GLOSSINESSMAP);
                },
              },
            }),
            delete this.metalness,
            delete this.roughness,
            delete this.metalnessMap,
            delete this.roughnessMap,
            this.setValues(e);
        }
        function g() {
          return {
            name: n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
            specularGlossinessParams: [
              "color",
              "map",
              "lightMap",
              "lightMapIntensity",
              "aoMap",
              "aoMapIntensity",
              "emissive",
              "emissiveIntensity",
              "emissiveMap",
              "bumpMap",
              "bumpScale",
              "normalMap",
              "normalMapType",
              "displacementMap",
              "displacementScale",
              "displacementBias",
              "specularMap",
              "specular",
              "glossinessMap",
              "glossiness",
              "alphaMap",
              "envMap",
              "envMapIntensity",
              "refractionRatio",
            ],
            getMaterialType: function () {
              return p;
            },
            extendParams: function (e, t, n) {
              var a = t.extensions[this.name];
              (e.color = new r.Color(1, 1, 1)), (e.opacity = 1);
              var o = [];
              if (Array.isArray(a.diffuseFactor)) {
                var i = a.diffuseFactor;
                e.color.fromArray(i), (e.opacity = i[3]);
              }
              if (
                (void 0 !== a.diffuseTexture &&
                  o.push(n.assignTexture(e, "map", a.diffuseTexture)),
                (e.emissive = new r.Color(0, 0, 0)),
                (e.glossiness =
                  void 0 !== a.glossinessFactor ? a.glossinessFactor : 1),
                (e.specular = new r.Color(1, 1, 1)),
                Array.isArray(a.specularFactor) &&
                  e.specular.fromArray(a.specularFactor),
                void 0 !== a.specularGlossinessTexture)
              ) {
                var s = a.specularGlossinessTexture;
                o.push(n.assignTexture(e, "glossinessMap", s)),
                  o.push(n.assignTexture(e, "specularMap", s));
              }
              return Promise.all(o);
            },
            createMaterial: function (e) {
              var t = new p(e);
              return (
                (t.fog = !0),
                (t.color = e.color),
                (t.map = void 0 === e.map ? null : e.map),
                (t.lightMap = null),
                (t.lightMapIntensity = 1),
                (t.aoMap = void 0 === e.aoMap ? null : e.aoMap),
                (t.aoMapIntensity = 1),
                (t.emissive = e.emissive),
                (t.emissiveIntensity = 1),
                (t.emissiveMap =
                  void 0 === e.emissiveMap ? null : e.emissiveMap),
                (t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap),
                (t.bumpScale = 1),
                (t.normalMap = void 0 === e.normalMap ? null : e.normalMap),
                (t.normalMapType = r.TangentSpaceNormalMap),
                e.normalScale && (t.normalScale = e.normalScale),
                (t.displacementMap = null),
                (t.displacementScale = 1),
                (t.displacementBias = 0),
                (t.specularMap =
                  void 0 === e.specularMap ? null : e.specularMap),
                (t.specular = e.specular),
                (t.glossinessMap =
                  void 0 === e.glossinessMap ? null : e.glossinessMap),
                (t.glossiness = e.glossiness),
                (t.alphaMap = null),
                (t.envMap = void 0 === e.envMap ? null : e.envMap),
                (t.envMapIntensity = 1),
                (t.refractionRatio = 0.98),
                t
              );
            },
          };
        }
        function v() {
          this.name = n.KHR_MESH_QUANTIZATION;
        }
        function b(e, t, n, a) {
          r.Interpolant.call(this, e, t, n, a);
        }
        (f.prototype.decodePrimitive = function (e, t) {
          var n = this.json,
            r = this.dracoLoader,
            a = e.extensions[this.name].bufferView,
            o = e.extensions[this.name].attributes,
            i = {},
            s = {},
            l = {};
          for (var c in o) {
            var u = j[c] || c.toLowerCase();
            i[u] = o[c];
          }
          for (c in e.attributes) {
            u = j[c] || c.toLowerCase();
            if (void 0 !== o[c]) {
              var d = n.accessors[e.attributes[c]],
                h = S[d.componentType];
              (l[u] = h), (s[u] = !0 === d.normalized);
            }
          }
          return t.getDependency("bufferView", a).then(function (e) {
            return new Promise(function (t) {
              r.decodeDracoFile(
                e,
                function (e) {
                  for (var n in e.attributes) {
                    var r = e.attributes[n],
                      a = s[n];
                    void 0 !== a && (r.normalized = a);
                  }
                  t(e);
                },
                i,
                l
              );
            });
          });
        }),
          (m.prototype.extendTexture = function (e, t) {
            return (
              (e = e.clone()),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              void 0 !== t.texCoord &&
                console.warn(
                  'THREE.GLTFLoader: Custom UV sets in "' +
                    this.name +
                    '" extension not yet supported.'
                ),
              (e.needsUpdate = !0),
              e
            );
          }),
          (p.prototype = Object.create(r.MeshStandardMaterial.prototype)),
          (p.prototype.constructor = p),
          (p.prototype.copy = function (e) {
            return (
              r.MeshStandardMaterial.prototype.copy.call(this, e),
              (this.specularMap = e.specularMap),
              this.specular.copy(e.specular),
              (this.glossinessMap = e.glossinessMap),
              (this.glossiness = e.glossiness),
              delete this.metalness,
              delete this.roughness,
              delete this.metalnessMap,
              delete this.roughnessMap,
              this
            );
          }),
          (b.prototype = Object.create(r.Interpolant.prototype)),
          (b.prototype.constructor = b),
          (b.prototype.copySampleValue_ = function (e) {
            for (
              var t = this.resultBuffer,
                n = this.sampleValues,
                r = this.valueSize,
                a = e * r * 3 + r,
                o = 0;
              o !== r;
              o++
            )
              t[o] = n[a + o];
            return t;
          }),
          (b.prototype.beforeStart_ = b.prototype.copySampleValue_),
          (b.prototype.afterEnd_ = b.prototype.copySampleValue_),
          (b.prototype.interpolate_ = function (e, t, n, r) {
            for (
              var a = this.resultBuffer,
                o = this.sampleValues,
                i = this.valueSize,
                s = 2 * i,
                l = 3 * i,
                c = r - t,
                u = (n - t) / c,
                d = u * u,
                h = d * u,
                f = e * l,
                m = f - l,
                p = -2 * h + 3 * d,
                g = h - d,
                v = 1 - p,
                b = g - d + u,
                y = 0;
              y !== i;
              y++
            ) {
              var w = o[m + y + i],
                L = o[m + y + s] * c,
                E = o[f + y + i],
                M = o[f + y] * c;
              a[y] = v * w + b * L + p * E + g * M;
            }
            return a;
          });
        var y = 0,
          w = 1,
          L = 2,
          E = 3,
          M = 4,
          T = 5,
          x = 6,
          S = {
            5120: Int8Array,
            5121: Uint8Array,
            5122: Int16Array,
            5123: Uint16Array,
            5125: Uint32Array,
            5126: Float32Array,
          },
          R = {
            9728: r.NearestFilter,
            9729: r.LinearFilter,
            9984: r.NearestMipmapNearestFilter,
            9985: r.LinearMipmapNearestFilter,
            9986: r.NearestMipmapLinearFilter,
            9987: r.LinearMipmapLinearFilter,
          },
          A = {
            33071: r.ClampToEdgeWrapping,
            33648: r.MirroredRepeatWrapping,
            10497: r.RepeatWrapping,
          },
          C = {
            SCALAR: 1,
            VEC2: 2,
            VEC3: 3,
            VEC4: 4,
            MAT2: 4,
            MAT3: 9,
            MAT4: 16,
          },
          j = {
            POSITION: "position",
            NORMAL: "normal",
            TANGENT: "tangent",
            TEXCOORD_0: "uv",
            TEXCOORD_1: "uv2",
            COLOR_0: "color",
            WEIGHTS_0: "skinWeight",
            JOINTS_0: "skinIndex",
          },
          P = {
            scale: "scale",
            translation: "position",
            rotation: "quaternion",
            weights: "morphTargetInfluences",
          },
          _ = {
            CUBICSPLINE: void 0,
            LINEAR: r.InterpolateLinear,
            STEP: r.InterpolateDiscrete,
          },
          F = "OPAQUE",
          O = "MASK",
          k = "BLEND",
          H = { "image/png": r.RGBAFormat, "image/jpeg": r.RGBFormat };
        function I(e, t) {
          return "string" != typeof e || "" === e
            ? ""
            : (/^https?:\/\//i.test(t) &&
                /^\//.test(e) &&
                (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
              /^(https?:)?\/\//i.test(e) ||
              /^data:.*,.*$/i.test(e) ||
              /^blob:.*$/i.test(e)
                ? e
                : t + e);
        }
        function U(e, t, n) {
          for (var r in n.extensions)
            void 0 === e[r] &&
              ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
              (t.userData.gltfExtensions[r] = n.extensions[r]));
        }
        function D(e, t) {
          void 0 !== t.extras &&
            ("object" === a(t.extras)
              ? Object.assign(e.userData, t.extras)
              : console.warn(
                  "THREE.GLTFLoader: Ignoring primitive type .extras, " +
                    t.extras
                ));
        }
        function G(e, t) {
          if ((e.updateMorphTargets(), void 0 !== t.weights))
            for (var n = 0, r = t.weights.length; n < r; n++)
              e.morphTargetInfluences[n] = t.weights[n];
          if (t.extras && Array.isArray(t.extras.targetNames)) {
            var a = t.extras.targetNames;
            if (e.morphTargetInfluences.length === a.length) {
              e.morphTargetDictionary = {};
              for (n = 0, r = a.length; n < r; n++)
                e.morphTargetDictionary[a[n]] = n;
            } else
              console.warn(
                "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
              );
          }
        }
        function B(e) {
          for (
            var t = "", n = Object.keys(e).sort(), r = 0, a = n.length;
            r < a;
            r++
          )
            t += n[r] + ":" + e[n[r]] + ";";
          return t;
        }
        function N(e, n, a) {
          (this.json = e || {}),
            (this.extensions = n || {}),
            (this.options = a || {}),
            (this.cache = new t()),
            (this.primitiveCache = {}),
            (this.textureLoader = new r.TextureLoader(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            (this.fileLoader = new r.FileLoader(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        function z(e, t, n) {
          var a = t.attributes,
            o = [];
          function i(t, r) {
            return n.getDependency("accessor", t).then(function (t) {
              e.setAttribute(r, t);
            });
          }
          for (var s in a) {
            var l = j[s] || s.toLowerCase();
            l in e.attributes || o.push(i(a[s], l));
          }
          if (void 0 !== t.indices && !e.index) {
            var c = n.getDependency("accessor", t.indices).then(function (t) {
              e.setIndex(t);
            });
            o.push(c);
          }
          return (
            D(e, t),
            (function (e, t, n) {
              var a = t.attributes,
                o = new r.Box3();
              if (void 0 !== a.POSITION) {
                var i = (f = n.json.accessors[a.POSITION]).min,
                  s = f.max;
                if (void 0 !== i && void 0 !== s) {
                  o.set(
                    new r.Vector3(i[0], i[1], i[2]),
                    new r.Vector3(s[0], s[1], s[2])
                  );
                  var l = t.targets;
                  if (void 0 !== l) {
                    for (
                      var c = new r.Vector3(),
                        u = new r.Vector3(),
                        d = 0,
                        h = l.length;
                      d < h;
                      d++
                    ) {
                      var f,
                        m = l[d];
                      if (void 0 !== m.POSITION)
                        (i = (f = n.json.accessors[m.POSITION]).min),
                          (s = f.max),
                          void 0 !== i && void 0 !== s
                            ? (u.setX(Math.max(Math.abs(i[0]), Math.abs(s[0]))),
                              u.setY(Math.max(Math.abs(i[1]), Math.abs(s[1]))),
                              u.setZ(Math.max(Math.abs(i[2]), Math.abs(s[2]))),
                              c.max(u))
                            : console.warn(
                                "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                              );
                    }
                    o.expandByVector(c);
                  }
                  e.boundingBox = o;
                  var p = new r.Sphere();
                  o.getCenter(p.center),
                    (p.radius = o.min.distanceTo(o.max) / 2),
                    (e.boundingSphere = p);
                } else
                  console.warn(
                    "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                  );
              }
            })(e, t, n),
            Promise.all(o).then(function () {
              return void 0 !== t.targets
                ? (function (e, t, n) {
                    for (
                      var r = !1, a = !1, o = 0, i = t.length;
                      o < i &&
                      (void 0 !== (c = t[o]).POSITION && (r = !0),
                      void 0 !== c.NORMAL && (a = !0),
                      !r || !a);
                      o++
                    );
                    if (!r && !a) return Promise.resolve(e);
                    var s = [],
                      l = [];
                    for (o = 0, i = t.length; o < i; o++) {
                      var c = t[o];
                      if (r) {
                        var u =
                          void 0 !== c.POSITION
                            ? n.getDependency("accessor", c.POSITION)
                            : e.attributes.position;
                        s.push(u);
                      }
                      a &&
                        ((u =
                          void 0 !== c.NORMAL
                            ? n.getDependency("accessor", c.NORMAL)
                            : e.attributes.normal),
                        l.push(u));
                    }
                    return Promise.all([Promise.all(s), Promise.all(l)]).then(
                      function (t) {
                        var n = t[0],
                          o = t[1];
                        return (
                          r && (e.morphAttributes.position = n),
                          a && (e.morphAttributes.normal = o),
                          (e.morphTargetsRelative = !0),
                          e
                        );
                      }
                    );
                  })(e, t.targets, n)
                : e;
            })
          );
        }
        function V(e, t) {
          var n = e.getIndex();
          if (null === n) {
            var a = [],
              o = e.getAttribute("position");
            if (void 0 === o)
              return (
                console.error(
                  "THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                e
              );
            for (var i = 0; i < o.count; i++) a.push(i);
            e.setIndex(a), (n = e.getIndex());
          }
          var s = n.count - 2,
            l = [];
          if (t === r.TriangleFanDrawMode)
            for (i = 1; i <= s; i++)
              l.push(n.getX(0)), l.push(n.getX(i)), l.push(n.getX(i + 1));
          else
            for (i = 0; i < s; i++)
              i % 2 == 0
                ? (l.push(n.getX(i)),
                  l.push(n.getX(i + 1)),
                  l.push(n.getX(i + 2)))
                : (l.push(n.getX(i + 2)),
                  l.push(n.getX(i + 1)),
                  l.push(n.getX(i)));
          l.length / 3 !== s &&
            console.error(
              "THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          var c = e.clone();
          return c.setIndex(l), c;
        }
        return (
          (N.prototype.parse = function (e, t) {
            var n = this,
              r = this.json,
              a = this.extensions;
            this.cache.removeAll(),
              this.markDefs(),
              Promise.all([
                this.getDependencies("scene"),
                this.getDependencies("animation"),
                this.getDependencies("camera"),
              ])
                .then(function (t) {
                  var o = {
                    scene: t[0][r.scene || 0],
                    scenes: t[0],
                    animations: t[1],
                    cameras: t[2],
                    asset: r.asset,
                    parser: n,
                    userData: {},
                  };
                  U(a, o, r), D(o, r), e(o);
                })
                .catch(t);
          }),
          (N.prototype.markDefs = function () {
            for (
              var e = this.json.nodes || [],
                t = this.json.skins || [],
                n = this.json.meshes || [],
                r = {},
                a = {},
                o = 0,
                i = t.length;
              o < i;
              o++
            )
              for (var s = t[o].joints, l = 0, c = s.length; l < c; l++)
                e[s[l]].isBone = !0;
            for (var u = 0, d = e.length; u < d; u++) {
              var h = e[u];
              void 0 !== h.mesh &&
                (void 0 === r[h.mesh] && (r[h.mesh] = a[h.mesh] = 0),
                r[h.mesh]++,
                void 0 !== h.skin && (n[h.mesh].isSkinnedMesh = !0));
            }
            (this.json.meshReferences = r), (this.json.meshUses = a);
          }),
          (N.prototype.getDependency = function (e, t) {
            var r = e + ":" + t,
              a = this.cache.get(r);
            if (!a) {
              switch (e) {
                case "scene":
                  a = this.loadScene(t);
                  break;
                case "node":
                  a = this.loadNode(t);
                  break;
                case "mesh":
                  a = this.loadMesh(t);
                  break;
                case "accessor":
                  a = this.loadAccessor(t);
                  break;
                case "bufferView":
                  a = this.loadBufferView(t);
                  break;
                case "buffer":
                  a = this.loadBuffer(t);
                  break;
                case "material":
                  a = this.loadMaterial(t);
                  break;
                case "texture":
                  a = this.loadTexture(t);
                  break;
                case "skin":
                  a = this.loadSkin(t);
                  break;
                case "animation":
                  a = this.loadAnimation(t);
                  break;
                case "camera":
                  a = this.loadCamera(t);
                  break;
                case "light":
                  a = this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                  break;
                default:
                  throw new Error("Unknown type: " + e);
              }
              this.cache.add(r, a);
            }
            return a;
          }),
          (N.prototype.getDependencies = function (e) {
            var t = this.cache.get(e);
            if (!t) {
              var n = this,
                r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
              (t = Promise.all(
                r.map(function (t, r) {
                  return n.getDependency(e, r);
                })
              )),
                this.cache.add(e, t);
            }
            return t;
          }),
          (N.prototype.loadBuffer = function (e) {
            var t = this.json.buffers[e],
              r = this.fileLoader;
            if (t.type && "arraybuffer" !== t.type)
              throw new Error(
                "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
              );
            if (void 0 === t.uri && 0 === e)
              return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
            var a = this.options;
            return new Promise(function (e, n) {
              r.load(I(t.uri, a.path), e, void 0, function () {
                n(
                  new Error(
                    'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
                  )
                );
              });
            });
          }),
          (N.prototype.loadBufferView = function (e) {
            var t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function (e) {
              var n = t.byteLength || 0,
                r = t.byteOffset || 0;
              return e.slice(r, r + n);
            });
          }),
          (N.prototype.loadAccessor = function (e) {
            var t = this,
              n = this.json,
              a = this.json.accessors[e];
            if (void 0 === a.bufferView && void 0 === a.sparse)
              return Promise.resolve(null);
            var o = [];
            return (
              void 0 !== a.bufferView
                ? o.push(this.getDependency("bufferView", a.bufferView))
                : o.push(null),
              void 0 !== a.sparse &&
                (o.push(
                  this.getDependency("bufferView", a.sparse.indices.bufferView)
                ),
                o.push(
                  this.getDependency("bufferView", a.sparse.values.bufferView)
                )),
              Promise.all(o).then(function (e) {
                var o,
                  i,
                  s = e[0],
                  l = C[a.type],
                  c = S[a.componentType],
                  u = c.BYTES_PER_ELEMENT,
                  d = u * l,
                  h = a.byteOffset || 0,
                  f =
                    void 0 !== a.bufferView
                      ? n.bufferViews[a.bufferView].byteStride
                      : void 0,
                  m = !0 === a.normalized;
                if (f && f !== d) {
                  var p = Math.floor(h / f),
                    g =
                      "InterleavedBuffer:" +
                      a.bufferView +
                      ":" +
                      a.componentType +
                      ":" +
                      p +
                      ":" +
                      a.count,
                    v = t.cache.get(g);
                  v ||
                    ((o = new c(s, p * f, (a.count * f) / u)),
                    (v = new r.InterleavedBuffer(o, f / u)),
                    t.cache.add(g, v)),
                    (i = new r.InterleavedBufferAttribute(
                      v,
                      l,
                      (h % f) / u,
                      m
                    ));
                } else (o = null === s ? new c(a.count * l) : new c(s, h, a.count * l)), (i = new r.BufferAttribute(o, l, m));
                if (void 0 !== a.sparse) {
                  var b = C.SCALAR,
                    y = S[a.sparse.indices.componentType],
                    w = a.sparse.indices.byteOffset || 0,
                    L = a.sparse.values.byteOffset || 0,
                    E = new y(e[1], w, a.sparse.count * b),
                    M = new c(e[2], L, a.sparse.count * l);
                  null !== s &&
                    (i = new r.BufferAttribute(
                      i.array.slice(),
                      i.itemSize,
                      i.normalized
                    ));
                  for (var T = 0, x = E.length; T < x; T++) {
                    var R = E[T];
                    if (
                      (i.setX(R, M[T * l]),
                      l >= 2 && i.setY(R, M[T * l + 1]),
                      l >= 3 && i.setZ(R, M[T * l + 2]),
                      l >= 4 && i.setW(R, M[T * l + 3]),
                      l >= 5)
                    )
                      throw new Error(
                        "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                      );
                  }
                }
                return i;
              })
            );
          }),
          (N.prototype.loadTexture = function (e) {
            var t,
              a = this,
              o = this.json,
              i = this.options,
              s = this.textureLoader,
              l = self.URL || self.webkitURL,
              c = o.textures[e],
              u = c.extensions || {},
              d = (t = u[n.MSFT_TEXTURE_DDS]
                ? o.images[u[n.MSFT_TEXTURE_DDS].source]
                : o.images[c.source]).uri,
              h = !1;
            return (
              void 0 !== t.bufferView &&
                (d = a
                  .getDependency("bufferView", t.bufferView)
                  .then(function (e) {
                    h = !0;
                    var n = new Blob([e], { type: t.mimeType });
                    return (d = l.createObjectURL(n));
                  })),
              Promise.resolve(d)
                .then(function (e) {
                  var t = i.manager.getHandler(e);
                  return (
                    t ||
                      (t = u[n.MSFT_TEXTURE_DDS]
                        ? a.extensions[n.MSFT_TEXTURE_DDS].ddsLoader
                        : s),
                    new Promise(function (n, r) {
                      t.load(I(e, i.path), n, void 0, r);
                    })
                  );
                })
                .then(function (e) {
                  !0 === h && l.revokeObjectURL(d),
                    (e.flipY = !1),
                    c.name && (e.name = c.name),
                    t.mimeType in H && (e.format = H[t.mimeType]);
                  var n = (o.samplers || {})[c.sampler] || {};
                  return (
                    (e.magFilter = R[n.magFilter] || r.LinearFilter),
                    (e.minFilter =
                      R[n.minFilter] || r.LinearMipmapLinearFilter),
                    (e.wrapS = A[n.wrapS] || r.RepeatWrapping),
                    (e.wrapT = A[n.wrapT] || r.RepeatWrapping),
                    e
                  );
                })
            );
          }),
          (N.prototype.assignTexture = function (e, t, a) {
            var o = this;
            return this.getDependency("texture", a.index).then(function (i) {
              if (!i.isCompressedTexture)
                switch (t) {
                  case "aoMap":
                  case "emissiveMap":
                  case "metalnessMap":
                  case "normalMap":
                  case "roughnessMap":
                    i.format = r.RGBFormat;
                }
              if (
                (void 0 === a.texCoord ||
                  0 == a.texCoord ||
                  ("aoMap" === t && 1 == a.texCoord) ||
                  console.warn(
                    "THREE.GLTFLoader: Custom UV set " +
                      a.texCoord +
                      " for texture " +
                      t +
                      " not yet supported."
                  ),
                o.extensions[n.KHR_TEXTURE_TRANSFORM])
              ) {
                var s =
                  void 0 !== a.extensions
                    ? a.extensions[n.KHR_TEXTURE_TRANSFORM]
                    : void 0;
                s &&
                  (i = o.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(
                    i,
                    s
                  ));
              }
              e[t] = i;
            });
          }),
          (N.prototype.assignFinalMaterial = function (e) {
            var t = e.geometry,
              n = e.material,
              a = void 0 !== t.attributes.tangent,
              o = void 0 !== t.attributes.color,
              i = void 0 === t.attributes.normal,
              s = !0 === e.isSkinnedMesh,
              l = Object.keys(t.morphAttributes).length > 0,
              c = l && void 0 !== t.morphAttributes.normal;
            if (e.isPoints) {
              var u = "PointsMaterial:" + n.uuid,
                d = this.cache.get(u);
              d ||
                ((d = new r.PointsMaterial()),
                r.Material.prototype.copy.call(d, n),
                d.color.copy(n.color),
                (d.map = n.map),
                (d.sizeAttenuation = !1),
                this.cache.add(u, d)),
                (n = d);
            } else if (e.isLine) {
              u = "LineBasicMaterial:" + n.uuid;
              var h = this.cache.get(u);
              h ||
                ((h = new r.LineBasicMaterial()),
                r.Material.prototype.copy.call(h, n),
                h.color.copy(n.color),
                this.cache.add(u, h)),
                (n = h);
            }
            if (a || o || i || s || l) {
              u = "ClonedMaterial:" + n.uuid + ":";
              n.isGLTFSpecularGlossinessMaterial &&
                (u += "specular-glossiness:"),
                s && (u += "skinning:"),
                a && (u += "vertex-tangents:"),
                o && (u += "vertex-colors:"),
                i && (u += "flat-shading:"),
                l && (u += "morph-targets:"),
                c && (u += "morph-normals:");
              var f = this.cache.get(u);
              f ||
                ((f = n.clone()),
                s && (f.skinning = !0),
                a && (f.vertexTangents = !0),
                o && (f.vertexColors = !0),
                i && (f.flatShading = !0),
                l && (f.morphTargets = !0),
                c && (f.morphNormals = !0),
                this.cache.add(u, f)),
                (n = f);
            }
            n.aoMap &&
              void 0 === t.attributes.uv2 &&
              void 0 !== t.attributes.uv &&
              t.setAttribute("uv2", t.attributes.uv),
              n.normalScale && !a && (n.normalScale.y = -n.normalScale.y),
              n.clearcoatNormalScale &&
                !a &&
                (n.clearcoatNormalScale.y = -n.clearcoatNormalScale.y),
              (e.material = n);
          }),
          (N.prototype.loadMaterial = function (e) {
            var t,
              a = this,
              o = this.json,
              i = this.extensions,
              s = o.materials[e],
              l = {},
              c = s.extensions || {},
              u = [];
            if (c[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
              var d = i[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
              (t = d.getMaterialType()), u.push(d.extendParams(l, s, a));
            } else if (c[n.KHR_MATERIALS_UNLIT]) {
              var h = i[n.KHR_MATERIALS_UNLIT];
              (t = h.getMaterialType()), u.push(h.extendParams(l, s, a));
            } else {
              t = r.MeshStandardMaterial;
              var f = s.pbrMetallicRoughness || {};
              if (
                ((l.color = new r.Color(1, 1, 1)),
                (l.opacity = 1),
                Array.isArray(f.baseColorFactor))
              ) {
                var m = f.baseColorFactor;
                l.color.fromArray(m), (l.opacity = m[3]);
              }
              void 0 !== f.baseColorTexture &&
                u.push(a.assignTexture(l, "map", f.baseColorTexture)),
                (l.metalness =
                  void 0 !== f.metallicFactor ? f.metallicFactor : 1),
                (l.roughness =
                  void 0 !== f.roughnessFactor ? f.roughnessFactor : 1),
                void 0 !== f.metallicRoughnessTexture &&
                  (u.push(
                    a.assignTexture(
                      l,
                      "metalnessMap",
                      f.metallicRoughnessTexture
                    )
                  ),
                  u.push(
                    a.assignTexture(
                      l,
                      "roughnessMap",
                      f.metallicRoughnessTexture
                    )
                  ));
            }
            !0 === s.doubleSided && (l.side = r.DoubleSide);
            var g = s.alphaMode || F;
            if (
              (g === k
                ? ((l.transparent = !0), (l.depthWrite = !1))
                : ((l.transparent = !1),
                  g === O &&
                    (l.alphaTest =
                      void 0 !== s.alphaCutoff ? s.alphaCutoff : 0.5)),
              void 0 !== s.normalTexture &&
                t !== r.MeshBasicMaterial &&
                (u.push(a.assignTexture(l, "normalMap", s.normalTexture)),
                (l.normalScale = new r.Vector2(1, 1)),
                void 0 !== s.normalTexture.scale &&
                  l.normalScale.set(
                    s.normalTexture.scale,
                    s.normalTexture.scale
                  )),
              void 0 !== s.occlusionTexture &&
                t !== r.MeshBasicMaterial &&
                (u.push(a.assignTexture(l, "aoMap", s.occlusionTexture)),
                void 0 !== s.occlusionTexture.strength &&
                  (l.aoMapIntensity = s.occlusionTexture.strength)),
              void 0 !== s.emissiveFactor &&
                t !== r.MeshBasicMaterial &&
                (l.emissive = new r.Color().fromArray(s.emissiveFactor)),
              void 0 !== s.emissiveTexture &&
                t !== r.MeshBasicMaterial &&
                u.push(a.assignTexture(l, "emissiveMap", s.emissiveTexture)),
              c[n.KHR_MATERIALS_CLEARCOAT])
            ) {
              var v = i[n.KHR_MATERIALS_CLEARCOAT];
              (t = v.getMaterialType()),
                u.push(v.extendParams(l, { extensions: c }, a));
            }
            return Promise.all(u).then(function () {
              var e;
              return (
                (e =
                  t === p
                    ? i[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(
                        l
                      )
                    : new t(l)),
                s.name && (e.name = s.name),
                e.map && (e.map.encoding = r.sRGBEncoding),
                e.emissiveMap && (e.emissiveMap.encoding = r.sRGBEncoding),
                D(e, s),
                s.extensions && U(i, e, s),
                e
              );
            });
          }),
          (N.prototype.loadGeometries = function (e) {
            var t = this,
              a = this.extensions,
              o = this.primitiveCache;
            function i(e) {
              return a[n.KHR_DRACO_MESH_COMPRESSION]
                .decodePrimitive(e, t)
                .then(function (n) {
                  return z(n, e, t);
                });
            }
            for (var s, l, c = [], u = 0, d = e.length; u < d; u++) {
              var h,
                f = e[u],
                m =
                  ((l = void 0),
                  (l =
                    (s = f).extensions &&
                    s.extensions[n.KHR_DRACO_MESH_COMPRESSION])
                    ? "draco:" +
                      l.bufferView +
                      ":" +
                      l.indices +
                      ":" +
                      B(l.attributes)
                    : s.indices + ":" + B(s.attributes) + ":" + s.mode),
                p = o[m];
              if (p) c.push(p.promise);
              else
                (h =
                  f.extensions && f.extensions[n.KHR_DRACO_MESH_COMPRESSION]
                    ? i(f)
                    : z(new r.BufferGeometry(), f, t)),
                  (o[m] = { primitive: f, promise: h }),
                  c.push(h);
            }
            return Promise.all(c);
          }),
          (N.prototype.loadMesh = function (e) {
            for (
              var t,
                n = this,
                a = this.json.meshes[e],
                o = a.primitives,
                i = [],
                s = 0,
                l = o.length;
              s < l;
              s++
            ) {
              var c =
                void 0 === o[s].material
                  ? (void 0 === (t = this.cache).DefaultMaterial &&
                      (t.DefaultMaterial = new r.MeshStandardMaterial({
                        color: 16777215,
                        emissive: 0,
                        metalness: 1,
                        roughness: 1,
                        transparent: !1,
                        depthTest: !0,
                        side: r.FrontSide,
                      })),
                    t.DefaultMaterial)
                  : this.getDependency("material", o[s].material);
              i.push(c);
            }
            return (
              i.push(n.loadGeometries(o)),
              Promise.all(i).then(function (t) {
                for (
                  var i = t.slice(0, t.length - 1),
                    s = t[t.length - 1],
                    l = [],
                    c = 0,
                    u = s.length;
                  c < u;
                  c++
                ) {
                  var d,
                    h = s[c],
                    f = o[c],
                    m = i[c];
                  if (
                    f.mode === M ||
                    f.mode === T ||
                    f.mode === x ||
                    void 0 === f.mode
                  )
                    !0 !==
                      (d =
                        !0 === a.isSkinnedMesh
                          ? new r.SkinnedMesh(h, m)
                          : new r.Mesh(h, m)).isSkinnedMesh ||
                      d.geometry.attributes.skinWeight.normalized ||
                      d.normalizeSkinWeights(),
                      f.mode === T
                        ? (d.geometry = V(d.geometry, r.TriangleStripDrawMode))
                        : f.mode === x &&
                          (d.geometry = V(d.geometry, r.TriangleFanDrawMode));
                  else if (f.mode === w) d = new r.LineSegments(h, m);
                  else if (f.mode === E) d = new r.Line(h, m);
                  else if (f.mode === L) d = new r.LineLoop(h, m);
                  else {
                    if (f.mode !== y)
                      throw new Error(
                        "THREE.GLTFLoader: Primitive mode unsupported: " +
                          f.mode
                      );
                    d = new r.Points(h, m);
                  }
                  Object.keys(d.geometry.morphAttributes).length > 0 && G(d, a),
                    (d.name = a.name || "mesh_" + e),
                    s.length > 1 && (d.name += "_" + c),
                    D(d, a),
                    n.assignFinalMaterial(d),
                    l.push(d);
                }
                if (1 === l.length) return l[0];
                var p = new r.Group();
                for (c = 0, u = l.length; c < u; c++) p.add(l[c]);
                return p;
              })
            );
          }),
          (N.prototype.loadCamera = function (e) {
            var t,
              n = this.json.cameras[e],
              a = n[n.type];
            if (a)
              return (
                "perspective" === n.type
                  ? (t = new r.PerspectiveCamera(
                      r.MathUtils.radToDeg(a.yfov),
                      a.aspectRatio || 1,
                      a.znear || 1,
                      a.zfar || 2e6
                    ))
                  : "orthographic" === n.type &&
                    (t = new r.OrthographicCamera(
                      -a.xmag,
                      a.xmag,
                      a.ymag,
                      -a.ymag,
                      a.znear,
                      a.zfar
                    )),
                n.name && (t.name = n.name),
                D(t, n),
                Promise.resolve(t)
              );
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
          }),
          (N.prototype.loadSkin = function (e) {
            var t = this.json.skins[e],
              n = { joints: t.joints };
            return void 0 === t.inverseBindMatrices
              ? Promise.resolve(n)
              : this.getDependency("accessor", t.inverseBindMatrices).then(
                  function (e) {
                    return (n.inverseBindMatrices = e), n;
                  }
                );
          }),
          (N.prototype.loadAnimation = function (e) {
            for (
              var t = this.json.animations[e],
                n = [],
                a = [],
                o = [],
                i = [],
                s = [],
                l = 0,
                c = t.channels.length;
              l < c;
              l++
            ) {
              var u = t.channels[l],
                d = t.samplers[u.sampler],
                h = u.target,
                f = void 0 !== h.node ? h.node : h.id,
                m = void 0 !== t.parameters ? t.parameters[d.input] : d.input,
                p = void 0 !== t.parameters ? t.parameters[d.output] : d.output;
              n.push(this.getDependency("node", f)),
                a.push(this.getDependency("accessor", m)),
                o.push(this.getDependency("accessor", p)),
                i.push(d),
                s.push(h);
            }
            return Promise.all([
              Promise.all(n),
              Promise.all(a),
              Promise.all(o),
              Promise.all(i),
              Promise.all(s),
            ]).then(function (n) {
              for (
                var a = n[0],
                  o = n[1],
                  i = n[2],
                  s = n[3],
                  l = n[4],
                  c = [],
                  u = 0,
                  d = a.length;
                u < d;
                u++
              ) {
                var h = a[u],
                  f = o[u],
                  m = i[u],
                  p = s[u],
                  g = l[u];
                if (void 0 !== h) {
                  var v;
                  switch (
                    (h.updateMatrix(), (h.matrixAutoUpdate = !0), P[g.path])
                  ) {
                    case P.weights:
                      v = r.NumberKeyframeTrack;
                      break;
                    case P.rotation:
                      v = r.QuaternionKeyframeTrack;
                      break;
                    case P.position:
                    case P.scale:
                    default:
                      v = r.VectorKeyframeTrack;
                  }
                  var y = h.name ? h.name : h.uuid,
                    w =
                      void 0 !== p.interpolation
                        ? _[p.interpolation]
                        : r.InterpolateLinear,
                    L = [];
                  P[g.path] === P.weights
                    ? h.traverse(function (e) {
                        !0 === e.isMesh &&
                          e.morphTargetInfluences &&
                          L.push(e.name ? e.name : e.uuid);
                      })
                    : L.push(y);
                  var E = m.array;
                  if (m.normalized) {
                    var M;
                    if (E.constructor === Int8Array) M = 1 / 127;
                    else if (E.constructor === Uint8Array) M = 1 / 255;
                    else if (E.constructor == Int16Array) M = 1 / 32767;
                    else {
                      if (E.constructor !== Uint16Array)
                        throw new Error(
                          "THREE.GLTFLoader: Unsupported output accessor component type."
                        );
                      M = 1 / 65535;
                    }
                    for (
                      var T = new Float32Array(E.length), x = 0, S = E.length;
                      x < S;
                      x++
                    )
                      T[x] = E[x] * M;
                    E = T;
                  }
                  for (x = 0, S = L.length; x < S; x++) {
                    var R = new v(L[x] + "." + P[g.path], f.array, E, w);
                    "CUBICSPLINE" === p.interpolation &&
                      ((R.createInterpolant = function (e) {
                        return new b(
                          this.times,
                          this.values,
                          this.getValueSize() / 3,
                          e
                        );
                      }),
                      (R.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0)),
                      c.push(R);
                  }
                }
              }
              var A = t.name ? t.name : "animation_" + e;
              return new r.AnimationClip(A, void 0, c);
            });
          }),
          (N.prototype.loadNode = function (e) {
            var t,
              a = this.json,
              o = this.extensions,
              i = this,
              s = a.meshReferences,
              l = a.meshUses,
              c = a.nodes[e];
            return ((t = []),
            void 0 !== c.mesh &&
              t.push(
                i.getDependency("mesh", c.mesh).then(function (e) {
                  var t;
                  if (s[c.mesh] > 1) {
                    var n = l[c.mesh]++;
                    (t = e.clone()).name += "_instance_" + n;
                  } else t = e;
                  return (
                    void 0 !== c.weights &&
                      t.traverse(function (e) {
                        if (e.isMesh)
                          for (var t = 0, n = c.weights.length; t < n; t++)
                            e.morphTargetInfluences[t] = c.weights[t];
                      }),
                    t
                  );
                })
              ),
            void 0 !== c.camera && t.push(i.getDependency("camera", c.camera)),
            c.extensions &&
              c.extensions[n.KHR_LIGHTS_PUNCTUAL] &&
              void 0 !== c.extensions[n.KHR_LIGHTS_PUNCTUAL].light &&
              t.push(
                i.getDependency(
                  "light",
                  c.extensions[n.KHR_LIGHTS_PUNCTUAL].light
                )
              ),
            Promise.all(t)).then(function (e) {
              var t;
              if (
                (t =
                  !0 === c.isBone
                    ? new r.Bone()
                    : e.length > 1
                    ? new r.Group()
                    : 1 === e.length
                    ? e[0]
                    : new r.Object3D()) !== e[0]
              )
                for (var n = 0, a = e.length; n < a; n++) t.add(e[n]);
              if (
                (c.name &&
                  ((t.userData.name = c.name),
                  (t.name = r.PropertyBinding.sanitizeNodeName(c.name))),
                D(t, c),
                c.extensions && U(o, t, c),
                void 0 !== c.matrix)
              ) {
                var i = new r.Matrix4();
                i.fromArray(c.matrix), t.applyMatrix4(i);
              } else void 0 !== c.translation && t.position.fromArray(c.translation), void 0 !== c.rotation && t.quaternion.fromArray(c.rotation), void 0 !== c.scale && t.scale.fromArray(c.scale);
              return t;
            });
          }),
          (N.prototype.loadScene = (function () {
            function e(t, n, a, o) {
              var i = a.nodes[t];
              return o
                .getDependency("node", t)
                .then(function (e) {
                  return void 0 === i.skin
                    ? e
                    : o
                        .getDependency("skin", i.skin)
                        .then(function (e) {
                          for (
                            var n = [], r = 0, a = (t = e).joints.length;
                            r < a;
                            r++
                          )
                            n.push(o.getDependency("node", t.joints[r]));
                          return Promise.all(n);
                        })
                        .then(function (n) {
                          return (
                            e.traverse(function (e) {
                              if (e.isMesh) {
                                for (
                                  var a = [], o = [], i = 0, s = n.length;
                                  i < s;
                                  i++
                                ) {
                                  var l = n[i];
                                  if (l) {
                                    a.push(l);
                                    var c = new r.Matrix4();
                                    void 0 !== t.inverseBindMatrices &&
                                      c.fromArray(
                                        t.inverseBindMatrices.array,
                                        16 * i
                                      ),
                                      o.push(c);
                                  } else
                                    console.warn(
                                      'THREE.GLTFLoader: Joint "%s" could not be found.',
                                      t.joints[i]
                                    );
                                }
                                e.bind(new r.Skeleton(a, o), e.matrixWorld);
                              }
                            }),
                            e
                          );
                        });
                  var t;
                })
                .then(function (t) {
                  n.add(t);
                  var r = [];
                  if (i.children)
                    for (var s = i.children, l = 0, c = s.length; l < c; l++) {
                      var u = s[l];
                      r.push(e(u, t, a, o));
                    }
                  return Promise.all(r);
                });
            }
            return function (t) {
              var n = this.json,
                a = this.extensions,
                o = this.json.scenes[t],
                i = new r.Group();
              o.name && (i.name = o.name), D(i, o), o.extensions && U(a, i, o);
              for (
                var s = o.nodes || [], l = [], c = 0, u = s.length;
                c < u;
                c++
              )
                l.push(e(s[c], i, n, this));
              return Promise.all(l).then(function () {
                return i;
              });
            };
          })()),
          e
        );
      })();
    },
    "./src/js/app/main.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => b });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./node_modules/@tweenjs/tween.js/dist/tween.esm.js"),
        o = n("./src/js/app/components/renderer.js"),
        i = n("./src/js/app/components/camera.js"),
        s = n("./src/js/app/components/light.js"),
        l = n("./src/js/app/components/controls.js"),
        c = n("./src/js/app/components/geometry.js"),
        u = n("./src/js/app/helpers/stats.js"),
        d = n("./src/js/app/helpers/meshHelper.js"),
        h = n("./src/js/app/model/texture.js"),
        f = n("./src/js/app/model/model.js"),
        m = n("./src/js/app/managers/interaction.js"),
        p = n("./src/js/app/managers/datGUI.js"),
        g = n("./src/js/data/config.js");
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var b = (function () {
        function e(t) {
          var n = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.container = t),
            (this.clock = new r.Clock()),
            (this.scene = new r.Scene()),
            (this.scene.fog = new r.FogExp2(
              g.default.fog.color,
              g.default.fog.near
            )),
            window.devicePixelRatio &&
              (g.default.dpr = window.devicePixelRatio),
            (this.renderer = new o.default(this.scene, t)),
            (this.camera = new i.default(this.renderer.threeRenderer)),
            (this.controls = new l.default(this.camera.threeCamera, t)),
            (this.light = new s.default(this.scene));
          ["ambient", "directional", "point", "hemi"].forEach(function (e) {
            return n.light.place(e);
          }),
            (this.geometry = new c.default(this.scene)),
            this.geometry.make("plane")(150, 150, 10, 10),
            this.geometry.place([0, -20, 0], [Math.PI / 2, 0, 0]),
            g.default.isDev &&
              g.default.isShowingStats &&
              ((this.stats = new u.default(this.renderer)), this.stats.setUp()),
            g.default.isDev && (this.gui = new p.default(this)),
            (this.texture = new h.default()),
            this.texture.load().then(function () {
              (n.manager = new r.LoadingManager()),
                (n.model = new f.default(
                  n.scene,
                  n.manager,
                  n.texture.textures
                )),
                n.model.load(g.default.models[g.default.model.selected].type),
                (n.manager.onProgress = function (e, t, n) {
                  console.log("".concat(e, ": ").concat(t, " ").concat(n));
                }),
                (n.manager.onLoad = function () {
                  new m.default(
                    n.renderer.threeRenderer,
                    n.scene,
                    n.camera.threeCamera,
                    n.controls.threeControls
                  ),
                    g.default.isDev &&
                      ((n.meshHelper = new d.default(n.scene, n.model.obj)),
                      g.default.mesh.enableHelper && n.meshHelper.enable(),
                      n.gui.load(n, n.model.obj)),
                    (g.default.isLoaded = !0),
                    (n.container.querySelector("#loading").style.display =
                      "none");
                });
            }),
            this.render();
        }
        var t, n, b;
        return (
          (t = e),
          (n = [
            {
              key: "render",
              value: function () {
                g.default.isDev &&
                  g.default.isShowingStats &&
                  u.default.start(),
                  this.renderer.render(this.scene, this.camera.threeCamera),
                  g.default.isDev &&
                    g.default.isShowingStats &&
                    u.default.end(),
                  a.default.update(),
                  this.controls.threeControls.update(),
                  requestAnimationFrame(this.render.bind(this));
              },
            },
          ]) && v(t.prototype, n),
          b && v(t, b),
          e
        );
      })();
    },
    "./src/js/app/managers/datGUI.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var r = n("./src/js/data/config.js");
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return o(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var s = (function () {
        function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.gui = new dat.GUI()),
            (this.camera = t.camera.threeCamera),
            (this.controls = t.controls.threeControls),
            (this.light = t.light),
            (this.scene = t.scene),
            (this.model = null),
            (this.meshHelper = null);
        }
        var t, n, o;
        return (
          (t = e),
          (n = [
            {
              key: "load",
              value: function (e, t) {
                var n = this;
                (this.model = e.model), (this.meshHelper = e.meshHelper);
                var o = this.gui.addFolder("Camera"),
                  i = o.add(r.default.camera, "fov", 0, 180).name("Camera FOV");
                i.onChange(function (e) {
                  (n.controls.enableRotate = !1), (n.camera.fov = e);
                }),
                  i.onFinishChange(function () {
                    n.camera.updateProjectionMatrix(),
                      (n.controls.enableRotate = !0);
                  });
                var s = o
                  .add(r.default.camera, "aspect", 0, 4)
                  .name("Camera Aspect");
                s.onChange(function (e) {
                  (n.controls.enableRotate = !1), (n.camera.aspect = e);
                }),
                  s.onFinishChange(function () {
                    n.camera.updateProjectionMatrix(),
                      (n.controls.enableRotate = !0);
                  }),
                  o
                    .addColor(r.default.fog, "color")
                    .name("Fog Color")
                    .onChange(function (e) {
                      n.scene.fog.color.setHex(e);
                    });
                var l = o.add(r.default.fog, "near", 0, 0.01).name("Fog Near");
                l.onChange(function (e) {
                  (n.controls.enableRotate = !1), (n.scene.fog.density = e);
                }),
                  l.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var c = this.gui.addFolder("Controls");
                c.add(r.default.controls, "autoRotate")
                  .name("Auto Rotate")
                  .onChange(function (e) {
                    n.controls.autoRotate = e;
                  });
                var u = c
                  .add(r.default.controls, "autoRotateSpeed", -1, 1)
                  .name("Rotation Speed");
                u.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.controls.autoRotateSpeed = e);
                }),
                  u.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  }),
                  this.gui
                    .addFolder("Model")
                    .add(
                      r.default.model,
                      "type",
                      a(r.default.model.initialTypes)
                    )
                    .name("Select Model")
                    .onChange(function (e) {
                      e &&
                        (r.default.mesh.enableHelper && n.meshHelper.disable(),
                        (r.default.model.selected = r.default.model.initialTypes.indexOf(
                          e
                        )),
                        n.unload(),
                        n.model.unload(),
                        n.model.load(e));
                    });
                var d = this.gui.addFolder("Mesh");
                d
                  .add(r.default.mesh, "enableHelper", !0)
                  .name("Enable Helpers")
                  .onChange(function (e) {
                    e ? n.meshHelper.enable() : n.meshHelper.disable();
                  }),
                  d
                    .add(r.default.mesh, "translucent", !0)
                    .name("Translucent")
                    .onChange(function (e) {
                      e
                        ? ((t.material.transparent = !0),
                          (t.material.opacity = 0.5))
                        : (t.material.opacity = 1);
                    }),
                  d
                    .add(r.default.mesh, "wireframe", !0)
                    .name("Wireframe")
                    .onChange(function (e) {
                      t.material.wireframe = e;
                    });
                var h = this.gui.addFolder("Ambient Light");
                h
                  .add(r.default.ambientLight, "enabled")
                  .name("Enabled")
                  .onChange(function (e) {
                    n.light.ambientLight.visible = e;
                  }),
                  h
                    .addColor(r.default.ambientLight, "color")
                    .name("Color")
                    .onChange(function (e) {
                      n.light.ambientLight.color.setHex(e);
                    });
                var f = this.gui.addFolder("Directional Light");
                f
                  .add(r.default.directionalLight, "enabled")
                  .name("Enabled")
                  .onChange(function (e) {
                    n.light.directionalLight.visible = e;
                  }),
                  f
                    .addColor(r.default.directionalLight, "color")
                    .name("Color")
                    .onChange(function (e) {
                      n.light.directionalLight.color.setHex(e);
                    });
                var m = f
                  .add(r.default.directionalLight, "intensity", 0, 2)
                  .name("Intensity");
                m.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.intensity = e);
                }),
                  m.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var p = f
                  .add(r.default.directionalLight, "x", -1e3, 1e3)
                  .name("Position X");
                p.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.position.x = e);
                }),
                  p.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var g = f
                  .add(r.default.directionalLight, "y", -1e3, 1e3)
                  .name("Position Y");
                g.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.position.y = e);
                }),
                  g.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var v = f
                  .add(r.default.directionalLight, "z", -1e3, 1e3)
                  .name("Position Z");
                v.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.position.z = e);
                }),
                  v.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var b = this.gui.addFolder("Shadow Map");
                b
                  .add(r.default.shadow, "enabled")
                  .name("Enabled")
                  .onChange(function (e) {
                    n.light.directionalLight.castShadow = e;
                  }),
                  b
                    .add(r.default.shadow, "helperEnabled")
                    .name("Helper Enabled")
                    .onChange(function (e) {
                      n.light.directionalLightHelper.visible = e;
                    });
                var y = b.add(r.default.shadow, "near", 0, 400).name("Near");
                y.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.camera.near = e);
                }),
                  y.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var w = b.add(r.default.shadow, "far", 0, 1200).name("Far");
                w.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.camera.far = e);
                }),
                  w.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var L = b.add(r.default.shadow, "top", -400, 400).name("Top");
                L.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.camera.top = e);
                }),
                  L.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var E = b
                  .add(r.default.shadow, "right", -400, 400)
                  .name("Right");
                E.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.camera.right = e);
                }),
                  E.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var M = b
                  .add(r.default.shadow, "bottom", -400, 400)
                  .name("Bottom");
                M.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.camera.bottom = e);
                }),
                  M.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var T = b.add(r.default.shadow, "left", -400, 400).name("Left");
                T.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.camera.left = e);
                }),
                  T.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var x = b.add(r.default.shadow, "bias", -1e-5, 1).name("Bias");
                x.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.directionalLight.shadow.bias = e);
                }),
                  x.onFinishChange(function () {
                    (n.controls.enableRotate = !0),
                      n.light.directionalLight.shadow.map.dispose(),
                      (n.light.directionalLight.shadow.map = null),
                      n.light.directionalLightHelper.update();
                  });
                var S = this.gui.addFolder("Point Light");
                S.add(r.default.pointLight, "enabled")
                  .name("Enabled")
                  .onChange(function (e) {
                    n.light.pointLight.visible = e;
                  }),
                  S.addColor(r.default.pointLight, "color")
                    .name("Color")
                    .onChange(function (e) {
                      n.light.pointLight.color.setHex(e);
                    });
                var R = S.add(r.default.pointLight, "intensity", 0, 2).name(
                  "Intensity"
                );
                R.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.pointLight.intensity = e);
                }),
                  R.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var A = S.add(r.default.pointLight, "distance", 0, 1e3).name(
                  "Distance"
                );
                A.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.pointLight.distance = e);
                }),
                  A.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var C = S.add(r.default.pointLight, "x", -1e3, 1e3).name(
                  "Position X"
                );
                C.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.pointLight.position.x = e);
                }),
                  C.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var j = S.add(r.default.pointLight, "y", -1e3, 1e3).name(
                  "Position Y"
                );
                j.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.pointLight.position.y = e);
                }),
                  j.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var P = S.add(r.default.pointLight, "z", -1e3, 1e3).name(
                  "Position Z"
                );
                P.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.pointLight.position.z = e);
                }),
                  P.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var _ = this.gui.addFolder("Hemi Light");
                _.add(r.default.hemiLight, "enabled")
                  .name("Enabled")
                  .onChange(function (e) {
                    n.light.hemiLight.visible = e;
                  }),
                  _.addColor(r.default.hemiLight, "color")
                    .name("Color")
                    .onChange(function (e) {
                      n.light.hemiLight.color.setHex(e);
                    }),
                  _.addColor(r.default.hemiLight, "groundColor")
                    .name("ground Color")
                    .onChange(function (e) {
                      n.light.hemiLight.groundColor.setHex(e);
                    });
                var F = _.add(r.default.hemiLight, "intensity", 0, 2).name(
                  "Intensity"
                );
                F.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.hemiLight.intensity = e);
                }),
                  F.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var O = _.add(r.default.hemiLight, "x", -1e3, 1e3).name(
                  "Position X"
                );
                O.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.hemiLight.position.x = e);
                }),
                  O.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var k = _.add(r.default.hemiLight, "y", -500, 1e3).name(
                  "Position Y"
                );
                k.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.hemiLight.position.y = e);
                }),
                  k.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
                var H = _.add(r.default.hemiLight, "z", -1e3, 1e3).name(
                  "Position Z"
                );
                H.onChange(function (e) {
                  (n.controls.enableRotate = !1),
                    (n.light.hemiLight.position.z = e);
                }),
                  H.onFinishChange(function () {
                    n.controls.enableRotate = !0;
                  });
              },
            },
            {
              key: "unload",
              value: function () {
                this.gui.destroy(), (this.gui = new dat.GUI());
              },
            },
          ]) && i(t.prototype, n),
          o && i(t, o),
          e
        );
      })();
    },
    "./src/js/app/managers/interaction.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var r = n("./src/js/utils/keyboard.js"),
        a = n("./src/js/utils/helpers.js"),
        o = n("./src/js/data/config.js");
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var s = (function () {
        function e(t, n, o, i) {
          var s = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.renderer = t),
            (this.scene = n),
            (this.camera = o),
            (this.controls = i),
            (this.timeout = null),
            (this.keyboard = new r.default()),
            this.renderer.domElement.addEventListener(
              "mousemove",
              function (e) {
                return a.default.throttle(s.onMouseMove(e), 250);
              },
              !1
            ),
            this.renderer.domElement.addEventListener(
              "mouseleave",
              function (e) {
                return s.onMouseLeave(e);
              },
              !1
            ),
            this.renderer.domElement.addEventListener(
              "mouseover",
              function (e) {
                return s.onMouseOver(e);
              },
              !1
            ),
            this.keyboard.domElement.addEventListener("keydown", function (e) {
              e.repeat ||
                (s.keyboard.eventMatches(e, "escape") &&
                  console.log("Escape pressed"));
            });
        }
        var t, n, s;
        return (
          (t = e),
          (n = [
            {
              key: "onMouseOver",
              value: function (e) {
                e.preventDefault(), (o.default.isMouseOver = !0);
              },
            },
            {
              key: "onMouseLeave",
              value: function (e) {
                e.preventDefault(), (o.default.isMouseOver = !1);
              },
            },
            {
              key: "onMouseMove",
              value: function (e) {
                e.preventDefault(),
                  clearTimeout(this.timeout),
                  (this.timeout = setTimeout(function () {
                    o.default.isMouseMoving = !1;
                  }, 200)),
                  (o.default.isMouseMoving = !0);
              },
            },
          ]) && i(t.prototype, n),
          s && i(t, s),
          e
        );
      })();
    },
    "./src/js/app/model/model.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => u });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./src/js/app/components/material.js"),
        o = n("./src/js/utils/helpers.js"),
        i = n("./src/js/utils/bufferGeometryUtils.js"),
        s = n("./src/js/app/loaders/GLTFLoader.js"),
        l = n("./src/js/data/config.js");
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var u = (function () {
        function e(t, n, r) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.scene = t),
            (this.textures = r),
            (this.manager = n),
            (this.obj = null),
            (this.ref = null);
        }
        var t, n, u;
        return (
          (t = e),
          (n = [
            {
              key: "load",
              value: function (e) {
                var t = this;
                switch (e) {
                  case "gltf":
                    new s.GLTFLoader(this.manager).load(
                      l.default.models[l.default.model.selected].path,
                      function (e) {
                        var n,
                          a = e.scene;
                        l.default.shadow.enabled &&
                          a.traverse(function (e) {
                            (e.isMesh || e.isLight) && (e.castShadow = !0),
                              e.isMesh &&
                                ((e.material.wireframe =
                                  l.default.mesh.wireframe),
                                (n = e));
                          }),
                          (t.obj = n),
                          i.BufferGeometryUtils.computeTangents(n.geometry);
                        var o = new r.Group();
                        o.scale.multiplyScalar(0.25),
                          t.scene.add(o),
                          (t.ref = o),
                          o.updateMatrixWorld(!0),
                          o.add(n),
                          t.scene.add(a);
                      },
                      o.default.logProgress(),
                      o.default.logError()
                    );
                    break;
                  case "object":
                    new r.ObjectLoader(this.manager).load(
                      l.default.models[l.default.model.selected].path,
                      function (e) {
                        e.traverse(function (e) {
                          if (e instanceof r.Mesh) {
                            var n = new a.default(16777215).standard;
                            (n.map = t.textures.UV),
                              (e.material = n),
                              l.default.shadow.enabled &&
                                ((e.receiveShadow = !0), (e.castShadow = !0));
                          }
                        }),
                          (t.obj = e),
                          (t.ref = e),
                          e.scale.multiplyScalar(
                            l.default.models[l.default.model.selected].scale
                          ),
                          t.scene.add(e);
                      },
                      o.default.logProgress(),
                      o.default.logError()
                    );
                }
              },
            },
            {
              key: "unload",
              value: function () {
                this.scene.remove(this.ref);
              },
            },
          ]) && c(t.prototype, n),
          u && c(t, u),
          e
        );
      })();
    },
    "./src/js/app/model/texture.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => l });
      var r = n("./node_modules/three/build/three.module.js"),
        a = n("./node_modules/es6-promise/dist/es6-promise.js"),
        o = n("./src/js/utils/helpers.js"),
        i = n("./src/js/data/config.js");
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var l = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.textures = {});
        }
        var t, n, l;
        return (
          (t = e),
          (n = [
            {
              key: "load",
              value: function () {
                var e = this,
                  t = new r.TextureLoader(),
                  n = i.default.maxAnisotropy,
                  s = i.default.texture.imageFiles,
                  l = [];
                return (
                  t.setPath(i.default.texture.path),
                  s.forEach(function (e) {
                    l.push(
                      new a.Promise(function (a, i) {
                        t.load(
                          e.image,
                          function (t) {
                            t.anisotropy = n;
                            var o = {};
                            (o[e.name] = t),
                              o[e.name] instanceof r.Texture && a(o);
                          },
                          o.default.logProgress(),
                          function (t) {
                            return i(
                              new Error(
                                t +
                                  "An error occurred loading while loading " +
                                  e.image
                              )
                            );
                          }
                        );
                      })
                    );
                  }),
                  a.Promise.all(l).then(
                    function (t) {
                      for (var n = 0; n < t.length; n++)
                        e.textures[Object.keys(t[n])[0]] =
                          t[n][Object.keys(t[n])[0]];
                    },
                    function (e) {
                      return console.log(e);
                    }
                  )
                );
              },
            },
          ]) && s(t.prototype, n),
          l && s(t, l),
          e
        );
      })();
    },
    "./src/js/data/config.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      const r = {
        isDev: !1,
        isShowingStats: !0,
        isLoaded: !1,
        isTweening: !1,
        isRotating: !0,
        isMouseMoving: !1,
        isMouseOver: !1,
        maxAnisotropy: 1,
        dpr: 1,
        easing: n("./node_modules/@tweenjs/tween.js/dist/tween.esm.js").default
          .Easing.Quadratic.InOut,
        duration: 500,
        model: { selected: 0, initialTypes: ["gltf", "object"], type: "gltf" },
        models: [
          { path: "./assets/models/duck.gltf", scale: 20, type: "gltf" },
          { path: "./assets/models/Teapot.json", scale: 20, type: "object" },
        ],
        texture: {
          path: "./assets/textures/",
          imageFiles: [{ name: "UV", image: "UV_Grid_Sm.jpg" }],
        },
        mesh: {
          enableHelper: !0,
          wireframe: !1,
          translucent: !1,
          material: { color: 16777215, emissive: 16777215 },
        },
        fog: { color: 16777215, near: 8e-4 },
        camera: {
          fov: 40,
          near: 2,
          far: 1e3,
          aspect: 1,
          posX: 0,
          posY: 30,
          posZ: 40,
        },
        controls: {
          autoRotate: !0,
          autoRotateSpeed: -0.5,
          rotateSpeed: 0.5,
          zoomSpeed: 0.8,
          minDistance: 200,
          maxDistance: 600,
          minPolarAngle: Math.PI / 5,
          maxPolarAngle: Math.PI / 2,
          minAzimuthAngle: -1 / 0,
          maxAzimuthAngle: 1 / 0,
          enableDamping: !0,
          dampingFactor: 0.5,
          enableZoom: !0,
          target: { x: 0, y: 0, z: 0 },
        },
        ambientLight: { enabled: !0, color: 1315860 },
        directionalLight: {
          enabled: !0,
          color: 15790320,
          intensity: 0.4,
          x: -75,
          y: 280,
          z: 150,
        },
        shadow: {
          enabled: !0,
          helperEnabled: !0,
          bias: 0,
          mapWidth: 2048,
          mapHeight: 2048,
          near: 250,
          far: 400,
          top: 100,
          right: 100,
          bottom: -100,
          left: -100,
        },
        pointLight: {
          enabled: !0,
          color: 16777215,
          intensity: 0.34,
          distance: 115,
          x: 0,
          y: 0,
          z: 0,
        },
        hemiLight: {
          enabled: !0,
          color: 13158600,
          groundColor: 16777215,
          intensity: 0.55,
          x: 0,
          y: 0,
          z: 0,
        },
      };
    },
    "./src/js/utils/bufferGeometryUtils.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { BufferGeometryUtils: () => a });
      var r = n("./node_modules/three/build/three.module.js"),
        a = {
          computeTangents: function (e) {
            var t = e.index,
              n = e.attributes;
            if (
              null !== t &&
              void 0 !== n.position &&
              void 0 !== n.normal &&
              void 0 !== n.uv
            ) {
              var a = t.array,
                o = n.position.array,
                i = n.normal.array,
                s = n.uv.array,
                l = o.length / 3;
              void 0 === n.tangent &&
                e.setAttribute(
                  "tangent",
                  new r.BufferAttribute(new Float32Array(4 * l), 4)
                );
              for (var c = n.tangent.array, u = [], d = [], h = 0; h < l; h++)
                (u[h] = new r.Vector3()), (d[h] = new r.Vector3());
              var f = new r.Vector3(),
                m = new r.Vector3(),
                p = new r.Vector3(),
                g = new r.Vector2(),
                v = new r.Vector2(),
                b = new r.Vector2(),
                y = new r.Vector3(),
                w = new r.Vector3(),
                L = e.groups;
              0 === L.length && (L = [{ start: 0, count: a.length }]);
              h = 0;
              for (var E = L.length; h < E; ++h)
                for (
                  var M = (F = (_ = L[h]).start), T = F + _.count;
                  M < T;
                  M += 3
                )
                  O(a[M + 0], a[M + 1], a[M + 2]);
              var x,
                S,
                R,
                A = new r.Vector3(),
                C = new r.Vector3(),
                j = new r.Vector3(),
                P = new r.Vector3();
              for (h = 0, E = L.length; h < E; ++h) {
                var _, F;
                for (M = F = (_ = L[h]).start, T = F + _.count; M < T; M += 3)
                  k(a[M + 0]), k(a[M + 1]), k(a[M + 2]);
              }
            } else
              console.error(
                "THREE.BufferGeometryUtils: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
              );
            function O(e, t, n) {
              f.fromArray(o, 3 * e),
                m.fromArray(o, 3 * t),
                p.fromArray(o, 3 * n),
                g.fromArray(s, 2 * e),
                v.fromArray(s, 2 * t),
                b.fromArray(s, 2 * n),
                m.sub(f),
                p.sub(f),
                v.sub(g),
                b.sub(g);
              var r = 1 / (v.x * b.y - b.x * v.y);
              isFinite(r) &&
                (y
                  .copy(m)
                  .multiplyScalar(b.y)
                  .addScaledVector(p, -v.y)
                  .multiplyScalar(r),
                w
                  .copy(p)
                  .multiplyScalar(v.x)
                  .addScaledVector(m, -b.x)
                  .multiplyScalar(r),
                u[e].add(y),
                u[t].add(y),
                u[n].add(y),
                d[e].add(w),
                d[t].add(w),
                d[n].add(w));
            }
            function k(e) {
              j.fromArray(i, 3 * e),
                P.copy(j),
                (S = u[e]),
                A.copy(S),
                A.sub(j.multiplyScalar(j.dot(S))).normalize(),
                C.crossVectors(P, S),
                (R = C.dot(d[e])),
                (x = R < 0 ? -1 : 1),
                (c[4 * e] = A.x),
                (c[4 * e + 1] = A.y),
                (c[4 * e + 2] = A.z),
                (c[4 * e + 3] = x);
            }
          },
          mergeBufferGeometries: function (e, t) {
            for (
              var n = null !== e[0].index,
                a = new Set(Object.keys(e[0].attributes)),
                o = new Set(Object.keys(e[0].morphAttributes)),
                i = {},
                s = {},
                l = e[0].morphTargetsRelative,
                c = new r.BufferGeometry(),
                u = 0,
                d = 0;
              d < e.length;
              ++d
            ) {
              var h = e[d],
                f = 0;
              if (n !== (null !== h.index))
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                      d +
                      ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."
                  ),
                  null
                );
              for (var m in h.attributes) {
                if (!a.has(m))
                  return (
                    console.error(
                      "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                        d +
                        '. All geometries must have compatible attributes; make sure "' +
                        m +
                        '" attribute exists among all geometries, or in none of them.'
                    ),
                    null
                  );
                void 0 === i[m] && (i[m] = []), i[m].push(h.attributes[m]), f++;
              }
              if (f !== a.size)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                      d +
                      ". Make sure all geometries have the same number of attributes."
                  ),
                  null
                );
              if (l !== h.morphTargetsRelative)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                      d +
                      ". .morphTargetsRelative must be consistent throughout all geometries."
                  ),
                  null
                );
              for (var m in h.morphAttributes) {
                if (!o.has(m))
                  return (
                    console.error(
                      "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                        d +
                        ".  .morphAttributes must be consistent throughout all geometries."
                    ),
                    null
                  );
                void 0 === s[m] && (s[m] = []), s[m].push(h.morphAttributes[m]);
              }
              if (
                ((c.userData.mergedUserData = c.userData.mergedUserData || []),
                c.userData.mergedUserData.push(h.userData),
                t)
              ) {
                var p;
                if (n) p = h.index.count;
                else {
                  if (void 0 === h.attributes.position)
                    return (
                      console.error(
                        "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " +
                          d +
                          ". The geometry must have either an index or a position attribute"
                      ),
                      null
                    );
                  p = h.attributes.position.count;
                }
                c.addGroup(u, p, d), (u += p);
              }
            }
            if (n) {
              var g = 0,
                v = [];
              for (d = 0; d < e.length; ++d) {
                for (var b = e[d].index, y = 0; y < b.count; ++y)
                  v.push(b.getX(y) + g);
                g += e[d].attributes.position.count;
              }
              c.setIndex(v);
            }
            for (var m in i) {
              var w = this.mergeBufferAttributes(i[m]);
              if (!w)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " +
                      m +
                      " attribute."
                  ),
                  null
                );
              c.setAttribute(m, w);
            }
            for (var m in s) {
              var L = s[m][0].length;
              if (0 === L) break;
              (c.morphAttributes = c.morphAttributes || {}),
                (c.morphAttributes[m] = []);
              for (d = 0; d < L; ++d) {
                var E = [];
                for (y = 0; y < s[m].length; ++y) E.push(s[m][y][d]);
                var M = this.mergeBufferAttributes(E);
                if (!M)
                  return (
                    console.error(
                      "THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " +
                        m +
                        " morphAttribute."
                    ),
                    null
                  );
                c.morphAttributes[m].push(M);
              }
            }
            return c;
          },
          mergeBufferAttributes: function (e) {
            for (var t, n, a, o = 0, i = 0; i < e.length; ++i) {
              var s = e[i];
              if (s.isInterleavedBufferAttribute)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."
                  ),
                  null
                );
              if (
                (void 0 === t && (t = s.array.constructor),
                t !== s.array.constructor)
              )
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."
                  ),
                  null
                );
              if ((void 0 === n && (n = s.itemSize), n !== s.itemSize))
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."
                  ),
                  null
                );
              if ((void 0 === a && (a = s.normalized), a !== s.normalized))
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."
                  ),
                  null
                );
              o += s.array.length;
            }
            var l = new t(o),
              c = 0;
            for (i = 0; i < e.length; ++i)
              l.set(e[i].array, c), (c += e[i].array.length);
            return new r.BufferAttribute(l, n, a);
          },
          interleaveAttributes: function (e) {
            for (var t, n = 0, a = 0, o = 0, i = e.length; o < i; ++o) {
              var s = e[o];
              if (
                (void 0 === t && (t = s.array.constructor),
                t !== s.array.constructor)
              )
                return (
                  console.error(
                    "AttributeBuffers of different types cannot be interleaved"
                  ),
                  null
                );
              (n += s.array.length), (a += s.itemSize);
            }
            var l = new r.InterleavedBuffer(new t(n), a),
              c = 0,
              u = [],
              d = ["getX", "getY", "getZ", "getW"],
              h = ["setX", "setY", "setZ", "setW"],
              f = 0;
            for (i = e.length; f < i; f++) {
              var m = (s = e[f]).itemSize,
                p = s.count,
                g = new r.InterleavedBufferAttribute(l, m, c, s.normalized);
              u.push(g), (c += m);
              for (var v = 0; v < p; v++)
                for (var b = 0; b < m; b++) g[h[b]](v, s[d[b]](v));
            }
            return u;
          },
          estimateBytesUsed: function (e) {
            var t = 0;
            for (var n in e.attributes) {
              var r = e.getAttribute(n);
              t += r.count * r.itemSize * r.array.BYTES_PER_ELEMENT;
            }
            var a = e.getIndex();
            return (t += a
              ? a.count * a.itemSize * a.array.BYTES_PER_ELEMENT
              : 0);
          },
          mergeVertices: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e-4;
            t = Math.max(t, Number.EPSILON);
            for (
              var n = {},
                a = e.getIndex(),
                o = e.getAttribute("position"),
                i = a ? a.count : o.count,
                s = 0,
                l = Object.keys(e.attributes),
                c = {},
                u = {},
                d = [],
                h = ["getX", "getY", "getZ", "getW"],
                f = 0,
                m = l.length;
              f < m;
              f++
            ) {
              (c[(w = l[f])] = []),
                (T = e.morphAttributes[w]) &&
                  (u[w] = new Array(T.length).fill().map(function () {
                    return [];
                  }));
            }
            var p = Math.log10(1 / t),
              g = Math.pow(10, p);
            for (f = 0; f < i; f++) {
              var v = a ? a.getX(f) : f,
                b = "",
                y = 0;
              for (m = l.length; y < m; y++)
                for (
                  var w = l[y], L = (M = e.getAttribute(w)).itemSize, E = 0;
                  E < L;
                  E++
                )
                  b += "".concat(~~(M[h[E]](v) * g), ",");
              if (b in n) d.push(n[b]);
              else {
                for (y = 0, m = l.length; y < m; y++) {
                  w = l[y];
                  var M = e.getAttribute(w),
                    T = e.morphAttributes[w],
                    x = ((L = M.itemSize), c[w]),
                    S = u[w];
                  for (E = 0; E < L; E++) {
                    var R = h[E];
                    if ((x.push(M[R](v)), T))
                      for (var A = 0, C = T.length; A < C; A++)
                        S[A].push(T[A][R](v));
                  }
                }
                (n[b] = s), d.push(s), s++;
              }
            }
            var j = e.clone();
            for (f = 0, m = l.length; f < m; f++) {
              w = l[f];
              var P = e.getAttribute(w),
                _ = new P.array.constructor(c[w]);
              M = new r.BufferAttribute(_, P.itemSize, P.normalized);
              if ((j.setAttribute(w, M), w in u))
                for (y = 0; y < u[w].length; y++) {
                  var F = e.morphAttributes[w][y],
                    O =
                      ((_ = new F.array.constructor(u[w][y])),
                      new r.BufferAttribute(_, F.itemSize, F.normalized));
                  j.morphAttributes[w][y] = O;
                }
            }
            return j.setIndex(d), j;
          },
          toTrianglesDrawMode: function (e, t) {
            if (t === r.TrianglesDrawMode)
              return (
                console.warn(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
                ),
                e
              );
            if (t === r.TriangleFanDrawMode || t === r.TriangleStripDrawMode) {
              var n = e.getIndex();
              if (null === n) {
                var a = [],
                  o = e.getAttribute("position");
                if (void 0 === o)
                  return (
                    console.error(
                      "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                    ),
                    e
                  );
                for (var i = 0; i < o.count; i++) a.push(i);
                e.setIndex(a), (n = e.getIndex());
              }
              var s = n.count - 2,
                l = [];
              if (t === r.TriangleFanDrawMode)
                for (i = 1; i <= s; i++)
                  l.push(n.getX(0)), l.push(n.getX(i)), l.push(n.getX(i + 1));
              else
                for (i = 0; i < s; i++)
                  i % 2 == 0
                    ? (l.push(n.getX(i)),
                      l.push(n.getX(i + 1)),
                      l.push(n.getX(i + 2)))
                    : (l.push(n.getX(i + 2)),
                      l.push(n.getX(i + 1)),
                      l.push(n.getX(i)));
              l.length / 3 !== s &&
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
                );
              var c = e.clone();
              return c.setIndex(l), c.clearGroups(), c;
            }
            return (
              console.error(
                "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
                t
              ),
              e
            );
          },
        };
    },
    "./src/js/utils/detector.js": (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      const r = {
        canvas: !!window.CanvasRenderingContext2D,
        webgl: (function () {
          try {
            var e = document.createElement("canvas");
            return !(
              !window.WebGLRenderingContext ||
              (!e.getContext("webgl") && !e.getContext("experimental-webgl"))
            );
          } catch (e) {
            return !1;
          }
        })(),
        workers: !!window.Worker,
        fileapi:
          window.File && window.FileReader && window.FileList && window.Blob,
        getWebGLErrorMessage: function () {
          var e = document.createElement("div");
          return (
            (e.id = "webgl-error-message"),
            (e.style.fontFamily = "monospace"),
            (e.style.fontSize = "13px"),
            (e.style.fontWeight = "normal"),
            (e.style.textAlign = "center"),
            (e.style.background = "#fff"),
            (e.style.color = "#000"),
            (e.style.padding = "1.5em"),
            (e.style.width = "400px"),
            (e.style.margin = "5em auto 0"),
            this.webgl ||
              (e.innerHTML = window.WebGLRenderingContext
                ? [
                    'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br />',
                    'Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.',
                  ].join("\n")
                : [
                    'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000000">WebGL</a>.<br/>',
                    'Find out how to get it <a href="http://get.webgl.org/" style="color:#000000">here</a>.',
                  ].join("\n")),
            e
          );
        },
        addGetWebGLMessage: function (e) {
          var t, n, r;
          (t = void 0 !== (e = e || {}).parent ? e.parent : document.body),
            (n = void 0 !== e.id ? e.id : "oldie"),
            ((r = this.getWebGLErrorMessage()).id = n),
            t.appendChild(r);
        },
      };
    },
    "./src/js/utils/helpers.js": (e, t, n) => {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      n.r(t), n.d(t, { default: () => a });
      var a = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, a;
        return (
          (t = e),
          (a = [
            {
              key: "throttle",
              value: function (e, t, n) {
                var r, a;
                return (
                  t || (t = 250),
                  function () {
                    var o = n || this,
                      i = +new Date(),
                      s = arguments;
                    r && i < r + t
                      ? (clearTimeout(a),
                        (a = setTimeout(function () {
                          (r = i), e.apply(o, s);
                        }, t)))
                      : ((r = i), e.apply(o, s));
                  }
                );
              },
            },
            {
              key: "logProgress",
              value: function () {
                return function (e) {
                  if (e.lengthComputable) {
                    var t = (e.loaded / e.total) * 100;
                    console.log(Math.round(t, 2) + "% downloaded");
                  }
                };
              },
            },
            {
              key: "logError",
              value: function () {
                return function (e) {
                  console.error(e);
                };
              },
            },
            {
              key: "handleColorChange",
              value: function (e) {
                return function (t) {
                  "string" == typeof t && (t = t.replace("#", "0x")),
                    e.setHex(t);
                };
              },
            },
            {
              key: "update",
              value: function (e) {
                this.needsUpdate(e.material, e.geometry);
              },
            },
            {
              key: "needsUpdate",
              value: function (e, t) {
                return function () {
                  (e.shading = +e.shading),
                    (e.vertexColors = +e.vertexColors),
                    (e.side = +e.side),
                    (e.needsUpdate = !0),
                    (t.verticesNeedUpdate = !0),
                    (t.normalsNeedUpdate = !0),
                    (t.colorsNeedUpdate = !0);
                };
              },
            },
            {
              key: "updateTexture",
              value: function (e, t, n) {
                return function (r) {
                  (e[t] = n[r]), (e.needsUpdate = !0);
                };
              },
            },
          ]),
          (n = null) && r(t.prototype, n),
          a && r(t, a),
          e
        );
      })();
    },
    "./src/js/utils/keyboard.js": (e, t, n) => {
      "use strict";
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      n.r(t), n.d(t, { default: () => o });
      var a = {
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          space: 32,
          tab: 9,
          escape: 27,
        },
        o = (function () {
          function e(t) {
            var n = this;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.domElement = t || document),
              (this.keyCodes = {}),
              this.domElement.addEventListener(
                "keydown",
                function (e) {
                  return n.onKeyChange(e);
                },
                !1
              ),
              this.domElement.addEventListener(
                "keyup",
                function (e) {
                  return n.onKeyChange(e);
                },
                !1
              ),
              window.addEventListener(
                "blur",
                function () {
                  return n.onBlur;
                },
                !1
              );
          }
          var t, n, o;
          return (
            (t = e),
            (n = [
              {
                key: "destroy",
                value: function () {
                  var e = this;
                  this.domElement.removeEventListener(
                    "keydown",
                    function (t) {
                      return e.onKeyChange(t);
                    },
                    !1
                  ),
                    this.domElement.removeEventListener(
                      "keyup",
                      function (t) {
                        return e.onKeyChange(t);
                      },
                      !1
                    ),
                    window.removeEventListener(
                      "blur",
                      function () {
                        return e.onBlur;
                      },
                      !1
                    );
                },
              },
              {
                key: "onBlur",
                value: function () {
                  for (var e in this.keyCodes) this.keyCodes[e] = !1;
                },
              },
              {
                key: "onKeyChange",
                value: function (e) {
                  var t = e.keyCode;
                  this.keyCodes[t] = "keydown" === e.type;
                },
              },
              {
                key: "pressed",
                value: function (e) {
                  for (var t = e.split("+"), n = 0; n < t.length; n++) {
                    var r = t[n],
                      o = !1;
                    if (
                      ((o =
                        -1 != Object.keys(a).indexOf(r)
                          ? this.keyCodes[a[r]]
                          : this.keyCodes[r.toUpperCase().charCodeAt(0)]),
                      !o)
                    )
                      return !1;
                  }
                  return !0;
                },
              },
              {
                key: "eventMatches",
                value: function (e, t) {
                  for (
                    var n = a, r = Object.keys(n), o = t.split("+"), i = 0;
                    i < o.length;
                    i++
                  ) {
                    var s = o[i],
                      l = !1;
                    if (
                      ("shift" === s
                        ? (l = !!e.shiftKey)
                        : "ctrl" === s
                        ? (l = !!e.ctrlKey)
                        : "alt" === s
                        ? (l = !!e.altKey)
                        : "meta" === s
                        ? (l = !!e.metaKey)
                        : -1 !== r.indexOf(s)
                        ? (l = e.keyCode === n[s])
                        : e.keyCode === s.toUpperCase().charCodeAt(0) &&
                          (l = !0),
                      !l)
                    )
                      return !1;
                  }
                  return !0;
                },
              },
            ]) && r(t.prototype, n),
            o && r(t, o),
            e
          );
        })();
    },
    "./src/js/utils/orbitControls.js": (e) => {
      e.exports = function (e) {
        var t = e.MOUSE;
        function n(t) {
          (this.object = t),
            (this.target = new e.Vector3()),
            (this.minDistance = 0),
            (this.maxDistance = 1 / 0),
            (this.minZoom = 0),
            (this.maxZoom = 1 / 0),
            (this.minPolarAngle = 0),
            (this.maxPolarAngle = Math.PI),
            (this.minAzimuthAngle = -1 / 0),
            (this.maxAzimuthAngle = 1 / 0),
            (this.enableDamping = !1),
            (this.dampingFactor = 0.25);
          var n,
            r,
            a,
            o,
            i,
            s,
            l,
            c,
            u = this,
            d = 1e-6,
            h = 0,
            f = 0,
            m = 1,
            p = new e.Vector3(),
            g = !1;
          (this.getPolarAngle = function () {
            return r;
          }),
            (this.getAzimuthalAngle = function () {
              return n;
            }),
            (this.rotateLeft = function (e) {
              f -= e;
            }),
            (this.rotateUp = function (e) {
              h -= e;
            }),
            (this.panLeft =
              ((a = new e.Vector3()),
              function (e) {
                var t = this.object.matrix.elements;
                a.set(t[0], t[1], t[2]), a.multiplyScalar(-e), p.add(a);
              })),
            (this.panUp = (function () {
              var t = new e.Vector3();
              return function (e) {
                var n = this.object.matrix.elements;
                t.set(n[4], n[5], n[6]), t.multiplyScalar(e), p.add(t);
              };
            })()),
            (this.pan = function (t, n, r, a) {
              if (u.object instanceof e.PerspectiveCamera) {
                var o = u.object.position.clone().sub(u.target).length();
                (o *= Math.tan(((u.object.fov / 2) * Math.PI) / 180)),
                  u.panLeft((2 * t * o) / a),
                  u.panUp((2 * n * o) / a);
              } else
                u.object instanceof e.OrthographicCamera
                  ? (u.panLeft((t * (u.object.right - u.object.left)) / r),
                    u.panUp((n * (u.object.top - u.object.bottom)) / a))
                  : console.warn(
                      "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                    );
            }),
            (this.dollyIn = function (t) {
              u.object instanceof e.PerspectiveCamera
                ? (m /= t)
                : u.object instanceof e.OrthographicCamera
                ? ((u.object.zoom = Math.max(
                    this.minZoom,
                    Math.min(this.maxZoom, this.object.zoom * t)
                  )),
                  u.object.updateProjectionMatrix(),
                  (g = !0))
                : console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                  );
            }),
            (this.dollyOut = function (t) {
              u.object instanceof e.PerspectiveCamera
                ? (m *= t)
                : u.object instanceof e.OrthographicCamera
                ? ((u.object.zoom = Math.max(
                    this.minZoom,
                    Math.min(this.maxZoom, this.object.zoom / t)
                  )),
                  u.object.updateProjectionMatrix(),
                  (g = !0))
                : console.warn(
                    "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
                  );
            }),
            (this.update =
              ((o = new e.Vector3()),
              (i = new e.Quaternion().setFromUnitVectors(
                t.up,
                new e.Vector3(0, 1, 0)
              )),
              (s = i.clone().inverse()),
              (l = new e.Vector3()),
              (c = new e.Quaternion()),
              function () {
                var e = this.object.position;
                o.copy(e).sub(this.target),
                  o.applyQuaternion(i),
                  (n = Math.atan2(o.x, o.z)),
                  (r = Math.atan2(Math.sqrt(o.x * o.x + o.z * o.z), o.y)),
                  (n += f),
                  (r += h),
                  (n = Math.max(
                    this.minAzimuthAngle,
                    Math.min(this.maxAzimuthAngle, n)
                  )),
                  (r = Math.max(
                    this.minPolarAngle,
                    Math.min(this.maxPolarAngle, r)
                  )),
                  (r = Math.max(d, Math.min(Math.PI - d, r)));
                var t = o.length() * m;
                return (
                  (t = Math.max(
                    this.minDistance,
                    Math.min(this.maxDistance, t)
                  )),
                  this.target.add(p),
                  (o.x = t * Math.sin(r) * Math.sin(n)),
                  (o.y = t * Math.cos(r)),
                  (o.z = t * Math.sin(r) * Math.cos(n)),
                  o.applyQuaternion(s),
                  e.copy(this.target).add(o),
                  this.object.lookAt(this.target),
                  !0 === this.enableDamping
                    ? ((f *= 1 - this.dampingFactor),
                      (h *= 1 - this.dampingFactor))
                    : ((f = 0), (h = 0)),
                  (m = 1),
                  p.set(0, 0, 0),
                  !!(
                    g ||
                    l.distanceToSquared(this.object.position) > d ||
                    8 * (1 - c.dot(this.object.quaternion)) > d
                  ) &&
                    (l.copy(this.object.position),
                    c.copy(this.object.quaternion),
                    (g = !1),
                    !0)
                );
              }));
        }
        function r(t, r) {
          var a = new n(t);
          (this.domElement = void 0 !== r ? r : document),
            Object.defineProperty(this, "constraint", {
              get: function () {
                return a;
              },
            }),
            (this.getPolarAngle = function () {
              return a.getPolarAngle();
            }),
            (this.getAzimuthalAngle = function () {
              return a.getAzimuthalAngle();
            }),
            (this.enabled = !0),
            (this.center = this.target),
            (this.enableZoom = !0),
            (this.zoomSpeed = 1),
            (this.enableRotate = !0),
            (this.rotateSpeed = 1),
            (this.enablePan = !0),
            (this.keyPanSpeed = 7),
            (this.autoRotate = !1),
            (this.autoRotateSpeed = 2),
            (this.enableKeys = !0),
            (this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 }),
            (this.mouseButtons = {
              ORBIT: e.MOUSE.LEFT,
              ZOOM: e.MOUSE.MIDDLE,
              PAN: e.MOUSE.RIGHT,
            });
          var o = this,
            i = new e.Vector2(),
            s = new e.Vector2(),
            l = new e.Vector2(),
            c = new e.Vector2(),
            u = new e.Vector2(),
            d = new e.Vector2(),
            h = new e.Vector2(),
            f = new e.Vector2(),
            m = new e.Vector2(),
            p = -1,
            g = 0,
            v = 1,
            b = 2,
            y = 3,
            w = 4,
            L = 5,
            E = p;
          (this.target0 = this.target.clone()),
            (this.position0 = this.object.position.clone()),
            (this.zoom0 = this.object.zoom);
          var M = { type: "change" },
            T = { type: "start" },
            x = { type: "end" };
          function S(e, t) {
            var n =
              o.domElement === document ? o.domElement.body : o.domElement;
            a.pan(e, t, n.clientWidth, n.clientHeight);
          }
          function R() {
            return Math.pow(0.95, o.zoomSpeed);
          }
          function A(e) {
            if (!1 !== o.enabled) {
              if ((e.preventDefault(), e.button === o.mouseButtons.ORBIT)) {
                if (!1 === o.enableRotate) return;
                (E = g), i.set(e.clientX, e.clientY);
              } else if (e.button === o.mouseButtons.ZOOM) {
                if (!1 === o.enableZoom) return;
                (E = v), h.set(e.clientX, e.clientY);
              } else if (e.button === o.mouseButtons.PAN) {
                if (!1 === o.enablePan) return;
                (E = b), c.set(e.clientX, e.clientY);
              }
              E !== p &&
                (document.addEventListener("mousemove", C, !1),
                document.addEventListener("mouseup", j, !1),
                o.dispatchEvent(T));
            }
          }
          function C(e) {
            if (!1 !== o.enabled) {
              e.preventDefault();
              var t =
                o.domElement === document ? o.domElement.body : o.domElement;
              if (E === g) {
                if (!1 === o.enableRotate) return;
                s.set(e.clientX, e.clientY),
                  l.subVectors(s, i),
                  a.rotateLeft(
                    ((2 * Math.PI * l.x) / t.clientWidth) * o.rotateSpeed
                  ),
                  a.rotateUp(
                    ((2 * Math.PI * l.y) / t.clientHeight) * o.rotateSpeed
                  ),
                  i.copy(s);
              } else if (E === v) {
                if (!1 === o.enableZoom) return;
                f.set(e.clientX, e.clientY),
                  m.subVectors(f, h),
                  m.y > 0 ? a.dollyIn(R()) : m.y < 0 && a.dollyOut(R()),
                  h.copy(f);
              } else if (E === b) {
                if (!1 === o.enablePan) return;
                u.set(e.clientX, e.clientY),
                  d.subVectors(u, c),
                  S(d.x, d.y),
                  c.copy(u);
              }
              E !== p && o.update();
            }
          }
          function j() {
            !1 !== o.enabled &&
              (document.removeEventListener("mousemove", C, !1),
              document.removeEventListener("mouseup", j, !1),
              o.dispatchEvent(x),
              (E = p));
          }
          function P(e) {
            if (!1 !== o.enabled && !1 !== o.enableZoom && E === p) {
              e.preventDefault(), e.stopPropagation();
              var t = 0;
              void 0 !== e.wheelDelta
                ? (t = e.wheelDelta)
                : void 0 !== e.detail && (t = -e.detail),
                t > 0 ? a.dollyOut(R()) : t < 0 && a.dollyIn(R()),
                o.update(),
                o.dispatchEvent(T),
                o.dispatchEvent(x);
            }
          }
          function _(e) {
            if (!1 !== o.enabled && !1 !== o.enableKeys && !1 !== o.enablePan)
              switch (e.keyCode) {
                case o.keys.UP:
                  S(0, o.keyPanSpeed), o.update();
                  break;
                case o.keys.BOTTOM:
                  S(0, -o.keyPanSpeed), o.update();
                  break;
                case o.keys.LEFT:
                  S(o.keyPanSpeed, 0), o.update();
                  break;
                case o.keys.RIGHT:
                  S(-o.keyPanSpeed, 0), o.update();
              }
          }
          function F(e) {
            if (!1 !== o.enabled) {
              switch (e.touches.length) {
                case 1:
                  if (!1 === o.enableRotate) return;
                  (E = y), i.set(e.touches[0].pageX, e.touches[0].pageY);
                  break;
                case 2:
                  if (!1 === o.enableZoom) return;
                  E = w;
                  var t = e.touches[0].pageX - e.touches[1].pageX,
                    n = e.touches[0].pageY - e.touches[1].pageY,
                    r = Math.sqrt(t * t + n * n);
                  h.set(0, r);
                  break;
                case 3:
                  if (!1 === o.enablePan) return;
                  (E = L), c.set(e.touches[0].pageX, e.touches[0].pageY);
                  break;
                default:
                  E = p;
              }
              E !== p && o.dispatchEvent(T);
            }
          }
          function O(e) {
            if (!1 !== o.enabled) {
              e.preventDefault(), e.stopPropagation();
              var t =
                o.domElement === document ? o.domElement.body : o.domElement;
              switch (e.touches.length) {
                case 1:
                  if (!1 === o.enableRotate) return;
                  if (E !== y) return;
                  s.set(e.touches[0].pageX, e.touches[0].pageY),
                    l.subVectors(s, i),
                    a.rotateLeft(
                      ((2 * Math.PI * l.x) / t.clientWidth) * o.rotateSpeed
                    ),
                    a.rotateUp(
                      ((2 * Math.PI * l.y) / t.clientHeight) * o.rotateSpeed
                    ),
                    i.copy(s),
                    o.update();
                  break;
                case 2:
                  if (!1 === o.enableZoom) return;
                  if (E !== w) return;
                  var n = e.touches[0].pageX - e.touches[1].pageX,
                    r = e.touches[0].pageY - e.touches[1].pageY,
                    g = Math.sqrt(n * n + r * r);
                  f.set(0, g),
                    m.subVectors(f, h),
                    m.y > 0 ? a.dollyOut(R()) : m.y < 0 && a.dollyIn(R()),
                    h.copy(f),
                    o.update();
                  break;
                case 3:
                  if (!1 === o.enablePan) return;
                  if (E !== L) return;
                  u.set(e.touches[0].pageX, e.touches[0].pageY),
                    d.subVectors(u, c),
                    S(d.x, d.y),
                    c.copy(u),
                    o.update();
                  break;
                default:
                  E = p;
              }
            }
          }
          function k() {
            !1 !== o.enabled && (o.dispatchEvent(x), (E = p));
          }
          function H(e) {
            e.preventDefault();
          }
          (this.update = function () {
            this.autoRotate &&
              E === p &&
              a.rotateLeft(((2 * Math.PI) / 60 / 60) * o.autoRotateSpeed),
              !0 === a.update() && this.dispatchEvent(M);
          }),
            (this.reset = function () {
              (E = p),
                this.target.copy(this.target0),
                this.object.position.copy(this.position0),
                (this.object.zoom = this.zoom0),
                this.object.updateProjectionMatrix(),
                this.dispatchEvent(M),
                this.update();
            }),
            (this.dispose = function () {
              this.domElement.removeEventListener("contextmenu", H, !1),
                this.domElement.removeEventListener("mousedown", A, !1),
                this.domElement.removeEventListener("mousewheel", P, !1),
                this.domElement.removeEventListener(
                  "MozMousePixelScroll",
                  P,
                  !1
                ),
                this.domElement.removeEventListener("touchstart", F, !1),
                this.domElement.removeEventListener("touchend", k, !1),
                this.domElement.removeEventListener("touchmove", O, !1),
                document.removeEventListener("mousemove", C, !1),
                document.removeEventListener("mouseup", j, !1),
                window.removeEventListener("keydown", _, !1);
            }),
            this.domElement.addEventListener("contextmenu", H, !1),
            this.domElement.addEventListener("mousedown", A, !1),
            this.domElement.addEventListener("mousewheel", P, !1),
            this.domElement.addEventListener("MozMousePixelScroll", P, !1),
            this.domElement.addEventListener("touchstart", F, !1),
            this.domElement.addEventListener("touchend", k, !1),
            this.domElement.addEventListener("touchmove", O, !1),
            window.addEventListener("keydown", _, !1),
            this.update();
        }
        return (
          t || (t = { LEFT: 0, MIDDLE: 1, RIGHT: 2 }),
          (r.prototype = Object.create(e.EventDispatcher.prototype)),
          (r.prototype.constructor = r),
          Object.defineProperties(r.prototype, {
            object: {
              get: function () {
                return this.constraint.object;
              },
            },
            target: {
              get: function () {
                return this.constraint.target;
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: target is now immutable. Use target.set() instead."
                ),
                  this.constraint.target.copy(e);
              },
            },
            minDistance: {
              get: function () {
                return this.constraint.minDistance;
              },
              set: function (e) {
                this.constraint.minDistance = e;
              },
            },
            maxDistance: {
              get: function () {
                return this.constraint.maxDistance;
              },
              set: function (e) {
                this.constraint.maxDistance = e;
              },
            },
            minZoom: {
              get: function () {
                return this.constraint.minZoom;
              },
              set: function (e) {
                this.constraint.minZoom = e;
              },
            },
            maxZoom: {
              get: function () {
                return this.constraint.maxZoom;
              },
              set: function (e) {
                this.constraint.maxZoom = e;
              },
            },
            minPolarAngle: {
              get: function () {
                return this.constraint.minPolarAngle;
              },
              set: function (e) {
                this.constraint.minPolarAngle = e;
              },
            },
            maxPolarAngle: {
              get: function () {
                return this.constraint.maxPolarAngle;
              },
              set: function (e) {
                this.constraint.maxPolarAngle = e;
              },
            },
            minAzimuthAngle: {
              get: function () {
                return this.constraint.minAzimuthAngle;
              },
              set: function (e) {
                this.constraint.minAzimuthAngle = e;
              },
            },
            maxAzimuthAngle: {
              get: function () {
                return this.constraint.maxAzimuthAngle;
              },
              set: function (e) {
                this.constraint.maxAzimuthAngle = e;
              },
            },
            enableDamping: {
              get: function () {
                return this.constraint.enableDamping;
              },
              set: function (e) {
                this.constraint.enableDamping = e;
              },
            },
            dampingFactor: {
              get: function () {
                return this.constraint.dampingFactor;
              },
              set: function (e) {
                this.constraint.dampingFactor = e;
              },
            },
            noZoom: {
              get: function () {
                return (
                  console.warn(
                    "THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."
                  ),
                  !this.enableZoom
                );
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."
                ),
                  (this.enableZoom = !e);
              },
            },
            noRotate: {
              get: function () {
                return (
                  console.warn(
                    "THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."
                  ),
                  !this.enableRotate
                );
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."
                ),
                  (this.enableRotate = !e);
              },
            },
            noPan: {
              get: function () {
                return (
                  console.warn(
                    "THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."
                  ),
                  !this.enablePan
                );
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."
                ),
                  (this.enablePan = !e);
              },
            },
            noKeys: {
              get: function () {
                return (
                  console.warn(
                    "THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."
                  ),
                  !this.enableKeys
                );
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."
                ),
                  (this.enableKeys = !e);
              },
            },
            staticMoving: {
              get: function () {
                return (
                  console.warn(
                    "THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."
                  ),
                  !this.constraint.enableDamping
                );
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."
                ),
                  (this.constraint.enableDamping = !e);
              },
            },
            dynamicDampingFactor: {
              get: function () {
                return (
                  console.warn(
                    "THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."
                  ),
                  this.constraint.dampingFactor
                );
              },
              set: function (e) {
                console.warn(
                  "THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."
                ),
                  (this.constraint.dampingFactor = e);
              },
            },
          }),
          r
        );
      };
    },
    "./src/css/app.scss": (e, t, n) => {
      "use strict";
      n.r(t);
    },
  },
  (e) => {
    "use strict";
    e.O(0, ["vendors"], () => {
      return (t = "./src/js/app.js"), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9jb21wb25lbnRzL2NhbWVyYS5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9jb21wb25lbnRzL2NvbnRyb2xzLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwL2NvbXBvbmVudHMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1lczYtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAvY29tcG9uZW50cy9saWdodC5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9jb21wb25lbnRzL21hdGVyaWFsLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwL2NvbXBvbmVudHMvcmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1lczYtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAvaGVscGVycy9tZXNoSGVscGVyLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwL2hlbHBlcnMvc3RhdHMuanMiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1lczYtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9hcHAvaGVscGVycy92ZXJ0ZXhOb3JtYWxzSGVscGVyLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwL2xvYWRlcnMvR0xURkxvYWRlci5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9tYWluLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwL21hbmFnZXJzL2RhdEdVSS5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9tYW5hZ2Vycy9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9tb2RlbC9tb2RlbC5qcyIsIndlYnBhY2s6Ly90aHJlZWpzLWVzNi13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC9tb2RlbC90ZXh0dXJlLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvZGF0YS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1lczYtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy91dGlscy9idWZmZXJHZW9tZXRyeVV0aWxzLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvdXRpbHMvZGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1lczYtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy91dGlscy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RocmVlanMtZXM2LXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvdXRpbHMva2V5Ym9hcmQuanMiLCJ3ZWJwYWNrOi8vdGhyZWVqcy1lczYtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy91dGlscy9vcmJpdENvbnRyb2xzLmpzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJDb25maWciLCJEZXRlY3RvciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJNYWluIiwiaW5pdCIsIkNhbWVyYSIsInJlbmRlcmVyIiwid2lkdGgiLCJkb21FbGVtZW50IiwiaGVpZ2h0IiwidGhpcyIsInRocmVlQ2FtZXJhIiwiVEhSRUUiLCJwb3NpdGlvbiIsInNldCIsInVwZGF0ZVNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIkNvbnRyb2xzIiwiY2FtZXJhIiwib3JiaXRDb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJ0aHJlZUNvbnRyb2xzIiwidGFyZ2V0IiwiYXV0b1JvdGF0ZSIsImF1dG9Sb3RhdGVTcGVlZCIsInJvdGF0ZVNwZWVkIiwiem9vbVNwZWVkIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImVuYWJsZVpvb20iLCJkYW1waW5nRmFjdG9yIiwiR2VvbWV0cnkiLCJzY2VuZSIsImdlbyIsInR5cGUiLCJ3aWR0aFNlZ21lbnRzIiwiaGVpZ2h0U2VnbWVudHMiLCJyYWRpdXMiLCJyb3RhdGlvbiIsIm1hdGVyaWFsIiwiTWF0ZXJpYWwiLCJzdGFuZGFyZCIsIm1lc2giLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiTGlnaHQiLCJhbWJpZW50TGlnaHQiLCJ2aXNpYmxlIiwicG9pbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJjYXN0U2hhZG93Iiwic2hhZG93IiwiYmlhcyIsIm5lYXIiLCJmYXIiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJtYXBTaXplIiwiZGlyZWN0aW9uYWxMaWdodEhlbHBlciIsImhlbWlMaWdodCIsImxpZ2h0TmFtZSIsImNvbG9yIiwiYmFzaWMiLCJzaWRlIiwic2hhZGluZyIsInJvdWdobmVzcyIsIm1ldGFsbmVzcyIsIndpcmUiLCJ3aXJlZnJhbWUiLCJSZW5kZXJlciIsInRocmVlUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRDbGVhckNvbG9yIiwiZm9nIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJhcHBlbmRDaGlsZCIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJjYXBhYmlsaXRpZXMiLCJnZXRNYXhBbmlzb3Ryb3B5Iiwic2V0U2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVuZGVyIiwiTWVzaEhlbHBlciIsImdlb21ldHJ5Iiwid2lyZUxpbmUiLCJkZXB0aFRlc3QiLCJvcGFjaXR5IiwidHJhbnNwYXJlbnQiLCJlZGdlcyIsImVkZ2VzTGluZSIsInZlcnRleEhlbHBlciIsIlZlcnRleE5vcm1hbHNIZWxwZXIiLCJib3hIZWxwZXIiLCJyZW1vdmUiLCJyUyIsImJTIiwiZ2xTIiwidFMiLCJTdGF0cyIsInN0YXJ0IiwidGljayIsImZyYW1lIiwiZW5kIiwidXBkYXRlIiwiQnJvd3NlclN0YXRzIiwiZ2xTdGF0cyIsInRocmVlU3RhdHMiLCJyU3RhdHMiLCJDU1NQYXRoIiwidXNlclRpbWluZ0FQSSIsInZhbHVlcyIsImNhcHRpb24iLCJvdmVyIiwiYXZlcmFnZSIsImF2Z01zIiwiZnBzIiwiYmVsb3ciLCJjYWxscyIsInJhZiIsInJzdGF0cyIsInRleHR1cmUiLCJncm91cHMiLCJmcmFjdGlvbnMiLCJiYXNlIiwic3RlcHMiLCJwbHVnaW5zIiwiX3YxIiwiVmVjdG9yMyIsIl92MiIsIl9ub3JtYWxNYXRyaXgiLCJNYXRyaXgzIiwiX2tleXMiLCJvYmplY3QiLCJzaXplIiwiaGV4IiwidW5kZWZpbmVkIiwibk5vcm1hbHMiLCJvYmpHZW9tZXRyeSIsImlzR2VvbWV0cnkiLCJmYWNlcyIsImxlbmd0aCIsImlzQnVmZmVyR2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwibm9ybWFsIiwiY291bnQiLCJCdWZmZXJHZW9tZXRyeSIsInBvc2l0aW9ucyIsIkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJMaW5lU2VnbWVudHMiLCJMaW5lQmFzaWNNYXRlcmlhbCIsInRvbmVNYXBwZWQiLCJtYXRyaXhBdXRvVXBkYXRlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiY29uc3RydWN0b3IiLCJpZHgiLCJ1cGRhdGVNYXRyaXhXb3JsZCIsImdldE5vcm1hbE1hdHJpeCIsIm1hdHJpeFdvcmxkIiwidmVydGljZXMiLCJpIiwibCIsImZhY2UiLCJqIiwiamwiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4IiwiY29weSIsImFwcGx5TWF0cml4NCIsImFwcGx5TWF0cml4MyIsIm5vcm1hbGl6ZSIsIm11bHRpcGx5U2NhbGFyIiwic2V0WFlaIiwieCIsInkiLCJ6Iiwib2JqUG9zIiwib2JqTm9ybSIsImdldFgiLCJnZXRZIiwiZ2V0WiIsIm5lZWRzVXBkYXRlIiwiR0xURkxvYWRlciIsIm1hbmFnZXIiLCJMb2FkZXIiLCJkcmFjb0xvYWRlciIsImRkc0xvYWRlciIsIkdMVEZSZWdpc3RyeSIsIm9iamVjdHMiLCJnZXQiLCJrZXkiLCJyZW1vdmVBbGwiLCJhc3NpZ24iLCJsb2FkIiwidXJsIiwib25Mb2FkIiwib25Qcm9ncmVzcyIsIm9uRXJyb3IiLCJyZXNvdXJjZVBhdGgiLCJzY29wZSIsInBhdGgiLCJMb2FkZXJVdGlscyIsIml0ZW1TdGFydCIsIl9vbkVycm9yIiwiZSIsImVycm9yIiwiaXRlbUVycm9yIiwiaXRlbUVuZCIsImxvYWRlciIsIkZpbGVMb2FkZXIiLCJzZXRQYXRoIiwic2V0UmVzcG9uc2VUeXBlIiwiY3Jvc3NPcmlnaW4iLCJzZXRXaXRoQ3JlZGVudGlhbHMiLCJkYXRhIiwicGFyc2UiLCJnbHRmIiwic2V0RFJBQ09Mb2FkZXIiLCJzZXRERFNMb2FkZXIiLCJjb250ZW50IiwiZXh0ZW5zaW9ucyIsIlVpbnQ4QXJyYXkiLCJCSU5BUllfRVhURU5TSU9OX0hFQURFUl9NQUdJQyIsIkVYVEVOU0lPTlMiLCJLSFJfQklOQVJZX0dMVEYiLCJHTFRGQmluYXJ5RXh0ZW5zaW9uIiwianNvbiIsIkpTT04iLCJhc3NldCIsInZlcnNpb24iLCJFcnJvciIsImV4dGVuc2lvbnNVc2VkIiwiZXh0ZW5zaW9uTmFtZSIsImV4dGVuc2lvbnNSZXF1aXJlZCIsIktIUl9MSUdIVFNfUFVOQ1RVQUwiLCJHTFRGTGlnaHRzRXh0ZW5zaW9uIiwiS0hSX01BVEVSSUFMU19DTEVBUkNPQVQiLCJHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uIiwiS0hSX01BVEVSSUFMU19VTkxJVCIsIkdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbiIsIktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MiLCJHTFRGTWF0ZXJpYWxzUGJyU3BlY3VsYXJHbG9zc2luZXNzRXh0ZW5zaW9uIiwiS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT04iLCJHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24iLCJNU0ZUX1RFWFRVUkVfRERTIiwiR0xURlRleHR1cmVERFNFeHRlbnNpb24iLCJLSFJfVEVYVFVSRV9UUkFOU0ZPUk0iLCJHTFRGVGV4dHVyZVRyYW5zZm9ybUV4dGVuc2lvbiIsIktIUl9NRVNIX1FVQU5USVpBVElPTiIsIkdMVEZNZXNoUXVhbnRpemF0aW9uRXh0ZW5zaW9uIiwiaW5kZXhPZiIsIndhcm4iLCJHTFRGUGFyc2VyIiwibmFtZSIsImV4dGVuc2lvbiIsImxpZ2h0RGVmcyIsImxpZ2h0cyIsImxvYWRMaWdodCIsImxpZ2h0SW5kZXgiLCJsaWdodE5vZGUiLCJsaWdodERlZiIsIkNvbG9yIiwiZnJvbUFycmF5IiwicmFuZ2UiLCJEaXJlY3Rpb25hbExpZ2h0IiwiUG9pbnRMaWdodCIsImRpc3RhbmNlIiwiU3BvdExpZ2h0Iiwic3BvdCIsImlubmVyQ29uZUFuZ2xlIiwib3V0ZXJDb25lQW5nbGUiLCJNYXRoIiwiUEkiLCJhbmdsZSIsInBlbnVtYnJhIiwiZGVjYXkiLCJpbnRlbnNpdHkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImdldE1hdGVyaWFsVHlwZSIsIk1lc2hCYXNpY01hdGVyaWFsIiwiZXh0ZW5kUGFyYW1zIiwibWF0ZXJpYWxQYXJhbXMiLCJtYXRlcmlhbERlZiIsInBhcnNlciIsInBlbmRpbmciLCJtZXRhbGxpY1JvdWdobmVzcyIsInBick1ldGFsbGljUm91Z2huZXNzIiwiQXJyYXkiLCJpc0FycmF5IiwiYmFzZUNvbG9yRmFjdG9yIiwiYXJyYXkiLCJiYXNlQ29sb3JUZXh0dXJlIiwicHVzaCIsImFzc2lnblRleHR1cmUiLCJhbGwiLCJNZXNoUGh5c2ljYWxNYXRlcmlhbCIsImNsZWFyY29hdEZhY3RvciIsImNsZWFyY29hdCIsImNsZWFyY29hdFRleHR1cmUiLCJjbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3IiLCJjbGVhcmNvYXRSb3VnaG5lc3MiLCJjbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlIiwiY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSIsInNjYWxlIiwiY2xlYXJjb2F0Tm9ybWFsU2NhbGUiLCJWZWN0b3IyIiwiQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyIsImJvZHkiLCJoZWFkZXJWaWV3IiwiRGF0YVZpZXciLCJoZWFkZXIiLCJtYWdpYyIsInNsaWNlIiwiZ2V0VWludDMyIiwiY2h1bmtWaWV3IiwiY2h1bmtJbmRleCIsImJ5dGVMZW5ndGgiLCJjaHVua0xlbmd0aCIsImNodW5rVHlwZSIsImNvbnRlbnRBcnJheSIsImJ5dGVPZmZzZXQiLCJwcmVsb2FkIiwiR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwiLCJwYXJhbXMiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsImlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsIiwic3BlY3VsYXJNYXBQYXJzRnJhZ21lbnRDaHVuayIsImpvaW4iLCJnbG9zc2luZXNzTWFwUGFyc0ZyYWdtZW50Q2h1bmsiLCJzcGVjdWxhck1hcEZyYWdtZW50Q2h1bmsiLCJnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayIsImxpZ2h0UGh5c2ljYWxGcmFnbWVudENodW5rIiwidW5pZm9ybXMiLCJzcGVjdWxhciIsInZhbHVlIiwic2V0SGV4IiwiZ2xvc3NpbmVzcyIsInNwZWN1bGFyTWFwIiwiZ2xvc3NpbmVzc01hcCIsIl9leHRyYVVuaWZvcm1zIiwib25CZWZvcmVDb21waWxlIiwic2hhZGVyIiwidW5pZm9ybU5hbWUiLCJmcmFnbWVudFNoYWRlciIsInJlcGxhY2UiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidiIsImRlZmluZXMiLCJVU0VfR0xPU1NJTkVTU01BUCIsIlVTRV9ST1VHSE5FU1NNQVAiLCJtZXRhbG5lc3NNYXAiLCJyb3VnaG5lc3NNYXAiLCJzZXRWYWx1ZXMiLCJzcGVjdWxhckdsb3NzaW5lc3NQYXJhbXMiLCJwYnJTcGVjdWxhckdsb3NzaW5lc3MiLCJkaWZmdXNlRmFjdG9yIiwiZGlmZnVzZVRleHR1cmUiLCJlbWlzc2l2ZSIsImdsb3NzaW5lc3NGYWN0b3IiLCJzcGVjdWxhckZhY3RvciIsInNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUiLCJzcGVjR2xvc3NNYXBEZWYiLCJjcmVhdGVNYXRlcmlhbCIsIm1hcCIsImxpZ2h0TWFwIiwibGlnaHRNYXBJbnRlbnNpdHkiLCJhb01hcCIsImFvTWFwSW50ZW5zaXR5IiwiZW1pc3NpdmVJbnRlbnNpdHkiLCJlbWlzc2l2ZU1hcCIsImJ1bXBNYXAiLCJidW1wU2NhbGUiLCJub3JtYWxNYXAiLCJub3JtYWxNYXBUeXBlIiwiVGFuZ2VudFNwYWNlTm9ybWFsTWFwIiwibm9ybWFsU2NhbGUiLCJkaXNwbGFjZW1lbnRNYXAiLCJkaXNwbGFjZW1lbnRTY2FsZSIsImRpc3BsYWNlbWVudEJpYXMiLCJhbHBoYU1hcCIsImVudk1hcCIsImVudk1hcEludGVuc2l0eSIsInJlZnJhY3Rpb25SYXRpbyIsIkdMVEZDdWJpY1NwbGluZUludGVycG9sYW50IiwicGFyYW1ldGVyUG9zaXRpb25zIiwic2FtcGxlVmFsdWVzIiwic2FtcGxlU2l6ZSIsInJlc3VsdEJ1ZmZlciIsIkludGVycG9sYW50IiwiZGVjb2RlUHJpbWl0aXZlIiwicHJpbWl0aXZlIiwiYnVmZmVyVmlld0luZGV4IiwiYnVmZmVyVmlldyIsImdsdGZBdHRyaWJ1dGVNYXAiLCJ0aHJlZUF0dHJpYnV0ZU1hcCIsImF0dHJpYnV0ZU5vcm1hbGl6ZWRNYXAiLCJhdHRyaWJ1dGVUeXBlTWFwIiwiYXR0cmlidXRlTmFtZSIsInRocmVlQXR0cmlidXRlTmFtZSIsIkFUVFJJQlVURVMiLCJ0b0xvd2VyQ2FzZSIsImFjY2Vzc29yRGVmIiwiYWNjZXNzb3JzIiwiY29tcG9uZW50VHlwZSIsIldFQkdMX0NPTVBPTkVOVF9UWVBFUyIsIm5vcm1hbGl6ZWQiLCJnZXREZXBlbmRlbmN5IiwidGhlbiIsImRlY29kZURyYWNvRmlsZSIsImF0dHJpYnV0ZSIsImV4dGVuZFRleHR1cmUiLCJ0cmFuc2Zvcm0iLCJjbG9uZSIsIm9mZnNldCIsInJlcGVhdCIsInRleENvb3JkIiwic291cmNlIiwiY29weVNhbXBsZVZhbHVlXyIsImluZGV4IiwicmVzdWx0IiwidmFsdWVTaXplIiwiYmVmb3JlU3RhcnRfIiwiYWZ0ZXJFbmRfIiwiaW50ZXJwb2xhdGVfIiwiaTEiLCJ0MCIsInQiLCJ0MSIsInN0cmlkZSIsInN0cmlkZTIiLCJzdHJpZGUzIiwidGQiLCJwIiwicHAiLCJwcHAiLCJvZmZzZXQxIiwib2Zmc2V0MCIsInMyIiwiczMiLCJzMCIsInMxIiwicDAiLCJtMCIsInAxIiwibTEiLCJXRUJHTF9DT05TVEFOVFMiLCI1MTIwIiwiSW50OEFycmF5IiwiNTEyMSIsIjUxMjIiLCJJbnQxNkFycmF5IiwiNTEyMyIsIlVpbnQxNkFycmF5IiwiNTEyNSIsIlVpbnQzMkFycmF5IiwiNTEyNiIsIkZsb2F0MzJBcnJheSIsIldFQkdMX0ZJTFRFUlMiLCI5NzI4IiwiTmVhcmVzdEZpbHRlciIsIjk3MjkiLCJMaW5lYXJGaWx0ZXIiLCI5OTg0IiwiTmVhcmVzdE1pcG1hcE5lYXJlc3RGaWx0ZXIiLCI5OTg1IiwiTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlciIsIjk5ODYiLCJOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyIiwiOTk4NyIsIkxpbmVhck1pcG1hcExpbmVhckZpbHRlciIsIldFQkdMX1dSQVBQSU5HUyIsIjMzMDcxIiwiQ2xhbXBUb0VkZ2VXcmFwcGluZyIsIjMzNjQ4IiwiTWlycm9yZWRSZXBlYXRXcmFwcGluZyIsIjEwNDk3IiwiUmVwZWF0V3JhcHBpbmciLCJXRUJHTF9UWVBFX1NJWkVTIiwiU0NBTEFSIiwiVkVDMiIsIlZFQzMiLCJWRUM0IiwiTUFUMiIsIk1BVDMiLCJNQVQ0IiwiUE9TSVRJT04iLCJOT1JNQUwiLCJUQU5HRU5UIiwiVEVYQ09PUkRfMCIsIlRFWENPT1JEXzEiLCJDT0xPUl8wIiwiV0VJR0hUU18wIiwiSk9JTlRTXzAiLCJQQVRIX1BST1BFUlRJRVMiLCJ0cmFuc2xhdGlvbiIsIndlaWdodHMiLCJJTlRFUlBPTEFUSU9OIiwiQ1VCSUNTUExJTkUiLCJMSU5FQVIiLCJJbnRlcnBvbGF0ZUxpbmVhciIsIlNURVAiLCJJbnRlcnBvbGF0ZURpc2NyZXRlIiwiQUxQSEFfTU9ERVMiLCJNSU1FX1RZUEVfRk9STUFUUyIsIlJHQkFGb3JtYXQiLCJSR0JGb3JtYXQiLCJyZXNvbHZlVVJMIiwidGVzdCIsImFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YSIsImtub3duRXh0ZW5zaW9ucyIsIm9iamVjdERlZiIsInVzZXJEYXRhIiwiZ2x0ZkV4dGVuc2lvbnMiLCJhc3NpZ25FeHRyYXNUb1VzZXJEYXRhIiwiZ2x0ZkRlZiIsImV4dHJhcyIsInVwZGF0ZU1vcnBoVGFyZ2V0cyIsIm1lc2hEZWYiLCJpbCIsIm1vcnBoVGFyZ2V0SW5mbHVlbmNlcyIsInRhcmdldE5hbWVzIiwibW9ycGhUYXJnZXREaWN0aW9uYXJ5IiwiY3JlYXRlQXR0cmlidXRlc0tleSIsImF0dHJpYnV0ZXNLZXkiLCJrZXlzIiwic29ydCIsIm9wdGlvbnMiLCJjYWNoZSIsInByaW1pdGl2ZUNhY2hlIiwidGV4dHVyZUxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJzZXRDcm9zc09yaWdpbiIsImZpbGVMb2FkZXIiLCJhZGRQcmltaXRpdmVBdHRyaWJ1dGVzIiwicHJpbWl0aXZlRGVmIiwiYXNzaWduQXR0cmlidXRlQWNjZXNzb3IiLCJhY2Nlc3NvckluZGV4IiwiYWNjZXNzb3IiLCJnbHRmQXR0cmlidXRlTmFtZSIsImluZGljZXMiLCJzZXRJbmRleCIsImJveCIsIkJveDMiLCJtaW4iLCJtYXgiLCJ0YXJnZXRzIiwibWF4RGlzcGxhY2VtZW50IiwidmVjdG9yIiwic2V0WCIsImFicyIsInNldFkiLCJzZXRaIiwiZXhwYW5kQnlWZWN0b3IiLCJib3VuZGluZ0JveCIsInNwaGVyZSIsIlNwaGVyZSIsImdldENlbnRlciIsImNlbnRlciIsImRpc3RhbmNlVG8iLCJib3VuZGluZ1NwaGVyZSIsImNvbXB1dGVCb3VuZHMiLCJoYXNNb3JwaFBvc2l0aW9uIiwiaGFzTW9ycGhOb3JtYWwiLCJwZW5kaW5nUG9zaXRpb25BY2Nlc3NvcnMiLCJwZW5kaW5nTm9ybWFsQWNjZXNzb3JzIiwicGVuZGluZ0FjY2Vzc29yIiwibW9ycGhQb3NpdGlvbnMiLCJtb3JwaE5vcm1hbHMiLCJtb3JwaEF0dHJpYnV0ZXMiLCJtb3JwaFRhcmdldHNSZWxhdGl2ZSIsImFkZE1vcnBoVGFyZ2V0cyIsInRvVHJpYW5nbGVzRHJhd01vZGUiLCJkcmF3TW9kZSIsImdldEluZGV4IiwiZ2V0QXR0cmlidXRlIiwibnVtYmVyT2ZUcmlhbmdsZXMiLCJuZXdJbmRpY2VzIiwiVHJpYW5nbGVGYW5EcmF3TW9kZSIsIm5ld0dlb21ldHJ5IiwibWFya0RlZnMiLCJnZXREZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXMiLCJzY2VuZXMiLCJhbmltYXRpb25zIiwiY2FtZXJhcyIsIm5vZGVEZWZzIiwibm9kZXMiLCJza2luRGVmcyIsInNraW5zIiwibWVzaERlZnMiLCJtZXNoZXMiLCJtZXNoUmVmZXJlbmNlcyIsIm1lc2hVc2VzIiwic2tpbkluZGV4Iiwic2tpbkxlbmd0aCIsImpvaW50cyIsImlzQm9uZSIsIm5vZGVJbmRleCIsIm5vZGVMZW5ndGgiLCJub2RlRGVmIiwic2tpbiIsImlzU2tpbm5lZE1lc2giLCJjYWNoZUtleSIsImRlcGVuZGVuY3kiLCJsb2FkU2NlbmUiLCJsb2FkTm9kZSIsImxvYWRNZXNoIiwibG9hZEFjY2Vzc29yIiwibG9hZEJ1ZmZlclZpZXciLCJsb2FkQnVmZmVyIiwibG9hZE1hdGVyaWFsIiwibG9hZFRleHR1cmUiLCJsb2FkU2tpbiIsImxvYWRBbmltYXRpb24iLCJsb2FkQ2FtZXJhIiwiZGVmcyIsImRlZiIsImJ1ZmZlckluZGV4IiwiYnVmZmVyRGVmIiwiYnVmZmVycyIsInVyaSIsInJlamVjdCIsImJ1ZmZlclZpZXdEZWYiLCJidWZmZXJWaWV3cyIsImJ1ZmZlciIsInNwYXJzZSIsInBlbmRpbmdCdWZmZXJWaWV3cyIsImJ1ZmZlckF0dHJpYnV0ZSIsIml0ZW1TaXplIiwiVHlwZWRBcnJheSIsImVsZW1lbnRCeXRlcyIsIkJZVEVTX1BFUl9FTEVNRU5UIiwiaXRlbUJ5dGVzIiwiYnl0ZVN0cmlkZSIsImliU2xpY2UiLCJmbG9vciIsImliQ2FjaGVLZXkiLCJpYiIsIkludGVybGVhdmVkQnVmZmVyIiwiSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUiLCJCdWZmZXJBdHRyaWJ1dGUiLCJpdGVtU2l6ZUluZGljZXMiLCJUeXBlZEFycmF5SW5kaWNlcyIsImJ5dGVPZmZzZXRJbmRpY2VzIiwiYnl0ZU9mZnNldFZhbHVlcyIsInNwYXJzZUluZGljZXMiLCJzcGFyc2VWYWx1ZXMiLCJzZXRXIiwidGV4dHVyZUluZGV4IiwiVVJMIiwic2VsZiIsIndlYmtpdFVSTCIsInRleHR1cmVEZWYiLCJ0ZXh0dXJlcyIsInRleHR1cmVFeHRlbnNpb25zIiwic291cmNlVVJJIiwiaW1hZ2VzIiwiaXNPYmplY3RVUkwiLCJibG9iIiwiQmxvYiIsIm1pbWVUeXBlIiwiY3JlYXRlT2JqZWN0VVJMIiwiZ2V0SGFuZGxlciIsInJldm9rZU9iamVjdFVSTCIsImZsaXBZIiwiZm9ybWF0Iiwic2FtcGxlciIsInNhbXBsZXJzIiwibWFnRmlsdGVyIiwibWluRmlsdGVyIiwid3JhcFMiLCJ3cmFwVCIsIm1hcE5hbWUiLCJtYXBEZWYiLCJpc0NvbXByZXNzZWRUZXh0dXJlIiwiYXNzaWduRmluYWxNYXRlcmlhbCIsInVzZVZlcnRleFRhbmdlbnRzIiwidGFuZ2VudCIsInVzZVZlcnRleENvbG9ycyIsInVzZUZsYXRTaGFkaW5nIiwidXNlU2tpbm5pbmciLCJ1c2VNb3JwaFRhcmdldHMiLCJ1c2VNb3JwaE5vcm1hbHMiLCJpc1BvaW50cyIsInV1aWQiLCJwb2ludHNNYXRlcmlhbCIsIlBvaW50c01hdGVyaWFsIiwic2l6ZUF0dGVudWF0aW9uIiwiaXNMaW5lIiwibGluZU1hdGVyaWFsIiwiY2FjaGVkTWF0ZXJpYWwiLCJza2lubmluZyIsInZlcnRleFRhbmdlbnRzIiwidmVydGV4Q29sb3JzIiwiZmxhdFNoYWRpbmciLCJtb3JwaFRhcmdldHMiLCJ1djIiLCJ1diIsIm1hdGVyaWFsSW5kZXgiLCJtYXRlcmlhbFR5cGUiLCJtYXRlcmlhbHMiLCJtYXRlcmlhbEV4dGVuc2lvbnMiLCJzZ0V4dGVuc2lvbiIsImttdUV4dGVuc2lvbiIsIm1ldGFsbGljRmFjdG9yIiwicm91Z2huZXNzRmFjdG9yIiwibWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlIiwiZG91YmxlU2lkZWQiLCJEb3VibGVTaWRlIiwiYWxwaGFNb2RlIiwiZGVwdGhXcml0ZSIsImFscGhhVGVzdCIsImFscGhhQ3V0b2ZmIiwibm9ybWFsVGV4dHVyZSIsIm9jY2x1c2lvblRleHR1cmUiLCJzdHJlbmd0aCIsImVtaXNzaXZlRmFjdG9yIiwiZW1pc3NpdmVUZXh0dXJlIiwiY2xlYXJjb2F0RXh0ZW5zaW9uIiwiZW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJsb2FkR2VvbWV0cmllcyIsInByaW1pdGl2ZXMiLCJjcmVhdGVEcmFjb1ByaW1pdGl2ZSIsImRyYWNvRXh0ZW5zaW9uIiwiZ2VvbWV0cnlQcm9taXNlIiwibW9kZSIsImNhY2hlZCIsInByb21pc2UiLCJtZXNoSW5kZXgiLCJGcm9udFNpZGUiLCJyZXN1bHRzIiwiZ2VvbWV0cmllcyIsIlNraW5uZWRNZXNoIiwiTWVzaCIsInNraW5XZWlnaHQiLCJub3JtYWxpemVTa2luV2VpZ2h0cyIsIlRyaWFuZ2xlU3RyaXBEcmF3TW9kZSIsIkxpbmUiLCJMaW5lTG9vcCIsIlBvaW50cyIsImdyb3VwIiwiR3JvdXAiLCJjYW1lcmFJbmRleCIsImNhbWVyYURlZiIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiTWF0aFV0aWxzIiwieWZvdiIsImFzcGVjdFJhdGlvIiwiem5lYXIiLCJ6ZmFyIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwieG1hZyIsInltYWciLCJza2luRGVmIiwic2tpbkVudHJ5IiwiaW52ZXJzZUJpbmRNYXRyaWNlcyIsImFuaW1hdGlvbkluZGV4IiwiYW5pbWF0aW9uRGVmIiwicGVuZGluZ05vZGVzIiwicGVuZGluZ0lucHV0QWNjZXNzb3JzIiwicGVuZGluZ091dHB1dEFjY2Vzc29ycyIsInBlbmRpbmdTYW1wbGVycyIsInBlbmRpbmdUYXJnZXRzIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwibm9kZSIsImlkIiwiaW5wdXQiLCJwYXJhbWV0ZXJzIiwib3V0cHV0IiwiaW5wdXRBY2Nlc3NvcnMiLCJvdXRwdXRBY2Nlc3NvcnMiLCJ0cmFja3MiLCJpbnB1dEFjY2Vzc29yIiwib3V0cHV0QWNjZXNzb3IiLCJUeXBlZEtleWZyYW1lVHJhY2siLCJ1cGRhdGVNYXRyaXgiLCJOdW1iZXJLZXlmcmFtZVRyYWNrIiwiUXVhdGVybmlvbktleWZyYW1lVHJhY2siLCJWZWN0b3JLZXlmcmFtZVRyYWNrIiwidGFyZ2V0TmFtZSIsImludGVycG9sYXRpb24iLCJ0cmF2ZXJzZSIsImlzTWVzaCIsIm91dHB1dEFycmF5Iiwic2NhbGVkIiwidHJhY2siLCJjcmVhdGVJbnRlcnBvbGFudCIsInRpbWVzIiwiZ2V0VmFsdWVTaXplIiwiaXNJbnRlcnBvbGFudEZhY3RvcnlNZXRob2RHTFRGQ3ViaWNTcGxpbmUiLCJBbmltYXRpb25DbGlwIiwiaW5zdGFuY2VOdW0iLCJvIiwibGlnaHQiLCJCb25lIiwiT2JqZWN0M0QiLCJQcm9wZXJ0eUJpbmRpbmciLCJtYXRyaXgiLCJNYXRyaXg0IiwicXVhdGVybmlvbiIsImJ1aWxkTm9kZUhpZXJhY2h5Iiwibm9kZUlkIiwicGFyZW50T2JqZWN0IiwicGVuZGluZ0pvaW50cyIsImpvaW50Tm9kZXMiLCJib25lcyIsImJvbmVJbnZlcnNlcyIsImpvaW50Tm9kZSIsIm1hdCIsImJpbmQiLCJTa2VsZXRvbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJzY2VuZUluZGV4Iiwic2NlbmVEZWYiLCJub2RlSWRzIiwiY2xvY2siLCJjb250cm9scyIsImZvckVhY2giLCJwbGFjZSIsIm1ha2UiLCJzdGF0cyIsInNldFVwIiwiZ3VpIiwiRGF0R1VJIiwiVGV4dHVyZSIsIm1vZGVsIiwiTW9kZWwiLCJpdGVtIiwibG9hZGVkIiwidG90YWwiLCJJbnRlcmFjdGlvbiIsIm1lc2hIZWxwZXIiLCJvYmoiLCJlbmFibGUiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5IiwiVFdFRU4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtYWluIiwiZGF0IiwiR1VJIiwiY2FtZXJhRm9sZGVyIiwiYWRkRm9sZGVyIiwiY2FtZXJhRk9WR3VpIiwib25DaGFuZ2UiLCJlbmFibGVSb3RhdGUiLCJmb3YiLCJvbkZpbmlzaENoYW5nZSIsImNhbWVyYUFzcGVjdEd1aSIsImFkZENvbG9yIiwiY2FtZXJhRm9nTmVhckd1aSIsImRlbnNpdHkiLCJjb250cm9sc0ZvbGRlciIsImNvbnRyb2xzQXV0b1JvdGF0ZVNwZWVkR3VpIiwiZGlzYWJsZSIsInVubG9hZCIsIm1lc2hGb2xkZXIiLCJhbWJpZW50TGlnaHRGb2xkZXIiLCJkaXJlY3Rpb25hbExpZ2h0Rm9sZGVyIiwiZGlyZWN0aW9uYWxMaWdodEludGVuc2l0eUd1aSIsImRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvblhHdWkiLCJkaXJlY3Rpb25hbExpZ2h0UG9zaXRpb25ZR3VpIiwiZGlyZWN0aW9uYWxMaWdodFBvc2l0aW9uWkd1aSIsInNoYWRvd0ZvbGRlciIsInNoYWRvd05lYXJHdWkiLCJkaXNwb3NlIiwic2hhZG93RmFyR3VpIiwic2hhZG93VG9wR3VpIiwic2hhZG93UmlnaHRHdWkiLCJzaGFkb3dCb3R0b21HdWkiLCJzaGFkb3dMZWZ0R3VpIiwic2hhZG93Qmlhc0d1aSIsInBvaW50TGlnaHRGb2xkZXIiLCJwb2ludExpZ2h0SW50ZW5zaXR5R3VpIiwicG9pbnRMaWdodERpc3RhbmNlR3VpIiwicG9pbnRMaWdodFBvc2l0aW9uWEd1aSIsInBvaW50TGlnaHRQb3NpdGlvbllHdWkiLCJwb2ludExpZ2h0UG9zaXRpb25aR3VpIiwiaGVtaUxpZ2h0Rm9sZGVyIiwiZ3JvdW5kQ29sb3IiLCJoZW1pTGlnaHRJbnRlbnNpdHlHdWkiLCJoZW1pTGlnaHRQb3NpdGlvblhHdWkiLCJoZW1pTGlnaHRQb3NpdGlvbllHdWkiLCJoZW1pTGlnaHRQb3NpdGlvblpHdWkiLCJkZXN0cm95IiwidGltZW91dCIsImtleWJvYXJkIiwiS2V5Ym9hcmQiLCJldmVudCIsIkhlbHBlcnMiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VMZWF2ZSIsIm9uTW91c2VPdmVyIiwiZXZlbnRNYXRjaGVzIiwicHJldmVudERlZmF1bHQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwicmVmIiwiaXNMaWdodCIsIkJ1ZmZlckdlb21ldHJ5VXRpbHMiLCJVViIsIm1heEFuaXNvdHJvcHkiLCJpbWFnZUZpbGVzIiwicHJvbWlzZUFycmF5IiwiaW1hZ2VGaWxlIiwiaW1hZ2UiLCJhbmlzb3Ryb3B5IiwibW9kZWxPQkoiLCJ4aHIiLCJyZWFzb24iLCJpc0RldiIsImlzU2hvd2luZ1N0YXRzIiwiaXNMb2FkZWQiLCJpc1R3ZWVuaW5nIiwiaXNSb3RhdGluZyIsImlzTW91c2VNb3ZpbmciLCJpc01vdXNlT3ZlciIsImRwciIsImVhc2luZyIsImR1cmF0aW9uIiwic2VsZWN0ZWQiLCJpbml0aWFsVHlwZXMiLCJtb2RlbHMiLCJlbmFibGVIZWxwZXIiLCJ0cmFuc2x1Y2VudCIsInBvc1giLCJwb3NZIiwicG9zWiIsIm1pbkF6aW11dGhBbmdsZSIsIkluZmluaXR5IiwibWF4QXppbXV0aEFuZ2xlIiwiaGVscGVyRW5hYmxlZCIsIm1hcFdpZHRoIiwibWFwSGVpZ2h0IiwiY29tcHV0ZVRhbmdlbnRzIiwibm9ybWFscyIsInV2cyIsIm5WZXJ0aWNlcyIsInRhbmdlbnRzIiwidGFuMSIsInRhbjIiLCJ2QSIsInZCIiwidkMiLCJ1dkEiLCJ1dkIiLCJ1dkMiLCJzZGlyIiwidGRpciIsImhhbmRsZVRyaWFuZ2xlIiwidyIsInRtcCIsInRtcDIiLCJuIiwibjIiLCJoYW5kbGVWZXJ0ZXgiLCJhIiwiYiIsImMiLCJzdWIiLCJyIiwiaXNGaW5pdGUiLCJhZGRTY2FsZWRWZWN0b3IiLCJkb3QiLCJjcm9zc1ZlY3RvcnMiLCJtZXJnZUJ1ZmZlckdlb21ldHJpZXMiLCJ1c2VHcm91cHMiLCJpc0luZGV4ZWQiLCJhdHRyaWJ1dGVzVXNlZCIsIlNldCIsIm1vcnBoQXR0cmlidXRlc1VzZWQiLCJtZXJnZWRHZW9tZXRyeSIsImF0dHJpYnV0ZXNDb3VudCIsImhhcyIsIm1lcmdlZFVzZXJEYXRhIiwiYWRkR3JvdXAiLCJpbmRleE9mZnNldCIsIm1lcmdlZEluZGV4IiwibWVyZ2VkQXR0cmlidXRlIiwibWVyZ2VCdWZmZXJBdHRyaWJ1dGVzIiwibnVtTW9ycGhUYXJnZXRzIiwibW9ycGhBdHRyaWJ1dGVzVG9NZXJnZSIsIm1lcmdlZE1vcnBoQXR0cmlidXRlIiwiYXJyYXlMZW5ndGgiLCJpc0ludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlIiwiaW50ZXJsZWF2ZUF0dHJpYnV0ZXMiLCJpbnRlcmxlYXZlZEJ1ZmZlciIsInJlcyIsImdldHRlcnMiLCJzZXR0ZXJzIiwiaWJhIiwiayIsImVzdGltYXRlQnl0ZXNVc2VkIiwibWVtIiwiYXR0ciIsIm1lcmdlVmVydGljZXMiLCJ0b2xlcmFuY2UiLCJOdW1iZXIiLCJFUFNJTE9OIiwiaGFzaFRvSW5kZXgiLCJ2ZXJ0ZXhDb3VudCIsIm5leHRJbmRleCIsImF0dHJpYnV0ZU5hbWVzIiwiYXR0ckFycmF5cyIsIm1vcnBoQXR0cnNBcnJheXMiLCJtb3JwaEF0dHIiLCJmaWxsIiwiZGVjaW1hbFNoaWZ0IiwibG9nMTAiLCJzaGlmdE11bHRpcGxpZXIiLCJwb3ciLCJoYXNoIiwibmV3YXJyYXkiLCJuZXdNb3JwaEFycmF5cyIsImdldHRlckZ1bmMiLCJtIiwibWwiLCJvbGRBdHRyaWJ1dGUiLCJvbGRNb3JwaEF0dHJpYnV0ZSIsIm1vcnBoQXR0cmlidXRlIiwiVHJpYW5nbGVzRHJhd01vZGUiLCJjbGVhckdyb3VwcyIsImNhbnZhcyIsIkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsIndlYmdsIiwiY3JlYXRlRWxlbWVudCIsIldlYkdMUmVuZGVyaW5nQ29udGV4dCIsImdldENvbnRleHQiLCJ3b3JrZXJzIiwiV29ya2VyIiwiZmlsZWFwaSIsIkZpbGUiLCJGaWxlUmVhZGVyIiwiRmlsZUxpc3QiLCJnZXRXZWJHTEVycm9yTWVzc2FnZSIsImVsZW1lbnQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJtYXJnaW4iLCJpbm5lckhUTUwiLCJhZGRHZXRXZWJHTE1lc3NhZ2UiLCJwYXJlbnQiLCJmbiIsInRocmVzaGhvbGQiLCJsYXN0IiwiZGVmZXJUaW1lciIsImNvbnRleHQiLCJub3ciLCJEYXRlIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwibGVuZ3RoQ29tcHV0YWJsZSIsInBlcmNlbnRDb21wbGV0ZSIsInJvdW5kIiwidmVydGljZXNOZWVkVXBkYXRlIiwibm9ybWFsc05lZWRVcGRhdGUiLCJjb2xvcnNOZWVkVXBkYXRlIiwibWF0ZXJpYWxLZXkiLCJBTElBUyIsImtleUNvZGVzIiwib25LZXlDaGFuZ2UiLCJvbkJsdXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJvcCIsImtleUNvZGUiLCJrZXlEZXNjIiwic3BsaXQiLCJwcmVzc2VkIiwidG9VcHBlckNhc2UiLCJjaGFyQ29kZUF0IiwiYWxpYXNlcyIsImFsaWFzS2V5cyIsInNoaWZ0S2V5IiwiY3RybEtleSIsImFsdEtleSIsIm1ldGFLZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiTU9VU0UiLCJPcmJpdENvbnN0cmFpbnQiLCJtaW5ab29tIiwibWF4Wm9vbSIsInRoZXRhIiwicGhpIiwicXVhdCIsInF1YXRJbnZlcnNlIiwibGFzdFBvc2l0aW9uIiwibGFzdFF1YXRlcm5pb24iLCJFUFMiLCJwaGlEZWx0YSIsInRoZXRhRGVsdGEiLCJwYW5PZmZzZXQiLCJ6b29tQ2hhbmdlZCIsImdldFBvbGFyQW5nbGUiLCJnZXRBemltdXRoYWxBbmdsZSIsInJvdGF0ZUxlZnQiLCJyb3RhdGVVcCIsInBhbkxlZnQiLCJ0ZSIsImVsZW1lbnRzIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJzY3JlZW5XaWR0aCIsInNjcmVlbkhlaWdodCIsInRhcmdldERpc3RhbmNlIiwidGFuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJ6b29tIiwiZG9sbHlPdXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwidXAiLCJpbnZlcnNlIiwiYXBwbHlRdWF0ZXJuaW9uIiwiYXRhbjIiLCJzcXJ0Iiwic2luIiwiY29zIiwibG9va0F0IiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJjb25zdHJhaW50IiwiZGVmaW5lUHJvcGVydHkiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImVuYWJsZUtleXMiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkJPVFRPTSIsIm1vdXNlQnV0dG9ucyIsIk9SQklUIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInJvdGF0ZVN0YXJ0Iiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsIlNUQVRFIiwic3RhdGUiLCJ0YXJnZXQwIiwicG9zaXRpb24wIiwiem9vbTAiLCJjaGFuZ2VFdmVudCIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Wm9vbVNjYWxlIiwib25Nb3VzZURvd24iLCJidXR0b24iLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uTW91c2VVcCIsImRpc3BhdGNoRXZlbnQiLCJzdWJWZWN0b3JzIiwib25Nb3VzZVdoZWVsIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsdGEiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwib25LZXlEb3duIiwidG91Y2hzdGFydCIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiZHgiLCJkeSIsInRvdWNobW92ZSIsInRvdWNoZW5kIiwiY29udGV4dG1lbnUiLCJyZXNldCIsIkV2ZW50RGlzcGF0Y2hlciIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciJdLCJtYXBwaW5ncyI6IjtpU0FTRUEsUUFBUUMsSUFBSSwyQ0FFWkMsaUJBQWUsRUFHakIsV0FFRSxHQUFJQyxnQkFFRyxDQUNMLElBQU1DLEVBQVlDLFNBQVNDLGVBQWUsZ0JBQzFDLElBQUlDLFVBQUtILFFBSFRELCtCQU9KSyxJLHdWQ25CcUJDLEUsV0FDbkIsV0FBWUMsR0FBVSxZLDRGQUFBLFNBQ3BCLElBQU1DLEVBQVFELEVBQVNFLFdBQVdELE1BQzVCRSxFQUFTSCxFQUFTRSxXQUFXQyxPQUduQ0MsS0FBS0MsWUFBYyxJQUFJQyxvQkFBd0JkLHFCQUFtQlMsRUFBUUUsRUFBUVgsc0JBQW9CQSxzQkFDdEdZLEtBQUtDLFlBQVlFLFNBQVNDLElBQUloQixzQkFBb0JBLHNCQUFvQkEsdUJBR3RFWSxLQUFLSyxXQUFXVCxHQUdoQlUsT0FBT0MsaUJBQWlCLFVBQVUsa0JBQU0sRUFBS0YsV0FBV1QsTUFBVyxHLGlEQUdyRSxTQUFXQSxHQUVUSSxLQUFLQyxZQUFZTyxPQUFTWixFQUFTRSxXQUFXRCxNQUFRRCxFQUFTRSxXQUFXQyxPQUcxRUMsS0FBS0MsWUFBWVEsOEIsMmFDcEJBQyxFLFdBQ25CLFdBQVlDLEVBQVFyQixJLDRGQUFXLFNBRTdCLElBQU1zQixFQUFnQixJQUFJQyxJQUFKLENBQWtCWCxHQUN4Q0YsS0FBS2MsY0FBZ0IsSUFBSUYsRUFBY0QsRUFB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WUFBY3lULElBSXZCeTFCLFNBQVUsQ0FDUjMrQixJQUFLLFdBSUgsT0FIQTlNLFFBQVE0USxLQUNOLG1GQUVNOVAsS0FBS3ExQixjQUdmajFCLElBQUssU0FBVThVLEdBQ2JoVyxRQUFRNFEsS0FDTixrRkFFRjlQLEtBQUtxMUIsY0FBZ0JuZ0IsSUFJekIwMUIsTUFBTyxDQUNMNStCLElBQUssV0FFSCxPQURBOU0sUUFBUTRRLEtBQUssNkVBQ0w5UCxLQUFLa25DLFdBR2Y5bUMsSUFBSyxTQUFVOFUsR0FDYmhXLFFBQVE0USxLQUFLLDRFQUNiOVAsS0FBS2tuQyxXQUFhaHlCLElBSXRCMjFCLE9BQVEsQ0FDTjcrQixJQUFLLFdBRUgsT0FEQTlNLFFBQVE0USxLQUFLLCtFQUNMOVAsS0FBS29uQyxZQUdmaG5DLElBQUssU0FBVThVLEdBQ2JoVyxRQUFRNFEsS0FBSyw4RUFDYjlQLEtBQUtvbkMsWUFBY2x5QixJQUl2QjQxQixhQUFjLENBQ1o5K0IsSUFBSyxXQUlILE9BSEE5TSxRQUFRNFEsS0FDTix3RkFFTTlQLEtBQUtnbkMsV0FBV3hsQyxlQUcxQnBCLElBQUssU0FBVThVLEdBQ2JoVyxRQUFRNFEsS0FDTix1RkFFRjlQLEtBQUtnbkMsV0FBV3hsQyxlQUFpQjBULElBSXJDNjFCLHFCQUFzQixDQUNwQi8rQixJQUFLLFdBSUgsT0FIQTlNLFFBQVE0USxLQUNOLDRGQUVLOVAsS0FBS2duQyxXQUFXdGxDLGVBR3pCdEIsSUFBSyxTQUFVOFUsR0FDYmhXLFFBQVE0USxLQUNOLDRGQUVGOVAsS0FBS2duQyxXQUFXdGxDLGNBQWdCd1QsTUFLL0JyVSxJIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZyBmcm9tICcuL2RhdGEvY29uZmlnJztcclxuaW1wb3J0IERldGVjdG9yIGZyb20gJy4vdXRpbHMvZGV0ZWN0b3InO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2FwcC9tYWluJztcclxuXHJcbi8vIFN0eWxlc1xyXG5pbXBvcnQgJy4vLi4vY3NzL2FwcC5zY3NzJztcclxuXHJcbi8vIENoZWNrIGVudmlyb25tZW50IGFuZCBzZXQgdGhlIENvbmZpZyBoZWxwZXJcclxuaWYoX19FTlZfXyA9PT0gJ2RldicpIHtcclxuICBjb25zb2xlLmxvZygnLS0tLS0gUlVOTklORyBJTiBERVYgRU5WSVJPTk1FTlQhIC0tLS0tJyk7XHJcblxyXG4gIENvbmZpZy5pc0RldiA9IHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgLy8gQ2hlY2sgZm9yIHdlYkdMIGNhcGFiaWxpdGllc1xyXG4gIGlmKCFEZXRlY3Rvci53ZWJnbCkge1xyXG4gICAgRGV0ZWN0b3IuYWRkR2V0V2ViR0xNZXNzYWdlKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBDb250YWluZXInKTtcclxuICAgIG5ldyBNYWluKGNvbnRhaW5lcik7XHJcbiAgfVxyXG59XHJcblxyXG5pbml0KCk7XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vZGF0YS9jb25maWcnO1xyXG5cclxuLy8gQ2xhc3MgdGhhdCBjcmVhdGVzIGFuZCB1cGRhdGVzIHRoZSBtYWluIGNhbWVyYVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEge1xyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGg7XHJcbiAgICBjb25zdCBoZWlnaHQgPSByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIHBvc2l0aW9uIGEgUGVyc3BlY3RpdmUgQ2FtZXJhXHJcbiAgICB0aGlzLnRocmVlQ2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKENvbmZpZy5jYW1lcmEuZm92LCB3aWR0aCAvIGhlaWdodCwgQ29uZmlnLmNhbWVyYS5uZWFyLCBDb25maWcuY2FtZXJhLmZhcik7XHJcbiAgICB0aGlzLnRocmVlQ2FtZXJhLnBvc2l0aW9uLnNldChDb25maWcuY2FtZXJhLnBvc1gsIENvbmZpZy5jYW1lcmEucG9zWSwgQ29uZmlnLmNhbWVyYS5wb3NaKTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHNpemluZ1xyXG4gICAgdGhpcy51cGRhdGVTaXplKHJlbmRlcmVyKTtcclxuICAgIFxyXG4gICAgLy8gTGlzdGVuZXJzXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4gdGhpcy51cGRhdGVTaXplKHJlbmRlcmVyKSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2l6ZShyZW5kZXJlcikge1xyXG4gICAgLy8gVXBkYXRlIGNhbWVyYSBhc3BlY3QgcmF0aW8gd2l0aCB3aW5kb3cgYXNwZWN0IHJhdGlvXHJcbiAgICB0aGlzLnRocmVlQ2FtZXJhLmFzcGVjdCA9IHJlbmRlcmVyLmRvbUVsZW1lbnQud2lkdGggLyByZW5kZXJlci5kb21FbGVtZW50LmhlaWdodDtcclxuXHJcbiAgICAvLyBBbHdheXMgY2FsbCB1cGRhdGVQcm9qZWN0aW9uTWF0cml4IG9uIGNhbWVyYSBjaGFuZ2VcclxuICAgIHRoaXMudGhyZWVDYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmltcG9ydCBPcmJpdENvbnRyb2xzIGZyb20gJy4uLy4uL3V0aWxzL29yYml0Q29udHJvbHMnO1xuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9kYXRhL2NvbmZpZyc7XG5cbi8vIENvbnRyb2xzIGJhc2VkIG9uIG9yYml0IGNvbnRyb2xzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250cm9scyB7XG4gIGNvbnN0cnVjdG9yKGNhbWVyYSwgY29udGFpbmVyKSB7XG4gICAgLy8gT3JiaXQgY29udHJvbHMgZmlyc3QgbmVlZHMgdG8gcGFzcyBpbiBUSFJFRSB0byBjb25zdHJ1Y3RvclxuICAgIGNvbnN0IG9yYml0Q29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhUSFJFRSk7XG4gICAgdGhpcy50aHJlZUNvbnRyb2xzID0gbmV3IG9yYml0Q29udHJvbHMoY2FtZXJhLCBjb250YWluZXIpO1xuXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMudGhyZWVDb250cm9scy50YXJnZXQuc2V0KENvbmZpZy5jb250cm9scy50YXJnZXQueCwgQ29uZmlnLmNvbnRyb2xzLnRhcmdldC55LCBDb25maWcuY29udHJvbHMudGFyZ2V0LnopO1xuICAgIHRoaXMudGhyZWVDb250cm9scy5hdXRvUm90YXRlID0gQ29uZmlnLmNvbnRyb2xzLmF1dG9Sb3RhdGU7XG4gICAgdGhpcy50aHJlZUNvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IENvbmZpZy5jb250cm9scy5hdXRvUm90YXRlU3BlZWQ7XG4gICAgdGhpcy50aHJlZUNvbnRyb2xzLnJvdGF0ZVNwZWVkID0gQ29uZmlnLmNvbnRyb2xzLnJvdGF0ZVNwZWVkO1xuICAgIHRoaXMudGhyZWVDb250cm9scy56b29tU3BlZWQgPSBDb25maWcuY29udHJvbHMuem9vbVNwZWVkO1xuICAgIHRoaXMudGhyZWVDb250cm9scy5taW5EaXN0YW5jZSA9IENvbmZpZy5jb250cm9scy5taW5EaXN0YW5jZTtcbiAgICB0aGlzLnRocmVlQ29udHJvbHMubWF4RGlzdGFuY2UgPSBDb25maWcuY29udHJvbHMubWF4RGlzdGFuY2U7XG4gICAgdGhpcy50aHJlZUNvbnRyb2xzLm1pblBvbGFyQW5nbGUgPSBDb25maWcuY29udHJvbHMubWluUG9sYXJBbmdsZTtcbiAgICB0aGlzLnRocmVlQ29udHJvbHMubWF4UG9sYXJBbmdsZSA9IENvbmZpZy5jb250cm9scy5tYXhQb2xhckFuZ2xlO1xuICAgIHRoaXMudGhyZWVDb250cm9scy5lbmFibGVEYW1waW5nID0gQ29uZmlnLmNvbnRyb2xzLmVuYWJsZURhbXBpbmc7XG4gICAgdGhpcy50aHJlZUNvbnRyb2xzLmVuYWJsZVpvb20gPSBDb25maWcuY29udHJvbHMuZW5hYmxlWm9vbTtcbiAgICB0aGlzLnRocmVlQ29udHJvbHMuZGFtcGluZ0ZhY3RvciA9IENvbmZpZy5jb250cm9scy5kYW1waW5nRmFjdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQgTWF0ZXJpYWwgZnJvbSAnLi9tYXRlcmlhbCc7XHJcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vZGF0YS9jb25maWcnO1xyXG5cclxuLy8gVGhpcyBoZWxwZXIgY2xhc3MgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGFuZCB0aGVuIHBsYWNlIGdlb21ldHJ5IGluIHRoZSBzY2VuZVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW9tZXRyeSB7XHJcbiAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuZ2VvID0gbnVsbDtcclxuICB9XHJcblxyXG4gIG1ha2UodHlwZSkge1xyXG4gICAgaWYodHlwZSA9PT0gJ3BsYW5lJykge1xyXG4gICAgICByZXR1cm4gKHdpZHRoLCBoZWlnaHQsIHdpZHRoU2VnbWVudHMgPSAxLCBoZWlnaHRTZWdtZW50cyA9IDEpID0+IHtcclxuICAgICAgICB0aGlzLmdlbyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KHdpZHRoLCBoZWlnaHQsIHdpZHRoU2VnbWVudHMsIGhlaWdodFNlZ21lbnRzKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0eXBlID09PSAnc3BoZXJlJykge1xyXG4gICAgICByZXR1cm4gKHJhZGl1cywgd2lkdGhTZWdtZW50cyA9IDMyLCBoZWlnaHRTZWdtZW50cyA9IDMyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZW8gPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkocmFkaXVzLCB3aWR0aFNlZ21lbnRzLCBoZWlnaHRTZWdtZW50cyk7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwbGFjZShwb3NpdGlvbiwgcm90YXRpb24pIHtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1hdGVyaWFsKDB4ZWVlZWVlKS5zdGFuZGFyZDtcclxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlbywgbWF0ZXJpYWwpO1xyXG5cclxuICAgIC8vIFVzZSBFUzYgc3ByZWFkIHRvIHNldCBwb3NpdGlvbiBhbmQgcm90YXRpb24gZnJvbSBwYXNzZWQgaW4gYXJyYXlcclxuICAgIG1lc2gucG9zaXRpb24uc2V0KC4uLnBvc2l0aW9uKTtcclxuICAgIG1lc2gucm90YXRpb24uc2V0KC4uLnJvdGF0aW9uKTtcclxuXHJcbiAgICBpZihDb25maWcuc2hhZG93LmVuYWJsZWQpIHtcclxuICAgICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjZW5lLmFkZChtZXNoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2RhdGEvY29uZmlnJztcblxuLy8gU2V0cyB1cCBhbmQgcGxhY2VzIGFsbCBsaWdodHMgaW4gc2NlbmVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZ2h0IHtcbiAgY29uc3RydWN0b3Ioc2NlbmUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLy8gQW1iaWVudFxuICAgIHRoaXMuYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodChDb25maWcuYW1iaWVudExpZ2h0LmNvbG9yKTtcbiAgICB0aGlzLmFtYmllbnRMaWdodC52aXNpYmxlID0gQ29uZmlnLmFtYmllbnRMaWdodC5lbmFibGVkO1xuXG4gICAgLy8gUG9pbnQgbGlnaHRcbiAgICB0aGlzLnBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodChDb25maWcucG9pbnRMaWdodC5jb2xvciwgQ29uZmlnLnBvaW50TGlnaHQuaW50ZW5zaXR5LCBDb25maWcucG9pbnRMaWdodC5kaXN0YW5jZSk7XG4gICAgdGhpcy5wb2ludExpZ2h0LnBvc2l0aW9uLnNldChDb25maWcucG9pbnRMaWdodC54LCBDb25maWcucG9pbnRMaWdodC55LCBDb25maWcucG9pbnRMaWdodC56KTtcbiAgICB0aGlzLnBvaW50TGlnaHQudmlzaWJsZSA9IENvbmZpZy5wb2ludExpZ2h0LmVuYWJsZWQ7XG5cbiAgICAvLyBEaXJlY3Rpb25hbCBsaWdodFxuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KENvbmZpZy5kaXJlY3Rpb25hbExpZ2h0LmNvbG9yLCBDb25maWcuZGlyZWN0aW9uYWxMaWdodC5pbnRlbnNpdHkpO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoQ29uZmlnLmRpcmVjdGlvbmFsTGlnaHQueCwgQ29uZmlnLmRpcmVjdGlvbmFsTGlnaHQueSwgQ29uZmlnLmRpcmVjdGlvbmFsTGlnaHQueik7XG4gICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LnZpc2libGUgPSBDb25maWcuZGlyZWN0aW9uYWxMaWdodC5lbmFibGVkO1xuXG4gICAgLy8gU2hhZG93IG1hcFxuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5jYXN0U2hhZG93ID0gQ29uZmlnLnNoYWRvdy5lbmFibGVkO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuYmlhcyA9IENvbmZpZy5zaGFkb3cuYmlhcztcbiAgICB0aGlzLmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gQ29uZmlnLnNoYWRvdy5uZWFyO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhLmZhciA9IENvbmZpZy5zaGFkb3cuZmFyO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhLmxlZnQgPSBDb25maWcuc2hhZG93LmxlZnQ7XG4gICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5jYW1lcmEucmlnaHQgPSBDb25maWcuc2hhZG93LnJpZ2h0O1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhLnRvcCA9IENvbmZpZy5zaGFkb3cudG9wO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhLmJvdHRvbSA9IENvbmZpZy5zaGFkb3cuYm90dG9tO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IENvbmZpZy5zaGFkb3cubWFwV2lkdGg7XG4gICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IENvbmZpZy5zaGFkb3cubWFwSGVpZ2h0O1xuXG4gICAgLy8gU2hhZG93IGNhbWVyYSBoZWxwZXJcbiAgICBpZihDb25maWcuaXNEZXYpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uYWxMaWdodEhlbHBlciA9IG5ldyBUSFJFRS5DYW1lcmFIZWxwZXIodGhpcy5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5jYW1lcmEpO1xuICAgICAgdGhpcy5kaXJlY3Rpb25hbExpZ2h0SGVscGVyLnZpc2libGUgPSBDb25maWcuc2hhZG93LmhlbHBlckVuYWJsZWQ7XG4gICAgfVxuICAgIC8vIEhlbWlzcGhlcmUgbGlnaHRcbiAgICB0aGlzLmhlbWlMaWdodCA9IG5ldyBUSFJFRS5IZW1pc3BoZXJlTGlnaHQoQ29uZmlnLmhlbWlMaWdodC5jb2xvciwgQ29uZmlnLmhlbWlMaWdodC5ncm91bmRDb2xvciwgQ29uZmlnLmhlbWlMaWdodC5pbnRlbnNpdHkpO1xuICAgIHRoaXMuaGVtaUxpZ2h0LnBvc2l0aW9uLnNldChDb25maWcuaGVtaUxpZ2h0LngsIENvbmZpZy5oZW1pTGlnaHQueSwgQ29uZmlnLmhlbWlMaWdodC56KTtcbiAgICB0aGlzLmhlbWlMaWdodC52aXNpYmxlID0gQ29uZmlnLmhlbWlMaWdodC5lbmFibGVkO1xuICB9XG5cbiAgcGxhY2UobGlnaHROYW1lKSB7XG4gICAgc3dpdGNoKGxpZ2h0TmFtZSkge1xuICAgICAgY2FzZSAnYW1iaWVudCc6XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYW1iaWVudExpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2RpcmVjdGlvbmFsJzpcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5kaXJlY3Rpb25hbExpZ2h0KTtcbiAgICAgICAgaWYoQ29uZmlnLmlzRGV2KSB7XG4gICAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5kaXJlY3Rpb25hbExpZ2h0SGVscGVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9pbnQnOlxuICAgICAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBvaW50TGlnaHQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaGVtaSc6XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuaGVtaUxpZ2h0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG4vLyBVU2UgdGhpcyBjbGFzcyBhcyBhIGhlbHBlciB0byBzZXQgdXAgc29tZSBkZWZhdWx0IG1hdGVyaWFsc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRlcmlhbCB7XHJcbiAgY29uc3RydWN0b3IoY29sb3IpIHtcclxuICAgIHRoaXMuYmFzaWMgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICBjb2xvcixcclxuICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zdGFuZGFyZCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XHJcbiAgICAgIGNvbG9yLFxyXG4gICAgICBzaGFkaW5nOiBUSFJFRS5GbGF0U2hhZGluZyxcclxuICAgICAgcm91Z2huZXNzOiAxLFxyXG4gICAgICBtZXRhbG5lc3M6IDAsXHJcbiAgICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMud2lyZSA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7d2lyZWZyYW1lOiB0cnVlfSk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2RhdGEvY29uZmlnJztcclxuXHJcbi8vIE1haW4gd2ViR0wgcmVuZGVyZXIgY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBjb250YWluZXIpIHtcclxuICAgIC8vIFByb3BlcnRpZXNcclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cclxuICAgIC8vIENyZWF0ZSBXZWJHTCByZW5kZXJlciBhbmQgc2V0IGl0cyBhbnRpYWxpYXNcclxuICAgIHRoaXMudGhyZWVSZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6IHRydWV9KTtcclxuXHJcbiAgICAvLyBTZXQgY2xlYXIgY29sb3IgdG8gZm9nIHRvIGVuYWJsZSBmb2cgb3IgdG8gaGV4IGNvbG9yIGZvciBubyBmb2dcclxuICAgIHRoaXMudGhyZWVSZW5kZXJlci5zZXRDbGVhckNvbG9yKHNjZW5lLmZvZy5jb2xvcik7XHJcbiAgICB0aGlzLnRocmVlUmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7IC8vIEZvciByZXRpbmFcclxuXHJcbiAgICAvLyBBcHBlbmRzIGNhbnZhc1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGhyZWVSZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBTaGFkb3cgbWFwIG9wdGlvbnNcclxuICAgIHRoaXMudGhyZWVSZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLnRocmVlUmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwO1xyXG5cclxuICAgIC8vIEdldCBhbmlzb3Ryb3B5IGZvciB0ZXh0dXJlc1xyXG4gICAgQ29uZmlnLm1heEFuaXNvdHJvcHkgPSB0aGlzLnRocmVlUmVuZGVyZXIuY2FwYWJpbGl0aWVzLmdldE1heEFuaXNvdHJvcHkoKTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHNpemUgdXBkYXRlIHNldCB0byBjYW52YXMgY29udGFpbmVyXHJcbiAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuXHJcbiAgICAvLyBMaXN0ZW5lcnNcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSwgZmFsc2UpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHRoaXMudXBkYXRlU2l6ZSgpLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTaXplKCkge1xyXG4gICAgdGhpcy50aHJlZVJlbmRlcmVyLnNldFNpemUodGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGgsIHRoaXMuY29udGFpbmVyLm9mZnNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc2NlbmUsIGNhbWVyYSkge1xyXG4gICAgLy8gUmVuZGVycyBzY2VuZSB0byBjYW52YXMgdGFyZ2V0XHJcbiAgICB0aGlzLnRocmVlUmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcbmltcG9ydCB7IFZlcnRleE5vcm1hbHNIZWxwZXIgfSBmcm9tICcuL3ZlcnRleE5vcm1hbHNIZWxwZXInO1xyXG5cclxuLy8gU2ltcGxlIG1lc2ggaGVscGVyIHRoYXQgc2hvd3MgZWRnZXMsIHdpcmVmcmFtZXMsIGFuZCBmYWNlIGFuZCB2ZXJ0ZXggbm9ybWFsc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNoSGVscGVyIHtcclxuICBjb25zdHJ1Y3RvcihzY2VuZSwgbWVzaCkge1xyXG4gICAgdGhpcy5tZXNoID0gbWVzaDtcclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICBjb25zdCB3aXJlZnJhbWUgPSBuZXcgVEhSRUUuV2lyZWZyYW1lR2VvbWV0cnkodGhpcy5tZXNoLmdlb21ldHJ5KTtcclxuICAgIHRoaXMud2lyZUxpbmUgPSBuZXcgVEhSRUUuTGluZVNlZ21lbnRzKHdpcmVmcmFtZSk7XHJcbiAgICB0aGlzLndpcmVMaW5lLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xyXG4gICAgdGhpcy53aXJlTGluZS5tYXRlcmlhbC5vcGFjaXR5ID0gMC4yNTtcclxuICAgIHRoaXMud2lyZUxpbmUubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkodGhpcy5tZXNoLmdlb21ldHJ5KTtcclxuICAgIHRoaXMuZWRnZXNMaW5lID0gbmV3IFRIUkVFLkxpbmVTZWdtZW50cyhlZGdlcyk7XHJcbiAgICB0aGlzLmVkZ2VzTGluZS5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcclxuICAgIHRoaXMuZWRnZXNMaW5lLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjI1O1xyXG4gICAgdGhpcy5lZGdlc0xpbmUubWF0ZXJpYWwudHJhbnNwYXJlbnQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMudmVydGV4SGVscGVyID0gbmV3IFZlcnRleE5vcm1hbHNIZWxwZXIodGhpcy5tZXNoLCAyKTtcclxuICAgIHRoaXMuYm94SGVscGVyID0gbmV3IFRIUkVFLkJveEhlbHBlcih0aGlzLm1lc2gpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5tZXNoLmFkZCh0aGlzLndpcmVMaW5lKTtcclxuICAgIHRoaXMubWVzaC5hZGQodGhpcy5lZGdlc0xpbmUpO1xyXG5cclxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudmVydGV4SGVscGVyKTtcclxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuYm94SGVscGVyKTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLm1lc2gucmVtb3ZlKHRoaXMud2lyZUxpbmUpO1xyXG4gICAgdGhpcy5tZXNoLnJlbW92ZSh0aGlzLmVkZ2VzTGluZSk7XHJcblxyXG4gICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy52ZXJ0ZXhIZWxwZXIpO1xyXG4gICAgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5ib3hIZWxwZXIpO1xyXG4gIH1cclxufVxyXG4iLCIvLyBMb2NhbCB2YXJzIGZvciByU3RhdHNcclxubGV0IHJTLCBiUywgZ2xTLCB0UztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRzIHtcclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0VXAoKSB7XHJcbiAgICBiUyA9IG5ldyBCcm93c2VyU3RhdHMoKTtcclxuICAgIGdsUyA9IG5ldyBnbFN0YXRzKCk7XHJcbiAgICB0UyA9IG5ldyB0aHJlZVN0YXRzKHRoaXMucmVuZGVyZXIudGhyZWVSZW5kZXJlcik7XHJcblxyXG4gICAgclMgPSBuZXcgclN0YXRzKHtcclxuICAgICAgQ1NTUGF0aDogJy4vY3NzLycsXHJcbiAgICAgIHVzZXJUaW1pbmdBUEk6IHRydWUsXHJcbiAgICAgIHZhbHVlczoge1xyXG4gICAgICAgIGZyYW1lOiB7IGNhcHRpb246ICdUb3RhbCBmcmFtZSB0aW1lIChtcyknLCBvdmVyOiAxNiwgYXZlcmFnZTogdHJ1ZSwgYXZnTXM6IDEwMCB9LFxyXG4gICAgICAgIGZwczogeyBjYXB0aW9uOiAnRnJhbWVyYXRlIChGUFMpJywgYmVsb3c6IDMwIH0sXHJcbiAgICAgICAgY2FsbHM6IHsgY2FwdGlvbjogJ0NhbGxzICh0aHJlZS5qcyknLCBvdmVyOiAzMDAwIH0sXHJcbiAgICAgICAgcmFmOiB7IGNhcHRpb246ICdUaW1lIHNpbmNlIGxhc3QgckFGIChtcyknLCBhdmVyYWdlOiB0cnVlLCBhdmdNczogMTAwIH0sXHJcbiAgICAgICAgcnN0YXRzOiB7IGNhcHRpb246ICdyU3RhdHMgdXBkYXRlIChtcyknLCBhdmVyYWdlOiB0cnVlLCBhdmdNczogMTAwIH0sXHJcbiAgICAgICAgdGV4dHVyZTogeyBjYXB0aW9uOiAnR2VuVGV4JywgYXZlcmFnZTogdHJ1ZSwgYXZnTXM6IDEwMCB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyb3VwczogW1xyXG4gICAgICAgIHsgY2FwdGlvbjogJ0ZyYW1lcmF0ZScsIHZhbHVlczogWydmcHMnLCAncmFmJ10gfSxcclxuICAgICAgICB7IGNhcHRpb246ICdGcmFtZSBCdWRnZXQnLCB2YWx1ZXM6IFsnZnJhbWUnLCAndGV4dHVyZScsICdzZXR1cCcsICdyZW5kZXInXSB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGZyYWN0aW9uczogW1xyXG4gICAgICAgIHsgYmFzZTogJ2ZyYW1lJywgc3RlcHM6IFsndGV4dHVyZScsICdzZXR1cCcsICdyZW5kZXInXSB9XHJcbiAgICAgIF0sXHJcbiAgICAgIHBsdWdpbnM6IFtiUywgdFNdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdGFydCgpIHtcclxuICAgIHJTKCdmcmFtZScpLnN0YXJ0KCk7XHJcbiAgICBnbFMuc3RhcnQoKTtcclxuXHJcbiAgICByUygnckFGJykudGljaygpO1xyXG4gICAgclMoJ0ZQUycpLmZyYW1lKCk7XHJcblxyXG4gICAgclMoJ3JlbmRlcicpLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZW5kKCkge1xyXG4gICAgclMoJ3JlbmRlcicpLmVuZCgpOyAvLyByZW5kZXIgZmluaXNoZWRcclxuICAgIHJTKCdmcmFtZScpLmVuZCgpOyAvLyBmcmFtZSBmaW5pc2hlZFxyXG5cclxuICAgIC8vIExvY2FsIHJTdGF0cyB1cGRhdGVcclxuICAgIHJTKCdyU3RhdHMnKS5zdGFydCgpO1xyXG4gICAgclMoKS51cGRhdGUoKTtcclxuICAgIHJTKCdyU3RhdHMnKS5lbmQoKTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXHJcbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQnVmZmVyR2VvbWV0cnksXHJcbiAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICBMaW5lU2VnbWVudHMsXHJcbiAgTGluZUJhc2ljTWF0ZXJpYWwsXHJcbiAgTWF0cml4MyxcclxuICBWZWN0b3IzLFxyXG59IGZyb20gJ3RocmVlJztcclxuXHJcbmNvbnN0IF92MSA9IG5ldyBWZWN0b3IzKCk7XHJcbmNvbnN0IF92MiA9IG5ldyBWZWN0b3IzKCk7XHJcbmNvbnN0IF9ub3JtYWxNYXRyaXggPSBuZXcgTWF0cml4MygpO1xyXG5jb25zdCBfa2V5cyA9IFsnYScsICdiJywgJ2MnXTtcclxuXHJcbmZ1bmN0aW9uIFZlcnRleE5vcm1hbHNIZWxwZXIob2JqZWN0LCBzaXplLCBoZXgpIHtcclxuICB0aGlzLm9iamVjdCA9IG9iamVjdDtcclxuICB0aGlzLnNpemUgPSBzaXplICE9PSB1bmRlZmluZWQgPyBzaXplIDogMC4xO1xyXG5cclxuICBjb25zdCBjb2xvciA9IGhleCAhPT0gdW5kZWZpbmVkID8gaGV4IDogMHhmZjAwMDA7XHJcblxyXG4gIC8vXHJcblxyXG4gIGxldCBuTm9ybWFscyA9IDA7XHJcblxyXG4gIGNvbnN0IG9iakdlb21ldHJ5ID0gdGhpcy5vYmplY3QuZ2VvbWV0cnk7XHJcblxyXG4gIGlmIChvYmpHZW9tZXRyeSAmJiBvYmpHZW9tZXRyeS5pc0dlb21ldHJ5KSB7XHJcbiAgICBuTm9ybWFscyA9IG9iakdlb21ldHJ5LmZhY2VzLmxlbmd0aCAqIDM7XHJcbiAgfSBlbHNlIGlmIChvYmpHZW9tZXRyeSAmJiBvYmpHZW9tZXRyeS5pc0J1ZmZlckdlb21ldHJ5KSB7XHJcbiAgICBuTm9ybWFscyA9IG9iakdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsLmNvdW50O1xyXG4gIH1cclxuXHJcbiAgLy9cclxuXHJcbiAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShuTm9ybWFscyAqIDIgKiAzLCAzKTtcclxuXHJcbiAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHBvc2l0aW9ucyk7XHJcblxyXG4gIExpbmVTZWdtZW50cy5jYWxsKHRoaXMsIGdlb21ldHJ5LCBuZXcgTGluZUJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogY29sb3IsIHRvbmVNYXBwZWQ6IGZhbHNlIH0pKTtcclxuXHJcbiAgdGhpcy50eXBlID0gJ1ZlcnRleE5vcm1hbHNIZWxwZXInO1xyXG5cclxuICAvL1xyXG5cclxuICB0aGlzLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgdGhpcy51cGRhdGUoKTtcclxufVxyXG5cclxuVmVydGV4Tm9ybWFsc0hlbHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKExpbmVTZWdtZW50cy5wcm90b3R5cGUpO1xyXG5WZXJ0ZXhOb3JtYWxzSGVscGVyLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZlcnRleE5vcm1hbHNIZWxwZXI7XHJcblxyXG5WZXJ0ZXhOb3JtYWxzSGVscGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGlkeDtcclxuICB0aGlzLm9iamVjdC51cGRhdGVNYXRyaXhXb3JsZCh0cnVlKTtcclxuXHJcbiAgX25vcm1hbE1hdHJpeC5nZXROb3JtYWxNYXRyaXgodGhpcy5vYmplY3QubWF0cml4V29ybGQpO1xyXG5cclxuICBjb25zdCBtYXRyaXhXb3JsZCA9IHRoaXMub2JqZWN0Lm1hdHJpeFdvcmxkO1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG5cclxuICAvL1xyXG5cclxuICBjb25zdCBvYmpHZW9tZXRyeSA9IHRoaXMub2JqZWN0Lmdlb21ldHJ5O1xyXG5cclxuICBpZiAob2JqR2VvbWV0cnkgJiYgb2JqR2VvbWV0cnkuaXNHZW9tZXRyeSkge1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBvYmpHZW9tZXRyeS52ZXJ0aWNlcztcclxuXHJcbiAgICBjb25zdCBmYWNlcyA9IG9iakdlb21ldHJ5LmZhY2VzO1xyXG5cclxuICAgIGlkeCA9IDA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBmYWNlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgY29uc3QgZmFjZSA9IGZhY2VzW2ldO1xyXG5cclxuICAgICAgZm9yIChsZXQgaiA9IDAsIGpsID0gZmFjZS52ZXJ0ZXhOb3JtYWxzLmxlbmd0aDsgaiA8IGpsOyBqKyspIHtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tmYWNlW19rZXlzW2pdXV07XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZS52ZXJ0ZXhOb3JtYWxzW2pdO1xyXG5cclxuICAgICAgICBfdjEuY29weSh2ZXJ0ZXgpLmFwcGx5TWF0cml4NChtYXRyaXhXb3JsZCk7XHJcbiAgICAgICAgX3YyLmNvcHkobm9ybWFsKS5hcHBseU1hdHJpeDMoX25vcm1hbE1hdHJpeCkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIodGhpcy5zaXplKS5hZGQoX3YxKTtcclxuXHJcbiAgICAgICAgcG9zaXRpb24uc2V0WFlaKGlkeCwgX3YxLngsIF92MS55LCBfdjEueik7XHJcblxyXG4gICAgICAgIGlkeCA9IGlkeCArIDE7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uLnNldFhZWihpZHgsIF92Mi54LCBfdjIueSwgX3YyLnopO1xyXG5cclxuICAgICAgICBpZHggPSBpZHggKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChvYmpHZW9tZXRyeSAmJiBvYmpHZW9tZXRyeS5pc0J1ZmZlckdlb21ldHJ5KSB7XHJcbiAgICBjb25zdCBvYmpQb3MgPSBvYmpHZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uO1xyXG4gICAgY29uc3Qgb2JqTm9ybSA9IG9iakdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xyXG5cclxuICAgIGlkeCA9IDA7XHJcblxyXG4gICAgLy8gZm9yIHNpbXBsaWNpdHksIGlnbm9yZSBpbmRleCBhbmQgZHJhd2NhbGxzLCBhbmQgcmVuZGVyIGV2ZXJ5IG5vcm1hbFxyXG5cclxuICAgIGZvciAodmFyIGogPSAwLCBqbCA9IG9ialBvcy5jb3VudDsgaiA8IGpsOyBqKyspIHtcclxuICAgICAgX3YxLnNldChvYmpQb3MuZ2V0WChqKSwgb2JqUG9zLmdldFkoaiksIG9ialBvcy5nZXRaKGopKS5hcHBseU1hdHJpeDQobWF0cml4V29ybGQpO1xyXG4gICAgICBfdjIuc2V0KG9iak5vcm0uZ2V0WChqKSwgb2JqTm9ybS5nZXRZKGopLCBvYmpOb3JtLmdldFooaikpO1xyXG4gICAgICBfdjIuYXBwbHlNYXRyaXgzKF9ub3JtYWxNYXRyaXgpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKHRoaXMuc2l6ZSkuYWRkKF92MSk7XHJcblxyXG4gICAgICBwb3NpdGlvbi5zZXRYWVooaWR4LCBfdjEueCwgX3YxLnksIF92MS56KTtcclxuXHJcbiAgICAgIGlkeCA9IGlkeCArIDE7XHJcblxyXG4gICAgICBwb3NpdGlvbi5zZXRYWVooaWR4LCBfdjIueCwgX3YyLnksIF92Mi56KTtcclxuXHJcbiAgICAgIGlkeCA9IGlkeCArIDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbn07XHJcblxyXG5leHBvcnQgeyBWZXJ0ZXhOb3JtYWxzSGVscGVyIH07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIFJpY2ggVGliYmV0dCAvIGh0dHBzOi8vZ2l0aHViLmNvbS9yaWNodHJcclxuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cclxuICogQGF1dGhvciBUb255IFBhcmlzaSAvIGh0dHA6Ly93d3cudG9ueXBhcmlzaS5jb20vXHJcbiAqIEBhdXRob3IgVGFrYWhpcm8gLyBodHRwczovL2dpdGh1Yi5jb20vdGFrYWhpcm94XHJcbiAqIEBhdXRob3IgRG9uIE1jQ3VyZHkgLyBodHRwczovL3d3dy5kb25tY2N1cmR5LmNvbVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQW5pbWF0aW9uQ2xpcCxcclxuICBCb25lLFxyXG4gIEJveDMsXHJcbiAgQnVmZmVyQXR0cmlidXRlLFxyXG4gIEJ1ZmZlckdlb21ldHJ5LFxyXG4gIENsYW1wVG9FZGdlV3JhcHBpbmcsXHJcbiAgQ29sb3IsXHJcbiAgRGlyZWN0aW9uYWxMaWdodCxcclxuICBEb3VibGVTaWRlLFxyXG4gIEZpbGVMb2FkZXIsXHJcbiAgRnJvbnRTaWRlLFxyXG4gIEdyb3VwLFxyXG4gIEludGVybGVhdmVkQnVmZmVyLFxyXG4gIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlLFxyXG4gIEludGVycG9sYW50LFxyXG4gIEludGVycG9sYXRlRGlzY3JldGUsXHJcbiAgSW50ZXJwb2xhdGVMaW5lYXIsXHJcbiAgTGluZSxcclxuICBMaW5lQmFzaWNNYXRlcmlhbCxcclxuICBMaW5lTG9vcCxcclxuICBMaW5lU2VnbWVudHMsXHJcbiAgTGluZWFyRmlsdGVyLFxyXG4gIExpbmVhck1pcG1hcExpbmVhckZpbHRlcixcclxuICBMaW5lYXJNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG4gIExvYWRlcixcclxuICBMb2FkZXJVdGlscyxcclxuICBNYXRlcmlhbCxcclxuICBNYXRoVXRpbHMsXHJcbiAgTWF0cml4NCxcclxuICBNZXNoLFxyXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gIE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gIE1lc2hTdGFuZGFyZE1hdGVyaWFsLFxyXG4gIE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXHJcbiAgTmVhcmVzdEZpbHRlcixcclxuICBOZWFyZXN0TWlwbWFwTGluZWFyRmlsdGVyLFxyXG4gIE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG4gIE51bWJlcktleWZyYW1lVHJhY2ssXHJcbiAgT2JqZWN0M0QsXHJcbiAgT3J0aG9ncmFwaGljQ2FtZXJhLFxyXG4gIFBlcnNwZWN0aXZlQ2FtZXJhLFxyXG4gIFBvaW50TGlnaHQsXHJcbiAgUG9pbnRzLFxyXG4gIFBvaW50c01hdGVyaWFsLFxyXG4gIFByb3BlcnR5QmluZGluZyxcclxuICBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjayxcclxuICBSR0JBRm9ybWF0LFxyXG4gIFJHQkZvcm1hdCxcclxuICBSZXBlYXRXcmFwcGluZyxcclxuICBTa2VsZXRvbixcclxuICBTa2lubmVkTWVzaCxcclxuICBTcGhlcmUsXHJcbiAgU3BvdExpZ2h0LFxyXG4gIFRhbmdlbnRTcGFjZU5vcm1hbE1hcCxcclxuICBUZXh0dXJlTG9hZGVyLFxyXG4gIFRyaWFuZ2xlRmFuRHJhd01vZGUsXHJcbiAgVHJpYW5nbGVTdHJpcERyYXdNb2RlLFxyXG4gIFZlY3RvcjIsXHJcbiAgVmVjdG9yMyxcclxuICBWZWN0b3JLZXlmcmFtZVRyYWNrLFxyXG4gIHNSR0JFbmNvZGluZ1xyXG59IGZyb20gJ3RocmVlJztcclxuXHJcbmNvbnN0IEdMVEZMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIEdMVEZMb2FkZXIobWFuYWdlcikge1xyXG4gICAgTG9hZGVyLmNhbGwodGhpcywgbWFuYWdlcik7XHJcblxyXG4gICAgdGhpcy5kcmFjb0xvYWRlciA9IG51bGw7XHJcbiAgICB0aGlzLmRkc0xvYWRlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBHTFRGTG9hZGVyLnByb3RvdHlwZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShMb2FkZXIucHJvdG90eXBlKSwge1xyXG4gICAgY29uc3RydWN0b3I6IEdMVEZMb2FkZXIsXHJcblxyXG4gICAgbG9hZDogZnVuY3Rpb24gKHVybCwgb25Mb2FkLCBvblByb2dyZXNzLCBvbkVycm9yKSB7XHJcbiAgICAgIHZhciBzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgICB2YXIgcmVzb3VyY2VQYXRoO1xyXG5cclxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VQYXRoICE9PSAnJykge1xyXG4gICAgICAgIHJlc291cmNlUGF0aCA9IHRoaXMucmVzb3VyY2VQYXRoO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGF0aCAhPT0gJycpIHtcclxuICAgICAgICByZXNvdXJjZVBhdGggPSB0aGlzLnBhdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzb3VyY2VQYXRoID0gTG9hZGVyVXRpbHMuZXh0cmFjdFVybEJhc2UodXJsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGVsbHMgdGhlIExvYWRpbmdNYW5hZ2VyIHRvIHRyYWNrIGFuIGV4dHJhIGl0ZW0sIHdoaWNoIHJlc29sdmVzIGFmdGVyXHJcbiAgICAgIC8vIHRoZSBtb2RlbCBpcyBmdWxseSBsb2FkZWQuIFRoaXMgbWVhbnMgdGhlIGNvdW50IG9mIGl0ZW1zIGxvYWRlZCB3aWxsXHJcbiAgICAgIC8vIGJlIGluY29ycmVjdCwgYnV0IGVuc3VyZXMgbWFuYWdlci5vbkxvYWQoKSBkb2VzIG5vdCBmaXJlIGVhcmx5LlxyXG4gICAgICBzY29wZS5tYW5hZ2VyLml0ZW1TdGFydCh1cmwpO1xyXG5cclxuICAgICAgdmFyIF9vbkVycm9yID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgb25FcnJvcihlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjb3BlLm1hbmFnZXIuaXRlbUVycm9yKHVybCk7XHJcbiAgICAgICAgc2NvcGUubWFuYWdlci5pdGVtRW5kKHVybCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgbG9hZGVyID0gbmV3IEZpbGVMb2FkZXIoc2NvcGUubWFuYWdlcik7XHJcblxyXG4gICAgICBsb2FkZXIuc2V0UGF0aCh0aGlzLnBhdGgpO1xyXG4gICAgICBsb2FkZXIuc2V0UmVzcG9uc2VUeXBlKCdhcnJheWJ1ZmZlcicpO1xyXG5cclxuICAgICAgaWYgKHNjb3BlLmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJykge1xyXG4gICAgICAgIGxvYWRlci5zZXRXaXRoQ3JlZGVudGlhbHModHJ1ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxvYWRlci5sb2FkKFxyXG4gICAgICAgIHVybCxcclxuICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2NvcGUucGFyc2UoXHJcbiAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICByZXNvdXJjZVBhdGgsXHJcbiAgICAgICAgICAgICAgZnVuY3Rpb24gKGdsdGYpIHtcclxuICAgICAgICAgICAgICAgIG9uTG9hZChnbHRmKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5tYW5hZ2VyLml0ZW1FbmQodXJsKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF9vbkVycm9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIF9vbkVycm9yKGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Qcm9ncmVzcyxcclxuICAgICAgICBfb25FcnJvclxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXREUkFDT0xvYWRlcjogZnVuY3Rpb24gKGRyYWNvTG9hZGVyKSB7XHJcbiAgICAgIHRoaXMuZHJhY29Mb2FkZXIgPSBkcmFjb0xvYWRlcjtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEREU0xvYWRlcjogZnVuY3Rpb24gKGRkc0xvYWRlcikge1xyXG4gICAgICB0aGlzLmRkc0xvYWRlciA9IGRkc0xvYWRlcjtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIHBhcnNlOiBmdW5jdGlvbiAoZGF0YSwgcGF0aCwgb25Mb2FkLCBvbkVycm9yKSB7XHJcbiAgICAgIHZhciBjb250ZW50O1xyXG4gICAgICB2YXIgZXh0ZW5zaW9ucyA9IHt9O1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnRlbnQgPSBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBtYWdpYyA9IExvYWRlclV0aWxzLmRlY29kZVRleHQobmV3IFVpbnQ4QXJyYXkoZGF0YSwgMCwgNCkpO1xyXG5cclxuICAgICAgICBpZiAobWFnaWMgPT09IEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBleHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGXSA9IG5ldyBHTFRGQmluYXJ5RXh0ZW5zaW9uKGRhdGEpO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIG9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY29udGVudCA9IGV4dGVuc2lvbnNbRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEZdLmNvbnRlbnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnQgPSBMb2FkZXJVdGlscy5kZWNvZGVUZXh0KG5ldyBVaW50OEFycmF5KGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShjb250ZW50KTtcclxuXHJcbiAgICAgIGlmIChqc29uLmFzc2V0ID09PSB1bmRlZmluZWQgfHwganNvbi5hc3NldC52ZXJzaW9uWzBdIDwgMikge1xyXG4gICAgICAgIGlmIChvbkVycm9yKVxyXG4gICAgICAgICAgb25FcnJvcihcclxuICAgICAgICAgICAgbmV3IEVycm9yKCdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBhc3NldC4gZ2xURiB2ZXJzaW9ucyA+PTIuMCBhcmUgc3VwcG9ydGVkLicpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGpzb24uZXh0ZW5zaW9uc1VzZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGpzb24uZXh0ZW5zaW9uc1VzZWQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgIHZhciBleHRlbnNpb25OYW1lID0ganNvbi5leHRlbnNpb25zVXNlZFtpXTtcclxuICAgICAgICAgIHZhciBleHRlbnNpb25zUmVxdWlyZWQgPSBqc29uLmV4dGVuc2lvbnNSZXF1aXJlZCB8fCBbXTtcclxuXHJcbiAgICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBFWFRFTlNJT05TLktIUl9MSUdIVFNfUFVOQ1RVQUw6XHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXSA9IG5ldyBHTFRGTGlnaHRzRXh0ZW5zaW9uKGpzb24pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfQ0xFQVJDT0FUOlxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0gPSBuZXcgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbigpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVQ6XHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXSA9IG5ldyBHTFRGTWF0ZXJpYWxzVW5saXRFeHRlbnNpb24oKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOlxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0gPSBuZXcgR0xURk1hdGVyaWFsc1BiclNwZWN1bGFyR2xvc3NpbmVzc0V4dGVuc2lvbigpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOlxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0gPSBuZXcgR0xURkRyYWNvTWVzaENvbXByZXNzaW9uRXh0ZW5zaW9uKFxyXG4gICAgICAgICAgICAgICAganNvbixcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhY29Mb2FkZXJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBFWFRFTlNJT05TLk1TRlRfVEVYVFVSRV9ERFM6XHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXSA9IG5ldyBHTFRGVGV4dHVyZUREU0V4dGVuc2lvbih0aGlzLmRkc0xvYWRlcik7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEVYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNOlxyXG4gICAgICAgICAgICAgIGV4dGVuc2lvbnNbZXh0ZW5zaW9uTmFtZV0gPSBuZXcgR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRVhURU5TSU9OUy5LSFJfTUVTSF9RVUFOVElaQVRJT046XHJcbiAgICAgICAgICAgICAgZXh0ZW5zaW9uc1tleHRlbnNpb25OYW1lXSA9IG5ldyBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICBpZiAoZXh0ZW5zaW9uc1JlcXVpcmVkLmluZGV4T2YoZXh0ZW5zaW9uTmFtZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUSFJFRS5HTFRGTG9hZGVyOiBVbmtub3duIGV4dGVuc2lvbiBcIicgKyBleHRlbnNpb25OYW1lICsgJ1wiLicpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBwYXJzZXIgPSBuZXcgR0xURlBhcnNlcihqc29uLCBleHRlbnNpb25zLCB7XHJcbiAgICAgICAgcGF0aDogcGF0aCB8fCB0aGlzLnJlc291cmNlUGF0aCB8fCAnJyxcclxuICAgICAgICBjcm9zc09yaWdpbjogdGhpcy5jcm9zc09yaWdpbixcclxuICAgICAgICBtYW5hZ2VyOiB0aGlzLm1hbmFnZXJcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwYXJzZXIucGFyc2Uob25Mb2FkLCBvbkVycm9yKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8qIEdMVEZSRUdJU1RSWSAqL1xyXG5cclxuICBmdW5jdGlvbiBHTFRGUmVnaXN0cnkoKSB7XHJcbiAgICB2YXIgb2JqZWN0cyA9IHt9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiBvYmplY3RzW2tleV07XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBhZGQ6IGZ1bmN0aW9uIChrZXksIG9iamVjdCkge1xyXG4gICAgICAgIG9iamVjdHNba2V5XSA9IG9iamVjdDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGRlbGV0ZSBvYmplY3RzW2tleV07XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICByZW1vdmVBbGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvYmplY3RzID0ge307XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKiBFWFRFTlNJT05TICoqKioqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gIHZhciBFWFRFTlNJT05TID0ge1xyXG4gICAgS0hSX0JJTkFSWV9HTFRGOiAnS0hSX2JpbmFyeV9nbFRGJyxcclxuICAgIEtIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OOiAnS0hSX2RyYWNvX21lc2hfY29tcHJlc3Npb24nLFxyXG4gICAgS0hSX0xJR0hUU19QVU5DVFVBTDogJ0tIUl9saWdodHNfcHVuY3R1YWwnLFxyXG4gICAgS0hSX01BVEVSSUFMU19DTEVBUkNPQVQ6ICdLSFJfbWF0ZXJpYWxzX2NsZWFyY29hdCcsXHJcbiAgICBLSFJfTUFURVJJQUxTX1BCUl9TUEVDVUxBUl9HTE9TU0lORVNTOiAnS0hSX21hdGVyaWFsc19wYnJTcGVjdWxhckdsb3NzaW5lc3MnLFxyXG4gICAgS0hSX01BVEVSSUFMU19VTkxJVDogJ0tIUl9tYXRlcmlhbHNfdW5saXQnLFxyXG4gICAgS0hSX1RFWFRVUkVfVFJBTlNGT1JNOiAnS0hSX3RleHR1cmVfdHJhbnNmb3JtJyxcclxuICAgIEtIUl9NRVNIX1FVQU5USVpBVElPTjogJ0tIUl9tZXNoX3F1YW50aXphdGlvbicsXHJcbiAgICBNU0ZUX1RFWFRVUkVfRERTOiAnTVNGVF90ZXh0dXJlX2RkcydcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBERFMgVGV4dHVyZSBFeHRlbnNpb25cclxuICAgKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9WZW5kb3IvTVNGVF90ZXh0dXJlX2Rkc1xyXG4gICAqXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gR0xURlRleHR1cmVERFNFeHRlbnNpb24oZGRzTG9hZGVyKSB7XHJcbiAgICBpZiAoIWRkc0xvYWRlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgJ1RIUkVFLkdMVEZMb2FkZXI6IEF0dGVtcHRpbmcgdG8gbG9hZCAuZGRzIHRleHR1cmUgd2l0aG91dCBpbXBvcnRpbmcgRERTTG9hZGVyJ1xyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuTVNGVF9URVhUVVJFX0REUztcclxuICAgIHRoaXMuZGRzTG9hZGVyID0gZGRzTG9hZGVyO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHVuY3R1YWwgTGlnaHRzIEV4dGVuc2lvblxyXG4gICAqXHJcbiAgICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX2xpZ2h0c19wdW5jdHVhbFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIEdMVEZMaWdodHNFeHRlbnNpb24oanNvbikge1xyXG4gICAgdGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfTElHSFRTX1BVTkNUVUFMO1xyXG5cclxuICAgIHZhciBleHRlbnNpb24gPSAoanNvbi5leHRlbnNpb25zICYmIGpzb24uZXh0ZW5zaW9uc1tFWFRFTlNJT05TLktIUl9MSUdIVFNfUFVOQ1RVQUxdKSB8fCB7fTtcclxuICAgIHRoaXMubGlnaHREZWZzID0gZXh0ZW5zaW9uLmxpZ2h0cyB8fCBbXTtcclxuICB9XHJcblxyXG4gIEdMVEZMaWdodHNFeHRlbnNpb24ucHJvdG90eXBlLmxvYWRMaWdodCA9IGZ1bmN0aW9uIChsaWdodEluZGV4KSB7XHJcbiAgICB2YXIgbGlnaHREZWYgPSB0aGlzLmxpZ2h0RGVmc1tsaWdodEluZGV4XTtcclxuICAgIHZhciBsaWdodE5vZGU7XHJcblxyXG4gICAgdmFyIGNvbG9yID0gbmV3IENvbG9yKDB4ZmZmZmZmKTtcclxuICAgIGlmIChsaWdodERlZi5jb2xvciAhPT0gdW5kZWZpbmVkKSBjb2xvci5mcm9tQXJyYXkobGlnaHREZWYuY29sb3IpO1xyXG5cclxuICAgIHZhciByYW5nZSA9IGxpZ2h0RGVmLnJhbmdlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5yYW5nZSA6IDA7XHJcblxyXG4gICAgc3dpdGNoIChsaWdodERlZi50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2RpcmVjdGlvbmFsJzpcclxuICAgICAgICBsaWdodE5vZGUgPSBuZXcgRGlyZWN0aW9uYWxMaWdodChjb2xvcik7XHJcbiAgICAgICAgbGlnaHROb2RlLnRhcmdldC5wb3NpdGlvbi5zZXQoMCwgMCwgLTEpO1xyXG4gICAgICAgIGxpZ2h0Tm9kZS5hZGQobGlnaHROb2RlLnRhcmdldCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdwb2ludCc6XHJcbiAgICAgICAgbGlnaHROb2RlID0gbmV3IFBvaW50TGlnaHQoY29sb3IpO1xyXG4gICAgICAgIGxpZ2h0Tm9kZS5kaXN0YW5jZSA9IHJhbmdlO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnc3BvdCc6XHJcbiAgICAgICAgbGlnaHROb2RlID0gbmV3IFNwb3RMaWdodChjb2xvcik7XHJcbiAgICAgICAgbGlnaHROb2RlLmRpc3RhbmNlID0gcmFuZ2U7XHJcbiAgICAgICAgLy8gSGFuZGxlIHNwb3RsaWdodCBwcm9wZXJ0aWVzLlxyXG4gICAgICAgIGxpZ2h0RGVmLnNwb3QgPSBsaWdodERlZi5zcG90IHx8IHt9O1xyXG4gICAgICAgIGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgPVxyXG4gICAgICAgICAgbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSAhPT0gdW5kZWZpbmVkID8gbGlnaHREZWYuc3BvdC5pbm5lckNvbmVBbmdsZSA6IDA7XHJcbiAgICAgICAgbGlnaHREZWYuc3BvdC5vdXRlckNvbmVBbmdsZSA9XHJcbiAgICAgICAgICBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlICE9PSB1bmRlZmluZWQgPyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlIDogTWF0aC5QSSAvIDQuMDtcclxuICAgICAgICBsaWdodE5vZGUuYW5nbGUgPSBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xyXG4gICAgICAgIGxpZ2h0Tm9kZS5wZW51bWJyYSA9IDEuMCAtIGxpZ2h0RGVmLnNwb3QuaW5uZXJDb25lQW5nbGUgLyBsaWdodERlZi5zcG90Lm91dGVyQ29uZUFuZ2xlO1xyXG4gICAgICAgIGxpZ2h0Tm9kZS50YXJnZXQucG9zaXRpb24uc2V0KDAsIDAsIC0xKTtcclxuICAgICAgICBsaWdodE5vZGUuYWRkKGxpZ2h0Tm9kZS50YXJnZXQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RIUkVFLkdMVEZMb2FkZXI6IFVuZXhwZWN0ZWQgbGlnaHQgdHlwZSwgXCInICsgbGlnaHREZWYudHlwZSArICdcIi4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTb21lIGxpZ2h0cyAoZS5nLiBzcG90KSBkZWZhdWx0IHRvIGEgcG9zaXRpb24gb3RoZXIgdGhhbiB0aGUgb3JpZ2luLiBSZXNldCB0aGUgcG9zaXRpb25cclxuICAgIC8vIGhlcmUsIGJlY2F1c2Ugbm9kZS1sZXZlbCBwYXJzaW5nIHdpbGwgb25seSBvdmVycmlkZSBwb3NpdGlvbiBpZiBleHBsaWNpdGx5IHNwZWNpZmllZC5cclxuICAgIGxpZ2h0Tm9kZS5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XHJcblxyXG4gICAgbGlnaHROb2RlLmRlY2F5ID0gMjtcclxuXHJcbiAgICBpZiAobGlnaHREZWYuaW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIGxpZ2h0Tm9kZS5pbnRlbnNpdHkgPSBsaWdodERlZi5pbnRlbnNpdHk7XHJcblxyXG4gICAgbGlnaHROb2RlLm5hbWUgPSBsaWdodERlZi5uYW1lIHx8ICdsaWdodF8nICsgbGlnaHRJbmRleDtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxpZ2h0Tm9kZSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVW5saXQgTWF0ZXJpYWxzIEV4dGVuc2lvblxyXG4gICAqXHJcbiAgICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX21hdGVyaWFsc191bmxpdFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbigpIHtcclxuICAgIHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19VTkxJVDtcclxuICB9XHJcblxyXG4gIEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbi5wcm90b3R5cGUuZ2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIE1lc2hCYXNpY01hdGVyaWFsO1xyXG4gIH07XHJcblxyXG4gIEdMVEZNYXRlcmlhbHNVbmxpdEV4dGVuc2lvbi5wcm90b3R5cGUuZXh0ZW5kUGFyYW1zID0gZnVuY3Rpb24gKFxyXG4gICAgbWF0ZXJpYWxQYXJhbXMsXHJcbiAgICBtYXRlcmlhbERlZixcclxuICAgIHBhcnNlclxyXG4gICkge1xyXG4gICAgdmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcbiAgICBtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvcigxLjAsIDEuMCwgMS4wKTtcclxuICAgIG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XHJcblxyXG4gICAgdmFyIG1ldGFsbGljUm91Z2huZXNzID0gbWF0ZXJpYWxEZWYucGJyTWV0YWxsaWNSb3VnaG5lc3M7XHJcblxyXG4gICAgaWYgKG1ldGFsbGljUm91Z2huZXNzKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvckZhY3RvcikpIHtcclxuICAgICAgICB2YXIgYXJyYXkgPSBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3I7XHJcblxyXG4gICAgICAgIG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheShhcnJheSk7XHJcbiAgICAgICAgbWF0ZXJpYWxQYXJhbXMub3BhY2l0eSA9IGFycmF5WzNdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGVuZGluZy5wdXNoKFxyXG4gICAgICAgICAgcGFyc2VyLmFzc2lnblRleHR1cmUobWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JUZXh0dXJlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocGVuZGluZyk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXJjb2F0IE1hdGVyaWFscyBFeHRlbnNpb25cclxuICAgKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfY2xlYXJjb2F0XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbigpIHtcclxuICAgIHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVQ7XHJcbiAgfVxyXG5cclxuICBHTFRGTWF0ZXJpYWxzQ2xlYXJjb2F0RXh0ZW5zaW9uLnByb3RvdHlwZS5nZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gTWVzaFBoeXNpY2FsTWF0ZXJpYWw7XHJcbiAgfTtcclxuXHJcbiAgR0xURk1hdGVyaWFsc0NsZWFyY29hdEV4dGVuc2lvbi5wcm90b3R5cGUuZXh0ZW5kUGFyYW1zID0gZnVuY3Rpb24gKFxyXG4gICAgbWF0ZXJpYWxQYXJhbXMsXHJcbiAgICBtYXRlcmlhbERlZixcclxuICAgIHBhcnNlclxyXG4gICkge1xyXG4gICAgdmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcbiAgICB2YXIgZXh0ZW5zaW9uID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG5cclxuICAgIGlmIChleHRlbnNpb24uY2xlYXJjb2F0RmFjdG9yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgbWF0ZXJpYWxQYXJhbXMuY2xlYXJjb2F0ID0gZXh0ZW5zaW9uLmNsZWFyY29hdEZhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXh0ZW5zaW9uLmNsZWFyY29hdFRleHR1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBwZW5kaW5nLnB1c2goXHJcbiAgICAgICAgcGFyc2VyLmFzc2lnblRleHR1cmUobWF0ZXJpYWxQYXJhbXMsICdjbGVhcmNvYXRNYXAnLCBleHRlbnNpb24uY2xlYXJjb2F0VGV4dHVyZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXh0ZW5zaW9uLmNsZWFyY29hdFJvdWdobmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdFJvdWdobmVzcyA9IGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NGYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGVuZGluZy5wdXNoKFxyXG4gICAgICAgIHBhcnNlci5hc3NpZ25UZXh0dXJlKFxyXG4gICAgICAgICAgbWF0ZXJpYWxQYXJhbXMsXHJcbiAgICAgICAgICAnY2xlYXJjb2F0Um91Z2huZXNzTWFwJyxcclxuICAgICAgICAgIGV4dGVuc2lvbi5jbGVhcmNvYXRSb3VnaG5lc3NUZXh0dXJlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICBwYXJzZXIuYXNzaWduVGV4dHVyZShcclxuICAgICAgICAgIG1hdGVyaWFsUGFyYW1zLFxyXG4gICAgICAgICAgJ2NsZWFyY29hdE5vcm1hbE1hcCcsXHJcbiAgICAgICAgICBleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChleHRlbnNpb24uY2xlYXJjb2F0Tm9ybWFsVGV4dHVyZS5zY2FsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdmFyIHNjYWxlID0gZXh0ZW5zaW9uLmNsZWFyY29hdE5vcm1hbFRleHR1cmUuc2NhbGU7XHJcblxyXG4gICAgICAgIG1hdGVyaWFsUGFyYW1zLmNsZWFyY29hdE5vcm1hbFNjYWxlID0gbmV3IFZlY3RvcjIoc2NhbGUsIHNjYWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwZW5kaW5nKTtcclxuICB9O1xyXG5cclxuICAvKiBCSU5BUlkgRVhURU5TSU9OICovXHJcbiAgdmFyIEJJTkFSWV9FWFRFTlNJT05fSEVBREVSX01BR0lDID0gJ2dsVEYnO1xyXG4gIHZhciBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggPSAxMjtcclxuICB2YXIgQklOQVJZX0VYVEVOU0lPTl9DSFVOS19UWVBFUyA9IHsgSlNPTjogMHg0ZTRmNTM0YSwgQklOOiAweDAwNGU0OTQyIH07XHJcblxyXG4gIGZ1bmN0aW9uIEdMVEZCaW5hcnlFeHRlbnNpb24oZGF0YSkge1xyXG4gICAgdGhpcy5uYW1lID0gRVhURU5TSU9OUy5LSFJfQklOQVJZX0dMVEY7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG4gICAgdGhpcy5ib2R5ID0gbnVsbDtcclxuXHJcbiAgICB2YXIgaGVhZGVyVmlldyA9IG5ldyBEYXRhVmlldyhkYXRhLCAwLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEgpO1xyXG5cclxuICAgIHRoaXMuaGVhZGVyID0ge1xyXG4gICAgICBtYWdpYzogTG9hZGVyVXRpbHMuZGVjb2RlVGV4dChuZXcgVWludDhBcnJheShkYXRhLnNsaWNlKDAsIDQpKSksXHJcbiAgICAgIHZlcnNpb246IGhlYWRlclZpZXcuZ2V0VWludDMyKDQsIHRydWUpLFxyXG4gICAgICBsZW5ndGg6IGhlYWRlclZpZXcuZ2V0VWludDMyKDgsIHRydWUpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmhlYWRlci5tYWdpYyAhPT0gQklOQVJZX0VYVEVOU0lPTl9IRUFERVJfTUFHSUMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBnbFRGLUJpbmFyeSBoZWFkZXIuJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZGVyLnZlcnNpb24gPCAyLjApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUSFJFRS5HTFRGTG9hZGVyOiBMZWdhY3kgYmluYXJ5IGZpbGUgZGV0ZWN0ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNodW5rVmlldyA9IG5ldyBEYXRhVmlldyhkYXRhLCBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEgpO1xyXG4gICAgdmFyIGNodW5rSW5kZXggPSAwO1xyXG5cclxuICAgIHdoaWxlIChjaHVua0luZGV4IDwgY2h1bmtWaWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgICAgdmFyIGNodW5rTGVuZ3RoID0gY2h1bmtWaWV3LmdldFVpbnQzMihjaHVua0luZGV4LCB0cnVlKTtcclxuICAgICAgY2h1bmtJbmRleCArPSA0O1xyXG5cclxuICAgICAgdmFyIGNodW5rVHlwZSA9IGNodW5rVmlldy5nZXRVaW50MzIoY2h1bmtJbmRleCwgdHJ1ZSk7XHJcbiAgICAgIGNodW5rSW5kZXggKz0gNDtcclxuXHJcbiAgICAgIGlmIChjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuSlNPTikge1xyXG4gICAgICAgIHZhciBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheShcclxuICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4LFxyXG4gICAgICAgICAgY2h1bmtMZW5ndGhcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IExvYWRlclV0aWxzLmRlY29kZVRleHQoY29udGVudEFycmF5KTtcclxuICAgICAgfSBlbHNlIGlmIChjaHVua1R5cGUgPT09IEJJTkFSWV9FWFRFTlNJT05fQ0hVTktfVFlQRVMuQklOKSB7XHJcbiAgICAgICAgdmFyIGJ5dGVPZmZzZXQgPSBCSU5BUllfRVhURU5TSU9OX0hFQURFUl9MRU5HVEggKyBjaHVua0luZGV4O1xyXG4gICAgICAgIHRoaXMuYm9keSA9IGRhdGEuc2xpY2UoYnl0ZU9mZnNldCwgYnl0ZU9mZnNldCArIGNodW5rTGVuZ3RoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2xpZW50cyBtdXN0IGlnbm9yZSBjaHVua3Mgd2l0aCB1bmtub3duIHR5cGVzLlxyXG5cclxuICAgICAgY2h1bmtJbmRleCArPSBjaHVua0xlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250ZW50ID09PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVEhSRUUuR0xURkxvYWRlcjogSlNPTiBjb250ZW50IG5vdCBmb3VuZC4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERSQUNPIE1lc2ggQ29tcHJlc3Npb24gRXh0ZW5zaW9uXHJcbiAgICpcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfZHJhY29fbWVzaF9jb21wcmVzc2lvblxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIEdMVEZEcmFjb01lc2hDb21wcmVzc2lvbkV4dGVuc2lvbihqc29uLCBkcmFjb0xvYWRlcikge1xyXG4gICAgaWYgKCFkcmFjb0xvYWRlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RIUkVFLkdMVEZMb2FkZXI6IE5vIERSQUNPTG9hZGVyIGluc3RhbmNlIHByb3ZpZGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT047XHJcbiAgICB0aGlzLmpzb24gPSBqc29uO1xyXG4gICAgdGhpcy5kcmFjb0xvYWRlciA9IGRyYWNvTG9hZGVyO1xyXG4gICAgdGhpcy5kcmFjb0xvYWRlci5wcmVsb2FkKCk7XHJcbiAgfVxyXG5cclxuICBHTFRGRHJhY29NZXNoQ29tcHJlc3Npb25FeHRlbnNpb24ucHJvdG90eXBlLmRlY29kZVByaW1pdGl2ZSA9IGZ1bmN0aW9uIChwcmltaXRpdmUsIHBhcnNlcikge1xyXG4gICAgdmFyIGpzb24gPSB0aGlzLmpzb247XHJcbiAgICB2YXIgZHJhY29Mb2FkZXIgPSB0aGlzLmRyYWNvTG9hZGVyO1xyXG4gICAgdmFyIGJ1ZmZlclZpZXdJbmRleCA9IHByaW1pdGl2ZS5leHRlbnNpb25zW3RoaXMubmFtZV0uYnVmZmVyVmlldztcclxuICAgIHZhciBnbHRmQXR0cmlidXRlTWFwID0gcHJpbWl0aXZlLmV4dGVuc2lvbnNbdGhpcy5uYW1lXS5hdHRyaWJ1dGVzO1xyXG4gICAgdmFyIHRocmVlQXR0cmlidXRlTWFwID0ge307XHJcbiAgICB2YXIgYXR0cmlidXRlTm9ybWFsaXplZE1hcCA9IHt9O1xyXG4gICAgdmFyIGF0dHJpYnV0ZVR5cGVNYXAgPSB7fTtcclxuXHJcbiAgICBmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGdsdGZBdHRyaWJ1dGVNYXApIHtcclxuICAgICAgdmFyIHRocmVlQXR0cmlidXRlTmFtZSA9IEFUVFJJQlVURVNbYXR0cmlidXRlTmFtZV0gfHwgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgdGhyZWVBdHRyaWJ1dGVNYXBbdGhyZWVBdHRyaWJ1dGVOYW1lXSA9IGdsdGZBdHRyaWJ1dGVNYXBbYXR0cmlidXRlTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChhdHRyaWJ1dGVOYW1lIGluIHByaW1pdGl2ZS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgIHZhciB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTW2F0dHJpYnV0ZU5hbWVdIHx8IGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIGlmIChnbHRmQXR0cmlidXRlTWFwW2F0dHJpYnV0ZU5hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgYWNjZXNzb3JEZWYgPSBqc29uLmFjY2Vzc29yc1twcmltaXRpdmUuYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXV07XHJcbiAgICAgICAgdmFyIGNvbXBvbmVudFR5cGUgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZV07XHJcblxyXG4gICAgICAgIGF0dHJpYnV0ZVR5cGVNYXBbdGhyZWVBdHRyaWJ1dGVOYW1lXSA9IGNvbXBvbmVudFR5cGU7XHJcbiAgICAgICAgYXR0cmlidXRlTm9ybWFsaXplZE1hcFt0aHJlZUF0dHJpYnV0ZU5hbWVdID0gYWNjZXNzb3JEZWYubm9ybWFsaXplZCA9PT0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSgnYnVmZmVyVmlldycsIGJ1ZmZlclZpZXdJbmRleCkudGhlbihmdW5jdGlvbiAoYnVmZmVyVmlldykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICBkcmFjb0xvYWRlci5kZWNvZGVEcmFjb0ZpbGUoXHJcbiAgICAgICAgICBidWZmZXJWaWV3LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGUgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xyXG4gICAgICAgICAgICAgIHZhciBub3JtYWxpemVkID0gYXR0cmlidXRlTm9ybWFsaXplZE1hcFthdHRyaWJ1dGVOYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWQgIT09IHVuZGVmaW5lZCkgYXR0cmlidXRlLm5vcm1hbGl6ZWQgPSBub3JtYWxpemVkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXNvbHZlKGdlb21ldHJ5KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0aHJlZUF0dHJpYnV0ZU1hcCxcclxuICAgICAgICAgIGF0dHJpYnV0ZVR5cGVNYXBcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRleHR1cmUgVHJhbnNmb3JtIEV4dGVuc2lvblxyXG4gICAqXHJcbiAgICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL3RyZWUvbWFzdGVyL2V4dGVuc2lvbnMvMi4wL0tocm9ub3MvS0hSX3RleHR1cmVfdHJhbnNmb3JtXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gR0xURlRleHR1cmVUcmFuc2Zvcm1FeHRlbnNpb24oKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBFWFRFTlNJT05TLktIUl9URVhUVVJFX1RSQU5TRk9STTtcclxuICB9XHJcblxyXG4gIEdMVEZUZXh0dXJlVHJhbnNmb3JtRXh0ZW5zaW9uLnByb3RvdHlwZS5leHRlbmRUZXh0dXJlID0gZnVuY3Rpb24gKHRleHR1cmUsIHRyYW5zZm9ybSkge1xyXG4gICAgdGV4dHVyZSA9IHRleHR1cmUuY2xvbmUoKTtcclxuXHJcbiAgICBpZiAodHJhbnNmb3JtLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRleHR1cmUub2Zmc2V0LmZyb21BcnJheSh0cmFuc2Zvcm0ub2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHJhbnNmb3JtLnJvdGF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGV4dHVyZS5yb3RhdGlvbiA9IHRyYW5zZm9ybS5yb3RhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHJhbnNmb3JtLnNjYWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGV4dHVyZS5yZXBlYXQuZnJvbUFycmF5KHRyYW5zZm9ybS5zY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRyYW5zZm9ybS50ZXhDb29yZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAnVEhSRUUuR0xURkxvYWRlcjogQ3VzdG9tIFVWIHNldHMgaW4gXCInICsgdGhpcy5uYW1lICsgJ1wiIGV4dGVuc2lvbiBub3QgeWV0IHN1cHBvcnRlZC4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY3VsYXItR2xvc3NpbmVzcyBFeHRlbnNpb25cclxuICAgKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9leHRlbnNpb25zLzIuMC9LaHJvbm9zL0tIUl9tYXRlcmlhbHNfcGJyU3BlY3VsYXJHbG9zc2luZXNzXHJcbiAgICovXHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3ViIGNsYXNzIG9mIFN0YW5kYXJkTWF0ZXJpYWwgd2l0aCBzb21lIG9mIHRoZSBmdW5jdGlvbmFsaXR5XHJcbiAgICogY2hhbmdlZCB2aWEgdGhlIGBvbkJlZm9yZUNvbXBpbGVgIGNhbGxiYWNrXHJcbiAgICogQHBhaWxoZWFkXHJcbiAgICovXHJcblxyXG4gIGZ1bmN0aW9uIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsKHBhcmFtcykge1xyXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwuY2FsbCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLmlzR0xURlNwZWN1bGFyR2xvc3NpbmVzc01hdGVyaWFsID0gdHJ1ZTtcclxuXHJcbiAgICAvL3ZhcmlvdXMgY2h1bmtzIHRoYXQgbmVlZCByZXBsYWNpbmdcclxuICAgIHZhciBzcGVjdWxhck1hcFBhcnNGcmFnbWVudENodW5rID0gW1xyXG4gICAgICAnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXHJcbiAgICAgICdcdHVuaWZvcm0gc2FtcGxlcjJEIHNwZWN1bGFyTWFwOycsXHJcbiAgICAgICcjZW5kaWYnLFxyXG4gICAgXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICB2YXIgZ2xvc3NpbmVzc01hcFBhcnNGcmFnbWVudENodW5rID0gW1xyXG4gICAgICAnI2lmZGVmIFVTRV9HTE9TU0lORVNTTUFQJyxcclxuICAgICAgJ1x0dW5pZm9ybSBzYW1wbGVyMkQgZ2xvc3NpbmVzc01hcDsnLFxyXG4gICAgICAnI2VuZGlmJyxcclxuICAgIF0uam9pbignXFxuJyk7XHJcblxyXG4gICAgdmFyIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVuayA9IFtcclxuICAgICAgJ3ZlYzMgc3BlY3VsYXJGYWN0b3IgPSBzcGVjdWxhcjsnLFxyXG4gICAgICAnI2lmZGVmIFVTRV9TUEVDVUxBUk1BUCcsXHJcbiAgICAgICdcdHZlYzQgdGV4ZWxTcGVjdWxhciA9IHRleHR1cmUyRCggc3BlY3VsYXJNYXAsIHZVdiApOycsXHJcbiAgICAgICdcdHRleGVsU3BlY3VsYXIgPSBzUkdCVG9MaW5lYXIoIHRleGVsU3BlY3VsYXIgKTsnLFxyXG4gICAgICAnXHQvLyByZWFkcyBjaGFubmVsIFJHQiwgY29tcGF0aWJsZSB3aXRoIGEgZ2xURiBTcGVjdWxhci1HbG9zc2luZXNzIChSR0JBKSB0ZXh0dXJlJyxcclxuICAgICAgJ1x0c3BlY3VsYXJGYWN0b3IgKj0gdGV4ZWxTcGVjdWxhci5yZ2I7JyxcclxuICAgICAgJyNlbmRpZicsXHJcbiAgICBdLmpvaW4oJ1xcbicpO1xyXG5cclxuICAgIHZhciBnbG9zc2luZXNzTWFwRnJhZ21lbnRDaHVuayA9IFtcclxuICAgICAgJ2Zsb2F0IGdsb3NzaW5lc3NGYWN0b3IgPSBnbG9zc2luZXNzOycsXHJcbiAgICAgICcjaWZkZWYgVVNFX0dMT1NTSU5FU1NNQVAnLFxyXG4gICAgICAnXHR2ZWM0IHRleGVsR2xvc3NpbmVzcyA9IHRleHR1cmUyRCggZ2xvc3NpbmVzc01hcCwgdlV2ICk7JyxcclxuICAgICAgJ1x0Ly8gcmVhZHMgY2hhbm5lbCBBLCBjb21wYXRpYmxlIHdpdGggYSBnbFRGIFNwZWN1bGFyLUdsb3NzaW5lc3MgKFJHQkEpIHRleHR1cmUnLFxyXG4gICAgICAnXHRnbG9zc2luZXNzRmFjdG9yICo9IHRleGVsR2xvc3NpbmVzcy5hOycsXHJcbiAgICAgICcjZW5kaWYnLFxyXG4gICAgXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICB2YXIgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmsgPSBbXHJcbiAgICAgICdQaHlzaWNhbE1hdGVyaWFsIG1hdGVyaWFsOycsXHJcbiAgICAgICdtYXRlcmlhbC5kaWZmdXNlQ29sb3IgPSBkaWZmdXNlQ29sb3IucmdiOycsXHJcbiAgICAgICd2ZWMzIGR4eSA9IG1heCggYWJzKCBkRmR4KCBnZW9tZXRyeU5vcm1hbCApICksIGFicyggZEZkeSggZ2VvbWV0cnlOb3JtYWwgKSApICk7JyxcclxuICAgICAgJ2Zsb2F0IGdlb21ldHJ5Um91Z2huZXNzID0gbWF4KCBtYXgoIGR4eS54LCBkeHkueSApLCBkeHkueiApOycsXHJcbiAgICAgICdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyA9IG1heCggMS4wIC0gZ2xvc3NpbmVzc0ZhY3RvciwgMC4wNTI1ICk7Ly8gMC4wNTI1IGNvcnJlc3BvbmRzIHRvIHRoZSBiYXNlIG1pcCBvZiBhIDI1NiBjdWJlbWFwLicsXHJcbiAgICAgICdtYXRlcmlhbC5zcGVjdWxhclJvdWdobmVzcyArPSBnZW9tZXRyeVJvdWdobmVzczsnLFxyXG4gICAgICAnbWF0ZXJpYWwuc3BlY3VsYXJSb3VnaG5lc3MgPSBtaW4oIG1hdGVyaWFsLnNwZWN1bGFyUm91Z2huZXNzLCAxLjAgKTsnLFxyXG4gICAgICAnbWF0ZXJpYWwuc3BlY3VsYXJDb2xvciA9IHNwZWN1bGFyRmFjdG9yLnJnYjsnLFxyXG4gICAgXS5qb2luKCdcXG4nKTtcclxuXHJcbiAgICB2YXIgdW5pZm9ybXMgPSB7XHJcbiAgICAgIHNwZWN1bGFyOiB7IHZhbHVlOiBuZXcgQ29sb3IoKS5zZXRIZXgoMHhmZmZmZmYpIH0sXHJcbiAgICAgIGdsb3NzaW5lc3M6IHsgdmFsdWU6IDEgfSxcclxuICAgICAgc3BlY3VsYXJNYXA6IHsgdmFsdWU6IG51bGwgfSxcclxuICAgICAgZ2xvc3NpbmVzc01hcDogeyB2YWx1ZTogbnVsbCB9LFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9leHRyYVVuaWZvcm1zID0gdW5pZm9ybXM7XHJcblxyXG4gICAgLy8gcGxlYXNlIHNlZSAjMTQwMzEgb3IgIzEzMTk4IGZvciBhbiBhbHRlcm5hdGUgYXBwcm9hY2hcclxuICAgIHRoaXMub25CZWZvcmVDb21waWxlID0gZnVuY3Rpb24gKHNoYWRlcikge1xyXG4gICAgICBmb3IgKHZhciB1bmlmb3JtTmFtZSBpbiB1bmlmb3Jtcykge1xyXG4gICAgICAgIHNoYWRlci51bmlmb3Jtc1t1bmlmb3JtTmFtZV0gPSB1bmlmb3Jtc1t1bmlmb3JtTmFtZV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNoYWRlci5mcmFnbWVudFNoYWRlciA9IHNoYWRlci5mcmFnbWVudFNoYWRlci5yZXBsYWNlKFxyXG4gICAgICAgICd1bmlmb3JtIGZsb2F0IHJvdWdobmVzczsnLFxyXG4gICAgICAgICd1bmlmb3JtIHZlYzMgc3BlY3VsYXI7J1xyXG4gICAgICApO1xyXG4gICAgICBzaGFkZXIuZnJhZ21lbnRTaGFkZXIgPSBzaGFkZXIuZnJhZ21lbnRTaGFkZXIucmVwbGFjZShcclxuICAgICAgICAndW5pZm9ybSBmbG9hdCBtZXRhbG5lc3M7JyxcclxuICAgICAgICAndW5pZm9ybSBmbG9hdCBnbG9zc2luZXNzOydcclxuICAgICAgKTtcclxuICAgICAgc2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyLnJlcGxhY2UoXHJcbiAgICAgICAgJyNpbmNsdWRlIDxyb3VnaG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLFxyXG4gICAgICAgIHNwZWN1bGFyTWFwUGFyc0ZyYWdtZW50Q2h1bmtcclxuICAgICAgKTtcclxuICAgICAgc2hhZGVyLmZyYWdtZW50U2hhZGVyID0gc2hhZGVyLmZyYWdtZW50U2hhZGVyLnJlcGxhY2UoXHJcbiAgICAgICAgJyNpbmNsdWRlIDxtZXRhbG5lc3NtYXBfcGFyc19mcmFnbWVudD4nLFxyXG4gICAgICAgIGdsb3NzaW5lc3NNYXBQYXJzRnJhZ21lbnRDaHVua1xyXG4gICAgICApO1xyXG4gICAgICBzaGFkZXIuZnJhZ21lbnRTaGFkZXIgPSBzaGFkZXIuZnJhZ21lbnRTaGFkZXIucmVwbGFjZShcclxuICAgICAgICAnI2luY2x1ZGUgPHJvdWdobmVzc21hcF9mcmFnbWVudD4nLFxyXG4gICAgICAgIHNwZWN1bGFyTWFwRnJhZ21lbnRDaHVua1xyXG4gICAgICApO1xyXG4gICAgICBzaGFkZXIuZnJhZ21lbnRTaGFkZXIgPSBzaGFkZXIuZnJhZ21lbnRTaGFkZXIucmVwbGFjZShcclxuICAgICAgICAnI2luY2x1ZGUgPG1ldGFsbmVzc21hcF9mcmFnbWVudD4nLFxyXG4gICAgICAgIGdsb3NzaW5lc3NNYXBGcmFnbWVudENodW5rXHJcbiAgICAgICk7XHJcbiAgICAgIHNoYWRlci5mcmFnbWVudFNoYWRlciA9IHNoYWRlci5mcmFnbWVudFNoYWRlci5yZXBsYWNlKFxyXG4gICAgICAgICcjaW5jbHVkZSA8bGlnaHRzX3BoeXNpY2FsX2ZyYWdtZW50PicsXHJcbiAgICAgICAgbGlnaHRQaHlzaWNhbEZyYWdtZW50Q2h1bmtcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgLyplc2xpbnQtZGlzYWJsZSovXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XHJcbiAgICAgIHNwZWN1bGFyOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5pZm9ybXMuc3BlY3VsYXIudmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICB1bmlmb3Jtcy5zcGVjdWxhci52YWx1ZSA9IHY7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc3BlY3VsYXJNYXA6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiB1bmlmb3Jtcy5zcGVjdWxhck1hcC52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgIHVuaWZvcm1zLnNwZWN1bGFyTWFwLnZhbHVlID0gdjtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBnbG9zc2luZXNzOiB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gdW5pZm9ybXMuZ2xvc3NpbmVzcy52YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAgIHVuaWZvcm1zLmdsb3NzaW5lc3MudmFsdWUgPSB2O1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGdsb3NzaW5lc3NNYXA6IHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiB1bmlmb3Jtcy5nbG9zc2luZXNzTWFwLnZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgdW5pZm9ybXMuZ2xvc3NpbmVzc01hcC52YWx1ZSA9IHY7XHJcbiAgICAgICAgICAvL2hvdyBhYm91dCBzb21ldGhpbmcgbGlrZSB0aGlzIC0gQHBhaWxoZWFkXHJcbiAgICAgICAgICBpZiAodikge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmluZXMuVVNFX0dMT1NTSU5FU1NNQVAgPSAnJztcclxuICAgICAgICAgICAgLy8gc2V0IFVTRV9ST1VHSE5FU1NNQVAgdG8gZW5hYmxlIHZVdlxyXG4gICAgICAgICAgICB0aGlzLmRlZmluZXMuVVNFX1JPVUdITkVTU01BUCA9ICcnO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGVmaW5lcy5VU0VfUk9VR0hORVNTTUFQO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kZWZpbmVzLlVTRV9HTE9TU0lORVNTTUFQO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKmVzbGludC1lbmFibGUqL1xyXG4gICAgZGVsZXRlIHRoaXMubWV0YWxuZXNzO1xyXG4gICAgZGVsZXRlIHRoaXMucm91Z2huZXNzO1xyXG4gICAgZGVsZXRlIHRoaXMubWV0YWxuZXNzTWFwO1xyXG4gICAgZGVsZXRlIHRoaXMucm91Z2huZXNzTWFwO1xyXG5cclxuICAgIHRoaXMuc2V0VmFsdWVzKHBhcmFtcyk7XHJcbiAgfVxyXG5cclxuICBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1lc2hTdGFuZGFyZE1hdGVyaWFsLnByb3RvdHlwZSk7XHJcbiAgR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR0xURk1lc2hTdGFuZGFyZFNHTWF0ZXJpYWw7XHJcblxyXG4gIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHNvdXJjZSkge1xyXG4gICAgTWVzaFN0YW5kYXJkTWF0ZXJpYWwucHJvdG90eXBlLmNvcHkuY2FsbCh0aGlzLCBzb3VyY2UpO1xyXG4gICAgdGhpcy5zcGVjdWxhck1hcCA9IHNvdXJjZS5zcGVjdWxhck1hcDtcclxuICAgIHRoaXMuc3BlY3VsYXIuY29weShzb3VyY2Uuc3BlY3VsYXIpO1xyXG4gICAgdGhpcy5nbG9zc2luZXNzTWFwID0gc291cmNlLmdsb3NzaW5lc3NNYXA7XHJcbiAgICB0aGlzLmdsb3NzaW5lc3MgPSBzb3VyY2UuZ2xvc3NpbmVzcztcclxuICAgIGRlbGV0ZSB0aGlzLm1ldGFsbmVzcztcclxuICAgIGRlbGV0ZSB0aGlzLnJvdWdobmVzcztcclxuICAgIGRlbGV0ZSB0aGlzLm1ldGFsbmVzc01hcDtcclxuICAgIGRlbGV0ZSB0aGlzLnJvdWdobmVzc01hcDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEdMVEZNYXRlcmlhbHNQYnJTcGVjdWxhckdsb3NzaW5lc3NFeHRlbnNpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lOiBFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1MsXHJcblxyXG4gICAgICBzcGVjdWxhckdsb3NzaW5lc3NQYXJhbXM6IFtcclxuICAgICAgICAnY29sb3InLFxyXG4gICAgICAgICdtYXAnLFxyXG4gICAgICAgICdsaWdodE1hcCcsXHJcbiAgICAgICAgJ2xpZ2h0TWFwSW50ZW5zaXR5JyxcclxuICAgICAgICAnYW9NYXAnLFxyXG4gICAgICAgICdhb01hcEludGVuc2l0eScsXHJcbiAgICAgICAgJ2VtaXNzaXZlJyxcclxuICAgICAgICAnZW1pc3NpdmVJbnRlbnNpdHknLFxyXG4gICAgICAgICdlbWlzc2l2ZU1hcCcsXHJcbiAgICAgICAgJ2J1bXBNYXAnLFxyXG4gICAgICAgICdidW1wU2NhbGUnLFxyXG4gICAgICAgICdub3JtYWxNYXAnLFxyXG4gICAgICAgICdub3JtYWxNYXBUeXBlJyxcclxuICAgICAgICAnZGlzcGxhY2VtZW50TWFwJyxcclxuICAgICAgICAnZGlzcGxhY2VtZW50U2NhbGUnLFxyXG4gICAgICAgICdkaXNwbGFjZW1lbnRCaWFzJyxcclxuICAgICAgICAnc3BlY3VsYXJNYXAnLFxyXG4gICAgICAgICdzcGVjdWxhcicsXHJcbiAgICAgICAgJ2dsb3NzaW5lc3NNYXAnLFxyXG4gICAgICAgICdnbG9zc2luZXNzJyxcclxuICAgICAgICAnYWxwaGFNYXAnLFxyXG4gICAgICAgICdlbnZNYXAnLFxyXG4gICAgICAgICdlbnZNYXBJbnRlbnNpdHknLFxyXG4gICAgICAgICdyZWZyYWN0aW9uUmF0aW8nLFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgZ2V0TWF0ZXJpYWxUeXBlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZXh0ZW5kUGFyYW1zOiBmdW5jdGlvbiAobWF0ZXJpYWxQYXJhbXMsIG1hdGVyaWFsRGVmLCBwYXJzZXIpIHtcclxuICAgICAgICB2YXIgcGJyU3BlY3VsYXJHbG9zc2luZXNzID0gbWF0ZXJpYWxEZWYuZXh0ZW5zaW9uc1t0aGlzLm5hbWVdO1xyXG5cclxuICAgICAgICBtYXRlcmlhbFBhcmFtcy5jb2xvciA9IG5ldyBDb2xvcigxLjAsIDEuMCwgMS4wKTtcclxuICAgICAgICBtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gMS4wO1xyXG5cclxuICAgICAgICB2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZUZhY3RvcikpIHtcclxuICAgICAgICAgIHZhciBhcnJheSA9IHBiclNwZWN1bGFyR2xvc3NpbmVzcy5kaWZmdXNlRmFjdG9yO1xyXG5cclxuICAgICAgICAgIG1hdGVyaWFsUGFyYW1zLmNvbG9yLmZyb21BcnJheShhcnJheSk7XHJcbiAgICAgICAgICBtYXRlcmlhbFBhcmFtcy5vcGFjaXR5ID0gYXJyYXlbM107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocGJyU3BlY3VsYXJHbG9zc2luZXNzLmRpZmZ1c2VUZXh0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICAgICAgcGFyc2VyLmFzc2lnblRleHR1cmUobWF0ZXJpYWxQYXJhbXMsICdtYXAnLCBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZGlmZnVzZVRleHR1cmUpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmUgPSBuZXcgQ29sb3IoMC4wLCAwLjAsIDAuMCk7XHJcbiAgICAgICAgbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcyA9XHJcbiAgICAgICAgICBwYnJTcGVjdWxhckdsb3NzaW5lc3MuZ2xvc3NpbmVzc0ZhY3RvciAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gcGJyU3BlY3VsYXJHbG9zc2luZXNzLmdsb3NzaW5lc3NGYWN0b3JcclxuICAgICAgICAgICAgOiAxLjA7XHJcbiAgICAgICAgbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXIgPSBuZXcgQ29sb3IoMS4wLCAxLjAsIDEuMCk7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckZhY3RvcikpIHtcclxuICAgICAgICAgIG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyLmZyb21BcnJheShwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJGYWN0b3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBiclNwZWN1bGFyR2xvc3NpbmVzcy5zcGVjdWxhckdsb3NzaW5lc3NUZXh0dXJlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHZhciBzcGVjR2xvc3NNYXBEZWYgPSBwYnJTcGVjdWxhckdsb3NzaW5lc3Muc3BlY3VsYXJHbG9zc2luZXNzVGV4dHVyZTtcclxuICAgICAgICAgIHBlbmRpbmcucHVzaChwYXJzZXIuYXNzaWduVGV4dHVyZShtYXRlcmlhbFBhcmFtcywgJ2dsb3NzaW5lc3NNYXAnLCBzcGVjR2xvc3NNYXBEZWYpKTtcclxuICAgICAgICAgIHBlbmRpbmcucHVzaChwYXJzZXIuYXNzaWduVGV4dHVyZShtYXRlcmlhbFBhcmFtcywgJ3NwZWN1bGFyTWFwJywgc3BlY0dsb3NzTWFwRGVmKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocGVuZGluZyk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBjcmVhdGVNYXRlcmlhbDogZnVuY3Rpb24gKG1hdGVyaWFsUGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIG1hdGVyaWFsID0gbmV3IEdMVEZNZXNoU3RhbmRhcmRTR01hdGVyaWFsKG1hdGVyaWFsUGFyYW1zKTtcclxuICAgICAgICBtYXRlcmlhbC5mb2cgPSB0cnVlO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5jb2xvciA9IG1hdGVyaWFsUGFyYW1zLmNvbG9yO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5tYXAgPSBtYXRlcmlhbFBhcmFtcy5tYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5tYXA7XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLmxpZ2h0TWFwID0gbnVsbDtcclxuICAgICAgICBtYXRlcmlhbC5saWdodE1hcEludGVuc2l0eSA9IDEuMDtcclxuXHJcbiAgICAgICAgbWF0ZXJpYWwuYW9NYXAgPSBtYXRlcmlhbFBhcmFtcy5hb01hcCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG1hdGVyaWFsUGFyYW1zLmFvTWFwO1xyXG4gICAgICAgIG1hdGVyaWFsLmFvTWFwSW50ZW5zaXR5ID0gMS4wO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5lbWlzc2l2ZSA9IG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlO1xyXG4gICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlSW50ZW5zaXR5ID0gMS4wO1xyXG4gICAgICAgIG1hdGVyaWFsLmVtaXNzaXZlTWFwID1cclxuICAgICAgICAgIG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZW1pc3NpdmVNYXA7XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLmJ1bXBNYXAgPSBtYXRlcmlhbFBhcmFtcy5idW1wTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuYnVtcE1hcDtcclxuICAgICAgICBtYXRlcmlhbC5idW1wU2NhbGUgPSAxO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5ub3JtYWxNYXAgPVxyXG4gICAgICAgICAgbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMubm9ybWFsTWFwO1xyXG4gICAgICAgIG1hdGVyaWFsLm5vcm1hbE1hcFR5cGUgPSBUYW5nZW50U3BhY2VOb3JtYWxNYXA7XHJcblxyXG4gICAgICAgIGlmIChtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSkgbWF0ZXJpYWwubm9ybWFsU2NhbGUgPSBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZTtcclxuXHJcbiAgICAgICAgbWF0ZXJpYWwuZGlzcGxhY2VtZW50TWFwID0gbnVsbDtcclxuICAgICAgICBtYXRlcmlhbC5kaXNwbGFjZW1lbnRTY2FsZSA9IDE7XHJcbiAgICAgICAgbWF0ZXJpYWwuZGlzcGxhY2VtZW50QmlhcyA9IDA7XHJcblxyXG4gICAgICAgIG1hdGVyaWFsLnNwZWN1bGFyTWFwID1cclxuICAgICAgICAgIG1hdGVyaWFsUGFyYW1zLnNwZWN1bGFyTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuc3BlY3VsYXJNYXA7XHJcbiAgICAgICAgbWF0ZXJpYWwuc3BlY3VsYXIgPSBtYXRlcmlhbFBhcmFtcy5zcGVjdWxhcjtcclxuXHJcbiAgICAgICAgbWF0ZXJpYWwuZ2xvc3NpbmVzc01hcCA9XHJcbiAgICAgICAgICBtYXRlcmlhbFBhcmFtcy5nbG9zc2luZXNzTWFwID09PSB1bmRlZmluZWQgPyBudWxsIDogbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzc01hcDtcclxuICAgICAgICBtYXRlcmlhbC5nbG9zc2luZXNzID0gbWF0ZXJpYWxQYXJhbXMuZ2xvc3NpbmVzcztcclxuXHJcbiAgICAgICAgbWF0ZXJpYWwuYWxwaGFNYXAgPSBudWxsO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5lbnZNYXAgPSBtYXRlcmlhbFBhcmFtcy5lbnZNYXAgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBtYXRlcmlhbFBhcmFtcy5lbnZNYXA7XHJcbiAgICAgICAgbWF0ZXJpYWwuZW52TWFwSW50ZW5zaXR5ID0gMS4wO1xyXG5cclxuICAgICAgICBtYXRlcmlhbC5yZWZyYWN0aW9uUmF0aW8gPSAwLjk4O1xyXG5cclxuICAgICAgICByZXR1cm4gbWF0ZXJpYWw7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWVzaCBRdWFudGl6YXRpb24gRXh0ZW5zaW9uXHJcbiAgICpcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvZXh0ZW5zaW9ucy8yLjAvS2hyb25vcy9LSFJfbWVzaF9xdWFudGl6YXRpb25cclxuICAgKi9cclxuICBmdW5jdGlvbiBHTFRGTWVzaFF1YW50aXphdGlvbkV4dGVuc2lvbigpIHtcclxuICAgIHRoaXMubmFtZSA9IEVYVEVOU0lPTlMuS0hSX01FU0hfUVVBTlRJWkFUSU9OO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKiBJTlRFUlBPTEFUSU9OICoqKioqKioqL1xyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4gIC8vIFNwbGluZSBJbnRlcnBvbGF0aW9uXHJcbiAgLy8gU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNhcHBlbmRpeC1jLXNwbGluZS1pbnRlcnBvbGF0aW9uXHJcbiAgZnVuY3Rpb24gR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQocGFyYW1ldGVyUG9zaXRpb25zLCBzYW1wbGVWYWx1ZXMsIHNhbXBsZVNpemUsIHJlc3VsdEJ1ZmZlcikge1xyXG4gICAgSW50ZXJwb2xhbnQuY2FsbCh0aGlzLCBwYXJhbWV0ZXJQb3NpdGlvbnMsIHNhbXBsZVZhbHVlcywgc2FtcGxlU2l6ZSwgcmVzdWx0QnVmZmVyKTtcclxuICB9XHJcblxyXG4gIEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZXJwb2xhbnQucHJvdG90eXBlKTtcclxuICBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudDtcclxuXHJcbiAgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmNvcHlTYW1wbGVWYWx1ZV8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgIC8vIENvcGllcyBhIHNhbXBsZSB2YWx1ZSB0byB0aGUgcmVzdWx0IGJ1ZmZlci4gU2VlIGRlc2NyaXB0aW9uIG9mIGdsVEZcclxuICAgIC8vIENVQklDU1BMSU5FIHZhbHVlcyBsYXlvdXQgaW4gaW50ZXJwb2xhdGVfKCkgZnVuY3Rpb24gYmVsb3cuXHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IHRoaXMucmVzdWx0QnVmZmVyLFxyXG4gICAgICAgIHZhbHVlcyA9IHRoaXMuc2FtcGxlVmFsdWVzLFxyXG4gICAgICAgIHZhbHVlU2l6ZSA9IHRoaXMudmFsdWVTaXplLFxyXG4gICAgICAgIG9mZnNldCA9IGluZGV4ICogdmFsdWVTaXplICogMyArIHZhbHVlU2l6ZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSAhPT0gdmFsdWVTaXplOyBpKyspIHtcclxuICAgICAgcmVzdWx0W2ldID0gdmFsdWVzW29mZnNldCArIGldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmJlZm9yZVN0YXJ0XyA9XHJcbiAgICBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcclxuXHJcbiAgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmFmdGVyRW5kXyA9XHJcbiAgICBHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGFudC5wcm90b3R5cGUuY29weVNhbXBsZVZhbHVlXztcclxuXHJcbiAgR0xURkN1YmljU3BsaW5lSW50ZXJwb2xhbnQucHJvdG90eXBlLmludGVycG9sYXRlXyA9IGZ1bmN0aW9uIChpMSwgdDAsIHQsIHQxKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5yZXN1bHRCdWZmZXI7XHJcbiAgICB2YXIgdmFsdWVzID0gdGhpcy5zYW1wbGVWYWx1ZXM7XHJcbiAgICB2YXIgc3RyaWRlID0gdGhpcy52YWx1ZVNpemU7XHJcblxyXG4gICAgdmFyIHN0cmlkZTIgPSBzdHJpZGUgKiAyO1xyXG4gICAgdmFyIHN0cmlkZTMgPSBzdHJpZGUgKiAzO1xyXG5cclxuICAgIHZhciB0ZCA9IHQxIC0gdDA7XHJcblxyXG4gICAgdmFyIHAgPSAodCAtIHQwKSAvIHRkO1xyXG4gICAgdmFyIHBwID0gcCAqIHA7XHJcbiAgICB2YXIgcHBwID0gcHAgKiBwO1xyXG5cclxuICAgIHZhciBvZmZzZXQxID0gaTEgKiBzdHJpZGUzO1xyXG4gICAgdmFyIG9mZnNldDAgPSBvZmZzZXQxIC0gc3RyaWRlMztcclxuXHJcbiAgICB2YXIgczIgPSAtMiAqIHBwcCArIDMgKiBwcDtcclxuICAgIHZhciBzMyA9IHBwcCAtIHBwO1xyXG4gICAgdmFyIHMwID0gMSAtIHMyO1xyXG4gICAgdmFyIHMxID0gczMgLSBwcCArIHA7XHJcblxyXG4gICAgLy8gTGF5b3V0IG9mIGtleWZyYW1lIG91dHB1dCB2YWx1ZXMgZm9yIENVQklDU1BMSU5FIGFuaW1hdGlvbnM6XHJcbiAgICAvLyAgIFsgaW5UYW5nZW50XzEsIHNwbGluZVZlcnRleF8xLCBvdXRUYW5nZW50XzEsIGluVGFuZ2VudF8yLCBzcGxpbmVWZXJ0ZXhfMiwgLi4uIF1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpICE9PSBzdHJpZGU7IGkrKykge1xyXG4gICAgICB2YXIgcDAgPSB2YWx1ZXNbb2Zmc2V0MCArIGkgKyBzdHJpZGVdOyAvLyBzcGxpbmVWZXJ0ZXhfa1xyXG4gICAgICB2YXIgbTAgPSB2YWx1ZXNbb2Zmc2V0MCArIGkgKyBzdHJpZGUyXSAqIHRkOyAvLyBvdXRUYW5nZW50X2sgKiAodF9rKzEgLSB0X2spXHJcbiAgICAgIHZhciBwMSA9IHZhbHVlc1tvZmZzZXQxICsgaSArIHN0cmlkZV07IC8vIHNwbGluZVZlcnRleF9rKzFcclxuICAgICAgdmFyIG0xID0gdmFsdWVzW29mZnNldDEgKyBpXSAqIHRkOyAvLyBpblRhbmdlbnRfaysxICogKHRfaysxIC0gdF9rKVxyXG5cclxuICAgICAgcmVzdWx0W2ldID0gczAgKiBwMCArIHMxICogbTAgKyBzMiAqIHAxICsgczMgKiBtMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLyoqKioqKioqKiogSU5URVJOQUxTICoqKioqKioqKioqKi9cclxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAvKiBDT05TVEFOVFMgKi9cclxuXHJcbiAgdmFyIFdFQkdMX0NPTlNUQU5UUyA9IHtcclxuICAgIEZMT0FUOiA1MTI2LFxyXG4gICAgLy9GTE9BVF9NQVQyOiAzNTY3NCxcclxuICAgIEZMT0FUX01BVDM6IDM1Njc1LFxyXG4gICAgRkxPQVRfTUFUNDogMzU2NzYsXHJcbiAgICBGTE9BVF9WRUMyOiAzNTY2NCxcclxuICAgIEZMT0FUX1ZFQzM6IDM1NjY1LFxyXG4gICAgRkxPQVRfVkVDNDogMzU2NjYsXHJcbiAgICBMSU5FQVI6IDk3MjksXHJcbiAgICBSRVBFQVQ6IDEwNDk3LFxyXG4gICAgU0FNUExFUl8yRDogMzU2NzgsXHJcbiAgICBQT0lOVFM6IDAsXHJcbiAgICBMSU5FUzogMSxcclxuICAgIExJTkVfTE9PUDogMixcclxuICAgIExJTkVfU1RSSVA6IDMsXHJcbiAgICBUUklBTkdMRVM6IDQsXHJcbiAgICBUUklBTkdMRV9TVFJJUDogNSxcclxuICAgIFRSSUFOR0xFX0ZBTjogNixcclxuICAgIFVOU0lHTkVEX0JZVEU6IDUxMjEsXHJcbiAgICBVTlNJR05FRF9TSE9SVDogNTEyMyxcclxuICB9O1xyXG5cclxuICB2YXIgV0VCR0xfQ09NUE9ORU5UX1RZUEVTID0ge1xyXG4gICAgNTEyMDogSW50OEFycmF5LFxyXG4gICAgNTEyMTogVWludDhBcnJheSxcclxuICAgIDUxMjI6IEludDE2QXJyYXksXHJcbiAgICA1MTIzOiBVaW50MTZBcnJheSxcclxuICAgIDUxMjU6IFVpbnQzMkFycmF5LFxyXG4gICAgNTEyNjogRmxvYXQzMkFycmF5LFxyXG4gIH07XHJcblxyXG4gIHZhciBXRUJHTF9GSUxURVJTID0ge1xyXG4gICAgOTcyODogTmVhcmVzdEZpbHRlcixcclxuICAgIDk3Mjk6IExpbmVhckZpbHRlcixcclxuICAgIDk5ODQ6IE5lYXJlc3RNaXBtYXBOZWFyZXN0RmlsdGVyLFxyXG4gICAgOTk4NTogTGluZWFyTWlwbWFwTmVhcmVzdEZpbHRlcixcclxuICAgIDk5ODY6IE5lYXJlc3RNaXBtYXBMaW5lYXJGaWx0ZXIsXHJcbiAgICA5OTg3OiBMaW5lYXJNaXBtYXBMaW5lYXJGaWx0ZXIsXHJcbiAgfTtcclxuXHJcbiAgdmFyIFdFQkdMX1dSQVBQSU5HUyA9IHtcclxuICAgIDMzMDcxOiBDbGFtcFRvRWRnZVdyYXBwaW5nLFxyXG4gICAgMzM2NDg6IE1pcnJvcmVkUmVwZWF0V3JhcHBpbmcsXHJcbiAgICAxMDQ5NzogUmVwZWF0V3JhcHBpbmcsXHJcbiAgfTtcclxuXHJcbiAgdmFyIFdFQkdMX1RZUEVfU0laRVMgPSB7XHJcbiAgICBTQ0FMQVI6IDEsXHJcbiAgICBWRUMyOiAyLFxyXG4gICAgVkVDMzogMyxcclxuICAgIFZFQzQ6IDQsXHJcbiAgICBNQVQyOiA0LFxyXG4gICAgTUFUMzogOSxcclxuICAgIE1BVDQ6IDE2LFxyXG4gIH07XHJcblxyXG4gIHZhciBBVFRSSUJVVEVTID0ge1xyXG4gICAgUE9TSVRJT046ICdwb3NpdGlvbicsXHJcbiAgICBOT1JNQUw6ICdub3JtYWwnLFxyXG4gICAgVEFOR0VOVDogJ3RhbmdlbnQnLFxyXG4gICAgVEVYQ09PUkRfMDogJ3V2JyxcclxuICAgIFRFWENPT1JEXzE6ICd1djInLFxyXG4gICAgQ09MT1JfMDogJ2NvbG9yJyxcclxuICAgIFdFSUdIVFNfMDogJ3NraW5XZWlnaHQnLFxyXG4gICAgSk9JTlRTXzA6ICdza2luSW5kZXgnLFxyXG4gIH07XHJcblxyXG4gIHZhciBQQVRIX1BST1BFUlRJRVMgPSB7XHJcbiAgICBzY2FsZTogJ3NjYWxlJyxcclxuICAgIHRyYW5zbGF0aW9uOiAncG9zaXRpb24nLFxyXG4gICAgcm90YXRpb246ICdxdWF0ZXJuaW9uJyxcclxuICAgIHdlaWdodHM6ICdtb3JwaFRhcmdldEluZmx1ZW5jZXMnLFxyXG4gIH07XHJcblxyXG4gIHZhciBJTlRFUlBPTEFUSU9OID0ge1xyXG4gICAgQ1VCSUNTUExJTkU6IHVuZGVmaW5lZCwgLy8gV2UgdXNlIGEgY3VzdG9tIGludGVycG9sYW50IChHTFRGQ3ViaWNTcGxpbmVJbnRlcnBvbGF0aW9uKSBmb3IgQ1VCSUNTUExJTkUgdHJhY2tzLiBFYWNoXHJcbiAgICAvLyBrZXlmcmFtZSB0cmFjayB3aWxsIGJlIGluaXRpYWxpemVkIHdpdGggYSBkZWZhdWx0IGludGVycG9sYXRpb24gdHlwZSwgdGhlbiBtb2RpZmllZC5cclxuICAgIExJTkVBUjogSW50ZXJwb2xhdGVMaW5lYXIsXHJcbiAgICBTVEVQOiBJbnRlcnBvbGF0ZURpc2NyZXRlLFxyXG4gIH07XHJcblxyXG4gIHZhciBBTFBIQV9NT0RFUyA9IHtcclxuICAgIE9QQVFVRTogJ09QQVFVRScsXHJcbiAgICBNQVNLOiAnTUFTSycsXHJcbiAgICBCTEVORDogJ0JMRU5EJyxcclxuICB9O1xyXG5cclxuICB2YXIgTUlNRV9UWVBFX0ZPUk1BVFMgPSB7XHJcbiAgICAnaW1hZ2UvcG5nJzogUkdCQUZvcm1hdCxcclxuICAgICdpbWFnZS9qcGVnJzogUkdCRm9ybWF0LFxyXG4gIH07XHJcblxyXG4gIC8qIFVUSUxJVFkgRlVOQ1RJT05TICovXHJcblxyXG4gIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsLCBwYXRoKSB7XHJcbiAgICAvLyBJbnZhbGlkIFVSTFxyXG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnIHx8IHVybCA9PT0gJycpIHJldHVybiAnJztcclxuXHJcbiAgICAvLyBIb3N0IFJlbGF0aXZlIFVSTFxyXG4gICAgaWYgKC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QocGF0aCkgJiYgL15cXC8vLnRlc3QodXJsKSkge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcclxuICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvKF5odHRwcz86XFwvXFwvW15cXC9dKykuKi9pLCAnJDEnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBYnNvbHV0ZSBVUkwgaHR0cDovLyxodHRwczovLywvL1xyXG4gICAgaWYgKC9eKGh0dHBzPzopP1xcL1xcLy9pLnRlc3QodXJsKSkgcmV0dXJuIHVybDtcclxuXHJcbiAgICAvLyBEYXRhIFVSSVxyXG4gICAgaWYgKC9eZGF0YTouKiwuKiQvaS50ZXN0KHVybCkpIHJldHVybiB1cmw7XHJcblxyXG4gICAgLy8gQmxvYiBVUkxcclxuICAgIGlmICgvXmJsb2I6LiokL2kudGVzdCh1cmwpKSByZXR1cm4gdXJsO1xyXG5cclxuICAgIC8vIFJlbGF0aXZlIFVSTFxyXG4gICAgcmV0dXJuIHBhdGggKyB1cmw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2RlZmF1bHQtbWF0ZXJpYWxcclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0TWF0ZXJpYWwoY2FjaGUpIHtcclxuICAgIGlmIChjYWNoZVsnRGVmYXVsdE1hdGVyaWFsJ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjYWNoZVsnRGVmYXVsdE1hdGVyaWFsJ10gPSBuZXcgTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG4gICAgICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgICAgICBlbWlzc2l2ZTogMHgwMDAwMDAsXHJcbiAgICAgICAgbWV0YWxuZXNzOiAxLFxyXG4gICAgICAgIHJvdWdobmVzczogMSxcclxuICAgICAgICB0cmFuc3BhcmVudDogZmFsc2UsXHJcbiAgICAgICAgZGVwdGhUZXN0OiB0cnVlLFxyXG4gICAgICAgIHNpZGU6IEZyb250U2lkZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNhY2hlWydEZWZhdWx0TWF0ZXJpYWwnXTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YShrbm93bkV4dGVuc2lvbnMsIG9iamVjdCwgb2JqZWN0RGVmKSB7XHJcbiAgICAvLyBBZGQgdW5rbm93biBnbFRGIGV4dGVuc2lvbnMgdG8gYW4gb2JqZWN0J3MgdXNlckRhdGEuXHJcblxyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmplY3REZWYuZXh0ZW5zaW9ucykge1xyXG4gICAgICBpZiAoa25vd25FeHRlbnNpb25zW25hbWVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgPSBvYmplY3QudXNlckRhdGEuZ2x0ZkV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgICAgb2JqZWN0LnVzZXJEYXRhLmdsdGZFeHRlbnNpb25zW25hbWVdID0gb2JqZWN0RGVmLmV4dGVuc2lvbnNbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0M0R8TWF0ZXJpYWx8QnVmZmVyR2VvbWV0cnl9IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7R0xURi5kZWZpbml0aW9ufSBnbHRmRGVmXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYXNzaWduRXh0cmFzVG9Vc2VyRGF0YShvYmplY3QsIGdsdGZEZWYpIHtcclxuICAgIGlmIChnbHRmRGVmLmV4dHJhcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZ2x0ZkRlZi5leHRyYXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmplY3QudXNlckRhdGEsIGdsdGZEZWYuZXh0cmFzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1RIUkVFLkdMVEZMb2FkZXI6IElnbm9yaW5nIHByaW1pdGl2ZSB0eXBlIC5leHRyYXMsICcgKyBnbHRmRGVmLmV4dHJhcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbW9ycGgtdGFyZ2V0c1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuICAgKiBAcGFyYW0ge0FycmF5PEdMVEYuVGFyZ2V0Pn0gdGFyZ2V0c1xyXG4gICAqIEBwYXJhbSB7R0xURlBhcnNlcn0gcGFyc2VyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxCdWZmZXJHZW9tZXRyeT59XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYWRkTW9ycGhUYXJnZXRzKGdlb21ldHJ5LCB0YXJnZXRzLCBwYXJzZXIpIHtcclxuICAgIHZhciBoYXNNb3JwaFBvc2l0aW9uID0gZmFsc2U7XHJcbiAgICB2YXIgaGFzTW9ycGhOb3JtYWwgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgdmFyIHRhcmdldCA9IHRhcmdldHNbaV07XHJcblxyXG4gICAgICBpZiAodGFyZ2V0LlBPU0lUSU9OICE9PSB1bmRlZmluZWQpIGhhc01vcnBoUG9zaXRpb24gPSB0cnVlO1xyXG4gICAgICBpZiAodGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkKSBoYXNNb3JwaE5vcm1hbCA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoaGFzTW9ycGhQb3NpdGlvbiAmJiBoYXNNb3JwaE5vcm1hbCkgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoYXNNb3JwaFBvc2l0aW9uICYmICFoYXNNb3JwaE5vcm1hbCkgcmV0dXJuIFByb21pc2UucmVzb2x2ZShnZW9tZXRyeSk7XHJcblxyXG4gICAgdmFyIHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyA9IFtdO1xyXG4gICAgdmFyIHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgdmFyIHRhcmdldCA9IHRhcmdldHNbaV07XHJcblxyXG4gICAgICBpZiAoaGFzTW9ycGhQb3NpdGlvbikge1xyXG4gICAgICAgIHZhciBwZW5kaW5nQWNjZXNzb3IgPVxyXG4gICAgICAgICAgICAgIHRhcmdldC5QT1NJVElPTiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlci5nZXREZXBlbmRlbmN5KCdhY2Nlc3NvcicsIHRhcmdldC5QT1NJVElPTilcclxuICAgICAgICAgICAgICAgIDogZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgcGVuZGluZ1Bvc2l0aW9uQWNjZXNzb3JzLnB1c2gocGVuZGluZ0FjY2Vzc29yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGhhc01vcnBoTm9ybWFsKSB7XHJcbiAgICAgICAgdmFyIHBlbmRpbmdBY2Nlc3NvciA9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0Lk5PUk1BTCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICA/IHBhcnNlci5nZXREZXBlbmRlbmN5KCdhY2Nlc3NvcicsIHRhcmdldC5OT1JNQUwpXHJcbiAgICAgICAgICAgICAgICA6IGdlb21ldHJ5LmF0dHJpYnV0ZXMubm9ybWFsO1xyXG5cclxuICAgICAgICBwZW5kaW5nTm9ybWFsQWNjZXNzb3JzLnB1c2gocGVuZGluZ0FjY2Vzc29yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgIFByb21pc2UuYWxsKHBlbmRpbmdQb3NpdGlvbkFjY2Vzc29ycyksXHJcbiAgICAgIFByb21pc2UuYWxsKHBlbmRpbmdOb3JtYWxBY2Nlc3NvcnMpLFxyXG4gICAgXSkudGhlbihmdW5jdGlvbiAoYWNjZXNzb3JzKSB7XHJcbiAgICAgIHZhciBtb3JwaFBvc2l0aW9ucyA9IGFjY2Vzc29yc1swXTtcclxuICAgICAgdmFyIG1vcnBoTm9ybWFscyA9IGFjY2Vzc29yc1sxXTtcclxuXHJcbiAgICAgIGlmIChoYXNNb3JwaFBvc2l0aW9uKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMucG9zaXRpb24gPSBtb3JwaFBvc2l0aW9ucztcclxuICAgICAgaWYgKGhhc01vcnBoTm9ybWFsKSBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMubm9ybWFsID0gbW9ycGhOb3JtYWxzO1xyXG4gICAgICBnZW9tZXRyeS5tb3JwaFRhcmdldHNSZWxhdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICByZXR1cm4gZ2VvbWV0cnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7TWVzaH0gbWVzaFxyXG4gICAqIEBwYXJhbSB7R0xURi5NZXNofSBtZXNoRGVmXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdXBkYXRlTW9ycGhUYXJnZXRzKG1lc2gsIG1lc2hEZWYpIHtcclxuICAgIG1lc2gudXBkYXRlTW9ycGhUYXJnZXRzKCk7XHJcblxyXG4gICAgaWYgKG1lc2hEZWYud2VpZ2h0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IG1lc2hEZWYud2VpZ2h0cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgbWVzaC5tb3JwaFRhcmdldEluZmx1ZW5jZXNbaV0gPSBtZXNoRGVmLndlaWdodHNbaV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAuZXh0cmFzIGhhcyB1c2VyLWRlZmluZWQgZGF0YSwgc28gY2hlY2sgdGhhdCAuZXh0cmFzLnRhcmdldE5hbWVzIGlzIGFuIGFycmF5LlxyXG4gICAgaWYgKG1lc2hEZWYuZXh0cmFzICYmIEFycmF5LmlzQXJyYXkobWVzaERlZi5leHRyYXMudGFyZ2V0TmFtZXMpKSB7XHJcbiAgICAgIHZhciB0YXJnZXROYW1lcyA9IG1lc2hEZWYuZXh0cmFzLnRhcmdldE5hbWVzO1xyXG5cclxuICAgICAgaWYgKG1lc2gubW9ycGhUYXJnZXRJbmZsdWVuY2VzLmxlbmd0aCA9PT0gdGFyZ2V0TmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgbWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnkgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICAgICAgbWVzaC5tb3JwaFRhcmdldERpY3Rpb25hcnlbdGFyZ2V0TmFtZXNbaV1dID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUSFJFRS5HTFRGTG9hZGVyOiBJbnZhbGlkIGV4dHJhcy50YXJnZXROYW1lcyBsZW5ndGguIElnbm9yaW5nIG5hbWVzLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVLZXkocHJpbWl0aXZlRGVmKSB7XHJcbiAgICB2YXIgZHJhY29FeHRlbnNpb24gPVxyXG4gICAgICAgICAgcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnMgJiYgcHJpbWl0aXZlRGVmLmV4dGVuc2lvbnNbRVhURU5TSU9OUy5LSFJfRFJBQ09fTUVTSF9DT01QUkVTU0lPTl07XHJcbiAgICB2YXIgZ2VvbWV0cnlLZXk7XHJcblxyXG4gICAgaWYgKGRyYWNvRXh0ZW5zaW9uKSB7XHJcbiAgICAgIGdlb21ldHJ5S2V5ID1cclxuICAgICAgICAnZHJhY286JyArXHJcbiAgICAgICAgZHJhY29FeHRlbnNpb24uYnVmZmVyVmlldyArXHJcbiAgICAgICAgJzonICtcclxuICAgICAgICBkcmFjb0V4dGVuc2lvbi5pbmRpY2VzICtcclxuICAgICAgICAnOicgK1xyXG4gICAgICAgIGNyZWF0ZUF0dHJpYnV0ZXNLZXkoZHJhY29FeHRlbnNpb24uYXR0cmlidXRlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZW9tZXRyeUtleSA9XHJcbiAgICAgICAgcHJpbWl0aXZlRGVmLmluZGljZXMgK1xyXG4gICAgICAgICc6JyArXHJcbiAgICAgICAgY3JlYXRlQXR0cmlidXRlc0tleShwcmltaXRpdmVEZWYuYXR0cmlidXRlcykgK1xyXG4gICAgICAgICc6JyArXHJcbiAgICAgICAgcHJpbWl0aXZlRGVmLm1vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdlb21ldHJ5S2V5O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlQXR0cmlidXRlc0tleShhdHRyaWJ1dGVzKSB7XHJcbiAgICB2YXIgYXR0cmlidXRlc0tleSA9ICcnO1xyXG5cclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYXR0cmlidXRlcykuc29ydCgpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGtleXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICBhdHRyaWJ1dGVzS2V5ICs9IGtleXNbaV0gKyAnOicgKyBhdHRyaWJ1dGVzW2tleXNbaV1dICsgJzsnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhdHRyaWJ1dGVzS2V5O1xyXG4gIH1cclxuXHJcbiAgLyogR0xURiBQQVJTRVIgKi9cclxuXHJcbiAgZnVuY3Rpb24gR0xURlBhcnNlcihqc29uLCBleHRlbnNpb25zLCBvcHRpb25zKSB7XHJcbiAgICB0aGlzLmpzb24gPSBqc29uIHx8IHt9O1xyXG4gICAgdGhpcy5leHRlbnNpb25zID0gZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gICAgLy8gbG9hZGVyIG9iamVjdCBjYWNoZVxyXG4gICAgdGhpcy5jYWNoZSA9IG5ldyBHTFRGUmVnaXN0cnkoKTtcclxuXHJcbiAgICAvLyBCdWZmZXJHZW9tZXRyeSBjYWNoaW5nXHJcbiAgICB0aGlzLnByaW1pdGl2ZUNhY2hlID0ge307XHJcblxyXG4gICAgdGhpcy50ZXh0dXJlTG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIodGhpcy5vcHRpb25zLm1hbmFnZXIpO1xyXG4gICAgdGhpcy50ZXh0dXJlTG9hZGVyLnNldENyb3NzT3JpZ2luKHRoaXMub3B0aW9ucy5jcm9zc09yaWdpbik7XHJcblxyXG4gICAgdGhpcy5maWxlTG9hZGVyID0gbmV3IEZpbGVMb2FkZXIodGhpcy5vcHRpb25zLm1hbmFnZXIpO1xyXG4gICAgdGhpcy5maWxlTG9hZGVyLnNldFJlc3BvbnNlVHlwZSgnYXJyYXlidWZmZXInKTtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLmNyb3NzT3JpZ2luID09PSAndXNlLWNyZWRlbnRpYWxzJykge1xyXG4gICAgICB0aGlzLmZpbGVMb2FkZXIuc2V0V2l0aENyZWRlbnRpYWxzKHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgR0xURlBhcnNlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAob25Mb2FkLCBvbkVycm9yKSB7XHJcbiAgICB2YXIgcGFyc2VyID0gdGhpcztcclxuICAgIHZhciBqc29uID0gdGhpcy5qc29uO1xyXG4gICAgdmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIGxvYWRlciBjYWNoZVxyXG4gICAgdGhpcy5jYWNoZS5yZW1vdmVBbGwoKTtcclxuXHJcbiAgICAvLyBNYXJrIHRoZSBzcGVjaWFsIG5vZGVzL21lc2hlcyBpbiBqc29uIGZvciBlZmZpY2llbnQgcGFyc2VcclxuICAgIHRoaXMubWFya0RlZnMoKTtcclxuXHJcbiAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgIHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCdzY2VuZScpLFxyXG4gICAgICB0aGlzLmdldERlcGVuZGVuY2llcygnYW5pbWF0aW9uJyksXHJcbiAgICAgIHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCdjYW1lcmEnKSxcclxuICAgIF0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkZXBlbmRlbmNpZXMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgc2NlbmU6IGRlcGVuZGVuY2llc1swXVtqc29uLnNjZW5lIHx8IDBdLFxyXG4gICAgICAgICAgc2NlbmVzOiBkZXBlbmRlbmNpZXNbMF0sXHJcbiAgICAgICAgICBhbmltYXRpb25zOiBkZXBlbmRlbmNpZXNbMV0sXHJcbiAgICAgICAgICBjYW1lcmFzOiBkZXBlbmRlbmNpZXNbMl0sXHJcbiAgICAgICAgICBhc3NldDoganNvbi5hc3NldCxcclxuICAgICAgICAgIHBhcnNlcjogcGFyc2VyLFxyXG4gICAgICAgICAgdXNlckRhdGE6IHt9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YShleHRlbnNpb25zLCByZXN1bHQsIGpzb24pO1xyXG5cclxuICAgICAgICBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKHJlc3VsdCwganNvbik7XHJcblxyXG4gICAgICAgIG9uTG9hZChyZXN1bHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2gob25FcnJvcik7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogTWFya3MgdGhlIHNwZWNpYWwgbm9kZXMvbWVzaGVzIGluIGpzb24gZm9yIGVmZmljaWVudCBwYXJzZS5cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5tYXJrRGVmcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBub2RlRGVmcyA9IHRoaXMuanNvbi5ub2RlcyB8fCBbXTtcclxuICAgIHZhciBza2luRGVmcyA9IHRoaXMuanNvbi5za2lucyB8fCBbXTtcclxuICAgIHZhciBtZXNoRGVmcyA9IHRoaXMuanNvbi5tZXNoZXMgfHwgW107XHJcblxyXG4gICAgdmFyIG1lc2hSZWZlcmVuY2VzID0ge307XHJcbiAgICB2YXIgbWVzaFVzZXMgPSB7fTtcclxuXHJcbiAgICAvLyBOb3RoaW5nIGluIHRoZSBub2RlIGRlZmluaXRpb24gaW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgYSBCb25lIG9yIGFuXHJcbiAgICAvLyBPYmplY3QzRC4gVXNlIHRoZSBza2lucycgam9pbnQgcmVmZXJlbmNlcyB0byBtYXJrIGJvbmVzLlxyXG4gICAgZm9yICh2YXIgc2tpbkluZGV4ID0gMCwgc2tpbkxlbmd0aCA9IHNraW5EZWZzLmxlbmd0aDsgc2tpbkluZGV4IDwgc2tpbkxlbmd0aDsgc2tpbkluZGV4KyspIHtcclxuICAgICAgdmFyIGpvaW50cyA9IHNraW5EZWZzW3NraW5JbmRleF0uam9pbnRzO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gam9pbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgICBub2RlRGVmc1tqb2ludHNbaV1dLmlzQm9uZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNZXNoZXMgY2FuIChhbmQgc2hvdWxkKSBiZSByZXVzZWQgYnkgbXVsdGlwbGUgbm9kZXMgaW4gYSBnbFRGIGFzc2V0LiBUb1xyXG4gICAgLy8gYXZvaWQgaGF2aW5nIG1vcmUgdGhhbiBvbmUgTWVzaCB3aXRoIHRoZSBzYW1lIG5hbWUsIGNvdW50XHJcbiAgICAvLyByZWZlcmVuY2VzIGFuZCByZW5hbWUgaW5zdGFuY2VzIGJlbG93LlxyXG4gICAgLy9cclxuICAgIC8vIEV4YW1wbGU6IENlc2l1bU1pbGtUcnVjayBzYW1wbGUgbW9kZWwgcmV1c2VzIFwiV2hlZWxcIiBtZXNoZXMuXHJcbiAgICBmb3IgKHZhciBub2RlSW5kZXggPSAwLCBub2RlTGVuZ3RoID0gbm9kZURlZnMubGVuZ3RoOyBub2RlSW5kZXggPCBub2RlTGVuZ3RoOyBub2RlSW5kZXgrKykge1xyXG4gICAgICB2YXIgbm9kZURlZiA9IG5vZGVEZWZzW25vZGVJbmRleF07XHJcblxyXG4gICAgICBpZiAobm9kZURlZi5tZXNoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAobWVzaFJlZmVyZW5jZXNbbm9kZURlZi5tZXNoXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBtZXNoUmVmZXJlbmNlc1tub2RlRGVmLm1lc2hdID0gbWVzaFVzZXNbbm9kZURlZi5tZXNoXSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNoUmVmZXJlbmNlc1tub2RlRGVmLm1lc2hdKys7XHJcblxyXG4gICAgICAgIC8vIE5vdGhpbmcgaW4gdGhlIG1lc2ggZGVmaW5pdGlvbiBpbmRpY2F0ZXMgd2hldGhlciBpdCBpc1xyXG4gICAgICAgIC8vIGEgU2tpbm5lZE1lc2ggb3IgTWVzaC4gVXNlIHRoZSBub2RlJ3MgbWVzaCByZWZlcmVuY2VcclxuICAgICAgICAvLyB0byBtYXJrIFNraW5uZWRNZXNoIGlmIG5vZGUgaGFzIHNraW4uXHJcbiAgICAgICAgaWYgKG5vZGVEZWYuc2tpbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBtZXNoRGVmc1tub2RlRGVmLm1lc2hdLmlzU2tpbm5lZE1lc2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuanNvbi5tZXNoUmVmZXJlbmNlcyA9IG1lc2hSZWZlcmVuY2VzO1xyXG4gICAgdGhpcy5qc29uLm1lc2hVc2VzID0gbWVzaFVzZXM7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdHMgdGhlIHNwZWNpZmllZCBkZXBlbmRlbmN5IGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEfE1hdGVyaWFsfFRIUkVFLlRleHR1cmV8QW5pbWF0aW9uQ2xpcHxBcnJheUJ1ZmZlcnxPYmplY3Q+fVxyXG4gICAqL1xyXG4gIEdMVEZQYXJzZXIucHJvdG90eXBlLmdldERlcGVuZGVuY3kgPSBmdW5jdGlvbiAodHlwZSwgaW5kZXgpIHtcclxuICAgIHZhciBjYWNoZUtleSA9IHR5cGUgKyAnOicgKyBpbmRleDtcclxuICAgIHZhciBkZXBlbmRlbmN5ID0gdGhpcy5jYWNoZS5nZXQoY2FjaGVLZXkpO1xyXG5cclxuICAgIGlmICghZGVwZW5kZW5jeSkge1xyXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdzY2VuZSc6XHJcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2NlbmUoaW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ25vZGUnOlxyXG4gICAgICAgICAgZGVwZW5kZW5jeSA9IHRoaXMubG9hZE5vZGUoaW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21lc2gnOlxyXG4gICAgICAgICAgZGVwZW5kZW5jeSA9IHRoaXMubG9hZE1lc2goaW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2FjY2Vzc29yJzpcclxuICAgICAgICAgIGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBY2Nlc3NvcihpbmRleCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYnVmZmVyVmlldyc6XHJcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQnVmZmVyVmlldyhpbmRleCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYnVmZmVyJzpcclxuICAgICAgICAgIGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRCdWZmZXIoaW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ21hdGVyaWFsJzpcclxuICAgICAgICAgIGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRNYXRlcmlhbChpbmRleCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAndGV4dHVyZSc6XHJcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gdGhpcy5sb2FkVGV4dHVyZShpbmRleCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnc2tpbic6XHJcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gdGhpcy5sb2FkU2tpbihpbmRleCk7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnYW5pbWF0aW9uJzpcclxuICAgICAgICAgIGRlcGVuZGVuY3kgPSB0aGlzLmxvYWRBbmltYXRpb24oaW5kZXgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2NhbWVyYSc6XHJcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gdGhpcy5sb2FkQ2FtZXJhKGluZGV4KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdsaWdodCc6XHJcbiAgICAgICAgICBkZXBlbmRlbmN5ID0gdGhpcy5leHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX0xJR0hUU19QVU5DVFVBTF0ubG9hZExpZ2h0KGluZGV4KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHR5cGU6ICcgKyB0eXBlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jYWNoZS5hZGQoY2FjaGVLZXksIGRlcGVuZGVuY3kpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZXBlbmRlbmN5O1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3RzIGFsbCBkZXBlbmRlbmNpZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlIGFzeW5jaHJvbm91c2x5LCB3aXRoIGNhY2hpbmcuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5PE9iamVjdD4+fVxyXG4gICAqL1xyXG4gIEdMVEZQYXJzZXIucHJvdG90eXBlLmdldERlcGVuZGVuY2llcyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICB2YXIgZGVwZW5kZW5jaWVzID0gdGhpcy5jYWNoZS5nZXQodHlwZSk7XHJcblxyXG4gICAgaWYgKCFkZXBlbmRlbmNpZXMpIHtcclxuICAgICAgdmFyIHBhcnNlciA9IHRoaXM7XHJcbiAgICAgIHZhciBkZWZzID0gdGhpcy5qc29uW3R5cGUgKyAodHlwZSA9PT0gJ21lc2gnID8gJ2VzJyA6ICdzJyldIHx8IFtdO1xyXG5cclxuICAgICAgZGVwZW5kZW5jaWVzID0gUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgZGVmcy5tYXAoZnVuY3Rpb24gKGRlZiwgaW5kZXgpIHtcclxuICAgICAgICAgIHJldHVybiBwYXJzZXIuZ2V0RGVwZW5kZW5jeSh0eXBlLCBpbmRleCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHRoaXMuY2FjaGUuYWRkKHR5cGUsIGRlcGVuZGVuY2llcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llcztcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJJbmRleFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QXJyYXlCdWZmZXI+fVxyXG4gICAqL1xyXG4gIEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVySW5kZXgpIHtcclxuICAgIHZhciBidWZmZXJEZWYgPSB0aGlzLmpzb24uYnVmZmVyc1tidWZmZXJJbmRleF07XHJcbiAgICB2YXIgbG9hZGVyID0gdGhpcy5maWxlTG9hZGVyO1xyXG5cclxuICAgIGlmIChidWZmZXJEZWYudHlwZSAmJiBidWZmZXJEZWYudHlwZSAhPT0gJ2FycmF5YnVmZmVyJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RIUkVFLkdMVEZMb2FkZXI6ICcgKyBidWZmZXJEZWYudHlwZSArICcgYnVmZmVyIHR5cGUgaXMgbm90IHN1cHBvcnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiBwcmVzZW50LCBHTEIgY29udGFpbmVyIGlzIHJlcXVpcmVkIHRvIGJlIHRoZSBmaXJzdCBidWZmZXIuXHJcbiAgICBpZiAoYnVmZmVyRGVmLnVyaSA9PT0gdW5kZWZpbmVkICYmIGJ1ZmZlckluZGV4ID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5leHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX0JJTkFSWV9HTFRGXS5ib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBsb2FkZXIubG9hZChyZXNvbHZlVVJMKGJ1ZmZlckRlZi51cmksIG9wdGlvbnMucGF0aCksIHJlc29sdmUsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RIUkVFLkdMVEZMb2FkZXI6IEZhaWxlZCB0byBsb2FkIGJ1ZmZlciBcIicgKyBidWZmZXJEZWYudXJpICsgJ1wiLicpKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvYmxvYi9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAvUkVBRE1FLm1kI2J1ZmZlcnMtYW5kLWJ1ZmZlci12aWV3c1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBidWZmZXJWaWV3SW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEFycmF5QnVmZmVyPn1cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQnVmZmVyVmlldyA9IGZ1bmN0aW9uIChidWZmZXJWaWV3SW5kZXgpIHtcclxuICAgIHZhciBidWZmZXJWaWV3RGVmID0gdGhpcy5qc29uLmJ1ZmZlclZpZXdzW2J1ZmZlclZpZXdJbmRleF07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSgnYnVmZmVyJywgYnVmZmVyVmlld0RlZi5idWZmZXIpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xyXG4gICAgICB2YXIgYnl0ZUxlbmd0aCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZUxlbmd0aCB8fCAwO1xyXG4gICAgICB2YXIgYnl0ZU9mZnNldCA9IGJ1ZmZlclZpZXdEZWYuYnl0ZU9mZnNldCB8fCAwO1xyXG4gICAgICByZXR1cm4gYnVmZmVyLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBieXRlTGVuZ3RoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjYWNjZXNzb3JzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFjY2Vzc29ySW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEJ1ZmZlckF0dHJpYnV0ZXxJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZT59XHJcbiAgICovXHJcbiAgR0xURlBhcnNlci5wcm90b3R5cGUubG9hZEFjY2Vzc29yID0gZnVuY3Rpb24gKGFjY2Vzc29ySW5kZXgpIHtcclxuICAgIHZhciBwYXJzZXIgPSB0aGlzO1xyXG4gICAgdmFyIGpzb24gPSB0aGlzLmpzb247XHJcblxyXG4gICAgdmFyIGFjY2Vzc29yRGVmID0gdGhpcy5qc29uLmFjY2Vzc29yc1thY2Nlc3NvckluZGV4XTtcclxuXHJcbiAgICBpZiAoYWNjZXNzb3JEZWYuYnVmZmVyVmlldyA9PT0gdW5kZWZpbmVkICYmIGFjY2Vzc29yRGVmLnNwYXJzZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIElnbm9yZSBlbXB0eSBhY2Nlc3NvcnMsIHdoaWNoIG1heSBiZSB1c2VkIHRvIGRlY2xhcmUgcnVudGltZVxyXG4gICAgICAvLyBpbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIGNvbWluZyBmcm9tIGFub3RoZXIgc291cmNlIChlLmcuIERyYWNvXHJcbiAgICAgIC8vIGNvbXByZXNzaW9uIGV4dGVuc2lvbikuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBlbmRpbmdCdWZmZXJWaWV3cyA9IFtdO1xyXG5cclxuICAgIGlmIChhY2Nlc3NvckRlZi5idWZmZXJWaWV3ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcGVuZGluZ0J1ZmZlclZpZXdzLnB1c2godGhpcy5nZXREZXBlbmRlbmN5KCdidWZmZXJWaWV3JywgYWNjZXNzb3JEZWYuYnVmZmVyVmlldykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGVuZGluZ0J1ZmZlclZpZXdzLnB1c2gobnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjY2Vzc29yRGVmLnNwYXJzZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKFxyXG4gICAgICAgIHRoaXMuZ2V0RGVwZW5kZW5jeSgnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ1ZmZlclZpZXcpXHJcbiAgICAgICk7XHJcbiAgICAgIHBlbmRpbmdCdWZmZXJWaWV3cy5wdXNoKFxyXG4gICAgICAgIHRoaXMuZ2V0RGVwZW5kZW5jeSgnYnVmZmVyVmlldycsIGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnVmZmVyVmlldylcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocGVuZGluZ0J1ZmZlclZpZXdzKS50aGVuKGZ1bmN0aW9uIChidWZmZXJWaWV3cykge1xyXG4gICAgICB2YXIgYnVmZmVyVmlldyA9IGJ1ZmZlclZpZXdzWzBdO1xyXG5cclxuICAgICAgdmFyIGl0ZW1TaXplID0gV0VCR0xfVFlQRV9TSVpFU1thY2Nlc3NvckRlZi50eXBlXTtcclxuICAgICAgdmFyIFR5cGVkQXJyYXkgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZV07XHJcblxyXG4gICAgICAvLyBGb3IgVkVDMzogaXRlbVNpemUgaXMgMywgZWxlbWVudEJ5dGVzIGlzIDQsIGl0ZW1CeXRlcyBpcyAxMi5cclxuICAgICAgdmFyIGVsZW1lbnRCeXRlcyA9IFR5cGVkQXJyYXkuQllURVNfUEVSX0VMRU1FTlQ7XHJcbiAgICAgIHZhciBpdGVtQnl0ZXMgPSBlbGVtZW50Qnl0ZXMgKiBpdGVtU2l6ZTtcclxuICAgICAgdmFyIGJ5dGVPZmZzZXQgPSBhY2Nlc3NvckRlZi5ieXRlT2Zmc2V0IHx8IDA7XHJcbiAgICAgIHZhciBieXRlU3RyaWRlID1cclxuICAgICAgICAgICAgYWNjZXNzb3JEZWYuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgPyBqc29uLmJ1ZmZlclZpZXdzW2FjY2Vzc29yRGVmLmJ1ZmZlclZpZXddLmJ5dGVTdHJpZGVcclxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgICAgdmFyIG5vcm1hbGl6ZWQgPSBhY2Nlc3NvckRlZi5ub3JtYWxpemVkID09PSB0cnVlO1xyXG4gICAgICB2YXIgYXJyYXksIGJ1ZmZlckF0dHJpYnV0ZTtcclxuXHJcbiAgICAgIC8vIFRoZSBidWZmZXIgaXMgbm90IGludGVybGVhdmVkIGlmIHRoZSBzdHJpZGUgaXMgdGhlIGl0ZW0gc2l6ZSBpbiBieXRlcy5cclxuICAgICAgaWYgKGJ5dGVTdHJpZGUgJiYgYnl0ZVN0cmlkZSAhPT0gaXRlbUJ5dGVzKSB7XHJcbiAgICAgICAgLy8gRWFjaCBcInNsaWNlXCIgb2YgdGhlIGJ1ZmZlciwgYXMgZGVmaW5lZCBieSAnY291bnQnIGVsZW1lbnRzIG9mICdieXRlU3RyaWRlJyBieXRlcywgZ2V0cyBpdHMgb3duIEludGVybGVhdmVkQnVmZmVyXHJcbiAgICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIHRoYXQgSUJBLmNvdW50IHJlZmxlY3RzIGFjY2Vzc29yLmNvdW50IHByb3Blcmx5XHJcbiAgICAgICAgdmFyIGliU2xpY2UgPSBNYXRoLmZsb29yKGJ5dGVPZmZzZXQgLyBieXRlU3RyaWRlKTtcclxuICAgICAgICB2YXIgaWJDYWNoZUtleSA9XHJcbiAgICAgICAgICAgICAgJ0ludGVybGVhdmVkQnVmZmVyOicgK1xyXG4gICAgICAgICAgICAgIGFjY2Vzc29yRGVmLmJ1ZmZlclZpZXcgK1xyXG4gICAgICAgICAgICAgICc6JyArXHJcbiAgICAgICAgICAgICAgYWNjZXNzb3JEZWYuY29tcG9uZW50VHlwZSArXHJcbiAgICAgICAgICAgICAgJzonICtcclxuICAgICAgICAgICAgICBpYlNsaWNlICtcclxuICAgICAgICAgICAgICAnOicgK1xyXG4gICAgICAgICAgICAgIGFjY2Vzc29yRGVmLmNvdW50O1xyXG4gICAgICAgIHZhciBpYiA9IHBhcnNlci5jYWNoZS5nZXQoaWJDYWNoZUtleSk7XHJcblxyXG4gICAgICAgIGlmICghaWIpIHtcclxuICAgICAgICAgIGFycmF5ID0gbmV3IFR5cGVkQXJyYXkoXHJcbiAgICAgICAgICAgIGJ1ZmZlclZpZXcsXHJcbiAgICAgICAgICAgIGliU2xpY2UgKiBieXRlU3RyaWRlLFxyXG4gICAgICAgICAgICAoYWNjZXNzb3JEZWYuY291bnQgKiBieXRlU3RyaWRlKSAvIGVsZW1lbnRCeXRlc1xyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyBJbnRlZ2VyIHBhcmFtZXRlcnMgdG8gSUIvSUJBIGFyZSBpbiBhcnJheSBlbGVtZW50cywgbm90IGJ5dGVzLlxyXG4gICAgICAgICAgaWIgPSBuZXcgSW50ZXJsZWF2ZWRCdWZmZXIoYXJyYXksIGJ5dGVTdHJpZGUgLyBlbGVtZW50Qnl0ZXMpO1xyXG5cclxuICAgICAgICAgIHBhcnNlci5jYWNoZS5hZGQoaWJDYWNoZUtleSwgaWIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnVmZmVyQXR0cmlidXRlID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKFxyXG4gICAgICAgICAgaWIsXHJcbiAgICAgICAgICBpdGVtU2l6ZSxcclxuICAgICAgICAgIChieXRlT2Zmc2V0ICUgYnl0ZVN0cmlkZSkgLyBlbGVtZW50Qnl0ZXMsXHJcbiAgICAgICAgICBub3JtYWxpemVkXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoYnVmZmVyVmlldyA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgYXJyYXkgPSBuZXcgVHlwZWRBcnJheShhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXJyYXkgPSBuZXcgVHlwZWRBcnJheShidWZmZXJWaWV3LCBieXRlT2Zmc2V0LCBhY2Nlc3NvckRlZi5jb3VudCAqIGl0ZW1TaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoYXJyYXksIGl0ZW1TaXplLCBub3JtYWxpemVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNzcGFyc2UtYWNjZXNzb3JzXHJcbiAgICAgIGlmIChhY2Nlc3NvckRlZi5zcGFyc2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHZhciBpdGVtU2l6ZUluZGljZXMgPSBXRUJHTF9UWVBFX1NJWkVTLlNDQUxBUjtcclxuICAgICAgICB2YXIgVHlwZWRBcnJheUluZGljZXMgPSBXRUJHTF9DT01QT05FTlRfVFlQRVNbYWNjZXNzb3JEZWYuc3BhcnNlLmluZGljZXMuY29tcG9uZW50VHlwZV07XHJcblxyXG4gICAgICAgIHZhciBieXRlT2Zmc2V0SW5kaWNlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS5pbmRpY2VzLmJ5dGVPZmZzZXQgfHwgMDtcclxuICAgICAgICB2YXIgYnl0ZU9mZnNldFZhbHVlcyA9IGFjY2Vzc29yRGVmLnNwYXJzZS52YWx1ZXMuYnl0ZU9mZnNldCB8fCAwO1xyXG5cclxuICAgICAgICB2YXIgc3BhcnNlSW5kaWNlcyA9IG5ldyBUeXBlZEFycmF5SW5kaWNlcyhcclxuICAgICAgICAgIGJ1ZmZlclZpZXdzWzFdLFxyXG4gICAgICAgICAgYnl0ZU9mZnNldEluZGljZXMsXHJcbiAgICAgICAgICBhY2Nlc3NvckRlZi5zcGFyc2UuY291bnQgKiBpdGVtU2l6ZUluZGljZXNcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBzcGFyc2VWYWx1ZXMgPSBuZXcgVHlwZWRBcnJheShcclxuICAgICAgICAgIGJ1ZmZlclZpZXdzWzJdLFxyXG4gICAgICAgICAgYnl0ZU9mZnNldFZhbHVlcyxcclxuICAgICAgICAgIGFjY2Vzc29yRGVmLnNwYXJzZS5jb3VudCAqIGl0ZW1TaXplXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlclZpZXcgIT09IG51bGwpIHtcclxuICAgICAgICAgIC8vIEF2b2lkIG1vZGlmeWluZyB0aGUgb3JpZ2luYWwgQXJyYXlCdWZmZXIsIGlmIHRoZSBidWZmZXJWaWV3IHdhc24ndCBpbml0aWFsaXplZCB3aXRoIHplcm9lcy5cclxuICAgICAgICAgIGJ1ZmZlckF0dHJpYnV0ZSA9IG5ldyBCdWZmZXJBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgIGJ1ZmZlckF0dHJpYnV0ZS5hcnJheS5zbGljZSgpLFxyXG4gICAgICAgICAgICBidWZmZXJBdHRyaWJ1dGUuaXRlbVNpemUsXHJcbiAgICAgICAgICAgIGJ1ZmZlckF0dHJpYnV0ZS5ub3JtYWxpemVkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc3BhcnNlSW5kaWNlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSBzcGFyc2VJbmRpY2VzW2ldO1xyXG5cclxuICAgICAgICAgIGJ1ZmZlckF0dHJpYnV0ZS5zZXRYKGluZGV4LCBzcGFyc2VWYWx1ZXNbaSAqIGl0ZW1TaXplXSk7XHJcbiAgICAgICAgICBpZiAoaXRlbVNpemUgPj0gMikgYnVmZmVyQXR0cmlidXRlLnNldFkoaW5kZXgsIHNwYXJzZVZhbHVlc1tpICogaXRlbVNpemUgKyAxXSk7XHJcbiAgICAgICAgICBpZiAoaXRlbVNpemUgPj0gMykgYnVmZmVyQXR0cmlidXRlLnNldFooaW5kZXgsIHNwYXJzZVZhbHVlc1tpICogaXRlbVNpemUgKyAyXSk7XHJcbiAgICAgICAgICBpZiAoaXRlbVNpemUgPj0gNCkgYnVmZmVyQXR0cmlidXRlLnNldFcoaW5kZXgsIHNwYXJzZVZhbHVlc1tpICogaXRlbVNpemUgKyAzXSk7XHJcbiAgICAgICAgICBpZiAoaXRlbVNpemUgPj0gNSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUSFJFRS5HTFRGTG9hZGVyOiBVbnN1cHBvcnRlZCBpdGVtU2l6ZSBpbiBzcGFyc2UgQnVmZmVyQXR0cmlidXRlLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGJ1ZmZlckF0dHJpYnV0ZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCN0ZXh0dXJlc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0ZXh0dXJlSW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFRIUkVFLlRleHR1cmU+fVxyXG4gICAqL1xyXG4gIEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRUZXh0dXJlID0gZnVuY3Rpb24gKHRleHR1cmVJbmRleCkge1xyXG4gICAgdmFyIHBhcnNlciA9IHRoaXM7XHJcbiAgICB2YXIganNvbiA9IHRoaXMuanNvbjtcclxuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdmFyIHRleHR1cmVMb2FkZXIgPSB0aGlzLnRleHR1cmVMb2FkZXI7XHJcblxyXG4gICAgdmFyIFVSTCA9IHNlbGYuVVJMIHx8IHNlbGYud2Via2l0VVJMO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlRGVmID0ganNvbi50ZXh0dXJlc1t0ZXh0dXJlSW5kZXhdO1xyXG5cclxuICAgIHZhciB0ZXh0dXJlRXh0ZW5zaW9ucyA9IHRleHR1cmVEZWYuZXh0ZW5zaW9ucyB8fCB7fTtcclxuXHJcbiAgICB2YXIgc291cmNlO1xyXG5cclxuICAgIGlmICh0ZXh0dXJlRXh0ZW5zaW9uc1tFWFRFTlNJT05TLk1TRlRfVEVYVFVSRV9ERFNdKSB7XHJcbiAgICAgIHNvdXJjZSA9IGpzb24uaW1hZ2VzW3RleHR1cmVFeHRlbnNpb25zW0VYVEVOU0lPTlMuTVNGVF9URVhUVVJFX0REU10uc291cmNlXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNvdXJjZSA9IGpzb24uaW1hZ2VzW3RleHR1cmVEZWYuc291cmNlXTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc291cmNlVVJJID0gc291cmNlLnVyaTtcclxuICAgIHZhciBpc09iamVjdFVSTCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChzb3VyY2UuYnVmZmVyVmlldyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIExvYWQgYmluYXJ5IGltYWdlIGRhdGEgZnJvbSBidWZmZXJWaWV3LCBpZiBwcm92aWRlZC5cclxuXHJcbiAgICAgIHNvdXJjZVVSSSA9IHBhcnNlci5nZXREZXBlbmRlbmN5KCdidWZmZXJWaWV3Jywgc291cmNlLmJ1ZmZlclZpZXcpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlclZpZXcpIHtcclxuICAgICAgICBpc09iamVjdFVSTCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYnVmZmVyVmlld10sIHsgdHlwZTogc291cmNlLm1pbWVUeXBlIH0pO1xyXG4gICAgICAgIHNvdXJjZVVSSSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZVVSSTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzb3VyY2VVUkkpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChzb3VyY2VVUkkpIHtcclxuICAgICAgICAvLyBMb2FkIFRleHR1cmUgcmVzb3VyY2UuXHJcblxyXG4gICAgICAgIHZhciBsb2FkZXIgPSBvcHRpb25zLm1hbmFnZXIuZ2V0SGFuZGxlcihzb3VyY2VVUkkpO1xyXG5cclxuICAgICAgICBpZiAoIWxvYWRlcikge1xyXG4gICAgICAgICAgbG9hZGVyID0gdGV4dHVyZUV4dGVuc2lvbnNbRVhURU5TSU9OUy5NU0ZUX1RFWFRVUkVfRERTXVxyXG4gICAgICAgICAgICA/IHBhcnNlci5leHRlbnNpb25zW0VYVEVOU0lPTlMuTVNGVF9URVhUVVJFX0REU10uZGRzTG9hZGVyXHJcbiAgICAgICAgICAgIDogdGV4dHVyZUxvYWRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICBsb2FkZXIubG9hZChyZXNvbHZlVVJMKHNvdXJjZVVSSSwgb3B0aW9ucy5wYXRoKSwgcmVzb2x2ZSwgdW5kZWZpbmVkLCByZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAodGV4dHVyZSkge1xyXG4gICAgICAgIC8vIENsZWFuIHVwIHJlc291cmNlcyBhbmQgY29uZmlndXJlIFRleHR1cmUuXHJcblxyXG4gICAgICAgIGlmIChpc09iamVjdFVSTCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChzb3VyY2VVUkkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dHVyZS5mbGlwWSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGV4dHVyZURlZi5uYW1lKSB0ZXh0dXJlLm5hbWUgPSB0ZXh0dXJlRGVmLm5hbWU7XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSB1bmtub3duIG1pbWUgdHlwZXMsIGxpa2UgRERTIGZpbGVzLlxyXG4gICAgICAgIGlmIChzb3VyY2UubWltZVR5cGUgaW4gTUlNRV9UWVBFX0ZPUk1BVFMpIHtcclxuICAgICAgICAgIHRleHR1cmUuZm9ybWF0ID0gTUlNRV9UWVBFX0ZPUk1BVFNbc291cmNlLm1pbWVUeXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzYW1wbGVycyA9IGpzb24uc2FtcGxlcnMgfHwge307XHJcbiAgICAgICAgdmFyIHNhbXBsZXIgPSBzYW1wbGVyc1t0ZXh0dXJlRGVmLnNhbXBsZXJdIHx8IHt9O1xyXG5cclxuICAgICAgICB0ZXh0dXJlLm1hZ0ZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbc2FtcGxlci5tYWdGaWx0ZXJdIHx8IExpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFdFQkdMX0ZJTFRFUlNbc2FtcGxlci5taW5GaWx0ZXJdIHx8IExpbmVhck1pcG1hcExpbmVhckZpbHRlcjtcclxuICAgICAgICB0ZXh0dXJlLndyYXBTID0gV0VCR0xfV1JBUFBJTkdTW3NhbXBsZXIud3JhcFNdIHx8IFJlcGVhdFdyYXBwaW5nO1xyXG4gICAgICAgIHRleHR1cmUud3JhcFQgPSBXRUJHTF9XUkFQUElOR1Nbc2FtcGxlci53cmFwVF0gfHwgUmVwZWF0V3JhcHBpbmc7XHJcblxyXG4gICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBBc3luY2hyb25vdXNseSBhc3NpZ25zIGEgdGV4dHVyZSB0byB0aGUgZ2l2ZW4gbWF0ZXJpYWwgcGFyYW1ldGVycy5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gbWF0ZXJpYWxQYXJhbXNcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFwTmFtZVxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtYXBEZWZcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAqL1xyXG4gIEdMVEZQYXJzZXIucHJvdG90eXBlLmFzc2lnblRleHR1cmUgPSBmdW5jdGlvbiAobWF0ZXJpYWxQYXJhbXMsIG1hcE5hbWUsIG1hcERlZikge1xyXG4gICAgdmFyIHBhcnNlciA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGVwZW5kZW5jeSgndGV4dHVyZScsIG1hcERlZi5pbmRleCkudGhlbihmdW5jdGlvbiAodGV4dHVyZSkge1xyXG4gICAgICBpZiAoIXRleHR1cmUuaXNDb21wcmVzc2VkVGV4dHVyZSkge1xyXG4gICAgICAgIHN3aXRjaCAobWFwTmFtZSkge1xyXG4gICAgICAgICAgY2FzZSAnYW9NYXAnOlxyXG4gICAgICAgICAgY2FzZSAnZW1pc3NpdmVNYXAnOlxyXG4gICAgICAgICAgY2FzZSAnbWV0YWxuZXNzTWFwJzpcclxuICAgICAgICAgIGNhc2UgJ25vcm1hbE1hcCc6XHJcbiAgICAgICAgICBjYXNlICdyb3VnaG5lc3NNYXAnOlxyXG4gICAgICAgICAgICB0ZXh0dXJlLmZvcm1hdCA9IFJHQkZvcm1hdDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBNYXRlcmlhbHMgc2FtcGxlIGFvTWFwIGZyb20gVVYgc2V0IDEgYW5kIG90aGVyIG1hcHMgZnJvbSBVViBzZXQgMCAtIHRoaXMgY2FuJ3QgYmUgY29uZmlndXJlZFxyXG4gICAgICAvLyBIb3dldmVyLCB3ZSB3aWxsIGNvcHkgVVYgc2V0IDAgdG8gVVYgc2V0IDEgb24gZGVtYW5kIGZvciBhb01hcFxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbWFwRGVmLnRleENvb3JkICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBtYXBEZWYudGV4Q29vcmQgIT0gMCAmJlxyXG4gICAgICAgICEobWFwTmFtZSA9PT0gJ2FvTWFwJyAmJiBtYXBEZWYudGV4Q29vcmQgPT0gMSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgJ1RIUkVFLkdMVEZMb2FkZXI6IEN1c3RvbSBVViBzZXQgJyArXHJcbiAgICAgICAgICBtYXBEZWYudGV4Q29vcmQgK1xyXG4gICAgICAgICAgJyBmb3IgdGV4dHVyZSAnICtcclxuICAgICAgICAgIG1hcE5hbWUgK1xyXG4gICAgICAgICAgJyBub3QgeWV0IHN1cHBvcnRlZC4nXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHBhcnNlci5leHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNXSkge1xyXG4gICAgICAgIHZhciB0cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICAgIG1hcERlZi5leHRlbnNpb25zICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gbWFwRGVmLmV4dGVuc2lvbnNbRVhURU5TSU9OUy5LSFJfVEVYVFVSRV9UUkFOU0ZPUk1dXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKHRyYW5zZm9ybSkge1xyXG4gICAgICAgICAgdGV4dHVyZSA9IHBhcnNlci5leHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX1RFWFRVUkVfVFJBTlNGT1JNXS5leHRlbmRUZXh0dXJlKFxyXG4gICAgICAgICAgICB0ZXh0dXJlLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXRlcmlhbFBhcmFtc1ttYXBOYW1lXSA9IHRleHR1cmU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBBc3NpZ25zIGZpbmFsIG1hdGVyaWFsIHRvIGEgTWVzaCwgTGluZSwgb3IgUG9pbnRzIGluc3RhbmNlLiBUaGUgaW5zdGFuY2VcclxuICAgKiBhbHJlYWR5IGhhcyBhIG1hdGVyaWFsIChnZW5lcmF0ZWQgZnJvbSB0aGUgZ2xURiBtYXRlcmlhbCBvcHRpb25zIGFsb25lKVxyXG4gICAqIGJ1dCByZXVzZSBvZiB0aGUgc2FtZSBnbFRGIG1hdGVyaWFsIG1heSByZXF1aXJlIG11bHRpcGxlIHRocmVlanMgbWF0ZXJpYWxzXHJcbiAgICogdG8gYWNjb21vZGF0ZSBkaWZmZXJlbnQgcHJpbWl0aXZlIHR5cGVzLCBkZWZpbmVzLCBldGMuIE5ldyBtYXRlcmlhbHMgd2lsbFxyXG4gICAqIGJlIGNyZWF0ZWQgaWYgbmVjZXNzYXJ5LCBhbmQgcmV1c2VkIGZyb20gYSBjYWNoZS5cclxuICAgKiBAcGFyYW0gIHtPYmplY3QzRH0gbWVzaCBNZXNoLCBMaW5lLCBvciBQb2ludHMgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgR0xURlBhcnNlci5wcm90b3R5cGUuYXNzaWduRmluYWxNYXRlcmlhbCA9IGZ1bmN0aW9uIChtZXNoKSB7XHJcbiAgICB2YXIgZ2VvbWV0cnkgPSBtZXNoLmdlb21ldHJ5O1xyXG4gICAgdmFyIG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbDtcclxuXHJcbiAgICB2YXIgdXNlVmVydGV4VGFuZ2VudHMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLnRhbmdlbnQgIT09IHVuZGVmaW5lZDtcclxuICAgIHZhciB1c2VWZXJ0ZXhDb2xvcnMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yICE9PSB1bmRlZmluZWQ7XHJcbiAgICB2YXIgdXNlRmxhdFNoYWRpbmcgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIHVzZVNraW5uaW5nID0gbWVzaC5pc1NraW5uZWRNZXNoID09PSB0cnVlO1xyXG4gICAgdmFyIHVzZU1vcnBoVGFyZ2V0cyA9IE9iamVjdC5rZXlzKGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcykubGVuZ3RoID4gMDtcclxuICAgIHZhciB1c2VNb3JwaE5vcm1hbHMgPSB1c2VNb3JwaFRhcmdldHMgJiYgZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzLm5vcm1hbCAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGlmIChtZXNoLmlzUG9pbnRzKSB7XHJcbiAgICAgIHZhciBjYWNoZUtleSA9ICdQb2ludHNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcclxuXHJcbiAgICAgIHZhciBwb2ludHNNYXRlcmlhbCA9IHRoaXMuY2FjaGUuZ2V0KGNhY2hlS2V5KTtcclxuXHJcbiAgICAgIGlmICghcG9pbnRzTWF0ZXJpYWwpIHtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCgpO1xyXG4gICAgICAgIE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwocG9pbnRzTWF0ZXJpYWwsIG1hdGVyaWFsKTtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbC5jb2xvci5jb3B5KG1hdGVyaWFsLmNvbG9yKTtcclxuICAgICAgICBwb2ludHNNYXRlcmlhbC5tYXAgPSBtYXRlcmlhbC5tYXA7XHJcbiAgICAgICAgcG9pbnRzTWF0ZXJpYWwuc2l6ZUF0dGVudWF0aW9uID0gZmFsc2U7IC8vIGdsVEYgc3BlYyBzYXlzIHBvaW50cyBzaG91bGQgYmUgMXB4XHJcblxyXG4gICAgICAgIHRoaXMuY2FjaGUuYWRkKGNhY2hlS2V5LCBwb2ludHNNYXRlcmlhbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdGVyaWFsID0gcG9pbnRzTWF0ZXJpYWw7XHJcbiAgICB9IGVsc2UgaWYgKG1lc2guaXNMaW5lKSB7XHJcbiAgICAgIHZhciBjYWNoZUtleSA9ICdMaW5lQmFzaWNNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZDtcclxuXHJcbiAgICAgIHZhciBsaW5lTWF0ZXJpYWwgPSB0aGlzLmNhY2hlLmdldChjYWNoZUtleSk7XHJcblxyXG4gICAgICBpZiAoIWxpbmVNYXRlcmlhbCkge1xyXG4gICAgICAgIGxpbmVNYXRlcmlhbCA9IG5ldyBMaW5lQmFzaWNNYXRlcmlhbCgpO1xyXG4gICAgICAgIE1hdGVyaWFsLnByb3RvdHlwZS5jb3B5LmNhbGwobGluZU1hdGVyaWFsLCBtYXRlcmlhbCk7XHJcbiAgICAgICAgbGluZU1hdGVyaWFsLmNvbG9yLmNvcHkobWF0ZXJpYWwuY29sb3IpO1xyXG5cclxuICAgICAgICB0aGlzLmNhY2hlLmFkZChjYWNoZUtleSwgbGluZU1hdGVyaWFsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWF0ZXJpYWwgPSBsaW5lTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xvbmUgdGhlIG1hdGVyaWFsIGlmIGl0IHdpbGwgYmUgbW9kaWZpZWRcclxuICAgIGlmICh1c2VWZXJ0ZXhUYW5nZW50cyB8fCB1c2VWZXJ0ZXhDb2xvcnMgfHwgdXNlRmxhdFNoYWRpbmcgfHwgdXNlU2tpbm5pbmcgfHwgdXNlTW9ycGhUYXJnZXRzKSB7XHJcbiAgICAgIHZhciBjYWNoZUtleSA9ICdDbG9uZWRNYXRlcmlhbDonICsgbWF0ZXJpYWwudXVpZCArICc6JztcclxuXHJcbiAgICAgIGlmIChtYXRlcmlhbC5pc0dMVEZTcGVjdWxhckdsb3NzaW5lc3NNYXRlcmlhbCkgY2FjaGVLZXkgKz0gJ3NwZWN1bGFyLWdsb3NzaW5lc3M6JztcclxuICAgICAgaWYgKHVzZVNraW5uaW5nKSBjYWNoZUtleSArPSAnc2tpbm5pbmc6JztcclxuICAgICAgaWYgKHVzZVZlcnRleFRhbmdlbnRzKSBjYWNoZUtleSArPSAndmVydGV4LXRhbmdlbnRzOic7XHJcbiAgICAgIGlmICh1c2VWZXJ0ZXhDb2xvcnMpIGNhY2hlS2V5ICs9ICd2ZXJ0ZXgtY29sb3JzOic7XHJcbiAgICAgIGlmICh1c2VGbGF0U2hhZGluZykgY2FjaGVLZXkgKz0gJ2ZsYXQtc2hhZGluZzonO1xyXG4gICAgICBpZiAodXNlTW9ycGhUYXJnZXRzKSBjYWNoZUtleSArPSAnbW9ycGgtdGFyZ2V0czonO1xyXG4gICAgICBpZiAodXNlTW9ycGhOb3JtYWxzKSBjYWNoZUtleSArPSAnbW9ycGgtbm9ybWFsczonO1xyXG5cclxuICAgICAgdmFyIGNhY2hlZE1hdGVyaWFsID0gdGhpcy5jYWNoZS5nZXQoY2FjaGVLZXkpO1xyXG5cclxuICAgICAgaWYgKCFjYWNoZWRNYXRlcmlhbCkge1xyXG4gICAgICAgIGNhY2hlZE1hdGVyaWFsID0gbWF0ZXJpYWwuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgaWYgKHVzZVNraW5uaW5nKSBjYWNoZWRNYXRlcmlhbC5za2lubmluZyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHVzZVZlcnRleFRhbmdlbnRzKSBjYWNoZWRNYXRlcmlhbC52ZXJ0ZXhUYW5nZW50cyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHVzZVZlcnRleENvbG9ycykgY2FjaGVkTWF0ZXJpYWwudmVydGV4Q29sb3JzID0gdHJ1ZTtcclxuICAgICAgICBpZiAodXNlRmxhdFNoYWRpbmcpIGNhY2hlZE1hdGVyaWFsLmZsYXRTaGFkaW5nID0gdHJ1ZTtcclxuICAgICAgICBpZiAodXNlTW9ycGhUYXJnZXRzKSBjYWNoZWRNYXRlcmlhbC5tb3JwaFRhcmdldHMgPSB0cnVlO1xyXG4gICAgICAgIGlmICh1c2VNb3JwaE5vcm1hbHMpIGNhY2hlZE1hdGVyaWFsLm1vcnBoTm9ybWFscyA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuY2FjaGUuYWRkKGNhY2hlS2V5LCBjYWNoZWRNYXRlcmlhbCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdGVyaWFsID0gY2FjaGVkTWF0ZXJpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd29ya2Fyb3VuZHMgZm9yIG1lc2ggYW5kIGdlb21ldHJ5XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBtYXRlcmlhbC5hb01hcCAmJlxyXG4gICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnV2MiA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMudXYgIT09IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgndXYyJywgZ2VvbWV0cnkuYXR0cmlidXRlcy51dik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTE0MzgjaXNzdWVjb21tZW50LTUwNzAwMzk5NVxyXG4gICAgaWYgKG1hdGVyaWFsLm5vcm1hbFNjYWxlICYmICF1c2VWZXJ0ZXhUYW5nZW50cykge1xyXG4gICAgICBtYXRlcmlhbC5ub3JtYWxTY2FsZS55ID0gLW1hdGVyaWFsLm5vcm1hbFNjYWxlLnk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlICYmICF1c2VWZXJ0ZXhUYW5nZW50cykge1xyXG4gICAgICBtYXRlcmlhbC5jbGVhcmNvYXROb3JtYWxTY2FsZS55ID0gLW1hdGVyaWFsLmNsZWFyY29hdE5vcm1hbFNjYWxlLnk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVzaC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWF0ZXJpYWxzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1hdGVyaWFsSW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1hdGVyaWFsPn1cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkTWF0ZXJpYWwgPSBmdW5jdGlvbiAobWF0ZXJpYWxJbmRleCkge1xyXG4gICAgdmFyIHBhcnNlciA9IHRoaXM7XHJcbiAgICB2YXIganNvbiA9IHRoaXMuanNvbjtcclxuICAgIHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG4gICAgdmFyIG1hdGVyaWFsRGVmID0ganNvbi5tYXRlcmlhbHNbbWF0ZXJpYWxJbmRleF07XHJcblxyXG4gICAgdmFyIG1hdGVyaWFsVHlwZTtcclxuICAgIHZhciBtYXRlcmlhbFBhcmFtcyA9IHt9O1xyXG4gICAgdmFyIG1hdGVyaWFsRXh0ZW5zaW9ucyA9IG1hdGVyaWFsRGVmLmV4dGVuc2lvbnMgfHwge307XHJcblxyXG4gICAgdmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcbiAgICBpZiAobWF0ZXJpYWxFeHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19QQlJfU1BFQ1VMQVJfR0xPU1NJTkVTU10pIHtcclxuICAgICAgdmFyIHNnRXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1NdO1xyXG4gICAgICBtYXRlcmlhbFR5cGUgPSBzZ0V4dGVuc2lvbi5nZXRNYXRlcmlhbFR5cGUoKTtcclxuICAgICAgcGVuZGluZy5wdXNoKHNnRXh0ZW5zaW9uLmV4dGVuZFBhcmFtcyhtYXRlcmlhbFBhcmFtcywgbWF0ZXJpYWxEZWYsIHBhcnNlcikpO1xyXG4gICAgfSBlbHNlIGlmIChtYXRlcmlhbEV4dGVuc2lvbnNbRVhURU5TSU9OUy5LSFJfTUFURVJJQUxTX1VOTElUXSkge1xyXG4gICAgICB2YXIga211RXh0ZW5zaW9uID0gZXh0ZW5zaW9uc1tFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfVU5MSVRdO1xyXG4gICAgICBtYXRlcmlhbFR5cGUgPSBrbXVFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XHJcbiAgICAgIHBlbmRpbmcucHVzaChrbXVFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKG1hdGVyaWFsUGFyYW1zLCBtYXRlcmlhbERlZiwgcGFyc2VyKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBTcGVjaWZpY2F0aW9uOlxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbWV0YWxsaWMtcm91Z2huZXNzLW1hdGVyaWFsXHJcblxyXG4gICAgICBtYXRlcmlhbFR5cGUgPSBNZXNoU3RhbmRhcmRNYXRlcmlhbDtcclxuXHJcbiAgICAgIHZhciBtZXRhbGxpY1JvdWdobmVzcyA9IG1hdGVyaWFsRGVmLnBick1ldGFsbGljUm91Z2huZXNzIHx8IHt9O1xyXG5cclxuICAgICAgbWF0ZXJpYWxQYXJhbXMuY29sb3IgPSBuZXcgQ29sb3IoMS4wLCAxLjAsIDEuMCk7XHJcbiAgICAgIG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSAxLjA7XHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShtZXRhbGxpY1JvdWdobmVzcy5iYXNlQ29sb3JGYWN0b3IpKSB7XHJcbiAgICAgICAgdmFyIGFycmF5ID0gbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yRmFjdG9yO1xyXG5cclxuICAgICAgICBtYXRlcmlhbFBhcmFtcy5jb2xvci5mcm9tQXJyYXkoYXJyYXkpO1xyXG4gICAgICAgIG1hdGVyaWFsUGFyYW1zLm9wYWNpdHkgPSBhcnJheVszXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1ldGFsbGljUm91Z2huZXNzLmJhc2VDb2xvclRleHR1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICAgIHBhcnNlci5hc3NpZ25UZXh0dXJlKG1hdGVyaWFsUGFyYW1zLCAnbWFwJywgbWV0YWxsaWNSb3VnaG5lc3MuYmFzZUNvbG9yVGV4dHVyZSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtYXRlcmlhbFBhcmFtcy5tZXRhbG5lc3MgPVxyXG4gICAgICAgIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljRmFjdG9yICE9PSB1bmRlZmluZWQgPyBtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY0ZhY3RvciA6IDEuMDtcclxuICAgICAgbWF0ZXJpYWxQYXJhbXMucm91Z2huZXNzID1cclxuICAgICAgICBtZXRhbGxpY1JvdWdobmVzcy5yb3VnaG5lc3NGYWN0b3IgIT09IHVuZGVmaW5lZCA/IG1ldGFsbGljUm91Z2huZXNzLnJvdWdobmVzc0ZhY3RvciA6IDEuMDtcclxuXHJcbiAgICAgIGlmIChtZXRhbGxpY1JvdWdobmVzcy5tZXRhbGxpY1JvdWdobmVzc1RleHR1cmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICAgIHBhcnNlci5hc3NpZ25UZXh0dXJlKFxyXG4gICAgICAgICAgICBtYXRlcmlhbFBhcmFtcyxcclxuICAgICAgICAgICAgJ21ldGFsbmVzc01hcCcsXHJcbiAgICAgICAgICAgIG1ldGFsbGljUm91Z2huZXNzLm1ldGFsbGljUm91Z2huZXNzVGV4dHVyZVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcGVuZGluZy5wdXNoKFxyXG4gICAgICAgICAgcGFyc2VyLmFzc2lnblRleHR1cmUoXHJcbiAgICAgICAgICAgIG1hdGVyaWFsUGFyYW1zLFxyXG4gICAgICAgICAgICAncm91Z2huZXNzTWFwJyxcclxuICAgICAgICAgICAgbWV0YWxsaWNSb3VnaG5lc3MubWV0YWxsaWNSb3VnaG5lc3NUZXh0dXJlXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXRlcmlhbERlZi5kb3VibGVTaWRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtYXRlcmlhbFBhcmFtcy5zaWRlID0gRG91YmxlU2lkZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWxwaGFNb2RlID0gbWF0ZXJpYWxEZWYuYWxwaGFNb2RlIHx8IEFMUEhBX01PREVTLk9QQVFVRTtcclxuXHJcbiAgICBpZiAoYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5CTEVORCkge1xyXG4gICAgICBtYXRlcmlhbFBhcmFtcy50cmFuc3BhcmVudCA9IHRydWU7XHJcblxyXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tcmRvb2IvdGhyZWUuanMvaXNzdWVzLzE3NzA2XHJcbiAgICAgIG1hdGVyaWFsUGFyYW1zLmRlcHRoV3JpdGUgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hdGVyaWFsUGFyYW1zLnRyYW5zcGFyZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoYWxwaGFNb2RlID09PSBBTFBIQV9NT0RFUy5NQVNLKSB7XHJcbiAgICAgICAgbWF0ZXJpYWxQYXJhbXMuYWxwaGFUZXN0ID1cclxuICAgICAgICAgIG1hdGVyaWFsRGVmLmFscGhhQ3V0b2ZmICE9PSB1bmRlZmluZWQgPyBtYXRlcmlhbERlZi5hbHBoYUN1dG9mZiA6IDAuNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCkge1xyXG4gICAgICBwZW5kaW5nLnB1c2gocGFyc2VyLmFzc2lnblRleHR1cmUobWF0ZXJpYWxQYXJhbXMsICdub3JtYWxNYXAnLCBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlKSk7XHJcblxyXG4gICAgICBtYXRlcmlhbFBhcmFtcy5ub3JtYWxTY2FsZSA9IG5ldyBWZWN0b3IyKDEsIDEpO1xyXG5cclxuICAgICAgaWYgKG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIG1hdGVyaWFsUGFyYW1zLm5vcm1hbFNjYWxlLnNldChcclxuICAgICAgICAgIG1hdGVyaWFsRGVmLm5vcm1hbFRleHR1cmUuc2NhbGUsXHJcbiAgICAgICAgICBtYXRlcmlhbERlZi5ub3JtYWxUZXh0dXJlLnNjYWxlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCkge1xyXG4gICAgICBwZW5kaW5nLnB1c2gocGFyc2VyLmFzc2lnblRleHR1cmUobWF0ZXJpYWxQYXJhbXMsICdhb01hcCcsIG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUpKTtcclxuXHJcbiAgICAgIGlmIChtYXRlcmlhbERlZi5vY2NsdXNpb25UZXh0dXJlLnN0cmVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBtYXRlcmlhbFBhcmFtcy5hb01hcEludGVuc2l0eSA9IG1hdGVyaWFsRGVmLm9jY2x1c2lvblRleHR1cmUuc3RyZW5ndGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF0ZXJpYWxEZWYuZW1pc3NpdmVGYWN0b3IgIT09IHVuZGVmaW5lZCAmJiBtYXRlcmlhbFR5cGUgIT09IE1lc2hCYXNpY01hdGVyaWFsKSB7XHJcbiAgICAgIG1hdGVyaWFsUGFyYW1zLmVtaXNzaXZlID0gbmV3IENvbG9yKCkuZnJvbUFycmF5KG1hdGVyaWFsRGVmLmVtaXNzaXZlRmFjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF0ZXJpYWxEZWYuZW1pc3NpdmVUZXh0dXJlICE9PSB1bmRlZmluZWQgJiYgbWF0ZXJpYWxUeXBlICE9PSBNZXNoQmFzaWNNYXRlcmlhbCkge1xyXG4gICAgICBwZW5kaW5nLnB1c2goXHJcbiAgICAgICAgcGFyc2VyLmFzc2lnblRleHR1cmUobWF0ZXJpYWxQYXJhbXMsICdlbWlzc2l2ZU1hcCcsIG1hdGVyaWFsRGVmLmVtaXNzaXZlVGV4dHVyZSlcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWF0ZXJpYWxFeHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVRdKSB7XHJcbiAgICAgIHZhciBjbGVhcmNvYXRFeHRlbnNpb24gPSBleHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX01BVEVSSUFMU19DTEVBUkNPQVRdO1xyXG4gICAgICBtYXRlcmlhbFR5cGUgPSBjbGVhcmNvYXRFeHRlbnNpb24uZ2V0TWF0ZXJpYWxUeXBlKCk7XHJcbiAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICBjbGVhcmNvYXRFeHRlbnNpb24uZXh0ZW5kUGFyYW1zKG1hdGVyaWFsUGFyYW1zLCB7IGV4dGVuc2lvbnM6IG1hdGVyaWFsRXh0ZW5zaW9ucyB9LCBwYXJzZXIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBlbmRpbmcpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbWF0ZXJpYWw7XHJcblxyXG4gICAgICBpZiAobWF0ZXJpYWxUeXBlID09PSBHTFRGTWVzaFN0YW5kYXJkU0dNYXRlcmlhbCkge1xyXG4gICAgICAgIG1hdGVyaWFsID0gZXh0ZW5zaW9uc1tFWFRFTlNJT05TLktIUl9NQVRFUklBTFNfUEJSX1NQRUNVTEFSX0dMT1NTSU5FU1NdLmNyZWF0ZU1hdGVyaWFsKFxyXG4gICAgICAgICAgbWF0ZXJpYWxQYXJhbXNcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1hdGVyaWFsID0gbmV3IG1hdGVyaWFsVHlwZShtYXRlcmlhbFBhcmFtcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtYXRlcmlhbERlZi5uYW1lKSBtYXRlcmlhbC5uYW1lID0gbWF0ZXJpYWxEZWYubmFtZTtcclxuXHJcbiAgICAgIC8vIGJhc2VDb2xvclRleHR1cmUsIGVtaXNzaXZlVGV4dHVyZSwgYW5kIHNwZWN1bGFyR2xvc3NpbmVzc1RleHR1cmUgdXNlIHNSR0IgZW5jb2RpbmcuXHJcbiAgICAgIGlmIChtYXRlcmlhbC5tYXApIG1hdGVyaWFsLm1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcclxuICAgICAgaWYgKG1hdGVyaWFsLmVtaXNzaXZlTWFwKSBtYXRlcmlhbC5lbWlzc2l2ZU1hcC5lbmNvZGluZyA9IHNSR0JFbmNvZGluZztcclxuXHJcbiAgICAgIGFzc2lnbkV4dHJhc1RvVXNlckRhdGEobWF0ZXJpYWwsIG1hdGVyaWFsRGVmKTtcclxuXHJcbiAgICAgIGlmIChtYXRlcmlhbERlZi5leHRlbnNpb25zKSBhZGRVbmtub3duRXh0ZW5zaW9uc1RvVXNlckRhdGEoZXh0ZW5zaW9ucywgbWF0ZXJpYWwsIG1hdGVyaWFsRGVmKTtcclxuXHJcbiAgICAgIHJldHVybiBtYXRlcmlhbDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcbiAgICogQHBhcmFtIHtHTFRGLlByaW1pdGl2ZX0gcHJpbWl0aXZlRGVmXHJcbiAgICogQHBhcmFtIHtHTFRGUGFyc2VyfSBwYXJzZXJcclxuICAgKi9cclxuICBmdW5jdGlvbiBjb21wdXRlQm91bmRzKGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlcikge1xyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcmltaXRpdmVEZWYuYXR0cmlidXRlcztcclxuXHJcbiAgICB2YXIgYm94ID0gbmV3IEJveDMoKTtcclxuXHJcbiAgICBpZiAoYXR0cmlidXRlcy5QT1NJVElPTiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciBhY2Nlc3NvciA9IHBhcnNlci5qc29uLmFjY2Vzc29yc1thdHRyaWJ1dGVzLlBPU0lUSU9OXTtcclxuXHJcbiAgICAgIHZhciBtaW4gPSBhY2Nlc3Nvci5taW47XHJcbiAgICAgIHZhciBtYXggPSBhY2Nlc3Nvci5tYXg7XHJcblxyXG4gICAgICAvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxyXG5cclxuICAgICAgaWYgKG1pbiAhPT0gdW5kZWZpbmVkICYmIG1heCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgYm94LnNldChuZXcgVmVjdG9yMyhtaW5bMF0sIG1pblsxXSwgbWluWzJdKSwgbmV3IFZlY3RvcjMobWF4WzBdLCBtYXhbMV0sIG1heFsyXSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdGFyZ2V0cyA9IHByaW1pdGl2ZURlZi50YXJnZXRzO1xyXG5cclxuICAgIGlmICh0YXJnZXRzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIG1heERpc3BsYWNlbWVudCA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgIHZhciB2ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRhcmdldHNbaV07XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuUE9TSVRJT04gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdmFyIGFjY2Vzc29yID0gcGFyc2VyLmpzb24uYWNjZXNzb3JzW3RhcmdldC5QT1NJVElPTl07XHJcbiAgICAgICAgICB2YXIgbWluID0gYWNjZXNzb3IubWluO1xyXG4gICAgICAgICAgdmFyIG1heCA9IGFjY2Vzc29yLm1heDtcclxuXHJcbiAgICAgICAgICAvLyBnbFRGIHJlcXVpcmVzICdtaW4nIGFuZCAnbWF4JywgYnV0IFZSTSAod2hpY2ggZXh0ZW5kcyBnbFRGKSBjdXJyZW50bHkgaWdub3JlcyB0aGF0IHJlcXVpcmVtZW50LlxyXG5cclxuICAgICAgICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCAmJiBtYXggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGdldCBtYXggb2YgYWJzb2x1dGUgY29tcG9uZW50cyBiZWNhdXNlIHRhcmdldCB3ZWlnaHQgaXMgWy0xLDFdXHJcbiAgICAgICAgICAgIHZlY3Rvci5zZXRYKE1hdGgubWF4KE1hdGguYWJzKG1pblswXSksIE1hdGguYWJzKG1heFswXSkpKTtcclxuICAgICAgICAgICAgdmVjdG9yLnNldFkoTWF0aC5tYXgoTWF0aC5hYnMobWluWzFdKSwgTWF0aC5hYnMobWF4WzFdKSkpO1xyXG4gICAgICAgICAgICB2ZWN0b3Iuc2V0WihNYXRoLm1heChNYXRoLmFicyhtaW5bMl0pLCBNYXRoLmFicyhtYXhbMl0pKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBOb3RlOiB0aGlzIGFzc3VtZXMgdGhhdCB0aGUgc3VtIG9mIGFsbCB3ZWlnaHRzIGlzIGF0IG1vc3QgMS4gVGhpcyBpc24ndCBxdWl0ZSBjb3JyZWN0IC0gaXQncyBtb3JlIGNvbnNlcnZhdGl2ZVxyXG4gICAgICAgICAgICAvLyB0byBhc3N1bWUgdGhhdCBlYWNoIHRhcmdldCBjYW4gaGF2ZSBhIG1heCB3ZWlnaHQgb2YgMS4gSG93ZXZlciwgZm9yIHNvbWUgdXNlIGNhc2VzIC0gbm90YWJseSwgd2hlbiBtb3JwaCB0YXJnZXRzXHJcbiAgICAgICAgICAgIC8vIGFyZSB1c2VkIHRvIGltcGxlbWVudCBrZXktZnJhbWUgYW5pbWF0aW9ucyBhbmQgYXMgc3VjaCBvbmx5IHR3byBhcmUgYWN0aXZlIGF0IGEgdGltZSAtIHRoaXMgcmVzdWx0cyBpbiB2ZXJ5IGxhcmdlXHJcbiAgICAgICAgICAgIC8vIGJveGVzLiBTbyBmb3Igbm93IHdlIG1ha2UgYSBib3ggdGhhdCdzIHNvbWV0aW1lcyBhIHRvdWNoIHRvbyBzbWFsbCBidXQgaXMgaG9wZWZ1bGx5IG1vc3RseSBvZiByZWFzb25hYmxlIHNpemUuXHJcbiAgICAgICAgICAgIG1heERpc3BsYWNlbWVudC5tYXgodmVjdG9yKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBtaW4vbWF4IHByb3BlcnRpZXMgZm9yIGFjY2Vzc29yIFBPU0lUSU9OLicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQXMgcGVyIGNvbW1lbnQgYWJvdmUgdGhpcyBib3ggaXNuJ3QgY29uc2VydmF0aXZlLCBidXQgaGFzIGEgcmVhc29uYWJsZSBzaXplIGZvciBhIHZlcnkgbGFyZ2UgbnVtYmVyIG9mIG1vcnBoIHRhcmdldHMuXHJcbiAgICAgIGJveC5leHBhbmRCeVZlY3RvcihtYXhEaXNwbGFjZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlb21ldHJ5LmJvdW5kaW5nQm94ID0gYm94O1xyXG5cclxuICAgIHZhciBzcGhlcmUgPSBuZXcgU3BoZXJlKCk7XHJcblxyXG4gICAgYm94LmdldENlbnRlcihzcGhlcmUuY2VudGVyKTtcclxuICAgIHNwaGVyZS5yYWRpdXMgPSBib3gubWluLmRpc3RhbmNlVG8oYm94Lm1heCkgLyAyO1xyXG5cclxuICAgIGdlb21ldHJ5LmJvdW5kaW5nU3BoZXJlID0gc3BoZXJlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuICAgKiBAcGFyYW0ge0dMVEYuUHJpbWl0aXZlfSBwcmltaXRpdmVEZWZcclxuICAgKiBAcGFyYW0ge0dMVEZQYXJzZXJ9IHBhcnNlclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8QnVmZmVyR2VvbWV0cnk+fVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFkZFByaW1pdGl2ZUF0dHJpYnV0ZXMoZ2VvbWV0cnksIHByaW1pdGl2ZURlZiwgcGFyc2VyKSB7XHJcbiAgICB2YXIgYXR0cmlidXRlcyA9IHByaW1pdGl2ZURlZi5hdHRyaWJ1dGVzO1xyXG5cclxuICAgIHZhciBwZW5kaW5nID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoYWNjZXNzb3JJbmRleCwgYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICByZXR1cm4gcGFyc2VyLmdldERlcGVuZGVuY3koJ2FjY2Vzc29yJywgYWNjZXNzb3JJbmRleCkudGhlbihmdW5jdGlvbiAoYWNjZXNzb3IpIHtcclxuICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYWNjZXNzb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBnbHRmQXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgIHZhciB0aHJlZUF0dHJpYnV0ZU5hbWUgPSBBVFRSSUJVVEVTW2dsdGZBdHRyaWJ1dGVOYW1lXSB8fCBnbHRmQXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gU2tpcCBhdHRyaWJ1dGVzIGFscmVhZHkgcHJvdmlkZWQgYnkgZS5nLiBEcmFjbyBleHRlbnNpb24uXHJcbiAgICAgIGlmICh0aHJlZUF0dHJpYnV0ZU5hbWUgaW4gZ2VvbWV0cnkuYXR0cmlidXRlcykgY29udGludWU7XHJcblxyXG4gICAgICBwZW5kaW5nLnB1c2goYXNzaWduQXR0cmlidXRlQWNjZXNzb3IoYXR0cmlidXRlc1tnbHRmQXR0cmlidXRlTmFtZV0sIHRocmVlQXR0cmlidXRlTmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcmltaXRpdmVEZWYuaW5kaWNlcyAhPT0gdW5kZWZpbmVkICYmICFnZW9tZXRyeS5pbmRleCkge1xyXG4gICAgICB2YXIgYWNjZXNzb3IgPSBwYXJzZXJcclxuICAgICAgICAuZ2V0RGVwZW5kZW5jeSgnYWNjZXNzb3InLCBwcmltaXRpdmVEZWYuaW5kaWNlcylcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAoYWNjZXNzb3IpIHtcclxuICAgICAgICAgIGdlb21ldHJ5LnNldEluZGV4KGFjY2Vzc29yKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIHBlbmRpbmcucHVzaChhY2Nlc3Nvcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXNzaWduRXh0cmFzVG9Vc2VyRGF0YShnZW9tZXRyeSwgcHJpbWl0aXZlRGVmKTtcclxuXHJcbiAgICBjb21wdXRlQm91bmRzKGdlb21ldHJ5LCBwcmltaXRpdmVEZWYsIHBhcnNlcik7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBlbmRpbmcpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gcHJpbWl0aXZlRGVmLnRhcmdldHMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gYWRkTW9ycGhUYXJnZXRzKGdlb21ldHJ5LCBwcmltaXRpdmVEZWYudGFyZ2V0cywgcGFyc2VyKVxyXG4gICAgICAgIDogZ2VvbWV0cnk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QnVmZmVyR2VvbWV0cnl9IGdlb21ldHJ5XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRyYXdNb2RlXHJcbiAgICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gdG9UcmlhbmdsZXNEcmF3TW9kZShnZW9tZXRyeSwgZHJhd01vZGUpIHtcclxuICAgIHZhciBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgaW5kZXggaWYgbm90IHByZXNlbnRcclxuXHJcbiAgICBpZiAoaW5kZXggPT09IG51bGwpIHtcclxuICAgICAgdmFyIGluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgIHZhciBwb3NpdGlvbiA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcclxuXHJcbiAgICAgIGlmIChwb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbi5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICBpbmRpY2VzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW9tZXRyeS5zZXRJbmRleChpbmRpY2VzKTtcclxuICAgICAgICBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5kZWZpbmVkIHBvc2l0aW9uIGF0dHJpYnV0ZS4gUHJvY2Vzc2luZyBub3QgcG9zc2libGUuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuXHJcbiAgICB2YXIgbnVtYmVyT2ZUcmlhbmdsZXMgPSBpbmRleC5jb3VudCAtIDI7XHJcbiAgICB2YXIgbmV3SW5kaWNlcyA9IFtdO1xyXG5cclxuICAgIGlmIChkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSkge1xyXG4gICAgICAvLyBnbC5UUklBTkdMRV9GQU5cclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IG51bWJlck9mVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WCgwKSk7XHJcbiAgICAgICAgbmV3SW5kaWNlcy5wdXNoKGluZGV4LmdldFgoaSkpO1xyXG4gICAgICAgIG5ld0luZGljZXMucHVzaChpbmRleC5nZXRYKGkgKyAxKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGdsLlRSSUFOR0xFX1NUUklQXHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICBpZiAoaSAlIDIgPT09IDApIHtcclxuICAgICAgICAgIG5ld0luZGljZXMucHVzaChpbmRleC5nZXRYKGkpKTtcclxuICAgICAgICAgIG5ld0luZGljZXMucHVzaChpbmRleC5nZXRYKGkgKyAxKSk7XHJcbiAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpICsgMikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpICsgMikpO1xyXG4gICAgICAgICAgbmV3SW5kaWNlcy5wdXNoKGluZGV4LmdldFgoaSArIDEpKTtcclxuICAgICAgICAgIG5ld0luZGljZXMucHVzaChpbmRleC5nZXRYKGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3SW5kaWNlcy5sZW5ndGggLyAzICE9PSBudW1iZXJPZlRyaWFuZ2xlcykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICdUSFJFRS5HTFRGTG9hZGVyLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5hYmxlIHRvIGdlbmVyYXRlIGNvcnJlY3QgYW1vdW50IG9mIHRyaWFuZ2xlcy4nXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnVpbGQgZmluYWwgZ2VvbWV0cnlcclxuXHJcbiAgICB2YXIgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xyXG4gICAgbmV3R2VvbWV0cnkuc2V0SW5kZXgobmV3SW5kaWNlcyk7XHJcblxyXG4gICAgcmV0dXJuIG5ld0dlb21ldHJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWNhdGlvbjogaHR0cHM6Ly9naXRodWIuY29tL0tocm9ub3NHcm91cC9nbFRGL2Jsb2IvbWFzdGVyL3NwZWNpZmljYXRpb24vMi4wL1JFQURNRS5tZCNnZW9tZXRyeVxyXG4gICAqXHJcbiAgICogQ3JlYXRlcyBCdWZmZXJHZW9tZXRyaWVzIGZyb20gcHJpbWl0aXZlcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8R0xURi5QcmltaXRpdmU+fSBwcmltaXRpdmVzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBcnJheTxCdWZmZXJHZW9tZXRyeT4+fVxyXG4gICAqL1xyXG4gIEdMVEZQYXJzZXIucHJvdG90eXBlLmxvYWRHZW9tZXRyaWVzID0gZnVuY3Rpb24gKHByaW1pdGl2ZXMpIHtcclxuICAgIHZhciBwYXJzZXIgPSB0aGlzO1xyXG4gICAgdmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcbiAgICB2YXIgY2FjaGUgPSB0aGlzLnByaW1pdGl2ZUNhY2hlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyYWNvUHJpbWl0aXZlKHByaW1pdGl2ZSkge1xyXG4gICAgICByZXR1cm4gZXh0ZW5zaW9uc1tFWFRFTlNJT05TLktIUl9EUkFDT19NRVNIX0NPTVBSRVNTSU9OXVxyXG4gICAgICAgIC5kZWNvZGVQcmltaXRpdmUocHJpbWl0aXZlLCBwYXJzZXIpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGdlb21ldHJ5KSB7XHJcbiAgICAgICAgICByZXR1cm4gYWRkUHJpbWl0aXZlQXR0cmlidXRlcyhnZW9tZXRyeSwgcHJpbWl0aXZlLCBwYXJzZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwZW5kaW5nID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgIHZhciBwcmltaXRpdmUgPSBwcmltaXRpdmVzW2ldO1xyXG4gICAgICB2YXIgY2FjaGVLZXkgPSBjcmVhdGVQcmltaXRpdmVLZXkocHJpbWl0aXZlKTtcclxuXHJcbiAgICAgIC8vIFNlZSBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgdGhpcyBnZW9tZXRyeVxyXG4gICAgICB2YXIgY2FjaGVkID0gY2FjaGVbY2FjaGVLZXldO1xyXG5cclxuICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY2FjaGVkIGdlb21ldHJ5IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIHBlbmRpbmcucHVzaChjYWNoZWQucHJvbWlzZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5UHJvbWlzZTtcclxuXHJcbiAgICAgICAgaWYgKHByaW1pdGl2ZS5leHRlbnNpb25zICYmIHByaW1pdGl2ZS5leHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX0RSQUNPX01FU0hfQ09NUFJFU1NJT05dKSB7XHJcbiAgICAgICAgICAvLyBVc2UgRFJBQ08gZ2VvbWV0cnkgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgICBnZW9tZXRyeVByb21pc2UgPSBjcmVhdGVEcmFjb1ByaW1pdGl2ZShwcmltaXRpdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGdlb21ldHJ5XHJcbiAgICAgICAgICBnZW9tZXRyeVByb21pc2UgPSBhZGRQcmltaXRpdmVBdHRyaWJ1dGVzKG5ldyBCdWZmZXJHZW9tZXRyeSgpLCBwcmltaXRpdmUsIHBhcnNlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYWNoZSB0aGlzIGdlb21ldHJ5XHJcbiAgICAgICAgY2FjaGVbY2FjaGVLZXldID0geyBwcmltaXRpdmU6IHByaW1pdGl2ZSwgcHJvbWlzZTogZ2VvbWV0cnlQcm9taXNlIH07XHJcblxyXG4gICAgICAgIHBlbmRpbmcucHVzaChnZW9tZXRyeVByb21pc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBlbmRpbmcpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi9ibG9iL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMC9SRUFETUUubWQjbWVzaGVzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1lc2hJbmRleFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R3JvdXB8TWVzaHxTa2lubmVkTWVzaD59XHJcbiAgICovXHJcbiAgR0xURlBhcnNlci5wcm90b3R5cGUubG9hZE1lc2ggPSBmdW5jdGlvbiAobWVzaEluZGV4KSB7XHJcbiAgICB2YXIgcGFyc2VyID0gdGhpcztcclxuICAgIHZhciBqc29uID0gdGhpcy5qc29uO1xyXG5cclxuICAgIHZhciBtZXNoRGVmID0ganNvbi5tZXNoZXNbbWVzaEluZGV4XTtcclxuICAgIHZhciBwcmltaXRpdmVzID0gbWVzaERlZi5wcmltaXRpdmVzO1xyXG5cclxuICAgIHZhciBwZW5kaW5nID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gcHJpbWl0aXZlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgIHZhciBtYXRlcmlhbCA9XHJcbiAgICAgICAgICAgIHByaW1pdGl2ZXNbaV0ubWF0ZXJpYWwgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgID8gY3JlYXRlRGVmYXVsdE1hdGVyaWFsKHRoaXMuY2FjaGUpXHJcbiAgICAgICAgICAgICAgOiB0aGlzLmdldERlcGVuZGVuY3koJ21hdGVyaWFsJywgcHJpbWl0aXZlc1tpXS5tYXRlcmlhbCk7XHJcblxyXG4gICAgICBwZW5kaW5nLnB1c2gobWF0ZXJpYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHBlbmRpbmcucHVzaChwYXJzZXIubG9hZEdlb21ldHJpZXMocHJpbWl0aXZlcykpO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwZW5kaW5nKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgIHZhciBtYXRlcmlhbHMgPSByZXN1bHRzLnNsaWNlKDAsIHJlc3VsdHMubGVuZ3RoIC0gMSk7XHJcbiAgICAgIHZhciBnZW9tZXRyaWVzID0gcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgdmFyIG1lc2hlcyA9IFtdO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZ2VvbWV0cmllcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGdlb21ldHJ5ID0gZ2VvbWV0cmllc1tpXTtcclxuICAgICAgICB2YXIgcHJpbWl0aXZlID0gcHJpbWl0aXZlc1tpXTtcclxuXHJcbiAgICAgICAgLy8gMS4gY3JlYXRlIE1lc2hcclxuXHJcbiAgICAgICAgdmFyIG1lc2g7XHJcblxyXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IG1hdGVyaWFsc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRVMgfHxcclxuICAgICAgICAgIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVAgfHxcclxuICAgICAgICAgIHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfRkFOIHx8XHJcbiAgICAgICAgICBwcmltaXRpdmUubW9kZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAvLyAuaXNTa2lubmVkTWVzaCBpc24ndCBpbiBnbFRGIHNwZWMuIFNlZSAubWFya0RlZnMoKVxyXG4gICAgICAgICAgbWVzaCA9XHJcbiAgICAgICAgICAgIG1lc2hEZWYuaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZVxyXG4gICAgICAgICAgICAgID8gbmV3IFNraW5uZWRNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcclxuICAgICAgICAgICAgICA6IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgaWYgKG1lc2guaXNTa2lubmVkTWVzaCA9PT0gdHJ1ZSAmJiAhbWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNraW5XZWlnaHQubm9ybWFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyB3ZSBub3JtYWxpemUgZmxvYXRpbmcgcG9pbnQgc2tpbiB3ZWlnaHQgYXJyYXkgdG8gZml4IG1hbGZvcm1lZCBhc3NldHMgKHNlZSAjMTUzMTkpXHJcbiAgICAgICAgICAgIC8vIGl0J3MgaW1wb3J0YW50IHRvIHNraXAgdGhpcyBmb3Igbm9uLWZsb2F0MzIgZGF0YSBzaW5jZSBub3JtYWxpemVTa2luV2VpZ2h0cyBhc3N1bWVzIG5vbi1ub3JtYWxpemVkIGlucHV0c1xyXG4gICAgICAgICAgICBtZXNoLm5vcm1hbGl6ZVNraW5XZWlnaHRzKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuVFJJQU5HTEVfU1RSSVApIHtcclxuICAgICAgICAgICAgbWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUobWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVTdHJpcERyYXdNb2RlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5UUklBTkdMRV9GQU4pIHtcclxuICAgICAgICAgICAgbWVzaC5nZW9tZXRyeSA9IHRvVHJpYW5nbGVzRHJhd01vZGUobWVzaC5nZW9tZXRyeSwgVHJpYW5nbGVGYW5EcmF3TW9kZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLkxJTkVTKSB7XHJcbiAgICAgICAgICBtZXNoID0gbmV3IExpbmVTZWdtZW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJpbWl0aXZlLm1vZGUgPT09IFdFQkdMX0NPTlNUQU5UUy5MSU5FX1NUUklQKSB7XHJcbiAgICAgICAgICBtZXNoID0gbmV3IExpbmUoZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByaW1pdGl2ZS5tb2RlID09PSBXRUJHTF9DT05TVEFOVFMuTElORV9MT09QKSB7XHJcbiAgICAgICAgICBtZXNoID0gbmV3IExpbmVMb29wKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmltaXRpdmUubW9kZSA9PT0gV0VCR0xfQ09OU1RBTlRTLlBPSU5UUykge1xyXG4gICAgICAgICAgbWVzaCA9IG5ldyBQb2ludHMoZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUSFJFRS5HTFRGTG9hZGVyOiBQcmltaXRpdmUgbW9kZSB1bnN1cHBvcnRlZDogJyArIHByaW1pdGl2ZS5tb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhtZXNoLmdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlcykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdXBkYXRlTW9ycGhUYXJnZXRzKG1lc2gsIG1lc2hEZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWVzaC5uYW1lID0gbWVzaERlZi5uYW1lIHx8ICdtZXNoXycgKyBtZXNoSW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChnZW9tZXRyaWVzLmxlbmd0aCA+IDEpIG1lc2gubmFtZSArPSAnXycgKyBpO1xyXG5cclxuICAgICAgICBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKG1lc2gsIG1lc2hEZWYpO1xyXG5cclxuICAgICAgICBwYXJzZXIuYXNzaWduRmluYWxNYXRlcmlhbChtZXNoKTtcclxuXHJcbiAgICAgICAgbWVzaGVzLnB1c2gobWVzaCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChtZXNoZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lc2hlc1swXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGdyb3VwID0gbmV3IEdyb3VwKCk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBtZXNoZXMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICAgIGdyb3VwLmFkZChtZXNoZXNbaV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjY2FtZXJhc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjYW1lcmFJbmRleFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VEhSRUUuQ2FtZXJhPn1cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQ2FtZXJhID0gZnVuY3Rpb24gKGNhbWVyYUluZGV4KSB7XHJcbiAgICB2YXIgY2FtZXJhO1xyXG4gICAgdmFyIGNhbWVyYURlZiA9IHRoaXMuanNvbi5jYW1lcmFzW2NhbWVyYUluZGV4XTtcclxuICAgIHZhciBwYXJhbXMgPSBjYW1lcmFEZWZbY2FtZXJhRGVmLnR5cGVdO1xyXG5cclxuICAgIGlmICghcGFyYW1zKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVEhSRUUuR0xURkxvYWRlcjogTWlzc2luZyBjYW1lcmEgcGFyYW1ldGVycy4nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjYW1lcmFEZWYudHlwZSA9PT0gJ3BlcnNwZWN0aXZlJykge1xyXG4gICAgICBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoXHJcbiAgICAgICAgTWF0aFV0aWxzLnJhZFRvRGVnKHBhcmFtcy55Zm92KSxcclxuICAgICAgICBwYXJhbXMuYXNwZWN0UmF0aW8gfHwgMSxcclxuICAgICAgICBwYXJhbXMuem5lYXIgfHwgMSxcclxuICAgICAgICBwYXJhbXMuemZhciB8fCAyZTZcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoY2FtZXJhRGVmLnR5cGUgPT09ICdvcnRob2dyYXBoaWMnKSB7XHJcbiAgICAgIGNhbWVyYSA9IG5ldyBPcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgLXBhcmFtcy54bWFnLFxyXG4gICAgICAgIHBhcmFtcy54bWFnLFxyXG4gICAgICAgIHBhcmFtcy55bWFnLFxyXG4gICAgICAgIC1wYXJhbXMueW1hZyxcclxuICAgICAgICBwYXJhbXMuem5lYXIsXHJcbiAgICAgICAgcGFyYW1zLnpmYXJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2FtZXJhRGVmLm5hbWUpIGNhbWVyYS5uYW1lID0gY2FtZXJhRGVmLm5hbWU7XHJcblxyXG4gICAgYXNzaWduRXh0cmFzVG9Vc2VyRGF0YShjYW1lcmEsIGNhbWVyYURlZik7XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYW1lcmEpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNza2luc1xyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBza2luSW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XHJcbiAgICovXHJcbiAgR0xURlBhcnNlci5wcm90b3R5cGUubG9hZFNraW4gPSBmdW5jdGlvbiAoc2tpbkluZGV4KSB7XHJcbiAgICB2YXIgc2tpbkRlZiA9IHRoaXMuanNvbi5za2luc1tza2luSW5kZXhdO1xyXG5cclxuICAgIHZhciBza2luRW50cnkgPSB7IGpvaW50czogc2tpbkRlZi5qb2ludHMgfTtcclxuXHJcbiAgICBpZiAoc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShza2luRW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdldERlcGVuZGVuY3koJ2FjY2Vzc29yJywgc2tpbkRlZi5pbnZlcnNlQmluZE1hdHJpY2VzKS50aGVuKGZ1bmN0aW9uIChhY2Nlc3Nvcikge1xyXG4gICAgICBza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcyA9IGFjY2Vzc29yO1xyXG5cclxuICAgICAgcmV0dXJuIHNraW5FbnRyeTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmljYXRpb246IGh0dHBzOi8vZ2l0aHViLmNvbS9LaHJvbm9zR3JvdXAvZ2xURi90cmVlL21hc3Rlci9zcGVjaWZpY2F0aW9uLzIuMCNhbmltYXRpb25zXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuaW1hdGlvbkluZGV4XHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxBbmltYXRpb25DbGlwPn1cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkQW5pbWF0aW9uID0gZnVuY3Rpb24gKGFuaW1hdGlvbkluZGV4KSB7XHJcbiAgICB2YXIganNvbiA9IHRoaXMuanNvbjtcclxuXHJcbiAgICB2YXIgYW5pbWF0aW9uRGVmID0ganNvbi5hbmltYXRpb25zW2FuaW1hdGlvbkluZGV4XTtcclxuXHJcbiAgICB2YXIgcGVuZGluZ05vZGVzID0gW107XHJcbiAgICB2YXIgcGVuZGluZ0lucHV0QWNjZXNzb3JzID0gW107XHJcbiAgICB2YXIgcGVuZGluZ091dHB1dEFjY2Vzc29ycyA9IFtdO1xyXG4gICAgdmFyIHBlbmRpbmdTYW1wbGVycyA9IFtdO1xyXG4gICAgdmFyIHBlbmRpbmdUYXJnZXRzID0gW107XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gYW5pbWF0aW9uRGVmLmNoYW5uZWxzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgdmFyIGNoYW5uZWwgPSBhbmltYXRpb25EZWYuY2hhbm5lbHNbaV07XHJcbiAgICAgIHZhciBzYW1wbGVyID0gYW5pbWF0aW9uRGVmLnNhbXBsZXJzW2NoYW5uZWwuc2FtcGxlcl07XHJcbiAgICAgIHZhciB0YXJnZXQgPSBjaGFubmVsLnRhcmdldDtcclxuICAgICAgdmFyIG5hbWUgPSB0YXJnZXQubm9kZSAhPT0gdW5kZWZpbmVkID8gdGFyZ2V0Lm5vZGUgOiB0YXJnZXQuaWQ7IC8vIE5PVEU6IHRhcmdldC5pZCBpcyBkZXByZWNhdGVkLlxyXG4gICAgICB2YXIgaW5wdXQgPVxyXG4gICAgICAgICAgICBhbmltYXRpb25EZWYucGFyYW1ldGVycyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgPyBhbmltYXRpb25EZWYucGFyYW1ldGVyc1tzYW1wbGVyLmlucHV0XVxyXG4gICAgICAgICAgICAgIDogc2FtcGxlci5pbnB1dDtcclxuICAgICAgdmFyIG91dHB1dCA9XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICA/IGFuaW1hdGlvbkRlZi5wYXJhbWV0ZXJzW3NhbXBsZXIub3V0cHV0XVxyXG4gICAgICAgICAgICAgIDogc2FtcGxlci5vdXRwdXQ7XHJcblxyXG4gICAgICBwZW5kaW5nTm9kZXMucHVzaCh0aGlzLmdldERlcGVuZGVuY3koJ25vZGUnLCBuYW1lKSk7XHJcbiAgICAgIHBlbmRpbmdJbnB1dEFjY2Vzc29ycy5wdXNoKHRoaXMuZ2V0RGVwZW5kZW5jeSgnYWNjZXNzb3InLCBpbnB1dCkpO1xyXG4gICAgICBwZW5kaW5nT3V0cHV0QWNjZXNzb3JzLnB1c2godGhpcy5nZXREZXBlbmRlbmN5KCdhY2Nlc3NvcicsIG91dHB1dCkpO1xyXG4gICAgICBwZW5kaW5nU2FtcGxlcnMucHVzaChzYW1wbGVyKTtcclxuICAgICAgcGVuZGluZ1RhcmdldHMucHVzaCh0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgIFByb21pc2UuYWxsKHBlbmRpbmdOb2RlcyksXHJcbiAgICAgIFByb21pc2UuYWxsKHBlbmRpbmdJbnB1dEFjY2Vzc29ycyksXHJcbiAgICAgIFByb21pc2UuYWxsKHBlbmRpbmdPdXRwdXRBY2Nlc3NvcnMpLFxyXG4gICAgICBQcm9taXNlLmFsbChwZW5kaW5nU2FtcGxlcnMpLFxyXG4gICAgICBQcm9taXNlLmFsbChwZW5kaW5nVGFyZ2V0cyksXHJcbiAgICBdKS50aGVuKGZ1bmN0aW9uIChkZXBlbmRlbmNpZXMpIHtcclxuICAgICAgdmFyIG5vZGVzID0gZGVwZW5kZW5jaWVzWzBdO1xyXG4gICAgICB2YXIgaW5wdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbMV07XHJcbiAgICAgIHZhciBvdXRwdXRBY2Nlc3NvcnMgPSBkZXBlbmRlbmNpZXNbMl07XHJcbiAgICAgIHZhciBzYW1wbGVycyA9IGRlcGVuZGVuY2llc1szXTtcclxuICAgICAgdmFyIHRhcmdldHMgPSBkZXBlbmRlbmNpZXNbNF07XHJcblxyXG4gICAgICB2YXIgdHJhY2tzID0gW107XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBub2Rlcy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgICB2YXIgaW5wdXRBY2Nlc3NvciA9IGlucHV0QWNjZXNzb3JzW2ldO1xyXG4gICAgICAgIHZhciBvdXRwdXRBY2Nlc3NvciA9IG91dHB1dEFjY2Vzc29yc1tpXTtcclxuICAgICAgICB2YXIgc2FtcGxlciA9IHNhbXBsZXJzW2ldO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0YXJnZXRzW2ldO1xyXG5cclxuICAgICAgICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgbm9kZS51cGRhdGVNYXRyaXgoKTtcclxuICAgICAgICBub2RlLm1hdHJpeEF1dG9VcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgVHlwZWRLZXlmcmFtZVRyYWNrO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKFBBVEhfUFJPUEVSVElFU1t0YXJnZXQucGF0aF0pIHtcclxuICAgICAgICAgIGNhc2UgUEFUSF9QUk9QRVJUSUVTLndlaWdodHM6XHJcbiAgICAgICAgICAgIFR5cGVkS2V5ZnJhbWVUcmFjayA9IE51bWJlcktleWZyYW1lVHJhY2s7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIGNhc2UgUEFUSF9QUk9QRVJUSUVTLnJvdGF0aW9uOlxyXG4gICAgICAgICAgICBUeXBlZEtleWZyYW1lVHJhY2sgPSBRdWF0ZXJuaW9uS2V5ZnJhbWVUcmFjaztcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSBQQVRIX1BST1BFUlRJRVMucG9zaXRpb246XHJcbiAgICAgICAgICBjYXNlIFBBVEhfUFJPUEVSVElFUy5zY2FsZTpcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIFR5cGVkS2V5ZnJhbWVUcmFjayA9IFZlY3RvcktleWZyYW1lVHJhY2s7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRhcmdldE5hbWUgPSBub2RlLm5hbWUgPyBub2RlLm5hbWUgOiBub2RlLnV1aWQ7XHJcblxyXG4gICAgICAgIHZhciBpbnRlcnBvbGF0aW9uID1cclxuICAgICAgICAgICAgICBzYW1wbGVyLmludGVycG9sYXRpb24gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBJTlRFUlBPTEFUSU9OW3NhbXBsZXIuaW50ZXJwb2xhdGlvbl1cclxuICAgICAgICAgICAgICAgIDogSW50ZXJwb2xhdGVMaW5lYXI7XHJcblxyXG4gICAgICAgIHZhciB0YXJnZXROYW1lcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoUEFUSF9QUk9QRVJUSUVTW3RhcmdldC5wYXRoXSA9PT0gUEFUSF9QUk9QRVJUSUVTLndlaWdodHMpIHtcclxuICAgICAgICAgIC8vIE5vZGUgbWF5IGJlIGEgR3JvdXAgKGdsVEYgbWVzaCB3aXRoIHNldmVyYWwgcHJpbWl0aXZlcykgb3IgYSBNZXNoLlxyXG4gICAgICAgICAgbm9kZS50cmF2ZXJzZShmdW5jdGlvbiAob2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QuaXNNZXNoID09PSB0cnVlICYmIG9iamVjdC5tb3JwaFRhcmdldEluZmx1ZW5jZXMpIHtcclxuICAgICAgICAgICAgICB0YXJnZXROYW1lcy5wdXNoKG9iamVjdC5uYW1lID8gb2JqZWN0Lm5hbWUgOiBvYmplY3QudXVpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YXJnZXROYW1lcy5wdXNoKHRhcmdldE5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG91dHB1dEFycmF5ID0gb3V0cHV0QWNjZXNzb3IuYXJyYXk7XHJcblxyXG4gICAgICAgIGlmIChvdXRwdXRBY2Nlc3Nvci5ub3JtYWxpemVkKSB7XHJcbiAgICAgICAgICB2YXIgc2NhbGU7XHJcblxyXG4gICAgICAgICAgaWYgKG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09PSBJbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc2NhbGUgPSAxIC8gMTI3O1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChvdXRwdXRBcnJheS5jb25zdHJ1Y3RvciA9PT0gVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzY2FsZSA9IDEgLyAyNTU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09IEludDE2QXJyYXkpIHtcclxuICAgICAgICAgICAgc2NhbGUgPSAxIC8gMzI3Njc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG91dHB1dEFycmF5LmNvbnN0cnVjdG9yID09PSBVaW50MTZBcnJheSkge1xyXG4gICAgICAgICAgICBzY2FsZSA9IDEgLyA2NTUzNTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVEhSRUUuR0xURkxvYWRlcjogVW5zdXBwb3J0ZWQgb3V0cHV0IGFjY2Vzc29yIGNvbXBvbmVudCB0eXBlLicpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciBzY2FsZWQgPSBuZXcgRmxvYXQzMkFycmF5KG91dHB1dEFycmF5Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gb3V0cHV0QXJyYXkubGVuZ3RoOyBqIDwgamw7IGorKykge1xyXG4gICAgICAgICAgICBzY2FsZWRbal0gPSBvdXRwdXRBcnJheVtqXSAqIHNjYWxlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG91dHB1dEFycmF5ID0gc2NhbGVkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsID0gdGFyZ2V0TmFtZXMubGVuZ3RoOyBqIDwgamw7IGorKykge1xyXG4gICAgICAgICAgdmFyIHRyYWNrID0gbmV3IFR5cGVkS2V5ZnJhbWVUcmFjayhcclxuICAgICAgICAgICAgdGFyZ2V0TmFtZXNbal0gKyAnLicgKyBQQVRIX1BST1BFUlRJRVNbdGFyZ2V0LnBhdGhdLFxyXG4gICAgICAgICAgICBpbnB1dEFjY2Vzc29yLmFycmF5LFxyXG4gICAgICAgICAgICBvdXRwdXRBcnJheSxcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGlvblxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAvLyBPdmVycmlkZSBpbnRlcnBvbGF0aW9uIHdpdGggY3VzdG9tIGZhY3RvcnkgbWV0aG9kLlxyXG4gICAgICAgICAgaWYgKHNhbXBsZXIuaW50ZXJwb2xhdGlvbiA9PT0gJ0NVQklDU1BMSU5FJykge1xyXG4gICAgICAgICAgICB0cmFjay5jcmVhdGVJbnRlcnBvbGFudCA9IGZ1bmN0aW9uIEludGVycG9sYW50RmFjdG9yeU1ldGhvZEdMVEZDdWJpY1NwbGluZShyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAvLyBBIENVQklDU1BMSU5FIGtleWZyYW1lIGluIGdsVEYgaGFzIHRocmVlIG91dHB1dCB2YWx1ZXMgZm9yIGVhY2ggaW5wdXQgdmFsdWUsXHJcbiAgICAgICAgICAgICAgLy8gcmVwcmVzZW50aW5nIGluVGFuZ2VudCwgc3BsaW5lVmVydGV4LCBhbmQgb3V0VGFuZ2VudC4gQXMgYSByZXN1bHQsIHRyYWNrLmdldFZhbHVlU2l6ZSgpXHJcbiAgICAgICAgICAgICAgLy8gbXVzdCBiZSBkaXZpZGVkIGJ5IHRocmVlIHRvIGdldCB0aGUgaW50ZXJwb2xhbnQncyBzYW1wbGVTaXplIGFyZ3VtZW50LlxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gbmV3IEdMVEZDdWJpY1NwbGluZUludGVycG9sYW50KFxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcyxcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRWYWx1ZVNpemUoKSAvIDMsXHJcbiAgICAgICAgICAgICAgICByZXN1bHRcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gTWFyayBhcyBDVUJJQ1NQTElORS4gYHRyYWNrLmdldEludGVycG9sYXRpb24oKWAgZG9lc24ndCBzdXBwb3J0IGN1c3RvbSBpbnRlcnBvbGFudHMuXHJcbiAgICAgICAgICAgIHRyYWNrLmNyZWF0ZUludGVycG9sYW50LmlzSW50ZXJwb2xhbnRGYWN0b3J5TWV0aG9kR0xURkN1YmljU3BsaW5lID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgbmFtZSA9IGFuaW1hdGlvbkRlZi5uYW1lID8gYW5pbWF0aW9uRGVmLm5hbWUgOiAnYW5pbWF0aW9uXycgKyBhbmltYXRpb25JbmRleDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uQ2xpcChuYW1lLCB1bmRlZmluZWQsIHRyYWNrcyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjbm9kZXMtYW5kLWhpZXJhcmNoeVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdDNEPn1cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkTm9kZSA9IGZ1bmN0aW9uIChub2RlSW5kZXgpIHtcclxuICAgIHZhciBqc29uID0gdGhpcy5qc29uO1xyXG4gICAgdmFyIGV4dGVuc2lvbnMgPSB0aGlzLmV4dGVuc2lvbnM7XHJcbiAgICB2YXIgcGFyc2VyID0gdGhpcztcclxuXHJcbiAgICB2YXIgbWVzaFJlZmVyZW5jZXMgPSBqc29uLm1lc2hSZWZlcmVuY2VzO1xyXG4gICAgdmFyIG1lc2hVc2VzID0ganNvbi5tZXNoVXNlcztcclxuXHJcbiAgICB2YXIgbm9kZURlZiA9IGpzb24ubm9kZXNbbm9kZUluZGV4XTtcclxuXHJcbiAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHBlbmRpbmcgPSBbXTtcclxuXHJcbiAgICAgIGlmIChub2RlRGVmLm1lc2ggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICAgIHBhcnNlci5nZXREZXBlbmRlbmN5KCdtZXNoJywgbm9kZURlZi5tZXNoKS50aGVuKGZ1bmN0aW9uIChtZXNoKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lc2hSZWZlcmVuY2VzW25vZGVEZWYubWVzaF0gPiAxKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGluc3RhbmNlTnVtID0gbWVzaFVzZXNbbm9kZURlZi5tZXNoXSsrO1xyXG5cclxuICAgICAgICAgICAgICBub2RlID0gbWVzaC5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgIG5vZGUubmFtZSArPSAnX2luc3RhbmNlXycgKyBpbnN0YW5jZU51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBub2RlID0gbWVzaDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2VpZ2h0cyBhcmUgcHJvdmlkZWQgb24gdGhlIG5vZGUsIG92ZXJyaWRlIHdlaWdodHMgb24gdGhlIG1lc2guXHJcbiAgICAgICAgICAgIGlmIChub2RlRGVmLndlaWdodHMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIG5vZGUudHJhdmVyc2UoZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgICAgICAgIGlmICghby5pc01lc2gpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBub2RlRGVmLndlaWdodHMubGVuZ3RoOyBpIDwgaWw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBvLm1vcnBoVGFyZ2V0SW5mbHVlbmNlc1tpXSA9IG5vZGVEZWYud2VpZ2h0c1tpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChub2RlRGVmLmNhbWVyYSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcGVuZGluZy5wdXNoKHBhcnNlci5nZXREZXBlbmRlbmN5KCdjYW1lcmEnLCBub2RlRGVmLmNhbWVyYSkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgbm9kZURlZi5leHRlbnNpb25zICYmXHJcbiAgICAgICAgbm9kZURlZi5leHRlbnNpb25zW0VYVEVOU0lPTlMuS0hSX0xJR0hUU19QVU5DVFVBTF0gJiZcclxuICAgICAgICBub2RlRGVmLmV4dGVuc2lvbnNbRVhURU5TSU9OUy5LSFJfTElHSFRTX1BVTkNUVUFMXS5saWdodCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHBlbmRpbmcucHVzaChcclxuICAgICAgICAgIHBhcnNlci5nZXREZXBlbmRlbmN5KCdsaWdodCcsIG5vZGVEZWYuZXh0ZW5zaW9uc1tFWFRFTlNJT05TLktIUl9MSUdIVFNfUFVOQ1RVQUxdLmxpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwZW5kaW5nKTtcclxuICAgIH0pKCkudGhlbihmdW5jdGlvbiAob2JqZWN0cykge1xyXG4gICAgICB2YXIgbm9kZTtcclxuXHJcbiAgICAgIC8vIC5pc0JvbmUgaXNuJ3QgaW4gZ2xURiBzcGVjLiBTZWUgLm1hcmtEZWZzXHJcbiAgICAgIGlmIChub2RlRGVmLmlzQm9uZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIG5vZGUgPSBuZXcgQm9uZSgpO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIG5vZGUgPSBuZXcgR3JvdXAoKTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3RzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgIG5vZGUgPSBvYmplY3RzWzBdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5vZGUgPSBuZXcgT2JqZWN0M0QoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5vZGUgIT09IG9iamVjdHNbMF0pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBvYmplY3RzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgICAgIG5vZGUuYWRkKG9iamVjdHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5vZGVEZWYubmFtZSkge1xyXG4gICAgICAgIG5vZGUudXNlckRhdGEubmFtZSA9IG5vZGVEZWYubmFtZTtcclxuICAgICAgICBub2RlLm5hbWUgPSBQcm9wZXJ0eUJpbmRpbmcuc2FuaXRpemVOb2RlTmFtZShub2RlRGVmLm5hbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhc3NpZ25FeHRyYXNUb1VzZXJEYXRhKG5vZGUsIG5vZGVEZWYpO1xyXG5cclxuICAgICAgaWYgKG5vZGVEZWYuZXh0ZW5zaW9ucykgYWRkVW5rbm93bkV4dGVuc2lvbnNUb1VzZXJEYXRhKGV4dGVuc2lvbnMsIG5vZGUsIG5vZGVEZWYpO1xyXG5cclxuICAgICAgaWYgKG5vZGVEZWYubWF0cml4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgbWF0cml4ID0gbmV3IE1hdHJpeDQoKTtcclxuICAgICAgICBtYXRyaXguZnJvbUFycmF5KG5vZGVEZWYubWF0cml4KTtcclxuICAgICAgICBub2RlLmFwcGx5TWF0cml4NChtYXRyaXgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChub2RlRGVmLnRyYW5zbGF0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIG5vZGUucG9zaXRpb24uZnJvbUFycmF5KG5vZGVEZWYudHJhbnNsYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGVEZWYucm90YXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgbm9kZS5xdWF0ZXJuaW9uLmZyb21BcnJheShub2RlRGVmLnJvdGF0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlRGVmLnNjYWxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIG5vZGUuc2NhbGUuZnJvbUFycmF5KG5vZGVEZWYuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpY2F0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vS2hyb25vc0dyb3VwL2dsVEYvdHJlZS9tYXN0ZXIvc3BlY2lmaWNhdGlvbi8yLjAjc2NlbmVzXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjZW5lSW5kZXhcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VwPn1cclxuICAgKi9cclxuICBHTFRGUGFyc2VyLnByb3RvdHlwZS5sb2FkU2NlbmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gc2NlbmUgbm9kZSBoaWVyYWNoeSBidWlsZGVyXHJcblxyXG4gICAgZnVuY3Rpb24gYnVpbGROb2RlSGllcmFjaHkobm9kZUlkLCBwYXJlbnRPYmplY3QsIGpzb24sIHBhcnNlcikge1xyXG4gICAgICB2YXIgbm9kZURlZiA9IGpzb24ubm9kZXNbbm9kZUlkXTtcclxuXHJcbiAgICAgIHJldHVybiBwYXJzZXJcclxuICAgICAgICAuZ2V0RGVwZW5kZW5jeSgnbm9kZScsIG5vZGVJZClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgICAgICAgaWYgKG5vZGVEZWYuc2tpbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbm9kZTtcclxuXHJcbiAgICAgICAgICAvLyBidWlsZCBza2VsZXRvbiBoZXJlIGFzIHdlbGxcclxuXHJcbiAgICAgICAgICB2YXIgc2tpbkVudHJ5O1xyXG5cclxuICAgICAgICAgIHJldHVybiBwYXJzZXJcclxuICAgICAgICAgICAgLmdldERlcGVuZGVuY3koJ3NraW4nLCBub2RlRGVmLnNraW4pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChza2luKSB7XHJcbiAgICAgICAgICAgICAgc2tpbkVudHJ5ID0gc2tpbjtcclxuXHJcbiAgICAgICAgICAgICAgdmFyIHBlbmRpbmdKb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlsID0gc2tpbkVudHJ5LmpvaW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nSm9pbnRzLnB1c2gocGFyc2VyLmdldERlcGVuZGVuY3koJ25vZGUnLCBza2luRW50cnkuam9pbnRzW2ldKSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocGVuZGluZ0pvaW50cyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChqb2ludE5vZGVzKSB7XHJcbiAgICAgICAgICAgICAgbm9kZS50cmF2ZXJzZShmdW5jdGlvbiAobWVzaCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNoLmlzTWVzaCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBib25lcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvbmVJbnZlcnNlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqbCA9IGpvaW50Tm9kZXMubGVuZ3RoOyBqIDwgamw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgam9pbnROb2RlID0gam9pbnROb2Rlc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChqb2ludE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBib25lcy5wdXNoKGpvaW50Tm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXQgPSBuZXcgTWF0cml4NCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2tpbkVudHJ5LmludmVyc2VCaW5kTWF0cmljZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWF0LmZyb21BcnJheShza2luRW50cnkuaW52ZXJzZUJpbmRNYXRyaWNlcy5hcnJheSwgaiAqIDE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvbmVJbnZlcnNlcy5wdXNoKG1hdCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJ1RIUkVFLkdMVEZMb2FkZXI6IEpvaW50IFwiJXNcIiBjb3VsZCBub3QgYmUgZm91bmQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHNraW5FbnRyeS5qb2ludHNbal1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbWVzaC5iaW5kKG5ldyBTa2VsZXRvbihib25lcywgYm9uZUludmVyc2VzKSwgbWVzaC5tYXRyaXhXb3JsZCk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChub2RlKSB7XHJcbiAgICAgICAgICAvLyBidWlsZCBub2RlIGhpZXJhY2h5XHJcblxyXG4gICAgICAgICAgcGFyZW50T2JqZWN0LmFkZChub2RlKTtcclxuXHJcbiAgICAgICAgICB2YXIgcGVuZGluZyA9IFtdO1xyXG5cclxuICAgICAgICAgIGlmIChub2RlRGVmLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGVEZWYuY2hpbGRyZW47XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgICAgcGVuZGluZy5wdXNoKGJ1aWxkTm9kZUhpZXJhY2h5KGNoaWxkLCBub2RlLCBqc29uLCBwYXJzZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwZW5kaW5nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gbG9hZFNjZW5lKHNjZW5lSW5kZXgpIHtcclxuICAgICAgdmFyIGpzb24gPSB0aGlzLmpzb247XHJcbiAgICAgIHZhciBleHRlbnNpb25zID0gdGhpcy5leHRlbnNpb25zO1xyXG4gICAgICB2YXIgc2NlbmVEZWYgPSB0aGlzLmpzb24uc2NlbmVzW3NjZW5lSW5kZXhdO1xyXG4gICAgICB2YXIgcGFyc2VyID0gdGhpcztcclxuXHJcbiAgICAgIC8vIExvYWRlciByZXR1cm5zIEdyb3VwLCBub3QgU2NlbmUuXHJcbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21yZG9vYi90aHJlZS5qcy9pc3N1ZXMvMTgzNDIjaXNzdWVjb21tZW50LTU3ODk4MTE3MlxyXG4gICAgICB2YXIgc2NlbmUgPSBuZXcgR3JvdXAoKTtcclxuICAgICAgaWYgKHNjZW5lRGVmLm5hbWUpIHNjZW5lLm5hbWUgPSBzY2VuZURlZi5uYW1lO1xyXG5cclxuICAgICAgYXNzaWduRXh0cmFzVG9Vc2VyRGF0YShzY2VuZSwgc2NlbmVEZWYpO1xyXG5cclxuICAgICAgaWYgKHNjZW5lRGVmLmV4dGVuc2lvbnMpIGFkZFVua25vd25FeHRlbnNpb25zVG9Vc2VyRGF0YShleHRlbnNpb25zLCBzY2VuZSwgc2NlbmVEZWYpO1xyXG5cclxuICAgICAgdmFyIG5vZGVJZHMgPSBzY2VuZURlZi5ub2RlcyB8fCBbXTtcclxuXHJcbiAgICAgIHZhciBwZW5kaW5nID0gW107XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBub2RlSWRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHtcclxuICAgICAgICBwZW5kaW5nLnB1c2goYnVpbGROb2RlSGllcmFjaHkobm9kZUlkc1tpXSwgc2NlbmUsIGpzb24sIHBhcnNlcikpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocGVuZGluZykudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHNjZW5lO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSkoKTtcclxuXHJcbiAgcmV0dXJuIEdMVEZMb2FkZXI7XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBHTFRGTG9hZGVyIH07XHJcbiIsIi8vIEdsb2JhbCBpbXBvcnRzIC1cclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5pbXBvcnQgVFdFRU4gZnJvbSAnQHR3ZWVuanMvdHdlZW4uanMnO1xyXG5cclxuLy8gTG9jYWwgaW1wb3J0cyAtXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vY29tcG9uZW50cy9yZW5kZXJlcic7XHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnLi9jb21wb25lbnRzL2NhbWVyYSc7XHJcbmltcG9ydCBMaWdodCBmcm9tICcuL2NvbXBvbmVudHMvbGlnaHQnO1xyXG5pbXBvcnQgQ29udHJvbHMgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2xzJztcclxuaW1wb3J0IEdlb21ldHJ5IGZyb20gJy4vY29tcG9uZW50cy9nZW9tZXRyeSc7XHJcblxyXG4vLyBIZWxwZXJzXHJcbmltcG9ydCBTdGF0cyBmcm9tICcuL2hlbHBlcnMvc3RhdHMnO1xyXG5pbXBvcnQgTWVzaEhlbHBlciBmcm9tICcuL2hlbHBlcnMvbWVzaEhlbHBlcic7XHJcblxyXG4vLyBNb2RlbFxyXG5pbXBvcnQgVGV4dHVyZSBmcm9tICcuL21vZGVsL3RleHR1cmUnO1xyXG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbC9tb2RlbCc7XHJcblxyXG4vLyBNYW5hZ2Vyc1xyXG5pbXBvcnQgSW50ZXJhY3Rpb24gZnJvbSAnLi9tYW5hZ2Vycy9pbnRlcmFjdGlvbic7XHJcbmltcG9ydCBEYXRHVUkgZnJvbSAnLi9tYW5hZ2Vycy9kYXRHVUknO1xyXG5cclxuLy8gZGF0YVxyXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vLi4vZGF0YS9jb25maWcnO1xyXG4vLyAtLSBFbmQgb2YgaW1wb3J0c1xyXG5cclxuLy8gVGhpcyBjbGFzcyBpbnN0YW50aWF0ZXMgYW5kIHRpZXMgYWxsIG9mIHRoZSBjb21wb25lbnRzIHRvZ2V0aGVyLCBzdGFydHMgdGhlIGxvYWRpbmcgcHJvY2VzcyBhbmQgcmVuZGVycyB0aGUgbWFpbiBsb29wXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG4gICAgLy8gU2V0IGNvbnRhaW5lciBwcm9wZXJ0eSB0byBjb250YWluZXIgZWxlbWVudFxyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblxyXG4gICAgLy8gU3RhcnQgVGhyZWUgY2xvY2tcclxuICAgIHRoaXMuY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcclxuXHJcbiAgICAvLyBNYWluIHNjZW5lIGNyZWF0aW9uXHJcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcbiAgICB0aGlzLnNjZW5lLmZvZyA9IG5ldyBUSFJFRS5Gb2dFeHAyKENvbmZpZy5mb2cuY29sb3IsIENvbmZpZy5mb2cubmVhcik7XHJcblxyXG4gICAgLy8gR2V0IERldmljZSBQaXhlbCBSYXRpbyBmaXJzdCBmb3IgcmV0aW5hXHJcbiAgICBpZih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbykge1xyXG4gICAgICBDb25maWcuZHByID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiByZW5kZXJlciBjb25zdHJ1Y3RvclxyXG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih0aGlzLnNjZW5lLCBjb250YWluZXIpO1xyXG5cclxuICAgIC8vIENvbXBvbmVudHMgaW5zdGFudGlhdGlvbnNcclxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLnJlbmRlcmVyLnRocmVlUmVuZGVyZXIpO1xyXG4gICAgdGhpcy5jb250cm9scyA9IG5ldyBDb250cm9scyh0aGlzLmNhbWVyYS50aHJlZUNhbWVyYSwgY29udGFpbmVyKTtcclxuICAgIHRoaXMubGlnaHQgPSBuZXcgTGlnaHQodGhpcy5zY2VuZSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuZCBwbGFjZSBsaWdodHMgaW4gc2NlbmVcclxuICAgIGNvbnN0IGxpZ2h0cyA9IFsnYW1iaWVudCcsICdkaXJlY3Rpb25hbCcsICdwb2ludCcsICdoZW1pJ107XHJcbiAgICBsaWdodHMuZm9yRWFjaCgobGlnaHQpID0+IHRoaXMubGlnaHQucGxhY2UobGlnaHQpKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW5kIHBsYWNlIGdlbyBpbiBzY2VuZVxyXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBHZW9tZXRyeSh0aGlzLnNjZW5lKTtcclxuICAgIHRoaXMuZ2VvbWV0cnkubWFrZSgncGxhbmUnKSgxNTAsIDE1MCwgMTAsIDEwKTtcclxuICAgIHRoaXMuZ2VvbWV0cnkucGxhY2UoWzAsIC0yMCwgMF0sIFtNYXRoLlBJIC8gMiwgMCwgMF0pO1xyXG5cclxuICAgIC8vIFNldCB1cCByU3RhdHMgaWYgZGV2IGVudmlyb25tZW50XHJcbiAgICBpZihDb25maWcuaXNEZXYgJiYgQ29uZmlnLmlzU2hvd2luZ1N0YXRzKSB7XHJcbiAgICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHModGhpcy5yZW5kZXJlcik7XHJcbiAgICAgIHRoaXMuc3RhdHMuc2V0VXAoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgdXAgZ3VpXHJcbiAgICBpZiAoQ29uZmlnLmlzRGV2KSB7XHJcbiAgICAgIHRoaXMuZ3VpID0gbmV3IERhdEdVSSh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluc3RhbnRpYXRlIHRleHR1cmUgY2xhc3NcclxuICAgIHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKCk7XHJcblxyXG4gICAgLy8gU3RhcnQgbG9hZGluZyB0aGUgdGV4dHVyZXMgYW5kIHRoZW4gZ28gb24gdG8gbG9hZCB0aGUgbW9kZWwgYWZ0ZXIgdGhlIHRleHR1cmUgUHJvbWlzZXMgaGF2ZSByZXNvbHZlZFxyXG4gICAgdGhpcy50ZXh0dXJlLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5tYW5hZ2VyID0gbmV3IFRIUkVFLkxvYWRpbmdNYW5hZ2VyKCk7XHJcblxyXG4gICAgICAvLyBUZXh0dXJlcyBsb2FkZWQsIGxvYWQgbW9kZWxcclxuICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNb2RlbCh0aGlzLnNjZW5lLCB0aGlzLm1hbmFnZXIsIHRoaXMudGV4dHVyZS50ZXh0dXJlcyk7XHJcbiAgICAgIHRoaXMubW9kZWwubG9hZChDb25maWcubW9kZWxzW0NvbmZpZy5tb2RlbC5zZWxlY3RlZF0udHlwZSk7XHJcblxyXG4gICAgICAvLyBvblByb2dyZXNzIGNhbGxiYWNrXHJcbiAgICAgIHRoaXMubWFuYWdlci5vblByb2dyZXNzID0gKGl0ZW0sIGxvYWRlZCwgdG90YWwpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtpdGVtfTogJHtsb2FkZWR9ICR7dG90YWx9YCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBBbGwgbG9hZGVycyBkb25lIG5vd1xyXG4gICAgICB0aGlzLm1hbmFnZXIub25Mb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFNldCB1cCBpbnRlcmFjdGlvbiBtYW5hZ2VyIHdpdGggdGhlIGFwcCBub3cgdGhhdCB0aGUgbW9kZWwgaXMgZmluaXNoZWQgbG9hZGluZ1xyXG4gICAgICAgIG5ldyBJbnRlcmFjdGlvbih0aGlzLnJlbmRlcmVyLnRocmVlUmVuZGVyZXIsIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLnRocmVlQ2FtZXJhLCB0aGlzLmNvbnRyb2xzLnRocmVlQ29udHJvbHMpO1xyXG5cclxuICAgICAgICAvLyBBZGQgZGF0LkdVSSBjb250cm9scyBpZiBkZXZcclxuICAgICAgICBpZihDb25maWcuaXNEZXYpIHtcclxuICAgICAgICAgIHRoaXMubWVzaEhlbHBlciA9IG5ldyBNZXNoSGVscGVyKHRoaXMuc2NlbmUsIHRoaXMubW9kZWwub2JqKTtcclxuICAgICAgICAgIGlmIChDb25maWcubWVzaC5lbmFibGVIZWxwZXIpIHRoaXMubWVzaEhlbHBlci5lbmFibGUoKTtcclxuXHJcbiAgICAgICAgICB0aGlzLmd1aS5sb2FkKHRoaXMsIHRoaXMubW9kZWwub2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgaXMgbm93IGZ1bGx5IGxvYWRlZFxyXG4gICAgICAgIENvbmZpZy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignI2xvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3RhcnQgcmVuZGVyIHdoaWNoIGRvZXMgbm90IHdhaXQgZm9yIG1vZGVsIGZ1bGx5IGxvYWRlZFxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIC8vIFJlbmRlciByU3RhdHMgaWYgRGV2XHJcbiAgICBpZihDb25maWcuaXNEZXYgJiYgQ29uZmlnLmlzU2hvd2luZ1N0YXRzKSB7XHJcbiAgICAgIFN0YXRzLnN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsbCByZW5kZXIgZnVuY3Rpb24gYW5kIHBhc3MgaW4gY3JlYXRlZCBzY2VuZSBhbmQgY2FtZXJhXHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYS50aHJlZUNhbWVyYSk7XHJcblxyXG4gICAgLy8gclN0YXRzIGhhcyBmaW5pc2hlZCBkZXRlcm1pbmluZyByZW5kZXIgY2FsbCBub3dcclxuICAgIGlmKENvbmZpZy5pc0RldiAmJiBDb25maWcuaXNTaG93aW5nU3RhdHMpIHtcclxuICAgICAgU3RhdHMuZW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVsdGEgdGltZSBpcyBzb21ldGltZXMgbmVlZGVkIGZvciBjZXJ0YWluIHVwZGF0ZXNcclxuICAgIC8vY29uc3QgZGVsdGEgPSB0aGlzLmNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgLy8gQ2FsbCBhbnkgdmVuZG9yIG9yIG1vZHVsZSBmcmFtZSB1cGRhdGVzIGhlcmVcclxuICAgIFRXRUVOLnVwZGF0ZSgpO1xyXG4gICAgdGhpcy5jb250cm9scy50aHJlZUNvbnRyb2xzLnVwZGF0ZSgpO1xyXG5cclxuICAgIC8vIFJBRlxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyLmJpbmQodGhpcykpOyAvLyBCaW5kIHRoZSBtYWluIGNsYXNzIGluc3RlYWQgb2Ygd2luZG93IG9iamVjdFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2RhdGEvY29uZmlnJztcclxuXHJcbi8vIE1hbmFnZXMgYWxsIGRhdC5HVUkgaW50ZXJhY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdEdVSSB7XHJcbiAgY29uc3RydWN0b3IobWFpbikge1xyXG4gICAgdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG5cclxuICAgIHRoaXMuY2FtZXJhID0gbWFpbi5jYW1lcmEudGhyZWVDYW1lcmE7XHJcbiAgICB0aGlzLmNvbnRyb2xzID0gbWFpbi5jb250cm9scy50aHJlZUNvbnRyb2xzO1xyXG4gICAgdGhpcy5saWdodCA9IG1haW4ubGlnaHQ7XHJcbiAgICB0aGlzLnNjZW5lID0gbWFpbi5zY2VuZTtcclxuXHJcbiAgICB0aGlzLm1vZGVsID0gbnVsbDtcclxuICAgIHRoaXMubWVzaEhlbHBlciA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBsb2FkKG1haW4sIG1lc2gpIHtcclxuICAgIC8qIEdsb2JhbCAqL1xyXG4gICAgLy90aGlzLmd1aS5jbG9zZSgpO1xyXG5cclxuICAgIHRoaXMubW9kZWwgPSBtYWluLm1vZGVsO1xyXG4gICAgdGhpcy5tZXNoSGVscGVyID0gbWFpbi5tZXNoSGVscGVyO1xyXG5cclxuICAgIC8qIENhbWVyYSAqL1xyXG4gICAgY29uc3QgY2FtZXJhRm9sZGVyID0gdGhpcy5ndWkuYWRkRm9sZGVyKCdDYW1lcmEnKTtcclxuICAgIGNvbnN0IGNhbWVyYUZPVkd1aSA9IGNhbWVyYUZvbGRlci5hZGQoQ29uZmlnLmNhbWVyYSwgJ2ZvdicsIDAsIDE4MCkubmFtZSgnQ2FtZXJhIEZPVicpO1xyXG4gICAgY2FtZXJhRk9WR3VpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5jYW1lcmEuZm92ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGNhbWVyYUZPVkd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2FtZXJhQXNwZWN0R3VpID0gY2FtZXJhRm9sZGVyLmFkZChDb25maWcuY2FtZXJhLCAnYXNwZWN0JywgMCwgNCkubmFtZSgnQ2FtZXJhIEFzcGVjdCcpO1xyXG4gICAgY2FtZXJhQXNwZWN0R3VpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGNhbWVyYUFzcGVjdEd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2FtZXJhRm9nQ29sb3JHdWkgPSBjYW1lcmFGb2xkZXIuYWRkQ29sb3IoQ29uZmlnLmZvZywgJ2NvbG9yJykubmFtZSgnRm9nIENvbG9yJyk7XHJcbiAgICBjYW1lcmFGb2dDb2xvckd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5zY2VuZS5mb2cuY29sb3Iuc2V0SGV4KHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2FtZXJhRm9nTmVhckd1aSA9IGNhbWVyYUZvbGRlci5hZGQoQ29uZmlnLmZvZywgJ25lYXInLCAwLjAwMCwgMC4wMTApLm5hbWUoJ0ZvZyBOZWFyJyk7XHJcbiAgICBjYW1lcmFGb2dOZWFyR3VpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5mb2cuZGVuc2l0eSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBjYW1lcmFGb2dOZWFyR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qIENvbnRyb2xzICovXHJcbiAgICBjb25zdCBjb250cm9sc0ZvbGRlciA9IHRoaXMuZ3VpLmFkZEZvbGRlcignQ29udHJvbHMnKTtcclxuICAgIGNvbnRyb2xzRm9sZGVyLmFkZChDb25maWcuY29udHJvbHMsICdhdXRvUm90YXRlJykubmFtZSgnQXV0byBSb3RhdGUnKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNvbnRyb2xzQXV0b1JvdGF0ZVNwZWVkR3VpID0gY29udHJvbHNGb2xkZXIuYWRkKENvbmZpZy5jb250cm9scywgJ2F1dG9Sb3RhdGVTcGVlZCcsIC0xLCAxKS5uYW1lKCdSb3RhdGlvbiBTcGVlZCcpO1xyXG4gICAgY29udHJvbHNBdXRvUm90YXRlU3BlZWRHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZVNwZWVkID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnRyb2xzQXV0b1JvdGF0ZVNwZWVkR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8qIE1vZGVsICovXHJcbiAgICBjb25zdCBtb2RlbEZvbGRlciA9IHRoaXMuZ3VpLmFkZEZvbGRlcignTW9kZWwnKTtcclxuICAgIG1vZGVsRm9sZGVyLmFkZChDb25maWcubW9kZWwsICd0eXBlJywgWy4uLkNvbmZpZy5tb2RlbC5pbml0aWFsVHlwZXNdKS5uYW1lKCdTZWxlY3QgTW9kZWwnKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKENvbmZpZy5tZXNoLmVuYWJsZUhlbHBlcilcclxuICAgICAgICAgIHRoaXMubWVzaEhlbHBlci5kaXNhYmxlKCk7XHJcblxyXG4gICAgICAgIENvbmZpZy5tb2RlbC5zZWxlY3RlZCA9IENvbmZpZy5tb2RlbC5pbml0aWFsVHlwZXMuaW5kZXhPZih2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy51bmxvYWQoKTtcclxuICAgICAgICB0aGlzLm1vZGVsLnVubG9hZCgpO1xyXG4gICAgICAgIHRoaXMubW9kZWwubG9hZCh2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIE1lc2ggKi9cclxuICAgIGNvbnN0IG1lc2hGb2xkZXIgPSB0aGlzLmd1aS5hZGRGb2xkZXIoJ01lc2gnKTtcclxuICAgIG1lc2hGb2xkZXIuYWRkKENvbmZpZy5tZXNoLCAnZW5hYmxlSGVscGVyJywgdHJ1ZSkubmFtZSgnRW5hYmxlIEhlbHBlcnMnKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm1lc2hIZWxwZXIuZW5hYmxlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tZXNoSGVscGVyLmRpc2FibGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBtZXNoRm9sZGVyLmFkZChDb25maWcubWVzaCwgJ3RyYW5zbHVjZW50JywgdHJ1ZSkubmFtZSgnVHJhbnNsdWNlbnQnKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICBtZXNoLm1hdGVyaWFsLnRyYW5zcGFyZW50ID0gdHJ1ZTtcclxuICAgICAgICBtZXNoLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzaC5tYXRlcmlhbC5vcGFjaXR5ID0gMS4wO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIG1lc2hGb2xkZXIuYWRkKENvbmZpZy5tZXNoLCAnd2lyZWZyYW1lJywgdHJ1ZSkubmFtZSgnV2lyZWZyYW1lJykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwud2lyZWZyYW1lID0gdmFsdWU7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLyogTGlnaHRzICovXHJcbiAgICAvLyBBbWJpZW50IExpZ2h0XHJcbiAgICBjb25zdCBhbWJpZW50TGlnaHRGb2xkZXIgPSB0aGlzLmd1aS5hZGRGb2xkZXIoJ0FtYmllbnQgTGlnaHQnKTtcclxuICAgIGFtYmllbnRMaWdodEZvbGRlci5hZGQoQ29uZmlnLmFtYmllbnRMaWdodCwgJ2VuYWJsZWQnKS5uYW1lKCdFbmFibGVkJykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMubGlnaHQuYW1iaWVudExpZ2h0LnZpc2libGUgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgYW1iaWVudExpZ2h0Rm9sZGVyLmFkZENvbG9yKENvbmZpZy5hbWJpZW50TGlnaHQsICdjb2xvcicpLm5hbWUoJ0NvbG9yJykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMubGlnaHQuYW1iaWVudExpZ2h0LmNvbG9yLnNldEhleCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gRGlyZWN0aW9uYWwgTGlnaHRcclxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHRGb2xkZXIgPSB0aGlzLmd1aS5hZGRGb2xkZXIoJ0RpcmVjdGlvbmFsIExpZ2h0Jyk7XHJcbiAgICBkaXJlY3Rpb25hbExpZ2h0Rm9sZGVyLmFkZChDb25maWcuZGlyZWN0aW9uYWxMaWdodCwgJ2VuYWJsZWQnKS5uYW1lKCdFbmFibGVkJykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC52aXNpYmxlID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHRGb2xkZXIuYWRkQ29sb3IoQ29uZmlnLmRpcmVjdGlvbmFsTGlnaHQsICdjb2xvcicpLm5hbWUoJ0NvbG9yJykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5jb2xvci5zZXRIZXgodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25hbExpZ2h0SW50ZW5zaXR5R3VpID0gZGlyZWN0aW9uYWxMaWdodEZvbGRlci5hZGQoQ29uZmlnLmRpcmVjdGlvbmFsTGlnaHQsICdpbnRlbnNpdHknLCAwLCAyKS5uYW1lKCdJbnRlbnNpdHknKTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHRJbnRlbnNpdHlHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuaW50ZW5zaXR5ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHRJbnRlbnNpdHlHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvblhHdWkgPSBkaXJlY3Rpb25hbExpZ2h0Rm9sZGVyLmFkZChDb25maWcuZGlyZWN0aW9uYWxMaWdodCwgJ3gnLCAtMTAwMCwgMTAwMCkubmFtZSgnUG9zaXRpb24gWCcpO1xyXG4gICAgZGlyZWN0aW9uYWxMaWdodFBvc2l0aW9uWEd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi54ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvblhHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvbllHdWkgPSBkaXJlY3Rpb25hbExpZ2h0Rm9sZGVyLmFkZChDb25maWcuZGlyZWN0aW9uYWxMaWdodCwgJ3knLCAtMTAwMCwgMTAwMCkubmFtZSgnUG9zaXRpb24gWScpO1xyXG4gICAgZGlyZWN0aW9uYWxMaWdodFBvc2l0aW9uWUd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi55ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvbllHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvblpHdWkgPSBkaXJlY3Rpb25hbExpZ2h0Rm9sZGVyLmFkZChDb25maWcuZGlyZWN0aW9uYWxMaWdodCwgJ3onLCAtMTAwMCwgMTAwMCkubmFtZSgnUG9zaXRpb24gWicpO1xyXG4gICAgZGlyZWN0aW9uYWxMaWdodFBvc2l0aW9uWkd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi56ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGRpcmVjdGlvbmFsTGlnaHRQb3NpdGlvblpHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTaGFkb3cgTWFwXHJcbiAgICBjb25zdCBzaGFkb3dGb2xkZXIgPSB0aGlzLmd1aS5hZGRGb2xkZXIoJ1NoYWRvdyBNYXAnKTtcclxuICAgIHNoYWRvd0ZvbGRlci5hZGQoQ29uZmlnLnNoYWRvdywgJ2VuYWJsZWQnKS5uYW1lKCdFbmFibGVkJykub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5jYXN0U2hhZG93ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHNoYWRvd0ZvbGRlci5hZGQoQ29uZmlnLnNoYWRvdywgJ2hlbHBlckVuYWJsZWQnKS5uYW1lKCdIZWxwZXIgRW5hYmxlZCcpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHRIZWxwZXIudmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzaGFkb3dOZWFyR3VpID0gc2hhZG93Rm9sZGVyLmFkZChDb25maWcuc2hhZG93LCAnbmVhcicsIDAsIDQwMCkubmFtZSgnTmVhcicpO1xyXG4gICAgc2hhZG93TmVhckd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhLm5lYXIgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgc2hhZG93TmVhckd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXAuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93Lm1hcCA9IG51bGw7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodEhlbHBlci51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2hhZG93RmFyR3VpID0gc2hhZG93Rm9sZGVyLmFkZChDb25maWcuc2hhZG93LCAnZmFyJywgMCwgMTIwMCkubmFtZSgnRmFyJyk7XHJcbiAgICBzaGFkb3dGYXJHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgc2hhZG93RmFyR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93Lm1hcC5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cubWFwID0gbnVsbDtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0SGVscGVyLnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzaGFkb3dUb3BHdWkgPSBzaGFkb3dGb2xkZXIuYWRkKENvbmZpZy5zaGFkb3csICd0b3AnLCAtNDAwLCA0MDApLm5hbWUoJ1RvcCcpO1xyXG4gICAgc2hhZG93VG9wR3VpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5jYW1lcmEudG9wID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHNoYWRvd1RvcEd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXAuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93Lm1hcCA9IG51bGw7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodEhlbHBlci51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2hhZG93UmlnaHRHdWkgPSBzaGFkb3dGb2xkZXIuYWRkKENvbmZpZy5zaGFkb3csICdyaWdodCcsIC00MDAsIDQwMCkubmFtZSgnUmlnaHQnKTtcclxuICAgIHNoYWRvd1JpZ2h0R3VpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5jYW1lcmEucmlnaHQgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgc2hhZG93UmlnaHRHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cubWFwLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXAgPSBudWxsO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHRIZWxwZXIudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNoYWRvd0JvdHRvbUd1aSA9IHNoYWRvd0ZvbGRlci5hZGQoQ29uZmlnLnNoYWRvdywgJ2JvdHRvbScsIC00MDAsIDQwMCkubmFtZSgnQm90dG9tJyk7XHJcbiAgICBzaGFkb3dCb3R0b21HdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmNhbWVyYS5ib3R0b20gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgc2hhZG93Qm90dG9tR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93Lm1hcC5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cubWFwID0gbnVsbDtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0SGVscGVyLnVwZGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzaGFkb3dMZWZ0R3VpID0gc2hhZG93Rm9sZGVyLmFkZChDb25maWcuc2hhZG93LCAnbGVmdCcsIC00MDAsIDQwMCkubmFtZSgnTGVmdCcpO1xyXG4gICAgc2hhZG93TGVmdEd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodC5zaGFkb3cuY2FtZXJhLmxlZnQgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgc2hhZG93TGVmdEd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXAuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93Lm1hcCA9IG51bGw7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodEhlbHBlci51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2hhZG93Qmlhc0d1aSA9IHNoYWRvd0ZvbGRlci5hZGQoQ29uZmlnLnNoYWRvdywgJ2JpYXMnLCAtMC4wMDAwMTAsIDEpLm5hbWUoJ0JpYXMnKTtcclxuICAgIHNoYWRvd0JpYXNHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93LmJpYXMgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgc2hhZG93Qmlhc0d1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5saWdodC5kaXJlY3Rpb25hbExpZ2h0LnNoYWRvdy5tYXAuZGlzcG9zZSgpO1xyXG4gICAgICB0aGlzLmxpZ2h0LmRpcmVjdGlvbmFsTGlnaHQuc2hhZG93Lm1hcCA9IG51bGw7XHJcbiAgICAgIHRoaXMubGlnaHQuZGlyZWN0aW9uYWxMaWdodEhlbHBlci51cGRhdGUoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyBQb2ludCBMaWdodFxyXG4gICAgY29uc3QgcG9pbnRMaWdodEZvbGRlciA9IHRoaXMuZ3VpLmFkZEZvbGRlcignUG9pbnQgTGlnaHQnKTtcclxuICAgIHBvaW50TGlnaHRGb2xkZXIuYWRkKENvbmZpZy5wb2ludExpZ2h0LCAnZW5hYmxlZCcpLm5hbWUoJ0VuYWJsZWQnKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5saWdodC5wb2ludExpZ2h0LnZpc2libGUgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcG9pbnRMaWdodEZvbGRlci5hZGRDb2xvcihDb25maWcucG9pbnRMaWdodCwgJ2NvbG9yJykubmFtZSgnQ29sb3InKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5saWdodC5wb2ludExpZ2h0LmNvbG9yLnNldEhleCh2YWx1ZSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBvaW50TGlnaHRJbnRlbnNpdHlHdWkgPSBwb2ludExpZ2h0Rm9sZGVyLmFkZChDb25maWcucG9pbnRMaWdodCwgJ2ludGVuc2l0eScsIDAsIDIpLm5hbWUoJ0ludGVuc2l0eScpO1xyXG4gICAgcG9pbnRMaWdodEludGVuc2l0eUd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQucG9pbnRMaWdodC5pbnRlbnNpdHkgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcG9pbnRMaWdodEludGVuc2l0eUd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcG9pbnRMaWdodERpc3RhbmNlR3VpID0gcG9pbnRMaWdodEZvbGRlci5hZGQoQ29uZmlnLnBvaW50TGlnaHQsICdkaXN0YW5jZScsIDAsIDEwMDApLm5hbWUoJ0Rpc3RhbmNlJyk7XHJcbiAgICBwb2ludExpZ2h0RGlzdGFuY2VHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LnBvaW50TGlnaHQuZGlzdGFuY2UgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcG9pbnRMaWdodERpc3RhbmNlR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb2ludExpZ2h0UG9zaXRpb25YR3VpID0gcG9pbnRMaWdodEZvbGRlci5hZGQoQ29uZmlnLnBvaW50TGlnaHQsICd4JywgLTEwMDAsIDEwMDApLm5hbWUoJ1Bvc2l0aW9uIFgnKTtcclxuICAgIHBvaW50TGlnaHRQb3NpdGlvblhHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LnBvaW50TGlnaHQucG9zaXRpb24ueCA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBwb2ludExpZ2h0UG9zaXRpb25YR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb2ludExpZ2h0UG9zaXRpb25ZR3VpID0gcG9pbnRMaWdodEZvbGRlci5hZGQoQ29uZmlnLnBvaW50TGlnaHQsICd5JywgLTEwMDAsIDEwMDApLm5hbWUoJ1Bvc2l0aW9uIFknKTtcclxuICAgIHBvaW50TGlnaHRQb3NpdGlvbllHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LnBvaW50TGlnaHQucG9zaXRpb24ueSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBwb2ludExpZ2h0UG9zaXRpb25ZR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwb2ludExpZ2h0UG9zaXRpb25aR3VpID0gcG9pbnRMaWdodEZvbGRlci5hZGQoQ29uZmlnLnBvaW50TGlnaHQsICd6JywgLTEwMDAsIDEwMDApLm5hbWUoJ1Bvc2l0aW9uIFonKTtcclxuICAgIHBvaW50TGlnaHRQb3NpdGlvblpHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LnBvaW50TGlnaHQucG9zaXRpb24ueiA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBwb2ludExpZ2h0UG9zaXRpb25aR3VpLm9uRmluaXNoQ2hhbmdlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIEhlbWkgTGlnaHRcclxuICAgIGNvbnN0IGhlbWlMaWdodEZvbGRlciA9IHRoaXMuZ3VpLmFkZEZvbGRlcignSGVtaSBMaWdodCcpO1xyXG4gICAgaGVtaUxpZ2h0Rm9sZGVyLmFkZChDb25maWcuaGVtaUxpZ2h0LCAnZW5hYmxlZCcpLm5hbWUoJ0VuYWJsZWQnKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5saWdodC5oZW1pTGlnaHQudmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBoZW1pTGlnaHRGb2xkZXIuYWRkQ29sb3IoQ29uZmlnLmhlbWlMaWdodCwgJ2NvbG9yJykubmFtZSgnQ29sb3InKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5saWdodC5oZW1pTGlnaHQuY29sb3Iuc2V0SGV4KHZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgaGVtaUxpZ2h0Rm9sZGVyLmFkZENvbG9yKENvbmZpZy5oZW1pTGlnaHQsICdncm91bmRDb2xvcicpLm5hbWUoJ2dyb3VuZCBDb2xvcicpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmxpZ2h0LmhlbWlMaWdodC5ncm91bmRDb2xvci5zZXRIZXgodmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBoZW1pTGlnaHRJbnRlbnNpdHlHdWkgPSBoZW1pTGlnaHRGb2xkZXIuYWRkKENvbmZpZy5oZW1pTGlnaHQsICdpbnRlbnNpdHknLCAwLCAyKS5uYW1lKCdJbnRlbnNpdHknKTtcclxuICAgIGhlbWlMaWdodEludGVuc2l0eUd1aS5vbkNoYW5nZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5jb250cm9scy5lbmFibGVSb3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMubGlnaHQuaGVtaUxpZ2h0LmludGVuc2l0eSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBoZW1pTGlnaHRJbnRlbnNpdHlHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhlbWlMaWdodFBvc2l0aW9uWEd1aSA9IGhlbWlMaWdodEZvbGRlci5hZGQoQ29uZmlnLmhlbWlMaWdodCwgJ3gnLCAtMTAwMCwgMTAwMCkubmFtZSgnUG9zaXRpb24gWCcpO1xyXG4gICAgaGVtaUxpZ2h0UG9zaXRpb25YR3VpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5saWdodC5oZW1pTGlnaHQucG9zaXRpb24ueCA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICBoZW1pTGlnaHRQb3NpdGlvblhHdWkub25GaW5pc2hDaGFuZ2UoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGhlbWlMaWdodFBvc2l0aW9uWUd1aSA9IGhlbWlMaWdodEZvbGRlci5hZGQoQ29uZmlnLmhlbWlMaWdodCwgJ3knLCAtNTAwLCAxMDAwKS5uYW1lKCdQb3NpdGlvbiBZJyk7XHJcbiAgICBoZW1pTGlnaHRQb3NpdGlvbllHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LmhlbWlMaWdodC5wb3NpdGlvbi55ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGhlbWlMaWdodFBvc2l0aW9uWUd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgaGVtaUxpZ2h0UG9zaXRpb25aR3VpID0gaGVtaUxpZ2h0Rm9sZGVyLmFkZChDb25maWcuaGVtaUxpZ2h0LCAneicsIC0xMDAwLCAxMDAwKS5uYW1lKCdQb3NpdGlvbiBaJyk7XHJcbiAgICBoZW1pTGlnaHRQb3NpdGlvblpHdWkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmxpZ2h0LmhlbWlMaWdodC5wb3NpdGlvbi56ID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICAgIGhlbWlMaWdodFBvc2l0aW9uWkd1aS5vbkZpbmlzaENoYW5nZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdW5sb2FkKCkge1xyXG4gICAgdGhpcy5ndWkuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5ndWkgPSBuZXcgZGF0LkdVSSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi4vLi4vdXRpbHMva2V5Ym9hcmQnO1xuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi4vLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgQ29uZmlnIGZyb20gJy4uLy4uL2RhdGEvY29uZmlnJztcblxuLy8gTWFuYWdlcyBhbGwgaW5wdXQgaW50ZXJhY3Rpb25zXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmFjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhLCBjb250cm9scykge1xuICAgIC8vIFByb3BlcnRpZXNcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2FtZXJhID0gY2FtZXJhO1xuICAgIHRoaXMuY29udHJvbHMgPSBjb250cm9scztcblxuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG5cbiAgICAvLyBJbnN0YW50aWF0ZSBrZXlib2FyZCBoZWxwZXJcbiAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XG5cbiAgICAvLyBMaXN0ZW5lcnNcbiAgICAvLyBNb3VzZSBldmVudHNcbiAgICB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiBIZWxwZXJzLnRocm90dGxlKHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpLCAyNTApLCBmYWxzZSk7XG4gICAgdGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZXZlbnQpID0+IHRoaXMub25Nb3VzZUxlYXZlKGV2ZW50KSwgZmFsc2UpO1xuICAgIHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXZlbnQpID0+IHRoaXMub25Nb3VzZU92ZXIoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICAvLyBLZXlib2FyZCBldmVudHNcbiAgICB0aGlzLmtleWJvYXJkLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgLy8gT25seSBvbmNlXG4gICAgICBpZihldmVudC5yZXBlYXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmtleWJvYXJkLmV2ZW50TWF0Y2hlcyhldmVudCwgJ2VzY2FwZScpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFc2NhcGUgcHJlc3NlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZU92ZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgQ29uZmlnLmlzTW91c2VPdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBDb25maWcuaXNNb3VzZU92ZXIgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIENvbmZpZy5pc01vdXNlTW92aW5nID0gZmFsc2U7XG4gICAgfSwgMjAwKTtcblxuICAgIENvbmZpZy5pc01vdXNlTW92aW5nID0gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xyXG5cclxuaW1wb3J0IE1hdGVyaWFsIGZyb20gJy4uL2NvbXBvbmVudHMvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJztcclxuaW1wb3J0IHsgQnVmZmVyR2VvbWV0cnlVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2J1ZmZlckdlb21ldHJ5VXRpbHMnO1xyXG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAnLi4vbG9hZGVycy9HTFRGTG9hZGVyJztcclxuaW1wb3J0IENvbmZpZyBmcm9tICcuLi8uLi9kYXRhL2NvbmZpZyc7XHJcblxyXG4vLyBMb2FkcyBpbiBhIHNpbmdsZSBvYmplY3QgZnJvbSB0aGUgY29uZmlnIGZpbGVcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yKHNjZW5lLCBtYW5hZ2VyLCB0ZXh0dXJlcykge1xyXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgdGhpcy50ZXh0dXJlcyA9IHRleHR1cmVzO1xyXG4gICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcclxuXHJcbiAgICB0aGlzLm9iaiA9IG51bGw7XHJcbiAgICB0aGlzLnJlZiA9IG51bGw7XHJcbiAgfVxyXG5cclxuICBsb2FkKHR5cGUpIHtcclxuICAgIC8vIE1hbmFnZXIgaXMgcGFzc2VkIGluIHRvIGxvYWRlciB0byBkZXRlcm1pbmUgd2hlbiBsb2FkaW5nIGRvbmUgaW4gbWFpblxyXG5cclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICdnbHRmJzpcclxuICAgICAgICAvLyBMb2FkIG1vZGVsIHdpdGggc2VsZWN0ZWQgbG9hZGVyXHJcbiAgICAgICAgbmV3IEdMVEZMb2FkZXIodGhpcy5tYW5hZ2VyKS5sb2FkKFxyXG4gICAgICAgICAgQ29uZmlnLm1vZGVsc1tDb25maWcubW9kZWwuc2VsZWN0ZWRdLnBhdGgsXHJcbiAgICAgICAgICAoZ2x0ZikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGdsdGYuc2NlbmU7XHJcbiAgICAgICAgICAgIGxldCBtZXNoO1xyXG5cclxuICAgICAgICAgICAgaWYgKENvbmZpZy5zaGFkb3cuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgIHNjZW5lLnRyYXZlcnNlKGZ1bmN0aW9uKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChub2RlLmlzTWVzaCB8fCBub2RlLmlzTGlnaHQpIG5vZGUuY2FzdFNoYWRvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5pc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgbm9kZS5tYXRlcmlhbC53aXJlZnJhbWUgPSBDb25maWcubWVzaC53aXJlZnJhbWU7XHJcbiAgICAgICAgICAgICAgICAgIG1lc2ggPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9iaiA9IG1lc2g7XHJcblxyXG4gICAgICAgICAgICBCdWZmZXJHZW9tZXRyeVV0aWxzLmNvbXB1dGVUYW5nZW50cyhtZXNoLmdlb21ldHJ5KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBncm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xyXG4gICAgICAgICAgICBncm91cC5zY2FsZS5tdWx0aXBseVNjYWxhcigwLjI1KTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoIGdyb3VwICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlZiA9IGdyb3VwO1xyXG5cclxuICAgICAgICAgICAgLy8gVG8gbWFrZSBzdXJlIHRoYXQgdGhlIG1hdHJpeFdvcmxkIGlzIHVwIHRvIGRhdGUgZm9yIHRoZSBib3hoZWxwZXJzXHJcbiAgICAgICAgICAgIGdyb3VwLnVwZGF0ZU1hdHJpeFdvcmxkKHRydWUpO1xyXG4gICAgICAgICAgICBncm91cC5hZGQobWVzaCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgdG8gc2NlbmVcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoc2NlbmUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIEhlbHBlcnMubG9nUHJvZ3Jlc3MoKSxcclxuICAgICAgICAgIEhlbHBlcnMubG9nRXJyb3IoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdvYmplY3QnOlxyXG4gICAgICAgIC8vIExvYWQgbW9kZWwgd2l0aCBPYmplY3RMb2FkZXJcclxuICAgICAgICBuZXcgVEhSRUUuT2JqZWN0TG9hZGVyKHRoaXMubWFuYWdlcikubG9hZChcclxuICAgICAgICAgIENvbmZpZy5tb2RlbHNbQ29uZmlnLm1vZGVsLnNlbGVjdGVkXS5wYXRoLFxyXG4gICAgICAgICAgb2JqID0+IHtcclxuICAgICAgICAgICAgb2JqLnRyYXZlcnNlKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICBpZihjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBtYXRlcmlhbCBmb3IgbWVzaCBhbmQgc2V0IGl0cyBtYXAgdG8gdGV4dHVyZSBieSBuYW1lIGZyb20gcHJlbG9hZGVkIHRleHR1cmVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBNYXRlcmlhbCgweGZmZmZmZikuc3RhbmRhcmQ7XHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5tYXAgPSB0aGlzLnRleHR1cmVzLlVWO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgdG8gY2FzdCBhbmQgcmVjZWl2ZSBzaGFkb3cgaWYgZW5hYmxlZFxyXG4gICAgICAgICAgICAgICAgaWYoQ29uZmlnLnNoYWRvdy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICBjaGlsZC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IHByb3AgdG8gb2JqIHNvIGl0IGNhbiBiZSBhY2Nlc3NlZCBmcm9tIG91dHNpZGUgdGhlIGNsYXNzXHJcbiAgICAgICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgICAgICAgICB0aGlzLnJlZiA9IG9iajtcclxuXHJcbiAgICAgICAgICAgIG9iai5zY2FsZS5tdWx0aXBseVNjYWxhcihDb25maWcubW9kZWxzW0NvbmZpZy5tb2RlbC5zZWxlY3RlZF0uc2NhbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChvYmopO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIEhlbHBlcnMubG9nUHJvZ3Jlc3MoKSxcclxuICAgICAgICAgIEhlbHBlcnMubG9nRXJyb3IoKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bmxvYWQoKSB7XHJcbiAgICB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLnJlZik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbi8vIFByb21pc2UgcG9seWZpbGwgZm9yIElFXG5pbXBvcnQgeyBQcm9taXNlIH0gZnJvbSAnZXM2LXByb21pc2UnO1xuXG5pbXBvcnQgSGVscGVycyBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCBDb25maWcgZnJvbSAnLi4vLi4vZGF0YS9jb25maWcnO1xuXG4vLyBUaGlzIGNsYXNzIHByZWxvYWRzIGFsbCB0ZXh0dXJlcyBpbiB0aGUgaW1hZ2VGaWxlcyBhcnJheSBpbiB0aGUgQ29uZmlnIHZpYSBFUzYgUHJvbWlzZXMuXG4vLyBPbmNlIGFsbCB0ZXh0dXJlcyBhcmUgZG9uZSBsb2FkaW5nIHRoZSBtb2RlbCBpdHNlbGYgd2lsbCBiZSBsb2FkZWQgYWZ0ZXIgdGhlIFByb21pc2UgLnRoZW4oKSBjYWxsYmFjay5cbi8vIFVzaW5nIHByb21pc2VzIHRvIHByZWxvYWQgdGV4dHVyZXMgcHJldmVudHMgaXNzdWVzIHdoZW4gYXBwbHlpbmcgdGV4dHVyZXMgdG8gbWF0ZXJpYWxzXG4vLyBiZWZvcmUgdGhlIHRleHR1cmVzIGhhdmUgbG9hZGVkLlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIFByb3AgdGhhdCB3aWxsIGNvbnRhaW4gYWxsIGxvYWRlZCB0ZXh0dXJlc1xuICAgIHRoaXMudGV4dHVyZXMgPSB7fTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICBjb25zdCBtYXhBbmlzb3Ryb3B5ID0gQ29uZmlnLm1heEFuaXNvdHJvcHk7XG4gICAgY29uc3QgaW1hZ2VGaWxlcyA9IENvbmZpZy50ZXh0dXJlLmltYWdlRmlsZXM7XG4gICAgY29uc3QgcHJvbWlzZUFycmF5ID0gW107XG5cbiAgICBsb2FkZXIuc2V0UGF0aChDb25maWcudGV4dHVyZS5wYXRoKTtcblxuICAgIGltYWdlRmlsZXMuZm9yRWFjaChpbWFnZUZpbGUgPT4ge1xuICAgICAgLy8gQWRkIGFuIGluZGl2aWR1YWwgUHJvbWlzZSBmb3IgZWFjaCBpbWFnZSBpbiBhcnJheVxuICAgICAgcHJvbWlzZUFycmF5LnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBFYWNoIFByb21pc2Ugd2lsbCBhdHRlbXB0IHRvIGxvYWQgdGhlIGltYWdlIGZpbGVcbiAgICAgICAgbG9hZGVyLmxvYWQoaW1hZ2VGaWxlLmltYWdlLFxuICAgICAgICAgIC8vIFRoaXMgZ2V0cyBjYWxsZWQgb24gbG9hZCB3aXRoIHRoZSBsb2FkZWQgdGV4dHVyZVxuICAgICAgICAgIHRleHR1cmUgPT4ge1xuICAgICAgICAgICAgdGV4dHVyZS5hbmlzb3Ryb3B5ID0gbWF4QW5pc290cm9weTtcblxuICAgICAgICAgICAgLy8gUmVzb2x2ZSBQcm9taXNlIHdpdGggb2JqZWN0IG9mIHRleHR1cmUgaWYgaXQgaXMgaW5zdGFuY2Ugb2YgVEhSRUUuVGV4dHVyZVxuICAgICAgICAgICAgY29uc3QgbW9kZWxPQkogPSB7fTtcbiAgICAgICAgICAgIG1vZGVsT0JKW2ltYWdlRmlsZS5uYW1lXSA9IHRleHR1cmU7XG4gICAgICAgICAgICBpZihtb2RlbE9CSltpbWFnZUZpbGUubmFtZV0gaW5zdGFuY2VvZiBUSFJFRS5UZXh0dXJlKVxuICAgICAgICAgICAgICByZXNvbHZlKG1vZGVsT0JKKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIEhlbHBlcnMubG9nUHJvZ3Jlc3MoKSxcbiAgICAgICAgICB4aHIgPT4gcmVqZWN0KG5ldyBFcnJvcih4aHIgKyAnQW4gZXJyb3Igb2NjdXJyZWQgbG9hZGluZyB3aGlsZSBsb2FkaW5nICcgKyBpbWFnZUZpbGUuaW1hZ2UpKVxuICAgICAgICApXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggYWxsIFByb21pc2VzIGluIGFycmF5IGFuZCByZXR1cm4gYW5vdGhlciBQcm9taXNlIHdoZW4gYWxsIGhhdmUgcmVzb2x2ZWQgb3IgY29uc29sZSBsb2cgcmVhc29uIHdoZW4gYW55IHJlamVjdFxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQXJyYXkpLnRoZW4odGV4dHVyZXMgPT4ge1xuICAgICAgLy8gU2V0IHRoZSB0ZXh0dXJlcyBwcm9wIG9iamVjdCB0byBoYXZlIG5hbWUgYmUgdGhlIHJlc29sdmVkIHRleHR1cmVcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0ZXh0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLnRleHR1cmVzW09iamVjdC5rZXlzKHRleHR1cmVzW2ldKVswXV0gPSB0ZXh0dXJlc1tpXVtPYmplY3Qua2V5cyh0ZXh0dXJlc1tpXSlbMF1dO1xuICAgICAgfVxuICAgIH0sIHJlYXNvbiA9PiBjb25zb2xlLmxvZyhyZWFzb24pKTtcbiAgfVxufVxuIiwiaW1wb3J0IFRXRUVOIGZyb20gJ0B0d2VlbmpzL3R3ZWVuLmpzJztcclxuXHJcbi8vIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBzdGF0ZSBvZiB0aGUgYXBwXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBpc0RldjogZmFsc2UsXHJcbiAgaXNTaG93aW5nU3RhdHM6IHRydWUsXHJcbiAgaXNMb2FkZWQ6IGZhbHNlLFxyXG4gIGlzVHdlZW5pbmc6IGZhbHNlLFxyXG4gIGlzUm90YXRpbmc6IHRydWUsXHJcbiAgaXNNb3VzZU1vdmluZzogZmFsc2UsXHJcbiAgaXNNb3VzZU92ZXI6IGZhbHNlLFxyXG4gIG1heEFuaXNvdHJvcHk6IDEsXHJcbiAgZHByOiAxLFxyXG4gIGVhc2luZzogVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCxcclxuICBkdXJhdGlvbjogNTAwLFxyXG4gIG1vZGVsOiB7XHJcbiAgICBzZWxlY3RlZDogMCxcclxuICAgIGluaXRpYWxUeXBlczogWydnbHRmJywgJ29iamVjdCddLFxyXG4gICAgdHlwZTogJ2dsdGYnXHJcbiAgfSxcclxuICBtb2RlbHM6IFtcclxuICAgIHtcclxuICAgICAgcGF0aDogJy4vYXNzZXRzL21vZGVscy9kdWNrLmdsdGYnLFxyXG4gICAgICBzY2FsZTogMjAsXHJcbiAgICAgIHR5cGU6ICdnbHRmJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGF0aDogJy4vYXNzZXRzL21vZGVscy9UZWFwb3QuanNvbicsXHJcbiAgICAgIHNjYWxlOiAyMCxcclxuICAgICAgdHlwZTogJ29iamVjdCdcclxuICAgIH1cclxuICBdLFxyXG4gIHRleHR1cmU6IHtcclxuICAgIHBhdGg6ICcuL2Fzc2V0cy90ZXh0dXJlcy8nLFxyXG4gICAgaW1hZ2VGaWxlczogW1xyXG4gICAgICB7IG5hbWU6ICdVVicsIGltYWdlOiAnVVZfR3JpZF9TbS5qcGcnIH1cclxuICAgIF1cclxuICB9LFxyXG4gIG1lc2g6IHtcclxuICAgIGVuYWJsZUhlbHBlcjogdHJ1ZSxcclxuICAgIHdpcmVmcmFtZTogZmFsc2UsXHJcbiAgICB0cmFuc2x1Y2VudDogZmFsc2UsXHJcbiAgICBtYXRlcmlhbDoge1xyXG4gICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgIGVtaXNzaXZlOiAweGZmZmZmZlxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZm9nOiB7XHJcbiAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICBuZWFyOiAwLjAwMDhcclxuICB9LFxyXG4gIGNhbWVyYToge1xyXG4gICAgZm92OiA0MCxcclxuICAgIG5lYXI6IDIsXHJcbiAgICBmYXI6IDEwMDAsXHJcbiAgICBhc3BlY3Q6IDEsXHJcbiAgICBwb3NYOiAwLFxyXG4gICAgcG9zWTogMzAsXHJcbiAgICBwb3NaOiA0MFxyXG4gIH0sXHJcbiAgY29udHJvbHM6IHtcclxuICAgIGF1dG9Sb3RhdGU6IHRydWUsXHJcbiAgICBhdXRvUm90YXRlU3BlZWQ6IC0wLjUsXHJcbiAgICByb3RhdGVTcGVlZDogMC41LFxyXG4gICAgem9vbVNwZWVkOiAwLjgsXHJcbiAgICBtaW5EaXN0YW5jZTogMjAwLFxyXG4gICAgbWF4RGlzdGFuY2U6IDYwMCxcclxuICAgIG1pblBvbGFyQW5nbGU6IE1hdGguUEkgLyA1LFxyXG4gICAgbWF4UG9sYXJBbmdsZTogTWF0aC5QSSAvIDIsXHJcbiAgICBtaW5BemltdXRoQW5nbGU6IC1JbmZpbml0eSxcclxuICAgIG1heEF6aW11dGhBbmdsZTogSW5maW5pdHksXHJcbiAgICBlbmFibGVEYW1waW5nOiB0cnVlLFxyXG4gICAgZGFtcGluZ0ZhY3RvcjogMC41LFxyXG4gICAgZW5hYmxlWm9vbTogdHJ1ZSxcclxuICAgIHRhcmdldDoge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwLFxyXG4gICAgICB6OiAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBhbWJpZW50TGlnaHQ6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICBjb2xvcjogMHgxNDE0MTRcclxuICB9LFxyXG4gIGRpcmVjdGlvbmFsTGlnaHQ6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICBjb2xvcjogMHhmMGYwZjAsXHJcbiAgICBpbnRlbnNpdHk6IDAuNCxcclxuICAgIHg6IC03NSxcclxuICAgIHk6IDI4MCxcclxuICAgIHo6IDE1MFxyXG4gIH0sXHJcbiAgc2hhZG93OiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgaGVscGVyRW5hYmxlZDogdHJ1ZSxcclxuICAgIGJpYXM6IDAsXHJcbiAgICBtYXBXaWR0aDogMjA0OCxcclxuICAgIG1hcEhlaWdodDogMjA0OCxcclxuICAgIG5lYXI6IDI1MCxcclxuICAgIGZhcjogNDAwLFxyXG4gICAgdG9wOiAxMDAsXHJcbiAgICByaWdodDogMTAwLFxyXG4gICAgYm90dG9tOiAtMTAwLFxyXG4gICAgbGVmdDogLTEwMFxyXG4gIH0sXHJcbiAgcG9pbnRMaWdodDoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIGNvbG9yOiAweGZmZmZmZixcclxuICAgIGludGVuc2l0eTogMC4zNCxcclxuICAgIGRpc3RhbmNlOiAxMTUsXHJcbiAgICB4OiAwLFxyXG4gICAgeTogMCxcclxuICAgIHo6IDBcclxuICB9LFxyXG4gIGhlbWlMaWdodDoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIGNvbG9yOiAweGM4YzhjOCxcclxuICAgIGdyb3VuZENvbG9yOiAweGZmZmZmZixcclxuICAgIGludGVuc2l0eTogMC41NSxcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gICAgejogMFxyXG4gIH1cclxufTtcclxuIiwiLyoqXHJcbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgQnVmZmVyR2VvbWV0cnksXHJcbiAgSW50ZXJsZWF2ZWRCdWZmZXIsXHJcbiAgSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgVHJpYW5nbGVGYW5EcmF3TW9kZSxcclxuICBUcmlhbmdsZVN0cmlwRHJhd01vZGUsXHJcbiAgVHJpYW5nbGVzRHJhd01vZGUsXHJcbiAgVmVjdG9yMixcclxuICBWZWN0b3IzLFxyXG59IGZyb20gJ3RocmVlJztcclxuXHJcbnZhciBCdWZmZXJHZW9tZXRyeVV0aWxzID0ge1xyXG4gIGNvbXB1dGVUYW5nZW50czogZnVuY3Rpb24gKGdlb21ldHJ5KSB7XHJcbiAgICB2YXIgaW5kZXggPSBnZW9tZXRyeS5pbmRleDtcclxuICAgIHZhciBhdHRyaWJ1dGVzID0gZ2VvbWV0cnkuYXR0cmlidXRlcztcclxuXHJcbiAgICAvLyBiYXNlZCBvbiBodHRwOi8vd3d3LnRlcmF0aG9uLmNvbS9jb2RlL3RhbmdlbnQuaHRtbFxyXG4gICAgLy8gKHBlciB2ZXJ0ZXggdGFuZ2VudHMpXHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBpbmRleCA9PT0gbnVsbCB8fFxyXG4gICAgICBhdHRyaWJ1dGVzLnBvc2l0aW9uID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgYXR0cmlidXRlcy5ub3JtYWwgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICBhdHRyaWJ1dGVzLnV2ID09PSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAuY29tcHV0ZVRhbmdlbnRzKCkgZmFpbGVkLiBNaXNzaW5nIHJlcXVpcmVkIGF0dHJpYnV0ZXMgKGluZGV4LCBwb3NpdGlvbiwgbm9ybWFsIG9yIHV2KSdcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRpY2VzID0gaW5kZXguYXJyYXk7XHJcbiAgICB2YXIgcG9zaXRpb25zID0gYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgIHZhciBub3JtYWxzID0gYXR0cmlidXRlcy5ub3JtYWwuYXJyYXk7XHJcbiAgICB2YXIgdXZzID0gYXR0cmlidXRlcy51di5hcnJheTtcclxuXHJcbiAgICB2YXIgblZlcnRpY2VzID0gcG9zaXRpb25zLmxlbmd0aCAvIDM7XHJcblxyXG4gICAgaWYgKGF0dHJpYnV0ZXMudGFuZ2VudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgndGFuZ2VudCcsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSg0ICogblZlcnRpY2VzKSwgNCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB0YW5nZW50cyA9IGF0dHJpYnV0ZXMudGFuZ2VudC5hcnJheTtcclxuXHJcbiAgICB2YXIgdGFuMSA9IFtdLFxyXG4gICAgICAgIHRhbjIgPSBbXTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5WZXJ0aWNlczsgaSsrKSB7XHJcbiAgICAgIHRhbjFbaV0gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICB0YW4yW2ldID0gbmV3IFZlY3RvcjMoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdkEgPSBuZXcgVmVjdG9yMygpLFxyXG4gICAgICAgIHZCID0gbmV3IFZlY3RvcjMoKSxcclxuICAgICAgICB2QyA9IG5ldyBWZWN0b3IzKCksXHJcbiAgICAgICAgdXZBID0gbmV3IFZlY3RvcjIoKSxcclxuICAgICAgICB1dkIgPSBuZXcgVmVjdG9yMigpLFxyXG4gICAgICAgIHV2QyA9IG5ldyBWZWN0b3IyKCksXHJcbiAgICAgICAgc2RpciA9IG5ldyBWZWN0b3IzKCksXHJcbiAgICAgICAgdGRpciA9IG5ldyBWZWN0b3IzKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVHJpYW5nbGUoYSwgYiwgYykge1xyXG4gICAgICB2QS5mcm9tQXJyYXkocG9zaXRpb25zLCBhICogMyk7XHJcbiAgICAgIHZCLmZyb21BcnJheShwb3NpdGlvbnMsIGIgKiAzKTtcclxuICAgICAgdkMuZnJvbUFycmF5KHBvc2l0aW9ucywgYyAqIDMpO1xyXG5cclxuICAgICAgdXZBLmZyb21BcnJheSh1dnMsIGEgKiAyKTtcclxuICAgICAgdXZCLmZyb21BcnJheSh1dnMsIGIgKiAyKTtcclxuICAgICAgdXZDLmZyb21BcnJheSh1dnMsIGMgKiAyKTtcclxuXHJcbiAgICAgIHZCLnN1Yih2QSk7XHJcbiAgICAgIHZDLnN1Yih2QSk7XHJcblxyXG4gICAgICB1dkIuc3ViKHV2QSk7XHJcbiAgICAgIHV2Qy5zdWIodXZBKTtcclxuXHJcbiAgICAgIHZhciByID0gMS4wIC8gKHV2Qi54ICogdXZDLnkgLSB1dkMueCAqIHV2Qi55KTtcclxuXHJcbiAgICAgIC8vIHNpbGVudGx5IGlnbm9yZSBkZWdlbmVyYXRlIHV2IHRyaWFuZ2xlcyBoYXZpbmcgY29pbmNpZGVudCBvciBjb2xpbmVhciB2ZXJ0aWNlc1xyXG5cclxuICAgICAgaWYgKCFpc0Zpbml0ZShyKSkgcmV0dXJuO1xyXG5cclxuICAgICAgc2Rpci5jb3B5KHZCKS5tdWx0aXBseVNjYWxhcih1dkMueSkuYWRkU2NhbGVkVmVjdG9yKHZDLCAtdXZCLnkpLm11bHRpcGx5U2NhbGFyKHIpO1xyXG4gICAgICB0ZGlyLmNvcHkodkMpLm11bHRpcGx5U2NhbGFyKHV2Qi54KS5hZGRTY2FsZWRWZWN0b3IodkIsIC11dkMueCkubXVsdGlwbHlTY2FsYXIocik7XHJcblxyXG4gICAgICB0YW4xW2FdLmFkZChzZGlyKTtcclxuICAgICAgdGFuMVtiXS5hZGQoc2Rpcik7XHJcbiAgICAgIHRhbjFbY10uYWRkKHNkaXIpO1xyXG5cclxuICAgICAgdGFuMlthXS5hZGQodGRpcik7XHJcbiAgICAgIHRhbjJbYl0uYWRkKHRkaXIpO1xyXG4gICAgICB0YW4yW2NdLmFkZCh0ZGlyKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ3JvdXBzID0gZ2VvbWV0cnkuZ3JvdXBzO1xyXG5cclxuICAgIGlmIChncm91cHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGdyb3VwcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdGFydDogMCxcclxuICAgICAgICAgIGNvdW50OiBpbmRpY2VzLmxlbmd0aCxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XHJcbiAgICAgIHZhciBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcbiAgICAgIHZhciBzdGFydCA9IGdyb3VwLnN0YXJ0O1xyXG4gICAgICB2YXIgY291bnQgPSBncm91cC5jb3VudDtcclxuXHJcbiAgICAgIGZvciAodmFyIGogPSBzdGFydCwgamwgPSBzdGFydCArIGNvdW50OyBqIDwgamw7IGogKz0gMykge1xyXG4gICAgICAgIGhhbmRsZVRyaWFuZ2xlKGluZGljZXNbaiArIDBdLCBpbmRpY2VzW2ogKyAxXSwgaW5kaWNlc1tqICsgMl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHRtcCA9IG5ldyBWZWN0b3IzKCksXHJcbiAgICAgICAgdG1wMiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICB2YXIgbiA9IG5ldyBWZWN0b3IzKCksXHJcbiAgICAgICAgbjIgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgdmFyIHcsIHQsIHRlc3Q7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVmVydGV4KHYpIHtcclxuICAgICAgbi5mcm9tQXJyYXkobm9ybWFscywgdiAqIDMpO1xyXG4gICAgICBuMi5jb3B5KG4pO1xyXG5cclxuICAgICAgdCA9IHRhbjFbdl07XHJcblxyXG4gICAgICAvLyBHcmFtLVNjaG1pZHQgb3J0aG9nb25hbGl6ZVxyXG5cclxuICAgICAgdG1wLmNvcHkodCk7XHJcbiAgICAgIHRtcC5zdWIobi5tdWx0aXBseVNjYWxhcihuLmRvdCh0KSkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgICAgLy8gQ2FsY3VsYXRlIGhhbmRlZG5lc3NcclxuXHJcbiAgICAgIHRtcDIuY3Jvc3NWZWN0b3JzKG4yLCB0KTtcclxuICAgICAgdGVzdCA9IHRtcDIuZG90KHRhbjJbdl0pO1xyXG4gICAgICB3ID0gdGVzdCA8IDAuMCA/IC0xLjAgOiAxLjA7XHJcblxyXG4gICAgICB0YW5nZW50c1t2ICogNF0gPSB0bXAueDtcclxuICAgICAgdGFuZ2VudHNbdiAqIDQgKyAxXSA9IHRtcC55O1xyXG4gICAgICB0YW5nZW50c1t2ICogNCArIDJdID0gdG1wLno7XHJcbiAgICAgIHRhbmdlbnRzW3YgKiA0ICsgM10gPSB3O1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGdyb3Vwcy5sZW5ndGg7IGkgPCBpbDsgKytpKSB7XHJcbiAgICAgIHZhciBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcbiAgICAgIHZhciBzdGFydCA9IGdyb3VwLnN0YXJ0O1xyXG4gICAgICB2YXIgY291bnQgPSBncm91cC5jb3VudDtcclxuXHJcbiAgICAgIGZvciAodmFyIGogPSBzdGFydCwgamwgPSBzdGFydCArIGNvdW50OyBqIDwgamw7IGogKz0gMykge1xyXG4gICAgICAgIGhhbmRsZVZlcnRleChpbmRpY2VzW2ogKyAwXSk7XHJcbiAgICAgICAgaGFuZGxlVmVydGV4KGluZGljZXNbaiArIDFdKTtcclxuICAgICAgICBoYW5kbGVWZXJ0ZXgoaW5kaWNlc1tqICsgMl0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtICB7QXJyYXk8QnVmZmVyR2VvbWV0cnk+fSBnZW9tZXRyaWVzXHJcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gdXNlR3JvdXBzXHJcbiAgICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnl9XHJcbiAgICovXHJcbiAgbWVyZ2VCdWZmZXJHZW9tZXRyaWVzOiBmdW5jdGlvbiAoZ2VvbWV0cmllcywgdXNlR3JvdXBzKSB7XHJcbiAgICB2YXIgaXNJbmRleGVkID0gZ2VvbWV0cmllc1swXS5pbmRleCAhPT0gbnVsbDtcclxuXHJcbiAgICB2YXIgYXR0cmlidXRlc1VzZWQgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGdlb21ldHJpZXNbMF0uYXR0cmlidXRlcykpO1xyXG4gICAgdmFyIG1vcnBoQXR0cmlidXRlc1VzZWQgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGdlb21ldHJpZXNbMF0ubW9ycGhBdHRyaWJ1dGVzKSk7XHJcblxyXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcclxuICAgIHZhciBtb3JwaEF0dHJpYnV0ZXMgPSB7fTtcclxuXHJcbiAgICB2YXIgbW9ycGhUYXJnZXRzUmVsYXRpdmUgPSBnZW9tZXRyaWVzWzBdLm1vcnBoVGFyZ2V0c1JlbGF0aXZlO1xyXG5cclxuICAgIHZhciBtZXJnZWRHZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuICAgIHZhciBvZmZzZXQgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB2YXIgZ2VvbWV0cnkgPSBnZW9tZXRyaWVzW2ldO1xyXG4gICAgICB2YXIgYXR0cmlidXRlc0NvdW50ID0gMDtcclxuXHJcbiAgICAgIC8vIGVuc3VyZSB0aGF0IGFsbCBnZW9tZXRyaWVzIGFyZSBpbmRleGVkLCBvciBub25lXHJcblxyXG4gICAgICBpZiAoaXNJbmRleGVkICE9PSAoZ2VvbWV0cnkuaW5kZXggIT09IG51bGwpKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArXHJcbiAgICAgICAgICBpICtcclxuICAgICAgICAgICcuIEFsbCBnZW9tZXRyaWVzIG11c3QgaGF2ZSBjb21wYXRpYmxlIGF0dHJpYnV0ZXM7IG1ha2Ugc3VyZSBpbmRleCBhdHRyaWJ1dGUgZXhpc3RzIGFtb25nIGFsbCBnZW9tZXRyaWVzLCBvciBpbiBub25lIG9mIHRoZW0uJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGdhdGhlciBhdHRyaWJ1dGVzLCBleGl0IGVhcmx5IGlmIHRoZXkncmUgZGlmZmVyZW50XHJcblxyXG4gICAgICBmb3IgKHZhciBuYW1lIGluIGdlb21ldHJ5LmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBpZiAoIWF0dHJpYnV0ZXNVc2VkLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICtcclxuICAgICAgICAgICAgaSArXHJcbiAgICAgICAgICAgICcuIEFsbCBnZW9tZXRyaWVzIG11c3QgaGF2ZSBjb21wYXRpYmxlIGF0dHJpYnV0ZXM7IG1ha2Ugc3VyZSBcIicgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgJ1wiIGF0dHJpYnV0ZSBleGlzdHMgYW1vbmcgYWxsIGdlb21ldHJpZXMsIG9yIGluIG5vbmUgb2YgdGhlbS4nXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBhdHRyaWJ1dGVzW25hbWVdID0gW107XHJcblxyXG4gICAgICAgIGF0dHJpYnV0ZXNbbmFtZV0ucHVzaChnZW9tZXRyeS5hdHRyaWJ1dGVzW25hbWVdKTtcclxuXHJcbiAgICAgICAgYXR0cmlidXRlc0NvdW50Kys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVuc3VyZSBnZW9tZXRyaWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGF0dHJpYnV0ZXNcclxuXHJcbiAgICAgIGlmIChhdHRyaWJ1dGVzQ291bnQgIT09IGF0dHJpYnV0ZXNVc2VkLnNpemUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHM6IC5tZXJnZUJ1ZmZlckdlb21ldHJpZXMoKSBmYWlsZWQgd2l0aCBnZW9tZXRyeSBhdCBpbmRleCAnICtcclxuICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgJy4gTWFrZSBzdXJlIGFsbCBnZW9tZXRyaWVzIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIGF0dHJpYnV0ZXMuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGdhdGhlciBtb3JwaCBhdHRyaWJ1dGVzLCBleGl0IGVhcmx5IGlmIHRoZXkncmUgZGlmZmVyZW50XHJcblxyXG4gICAgICBpZiAobW9ycGhUYXJnZXRzUmVsYXRpdmUgIT09IGdlb21ldHJ5Lm1vcnBoVGFyZ2V0c1JlbGF0aXZlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArXHJcbiAgICAgICAgICBpICtcclxuICAgICAgICAgICcuIC5tb3JwaFRhcmdldHNSZWxhdGl2ZSBtdXN0IGJlIGNvbnNpc3RlbnQgdGhyb3VnaG91dCBhbGwgZ2VvbWV0cmllcy4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBnZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBpZiAoIW1vcnBoQXR0cmlidXRlc1VzZWQuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aXRoIGdlb21ldHJ5IGF0IGluZGV4ICcgK1xyXG4gICAgICAgICAgICBpICtcclxuICAgICAgICAgICAgJy4gIC5tb3JwaEF0dHJpYnV0ZXMgbXVzdCBiZSBjb25zaXN0ZW50IHRocm91Z2hvdXQgYWxsIGdlb21ldHJpZXMuJ1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1vcnBoQXR0cmlidXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSBtb3JwaEF0dHJpYnV0ZXNbbmFtZV0gPSBbXTtcclxuXHJcbiAgICAgICAgbW9ycGhBdHRyaWJ1dGVzW25hbWVdLnB1c2goZ2VvbWV0cnkubW9ycGhBdHRyaWJ1dGVzW25hbWVdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZ2F0aGVyIC51c2VyRGF0YVxyXG5cclxuICAgICAgbWVyZ2VkR2VvbWV0cnkudXNlckRhdGEubWVyZ2VkVXNlckRhdGEgPSBtZXJnZWRHZW9tZXRyeS51c2VyRGF0YS5tZXJnZWRVc2VyRGF0YSB8fCBbXTtcclxuICAgICAgbWVyZ2VkR2VvbWV0cnkudXNlckRhdGEubWVyZ2VkVXNlckRhdGEucHVzaChnZW9tZXRyeS51c2VyRGF0YSk7XHJcblxyXG4gICAgICBpZiAodXNlR3JvdXBzKSB7XHJcbiAgICAgICAgdmFyIGNvdW50O1xyXG5cclxuICAgICAgICBpZiAoaXNJbmRleGVkKSB7XHJcbiAgICAgICAgICBjb3VudCA9IGdlb21ldHJ5LmluZGV4LmNvdW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBjb3VudCA9IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJHZW9tZXRyaWVzKCkgZmFpbGVkIHdpdGggZ2VvbWV0cnkgYXQgaW5kZXggJyArXHJcbiAgICAgICAgICAgIGkgK1xyXG4gICAgICAgICAgICAnLiBUaGUgZ2VvbWV0cnkgbXVzdCBoYXZlIGVpdGhlciBhbiBpbmRleCBvciBhIHBvc2l0aW9uIGF0dHJpYnV0ZSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lcmdlZEdlb21ldHJ5LmFkZEdyb3VwKG9mZnNldCwgY291bnQsIGkpO1xyXG5cclxuICAgICAgICBvZmZzZXQgKz0gY291bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXJnZSBpbmRpY2VzXHJcblxyXG4gICAgaWYgKGlzSW5kZXhlZCkge1xyXG4gICAgICB2YXIgaW5kZXhPZmZzZXQgPSAwO1xyXG4gICAgICB2YXIgbWVyZ2VkSW5kZXggPSBbXTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ2VvbWV0cmllcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGdlb21ldHJpZXNbaV0uaW5kZXg7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaW5kZXguY291bnQ7ICsraikge1xyXG4gICAgICAgICAgbWVyZ2VkSW5kZXgucHVzaChpbmRleC5nZXRYKGopICsgaW5kZXhPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5kZXhPZmZzZXQgKz0gZ2VvbWV0cmllc1tpXS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBtZXJnZWRHZW9tZXRyeS5zZXRJbmRleChtZXJnZWRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWVyZ2UgYXR0cmlidXRlc1xyXG5cclxuICAgIGZvciAodmFyIG5hbWUgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICB2YXIgbWVyZ2VkQXR0cmlidXRlID0gdGhpcy5tZXJnZUJ1ZmZlckF0dHJpYnV0ZXMoYXR0cmlidXRlc1tuYW1lXSk7XHJcblxyXG4gICAgICBpZiAoIW1lcmdlZEF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aGlsZSB0cnlpbmcgdG8gbWVyZ2UgdGhlICcgK1xyXG4gICAgICAgICAgbmFtZSArXHJcbiAgICAgICAgICAnIGF0dHJpYnV0ZS4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbWVyZ2VkR2VvbWV0cnkuc2V0QXR0cmlidXRlKG5hbWUsIG1lcmdlZEF0dHJpYnV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWVyZ2UgbW9ycGggYXR0cmlidXRlc1xyXG5cclxuICAgIGZvciAodmFyIG5hbWUgaW4gbW9ycGhBdHRyaWJ1dGVzKSB7XHJcbiAgICAgIHZhciBudW1Nb3JwaFRhcmdldHMgPSBtb3JwaEF0dHJpYnV0ZXNbbmFtZV1bMF0ubGVuZ3RoO1xyXG5cclxuICAgICAgaWYgKG51bU1vcnBoVGFyZ2V0cyA9PT0gMCkgYnJlYWs7XHJcblxyXG4gICAgICBtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgPSBtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXMgfHwge307XHJcbiAgICAgIG1lcmdlZEdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1tuYW1lXSA9IFtdO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Nb3JwaFRhcmdldHM7ICsraSkge1xyXG4gICAgICAgIHZhciBtb3JwaEF0dHJpYnV0ZXNUb01lcmdlID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbW9ycGhBdHRyaWJ1dGVzW25hbWVdLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICBtb3JwaEF0dHJpYnV0ZXNUb01lcmdlLnB1c2gobW9ycGhBdHRyaWJ1dGVzW25hbWVdW2pdW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtZXJnZWRNb3JwaEF0dHJpYnV0ZSA9IHRoaXMubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKG1vcnBoQXR0cmlidXRlc1RvTWVyZ2UpO1xyXG5cclxuICAgICAgICBpZiAoIW1lcmdlZE1vcnBoQXR0cmlidXRlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyR2VvbWV0cmllcygpIGZhaWxlZCB3aGlsZSB0cnlpbmcgdG8gbWVyZ2UgdGhlICcgK1xyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgJyBtb3JwaEF0dHJpYnV0ZS4nXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXJnZWRHZW9tZXRyeS5tb3JwaEF0dHJpYnV0ZXNbbmFtZV0ucHVzaChtZXJnZWRNb3JwaEF0dHJpYnV0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVyZ2VkR2VvbWV0cnk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtBcnJheTxCdWZmZXJBdHRyaWJ1dGU+fSBhdHRyaWJ1dGVzXHJcbiAgICogQHJldHVybiB7QnVmZmVyQXR0cmlidXRlfVxyXG4gICAqL1xyXG4gIG1lcmdlQnVmZmVyQXR0cmlidXRlczogZnVuY3Rpb24gKGF0dHJpYnV0ZXMpIHtcclxuICAgIHZhciBUeXBlZEFycmF5O1xyXG4gICAgdmFyIGl0ZW1TaXplO1xyXG4gICAgdmFyIG5vcm1hbGl6ZWQ7XHJcbiAgICB2YXIgYXJyYXlMZW5ndGggPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc1tpXTtcclxuXHJcbiAgICAgIGlmIChhdHRyaWJ1dGUuaXNJbnRlcmxlYXZlZEJ1ZmZlckF0dHJpYnV0ZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gSW50ZXJsZWF2ZWRCdWZmZXJBdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoVHlwZWRBcnJheSA9PT0gdW5kZWZpbmVkKSBUeXBlZEFycmF5ID0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yO1xyXG4gICAgICBpZiAoVHlwZWRBcnJheSAhPT0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUuYXJyYXkgbXVzdCBiZSBvZiBjb25zaXN0ZW50IGFycmF5IHR5cGVzIGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVNpemUgPT09IHVuZGVmaW5lZCkgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcbiAgICAgIGlmIChpdGVtU2l6ZSAhPT0gYXR0cmlidXRlLml0ZW1TaXplKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzOiAubWVyZ2VCdWZmZXJBdHRyaWJ1dGVzKCkgZmFpbGVkLiBCdWZmZXJBdHRyaWJ1dGUuaXRlbVNpemUgbXVzdCBiZSBjb25zaXN0ZW50IGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobm9ybWFsaXplZCA9PT0gdW5kZWZpbmVkKSBub3JtYWxpemVkID0gYXR0cmlidXRlLm5vcm1hbGl6ZWQ7XHJcbiAgICAgIGlmIChub3JtYWxpemVkICE9PSBhdHRyaWJ1dGUubm9ybWFsaXplZCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlsczogLm1lcmdlQnVmZmVyQXR0cmlidXRlcygpIGZhaWxlZC4gQnVmZmVyQXR0cmlidXRlLm5vcm1hbGl6ZWQgbXVzdCBiZSBjb25zaXN0ZW50IGFjcm9zcyBtYXRjaGluZyBhdHRyaWJ1dGVzLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhcnJheUxlbmd0aCArPSBhdHRyaWJ1dGUuYXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhcnJheSA9IG5ldyBUeXBlZEFycmF5KGFycmF5TGVuZ3RoKTtcclxuICAgIHZhciBvZmZzZXQgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cmlidXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICBhcnJheS5zZXQoYXR0cmlidXRlc1tpXS5hcnJheSwgb2Zmc2V0KTtcclxuXHJcbiAgICAgIG9mZnNldCArPSBhdHRyaWJ1dGVzW2ldLmFycmF5Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IEJ1ZmZlckF0dHJpYnV0ZShhcnJheSwgaXRlbVNpemUsIG5vcm1hbGl6ZWQpO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyQXR0cmlidXRlPn0gYXR0cmlidXRlc1xyXG4gICAqIEByZXR1cm4ge0FycmF5PEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlPn1cclxuICAgKi9cclxuICBpbnRlcmxlYXZlQXR0cmlidXRlczogZnVuY3Rpb24gKGF0dHJpYnV0ZXMpIHtcclxuICAgIC8vIEludGVybGVhdmVzIHRoZSBwcm92aWRlZCBhdHRyaWJ1dGVzIGludG8gYW4gSW50ZXJsZWF2ZWRCdWZmZXIgYW5kIHJldHVybnNcclxuICAgIC8vIGEgc2V0IG9mIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcyBmb3IgZWFjaCBhdHRyaWJ1dGVcclxuICAgIHZhciBUeXBlZEFycmF5O1xyXG4gICAgdmFyIGFycmF5TGVuZ3RoID0gMDtcclxuICAgIHZhciBzdHJpZGUgPSAwO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgdGhlIGxlbmd0aCBhbmQgdHlwZSBvZiB0aGUgaW50ZXJsZWF2ZWRCdWZmZXJcclxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXR0cmlidXRlcy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbaV07XHJcblxyXG4gICAgICBpZiAoVHlwZWRBcnJheSA9PT0gdW5kZWZpbmVkKSBUeXBlZEFycmF5ID0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yO1xyXG4gICAgICBpZiAoVHlwZWRBcnJheSAhPT0gYXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQXR0cmlidXRlQnVmZmVycyBvZiBkaWZmZXJlbnQgdHlwZXMgY2Fubm90IGJlIGludGVybGVhdmVkJyk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFycmF5TGVuZ3RoICs9IGF0dHJpYnV0ZS5hcnJheS5sZW5ndGg7XHJcbiAgICAgIHN0cmlkZSArPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBzZXQgb2YgYnVmZmVyIGF0dHJpYnV0ZXNcclxuICAgIHZhciBpbnRlcmxlYXZlZEJ1ZmZlciA9IG5ldyBJbnRlcmxlYXZlZEJ1ZmZlcihuZXcgVHlwZWRBcnJheShhcnJheUxlbmd0aCksIHN0cmlkZSk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgIHZhciByZXMgPSBbXTtcclxuICAgIHZhciBnZXR0ZXJzID0gWydnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJ107XHJcbiAgICB2YXIgc2V0dGVycyA9IFsnc2V0WCcsICdzZXRZJywgJ3NldFonLCAnc2V0VyddO1xyXG5cclxuICAgIGZvciAodmFyIGogPSAwLCBsID0gYXR0cmlidXRlcy5sZW5ndGg7IGogPCBsOyBqKyspIHtcclxuICAgICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNbal07XHJcbiAgICAgIHZhciBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuICAgICAgdmFyIGNvdW50ID0gYXR0cmlidXRlLmNvdW50O1xyXG4gICAgICB2YXIgaWJhID0gbmV3IEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlKFxyXG4gICAgICAgIGludGVybGVhdmVkQnVmZmVyLFxyXG4gICAgICAgIGl0ZW1TaXplLFxyXG4gICAgICAgIG9mZnNldCxcclxuICAgICAgICBhdHRyaWJ1dGUubm9ybWFsaXplZFxyXG4gICAgICApO1xyXG4gICAgICByZXMucHVzaChpYmEpO1xyXG5cclxuICAgICAgb2Zmc2V0ICs9IGl0ZW1TaXplO1xyXG5cclxuICAgICAgLy8gTW92ZSB0aGUgZGF0YSBmb3IgZWFjaCBhdHRyaWJ1dGUgaW50byB0aGUgbmV3IGludGVybGVhdmVkQnVmZmVyXHJcbiAgICAgIC8vIGF0IHRoZSBhcHByb3ByaWF0ZSBvZmZzZXRcclxuICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBjb3VudDsgYysrKSB7XHJcbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBpdGVtU2l6ZTsgaysrKSB7XHJcbiAgICAgICAgICBpYmFbc2V0dGVyc1trXV0oYywgYXR0cmlidXRlW2dldHRlcnNba11dKGMpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7QXJyYXk8QnVmZmVyR2VvbWV0cnk+fSBnZW9tZXRyeVxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBlc3RpbWF0ZUJ5dGVzVXNlZDogZnVuY3Rpb24gKGdlb21ldHJ5KSB7XHJcbiAgICAvLyBSZXR1cm4gdGhlIGVzdGltYXRlZCBtZW1vcnkgdXNlZCBieSB0aGlzIGdlb21ldHJ5IGluIGJ5dGVzXHJcbiAgICAvLyBDYWxjdWxhdGUgdXNpbmcgaXRlbVNpemUsIGNvdW50LCBhbmQgQllURVNfUEVSX0VMRU1FTlQgdG8gYWNjb3VudFxyXG4gICAgLy8gZm9yIEludGVybGVhdmVkQnVmZmVyQXR0cmlidXRlcy5cclxuICAgIHZhciBtZW0gPSAwO1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBnZW9tZXRyeS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgIHZhciBhdHRyID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICBtZW0gKz0gYXR0ci5jb3VudCAqIGF0dHIuaXRlbVNpemUgKiBhdHRyLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5UO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbmRpY2VzID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuICAgIG1lbSArPSBpbmRpY2VzID8gaW5kaWNlcy5jb3VudCAqIGluZGljZXMuaXRlbVNpemUgKiBpbmRpY2VzLmFycmF5LkJZVEVTX1BFUl9FTEVNRU5UIDogMDtcclxuICAgIHJldHVybiBtZW07XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gdG9sZXJhbmNlXHJcbiAgICogQHJldHVybiB7QnVmZmVyR2VvbWV0cnk+fVxyXG4gICAqL1xyXG4gIG1lcmdlVmVydGljZXM6IGZ1bmN0aW9uIChnZW9tZXRyeSwgdG9sZXJhbmNlID0gMWUtNCkge1xyXG4gICAgdG9sZXJhbmNlID0gTWF0aC5tYXgodG9sZXJhbmNlLCBOdW1iZXIuRVBTSUxPTik7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYW4gaW5kZXggYnVmZmVyIGlmIHRoZSBnZW9tZXRyeSBkb2Vzbid0IGhhdmUgb25lLCBvciBvcHRpbWl6ZSBpdFxyXG4gICAgLy8gaWYgaXQncyBhbHJlYWR5IGF2YWlsYWJsZS5cclxuICAgIHZhciBoYXNoVG9JbmRleCA9IHt9O1xyXG4gICAgdmFyIGluZGljZXMgPSBnZW9tZXRyeS5nZXRJbmRleCgpO1xyXG4gICAgdmFyIHBvc2l0aW9ucyA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcclxuICAgIHZhciB2ZXJ0ZXhDb3VudCA9IGluZGljZXMgPyBpbmRpY2VzLmNvdW50IDogcG9zaXRpb25zLmNvdW50O1xyXG5cclxuICAgIC8vIG5leHQgdmFsdWUgZm9yIHRyaWFuZ2xlIGluZGljZXNcclxuICAgIHZhciBuZXh0SW5kZXggPSAwO1xyXG5cclxuICAgIC8vIGF0dHJpYnV0ZXMgYW5kIG5ldyBhdHRyaWJ1dGUgYXJyYXlzXHJcbiAgICB2YXIgYXR0cmlidXRlTmFtZXMgPSBPYmplY3Qua2V5cyhnZW9tZXRyeS5hdHRyaWJ1dGVzKTtcclxuICAgIHZhciBhdHRyQXJyYXlzID0ge307XHJcbiAgICB2YXIgbW9ycGhBdHRyc0FycmF5cyA9IHt9O1xyXG4gICAgdmFyIG5ld0luZGljZXMgPSBbXTtcclxuICAgIHZhciBnZXR0ZXJzID0gWydnZXRYJywgJ2dldFknLCAnZ2V0WicsICdnZXRXJ107XHJcblxyXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgYXJyYXlzXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWVzW2ldO1xyXG5cclxuICAgICAgYXR0ckFycmF5c1tuYW1lXSA9IFtdO1xyXG5cclxuICAgICAgdmFyIG1vcnBoQXR0ciA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1tuYW1lXTtcclxuICAgICAgaWYgKG1vcnBoQXR0cikge1xyXG4gICAgICAgIG1vcnBoQXR0cnNBcnJheXNbbmFtZV0gPSBuZXcgQXJyYXkobW9ycGhBdHRyLmxlbmd0aCkuZmlsbCgpLm1hcCgoKSA9PiBbXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb252ZXJ0IHRoZSBlcnJvciB0b2xlcmFuY2UgdG8gYW4gYW1vdW50IG9mIGRlY2ltYWwgcGxhY2VzIHRvIHRydW5jYXRlIHRvXHJcbiAgICB2YXIgZGVjaW1hbFNoaWZ0ID0gTWF0aC5sb2cxMCgxIC8gdG9sZXJhbmNlKTtcclxuICAgIHZhciBzaGlmdE11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgZGVjaW1hbFNoaWZ0KTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGV4Q291bnQ7IGkrKykge1xyXG4gICAgICB2YXIgaW5kZXggPSBpbmRpY2VzID8gaW5kaWNlcy5nZXRYKGkpIDogaTtcclxuXHJcbiAgICAgIC8vIEdlbmVyYXRlIGEgaGFzaCBmb3IgdGhlIHZlcnRleCBhdHRyaWJ1dGVzIGF0IHRoZSBjdXJyZW50IGluZGV4ICdpJ1xyXG4gICAgICB2YXIgaGFzaCA9ICcnO1xyXG4gICAgICBmb3IgKHZhciBqID0gMCwgbCA9IGF0dHJpYnV0ZU5hbWVzLmxlbmd0aDsgaiA8IGw7IGorKykge1xyXG4gICAgICAgIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZXNbal07XHJcbiAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShuYW1lKTtcclxuICAgICAgICB2YXIgaXRlbVNpemUgPSBhdHRyaWJ1dGUuaXRlbVNpemU7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaXRlbVNpemU7IGsrKykge1xyXG4gICAgICAgICAgLy8gZG91YmxlIHRpbGRlIHRydW5jYXRlcyB0aGUgZGVjaW1hbCB2YWx1ZVxyXG4gICAgICAgICAgaGFzaCArPSBgJHt+fihhdHRyaWJ1dGVbZ2V0dGVyc1trXV0oaW5kZXgpICogc2hpZnRNdWx0aXBsaWVyKX0sYDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCBhbm90aGVyIHJlZmVyZW5jZSB0byB0aGUgdmVydGV4IGlmIGl0J3MgYWxyZWFkeVxyXG4gICAgICAvLyB1c2VkIGJ5IGFub3RoZXIgaW5kZXhcclxuICAgICAgaWYgKGhhc2ggaW4gaGFzaFRvSW5kZXgpIHtcclxuICAgICAgICBuZXdJbmRpY2VzLnB1c2goaGFzaFRvSW5kZXhbaGFzaF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvcHkgZGF0YSB0byB0aGUgbmV3IGluZGV4IGluIHRoZSBhdHRyaWJ1dGUgYXJyYXlzXHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGogPCBsOyBqKyspIHtcclxuICAgICAgICAgIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZXNbal07XHJcbiAgICAgICAgICB2YXIgYXR0cmlidXRlID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKG5hbWUpO1xyXG4gICAgICAgICAgdmFyIG1vcnBoQXR0ciA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1tuYW1lXTtcclxuICAgICAgICAgIHZhciBpdGVtU2l6ZSA9IGF0dHJpYnV0ZS5pdGVtU2l6ZTtcclxuICAgICAgICAgIHZhciBuZXdhcnJheSA9IGF0dHJBcnJheXNbbmFtZV07XHJcbiAgICAgICAgICB2YXIgbmV3TW9ycGhBcnJheXMgPSBtb3JwaEF0dHJzQXJyYXlzW25hbWVdO1xyXG5cclxuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaXRlbVNpemU7IGsrKykge1xyXG4gICAgICAgICAgICB2YXIgZ2V0dGVyRnVuYyA9IGdldHRlcnNba107XHJcbiAgICAgICAgICAgIG5ld2FycmF5LnB1c2goYXR0cmlidXRlW2dldHRlckZ1bmNdKGluZGV4KSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobW9ycGhBdHRyKSB7XHJcbiAgICAgICAgICAgICAgZm9yICh2YXIgbSA9IDAsIG1sID0gbW9ycGhBdHRyLmxlbmd0aDsgbSA8IG1sOyBtKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld01vcnBoQXJyYXlzW21dLnB1c2gobW9ycGhBdHRyW21dW2dldHRlckZ1bmNdKGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYXNoVG9JbmRleFtoYXNoXSA9IG5leHRJbmRleDtcclxuICAgICAgICBuZXdJbmRpY2VzLnB1c2gobmV4dEluZGV4KTtcclxuICAgICAgICBuZXh0SW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIHR5cGVkIGFycmF5cyBmcm9tIG5ldyBhdHRyaWJ1dGUgYXJyYXlzIGFuZCB1cGRhdGVcclxuICAgIC8vIHRoZSBhdHRyaWJ1dGVCdWZmZXJzXHJcbiAgICBjb25zdCByZXN1bHQgPSBnZW9tZXRyeS5jbG9uZSgpO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRyaWJ1dGVOYW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lc1tpXTtcclxuICAgICAgdmFyIG9sZEF0dHJpYnV0ZSA9IGdlb21ldHJ5LmdldEF0dHJpYnV0ZShuYW1lKTtcclxuXHJcbiAgICAgIHZhciBidWZmZXIgPSBuZXcgb2xkQXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yKGF0dHJBcnJheXNbbmFtZV0pO1xyXG4gICAgICB2YXIgYXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShidWZmZXIsIG9sZEF0dHJpYnV0ZS5pdGVtU2l6ZSwgb2xkQXR0cmlidXRlLm5vcm1hbGl6ZWQpO1xyXG5cclxuICAgICAgcmVzdWx0LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBhdHRyaWJ1dGUgYXJyYXlzXHJcbiAgICAgIGlmIChuYW1lIGluIG1vcnBoQXR0cnNBcnJheXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1vcnBoQXR0cnNBcnJheXNbbmFtZV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIHZhciBvbGRNb3JwaEF0dHJpYnV0ZSA9IGdlb21ldHJ5Lm1vcnBoQXR0cmlidXRlc1tuYW1lXVtqXTtcclxuXHJcbiAgICAgICAgICB2YXIgYnVmZmVyID0gbmV3IG9sZE1vcnBoQXR0cmlidXRlLmFycmF5LmNvbnN0cnVjdG9yKG1vcnBoQXR0cnNBcnJheXNbbmFtZV1bal0pO1xyXG4gICAgICAgICAgdmFyIG1vcnBoQXR0cmlidXRlID0gbmV3IEJ1ZmZlckF0dHJpYnV0ZShcclxuICAgICAgICAgICAgYnVmZmVyLFxyXG4gICAgICAgICAgICBvbGRNb3JwaEF0dHJpYnV0ZS5pdGVtU2l6ZSxcclxuICAgICAgICAgICAgb2xkTW9ycGhBdHRyaWJ1dGUubm9ybWFsaXplZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHJlc3VsdC5tb3JwaEF0dHJpYnV0ZXNbbmFtZV1bal0gPSBtb3JwaEF0dHJpYnV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpbmRpY2VzXHJcblxyXG4gICAgcmVzdWx0LnNldEluZGV4KG5ld0luZGljZXMpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtCdWZmZXJHZW9tZXRyeX0gZ2VvbWV0cnlcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZHJhd01vZGVcclxuICAgKiBAcmV0dXJuIHtCdWZmZXJHZW9tZXRyeT59XHJcbiAgICovXHJcbiAgdG9UcmlhbmdsZXNEcmF3TW9kZTogZnVuY3Rpb24gKGdlb21ldHJ5LCBkcmF3TW9kZSkge1xyXG4gICAgaWYgKGRyYXdNb2RlID09PSBUcmlhbmdsZXNEcmF3TW9kZSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBHZW9tZXRyeSBhbHJlYWR5IGRlZmluZWQgYXMgdHJpYW5nbGVzLidcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSB8fCBkcmF3TW9kZSA9PT0gVHJpYW5nbGVTdHJpcERyYXdNb2RlKSB7XHJcbiAgICAgIHZhciBpbmRleCA9IGdlb21ldHJ5LmdldEluZGV4KCk7XHJcblxyXG4gICAgICAvLyBnZW5lcmF0ZSBpbmRleCBpZiBub3QgcHJlc2VudFxyXG5cclxuICAgICAgaWYgKGluZGV4ID09PSBudWxsKSB7XHJcbiAgICAgICAgdmFyIGluZGljZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xyXG5cclxuICAgICAgICBpZiAocG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NpdGlvbi5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGluZGljZXMucHVzaChpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBnZW9tZXRyeS5zZXRJbmRleChpbmRpY2VzKTtcclxuICAgICAgICAgIGluZGV4ID0gZ2VvbWV0cnkuZ2V0SW5kZXgoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgJ1RIUkVFLkJ1ZmZlckdlb21ldHJ5VXRpbHMudG9UcmlhbmdsZXNEcmF3TW9kZSgpOiBVbmRlZmluZWQgcG9zaXRpb24gYXR0cmlidXRlLiBQcm9jZXNzaW5nIG5vdCBwb3NzaWJsZS4nXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9cclxuXHJcbiAgICAgIHZhciBudW1iZXJPZlRyaWFuZ2xlcyA9IGluZGV4LmNvdW50IC0gMjtcclxuICAgICAgdmFyIG5ld0luZGljZXMgPSBbXTtcclxuXHJcbiAgICAgIGlmIChkcmF3TW9kZSA9PT0gVHJpYW5nbGVGYW5EcmF3TW9kZSkge1xyXG4gICAgICAgIC8vIGdsLlRSSUFOR0xFX0ZBTlxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBudW1iZXJPZlRyaWFuZ2xlczsgaSsrKSB7XHJcbiAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WCgwKSk7XHJcbiAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpKSk7XHJcbiAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpICsgMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBnbC5UUklBTkdMRV9TVFJJUFxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlck9mVHJpYW5nbGVzOyBpKyspIHtcclxuICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpKSk7XHJcbiAgICAgICAgICAgIG5ld0luZGljZXMucHVzaChpbmRleC5nZXRYKGkgKyAxKSk7XHJcbiAgICAgICAgICAgIG5ld0luZGljZXMucHVzaChpbmRleC5nZXRYKGkgKyAyKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpICsgMikpO1xyXG4gICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpICsgMSkpO1xyXG4gICAgICAgICAgICBuZXdJbmRpY2VzLnB1c2goaW5kZXguZ2V0WChpKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobmV3SW5kaWNlcy5sZW5ndGggLyAzICE9PSBudW1iZXJPZlRyaWFuZ2xlcykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAnVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlscy50b1RyaWFuZ2xlc0RyYXdNb2RlKCk6IFVuYWJsZSB0byBnZW5lcmF0ZSBjb3JyZWN0IGFtb3VudCBvZiB0cmlhbmdsZXMuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGJ1aWxkIGZpbmFsIGdlb21ldHJ5XHJcblxyXG4gICAgICB2YXIgbmV3R2VvbWV0cnkgPSBnZW9tZXRyeS5jbG9uZSgpO1xyXG4gICAgICBuZXdHZW9tZXRyeS5zZXRJbmRleChuZXdJbmRpY2VzKTtcclxuICAgICAgbmV3R2VvbWV0cnkuY2xlYXJHcm91cHMoKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXdHZW9tZXRyeTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmVycm9yKCdUSFJFRS5CdWZmZXJHZW9tZXRyeVV0aWxzLnRvVHJpYW5nbGVzRHJhd01vZGUoKTogVW5rbm93biBkcmF3IG1vZGU6JywgZHJhd01vZGUpO1xyXG4gICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBCdWZmZXJHZW9tZXRyeVV0aWxzIH07XHJcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKiBAYXV0aG9yIG1yLmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY2FudmFzOiAhIXdpbmRvdy5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXHJcbiAgd2ViZ2w6IChmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHJcbiAgICAgIHJldHVybiAhISh3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0ICYmIChjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJykpKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSkoKSxcclxuXHJcbiAgd29ya2VyczogISF3aW5kb3cuV29ya2VyLFxyXG4gIGZpbGVhcGk6IHdpbmRvdy5GaWxlICYmIHdpbmRvdy5GaWxlUmVhZGVyICYmIHdpbmRvdy5GaWxlTGlzdCAmJiB3aW5kb3cuQmxvYixcclxuXHJcbiAgZ2V0V2ViR0xFcnJvck1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuaWQgPSAnd2ViZ2wtZXJyb3ItbWVzc2FnZSc7XHJcbiAgICBlbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnbW9ub3NwYWNlJztcclxuICAgIGVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTNweCc7XHJcbiAgICBlbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSAnbm9ybWFsJztcclxuICAgIGVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gJyMwMDAnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzEuNWVtJztcclxuICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSAnNDAwcHgnO1xyXG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnNWVtIGF1dG8gMCc7XHJcblxyXG4gICAgaWYoIXRoaXMud2ViZ2wpIHtcclxuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0ID8gW1xyXG4gICAgICAgICdZb3VyIGdyYXBoaWNzIGNhcmQgZG9lcyBub3Qgc2VlbSB0byBzdXBwb3J0IDxhIGhyZWY9XCJodHRwOi8va2hyb25vcy5vcmcvd2ViZ2wvd2lraS9HZXR0aW5nX2FfV2ViR0xfSW1wbGVtZW50YXRpb25cIiBzdHlsZT1cImNvbG9yOiMwMDAwMDBcIj5XZWJHTDwvYT4uPGJyIC8+JyxcclxuICAgICAgICAnRmluZCBvdXQgaG93IHRvIGdldCBpdCA8YSBocmVmPVwiaHR0cDovL2dldC53ZWJnbC5vcmcvXCIgc3R5bGU9XCJjb2xvcjojMDAwMDAwXCI+aGVyZTwvYT4uJ1xyXG4gICAgICBdLmpvaW4oJ1xcbicpIDogW1xyXG4gICAgICAgICdZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc2VlbSB0byBzdXBwb3J0IDxhIGhyZWY9XCJodHRwOi8va2hyb25vcy5vcmcvd2ViZ2wvd2lraS9HZXR0aW5nX2FfV2ViR0xfSW1wbGVtZW50YXRpb25cIiBzdHlsZT1cImNvbG9yOiMwMDAwMDBcIj5XZWJHTDwvYT4uPGJyLz4nLFxyXG4gICAgICAgICdGaW5kIG91dCBob3cgdG8gZ2V0IGl0IDxhIGhyZWY9XCJodHRwOi8vZ2V0LndlYmdsLm9yZy9cIiBzdHlsZT1cImNvbG9yOiMwMDAwMDBcIj5oZXJlPC9hPi4nXHJcbiAgICAgIF0uam9pbignXFxuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfSxcclxuXHJcbiAgYWRkR2V0V2ViR0xNZXNzYWdlOiBmdW5jdGlvbihwYXJhbWV0ZXJzKSB7XHJcbiAgICB2YXIgcGFyZW50LCBpZCwgZWxlbWVudDtcclxuXHJcbiAgICBwYXJhbWV0ZXJzID0gcGFyYW1ldGVycyB8fCB7fTtcclxuXHJcbiAgICBwYXJlbnQgPSBwYXJhbWV0ZXJzLnBhcmVudCAhPT0gdW5kZWZpbmVkID8gcGFyYW1ldGVycy5wYXJlbnQgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgaWQgPSBwYXJhbWV0ZXJzLmlkICE9PSB1bmRlZmluZWQgPyBwYXJhbWV0ZXJzLmlkIDogJ29sZGllJztcclxuXHJcbiAgICBlbGVtZW50ID0gdGhpcy5nZXRXZWJHTEVycm9yTWVzc2FnZSgpO1xyXG4gICAgZWxlbWVudC5pZCA9IGlkO1xyXG5cclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcbn07XHJcbiIsIi8vIFByb3ZpZGVzIHNpbXBsZSBzdGF0aWMgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgbXVsdGlwbGUgdGltZXMgaW4gdGhlIGFwcFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXJzIHtcclxuICBzdGF0aWMgdGhyb3R0bGUoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSB7XHJcbiAgICB0aHJlc2hob2xkIHx8ICh0aHJlc2hob2xkID0gMjUwKTtcclxuICAgIGxldCBsYXN0LCBkZWZlclRpbWVyO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XHJcblxyXG4gICAgICBjb25zdCBub3cgID0gK25ldyBEYXRlLFxyXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XHJcblxyXG4gICAgICBpZihsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xyXG4gICAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgbGFzdCA9IG5vdztcclxuICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH0sIHRocmVzaGhvbGQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGxhc3QgPSBub3c7XHJcbiAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9nUHJvZ3Jlc3MoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oeGhyKSB7XHJcbiAgICAgIGlmKHhoci5sZW5ndGhDb21wdXRhYmxlKSB7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudENvbXBsZXRlID0geGhyLmxvYWRlZCAvIHhoci50b3RhbCAqIDEwMDtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coTWF0aC5yb3VuZChwZXJjZW50Q29tcGxldGUsIDIpICsgJyUgZG93bmxvYWRlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9nRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oeGhyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoeGhyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBoYW5kbGVDb2xvckNoYW5nZShjb2xvcikge1xyXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xyXG4gICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCcjJywgJzB4Jyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbG9yLnNldEhleCh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZShtZXNoKSB7XHJcbiAgICB0aGlzLm5lZWRzVXBkYXRlKG1lc2gubWF0ZXJpYWwsIG1lc2guZ2VvbWV0cnkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5lZWRzVXBkYXRlKG1hdGVyaWFsLCBnZW9tZXRyeSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICBtYXRlcmlhbC5zaGFkaW5nID0gK21hdGVyaWFsLnNoYWRpbmc7IC8vRW5zdXJlIG51bWJlclxyXG4gICAgICBtYXRlcmlhbC52ZXJ0ZXhDb2xvcnMgPSArbWF0ZXJpYWwudmVydGV4Q29sb3JzOyAvL0Vuc3VyZSBudW1iZXJcclxuICAgICAgbWF0ZXJpYWwuc2lkZSA9ICttYXRlcmlhbC5zaWRlOyAvL0Vuc3VyZSBudW1iZXJcclxuICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICBnZW9tZXRyeS52ZXJ0aWNlc05lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICBnZW9tZXRyeS5ub3JtYWxzTmVlZFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgIGdlb21ldHJ5LmNvbG9yc05lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyB1cGRhdGVUZXh0dXJlKG1hdGVyaWFsLCBtYXRlcmlhbEtleSwgdGV4dHVyZXMpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbihrZXkpIHtcclxuICAgICAgbWF0ZXJpYWxbbWF0ZXJpYWxLZXldID0gdGV4dHVyZXNba2V5XTtcclxuICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiY29uc3QgQUxJQVMgPSB7XHJcbiAgJ2xlZnQnXHRcdDogMzcsXHJcbiAgJ3VwJ1x0XHQgIDogMzgsXHJcbiAgJ3JpZ2h0J1x0XHQ6IDM5LFxyXG4gICdkb3duJ1x0XHQ6IDQwLFxyXG4gICdzcGFjZSdcdFx0OiAzMixcclxuICAndGFiJ1x0XHQgIDogOSxcclxuICAnZXNjYXBlJ1x0OiAyN1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcclxuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQgfHwgZG9jdW1lbnQ7XHJcbiAgICB0aGlzLmtleUNvZGVzID0ge307XHJcblxyXG4gICAgLy8gYmluZCBrZXlFdmVudHNcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLm9uS2V5Q2hhbmdlKGV2ZW50KSwgZmFsc2UpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB0aGlzLm9uS2V5Q2hhbmdlKGV2ZW50KSwgZmFsc2UpO1xyXG5cclxuICAgIC8vIGJpbmQgd2luZG93IGJsdXJcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGhpcy5vbkJsdXIsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4gdGhpcy5vbktleUNoYW5nZShldmVudCksIGZhbHNlKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4gdGhpcy5vbktleUNoYW5nZShldmVudCksIGZhbHNlKTtcclxuXHJcbiAgICAvLyB1bmJpbmQgd2luZG93IGJsdXIgZXZlbnRcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGhpcy5vbkJsdXIsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIGZvcihjb25zdCBwcm9wIGluIHRoaXMua2V5Q29kZXMpXHJcbiAgICAgIHRoaXMua2V5Q29kZXNbcHJvcF0gPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uS2V5Q2hhbmdlKGV2ZW50KSB7XHJcbiAgICAvLyBsb2cgdG8gZGVidWdcclxuICAgIC8vY29uc29sZS5sb2coJ29uS2V5Q2hhbmdlJywgZXZlbnQsIGV2ZW50LmtleUNvZGUsIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50Lm1ldGFLZXkpXHJcblxyXG4gICAgLy8gdXBkYXRlIHRoaXMua2V5Q29kZXNcclxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xyXG4gICAgdGhpcy5rZXlDb2Rlc1trZXlDb2RlXSA9IGV2ZW50LnR5cGUgPT09ICdrZXlkb3duJztcclxuICB9XHJcblxyXG4gIHByZXNzZWQoa2V5RGVzYykge1xyXG4gICAgY29uc3Qga2V5cyA9IGtleURlc2Muc3BsaXQoJysnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGxldCBwcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIGlmKE9iamVjdC5rZXlzKEFMSUFTKS5pbmRleE9mKGtleSkgIT0gLTEpIHtcclxuICAgICAgICBwcmVzc2VkID0gdGhpcy5rZXlDb2Rlc1tBTElBU1trZXldXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcmVzc2VkID0gdGhpcy5rZXlDb2Rlc1trZXkudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApXTtcclxuICAgICAgfVxyXG4gICAgICBpZighcHJlc3NlZClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBldmVudE1hdGNoZXMoZXZlbnQsIGtleURlc2MpIHtcclxuICAgIGNvbnN0IGFsaWFzZXMgPSBBTElBUztcclxuICAgIGNvbnN0IGFsaWFzS2V5cyA9IE9iamVjdC5rZXlzKGFsaWFzZXMpO1xyXG4gICAgY29uc3Qga2V5cyA9IGtleURlc2Muc3BsaXQoJysnKTtcclxuICAgIC8vIGxvZyB0byBkZWJ1Z1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2V2ZW50TWF0Y2hlcycsIGV2ZW50LCBldmVudC5rZXlDb2RlLCBldmVudC5zaGlmdEtleSwgZXZlbnQuY3RybEtleSwgZXZlbnQuYWx0S2V5LCBldmVudC5tZXRhS2V5KVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgbGV0IHByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgaWYoa2V5ID09PSAnc2hpZnQnKSB7XHJcbiAgICAgICAgcHJlc3NlZCA9IGV2ZW50LnNoaWZ0S2V5ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYoa2V5ID09PSAnY3RybCcpIHtcclxuICAgICAgICBwcmVzc2VkID0gZXZlbnQuY3RybEtleSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmKGtleSA9PT0gJ2FsdCcpIHtcclxuICAgICAgICBwcmVzc2VkID0gZXZlbnQuYWx0S2V5ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYoa2V5ID09PSAnbWV0YScpIHtcclxuICAgICAgICBwcmVzc2VkID0gZXZlbnQubWV0YUtleSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmKGFsaWFzS2V5cy5pbmRleE9mKGtleSkgIT09IC0xKSB7XHJcbiAgICAgICAgcHJlc3NlZCA9IGV2ZW50LmtleUNvZGUgPT09IGFsaWFzZXNba2V5XTtcclxuICAgICAgfSBlbHNlIGlmKGV2ZW50LmtleUNvZGUgPT09IGtleS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICBwcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZighcHJlc3NlZClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRIUkVFKSB7XHJcbiAgdmFyIE1PVVNFID0gVEhSRUUuTU9VU0U7XHJcbiAgaWYgKCFNT1VTRSkgTU9VU0UgPSB7IExFRlQ6IDAsIE1JRERMRTogMSwgUklHSFQ6IDIgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cclxuICAgKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXHJcbiAgICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cclxuICAgKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcclxuICAgKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXHJcbiAgICovXHJcbiAgLypnbG9iYWwgVEhSRUUsIGNvbnNvbGUgKi9cclxuXHJcbiAgZnVuY3Rpb24gT3JiaXRDb25zdHJhaW50KG9iamVjdCkge1xyXG4gICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcblxyXG4gICAgLy8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXHJcbiAgICAvLyBhbmQgd2hlcmUgaXQgcGFucyB3aXRoIHJlc3BlY3QgdG8uXHJcbiAgICB0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgLy8gTGltaXRzIHRvIGhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXHJcbiAgICB0aGlzLm1pbkRpc3RhbmNlID0gMDtcclxuICAgIHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICAvLyBMaW1pdHMgdG8gaG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcclxuICAgIHRoaXMubWluWm9vbSA9IDA7XHJcbiAgICB0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcclxuXHJcbiAgICAvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cclxuICAgIC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxyXG4gICAgdGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xyXG4gICAgdGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xyXG5cclxuICAgIC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXHJcbiAgICAvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXHJcbiAgICB0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC1JbmZpbml0eTsgLy8gcmFkaWFuc1xyXG4gICAgdGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xyXG5cclxuICAgIC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxyXG4gICAgLy8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3BcclxuICAgIHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcclxuXHJcbiAgICAvLy8vLy8vLy8vLy9cclxuICAgIC8vIGludGVybmFsc1xyXG5cclxuICAgIHZhciBzY29wZSA9IHRoaXM7XHJcblxyXG4gICAgdmFyIEVQUyA9IDAuMDAwMDAxO1xyXG5cclxuICAgIC8vIEN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGUgc3lzdGVtLlxyXG4gICAgdmFyIHRoZXRhO1xyXG4gICAgdmFyIHBoaTtcclxuXHJcbiAgICAvLyBQZW5kaW5nIGNoYW5nZXNcclxuICAgIHZhciBwaGlEZWx0YSA9IDA7XHJcbiAgICB2YXIgdGhldGFEZWx0YSA9IDA7XHJcbiAgICB2YXIgc2NhbGUgPSAxO1xyXG4gICAgdmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgICB2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBBUElcclxuXHJcbiAgICB0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBwaGk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGV0YTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yb3RhdGVMZWZ0ID0gZnVuY3Rpb24gKGFuZ2xlKSB7XHJcbiAgICAgIHRoZXRhRGVsdGEgLT0gYW5nbGU7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucm90YXRlVXAgPSBmdW5jdGlvbiAoYW5nbGUpIHtcclxuICAgICAgcGhpRGVsdGEgLT0gYW5nbGU7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHBhc3MgaW4gZGlzdGFuY2UgaW4gd29ybGQgc3BhY2UgdG8gbW92ZSBsZWZ0XHJcbiAgICB0aGlzLnBhbkxlZnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gcGFuTGVmdChkaXN0YW5jZSkge1xyXG4gICAgICAgIHZhciB0ZSA9IHRoaXMub2JqZWN0Lm1hdHJpeC5lbGVtZW50cztcclxuXHJcbiAgICAgICAgLy8gZ2V0IFggY29sdW1uIG9mIG1hdHJpeFxyXG4gICAgICAgIHYuc2V0KHRlWzBdLCB0ZVsxXSwgdGVbMl0pO1xyXG4gICAgICAgIHYubXVsdGlwbHlTY2FsYXIoLWRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgcGFuT2Zmc2V0LmFkZCh2KTtcclxuICAgICAgfTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgLy8gcGFzcyBpbiBkaXN0YW5jZSBpbiB3b3JsZCBzcGFjZSB0byBtb3ZlIHVwXHJcbiAgICB0aGlzLnBhblVwID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHBhblVwKGRpc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHRlID0gdGhpcy5vYmplY3QubWF0cml4LmVsZW1lbnRzO1xyXG5cclxuICAgICAgICAvLyBnZXQgWSBjb2x1bW4gb2YgbWF0cml4XHJcbiAgICAgICAgdi5zZXQodGVbNF0sIHRlWzVdLCB0ZVs2XSk7XHJcbiAgICAgICAgdi5tdWx0aXBseVNjYWxhcihkaXN0YW5jZSk7XHJcblxyXG4gICAgICAgIHBhbk9mZnNldC5hZGQodik7XHJcbiAgICAgIH07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIHBhc3MgaW4geCx5IG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxyXG4gICAgLy8gcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXHJcbiAgICB0aGlzLnBhbiA9IGZ1bmN0aW9uIChkZWx0YVgsIGRlbHRhWSwgc2NyZWVuV2lkdGgsIHNjcmVlbkhlaWdodCkge1xyXG4gICAgICBpZiAoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEpIHtcclxuICAgICAgICAvLyBwZXJzcGVjdGl2ZVxyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24uY2xvbmUoKS5zdWIoc2NvcGUudGFyZ2V0KTtcclxuICAgICAgICB2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxyXG4gICAgICAgIHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCgoc2NvcGUub2JqZWN0LmZvdiAvIDIpICogTWF0aC5QSSkgLyAxODAuMCk7XHJcblxyXG4gICAgICAgIC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcclxuICAgICAgICBzY29wZS5wYW5MZWZ0KCgyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UpIC8gc2NyZWVuSGVpZ2h0KTtcclxuICAgICAgICBzY29wZS5wYW5VcCgoMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlKSAvIHNjcmVlbkhlaWdodCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcbiAgICAgICAgLy8gb3J0aG9ncmFwaGljXHJcbiAgICAgICAgc2NvcGUucGFuTGVmdCgoZGVsdGFYICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSkgLyBzY3JlZW5XaWR0aCk7XHJcbiAgICAgICAgc2NvcGUucGFuVXAoKGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkpIC8gc2NyZWVuSGVpZ2h0KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgb3IgcGVyc3BlY3RpdmVcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLidcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZG9sbHlJbiA9IGZ1bmN0aW9uIChkb2xseVNjYWxlKSB7XHJcbiAgICAgIGlmIChzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSkge1xyXG4gICAgICAgIHNjYWxlIC89IGRvbGx5U2NhbGU7XHJcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcbiAgICAgICAgc2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heChcclxuICAgICAgICAgIHRoaXMubWluWm9vbSxcclxuICAgICAgICAgIE1hdGgubWluKHRoaXMubWF4Wm9vbSwgdGhpcy5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG4gICAgICAgIHpvb21DaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmRvbGx5T3V0ID0gZnVuY3Rpb24gKGRvbGx5U2NhbGUpIHtcclxuICAgICAgaWYgKHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKSB7XHJcbiAgICAgICAgc2NhbGUgKj0gZG9sbHlTY2FsZTtcclxuICAgICAgfSBlbHNlIGlmIChzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEpIHtcclxuICAgICAgICBzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KFxyXG4gICAgICAgICAgdGhpcy5taW5ab29tLFxyXG4gICAgICAgICAgTWF0aC5taW4odGhpcy5tYXhab29tLCB0aGlzLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgICAgem9vbUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLidcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMudXBkYXRlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG4gICAgICAvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcclxuICAgICAgdmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcclxuICAgICAgdmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcclxuXHJcbiAgICAgIHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG4gICAgICB2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLm9iamVjdC5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgb2Zmc2V0LmNvcHkocG9zaXRpb24pLnN1Yih0aGlzLnRhcmdldCk7XHJcblxyXG4gICAgICAgIC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxyXG4gICAgICAgIG9mZnNldC5hcHBseVF1YXRlcm5pb24ocXVhdCk7XHJcblxyXG4gICAgICAgIC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcclxuXHJcbiAgICAgICAgdGhldGEgPSBNYXRoLmF0YW4yKG9mZnNldC54LCBvZmZzZXQueik7XHJcblxyXG4gICAgICAgIC8vIGFuZ2xlIGZyb20geS1heGlzXHJcblxyXG4gICAgICAgIHBoaSA9IE1hdGguYXRhbjIoTWF0aC5zcXJ0KG9mZnNldC54ICogb2Zmc2V0LnggKyBvZmZzZXQueiAqIG9mZnNldC56KSwgb2Zmc2V0LnkpO1xyXG5cclxuICAgICAgICB0aGV0YSArPSB0aGV0YURlbHRhO1xyXG4gICAgICAgIHBoaSArPSBwaGlEZWx0YTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gICAgICAgIHRoZXRhID0gTWF0aC5tYXgodGhpcy5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKHRoaXMubWF4QXppbXV0aEFuZ2xlLCB0aGV0YSkpO1xyXG5cclxuICAgICAgICAvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KHRoaXMubWluUG9sYXJBbmdsZSwgTWF0aC5taW4odGhpcy5tYXhQb2xhckFuZ2xlLCBwaGkpKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZSBFUFMgYW5kIFBJLUVQU1xyXG4gICAgICAgIHBoaSA9IE1hdGgubWF4KEVQUywgTWF0aC5taW4oTWF0aC5QSSAtIEVQUywgcGhpKSk7XHJcblxyXG4gICAgICAgIHZhciByYWRpdXMgPSBvZmZzZXQubGVuZ3RoKCkgKiBzY2FsZTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuICAgICAgICByYWRpdXMgPSBNYXRoLm1heCh0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLm1pbih0aGlzLm1heERpc3RhbmNlLCByYWRpdXMpKTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXHJcbiAgICAgICAgdGhpcy50YXJnZXQuYWRkKHBhbk9mZnNldCk7XHJcblxyXG4gICAgICAgIG9mZnNldC54ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICBvZmZzZXQueSA9IHJhZGl1cyAqIE1hdGguY29zKHBoaSk7XHJcbiAgICAgICAgb2Zmc2V0LnogPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpO1xyXG5cclxuICAgICAgICAvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2VcclxuICAgICAgICBvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKHF1YXRJbnZlcnNlKTtcclxuXHJcbiAgICAgICAgcG9zaXRpb24uY29weSh0aGlzLnRhcmdldCkuYWRkKG9mZnNldCk7XHJcblxyXG4gICAgICAgIHRoaXMub2JqZWN0Lmxvb2tBdCh0aGlzLnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZURhbXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRoZXRhRGVsdGEgKj0gMSAtIHRoaXMuZGFtcGluZ0ZhY3RvcjtcclxuICAgICAgICAgIHBoaURlbHRhICo9IDEgLSB0aGlzLmRhbXBpbmdGYWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoZXRhRGVsdGEgPSAwO1xyXG4gICAgICAgICAgcGhpRGVsdGEgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2NhbGUgPSAxO1xyXG4gICAgICAgIHBhbk9mZnNldC5zZXQoMCwgMCwgMCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XHJcbiAgICAgICAgLy8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXHJcbiAgICAgICAgLy8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XHJcblxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHpvb21DaGFuZ2VkIHx8XHJcbiAgICAgICAgICBsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQodGhpcy5vYmplY3QucG9zaXRpb24pID4gRVBTIHx8XHJcbiAgICAgICAgICA4ICogKDEgLSBsYXN0UXVhdGVybmlvbi5kb3QodGhpcy5vYmplY3QucXVhdGVybmlvbikpID4gRVBTXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBsYXN0UG9zaXRpb24uY29weSh0aGlzLm9iamVjdC5wb3NpdGlvbik7XHJcbiAgICAgICAgICBsYXN0UXVhdGVybmlvbi5jb3B5KHRoaXMub2JqZWN0LnF1YXRlcm5pb24pO1xyXG4gICAgICAgICAgem9vbUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfTtcclxuICAgIH0pKCk7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy4gSXQgbWFpbnRhaW5zXHJcbiAgLy8gdGhlIFwidXBcIiBkaXJlY3Rpb24gYXMgK1ksIHVubGlrZSB0aGUgVHJhY2tiYWxsQ29udHJvbHMuIFRvdWNoIG9uIHRhYmxldCBhbmQgcGhvbmVzIGlzXHJcbiAgLy8gc3VwcG9ydGVkLlxyXG4gIC8vXHJcbiAgLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxyXG4gIC8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXHJcbiAgLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXHJcblxyXG4gIGZ1bmN0aW9uIE9yYml0Q29udHJvbHMob2JqZWN0LCBkb21FbGVtZW50KSB7XHJcbiAgICB2YXIgY29uc3RyYWludCA9IG5ldyBPcmJpdENvbnN0cmFpbnQob2JqZWN0KTtcclxuXHJcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XHJcblxyXG4gICAgLy8gQVBJXHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdjb25zdHJhaW50Jywge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gY29uc3RyYWludDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIGNvbnN0cmFpbnQuZ2V0UG9sYXJBbmdsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gY29uc3RyYWludC5nZXRBemltdXRoYWxBbmdsZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcclxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgLy8gY2VudGVyIGlzIG9sZCwgZGVwcmVjYXRlZDsgdXNlIFwidGFyZ2V0XCIgaW5zdGVhZFxyXG4gICAgdGhpcy5jZW50ZXIgPSB0aGlzLnRhcmdldDtcclxuXHJcbiAgICAvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yXHJcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cclxuICAgIC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcclxuICAgIHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XHJcbiAgICB0aGlzLnpvb21TcGVlZCA9IDEuMDtcclxuXHJcbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xyXG4gICAgdGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG4gICAgdGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcclxuXHJcbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXHJcbiAgICB0aGlzLmVuYWJsZVBhbiA9IHRydWU7XHJcbiAgICB0aGlzLmtleVBhblNwZWVkID0gNy4wOyAvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXHJcblxyXG4gICAgLy8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcclxuICAgIC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxyXG4gICAgdGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcclxuXHJcbiAgICAvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcclxuICAgIHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XHJcblxyXG4gICAgLy8gVGhlIGZvdXIgYXJyb3cga2V5c1xyXG4gICAgdGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcclxuXHJcbiAgICAvLyBNb3VzZSBidXR0b25zXHJcbiAgICB0aGlzLm1vdXNlQnV0dG9ucyA9IHtcclxuICAgICAgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsXHJcbiAgICAgIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSxcclxuICAgICAgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCxcclxuICAgIH07XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vXHJcbiAgICAvLyBpbnRlcm5hbHNcclxuXHJcbiAgICB2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuICAgIHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG4gICAgdmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuICAgIHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcbiAgICB2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcbiAgICB2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG4gICAgdmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuICAgIHZhciBTVEFURSA9IHtcclxuICAgICAgTk9ORTogLTEsXHJcbiAgICAgIFJPVEFURTogMCxcclxuICAgICAgRE9MTFk6IDEsXHJcbiAgICAgIFBBTjogMixcclxuICAgICAgVE9VQ0hfUk9UQVRFOiAzLFxyXG4gICAgICBUT1VDSF9ET0xMWTogNCxcclxuICAgICAgVE9VQ0hfUEFOOiA1LFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgIC8vIGZvciByZXNldFxyXG5cclxuICAgIHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XHJcbiAgICB0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICB0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcclxuXHJcbiAgICAvLyBldmVudHNcclxuXHJcbiAgICB2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XHJcbiAgICB2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xyXG4gICAgdmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xyXG5cclxuICAgIC8vIHBhc3MgaW4geCx5IG9mIGNoYW5nZSBkZXNpcmVkIGluIHBpeGVsIHNwYWNlLFxyXG4gICAgLy8gcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXHJcbiAgICBmdW5jdGlvbiBwYW4oZGVsdGFYLCBkZWx0YVkpIHtcclxuICAgICAgdmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdHJhaW50LnBhbihkZWx0YVgsIGRlbHRhWSwgZWxlbWVudC5jbGllbnRXaWR0aCwgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FKSB7XHJcbiAgICAgICAgY29uc3RyYWludC5yb3RhdGVMZWZ0KGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29uc3RyYWludC51cGRhdGUoKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuICAgICAgdGhpcy50YXJnZXQuY29weSh0aGlzLnRhcmdldDApO1xyXG4gICAgICB0aGlzLm9iamVjdC5wb3NpdGlvbi5jb3B5KHRoaXMucG9zaXRpb24wKTtcclxuICAgICAgdGhpcy5vYmplY3Quem9vbSA9IHRoaXMuem9vbTA7XHJcblxyXG4gICAgICB0aGlzLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcclxuICAgICAgcmV0dXJuICgoMiAqIE1hdGguUEkpIC8gNjAgLyA2MCkgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xyXG4gICAgICByZXR1cm4gTWF0aC5wb3coMC45NSwgc2NvcGUuem9vbVNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xyXG4gICAgICBpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQpIHtcclxuICAgICAgICBpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzdGF0ZSA9IFNUQVRFLlJPVEFURTtcclxuXHJcbiAgICAgICAgcm90YXRlU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00pIHtcclxuICAgICAgICBpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgc3RhdGUgPSBTVEFURS5ET0xMWTtcclxuXHJcbiAgICAgICAgZG9sbHlTdGFydC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOKSB7XHJcbiAgICAgICAgaWYgKHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgc3RhdGUgPSBTVEFURS5QQU47XHJcblxyXG4gICAgICAgIHBhblN0YXJ0LnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXRlICE9PSBTVEFURS5OT05FKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XHJcbiAgICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcbiAgICAgIGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuICAgICAgaWYgKHN0YXRlID09PSBTVEFURS5ST1RBVEUpIHtcclxuICAgICAgICBpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICByb3RhdGVFbmQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG4gICAgICAgIHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMocm90YXRlRW5kLCByb3RhdGVTdGFydCk7XHJcblxyXG4gICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcclxuICAgICAgICBjb25zdHJhaW50LnJvdGF0ZUxlZnQoXHJcbiAgICAgICAgICAoKDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCkgLyBlbGVtZW50LmNsaWVudFdpZHRoKSAqIHNjb3BlLnJvdGF0ZVNwZWVkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcbiAgICAgICAgY29uc3RyYWludC5yb3RhdGVVcChcclxuICAgICAgICAgICgoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55KSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0KSAqIHNjb3BlLnJvdGF0ZVNwZWVkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcm90YXRlU3RhcnQuY29weShyb3RhdGVFbmQpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBTVEFURS5ET0xMWSkge1xyXG4gICAgICAgIGlmIChzY29wZS5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBkb2xseUVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICAgICAgZG9sbHlEZWx0YS5zdWJWZWN0b3JzKGRvbGx5RW5kLCBkb2xseVN0YXJ0KTtcclxuXHJcbiAgICAgICAgaWYgKGRvbGx5RGVsdGEueSA+IDApIHtcclxuICAgICAgICAgIGNvbnN0cmFpbnQuZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkb2xseURlbHRhLnkgPCAwKSB7XHJcbiAgICAgICAgICBjb25zdHJhaW50LmRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvbGx5U3RhcnQuY29weShkb2xseUVuZCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFNUQVRFLlBBTikge1xyXG4gICAgICAgIGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHBhbkVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcbiAgICAgICAgcGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcclxuXHJcbiAgICAgICAgcGFuKHBhbkRlbHRhLngsIHBhbkRlbHRhLnkpO1xyXG5cclxuICAgICAgICBwYW5TdGFydC5jb3B5KHBhbkVuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSkgc2NvcGUudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKC8qIGV2ZW50ICovKSB7XHJcbiAgICAgIGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xyXG4gICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KGVuZEV2ZW50KTtcclxuICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VXaGVlbChldmVudCkge1xyXG4gICAgICBpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgc3RhdGUgIT09IFNUQVRFLk5PTkUpIHJldHVybjtcclxuXHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgdmFyIGRlbHRhID0gMDtcclxuXHJcbiAgICAgIGlmIChldmVudC53aGVlbERlbHRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyBXZWJLaXQgLyBPcGVyYSAvIEV4cGxvcmVyIDlcclxuXHJcbiAgICAgICAgZGVsdGEgPSBldmVudC53aGVlbERlbHRhO1xyXG4gICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gRmlyZWZveFxyXG5cclxuICAgICAgICBkZWx0YSA9IC1ldmVudC5kZXRhaWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICBjb25zdHJhaW50LmRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcclxuICAgICAgfSBlbHNlIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICBjb25zdHJhaW50LmRvbGx5SW4oZ2V0Wm9vbVNjYWxlKCkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTtcclxuICAgICAgc2NvcGUuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgIGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2Ugc2NvcGUua2V5cy5VUDpcclxuICAgICAgICAgIHBhbigwLCBzY29wZS5rZXlQYW5TcGVlZCk7XHJcbiAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxyXG4gICAgICAgICAgcGFuKDAsIC1zY29wZS5rZXlQYW5TcGVlZCk7XHJcbiAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuTEVGVDpcclxuICAgICAgICAgIHBhbihzY29wZS5rZXlQYW5TcGVlZCwgMCk7XHJcbiAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNjb3BlLmtleXMuUklHSFQ6XHJcbiAgICAgICAgICBwYW4oLXNjb3BlLmtleVBhblNwZWVkLCAwKTtcclxuICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaHN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgIGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgc3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcclxuICAgICAgICAgIGlmIChzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XHJcblxyXG4gICAgICAgICAgcm90YXRlU3RhcnQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG4gICAgICAgICAgaWYgKHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcclxuXHJcbiAgICAgICAgICB2YXIgZHggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWDtcclxuICAgICAgICAgIHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSBldmVudC50b3VjaGVzWzFdLnBhZ2VZO1xyXG4gICAgICAgICAgdmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgICAgICAgIGRvbGx5U3RhcnQuc2V0KDAsIGRpc3RhbmNlKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cclxuICAgICAgICAgIGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XHJcblxyXG4gICAgICAgICAgcGFuU3RhcnQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSkgc2NvcGUuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3VjaG1vdmUoZXZlbnQpIHtcclxuICAgICAgaWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuICAgICAgc3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgIGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcclxuICAgICAgICAgIGlmIChzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICBpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgIHJvdGF0ZUVuZC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XHJcbiAgICAgICAgICByb3RhdGVEZWx0YS5zdWJWZWN0b3JzKHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQpO1xyXG5cclxuICAgICAgICAgIC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcclxuICAgICAgICAgIGNvbnN0cmFpbnQucm90YXRlTGVmdChcclxuICAgICAgICAgICAgKCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLngpIC8gZWxlbWVudC5jbGllbnRXaWR0aCkgKiBzY29wZS5yb3RhdGVTcGVlZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxyXG4gICAgICAgICAgY29uc3RyYWludC5yb3RhdGVVcChcclxuICAgICAgICAgICAgKCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkpIC8gZWxlbWVudC5jbGllbnRIZWlnaHQpICogc2NvcGUucm90YXRlU3BlZWRcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgcm90YXRlU3RhcnQuY29weShyb3RhdGVFbmQpO1xyXG5cclxuICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG4gICAgICAgICAgaWYgKHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgICBpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgdmFyIGR4ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVg7XHJcbiAgICAgICAgICB2YXIgZHkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWTtcclxuICAgICAgICAgIHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG4gICAgICAgICAgZG9sbHlFbmQuc2V0KDAsIGRpc3RhbmNlKTtcclxuICAgICAgICAgIGRvbGx5RGVsdGEuc3ViVmVjdG9ycyhkb2xseUVuZCwgZG9sbHlTdGFydCk7XHJcblxyXG4gICAgICAgICAgaWYgKGRvbGx5RGVsdGEueSA+IDApIHtcclxuICAgICAgICAgICAgY29uc3RyYWludC5kb2xseU91dChnZXRab29tU2NhbGUoKSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGRvbGx5RGVsdGEueSA8IDApIHtcclxuICAgICAgICAgICAgY29uc3RyYWludC5kb2xseUluKGdldFpvb21TY2FsZSgpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBkb2xseVN0YXJ0LmNvcHkoZG9sbHlFbmQpO1xyXG5cclxuICAgICAgICAgIHNjb3BlLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxyXG4gICAgICAgICAgaWYgKHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICAgIGlmIChzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgcGFuRW5kLnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcclxuICAgICAgICAgIHBhbkRlbHRhLnN1YlZlY3RvcnMocGFuRW5kLCBwYW5TdGFydCk7XHJcblxyXG4gICAgICAgICAgcGFuKHBhbkRlbHRhLngsIHBhbkRlbHRhLnkpO1xyXG5cclxuICAgICAgICAgIHBhblN0YXJ0LmNvcHkocGFuRW5kKTtcclxuXHJcbiAgICAgICAgICBzY29wZS51cGRhdGUoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG91Y2hlbmQoLyogZXZlbnQgKi8pIHtcclxuICAgICAgaWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICBzY29wZS5kaXNwYXRjaEV2ZW50KGVuZEV2ZW50KTtcclxuICAgICAgc3RhdGUgPSBTVEFURS5OT05FO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnRleHRtZW51KGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBjb250ZXh0bWVudSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlKTtcclxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTtcclxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTsgLy8gZmlyZWZveFxyXG5cclxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0LCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRvdWNoZW5kLCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIGZhbHNlKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcclxuXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGNvbnRleHRtZW51LCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XHJcbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01vek1vdXNlUGl4ZWxTY3JvbGwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTsgLy8gZmlyZWZveFxyXG5cclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdG91Y2hzdGFydCwgZmFsc2UpO1xyXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hlbmQsIGZhbHNlKTtcclxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0b3VjaG1vdmUsIGZhbHNlKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xyXG5cclxuICAgIC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIE9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlKTtcclxuICBPcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9yYml0Q29udHJvbHM7XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XHJcbiAgICBvYmplY3Q6IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RyYWludC5vYmplY3Q7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIHRhcmdldDoge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50LnRhcmdldDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiB0YXJnZXQgaXMgbm93IGltbXV0YWJsZS4gVXNlIHRhcmdldC5zZXQoKSBpbnN0ZWFkLicpO1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC50YXJnZXQuY29weSh2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1pbkRpc3RhbmNlOiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cmFpbnQubWluRGlzdGFuY2U7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC5taW5EaXN0YW5jZSA9IHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBtYXhEaXN0YW5jZToge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50Lm1heERpc3RhbmNlO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnQubWF4RGlzdGFuY2UgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbWluWm9vbToge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50Lm1pblpvb207XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC5taW5ab29tID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1heFpvb206IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RyYWludC5tYXhab29tO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnQubWF4Wm9vbSA9IHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBtaW5Qb2xhckFuZ2xlOiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cmFpbnQubWluUG9sYXJBbmdsZTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdHJhaW50Lm1pblBvbGFyQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbWF4UG9sYXJBbmdsZToge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50Lm1heFBvbGFyQW5nbGU7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC5tYXhQb2xhckFuZ2xlID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG1pbkF6aW11dGhBbmdsZToge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50Lm1pbkF6aW11dGhBbmdsZTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb25zdHJhaW50Lm1pbkF6aW11dGhBbmdsZSA9IHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBtYXhBemltdXRoQW5nbGU6IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RyYWludC5tYXhBemltdXRoQW5nbGU7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC5tYXhBemltdXRoQW5nbGUgPSB2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgZW5hYmxlRGFtcGluZzoge1xyXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJhaW50LmVuYWJsZURhbXBpbmc7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC5lbmFibGVEYW1waW5nID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGRhbXBpbmdGYWN0b3I6IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RyYWludC5kYW1waW5nRmFjdG9yO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnN0cmFpbnQuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcblxyXG4gICAgbm9ab29tOiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nKTtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZW5hYmxlWm9vbTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlWm9vbSA9ICF2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbm9Sb3RhdGU6IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5lbmFibGVSb3RhdGU7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmVuYWJsZVJvdGF0ZSA9ICF2YWx1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgbm9QYW46IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nKTtcclxuICAgICAgICByZXR1cm4gIXRoaXMuZW5hYmxlUGFuO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicpO1xyXG4gICAgICAgIHRoaXMuZW5hYmxlUGFuID0gIXZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBub0tleXM6IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicpO1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5lbmFibGVLZXlzO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyk7XHJcbiAgICAgICAgdGhpcy5lbmFibGVLZXlzID0gIXZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGF0aWNNb3Zpbmc6IHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmNvbnN0cmFpbnQuZW5hYmxlRGFtcGluZztcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb25zdHJhaW50LmVuYWJsZURhbXBpbmcgPSAhdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIGR5bmFtaWNEYW1waW5nRmFjdG9yOiB7XHJcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RyYWludC5kYW1waW5nRmFjdG9yO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLidcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY29uc3RyYWludC5kYW1waW5nRmFjdG9yID0gdmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gT3JiaXRDb250cm9scztcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==

"use strict";
      const $ = (i) => document.getElementById(i),
        sm = (x) => {
          x = Math.max(0, Math.min(1, x));
          return x * x * (3 - 2 * x);
        },
        cl = (v, a, b) => Math.max(a, Math.min(b, v)),
        wr = (x) =>
          ((((x + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) -
          Math.PI;
      /* ---------- renderer / scene ---------- */
      const R = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: "high-performance",
      });
      R.domElement.id = "cv";
      document.body.prepend(R.domElement);
      R.setPixelRatio(Math.min(devicePixelRatio || 1, innerWidth < 700 ? 1.25 : 1.5));
      R.shadowMap.enabled = true;
      R.shadowMap.type = THREE.PCFSoftShadowMap;
      R.toneMapping = THREE.ACESFilmicToneMapping;
      R.toneMappingExposure = 1.25;
      const sc = new THREE.Scene(),
        cam = new THREE.PerspectiveCamera(58, 1, 0.1, 1800);
      sc.fog = new THREE.Fog(0, 30, 110);
      sc.background = new THREE.Color(0x03040a);
      let QP = 1,
        bw = 1,
        bh = 1;
      function rs() {
        bw = Math.ceil(innerWidth / QP);
        bh = Math.ceil(innerHeight / QP);
        R.setSize(bw, bh, false);
        cam.aspect = innerWidth / innerHeight;
        cam.updateProjectionMatrix();
      }
      addEventListener("resize", rs);
      rs();
      const amb = new THREE.HemisphereLight(0xffffff, 0x555566, 0.8),
        sun = new THREE.DirectionalLight(0xffffff, 1.1);
      sun.castShadow = true;
      sun.shadow.mapSize.set(innerWidth < 700 ? 1024 : 2048, innerWidth < 700 ? 1024 : 2048);
      {
        const c = sun.shadow.camera;
        c.left = c.bottom = -30;
        c.right = c.top = 30;
        c.near = 1;
        c.far = 100;
        sun.shadow.bias = -0.0006;
      }
      sc.add(amb, sun, sun.target);
      const W = new THREE.Group();
      sc.add(W);
      /* ---------- voxel helpers ---------- */
      const UB = new THREE.BoxGeometry(1, 1, 1),
        MC2 = {};
      const L = (c, e) =>
        MC2[c + "_" + (e | 0)] ||
        (MC2[c + "_" + (e | 0)] = new THREE.MeshLambertMaterial({
          color: c,
          emissive: e ? c : 0,
        }));
      const shade = (h, f) => new THREE.Color(h).multiplyScalar(f).getHex();
      function V(g, l) {
        for (const [w, h, d, x, y, z, c, e] of l) {
          const m = new THREE.Mesh(UB, L(c, e));
          m.scale.set(w, h, d);
          m.position.set(x, y, z);
          m.castShadow = true;
          g.add(m);
        }
        return g;
      }
      const G = () => new THREE.Group();
      function Cy(g, rt, rb, h, x, y, z, c, e, seg, rx, rz) {
        const m = new THREE.Mesh(
          new THREE.CylinderGeometry(rt, rb, h, seg || 10),
          L(c, e),
        );
        m.position.set(x, y, z);
        if (rx) m.rotation.x = rx;
        if (rz) m.rotation.z = rz;
        m.castShadow = true;
        g.add(m);
        return m;
      }
      function Sp(g, r, x, y, z, c, e) {
        const m = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), L(c, e));
        m.position.set(x, y, z);
        m.castShadow = true;
        g.add(m);
        return m;
      }
      const nT = (c) => {
          const k = document.createElement("canvas");
          k.width = k.height = 64;
          const x = k.getContext("2d"),
            g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
          g.addColorStop(0, c);
          g.addColorStop(1, "rgba(0,0,0,0)");
          x.fillStyle = g;
          x.fillRect(0, 0, 64, 64);
          return new THREE.CanvasTexture(k);
        },
        NT = {};
      /* planets */
      function ptex(k) {
        const c = document.createElement("canvas");
        c.width = 512;
        c.height = 256;
        const x = c.getContext("2d"),
          r = Math.random,
          blob = (col, n, a, b, al) => {
            for (let i = 0; i < n; i++) {
              x.globalAlpha = al;
              x.fillStyle = col;
              x.beginPath();
              x.arc(r() * 512, r() * 256, a + r() * (b - a), 0, 6.3);
              x.fill();
            }
            x.globalAlpha = 1;
          };
        if (k === "moon") {
          x.fillStyle = "#9b9baa";
          x.fillRect(0, 0, 512, 256);
          blob("#5d5d70", 14, 14, 46, 0.22);
          blob("#c9c9d6", 260, 1, 6, 0.18);
          blob("#4a4a5c", 160, 1, 5, 0.2);
        } else if (k === "mars") {
          x.fillStyle = "#b9552c";
          x.fillRect(0, 0, 512, 256);
          blob("#6e2a14", 16, 16, 50, 0.3);
          blob("#d98650", 30, 10, 35, 0.2);
          blob("#7a3018", 120, 1, 5, 0.25);
          x.fillStyle = "#f4ece4";
          x.fillRect(0, 0, 512, 10);
          x.fillRect(0, 246, 512, 10);
        } else if (k === "earth") {
          x.fillStyle = "#1a5db0";
          x.fillRect(0, 0, 512, 256);
          blob("#2f8a46", 22, 12, 48, 0.95);
          blob("#c9b377", 10, 6, 18, 0.9);
          blob("#ffffff", 70, 6, 26, 0.45);
          x.fillStyle = "#fff";
          x.fillRect(0, 0, 512, 12);
          x.fillRect(0, 244, 512, 12);
        } else if (k === "saturn") {
          const g = x.createLinearGradient(0, 0, 0, 256);
          [
            "#d9c08a",
            "#b99a64",
            "#e8d6a4",
            "#a98a58",
            "#d9c08a",
            "#c4a874",
          ].forEach((s, i, a) => g.addColorStop(i / (a.length - 1), s));
          x.fillStyle = g;
          x.fillRect(0, 0, 512, 256);
        } else {
          x.fillStyle = "#b4a28a";
          x.fillRect(0, 0, 512, 256);
          blob("#7a6652", 12, 10, 34, 0.35);
          x.fillStyle = "#efe3d0";
          x.globalAlpha = 0.9;
          x.beginPath();
          x.arc(240, 120, 26, 0, 6.3);
          x.arc(282, 120, 26, 0, 6.3);
          x.fill();
          x.beginPath();
          x.moveTo(218, 134);
          x.lineTo(262, 184);
          x.lineTo(304, 134);
          x.fill();
          x.globalAlpha = 1;
        }
        return new THREE.CanvasTexture(c);
      }
      function mkP(k, add) {
        const m = new THREE.Mesh(
          new THREE.SphereGeometry(1, 64, 40),
          new THREE.MeshLambertMaterial({ map: ptex(k), fog: false }),
        );
        m.visible = false;
        (add === false ? dyn : sc).add(m);
        return m;
      }
      const dyn = new THREE.Group();
      W.add(dyn);
      const moonP = mkP("moon"),
        marsP = mkP("mars"),
        earth = mkP("earth");
      /* ---------- props ---------- */
      function rover(o) {
        const g = G(),
          ws = [];
        V(g, [
          [1.5, 0.5, 2.2, 0, 1.1, 0, o.b],
          [1.9, 0.12, 2.4, 0, 1.45, -0.05, o.s],
          [1.55, 0.2, 2.25, 0, 0.82, 0, o.a],
          [0.14, 1, 0.14, 0.5, 2, 0.7, 0xaaaab4],
          [0.06, 1.5, 0.06, -0.85, 2.1, -0.9, 0xdddddd],
          [0.14, 0.14, 2, -1.15, 0.85, 0, 0x8a8e9a],
          [0.14, 0.14, 2, 1.15, 0.85, 0, 0x8a8e9a],
          [0.5, 0.3, 0.25, 0, 1.2, 1.15, 0xffe08a, 1],
        ]);
        for (const x of [-1.15, 1.15])
          for (const z of [-0.95, 0, 0.95]) {
            const w = G();
            Cy(w, 0.48, 0.48, 0.42, 0, 0, 0, 0x23252e, 0, 12, 0, Math.PI / 2);
            Cy(w, 0.3, 0.3, 0.46, 0, 0, 0, o.a, 0, 8, 0, Math.PI / 2);
            w.position.set(x, 0.48, z);
            g.add(w);
            ws.push(w);
          }
        const hd = V(G(), [
          [0.75, 0.35, 0.4, 0, 0, 0, 0xe6e9f0],
          [0.18, 0.18, 0.1, -0.2, 0, 0.25, 0x4fd8ff, 1],
          [0.18, 0.18, 0.1, 0.2, 0, 0.25, 0x4fd8ff, 1],
        ]);
        hd.position.set(0.5, 2.6, 0.7);
        g.add(hd);
        const dh = V(G(), [
          [0.12, 0.7, 0.12, 0, -0.35, 0, 0xaaaab4],
          [1, 1, 0.12, 0, 0.1, 0, 0xf4f4f8],
        ]);
        dh.position.set(-0.55, 2, -0.6);
        dh.rotation.x = -0.5;
        g.add(dh);
        const led = V(G(), [[0.2, 0.2, 0.2, 0.7, 1.6, -0.9, 0xff3030, 1]]);
        g.add(led);
        g.userData = { ws, hd, led };
        return g;
      }
      const B = {};
      B.lro = () => {
        const g = V(G(), [
          [1.6, 1.2, 2, 0, 0, 0, 0xc9ccd6],
          [1.7, 0.4, 2.1, 0, -0.6, 0, 0xe8b830],
          [0.5, 0.5, 0.9, -0.5, 0.2, 1.4, 0x333a4a],
          [0.3, 0.3, 0.8, 0.5, 0.1, 1.4, 0x333a4a],
          [0.15, 0.15, 1.5, 0, 0.9, -0.9, 0xaaaab4],
          [0.3, 0.3, 0.3, 0, 0.6, 1.1, 0xff3030, 1],
        ]);
        for (const s of [-1, 1])
          V(g, [
            [4.2, 0.1, 1.6, s * 3.1, 0.2, 0, 0x2b46b8],
            [4.3, 0.06, 0.08, s * 3.1, 0.27, 0, 0x9db4ff],
            [0.08, 0.06, 1.7, s * 2, 0.27, 0, 0x9db4ff],
            [0.08, 0.06, 1.7, s * 3.4, 0.27, 0, 0x9db4ff],
            [0.08, 0.06, 1.7, s * 4.7, 0.27, 0, 0x9db4ff],
            [0.6, 0.1, 0.1, s * 1.1, 0.2, 0, 0x888b95],
          ]);
        Cy(g, 1.05, 0.15, 0.3, 0, 1.6, -1.7, 0xffffff, 0, 20, Math.PI / 2);
        return g;
      };
      B.lrv = () => {
        const g = V(G(), [
          [1.6, 0.25, 3.2, 0, 0.75, 0, 0xcfd2da],
          [1.4, 0.12, 0.8, 0, 0.9, -1.3, 0xb8bcc8],
          [0.5, 0.12, 0.6, -0.4, 1.05, 0.3, 0xe8e8ee],
          [0.5, 0.6, 0.1, -0.4, 1.35, 0, 0xe8e8ee],
          [0.5, 0.12, 0.6, 0.4, 1.05, 0.3, 0xe8e8ee],
          [0.5, 0.6, 0.1, 0.4, 1.35, 0, 0xe8e8ee],
          [0.3, 0.2, 0.3, 0, 1.1, 0.9, 0x555a66],
          [0.1, 1.5, 0.1, 0, 1.7, -1.3, 0xaaaab4],
          [0.3, 0.3, 0.4, 0.4, 3, -1.3, 0x30343e],
          [0.3, 0.15, 0.9, 0, 1.1, 1.3, 0xff8a2a],
        ]);
        Cy(g, 0.7, 0.15, 0.15, 0, 2.6, -1.3, 0xe8e8f0, 0, 14, Math.PI / 2.6);
        for (const x of [-1, 1])
          for (const z of [-1.1, 1.1]) {
            Cy(g, 0.42, 0.42, 0.3, x, 0.45, z, 0x6c707c, 0, 14, 0, Math.PI / 2);
            Cy(g, 0.3, 0.3, 0.34, x, 0.45, z, 0x3a3e4a, 0, 10, 0, Math.PI / 2);
          }
        return g;
      };
      B.eq = () => {
        const g = V(G(), [
          [0.1, 4, 0.1, 0, 2, 0, 0xeeeeee],
          [1.8, 1.1, 0.05, 0.95, 3.4, 0, 0xf4f4f4],
          [0.7, 0.6, 0.06, 0.35, 3.65, 0, 0x2a3a9a],
          [1.8, 0.18, 0.06, 0.95, 3.25, 0, 0xc42626],
          [1.1, 0.18, 0.06, 1.4, 3.7, 0, 0xc42626],
          [1.4, 0.9, 1.4, 3.2, 0.45, 0, 0x8d8d95],
          [1.5, 0.2, 1.5, 3.2, 0.95, 0, 0xe8b830],
          [0.1, 1.2, 0.1, 3.2, 1.6, 0, 0xaaaab4],
          [1.4, 0.12, 1.2, -2.6, 0.2, 0, 0x3a4a7a],
          [1.3, 0.7, 0.1, -2.6, 0.6, -0.5, 0x9aa8d0],
        ]);
        Cy(g, 0.8, 0.1, 0.15, 3.2, 2.3, 0, 0xdddddd, 0, 14, Math.PI / 2.2);
        return g;
      };
      B.ice = () => {
        const g = V(G(), [
          [2.8, 0.3, 2.8, 0, 0.15, 0, 0x6e6e7e],
          [0.5, 0.3, 0.5, 1.2, 0.4, -0.9, 0x5a5a68],
          [0.6, 0.3, 0.5, -1.3, 0.4, 0.8, 0x5a5a68],
        ]);
        [
          [0, 0.9, 0, 0.4, 1.8],
          [0.9, 0.5, 0.3, 0.3, 1.1],
          [-0.8, 0.45, 0.4, 0.28, 0.9],
          [0.3, 0.4, -0.8, 0.22, 0.8],
        ].forEach(([x, y, z, r, h], i) =>
          Cy(
            g,
            r * 0.6,
            r,
            h,
            x,
            y + 0.15,
            z,
            i % 2 ? 0xcff4ff : 0x9fe8ff,
            1,
            6,
            0.1 * i,
            0.08 * i,
          ),
        );
        return g;
      };
      B.term = () =>
        V(G(), [
          [2.4, 0.3, 1.2, 0, 0.15, 0, 0x555a6a],
          [1.5, 2.6, 0.5, 0, 1.5, 0, 0x20243a],
          [1.1, 1.8, 0.1, 0, 1.6, 0.3, 0x4fd8ff, 1],
        ]);
      B.opp = () => {
        const g = rover({ b: 0xd8d8e0, s: 0x2a3f9e, a: 0xd9a63a });
        V(g, [
          [1.9, 0.14, 2.4, 0, 1.55, 0, 0xc9744a],
          [0.8, 0.5, 0.4, 0.5, 2.9, 0.7, 0x2a2e3a],
        ]);
        g.userData.led.visible = false;
        return g;
      };
      B.vk = () => {
        const g = G();
        Cy(g, 1.1, 1.1, 0.7, 0, 1.3, 0, 0xd6d0c4, 0, 6);
        Cy(g, 0.6, 0.6, 0.4, 0, 1.85, 0, 0x6a7280, 0, 6);
        V(g, [
          [0.1, 1.3, 0.1, 0.6, 2.3, 0.6, 0xaaaab4],
          [0.2, 0.2, 1.6, -0.7, 1.4, 1.1, 0x8a8e9a],
          [0.4, 0.3, 0.3, -0.7, 1.4, 1.9, 0xe8b830],
        ]);
        Cy(g, 0.55, 0.1, 0.15, 0.6, 3, 0.6, 0xdddddd, 0, 12, Math.PI / 2.4);
        for (const [x, z] of [
          [-1, -1],
          [1, -1],
          [0, 1.3],
        ]) {
          V(g, [
            [0.2, 1.1, 0.2, x * 1.1, 0.65, z * 1.1, 0x999aa6],
            [0.7, 0.15, 0.7, x * 1.4, 0.07, z * 1.4, 0x777777],
          ]);
        }
        for (const a of [0, 2.1, 4.2])
          Cy(
            g,
            0.18,
            0.18,
            1,
            Math.cos(a) * 1.1,
            1.4,
            Math.sin(a) * 1.1,
            0x444a56,
            0,
            6,
          );
        return g;
      };
      B.blue = () => {
        const g = V(G(), [
          [2.2, 0.8, 1.8, 0, 0.4, 0, 0x8a3a22],
          [1.2, 0.6, 1.2, 0.3, 1.1, 0, 0x7a3018],
        ]);
        [
          [-0.7, 1, 0.5],
          [0.2, 1.5, 0.5],
          [0.8, 1, -0.5],
          [-0.3, 1.5, -0.4],
          [0.9, 1.45, 0.4],
          [-0.9, 0.95, -0.3],
        ].forEach((p) => Sp(g, 0.2, p[0], p[1], p[2], 0x5a7fff, 1));
        return g;
      };
      B.ship = () => {
        const g = V(G(), [
            [1.7, 1.2, 3.2, 0, 0, 0, 0xf0f0f6],
            [1, 1.1, 2.2, 0, 0.75, 0.3, 0xe0e4ee],
            [1.1, 0.6, 0.25, 0, 0.8, 1.45, 0x4fd8ff, 1],
            [0.9, 1, 2.6, -1.4, -0.1, -0.1, 0xd8402a],
            [0.9, 1, 2.6, 1.4, -0.1, -0.1, 0xd8402a],
            [0.7, 0.7, 0.8, -0.55, -0.1, -1.8, 0x28c8ff, 1],
            [0.7, 0.7, 0.8, 0.55, -0.1, -1.8, 0x28c8ff, 1],
            [0.5, 0.5, 1.2, 0, 0.2, 1.9, 0xff9a3a],
            [0.3, 1.2, 1, 0, 1.2, -0.9, 0xd8402a],
          ]),
          fm = new THREE.MeshBasicMaterial({
            color: 0x7ff0ff,
            transparent: true,
            opacity: 0.85,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          });
        g.userData.fl = [-0.55, 0.55].map((x) => {
          const m = new THREE.Mesh(UB, fm);
          m.position.set(x, -0.1, -3);
          m.scale.set(0.5, 0.5, 2.4);
          g.add(m);
          return m;
        });
        return g;
      };
      B.rocket = () =>
        V(G(), [
          [5, 9, 5, 0, 5, 0, 0xf4f4fa],
          [4.2, 4, 4.2, 0, 11.5, 0, 0xf4f4fa],
          [2.8, 2.5, 2.8, 0, 14.7, 0, 0xd83a28],
          [1.6, 1.6, 1.6, 0, 16.6, 0, 0xd83a28],
          [2.6, 2.6, 0.5, 0, 9, 2.55, 0x4fd8ff, 1],
          [1.2, 6, 2.6, -3.1, 3, 0, 0xd83a28],
          [1.2, 6, 2.6, 3.1, 3, 0, 0xd83a28],
          [2.6, 6, 1.2, 0, 3, 3.1, 0xd83a28],
          [2.6, 6, 1.2, 0, 3, -3.1, 0xd83a28],
          [4, 1.2, 4, 0, -0.1, 0, 0x33333c],
          [5.2, 0.5, 5.2, 0, 8, 0, 0xd83a28],
        ]);
      B.dish = () => {
        const g = V(G(), [
          [3, 0.4, 3, 0, 0.2, 0, 0x555a6a],
          [0.3, 2.4, 0.3, 0, 1.4, 0, 0xaaaab4],
          [0.2, 0.9, 0.2, 0, 3.4, 0, 0xe8b830],
          [0.5, 0.5, 0.5, 0, 4, 0, 0xff3030, 1],
        ]);
        Cy(g, 1.8, 0.3, 0.4, 0, 2.9, 0, 0xf4f4f8, 0, 20);
        return g;
      };
      B.lmod = () => {
                                const g = V(G(), [
                                  [3, 1.8, 3, 0, 0.9, 0, 0xd9a53a],
                                  [2.6, 0.5, 2.6, 0, 2.05, 0, 0xc08f28],


                                  [0.2, 1.3, 0.2, -1.25, 0.6, -1.25, 0x8a8e9a],
                                  [0.2, 1.3, 0.2, 1.25, 0.6, -1.25, 0x8a8e9a],
                                  [0.2, 1.3, 0.2, -1.25, 0.6, 1.25, 0x8a8e9a],
                                  [0.2, 1.3, 0.2, 1.25, 0.6, 1.25, 0x8a8e9a],
                                  [0.9, 0.12, 0.9, -1.55, 0.06, -1.55, 0x6a6e78],
                                  [0.9, 0.12, 0.9, 1.55, 0.06, -1.55, 0x6a6e78],
                                  [0.9, 0.12, 0.9, -1.55, 0.06, 1.55, 0x6a6e78],
                                  [0.9, 0.12, 0.9, 1.55, 0.06, 1.55, 0x6a6e78],
                                  [0.5, 1.5, 0.08, 0.2, 1.7, 1.55, 0xc9ccd6],

                                ]);
                                return g;
                              };
                              B.als = () => {
                                const g = V(G(), [
                                  [1.8, 0.9, 1.4, 0, 0.45, 0, 0x8a8fa0],
                                  [1.6, 0.2, 1.2, 0, 0.95, 0, 0xd9dde6],
                                  [0.9, 0.7, 0.9, -2.4, 0.35, 0.6, 0x6a7080],
                                  [0.12, 0.12, 3.2, -1.2, 0.1, 0.3, 0x333340],
                                  [0.12, 0.12, 2.4, 0.9, 0.1, 1.3, 0x333340],
                                  [0.5, 1.5, 0.5, 2.2, 0.75, -0.8, 0xb8bcc8],
                                ]);
                                Cy(g, 0.8, 0.15, 0.25, 2.2, 1.6, -0.8, 0xf4f4f8, 0, 14, Math.PI / 2.4);
                                Cy(g, 0.4, 0.4, 1.2, 0.2, 1.55, -0.4, 0xd9a53a, 0, 8, 0, Math.PI / 2);
                                Sp(g, 0.25, -0.4, 1.2, 0.5, 0x4fd8ff, 1);
                                return g;
                              };
                              B.surv = () => {
                                const g = G();
                                V(g, [
                                  [1.8, 0.9, 1.8, 0, 1.3, 0, 0xcfd3dc],
                                  [1.9, 0.25, 1.9, 0, 0.82, 0, 0x9aa0ac],
                                  [0.9, 0.5, 0.2, 0, 1.45, 0.95, 0x30343e],
                                  [0.16, 0.16, 0.1, 0, 1.5, 1.07, 0x4fd8ff, 1],
                                  [0.14, 0.9, 0.14, 0.9, 0.55, 0.9, 0xaaaab4],
                                  [0.5, 0.2, 0.7, 1.05, 0.15, 1.35, 0x6a6e78],
                                ]);
                                for (const a of [0.5, 2.6, 4.7]) {
                                  const x = Math.cos(a) * 1.35,
                                    z = Math.sin(a) * 1.35;
                                  V(g, [
                                    [0.22, 1.6, 0.22, x, 0.5, z, 0x8a8e9a],
                                    [0.8, 0.15, 0.8, x * 1.25, 0.07, z * 1.25, 0x6a6e78],
                                  ]);
                                }
                                Cy(g, 0.9, 0.18, 0.25, 0, 2.35, 0, 0xf4f4f8, 0, 16, Math.PI / 2.3);
                                return g;
                              };
                              B.soj = () => {
                                const g = V(G(), [
                                  [1.3, 0.55, 1.7, 0, 0.85, 0, 0xd8d2c4],
                                  [1.4, 0.1, 1.8, 0, 1.18, 0, 0x2a3f9e],
                                  [0.3, 0.3, 0.3, 0, 1.4, -0.5, 0x30343e],
                                  [0.1, 0.7, 0.1, 0.4, 1.5, 0.4, 0xaaaab4],
                                  [0.25, 0.18, 0.1, 0.4, 1.85, 0.45, 0x4fd8ff, 1],
                                ]);
                                for (const x of [-0.85, 0.85])
                                  for (const z of [-0.6, 0, 0.6])
                                    Cy(g, 0.3, 0.3, 0.24, x, 0.3, z, 0x23252e, 0, 10, 0, Math.PI / 2);
                                return g;
                              };
                              B.spir = () => {
                                const g = rover({ b: 0xd8d8e0, s: 0x2a8a6e, a: 0xd9a63a });
                                V(g, [[1.9, 0.14, 2.4, 0, 1.55, 0, 0x7ac0a8]]);
                                g.userData.led.visible = false;
                                return g;
                              };
                              B.vik1 = () => B.vk();
                              B.vik2 = () => {
                                const g = B.vk();
                                g.traverse((m) => {
                                  if (
                                    m.isMesh &&
                                    m.material &&
                                    m.material.color &&
                                    m.material.color.getHex() === 0xd6d0c4
                                  )
                                    m.material = L(0xc2d4e2, 0);
                                });
                                return g;
                              };
                              B.phx = () => {
                                const g = G();
                                Cy(g, 1, 1, 0.7, 0, 1.2, 0, 0xe4e8f0, 0, 6);
                                V(g, [
                                  [0.16, 1.1, 0.16, 0.9, 0.5, 0.9, 0x9aa0ac],
                                  [0.16, 1.1, 0.16, -0.9, 0.5, 0.9, 0x9aa0ac],
                                  [0.16, 1.1, 0.16, 0, 0.5, -1.1, 0x9aa0ac],
                                  [0.7, 0.14, 0.7, 1.15, 0.07, 1.15, 0x6a6e78],
                                  [0.7, 0.14, 0.7, -1.15, 0.07, 1.15, 0x6a6e78],
                                  [0.7, 0.14, 0.7, 0, 0.07, -1.4, 0x6a6e78],
                                  [0.14, 0.9, 0.14, 0.4, 0.7, 1.1, 0xbbbccc],
                                  [0.5, 0.2, 0.6, 0.55, 0.2, 1.5, 0x6a6e78],
                                ]);
                                Cy(g, 0.7, 0.15, 0.2, 0, 2, 0, 0xf4f4f8, 0, 14, Math.PI / 2.4);
                                for(const x of [-2.1,2.1]) Cy(g,1.35,1.35,.08,x,.9,0,0x334e9c,0,12);
                                return g;
                              };
                              B.ins = () => {
                                const g = G();
                                Cy(g, 0.95, 0.95, 0.6, 0, 1.1, 0, 0xdde1ea, 0, 8);
                                V(g, [
                                  [0.12, 0.7, 0.12, 1.4, 0.35, 1.1, 0xaaaab4],
                                ]);
                                Cy(g, 0.55, 0.55, 0.35, 2.2, 0.18, 1.6, 0xf4f4f8, 0, 10);
                                Cy(g, 0.5, 0.12, 0.15, 0, 1.75, 0, 0xf4f4f8, 0, 12, Math.PI / 2.4);
                                for(const x of [-2.1,2.1]) Cy(g,1.3,1.3,.08,x,.65,0,0x2b46b8,0,16);
                                return g;
                              };
      B.ing = () => {
        const g=V(G(),[[.55,.5,.55,0,.85,0,0xd9bd6c],[.12,1.25,.12,0,1.65,0,0xb6bdcd],[.9,.08,.6,0,2.55,0,0x263b78]]);
        for(const x of [-.45,.45])for(const z of [-.45,.45])V(g,[[.07,.65,.07,x,.35,z,0x565d6c]]);
        const rotors=[];
        for(let i=0;i<2;i++){
          const rotor=G();V(rotor,[[1.35,.045,.15,-.67,0,0,0x303844],[i?1.0:1.35,.045,.15,i?.5:.67,0,0,0x303844]]);
          rotor.position.y=1.8+i*.35;rotor.rotation.y=i*Math.PI/2;g.add(rotor);rotors.push(rotor);
        }
        g.userData.rotors=rotors;return g;
      };
                              const rv = rover({ b: 0xf0f3fa, s: 0x4fd8ff, a: 0xff9a2e }),
        ship = B.ship();
      ship.rotation.order = "YXZ";
      W.add(rv, ship);
      ship.scale.setScalar(1.4);
      V(rv, [
        [0.1, 1.4, 0.1, 0.85, 2.2, -0.9, 0xdddddd],
        [0.7, 0.45, 0.06, 0.85, 2.8, -0.9, 0xffd23f, 1],
      ]);
      const BLK = new THREE.Color(0x03040a),
        DK = new THREE.MeshLambertMaterial({ color: 0x3a3d4a });
      const sky = new THREE.Mesh(
        new THREE.SphereGeometry(900, 16, 12),
        new THREE.MeshBasicMaterial({
          side: THREE.BackSide,
          fog: false,
          depthWrite: false,
          transparent: true,
        }),
      );
      sky.renderOrder = -1;
      sc.add(sky);
      function gradT(st) {
        const c = document.createElement("canvas");
        c.width = 2;
        c.height = 128;
        const x = c.getContext("2d"),
          g = x.createLinearGradient(0, 0, 0, 128);
        st.forEach((s) => g.addColorStop(s[0], s[1]));
        x.fillStyle = g;
        x.fillRect(0, 0, 2, 128);
        return new THREE.CanvasTexture(c);
      }
      const sunM = new THREE.Mesh(
        new THREE.PlaneGeometry(80, 80),
        new THREE.MeshBasicMaterial({ color: 0xffe08a, fog: false }),
      );
      sc.add(sunM);
      const flare = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: nT("rgba(255,244,214,1)"),
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          fog: false,
          opacity: 0.9,
        }),
      );
      flare.scale.setScalar(260);
      sc.add(flare);
      const clouds = [],
        ast = [],
        SUND = new THREE.Vector3(0.5, 0.22, -1).normalize(),
        ED = new THREE.Vector3(-0.5, 0.4, -0.8).normalize();
      const N = 101,
        HF = 50,
        SZ = 2,
        HT = new Float32Array(N * N),
        tm = new THREE.InstancedMesh(
          new THREE.BoxGeometry(SZ, 1, SZ).translate(0, 0.5, 0),
          new THREE.MeshLambertMaterial(),
          N * N,
        );
      tm.receiveShadow = true;
      tm.frustumCulled = false;
      W.add(tm);
      const gy = (x, z) =>
        HT[
          cl(Math.round(x / SZ) + HF, 0, N - 1) * N +
            cl(Math.round(z / SZ) + HF, 0, N - 1)
        ];
      function terr(c) {
        const m = new THREE.Matrix4(),
          col = new THREE.Color(),
          q = new THREE.Quaternion(),
          v = new THREE.Vector3(),
          s = new THREE.Vector3();
        for (let i = 0; i < N; i++)
          for (let j = 0; j < N; j++) {
            const x = (i - HF) * SZ,
              z = (j - HF) * SZ;
            let h =
              (Math.sin(i * 0.5) +
                Math.sin(j * 0.43 + 1) +
                Math.sin((i + j) * 0.27) +
                Math.sin((i - j) * 0.19)) *
              c.amp;
            for (const k of c.cr) {
              const d = Math.hypot(x - k[0], z - k[1]) / k[2];
              if (d < 1) h -= (1 - d * d) * 3.2;
              else if (d < 1.35) h += (0.9 * (1.35 - d)) / 0.35;
            }
            if (c.flat && Math.hypot(x - c.flat[0], z - c.flat[1]) < c.flat[2])
              h = 0;
            h = Math.round(h * 2) / 2;
            HT[i * N + j] = h;
            v.set(x, -6, z);
            s.set(1, h + 6, 1);
            m.compose(v, q, s);
            tm.setMatrixAt(i * N + j, m);
            const pth = c.launch && Math.abs(x) < 4 && z > -34 && z < 32;
            col
              .setHex(pth ? 0x8e90a0 : c.gr[0])
              .multiplyScalar(
                [0.95, 0.98, 1, 1.03][(i * 7 + j * 13 + (i ^ j)) % 4] *
                  (h < -1 ? 0.85 : 1),
              );
            tm.setColorAt(i * N + j, col);
          }
        tm.instanceMatrix.needsUpdate = tm.instanceColor.needsUpdate = true;
      }
      /* stars + galaxy band */
      const stp = [],
        stc = [],
        cols = [
          [1, 1, 1],
          [0.7, 0.85, 1],
          [1, 0.92, 0.7],
          [1, 0.75, 0.85],
        ];
      for (let i = 0; i < 1400; i++) {
        const a = Math.random() * 6.283,
          b = Math.acos(Math.random() * 2 - 1),
          c = cols[(Math.random() * 4) | 0];
        stp.push(
          500 * Math.sin(b) * Math.cos(a),
          500 * Math.cos(b),
          500 * Math.sin(b) * Math.sin(a),
        );
        stc.push(c[0], c[1], c[2]);
      }
      const sg = new THREE.BufferGeometry();
      sg.setAttribute("position", new THREE.Float32BufferAttribute(stp, 3));
      sg.setAttribute("color", new THREE.Float32BufferAttribute(stc, 3));
      const stm = new THREE.PointsMaterial({
          size: 1.8,
          sizeAttenuation: false,
          transparent: true,
          fog: false,
          vertexColors: true,
        }),
        stars = new THREE.Points(sg, stm);
      stars.frustumCulled = false;
      sc.add(stars);
      const gp = [],
        gc = [],
        gu = new THREE.Vector3(1, 0, 0),
        gw = new THREE.Vector3(0, 0.55, -0.83).normalize();
      for (let i = 0; i < 2600; i++) {
        const a = Math.random() * 6.283,
          sp = (Math.random() + Math.random() + Math.random() - 1.5) * 0.16,
          p = new THREE.Vector3()
            .addScaledVector(gu, Math.cos(a))
            .addScaledVector(gw, Math.sin(a))
            .add(
              new THREE.Vector3(
                Math.random() - 0.5,
                Math.random() - 0.5,
                Math.random() - 0.5,
              ).multiplyScalar(sp * 1.2),
            )
            .normalize()
            .multiplyScalar(480);
        gp.push(p.x, p.y, p.z);
        const t = Math.random();
        gc.push(0.55 + 0.4 * t, 0.3 + 0.2 * t, 0.9 - 0.2 * t);
      }
      const gg2 = new THREE.BufferGeometry();
      gg2.setAttribute("position", new THREE.Float32BufferAttribute(gp, 3));
      gg2.setAttribute("color", new THREE.Float32BufferAttribute(gc, 3));
      const gal = new THREE.Points(
        gg2,
        new THREE.PointsMaterial({
          size: 2.4,
          sizeAttenuation: false,
          transparent: true,
          opacity: 0.7,
          vertexColors: true,
          fog: false,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      gal.frustumCulled = false;
      sc.add(gal);
      const DN = 70,
        dp = new Float32Array(DN * 3),
        dg = new THREE.BufferGeometry();
      for (let i = 0; i < DN * 3; i++) dp[i] = (Math.random() - 0.5) * 60;
      dg.setAttribute("position", new THREE.BufferAttribute(dp, 3));
      const dust = new THREE.Points(
        dg,
        new THREE.PointsMaterial({
          size: 1.6,
          sizeAttenuation: false,
          transparent: true,
          opacity: 0.2,
          depthWrite: false,
        }),
      );
      dust.frustumCulled = false;
      sc.add(dust);
      const SN = 200,
        sx = [],
        stp2 = new Float32Array(SN * 6),
        stg = new THREE.BufferGeometry();
      for (let i = 0; i < SN; i++) {
        const a = Math.random() * 6.283,
          r = 3 + Math.random() * 40;
        sx.push([Math.cos(a) * r, Math.sin(a) * r, -Math.random() * 120]);
      }
      stg.setAttribute("position", new THREE.BufferAttribute(stp2, 3));
      const stl = new THREE.LineSegments(
        stg,
        new THREE.LineBasicMaterial({
          color: 0xbfe8ff,
          transparent: true,
          fog: false,
        }),
      );
      stl.frustumCulled = false;
      stl.visible = false;
      sc.add(stl);
      const bm = new THREE.Mesh(
        UB,
        new THREE.MeshBasicMaterial({
          color: 0x4fd8ff,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      );
      bm.visible = false;
      sc.add(bm);
      function neb(x, y, z, s, c) {
        const m = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: (NT[c] = NT[c] || nT(c)),
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            fog: false,
            opacity: 0.8,
          }),
        );
        m.position.set(x, y, z);
        m.scale.setScalar(s);
        dyn.add(m);
      }
      function rock(x, y, z, s) {
        const m = V(G(), [
          [s, s * 0.8, s, 0, 0, 0, 0x7a7488],
          [s * 0.7, s * 0.7, s * 0.7, s * 0.5, s * 0.3, 0, 0x8d869c],
          [s * 0.6, s * 0.6, s * 0.6, -s * 0.4, -s * 0.3, s * 0.2, 0x6a6478],
        ]);
        m.position.set(x, y, z);
        m.userData.r = (Math.random() - 0.5) * 0.8;
        dyn.add(m);
        ast.push(m);
      }
      function cloud(x, y, z, c) {
        const g = V(G(), [
          [10, 3, 6, 0, 0, 0, c, 1],
          [7, 3, 5, 4, 1.5, 1, c, 1],
          [6, 2.4, 5, -4, 1, -1, c, 1],
          [4, 2, 4, 1, 3, 0, c, 1],
        ]);
        g.position.set(x, y, z);
        dyn.add(g);
        clouds.push(g);
      }
      function dome(x, z, h) {
        V(dyn, [
          [9, 2, 9, x, h + 1, z, 0xe8ecf6],
          [7.5, 2, 7.5, x, h + 3, z, 0xdfe4f0],
          [5.5, 2, 5.5, x, h + 5, z, 0xf0f2fa],
          [3, 1.5, 3, x, h + 6.7, z, 0xcfd6e6],
          [9.2, 0.8, 0.4, x, h + 2, z + 4.5, 0x4fd8ff, 1],
          [0.4, 0.8, 9.2, x + 4.5, h + 2, z, 0x4fd8ff, 1],
          [1.2, 1.2, 0.3, x - 2, h + 3, z + 3.8, 0xffc860, 1],
          [0.2, 3, 0.2, x, h + 8.5, z, 0xaaaab4],
        ]);
      }
      function tree(x, z) {
        const y = gy(x, z);
        V(dyn, [
          [0.9, 3, 0.9, x, y + 1.5, z, 0x6b4a2a],
          [4, 3, 4, x, y + 4.4, z, 0x2f8a2f],
          [2.6, 2.6, 2.6, x, y + 6.7, z, 0x3aa83a],
        ]);
      }
      function station(x, y, z) {
        const g = G();
        V(g, [
          [3, 26, 3, 0, 0, 0, 0xc8ccd6],
          [36, 2.4, 3, 0, 4, 0, 0xb0b6c4],
          [4, 3, 4, 0, 13.5, 0, 0xe8ecf4, 1],
          [3, 3, 3, 0, -13, 0, 0x9aa2b4],
        ]);
        for (const s of [-1, 1])
          for (let k = 0; k < 3; k++) {
            const px = s * (11 + k * 7);
            V(g, [
              [5, 15, 0.6, px, 4, 0, 0xb89a68],
              [4.4, 0.5, 0.2, px, 9, 0.4, 0x4fd8ff, 1],
              [4.4, 0.5, 0.2, px, 2, 0.4, 0x4fd8ff, 1],
              [0.5, 0.5, 0.4, px, -2, 0.4, 0xffc860, 1],
            ]);
          }
        g.position.set(x, y, z);
        g.rotation.y = 0.5;
        dyn.add(g);
        return g;
      }
      function outpost(x, y, z) {
        const g = G();
        V(g, [
          [30, 2, 26, 0, 0, 0, 0x8a8fa0],
          [9, 5, 7, -7, 3.5, -3, 0xdfe4f0],
          [1.6, 1.6, 0.3, -7, 3.5, 0.6, 0x4fd8ff, 1],
          [7, 4, 6, 6, 3, 3, 0xcfd6e6],
          [1.4, 1.4, 0.3, 6, 3, 6.1, 0xffc860, 1],
          [3, 0.8, 3, -10, 1.4, 6, 0x4fd8ff, 1],
        ]);
        const d = B.dish();
        d.scale.setScalar(2.4);
        d.position.set(9, 1, -6);
        g.add(d);
        g.position.set(x, y, z);
        dyn.add(g);
      }
      /* trails + particles */
      const TRN = 260,
        trm = new THREE.InstancedMesh(
          new THREE.BoxGeometry(0.34, 0.06, 0.9),
          new THREE.MeshBasicMaterial({
            color: 0x444455,
            transparent: true,
            opacity: 0.6,
          }),
          TRN,
        );
      trm.frustumCulled = false;
      W.add(trm);
      let trI = 0;
      const lastT = new THREE.Vector3(1e9, 0, 1e9),
        Yax = new THREE.Vector3(0, 1, 0),
        M4 = new THREE.Matrix4(),
        Q4 = new THREE.Quaternion(),
        P4 = new THREE.Vector3(),
        S0 = new THREE.Vector3(0, 0, 0),
        S1 = new THREE.Vector3(1, 1, 1);
      function clearTrail() {
        for (let i = 0; i < TRN; i++) {
          M4.compose(S0, Q4.identity(), S0);
          trm.setMatrixAt(i, M4);
        }
        trm.instanceMatrix.needsUpdate = true;
        trI = 0;
        lastT.set(1e9, 0, 1e9);
      }
      function stamp(x, z, r) {
        for (const s of [-1.15, 1.15]) {
          const px = x + Math.cos(r) * s,
            pz = z - Math.sin(r) * s;
          P4.set(px, gy(px, pz) + 0.05, pz);
          Q4.setFromAxisAngle(Yax, r);
          M4.compose(P4, Q4, S1);
          trm.setMatrixAt(trI++ % TRN, M4);
        }
        trm.instanceMatrix.needsUpdate = true;
      }
      const EXN = 90,
        exs = [],
        glowT = nT("rgba(255,255,255,1)");
      for (let i = 0; i < EXN; i++) {
        const s = new THREE.Sprite(
          new THREE.SpriteMaterial({
            map: glowT,
            transparent: true,
            depthWrite: false,
            fog: false,
          }),
        );
        s.visible = false;
        s.userData = {
          life: 0,
          max: 1,
          vel: new THREE.Vector3(),
          size: 1,
          op: 1,
        };
        sc.add(s);
        exs.push(s);
      }
      let exi = 0;
      function ex(p, vel, size, life, color, add, op) {
        const s = exs[exi++ % EXN];
        s.position.copy(p);
        s.userData.vel.copy(vel);
        s.userData.life = s.userData.max = life;
        s.userData.size = size;
        s.userData.op = op || 1;
        s.material.color.set(color);
        s.material.blending = add
          ? THREE.AdditiveBlending
          : THREE.NormalBlending;
        s.visible = true;
      }
      /* hardware HUD scene */
      const hs = new THREE.Scene(),
        hc = new THREE.PerspectiveCamera(40, 1, 0.1, 50),
        hgp = new THREE.Group();
      hs.background = new THREE.Color(0x0a0d22);
      hc.position.set(0, 1.2, 7);
      hc.lookAt(0, 0, 0);
      {
        const d = new THREE.DirectionalLight(0xffffff, 1.1);
        d.position.set(3, 5, 4);
        hs.add(new THREE.HemisphereLight(0xffffff, 0x555566, 0.9), d, hgp);
      }
      function setHW(k, t) {
        disposeGroup(hgp);
        $("hw").classList.toggle("on", !!k);
        if (!k) return;
        const g = B[k](),
          bb = new THREE.Box3().setFromObject(g),
          z = bb.getSize(new THREE.Vector3()),
          c = bb.getCenter(new THREE.Vector3()),
          w = new THREE.Group();
        g.position.sub(c);
        w.add(g);
        w.scale.setScalar(3.2 / Math.max(z.x, z.y, z.z));
        hgp.add(w);
        $("hwn").textContent = t;
      }

const head = rv.userData.hd; head.scale.set(2.3,2.8,2.0);head.position.set(0,2.5,.65);
const arms=[];for(const side of [-1,1]){const arm=V(G(),[[.3,.85,.3,0,-.35,0,0xf0f3fa],[.45,.3,.45,0,-.8,0,0xffb43e]]);arm.position.set(side*1.2,1.9,.45);rv.add(arm);arms.push(arm);}rv.userData.arms=arms;
const eyeMats=[];head.traverse(m=>{if(m.isMesh&&m.material.emissive?.getHex()===0x4fd8ff){m.material=m.material.clone();eyeMats.push(m);}});
function disposeGroup(group){
 const shared=new Set(Object.values(MC2));const geometries=new Set(),materials=new Set();
 group.traverse(o=>{if(o.geometry&&o.geometry!==UB)geometries.add(o.geometry);if(o.material){for(const m of (Array.isArray(o.material)?o.material:[o.material]))if(!shared.has(m)&&m!==DK)materials.add(m);}});
 group.clear();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());
}

      function build(c) {
        ci = c;
        cur = CH[c];
        const g = cur.sp,
          k = cur.k;
        disposeGroup(dyn);
        clouds.length = ast.length = 0;
        pos = 0;
        v = tv = 0;
        $("lbs").innerHTML = "";
        rk = rfl = null;
        near = -1;
        near1 = new Set();
        cyaw = cpit = 0;
        lau = {
          ph: 0,
          t: 0,
          go: 0,
          N: cur.launch ? 10 : 5,
          ready: cur.launch ? 1 : 0,
          at: 0,
        };

        clearTrail();
        trm.material.color.setHex(cur.tc || 0x444455);
        sc.background.set(cur.bg);
        sc.fog.color.set(cur.bg);
        sc.fog.near = cur.fg ? cur.fg[0] : g ? 500 : 40;
        sc.fog.far = cur.fg ? cur.fg[1] : g ? 1500 : 200;
        amb.color.set(cur.hs || 0xaab4ff);
        amb.groundColor.set(cur.hg || 0x222233);
        sun.color.set(cur.sc || 0xffffff);
        sun.intensity = cur.lt || 1;
        PL = cur.cv.getLength();
        tm.visible = !g;
        rv.visible = !g;
        ship.visible = !!g;
        [moonP, marsP, earth].forEach((p) => (p.visible = false));
        stm.opacity = g || cur.id === "moon" ? 1 : 0;
        sky.visible = !!cur.sky;
        sky.material.opacity = 1;
        if (cur.sky) {
          cur.skyT = cur.skyT || gradT(cur.sky);
          sky.material.map = cur.skyT;
          sky.material.needsUpdate = true;
        }
        sunM.visible = !!cur.sunc;
        if (cur.sunc) sunM.material.color.set(cur.sunc);
        if (g) {
          earth.visible = cur.id === 'e2m';earth.scale.setScalar(40);earth.position.set(-65,-48,-120);
          moonP.visible = cur.id === 'm2m';moonP.scale.setScalar(22);moonP.position.set(-90,-30,-130);
          marsP.visible = cur.id === 'm2m';marsP.scale.setScalar(50);marsP.position.set(20,0,-230);
        } else {
          if (cur.board) {
            const P = cur.cv.getPointAt(1),
              T = cur.cv.getTangentAt(1);
            cur.pad = [P.x + T.x * 10, P.z + T.z * 10];
          }
          cur.flat = cur.launch
            ? [0, -20, 24]
            : cur.board
              ? [cur.pad[0], cur.pad[1], 12]
              : null;
          terr(cur);
          const sp = cur.cv.getSpacedPoints(100);
          if (cur.mt)
            for (let i = 0; i < 30; i++) {
              const a = (i / 30) * 6.283,
                r = 86 + Math.random() * 6,
                hh = (6 + Math.random() * 7) * cur.mh,
                w = 14 + Math.random() * 6,
                m = G();
              [
                [w, hh * 0.5, -2],
                [w * 0.62, hh * 0.3, hh * 0.5 - 2],
                [w * 0.3, hh * 0.22, hh * 0.8 - 2],
              ].forEach(([ww, h, y], n) => {
                const b = new THREE.Mesh(UB, L(shade(cur.mt, 1 + n * 0.14)));
                b.scale.set(ww, h, ww);
                b.position.y = y + h / 2;
                b.castShadow = true;
                m.add(b);
              });
              m.position.set(Math.cos(a) * r, 0, Math.sin(a) * r);
              m.rotation.y = Math.random();
              dyn.add(m);
            }
          for (let i = 0; i < 70; i++) {
            const x = (Math.random() - 0.5) * 170,
              z = (Math.random() - 0.5) * 170;
            if (k === "earth") continue;
            if (sp.some((q) => Math.hypot(q.x - x, q.z - z) < 5)) continue;
            const s = 0.6 + Math.random() * 1.6,
              m = new THREE.Mesh(UB, L(cur.rk || 0x6b4a2a));
            m.scale.set(s, s * (0.5 + Math.random() * 0.6), s);
            m.position.set(x, gy(x, z) + m.scale.y / 2 - 0.05, z);
            m.rotation.y = Math.random() * 1.5;
            m.castShadow = true;
            dyn.add(m);
          }
          if (cur.board || cur.launch) {
            const bx = cur.launch ? 0 : cur.pad[0],
              bz = cur.launch ? -20 : cur.pad[1],
              y0 = gy(bx, bz);
            rk = B.rocket();
            rk.position.set(bx, y0 + 0.4, bz);
            rk.userData = { base: new THREE.Vector3(bx, y0 + 0.4, bz) };
            dyn.add(rk);
            rfl = new THREE.Mesh(
              UB,
              new THREE.MeshBasicMaterial({
                color: 0xffa030,
                transparent: true,
                opacity: 0.9,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
              }),
            );
            rfl.visible = false;
            rk.add(rfl);
            if(cur.launch) V(dyn, [
              [17, 0.6, 17, bx, y0 + 0.3, bz, 0x4a4a58],
              [17.2, 0.2, 1.6, bx, y0 + 0.65, bz + 7.5, 0xffd23f],
              [17.2, 0.2, 1.6, bx, y0 + 0.65, bz - 7.5, 0xffd23f],
            ]);
          }
          if (k === "earth") {
            const y0 = gy(0, -20);
            for (const [x, z] of [
              [-1.6, -1.6],
              [1.6, -1.6],
              [-1.6, 1.6],
              [1.6, 1.6],
            ])
              V(dyn, [[0.5, 21, 0.5, x - 10, y0 + 10.5, z - 20, 0xd22d22]]);
            for (let y = 2; y < 21; y += 3.5)
              V(dyn, [
                [3.7, 0.4, 0.4, -10, y0 + y, -21.6, 0xd22d22],
                [3.7, 0.4, 0.4, -10, y0 + y, -18.4, 0xd22d22],
                [0.4, 0.4, 3.7, -11.6, y0 + y, -20, 0xd22d22],
                [0.4, 0.4, 3.7, -8.4, y0 + y, -20, 0xd22d22],
              ]);
            V(dyn, [
              [6.5, 0.6, 0.8, -6, y0 + 15, -20, 0xd22d22],
              [14, 7, 10, 34, gy(34, -16) + 3.5, -16, 0x2f6b58],
              [15, 1.2, 11, 34, gy(34, -16) + 7.6, -16, 0x23483c],
              [2.4, 1.8, 0.3, 36, gy(34, -16) + 4, -10.8, 0x4fd8ff, 1],
              [12, 6, 8, -34, gy(-34, -14) + 3, -14, 0x8a8fa0],
              [2, 2, 0.3, -30, gy(-34, -14) + 3.4, -9.8, 0x4fd8ff, 1],
              [2, 2, 0.3, -36, gy(-34, -14) + 3.4, -9.8, 0xffc860, 1],
            ]);
            for (let x = -44; x <= 44; x += 4)
              V(dyn, [
                [0.4, 1.6, 0.4, x, gy(x, -6) + 0.8, -6, 0x5a4030],
                [4, 0.3, 0.3, x + 2, gy(x, -6) + 1.1, -6, 0x6a5040],
              ]);
            for (const [x, z] of [
              [18, -4],
              [-20, -6],
              [22, -28],
              [-24, -26],
            ])
              V(dyn, [
                [2.2, 2.2, 2.2, x, gy(x, z) + 1.1, z, 0x6a5a48],
                [0.5, 0.5, 0.3, x, gy(x, z) + 1.4, z + 1.2, 0x4fd8ff, 1],
                [0.3, 5, 0.3, x + 3, gy(x, z) + 2.5, z, 0x444452],
                [0.9, 0.9, 0.9, x + 3, gy(x, z) + 5.2, z, 0xffcc55, 1],
              ]);
            for (let i = 0; i < 28; i++) {
              const x = (Math.random() - 0.5) * 150,
                z = -6 - Math.random() * 70;
              if (Math.abs(x) < 20 && z > -42) continue;
              if (Math.abs(x) > 26 && Math.abs(x) < 44 && z < -8 && z > -24)
                continue;
              tree(x, z);
            }
          }
        }
        if (cur.cloud || k === "earth")
          for (let i = 0; i < 14; i++)
            cloud(
              (Math.random() - 0.5) * 300,
              55 + Math.random() * 30,
              -Math.random() * 220,
              cur.cloud || 0xffffff,
            );
        HWs = [];
        cur.subs.forEach((s, i) => {
          if (!s.hw) return;
          const P = cur.cv.getPointAt(s.f),
            T = cur.cv.getTangentAt(s.f),
            sd = (i % 2 ? -1 : 1) * 6,
            x = P.x - T.z * sd,
            z = P.z + T.x * sd,
            gg = B[s.hw](),
            y = g ? P.y + (i % 2 ? 3 : -3) : gy(x, z) + (s.fl || 0);
          gg.traverse((m) => m.isMesh && (m.userData.om = m.material));
          if (g) gg.scale.setScalar(1.6);
          gg.position.set(x, y, z);
          dyn.add(gg);
          const bb = new THREE.Box3().setFromObject(gg),
            sz = bb.getSize(new THREE.Vector3());
          const hit = new THREE.Mesh(
            new THREE.SphereGeometry(
              (Math.max(sz.x, sz.y, sz.z) * 0.5) / (g ? 1.6 : 1) + 1,
              8,
              6,
            ),
            new THREE.MeshBasicMaterial({
              transparent: true,
              opacity: 0,
              depthWrite: false,
            }),
          );
          hit.position
            .copy(bb.getCenter(new THREE.Vector3()))
            .sub(gg.position)
            .divideScalar(g ? 1.6 : 1);
          gg.add(hit);
          const bmt = new THREE.MeshBasicMaterial({
              color: 0x4fd8ff,
              transparent: true,
              opacity: 0.3,
              depthWrite: false,
              blending: THREE.AdditiveBlending,
              side: THREE.DoubleSide,
            }),
            bz = new THREE.Mesh(UB, bmt),
            rg = new THREE.Mesh(new THREE.RingGeometry(2.4, 3, 24), bmt);
          bz.scale.set(0.25, 50, 0.25);
          bz.position.set(x, y + 25, z);
          dyn.add(bz);
          rg.rotation.x = -Math.PI / 2;
          rg.position.set(x, (g ? y : gy(x, z)) + 0.2, z);
          dyn.add(rg);
          const lb = document.createElement("button");
          lb.className = "lb";
          lb.dataset.k = HWs.length;
          lb.textContent=HW[s.hw].nm;lb.setAttribute("aria-label","Learn about "+HW[s.hw].nm);
          $("lbs").append(lb);
          HWs.push({
            i,
            g: gg,
            bm: bmt,
            rg,
            lb,
            top: bb.max.y - y + 1,
            bx: x,
            by: y,
            bz: z,
            fl: s.fl,
          });
        });
        const P0 = cur.cv.getPointAt(0),
          vh = veh();
        vh.position.set(P0.x, g ? P0.y : gy(P0.x, P0.z), P0.z);
        const T0 = cur.cv.getTangentAt(0);
        vh.rotation.y = Math.atan2(T0.x, T0.z);
        vh.rotation.z = 0;
        snap = !tr;
        tlb();
        refresh();
      }

      function drawMM(vh) {
        const c = $("mm").getContext("2d"),
          w = 132,
          s = cur.sp ? 0.28 : 0.9,
          r = vh.rotation.y;
        c.clearRect(0, 0, w, w);
        c.fillStyle = "rgba(5,14,40,.9)";
        c.fillRect(0, 0, w, w);
        c.save();
        c.translate(w / 2, w / 2);
        c.rotate(r - Math.PI);
        c.translate(-vh.position.x * s, -vh.position.z * s);
        c.strokeStyle = "rgba(39,211,245,.55)";
        c.lineWidth = 5;
        c.beginPath();
        cur.cv
          .getSpacedPoints(80)
          .forEach((q, i) =>
            i ? c.lineTo(q.x * s, q.z * s) : c.moveTo(q.x * s, q.z * s),
          );
        c.stroke();
        const j = idx();
        HWs.forEach((h) => {
          const st = done.has(cur.subs[h.i].id) ? 0 : 1;
          c.fillStyle = st === 0 ? "#7dff8a" : st === 2 ? "#ff6a3a" : "#ffd23f";
          c.fillRect(h.bx * s - 4, h.bz * s - 4, 8, 8);
          if (st === 1) {
            c.strokeStyle = "#ffd23f";
            c.lineWidth = 2;
            c.strokeRect(h.bx * s - 7, h.bz * s - 7, 14, 14);
          }
        });
        if (rk && cur.board) {
          c.fillStyle = "#ff4040";
          c.fillRect(rk.position.x * s - 4, rk.position.z * s - 4, 8, 8);
        }
        c.restore();
        c.fillStyle = "#fff";
        c.strokeStyle = "#27d3f5";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(w / 2, w / 2 - 11);
        c.lineTo(w / 2 + 8, w / 2 + 9);
        c.lineTo(w / 2 - 8, w / 2 + 9);
        c.closePath();
        c.fill();
        c.stroke();
      }

function mechanismModel(key){
 const group=B[key]();
 if(['surv','vik1','vik2','phx','ins','spir','opp'].includes(key)){
  const arm=V(G(),[[1.5,.12,.12,.72,0,0,0xc9d0da],[.12,.8,.12,1.4,-.35,0,0xb1bccd],[.45,.15,.5,1.4,-.8,.1,0xc09d5c]]);
  arm.position.set(.4,1.4,.8);group.add(arm);group.userData.arm=arm;
 }
 if(key==='als'){
  const signal=V(G(),[[.08,1,.08,0,.5,0,0x79e7ff,1],[.4,.08,.4,0,1,0,0x79e7ff,1]]);signal.position.set(-.5,.6,.5);group.add(signal);group.userData.signal=signal;
 }
 return group;
}

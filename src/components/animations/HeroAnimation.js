import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "../layout/ThemeProvider";

const HeroAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  const threeObjects = useRef({});
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (threeObjects.current.scene) {
      threeObjects.current.scene.fog.color.set(
        theme === "dark" ? 0x000000 : 0xffffff
      );
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || threeObjects.current.renderer) return;

    let scene = new THREE.Scene();
    scene.fog = new THREE.Fog(theme === "dark" ? 0x000000 : 0xffffff, 1, 15);
    threeObjects.current.scene = scene;

    let camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    let renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeObjects.current.renderer = renderer;

    const clock = new THREE.Clock();
    threeObjects.current.clock = clock;

    let group = new THREE.Group();
    scene.add(group);
    threeObjects.current.group = group;

    const panelGeom = new THREE.BoxGeometry(1, 0.6, 0.05);
    const smallPanelGeom = new THREE.BoxGeometry(0.4, 0.4, 0.05);
    const barGeom = new THREE.BoxGeometry(0.8, 0.1, 0.05);
    const geometries = [panelGeom, smallPanelGeom, barGeom];

    const indigoMat = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x6366f1,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.1,
    });
    const purpleMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.1,
    });
    const pinkMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xec4899,
      emissiveIntensity: 0.3,
      roughness: 0.3,
      metalness: 0.1,
    });
    const materials = [indigoMat, purpleMat, pinkMat];

    const objects = [];
    threeObjects.current.objects = objects;

    for (let i = 0; i < 50; i++) {
      const geom = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];

      const mesh = new THREE.Mesh(geom, mat);

      const phi = Math.random() * Math.PI * 2;
      const theta = Math.acos(2 * Math.random() - 1);
      const radius = 2 + Math.random() * 4;

      mesh.position.set(
        radius * Math.cos(phi) * Math.sin(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(theta)
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      group.add(mesh);

      objects.push({
        mesh: mesh,
        initialY: mesh.position.y,
        randomOffset: Math.random() * 2 * Math.PI,
      });
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.0);
    pointLight.position.set(5, 10, 5);
    scene.add(pointLight);

    const onWindowResize = () => {
      if (!containerRef.current || !threeObjects.current.renderer) return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      threeObjects.current.renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };
    window.addEventListener("resize", onWindowResize, false);

    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMouseMove, false);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = threeObjects.current.clock.getElapsedTime();

      const targetX = mouse.current.x * 0.1;
      const targetY = -mouse.current.y * 0.1;

      if (threeObjects.current.group) {
        threeObjects.current.group.rotation.y +=
          (targetX - threeObjects.current.group.rotation.y) * 0.05;
        threeObjects.current.group.rotation.x +=
          (targetY - threeObjects.current.group.rotation.x) * 0.05;
      }

      threeObjects.current.objects.forEach((obj) => {
        obj.mesh.position.y =
          obj.initialY + Math.sin(elapsedTime * 0.5 + obj.randomOffset) * 0.2;
        obj.mesh.rotation.x += 0.001;
        obj.mesh.rotation.y += 0.002;
      });

      if (threeObjects.current.renderer) {
        threeObjects.current.renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());

      threeObjects.current = {};
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
    >
      <div
        className="absolute -top-1/4 -left-1/4 w-full h-full bg-indigo-500/30 dark:bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-3/4 h-3/4 bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s", animationDuration: "7s" }}
      />

      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default HeroAnimation;
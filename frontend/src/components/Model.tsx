import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";

const initThreeJs = (canvas: HTMLCanvasElement, filePath: string) => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 200);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setClearColor(0x000000, 0);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight1.position.set(5, 5, 5).normalize();
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight2.position.set(-5, 5, -5).normalize();
  scene.add(directionalLight2);

  const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight3.position.set(0, -5, 5).normalize();
  scene.add(directionalLight3);

  const loader = new FBXLoader();
  loader.load(filePath, (object) => {
    scene.add(object);
  });

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enablePan = false;
  controls.enableZoom = false;

  const resizeRenderer = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }
    return needResize;
  };

  const animate = () => {
    resizeRenderer();
    controls.update();
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };
  animate();

  window.addEventListener("resize", resizeRenderer);

  // Return a cleanup function
  return () => {
    window.removeEventListener("resize", resizeRenderer);
    renderer.dispose();
    controls.dispose();
  };
};

export default function Model() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const cleanup = initThreeJs(canvas, "/3d_models/Skull.fbx");
      return cleanup;
    }
  }, []);

  return (
    <div className="model-container flex justify-center items-center h-full">
      <canvas ref={canvasRef} className="webgl w-full h-full"></canvas>
    </div>
  );
}

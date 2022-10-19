import "./style.css";
import * as THREE from "three";
import gsap from "gsap";
import { RingGeometry } from "three";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Base
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

/*
 * border
 */
//cube1
var geo = new THREE.EdgesGeometry(mesh.geometry);
var mat = new THREE.LineBasicMaterial({ color: 0x666666 });
var wireframe = new THREE.LineSegments(geo, mat);
mesh.add(wireframe);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

//time
// let time = Date.now();
const clock = new THREE.Clock();
gsap.to(mesh.rotation, { duration: 4, delay: 2, x: 2 });
gsap.to(mesh.rotation, { duration: 3, delay: 2, y: -2 });
gsap.to(mesh.position, { duration: 3, delay: 2, y: -2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 2 });
// gsap.to(mesh.position, { duration: 3, delay: 0, y: 2 });
// gsap.to(mesh.position, { duration: 3, delay: 0, x: -2 });

/**
 * Animate
 */
const tick = () => {
  //time
  //   const currentTime = Date.now();
  //   const deltaTime = currentTime - time;
  //   time = currentTime;
  //   console.log(deltaTime);
  // time by clock
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);

  //  Update object
  //   mesh.rotation.x = Math.sin(elapsedTime * Math.PI * 2);
  //   mesh.rotation.y = Math.cos(elapsedTime);
  //   mesh.position.y = Math.sin(elapsedTime);
  //   mesh.position.x = Math.cos(elapsedTime);
  //The main purpose of this deltaTime is to figure out the const speed without the need to know the fps differenece in monitors to monitors
  //   mesh.position.z += 0.002 * deltaTime;

  //renderer
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
  //more like recurssion
};
tick();

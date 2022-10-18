import "./style.css";
import * as THREE from "three";
import { AxesHelper } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.4;
// mesh.position.z = -3;
mesh.position.set(-0.7, -0.4, -0.2);
//same thing
scene.add(mesh);

const axesHelper = new THREE.AxesHelper();
mesh.add(axesHelper);

//xyz axis dekhauna

console.log("mesh position ko normalise");
//Convert this vector to a unit vector - that is, sets it equal to a vector with the same direction as this one, but length 1.
// console.log(mesh.position.normalize());

//scale
mesh.scale.set(1, 1, 1);

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
// camera.position.set(1, 1, 3);
camera.position.z = 3;
scene.add(camera);

console.log("mest positon ko length");
console.log(mesh.position.length());
//length from center

console.log("mesh position of the object and the camera");
console.log(mesh.position.distanceTo(camera.position));
//distance from the camera and the object created

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
//26.13

import "./style.css";
import * as THREE from "three";
import { Group, Mesh, ObjectSpaceNormalMap } from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Objects
 */
const group = new THREE.Group();
group.scale.y = 1.5;
group.rotation.y = 0.67;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf07070 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1.5, 1),
  new THREE.MeshBasicMaterial({ color: 0xce70f0 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1.5),
  new THREE.MeshBasicMaterial({ color: 0x70f0e2 })
);
cube3.position.x = 1.5;
group.add(cube3);

/*
 * border
 */
//cube1
var geo = new THREE.EdgesGeometry(cube1.geometry);
var mat = new THREE.LineBasicMaterial({ color: 0x666666 });
var wireframe = new THREE.LineSegments(geo, mat);
cube1.add(wireframe);
//cube2
var geo = new THREE.EdgesGeometry(cube2.geometry);
var mat = new THREE.LineBasicMaterial({ color: 0x666666 });
var wireframe = new THREE.LineSegments(geo, mat);
cube2.add(wireframe);
//cube1
var geo = new THREE.EdgesGeometry(cube3.geometry);
var mat = new THREE.LineBasicMaterial({ color: 0x666666 });
var wireframe = new THREE.LineSegments(geo, mat);
cube3.add(wireframe);
/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * ROTAION
 */
group.rotation.set(0.5, -3.9, 0);
group.scale.set(0.42, 0.62, 0.62);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
camera.lookAt(new THREE.Vector3(0, 2, -6));
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

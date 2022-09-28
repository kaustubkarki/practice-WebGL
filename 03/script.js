//to create a visivle object is called mesh
//Scene
const scene = new THREE.Scene();

//Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff00f0 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//sizes
const sizes = {
  width: 800,
  height: 600,
};

//camera(just a pov or fov)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.x = 2;
// camera.position.y = 1;
// const camera = new THREE.PerspectiveCamera(angle,aspectRatio,);
scene.add(camera);

// /Renderer
const canvas = document.querySelector(".webgl");
console.log(canvas);
// just like css the above line will fetch the element which consist the class webgl

const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
//psuh dasabled

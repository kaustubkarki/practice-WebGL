const scene = new THREE.Scene();

//to create a visivle object is called mesh

//Scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//sizes
const sizes = {
  width: 800,
  height: 600,
};

//camera(just a pov or fov)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const camera = new THREE.PerspectiveCamera(angle,aspectRatio,);
scene.add(camera);

// /Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
  //27.23
});

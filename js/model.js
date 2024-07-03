import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;
camera.position.y = 0;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;
let controls;
let objToRender = 'oleg';

const loader = new GLTFLoader();

loader.load(
`model/${objToRender}/house.glb`,
function (gltf) {

object = gltf.scene;
object.scale.set(0.1,0.1,0.1)
scene.add(object);
},);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(600, 550);
document.getElementById("block").appendChild(renderer.domElement);
camera.position.z = objToRender === "oleg" ? 1:1;

const topLight = new THREE.DirectionalLight(0xfabe76, 1500);
topLight.position.set(100, 500, 50)
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "oleg" ? 5 : 1);
scene.add(ambientLight);

if (objToRender === "oleg") {
controls = new OrbitControls(camera, renderer.domElement);
}

function animate() {
requestAnimationFrame(animate);
renderer.render(scene, camera);
}

document.onmousemove = (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
}

animate();
/*
 * @Author: wu_lingshan
 * @Date: 2024-12-06 17:04:59
 * @LastEditors: wu_lingshan
 * @LastEditTime: 2024-12-06 17:16:56
 * @Description: Loading 3D models
 */
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

loader.load('public/scene.gltf', function (gltf) {

    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});

renderer.render(scene, camera);
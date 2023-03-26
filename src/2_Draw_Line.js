import * as THREE from 'three';

// 렌더러
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 씬
const scene = new THREE.Scene();

// 카메라
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 100); // 카메라 위치 설정
camera.lookAt(0, 0, 0); // 카메라가 (0, 0, 0)을 보게 만듦

// Mesh를 사용하지 않고 선 그리기
// 선의 Material을 정하기 위해서 LineBasicMaterial이나 LineDashedMaterial을 사용
// LineBasicMaterial: 와이어프레임 스타일의 지오메트리를 그림
// 속성 => color, linewidth, linecap, linejoin
// LineDashedMaterial: 와이어프레임 스타일의 지오메트리를 파선으로 그림
// 속성 => color, linewidth, scale, dashSize, gapSize
const material = new THREE.LineBasicMaterial({color: 0x0000ff});

// 꼭짓점 정의
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

// BufferGeometry: 지오메트리를 표현하기 위한 정보를 가짐
// 꼭짓점 위치, 면 순서, 법선, 색상, UV, 버퍼 등
// setFromPoints(점 배열): 점 배열로부터 BufferGeometry의 꼭짓점 위치를 설정
const geometry = new THREE.BufferGeometry().setFromPoints(points);

// 선은 연속된 꼭짓점 쌍 사이에 그려짐
// 첫 번째와 마지막 꼭짓점 사이에는 그려지지 않음
// 앞서 만든 geometry와 material을 이용해 선을 할당
const line = new THREE.Line(geometry, material);

scene.add(line);    // 씬에 선 그림

renderer.render(scene, camera);
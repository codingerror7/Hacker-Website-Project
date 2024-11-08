//FUNCTION TO WRITE THREEJS CODE:
function threeD() {

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65 , window.innerWidth / window.innerHeight , 0.1 , 100);
camera.position.z = 5;
scene.add(camera);

const video = document.getElementById("sphere4");
const loader = new THREE.VideoTexture(video);

const box = new THREE.BoxGeometry(3 , 3, 3); //2.8
const material = new THREE.MeshBasicMaterial( { map : loader});
const mesh = new THREE.Mesh(box , material);
scene.add(mesh);

mesh.position.set(3,-0.4,0)

const canvas = document.querySelector(".draw");
let renderer = new THREE.WebGLRenderer({canvas : canvas , antialias : true} );
renderer.setSize(window.innerWidth , window.innerHeight);

renderer.setClearColor("#230b0b");


//TO MAKE THE VIDEO PLAY ON CUBE:
video.addEventListener('loadeddata', () => {
    video.play(); // Play the video once it's loaded
}, false);
 

function animate() {
    renderer.render(scene ,  camera);
    mesh.rotation.y += 0.01;
   // mesh.rotation.x += 0.01;
   
    window.requestAnimationFrame(animate);
}
animate();
}
threeD();

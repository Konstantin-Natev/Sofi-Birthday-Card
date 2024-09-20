import { useState, useEffect } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import { ZoomingScreen } from './components/ZommingScreen/ZoomingScreen';

function App() {
  const [isCardClicked, setIsCardClicked] = useState(false); // For card clicked state
  const [showZoomingScreen, setShowZoomingScreen] = useState(false); // For controlling the ZoomingScreen

  // Effect to handle the delay for showing ZoomingScreen after the card is clicked
  useEffect(() => {
    if (isCardClicked) {
      const timer = setTimeout(() => {
        setShowZoomingScreen(true);
      }, 2000); // 2-second delay before showing the ZoomingScreen

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [isCardClicked]);

  return (
    <>
      <Card isCardClicked={isCardClicked} setIsCardClicked={setIsCardClicked} />
      {showZoomingScreen && <ZoomingScreen />}
    </>
  );
}

export default App;


  // const refContainer = useRef(null);

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.z = 5;
  //   const renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(window.innerWidth, window.innerHeight);

  //   refContainer.current && refContainer.current.appendChild(renderer.domElement);

  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   camera.position.setZ(30);

  //   // Materials for the box
  //   const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });

  //   // Create the base of the box (without the lid)
  //   const baseGeometry = new THREE.BoxGeometry(10, 10, 10, 1, 1, 1);
  //   const base = new THREE.Mesh(baseGeometry, material);
  //   scene.add(base);

  //   // Create the top lid
  //   const lidGeometry = new THREE.BoxGeometry(10, 2, 10);
  //   const topLid = new THREE.Mesh(lidGeometry, material);
  //   topLid.position.y = 6; // Position it on top of the base
  //   scene.add(topLid);

  //   // Create the sides
  //   const sideGeometry = new THREE.BoxGeometry(10, 10, 2);
    
  //   const frontSide = new THREE.Mesh(sideGeometry, material);
  //   frontSide.position.set(0, 0, 6);
  //   scene.add(frontSide);

  //   const backSide = new THREE.Mesh(sideGeometry, material);
  //   backSide.position.set(0, 0, -6);
  //   scene.add(backSide);

  //   const leftSide = new THREE.Mesh(sideGeometry, material);
  //   leftSide.rotation.y = Math.PI / 2;
  //   leftSide.position.set(-6, 0, 0);
  //   scene.add(leftSide);

  //   const rightSide = new THREE.Mesh(sideGeometry, material);
  //   rightSide.rotation.y = Math.PI / 2;
  //   rightSide.position.set(6, 0, 0);
  //   scene.add(rightSide);

  //   // Light
  //   const pointLight = new THREE.PointLight(0xffffff);
  //   pointLight.position.set(10, 10, 10);
  //   scene.add(pointLight);

  //   // Animation state
  //   let openLidAngle = 0;
  //   let openSideAngle = 0;

  //   // Animate the present opening
  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     if (openLidAngle < Math.PI / 2) {
  //       openLidAngle += 0.01;
  //       topLid.rotation.x = -openLidAngle; // Open the lid backward
  //     }

  //     if (openSideAngle < Math.PI / 2) {
  //       openSideAngle += 0.01;
  //       frontSide.rotation.x = openSideAngle; // Front side folds down
  //       backSide.rotation.x = -openSideAngle; // Back side folds down
  //       leftSide.rotation.z = openSideAngle; // Left side folds out
  //       rightSide.rotation.z = -openSideAngle; // Right side folds out
  //     }

  //     renderer.render(scene, camera);
  //   };

  //   animate();
  // }, []);
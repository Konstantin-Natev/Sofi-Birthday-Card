import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './wormhole.module.css'; // Import the CSS module

const Wormhole = () => {
  const wormholeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const count = 50; // Number of spheres
    const radius = 1500; // Radius of the wormhole
    const length = 5000; // Length (depth) of the wormhole

    const wormhole = wormholeRef.current;
    if (!wormhole) return;

    for (let i = 0; i < count; i++) {
      const sphere = document.createElement('div');
      sphere.classList.add(styles.sphere);
      wormhole.appendChild(sphere);

      const depth = (i / count) * length;

      gsap.set(sphere, {
        x: Math.sin(i) * radius,
        y: Math.cos(i) * radius,
        z: -depth
      });
    }

    gsap.to(wormhole, {
      rotationZ: 360,
      repeat: -1,
      duration: 5,
      ease: 'none',
    });
  }, []);

  return <div ref={wormholeRef} className={styles.wormholeContainer} />;
};

export default Wormhole;

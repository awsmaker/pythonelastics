import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styles from './Starfield.module.css';

const Starfield = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    
    // Configuration de la scène
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Création des étoiles
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
    });

    const starVertices = [];
    for (let i = 0; i < 15000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starVertices.push(x, y, z);
    }

    starGeometry.setAttribute('position', 
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);
    camera.position.z = 5;

    // Animation
    const animate = () => {
      if (!mounted) return;
      
      requestAnimationFrame(animate);
      stars.rotation.x += 0.0002;
      stars.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    // Gestion du redimensionnement
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      mounted = false;
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className={styles.starfieldContainer} />;
};

export default Starfield; 
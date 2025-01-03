import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const containerRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const rendererRef = useRef();
  const particlesRef = useRef();

  useEffect(() => {
    // Configuration initiale
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setClearColor(0x000000, 0);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Création des particules
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 5000;
    const posArray = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Matériau des particules avec dégradé
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      map: new THREE.TextureLoader().load('/img/particle.png'),
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });

    // Couleurs des particules
    const colors = new Float32Array(particleCount * 3);
    const color1 = new THREE.Color(0x00f2fe); // Bleu clair
    const color2 = new THREE.Color(0x4facfe); // Bleu
    const color3 = new THREE.Color(0x9333ea); // Violet

    for(let i = 0; i < particleCount; i++) {
      const mixedColor = new THREE.Color();
      const mixed = Math.random();
      
      if(mixed < 0.33) {
        mixedColor.lerpColors(color1, color2, mixed * 3);
      } else if(mixed < 0.66) {
        mixedColor.lerpColors(color2, color3, (mixed - 0.33) * 3);
      } else {
        mixedColor.lerpColors(color3, color1, (mixed - 0.66) * 3);
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    particlesRef.current = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneRef.current.add(particlesRef.current);

    cameraRef.current.position.z = 2;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesRef.current.rotation.x += 0.0003;
      particlesRef.current.rotation.y += 0.0005;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    // Gestion du redimensionnement
    const handleResize = () => {
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(rendererRef.current.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: 'radial-gradient(circle at center, #000B18, #000000)'
      }}
    />
  );
};

export default ParticleBackground; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import './index.css'
import App from './App.jsx'

import { extend } from '@react-three/fiber'
import { View } from '@react-three/drei'

extend({ View })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;

import React, { useRef, useEffect, useState, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Globe from 'react-globe.gl';

const InteractiveGlobe = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [isExpanded, setIsExpanded] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (isExpanded) {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      } else if (containerRef.current) {
        setDimensions({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isExpanded]);

  useEffect(() => {
    if (globeRef.current && dimensions.width > 0) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = isExpanded;
      
      const targetAltitude = isExpanded ? 1.6 : 2.2;
      globeRef.current.pointOfView({ altitude: targetAltitude }, 0); 
    }
  }, [isExpanded, dimensions.width]);

  const arcsData = useMemo(() => {
    return [...Array(15).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['rgba(0, 229, 255, 0.9)', 'rgba(255, 255, 255, 0.2)']
    }));
  }, []);

  const globeRender = dimensions.width > 0 && (
    <Globe
      ref={globeRef}
      width={dimensions.width}
      height={dimensions.height}
      backgroundColor="rgba(0,0,0,0)"
      showGlobe={false}
      showAtmosphere={true}
      atmosphereColor="#00e5ff"
      atmosphereAltitude={isExpanded ? 0.15 : 0.25}
      hexPolygonsData={countries.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonColor={() => 'rgba(0, 229, 255, 0.8)'}
      arcsData={arcsData}
      arcColor="color"
      arcDashLength={0.5}
      arcDashGap={0.2}
      arcDashAnimateTime={2000}
      arcsTransitionDuration={0}
    />
  );

  if (!isExpanded) {
    return (
      <div
        ref={containerRef}
        onClick={() => setIsExpanded(true)}
        className="relative w-[260px] h-[260px] md:w-[350px] md:h-[350px] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        <div className="absolute inset-4 bg-cyan-500/20 rounded-full pointer-events-none z-0 blur-[30px]"></div>
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {globeRender}
        </div>
      </div>
    );
  }

  return createPortal(
    <div className="fixed inset-0 z-[99999] w-screen h-screen bg-[#050505] flex items-center justify-center">
      <button
        onClick={() => setIsExpanded(false)}
        className="absolute top-6 right-6 md:top-10 md:right-10 text-[#8e918f] hover:text-cyan-400 p-3 z-[100000] transition-colors bg-[#1e1f20]/50 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,195,255,0.2)] hover:shadow-[0_0_20px_rgba(0,195,255,0.5)] cursor-pointer"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cyan-500/20 rounded-full pointer-events-none z-0 blur-[150px] opacity-30"></div>

      <div className="relative z-10 flex items-center justify-center w-full h-full">
         {globeRender}
      </div>
    </div>,
    document.body
  );
};

export default InteractiveGlobe;
import React, { useState } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css';

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      }
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      delay: "-1",
      duration: 2,
      ease: "Expo.easeInOut",
    });
    gsap.to([".sky", ".bg"], {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    gsap.to(".character", {
      scale: 1,
      bottom: window.innerWidth < 768 ? "-35%" : "-25%",
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      x: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${-xMove * 0.3}%`,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className='svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black'>
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className='main w-full rotate-[-10deg] scale-[1.7]'>
          <div className='landing overflow-hidden relative w-full h-screen bg-black'>
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-4 px-4 sm:px-6'>
              <div className='logo flex gap-4 sm:gap-7'>
                <div className='lines flex flex-col gap-[5px]'>
                  <div className='line w-8 sm:w-12 h-1 bg-white'></div>
                  <div className='line w-6 sm:w-7 h-1 bg-white'></div>
                  <div className='line w-3 h-1 bg-white'></div>
                </div> 
                <div className='absolute top-0 right-0 pt-5 pr-2'>
                <h3 className='text-xl sm:text-3xl -mt-[8px] leading-none text-white'>ROckstar</h3>
                </div>
              </div>
            </div>

            <div className='imagesdiv relative overflow-hidden w-full h-screen'>
              <img className="absolute sky scale-[2] rotate-[-2deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
              <img className="absolute bg scale-[2] rotate-[-10deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />

              <div className='text text-white absolute top-12 left-121 -translate-x-1/2 text-center scale-[1.2] sm:scale-[1.3] md:scale-[1.4] rotate-[-10deg]'>
                <h1 className='text-4xl sm:text-6xl md:text-8xl leading-none'>grand</h1>
                <h1 className='text-4xl sm:text-6xl md:text-8xl leading-none'>theft</h1>
                <h1 className='text-4xl sm:text-6xl md:text-8xl leading-none'>auto VI</h1>
              </div>

              <img className="absolute character  -bottom-[140%] rotate-[-10deg] left-1/2 -translate-x-1/2 w-[300px] sm:w-[350px] md:w-[400px]" src="./girlbg.png" alt="" />
            </div>

            <div className='btmbar absolute text-white bottom-0 w-full py-3 px-4 sm:px-5 bg-gradient-to-t from-black to-transparent'>
              <div className='flex gap-2 items-center'>
                <i className="text-xl ri-arrow-down-line hidden sm:block"></i>
                <h3 className='text-sm sm:text-base hidden sm:block '>Scroll Down</h3>
              </div>
              <img className='h-8 sm:h-15 w-[220px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
            </div>
          </div>

          <div className='w-full min-h-screen flex items-center justify-center bg-black'>
            <div className='cntnr flex flex-col md:flex-row text-white w-full max-w-7xl px-25 py-12 gap-8'>
              <div className='limg w-full md:w-1/3 h-auto flex justify-center items-center'>
                <img className='scale-[1.5] max-w-full h-auto' src="./imag.png" alt="" />
              </div>
              <div className='rg w-full space-y-4 '>
                <h1 className='text-3xl sm:text-4xl md:text-6xl'>Still Running,</h1>
                <h1 className='text-3xl sm:text-4xl md:text-6xl'>Not Hunting</h1>
                <p className='text-sm font-[Helvetica_Now_Display] sm:text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fuga! Animi consectetur dolores voluptas, itaque illum ducimus molestiae! Unde, maxime quasi dolore blanditiis expedita repellendus dolores, excepturi </p>
                <p className='text-sm font-[Helvetica_Now_Display] sm:text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fuga! Animi consectetur dolores voluptas, itaque illum ducimus molestiae! Unde, maxime quasi dolore blanditiis expedita repellendus dolores, excepturi </p>
                <p className='text-sm font-[Helvetica_Now_Display] sm:text-base leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, fuga! Animi consectetur dolores voluptas, itaque illum ducimus molestiae! Unde, maxime quasi dolore blanditiis expedita repellendus dolores, excepturi </p>
                <button className='bg-yellow-500 mt-4 px-4 py-3 text-lg sm:text-xl text-black'>Download Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

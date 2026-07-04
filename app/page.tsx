"use client";
import { useState, useEffect } from "react";
import { WeddingLanding } from "@/components/wedding/WeddingLanding";

export default function Page() {
  const [introFinished, setIntroFinished] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // When the video ends (or skip button is clicked), trigger fade out
  const finishIntro = () => {
    setFadeOut(true);
    // Wait for the CSS transition to complete before unmounting the intro layer
    setTimeout(() => {
      setIntroFinished(true);
    }, 1000); 
  };

  return (
    <>
      {/* Intro Video Overlay */}
      {!introFinished && (
        <div 
          style={{ zIndex: 99999 }}
          className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={finishIntro}
            onError={finishIntro}
            className="w-full h-full object-cover"
          >
            <source src="/queria_animaciones_tipo_una_in.mp4" type="video/mp4" />
          </video>
          
          <button 
            onClick={finishIntro}
            style={{ zIndex: 999999 }}
            className="absolute bottom-8 right-8 px-4 py-2 bg-black/50 rounded-full text-xs uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-colors"
          >
            Omitir intro
          </button>
        </div>
      )}

      {/* 
        Main Page 
        While the intro hasn't finished, we restrict the height and hide overflow.
        We also set opacity-0 so if the video has transparency, they don't see the page.
      */}
      <div 
        className={!introFinished ? "h-screen overflow-hidden opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-1000"}
      >
        <WeddingLanding />
      </div>
    </>
  );
}

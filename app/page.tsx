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
          className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}
        >
          <video
            autoPlay
            muted
            playsInline
            onEnded={finishIntro}
            className="w-full h-full object-cover"
          >
            <source src="/queria_animaciones_tipo_una_in.mp4" type="video/mp4" />
          </video>
          
          <button 
            onClick={finishIntro}
            className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors z-[101]"
          >
            Omitir intro
          </button>
        </div>
      )}

      {/* 
        Main Page 
        While the intro hasn't finished, we restrict the height to 100vh and hide overflow.
        This prevents Lenis or the browser from allowing scrolling while the video plays.
      */}
      <div className={!introFinished ? "h-screen overflow-hidden" : ""}>
        <WeddingLanding />
      </div>
    </>
  );
}

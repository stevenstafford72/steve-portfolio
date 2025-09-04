"use client";

import {useEffect, useRef} from "react";

// Stating the Function CursoFX 
export default function CursoFX () {
    // States the glowing element will move 
    const blobRef = useRef<HTMLDivElement>(null);
    
    // "useRef" for the mouse position "Pos" is where the mouse will ease towards 
    const target = useRef({x:0, y:0})
    const pos = useRef({x:0, y:0})

    // "rafID" is used to cancel when unmounting mouse 
    const rafId = useRef<number | null>(null);


    useEffect(() => {
        const SMOOTH = 0.12; // How fast the glow follows the mouse 
        
        // animation loop
        const tick = () => {
            // ease position toward target
            pos.current.x += (target.current.x - pos.current.x) * SMOOTH;
            pos.current.y += (target.current.y - pos.current.y) * SMOOTH;
      
            // move the blob with a transform (no React re-render)
            const el = blobRef.current;
            if (el) {
              // center the 256px blob on the cursor
              el.style.transform = `translate(${pos.current.x - 128}px, ${pos.current.y - 128}px)`;
            }
      
            rafId.current = requestAnimationFrame(tick);
          };
      
          // read the pointer, but don’t set React state (avoid re-renders)
          const onMove = (e: PointerEvent) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;
            // start the loop on first move
            if (rafId.current === null) rafId.current = requestAnimationFrame(tick);
          };
      
          window.addEventListener("pointermove", onMove);
          return () => {
            window.removeEventListener("pointermove", onMove);
            if (rafId.current !== null) cancelAnimationFrame(rafId.current);
          };
        }, []);
      
        // fixed layer, ignores clicks
        return (
          <div
            ref={blobRef}
            className="
              pointer-events-none fixed left-0 top-0 h-64 w-64 rounded-full blur-3xl
              bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.45)_0%,rgba(99,102,241,0.25)_40%,transparent_70%)]
              mix-blend-screen
            "
            aria-hidden
          />
        );
      }
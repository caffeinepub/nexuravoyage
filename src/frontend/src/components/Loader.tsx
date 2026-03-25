import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [phase, setPhase] = useState<"fill" | "subtitle" | "fadeout" | "done">(
    "fill",
  );

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("subtitle"), 800);
    const t2 = setTimeout(() => setPhase("fadeout"), 2200);
    const t3 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#080808",
        zIndex: 99990,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "fadeout" ? 0 : 1,
        transition: phase === "fadeout" ? "opacity 0.8s ease" : "none",
        pointerEvents: phase === "fadeout" ? "none" : "all",
      }}
    >
      {/* Animated line above */}
      <div
        style={{
          width: phase === "fill" ? "0px" : "120px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #c9a96e, transparent)",
          marginBottom: "32px",
          transition: "width 0.8s ease",
        }}
      />

      {/* Brand name */}
      <h1
        style={{
          fontFamily: "'Bodoni Moda', 'Bodoni MT', 'Didot', serif",
          fontSize: "clamp(32px, 6vw, 72px)",
          fontWeight: 700,
          letterSpacing: "0.25em",
          color: phase === "fill" ? "transparent" : "#c9a96e",
          WebkitTextStroke: "1px #c9a96e",
          transition: "color 0.8s ease 0.3s",
          margin: 0,
          userSelect: "none",
        }}
      >
        NEXURA_VOYAGE
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: "11px",
          letterSpacing: "0.4em",
          color: "rgba(201,169,110,0.6)",
          marginTop: "16px",
          opacity: phase === "subtitle" || phase === "fadeout" ? 1 : 0,
          transform:
            phase === "subtitle" || phase === "fadeout"
              ? "translateY(0)"
              : "translateY(10px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          userSelect: "none",
        }}
      >
        DARK PSYCHOLOGY ATLAS
      </p>

      {/* Animated line below */}
      <div
        style={{
          width: phase === "fill" ? "0px" : "120px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, #c9a96e, transparent)",
          marginTop: "32px",
          transition: "width 0.8s ease",
        }}
      />
    </div>
  );
}

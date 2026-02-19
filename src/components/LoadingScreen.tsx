import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "tagline" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(onComplete, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-opacity duration-600 ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="gold-divider mb-6" style={{
        opacity: phase !== "logo" ? 0 : 1,
        transition: "opacity 0.4s",
      }} />
      <h1
        className="font-heading text-4xl md:text-6xl tracking-[0.2em] text-cream"
        style={{
          opacity: phase === "logo" || phase === "tagline" ? 1 : 0,
          transform: phase === "logo" || phase === "tagline" ? "translateY(0)" : "translateY(-20px)",
          transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        VERDÉLUXE
      </h1>
      <p
        className="font-body text-xs tracking-[0.3em] uppercase mt-4"
        style={{
          color: "hsl(var(--gold))",
          opacity: phase === "tagline" ? 1 : 0,
          transform: phase === "tagline" ? "translateY(0)" : "translateY(10px)",
          transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        Tradition & Strength in Every Drop
      </p>
    </div>
  );
};

export default LoadingScreen;

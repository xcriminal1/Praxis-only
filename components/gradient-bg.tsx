import React from "react";

export const GradineBg = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-gray-900">
      {/* Neon gradient base: dark navy -> black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAE6DF] via-[#C2CCC5] to-[#0899e2]" />

      {/* Diagonal neon streaks */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(110deg, rgba(0,0,0,0.1) 0, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 80px)`,
        }}
      />

      {/* Soft neon glow pulses */}
      <div className="absolute -top-1/4 -left-1/4 h-[200%] w-[200%] animate-pulse-slow pointer-events-none" style={{
        background: `radial-gradient(circle at 25% 25%, rgba(68,0,255,0.4), transparent 50%), radial-gradient(circle at 75% 75%, rgba(0,255,233,0.3), transparent 50%)`,
        mixBlendMode: 'screen',
      }} />
      </div>
  );
};

import React from "react";

const NeonWaveBackground = () => (
  <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden">
    <div className="absolute inset-0 animate-gradient-move"
      style={{
        background: "linear-gradient(120deg, #6366f1 0%, #22d3ee 40%, #a21caf 70%, #ec4899 90%, #0ea5e9 100%)",
        opacity: 0.5,
        filter: "blur(80px)"
      }}
    />
    <svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="wave1" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />      {/* Indigo */}
          <stop offset="0.25" stopColor="#22d3ee" /> {/* Cyan */}
          <stop offset="0.5" stopColor="#a21caf" />   {/* Purple */}
          <stop offset="0.75" stopColor="#ec4899" />  {/* Pink */}
          <stop offset="1" stopColor="#0ea5e9" />     {/* Blue */}
        </linearGradient>
      </defs>
      <path
        d="M0,700 Q360,600 720,700 T1440,700 V900 H0 Z"
        fill="url(#wave1)"
        opacity="0.7"
      />
      <path
        d="M0,800 Q480,900 960,800 T1440,800 V900 H0 Z"
        fill="url(#wave1)"
        opacity="0.5"
      />
      <path
        d="M0,850 Q720,750 1440,850 V900 H0 Z"
        fill="url(#wave1)"
        opacity="0.3"
      />
    </svg>
  </div>
);

export default NeonWaveBackground;
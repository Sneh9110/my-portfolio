import React, { useEffect, useState } from "react";

const GlowingScrollLine = () => {
  const [glow, setGlow] = useState(0.2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      // Glow ranges from 0.2 (dim) to 1 (bright)
      setGlow(0.2 + scrollPercent * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 right-8 h-full z-50 pointer-events-none"
      style={{
        width: "6px",
        background: `linear-gradient(to bottom, rgba(99,102,241,${glow}), rgba(34,211,238,${glow * 0.7}))`, // Indigo to Cyan
        boxShadow: `0 0 32px 8px rgba(99,102,241,${glow}), 0 0 64px 16px rgba(34,211,238,${glow * 0.5})`,
        borderRadius: "8px",
        transition: "background 0.2s, box-shadow 0.2s"
      }}
    />
  );
};

export default GlowingScrollLine;
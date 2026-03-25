import { useEffect, useState } from "react";
import mario from "../assets/MARIO.jpeg";

export default function Profile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "radial-gradient(ellipse at 60% 20%, #1a3a6e 0%, #0f2351 40%, #0a1a3d 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Subtle noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div
        className="flex flex-col items-center gap-6 px-6 py-16"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        {/* Avatar */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
              transform: "scale(1.12)",
            }}
          />
          <div
            className="w-52 h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative"
            style={{
              boxShadow:
                "0 0 40px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Ganti dengan foto asli: <img src="/foto.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
            <div className="w-full h-full bg-linier-to-br from-blue-300/20 to-blue-900/60 flex items-center justify-center">
              <img src={mario}  alt="Profile" className="w-full h-full object-scale-down scale-175 translate-y-14" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight text-center"
          style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.5px" }}
        >
          Yoseph I Made Mario
          <br />
          Budi Karmawan
        </h1>

        {/* Tagline */}
        <p
          className="text-white/60 text-sm md:text-base text-center"
          style={{ fontFamily: "'Courier New', monospace", letterSpacing: "0.06em" }}
        >
          Front-End Website Developer&nbsp;|&nbsp;IT Enthusiast&nbsp;|&nbsp;Problem
          Solver&nbsp;
        </p>

        {/* Divider */}
        <div className="w-64 h-px bg-linier-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </div>
  );
}
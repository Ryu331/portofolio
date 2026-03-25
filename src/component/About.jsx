const personalData = [
  { label: "Tempat / Tanggal Lahir", value: "Denpasar, 09 September 2008" },
  { label: "Jenis Kelamin", value: "Laki-Laki" },
  { label: "Agama", value: "Katolik" },
  { label: "Kewarganegaraan", value: "Indonesia" },
];

const contacts = [
  { value: "+62 812-4655-7840" },
  { value: "mariobudikarmawan@gmail.com" },
  { value: "Br. Dukuh Pandean, Munggu" },
];

const hardSkills = [
  "HTML", "Tailwinds CSS", "JavaScript", "React.js (Dasar)",
  "PHP Native", "MySQL", "XAMPP", "VS Code", "Figma",
];

const softSkills = [
  "Problem Solving", "Kerja Sama Tim", "Komunikasi",
  "Disiplin", "Manajemen Waktu", "Cepat Belajar", "Teliti",
];

const projects = [
  {
    title: "Website Sosial Media",
    description:
      "Website sosial media dengan fitur like dan share yang membuka jendela baru, dibangun menggunakan React.js + Vite dan Tailwinds CSS.",
    tags: ["React.js", "Vite", "Tailwinds CSS"],
    link: "https://react-project1-beta-eight.vercel.app/",
  },
  {
    title: "Recreate Website AMD",
    description:
      "Membuat ulang website perusahaan AMD menggunakan HTML, Tailwinds, dan JS yang sudah responsive.",
    tags: ["HTML", "Tailwinds CSS", "JavaScript"],
    link: "https://web-amd-lomba.vercel.app/",
  },
];

export default function About() {
  return (
    <div
      className="min-h-screen py-20 px-6"
      style={{
        background: "linear-gradient(180deg, #0a1a3d 0%, #0d1f4a 60%, #0f2351 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-16">

        {/* Section Title */}
        <div className="text-center">
          <p
            className="text-white/40 text-xs tracking-[0.3em] uppercase mb-2"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Tentang Saya
          </p>
          <div className="mt-4 w-16 h-px bg-linear-to-r from-transparent via-yellow-400/60 to-transparent mx-auto" />
        </div>

        {/* About paragraph */}
        <p
          className="text-white/60 text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto"
          style={{ fontFamily: "'Courier New', monospace", letterSpacing: "0.03em" }}
        >
          Saya adalah seorang pelajar yang bersemangat dalam bidang{" "}
          <span className="text-yellow-400/80">Rekayasa Perangkat Lunak</span> dengan pengalaman
          dalam mengembangkan website. Memiliki kemampuan dalam{" "}
          <span className="text-yellow-400/80">front-end development</span> dan selalu siap untuk
          belajar hal baru seperti backend.
        </p>

        {/* Data Diri + Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3
              className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase mb-2"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Data Diri
            </h3>
            {personalData.map((item) => (
              <div key={item.label}>
                <p className="text-white/40 text-xs mb-0.5" style={{ fontFamily: "'Courier New', monospace" }}>
                  {item.label}
                </p>
                <p className="text-white/90 text-sm font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3
              className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase mb-2"
              style={{ fontFamily: "'Courier New', monospace" }}
            >
              Kontak
            </h3>
            {contacts.map((c) => (
              <p key={c.value} className="text-white/70 text-sm">
                {c.value}
              </p>
            ))}
            <div className="mt-2 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <h3
                className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Github
              </h3>
              <p className="text-white/70 text-sm">Ryu331</p>
            </div>
          </div>
        </div>

        {/* Pendidikan */}
        <div>
          <h3
            className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Pendidikan
          </h3>
          <div
            className="rounded-2xl p-6 flex items-center justify-between"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-white font-bold text-lg">SMKS Wira Harapan</p>
              <p className="text-white/40 text-sm mt-1" style={{ fontFamily: "'Courier New', monospace" }}>
                Rekayasa Perangkat Lunak
              </p>
            </div>
            <span
              className="text-xs px-3 py-1 rounded-full text-yellow-400/80"
              style={{
                background: "rgba(234,179,8,0.1)",
                border: "1px solid rgba(234,179,8,0.2)",
                fontFamily: "'Courier New', monospace",
              }}
            >
              2024 — Sekarang
            </span>
          </div>
        </div>

        {/* Projek */}
        <div>
          <h3
            className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Projek
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl p-6 flex flex-col gap-3 hover:border-white/20 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h4 className="text-white font-bold text-base">{p.title}</h4>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "'Courier New', monospace" }}
                >
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded text-yellow-400/70"
                      style={{
                        background: "rgba(234,179,8,0.08)",
                        border: "1px solid rgba(234,179,8,0.15)",
                        fontFamily: "'Courier New', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Link Button */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-xl px-4 py-2 transition-all duration-300 hover:brightness-110 hover:scale-[1.02] active:scale-95"
                  style={{
                    background: "rgba(234,179,8,0.12)",
                    border: "1px solid rgba(234,179,8,0.3)",
                    color: "rgba(234,179,8,0.9)",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  Lihat Projek →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Kemampuan */}
        <div>
          <h3
            className="text-yellow-400/80 text-xs tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Kemampuan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="text-white/50 text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Hard Skill
              </p>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full text-white/80"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                className="text-white/50 text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: "'Courier New', monospace" }}
              >
                Soft Skill
              </p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1 rounded-full text-yellow-400/70"
                    style={{ background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.15)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

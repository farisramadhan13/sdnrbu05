export default function ProfilPage() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        {/* Glow behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400 mb-4">
          Profil Sekolah
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Mengenal lebih dekat visi, misi, dan sejarah SDN Rawa Badak Utara 05.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Visi */}
        <div className="glass p-10 rounded-3xl border border-purple-500/20 shadow-[0_8px_30px_rgba(168,85,247,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(219,39,119,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Visi Kami</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">
            "Mewujudkan peserta didik yang bertaqwa, cerdas, terampil, berkarakter kebangsaan, dan peduli terhadap lingkungan di era globalisasi."
          </p>
        </div>

        {/* Misi */}
        <div className="glass p-10 rounded-3xl border border-cyan-500/20 shadow-[0_8px_30px_rgba(34,211,238,0.15)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Misi Kami</h2>
          <ul className="space-y-3 text-foreground/80 text-lg">
            <li className="flex gap-3"><span className="text-cyan-500 font-bold">1.</span> Menanamkan nilai-nilai keagamaan dalam kehidupan sehari-hari.</li>
            <li className="flex gap-3"><span className="text-cyan-500 font-bold">2.</span> Melaksanakan pembelajaran PAKEM (Aktif, Kreatif, Efektif, Menyenangkan).</li>
            <li className="flex gap-3"><span className="text-cyan-500 font-bold">3.</span> Mengembangkan bakat dan minat melalui kegiatan ekstrakurikuler.</li>
            <li className="flex gap-3"><span className="text-cyan-500 font-bold">4.</span> Menciptakan lingkungan sekolah yang bersih, asri, dan nyaman.</li>
          </ul>
        </div>
      </div>

      {/* Sejarah Singkat */}
      <div className="glass p-8 md:p-12 rounded-3xl border border-purple-500/20 shadow-[0_8px_30px_rgba(168,85,247,0.1)] relative">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Sejarah Singkat</h2>
        <div className="prose prose-lg dark:prose-invert prose-purple max-w-none text-foreground/80">
          <p>
            SDN Rawa Badak Utara 05 didirikan pada tahun 1980 dengan tujuan memberikan layanan pendidikan dasar terbaik bagi masyarakat sekitar Rawa Badak Utara. Seiring berjalannya waktu, sekolah ini terus berkembang baik dari segi infrastruktur maupun kualitas tenaga pendidik.
          </p>
          <p>
            Dengan semangat gotong royong dan dedikasi yang tinggi, kami telah berhasil mencetak lulusan-lulusan yang tidak hanya cerdas secara akademis, tetapi juga memiliki akhlak yang mulia. Saat ini, SDN RBU 05 telah terakreditasi A dan menjadi salah satu sekolah rujukan di tingkat kota untuk penerapan Kurikulum Merdeka dan program sekolah berwawasan lingkungan.
          </p>
        </div>
      </div>
    </div>
  );
}

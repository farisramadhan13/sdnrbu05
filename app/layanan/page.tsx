export default function LayananPage() {
  const services = [
    {
      title: "Ekstrakurikuler",
      description: "Beragam pilihan kegiatan untuk mengembangkan minat dan bakat siswa di luar jam pelajaran akademik, seperti Pramuka, Paskibra, Tari Tradisional, dan Futsal.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-500"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>
      )
    },
    {
      title: "Perpustakaan Digital",
      description: "Akses ke ribuan koleksi buku bacaan, ensiklopedia, dan buku teks pelajaran yang terintegrasi dengan sistem peminjaman modern.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-500"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
      )
    },
    {
      title: "Unit Kesehatan Sekolah (UKS)",
      description: "Fasilitas kesehatan pertolongan pertama dengan petugas terlatih dan kerja sama rutin dengan puskesmas setempat untuk memantau kesehatan siswa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-pink-500"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      )
    },
    {
      title: "Bimbingan & Konseling",
      description: "Layanan konsultasi psikologis dan akademik untuk membantu siswa mengatasi kesulitan belajar dan pengembangan karakter emosional.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    },
    {
      title: "Laboratorium Komputer",
      description: "Fasilitas lab komputer ber-AC dengan koneksi internet cepat untuk mendukung pembelajaran literasi digital dan TIK sejak dini.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-500"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      )
    },
    {
      title: "Kantin Sehat Tersertifikasi",
      description: "Penyediaan makanan bergizi dan higienis yang telah lulus uji kelayakan oleh Dinas Kesehatan untuk memenuhi kebutuhan nutrisi harian siswa.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-orange-500"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      )
    }
  ];

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-600/20 rounded-full blur-[90px] -z-10 pointer-events-none" />
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
          Layanan Sekolah
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Berbagai fasilitas dan program dukungan untuk memastikan pengalaman belajar yang holistik, aman, dan menyenangkan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass p-8 rounded-3xl border border-purple-500/20 shadow-[0_8px_30px_rgba(168,85,247,0.1)] hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)] group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
            <p className="text-foreground/70 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

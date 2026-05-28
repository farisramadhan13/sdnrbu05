import Link from "next/link";
import { articles } from "../lib/data";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col items-center text-center relative overflow-hidden">
        {/* Background Decorative Glow (Purple & Cyan) */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/4 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-cyan-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-700 dark:text-purple-300 font-medium text-sm mb-8 animate-fade-in shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-500">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
            <path d="M5 3v4"></path>
            <path d="M19 17v4"></path>
            <path d="M3 5h4"></path>
            <path d="M17 19h4"></path>
          </svg>
          <span>Penerimaan Peserta Didik Baru Telah Dibuka</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 dark:from-purple-300 dark:via-pink-400 dark:to-cyan-400 pb-2">
            Selamat Datang di
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900 dark:from-purple-200 dark:to-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            SDN RBU 05
          </span>
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl max-w-3xl text-foreground/80 mb-10 leading-relaxed">
          Membangun generasi cerdas, berkarakter, dan siap menghadapi tantangan masa depan melalui pendidikan yang berkualitas dan inovatif.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/cek-kelulusan"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-[0_0_20px_rgba(219,39,119,0.4)] flex items-center gap-2 group hover:scale-105"
          >
            Cek Kelulusan Siswa
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
          <Link
            href="https://spmb.jakarta.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full glass text-foreground font-bold text-lg transition-all hover:bg-cyan-500/10 hover:border-cyan-500/50 flex items-center gap-2 hover:scale-105"
          >
            Info Pendaftaran
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500 dark:from-purple-400 dark:to-cyan-400">
            Keunggulan Kami
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Fasilitas dan program unggulan untuk mendukung perkembangan potensi setiap peserta didik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] cursor-default group border border-purple-500/20">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-cyan-600 dark:text-cyan-400">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Kurikulum Unggul</h3>
            <p className="text-foreground/70 leading-relaxed">
              Penerapan kurikulum merdeka yang adaptif dan inovatif untuk memaksimalkan bakat siswa.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] cursor-default group border border-pink-500/20 relative mt-0 md:-mt-8">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-transparent rounded-2xl -z-10" />
            <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-pink-600 dark:text-pink-400">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Tenaga Pendidik</h3>
            <p className="text-foreground/70 leading-relaxed">
              Guru-guru profesional, bersertifikasi, dan berdedikasi tinggi dalam mendidik.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] cursor-default group border border-purple-500/20">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600 dark:text-purple-400">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Prestasi Sekolah</h3>
            <p className="text-foreground/70 leading-relaxed">
              Berbagai penghargaan akademik dan non-akademik di tingkat kota maupun nasional.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-400">
              Artikel Terbaru
            </h2>
            <p className="text-foreground/70">Kabar dan informasi terkini seputar kegiatan sekolah.</p>
          </div>
          <Link href="/artikel" className="hidden sm:flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium hover:text-pink-500 transition-colors">
            Lihat Semua 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link 
              key={article.id} 
              href={`/artikel/${article.slug}`}
              className={`glass rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)] flex flex-col ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            >
              {/* Image Placeholder */}
              <div className={`w-full relative overflow-hidden ${index === 0 ? "h-64" : "h-48"}`}>
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-2">{article.date}</span>
                <h3 className={`font-bold text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2 ${index === 0 ? "text-2xl" : "text-lg"}`}>
                  {article.title}
                </h3>
                <p className="text-foreground/70 text-sm line-clamp-2 mt-auto">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Link href="/artikel" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 font-medium hover:bg-purple-500/10 transition-colors">
            Lihat Semua Artikel
          </Link>
        </div>
      </section>
    </div>
  );
}

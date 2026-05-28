export default function KontakPage() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
          Hubungi Kami
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Punya pertanyaan atau ingin tahu lebih lanjut tentang SDN RBU 05? Jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Info Cards */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl flex items-center gap-6 border border-purple-500/20 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-cyan-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Alamat</h3>
              <p className="text-foreground/70 text-sm">Jl. Rawa Badak Utara No. 05, Koja, Jakarta Utara, DKI Jakarta 14230</p>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl flex items-center gap-6 border border-purple-500/20 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-pink-500"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Email</h3>
              <p className="text-foreground/70 text-sm">info@sdnrbu05.sch.id</p>
            </div>
          </div>
          
          <div className="glass p-6 rounded-2xl flex items-center gap-6 border border-purple-500/20 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Telepon</h3>
              <p className="text-foreground/70 text-sm">(021) 1234-5678</p>
            </div>
          </div>

          {/* Dummy Map Placeholder */}
          <div className="w-full h-64 rounded-2xl bg-purple-900/10 border border-purple-500/20 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-purple-500/50 mb-3"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
            <span className="text-foreground/50 font-medium">Peta Interaktif (Placeholder)</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-8 md:p-10 rounded-3xl border border-purple-500/20 shadow-[0_8px_30px_rgba(168,85,247,0.1)] relative">
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-[60px] -z-10" />
          <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">Nama Lengkap</label>
              <input type="text" id="name" className="w-full bg-white/5 dark:bg-[#1a0f2e]/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-foreground" placeholder="Masukkan nama Anda" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">Alamat Email</label>
              <input type="email" id="email" className="w-full bg-white/5 dark:bg-[#1a0f2e]/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-foreground" placeholder="nama@email.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground/80">Subjek</label>
              <input type="text" id="subject" className="w-full bg-white/5 dark:bg-[#1a0f2e]/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-foreground" placeholder="Hal yang ingin ditanyakan" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">Pesan</label>
              <textarea id="message" rows={4} className="w-full bg-white/5 dark:bg-[#1a0f2e]/50 border border-purple-500/30 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-foreground resize-none" placeholder="Tuliskan pesan Anda di sini..."></textarea>
            </div>
            <button type="button" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl px-6 py-4 transition-all shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] transform hover:-translate-y-1">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

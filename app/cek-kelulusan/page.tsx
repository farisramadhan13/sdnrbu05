"use client";

import { useState } from "react";
import Link from "next/link";

export default function CekKelulusanPage() {
  const [nisn, setNisn] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Dummy data
  const dummyStudent = {
    nisn: "123456789",
    nama: "Budi Santoso",
    tanggalLahir: "15 Agustus 2014",
    guruKelas: "Ibu Siti Aminah, S.Pd",
    status: "LULUS"
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nisn.trim()) return;

    setLoading(true);
    setSearched(false);
    setResult(null);

    // Simulate network delay
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
      if (nisn === dummyStudent.nisn) {
        setResult(dummyStudent);
      } else {
        setResult(null);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-2xl mx-auto relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-pink-500 font-medium mb-6 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6"/></svg>
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
            Cek Kelulusan Siswa
          </h1>
          <p className="text-lg text-foreground/70">
            Masukkan Nomor Induk Siswa Nasional (NISN) untuk melihat hasil kelulusan.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="glass p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgba(168,85,247,0.1)] border border-purple-500/20 mb-8 flex flex-col sm:flex-row gap-4 relative z-10">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-foreground/50"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <input
              type="text"
              value={nisn}
              onChange={(e) => setNisn(e.target.value)}
              placeholder="Silahkan input NISN murid"
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 dark:bg-[#1a0f2e]/50 border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 text-foreground text-lg transition-all"
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold text-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] disabled:opacity-70 flex items-center justify-center min-w-[140px]"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Cari Data"
            )}
          </button>
        </form>

        {/* Result Area */}
        {searched && (
          <div className="animate-fade-in">
            {result ? (
              <div className="glass p-8 md:p-10 rounded-3xl border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] -z-10" />
                
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  </div>
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
                    SELAMAT ANDA LULUS!
                  </h2>
                </div>

                <div className="bg-white/5 dark:bg-black/20 rounded-2xl p-6 border border-white/10 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Nama Lengkap</p>
                      <p className="font-bold text-lg text-foreground">{result.nama}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">NISN</p>
                      <p className="font-bold text-lg text-foreground">{result.nisn}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Tanggal Lahir</p>
                      <p className="font-bold text-lg text-foreground">{result.tanggalLahir}</p>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Guru Kelas</p>
                      <p className="font-bold text-lg text-foreground">{result.guruKelas}</p>
                    </div>
                  </div>
                </div>

                <button 
                  disabled
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-foreground/50 font-medium cursor-not-allowed transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download Surat Kelulusan (Belum Tersedia)
                </button>
              </div>
            ) : (
              <div className="glass p-8 rounded-3xl border border-red-500/30 text-center shadow-[0_0_30px_rgba(239,68,68,0.1)]">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-red-500"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                </div>
                <h3 className="text-xl font-bold text-red-500 mb-2">Data Tidak Ditemukan</h3>
                <p className="text-foreground/70">
                  NISN <span className="font-semibold text-foreground">{nisn}</span> tidak terdaftar atau format salah. Silakan periksa kembali nomor induk Anda.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

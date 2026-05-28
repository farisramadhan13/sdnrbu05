import Link from "next/link";
import { articles } from "../../lib/data";

export default function ArtikelPage() {
  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          Artikel & Berita
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Kumpulan berita, informasi, dan pengumuman terbaru seputar kegiatan di SDN Rawa Badak Utara 05.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link 
            key={article.id} 
            href={`/artikel/${article.slug}`}
            className="glass rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)] flex flex-col border border-purple-500/20"
          >
            {/* Image */}
            <div className="w-full h-56 relative overflow-hidden">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold mb-4 w-max">
                {article.date}
              </span>
              <h3 className="font-bold text-xl text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-3">
                {article.title}
              </h3>
              <p className="text-foreground/70 text-sm line-clamp-3 mt-auto leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-semibold text-pink-500 group-hover:text-pink-600 dark:group-hover:text-pink-400">
                Baca selengkapnya
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

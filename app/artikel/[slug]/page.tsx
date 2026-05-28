import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "../../../lib/data";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-pink-500 font-medium mb-8 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="m15 18-6-6 6-6"/></svg>
        Kembali ke Beranda
      </Link>
      
      <article className="glass p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgba(168,85,247,0.1)] border border-purple-500/20">
        <header className="mb-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-sm font-semibold mb-4">
            {article.date}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 dark:from-purple-300 dark:to-pink-400 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </header>
        
        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 rounded-2xl bg-purple-900/40 mb-10 relative overflow-hidden">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/60 to-transparent opacity-40"></div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert prose-purple max-w-none text-foreground/80 leading-relaxed">
          <p className="text-xl font-medium text-foreground/90 mb-6 border-l-4 border-cyan-500 pl-4">
            {article.excerpt}
          </p>
          <p>
            {article.content}
          </p>
        </div>
      </article>
    </div>
  );
}

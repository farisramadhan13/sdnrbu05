export default function GaleriPage() {
  const images = [
    { src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Kegiatan Belajar" },
    { src: "https://images.pexels.com/photos/3401402/pexels-photo-3401402.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Upacara Bendera" },
    { src: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Gedung Sekolah" },
    { src: "https://images.pexels.com/photos/8923040/pexels-photo-8923040.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Kegiatan Olahraga" },
    { src: "https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Perpustakaan" },
    { src: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=800", alt: "Urban Farming" }
  ];

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
          Galeri Kegiatan
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Momen-momen berharga dan dokumentasi kegiatan belajar mengajar di SDN Rawa Badak Utara 05.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden glass border border-purple-500/20 shadow-md">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {img.alt}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

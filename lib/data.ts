export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Asesmen Sumatif Kelas Akhir (ASKA)",
    slug: "asesmen-sumatif-kelas-akhir",
    date: "15 Mei 2026",
    excerpt: "Persiapan matang seluruh siswa kelas 6 dalam menghadapi Asesmen Sumatif Kelas Akhir tahun ajaran ini.",
    content: "Pelaksanaan Asesmen Sumatif Kelas Akhir (ASKA) di SDN RBU 05 berjalan dengan tertib dan lancar. Seluruh siswa kelas 6 telah mengikuti bimbingan intensif selama tiga bulan terakhir untuk mempersiapkan diri secara optimal. Pihak sekolah berharap nilai ASKA tahun ini dapat meningkat dari tahun sebelumnya, sehingga para lulusan bisa melanjutkan pendidikan ke SMP negeri favorit mereka.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "2",
    title: "Gerakan Bersih dan Bebas Sampah",
    slug: "gerakan-bersih-dan-bebas-sampah",
    date: "12 Mei 2026",
    excerpt: "Kolaborasi guru dan siswa dalam menjaga kebersihan lingkungan sekolah secara berkelanjutan.",
    content: "Untuk mewujudkan lingkungan belajar yang nyaman dan sehat, SDN RBU 05 mencanangkan Gerakan Bersih dan Bebas Sampah. Kegiatan ini rutin dilakukan setiap hari Jumat pagi, melibatkan seluruh ekosistem sekolah mulai dari kepala sekolah, guru, komite sekolah, hingga seluruh peserta didik. Tidak hanya membersihkan area sekolah, siswa juga diedukasi tentang cara memilah sampah organik dan anorganik serta mendaur ulang sampah plastik menjadi barang bernilai guna.",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "3",
    title: "Gerakan Kantin Sehat",
    slug: "gerakan-kantin-sehat",
    date: "08 Mei 2026",
    excerpt: "Memastikan jajanan bergizi dan higienis untuk seluruh siswa melalui sertifikasi kantin sehat.",
    content: "Kesehatan siswa adalah prioritas kami. Oleh karena itu, SDN RBU 05 bekerja sama dengan Puskesmas setempat telah meresmikan Gerakan Kantin Sehat. Semua pedagang di kantin wajib mengikuti standar kebersihan pangan, tidak menjual makanan berbahan pengawet atau pewarna berbahaya, serta memperbanyak pilihan sayur dan buah. Dengan asupan nutrisi yang baik, diharapkan konsentrasi belajar siswa semakin meningkat.",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "4",
    title: "Persiapan menuju OSN",
    slug: "persiapan-menuju-osn",
    date: "05 Mei 2026",
    excerpt: "Pembinaan khusus bagi perwakilan sekolah yang akan berlaga di Olimpiade Sains Nasional tingkat kota.",
    content: "Tiga siswa berprestasi dari SDN RBU 05 tengah menjalani pemusatan latihan intensif sebagai persiapan menghadapi Olimpiade Sains Nasional (OSN) Tingkat Kota 2026. Pembinaan dipandu langsung oleh guru bidang studi Matematika dan IPA berpengalaman. Selain materi akademik, para siswa juga dibekali dengan latihan mental agar tidak gugup saat kompetisi berlangsung. Mari doakan agar tim perwakilan sekolah kita bisa meraih medali emas.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "5",
    title: "Kegiatan Urban Farming",
    slug: "kegiatan-urban-farming",
    date: "01 Mei 2026",
    excerpt: "Siswa belajar bercocok tanam sayuran hidroponik di area terbatas lingkungan sekolah.",
    content: "Sebagai bagian dari kurikulum merdeka dan pembentukan karakter peduli lingkungan (P5), siswa kelas 5 dan 6 SDN RBU 05 sukses panen sayuran dari program Urban Farming. Menggunakan teknik hidroponik sederhana dan polibag di atap sekolah, siswa menanam pakcoy, kangkung, dan bayam. Sayuran hasil panen kemudian dijual secara internal kepada para guru dan orang tua, melatih jiwa kewirausahaan sejak dini.",
    imageUrl: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

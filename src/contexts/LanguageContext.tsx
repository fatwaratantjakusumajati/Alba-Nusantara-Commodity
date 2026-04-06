import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Language, string>> = {
  // Nav
  "nav.home": { id: "Beranda", en: "Home" },
  "nav.about": { id: "Tentang Kami", en: "About Us" },
  "nav.products": { id: "Produk", en: "Products" },
  "nav.contact": { id: "Kontak", en: "Contact" },

  // Hero
  "hero.badge": { id: "Produk Alam Premium dari Indonesia", en: "Premium Natural Products from Indonesia" },
  "hero.title1": { id: "Kekayaan Alam", en: "Natural Wealth of" },
  "hero.title2": { id: "Nusantara", en: "Nusantara" },
  "hero.desc": {
    id: "Menghadirkan produk alam premium — Essential Oil, Bird Nest, Cocoa Beans, dan Clove — dengan kualitas terbaik dari bumi Indonesia.",
    en: "Delivering premium natural products — Essential Oil, Bird Nest, Cocoa Beans, and Clove — with the finest quality from Indonesia.",
  },
  "hero.cta": { id: "Lihat Produk", en: "View Products" },

  // About
  "about.label": { id: "Tentang Kami", en: "About Us" },
  "about.title": { id: "Produk Alam Premium dari Indonesia", en: "Premium Natural Products from Indonesia" },
  "about.experience": { id: "Tahun Pengalaman", en: "Years of Experience" },
  "about.p1": {
    id: "ALBA NUSANTARA COMMODITY (ALNC) adalah perusahaan sourcing dan perdagangan komoditas Indonesia yang berkomitmen menghadirkan produk pertanian dan alam premium dari jantung Nusantara ke pasar domestik dan global. Dibangun di atas kemitraan lokal yang kuat dan rasa hormat mendalam terhadap sumber daya alam Indonesia, ALNC berperan sebagai jembatan antara produsen terpercaya dan pembeli yang mencari kualitas konsisten, transparansi, dan keandalan.",
    en: "ALBA NUSANTARA COMMODITY (ALNC) is an Indonesian commodity sourcing and trading company committed to delivering premium agricultural and natural products from the heart of the archipelago to domestic and global markets. Built on strong local partnerships and deep respect for Indonesia's natural resources, ALNC serves as a bridge between trusted producers and buyers seeking consistent quality, transparency, and reliability.",
  },
  "about.p2": {
    id: "Di ALNC, kami percaya bahwa komoditas lebih dari sekadar produk — mereka adalah hasil dari kerja sama antara manusia, tanah, dan warisan budaya. Peran kami adalah memastikan nilai-nilai ini tetap terjaga sambil memenuhi standar pasar modern dan permintaan global.",
    en: "At ALNC, we believe commodities are more than products — they are the result of people, land, and heritage working together. Our role is to ensure these values are preserved while meeting modern market standards and global demand.",
  },
  "about.stat.employees": { id: "Karyawan", en: "Employees" },
  "about.stat.countries": { id: "Negara Ekspor", en: "Export Countries" },
  "about.stat.partners": { id: "Mitra", en: "Partners" },

  // Vision & Mission
  "vm.label": { id: "Visi & Misi", en: "Vision & Mission" },
  "vm.title": { id: "Visi & Misi Kami", en: "Our Vision & Mission" },
  "vm.subtitle": { id: "Fondasi yang memandu setiap langkah kami menuju keunggulan", en: "The foundation that guides every step towards excellence" },
  "vm.vision.title": { id: "Visi", en: "Vision" },
  "vm.vision.desc": {
    id: "Menjadi perusahaan terdepan di Asia Tenggara dalam pengolahan dan distribusi produk alam premium yang diakui secara global atas kualitas, keberlanjutan, dan kontribusi positif bagi masyarakat dan lingkungan.",
    en: "To become the leading company in Southeast Asia in processing and distributing premium natural products, globally recognized for quality, sustainability, and positive contributions to communities and the environment.",
  },
  "vm.mission.title": { id: "Misi", en: "Mission" },
  "vm.mission.1": {
    id: "Menghasilkan produk alam berkualitas premium dengan standar ekspor internasional",
    en: "Produce premium quality natural products with international export standards",
  },
  "vm.mission.2": {
    id: "Memberdayakan petani lokal melalui kemitraan yang adil dan berkelanjutan",
    en: "Empower local farmers through fair and sustainable partnerships",
  },
  "vm.mission.3": {
    id: "Menerapkan teknologi pengolahan ramah lingkungan yang menjaga kelestarian alam",
    en: "Implement environmentally friendly processing technology that preserves nature",
  },
  "vm.mission.4": {
    id: "Memperluas jaringan distribusi global untuk produk unggulan Indonesia",
    en: "Expand global distribution network for Indonesia's flagship products",
  },
  "vm.mission.5": {
    id: "Berkontribusi pada peningkatan ekonomi masyarakat pedesaan Indonesia",
    en: "Contribute to improving the economy of rural Indonesian communities",
  },

  // Core Values
  "cv.label": { id: "Nilai Inti", en: "Core Values" },
  "cv.title": { id: "Nilai Inti Kami", en: "Our Core Values" },
  "cv.subtitle": { id: "Prinsip fundamental yang menjadi landasan budaya perusahaan", en: "Fundamental principles that form the foundation of our company culture" },
  "cv.sustainability": { id: "Keberlanjutan", en: "Sustainability" },
  "cv.sustainability.desc": { id: "Berkomitmen pada praktik bisnis yang ramah lingkungan dan menjaga kelestarian alam Indonesia", en: "Committed to environmentally friendly business practices and preserving Indonesia's natural heritage" },
  "cv.quality": { id: "Kualitas Premium", en: "Premium Quality" },
  "cv.quality.desc": { id: "Mengutamakan standar kualitas tertinggi di setiap tahap pengolahan produk alam", en: "Prioritizing the highest quality standards at every stage of natural product processing" },
  "cv.integrity": { id: "Integritas", en: "Integrity" },
  "cv.integrity.desc": { id: "Menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis dan kemitraan", en: "Upholding honesty and transparency in every aspect of business and partnerships" },
  "cv.innovation": { id: "Inovasi", en: "Innovation" },
  "cv.innovation.desc": { id: "Terus berinovasi dalam teknologi pengolahan untuk meningkatkan kualitas produk", en: "Continuously innovating in processing technology to improve product quality" },
  "cv.empowerment": { id: "Pemberdayaan", en: "Empowerment" },
  "cv.empowerment.desc": { id: "Memberdayakan petani lokal melalui kemitraan adil dan pelatihan berkelanjutan", en: "Empowering local farmers through fair partnerships and ongoing training" },
  "cv.dedication": { id: "Dedikasi", en: "Dedication" },
  "cv.dedication.desc": { id: "Memberikan pelayanan terbaik dengan penuh dedikasi dan tanggung jawab sosial", en: "Delivering the best service with full dedication and social responsibility" },

  // Why Choose Us
  "wcu.label": { id: "Mengapa Kami", en: "Why Choose Us" },
  "wcu.title": { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },
  "wcu.subtitle": { id: "Keunggulan yang menjadikan kami mitra terpercaya untuk produk alam Indonesia", en: "Advantages that make us a trusted partner for Indonesian natural products" },
  "wcu.natural": { id: "100% Alami", en: "100% Natural" },
  "wcu.natural.desc": { id: "Produk kami berasal dari sumber alam Indonesia tanpa bahan kimia berbahaya", en: "Our products come from Indonesian natural sources without harmful chemicals" },
  "wcu.certified": { id: "Bersertifikasi", en: "Certified" },
  "wcu.certified.desc": { id: "Tersertifikasi ISO 22000, HACCP, dan Organic untuk jaminan kualitas internasional", en: "Certified ISO 22000, HACCP, and Organic for international quality assurance" },
  "wcu.ontime": { id: "Tepat Waktu", en: "On Time" },
  "wcu.ontime.desc": { id: "Komitmen pengiriman tepat waktu dengan sistem manajemen rantai pasok yang efisien", en: "Commitment to timely delivery with efficient supply chain management" },
  "wcu.service": { id: "Layanan Prima", en: "Excellent Service" },
  "wcu.service.desc": { id: "Tim support profesional siap membantu untuk konsultasi dan kebutuhan Anda", en: "Professional support team ready to assist with your consultation and needs" },
  "wcu.capacity": { id: "Kapasitas Besar", en: "Large Capacity" },
  "wcu.capacity.desc": { id: "Fasilitas pengolahan modern dengan kapasitas tinggi untuk memenuhi permintaan ekspor", en: "Modern processing facilities with high capacity to meet export demands" },
  "wcu.distribution": { id: "Distribusi Global", en: "Global Distribution" },
  "wcu.distribution.desc": { id: "Jaringan distribusi menjangkau 30+ negara di Asia, Eropa, dan Amerika", en: "Distribution network reaching 30+ countries in Asia, Europe, and Americas" },

  // Our Location
  "loc.label": { id: "Area Sumber", en: "Sourcing Areas" },
  "loc.title": { id: "Lokasi Kami", en: "Our Location" },
  "loc.subtitle": { id: "Kami memperoleh bahan baku berkualitas tinggi dari berbagai wilayah strategis di Indonesia", en: "We source high-quality raw materials from various strategic regions in Indonesia" },

  // Our Markets
  "mkt.label": { id: "Jangkauan Global", en: "Global Reach" },
  "mkt.title": { id: "Pasar Kami Saat Ini", en: "Our Current Markets" },
  "mkt.subtitle": { id: "Produk kami telah dipercaya dan diekspor ke berbagai negara di seluruh dunia", en: "Our products are trusted and exported to various countries around the world" },
  "mkt.countries": { id: "4+ Negara", en: "4+ Countries" },
  "mkt.growing": { id: "Kehadiran Global yang Berkembang", en: "Growing Global Presence" },

  // Products
  "prod.label": { id: "Produk", en: "Products" },
  "prod.title": { id: "Produk Unggulan Kami", en: "Our Featured Products" },
  "prod.subtitle": { id: "Produk alam premium Indonesia yang diproses dengan teknologi modern", en: "Premium Indonesian natural products processed with modern technology" },
  "prod.essential_oil.desc": {
    id: "Minyak atsiri murni berkualitas tinggi dari tanaman aromatik pilihan Indonesia untuk aromaterapi dan industri.",
    en: "High-quality pure essential oils from selected Indonesian aromatic plants for aromatherapy and industry.",
  },
  "prod.bird_nest.desc": {
    id: "Sarang burung walet premium yang dipanen dan diproses dengan standar higienis tertinggi untuk pasar ekspor.",
    en: "Premium bird's nest harvested and processed with the highest hygienic standards for export markets.",
  },
  "prod.cocoa_beans.desc": {
    id: "Biji kakao fermentasi berkualitas dari perkebunan Sulawesi dan Sumatera untuk industri cokelat dunia.",
    en: "Quality fermented cocoa beans from Sulawesi and Sumatra plantations for the world's chocolate industry.",
  },
  "prod.clove.desc": {
    id: "Cengkeh kering premium dari Maluku dan Sulawesi dengan kadar eugenol tinggi untuk berbagai kebutuhan industri.",
    en: "Premium dried cloves from Maluku and Sulawesi with high eugenol content for various industrial needs.",
  },
  "prod.view_detail": { id: "Lihat Detail & Proses Produksi →", en: "View Details & Production Process →" },

  // Footer
  "footer.desc": {
    id: "Perusahaan terkemuka dalam pengolahan dan ekspor produk alam premium Indonesia ke pasar global.",
    en: "A leading company in processing and exporting premium Indonesian natural products to global markets.",
  },
  "footer.quicklinks": { id: "Tautan Cepat", en: "Quick Links" },
  "footer.contact": { id: "Kontak", en: "Contact" },
  "footer.follow": { id: "Ikuti Kami", en: "Follow Us" },

  // Product Detail Page
  "detail.back": { id: "Kembali ke Beranda", en: "Back to Home" },
  "detail.about_product": { id: "Tentang Produk", en: "About Product" },
  "detail.description": { id: "Deskripsi Produk", en: "Product Description" },
  "detail.benefits": { id: "Keunggulan", en: "Benefits" },
  "detail.process_label": { id: "Proses Produksi", en: "Production Process" },
  "detail.process_title": { id: "Proses Produksi", en: "Production Process" },
  "detail.process_subtitle": { id: "Tahapan pengolahan terstandar untuk menghasilkan produk berkualitas premium", en: "Standardized processing stages to produce premium quality products" },
  "detail.stage": { id: "Tahap", en: "Stage" },
  "detail.interested": { id: "Tertarik dengan", en: "Interested in" },
  "detail.cta_desc": { id: "Hubungi kami untuk informasi harga, spesifikasi, dan minimum order quantity.", en: "Contact us for pricing, specifications, and minimum order quantity information." },
  "detail.contact_us": { id: "Hubungi Kami", en: "Contact Us" },
  "detail.other_products": { id: "Lihat Produk Lain", en: "View Other Products" },
  "detail.not_found": { id: "Produk Tidak Ditemukan", en: "Product Not Found" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("id");

  const toggleLang = () => setLang((l) => (l === "id" ? "en" : "id"));

  const t = (key: string): string => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

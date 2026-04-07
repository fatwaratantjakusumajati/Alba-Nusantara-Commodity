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
    id: "Menjadi mitra global terpercaya untuk komoditas Indonesia dengan menghubungkan sumber daya alam Nusantara ke dunia secara bertanggung jawab.",
    en: "To become a trusted global partner for Indonesian commodities by responsibly connecting Nusantara's natural resources with the world.",
  },
  "vm.mission.title": { id: "Misi", en: "Mission" },
  "vm.mission.1": {
    id: "Menyediakan dan mengirimkan komoditas Indonesia berkualitas tinggi yang memenuhi standar internasional",
    en: "To source and deliver high-quality Indonesian commodities that meet international standards",
  },
  "vm.mission.2": {
    id: "Membangun kemitraan yang transparan, andal, dan jangka panjang di seluruh rantai pasok",
    en: "To build transparent, reliable, and long-term partnerships across the supply chain",
  },
  "vm.mission.3": {
    id: "Memberdayakan produsen lokal melalui kolaborasi yang adil dan berkelanjutan",
    en: "To empower local producers through fair and sustainable collaboration",
  },
  "vm.mission.4": {
    id: "Memperkuat kehadiran dan reputasi global produk alam Indonesia",
    en: "To strengthen the global presence and reputation of Indonesian natural products",
  },

  // Core Values
  "cv.label": { id: "Nilai Inti", en: "Core Values" },
  "cv.title": { id: "Nilai Inti Kami", en: "Our Core Values" },
  "cv.subtitle": { id: "Prinsip fundamental yang menjadi landasan budaya perusahaan", en: "Fundamental principles that form the foundation of our company culture" },
  "cv.integrity": { id: "Integritas", en: "Integrity" },
  "cv.integrity.desc": { id: "Kami menjalankan bisnis dengan kejujuran, transparansi, dan akuntabilitas dalam setiap kemitraan dan transaksi.", en: "We conduct our business with honesty, transparency, and accountability in every partnership and transaction." },
  "cv.quality": { id: "Komitmen Kualitas", en: "Quality Commitment" },
  "cv.quality.desc": { id: "Kami menjunjung standar kualitas yang ketat untuk memastikan konsistensi, keamanan, dan keandalan dari pengadaan hingga pengiriman.", en: "We uphold strict quality standards to ensure consistency, safety, and reliability from sourcing to delivery." },
  "cv.partnership": { id: "Kemitraan", en: "Partnership" },
  "cv.partnership.desc": { id: "Kami percaya pada pertumbuhan bersama — membangun hubungan jangka panjang dengan petani, pengolah, pembeli, dan pemangku kepentingan.", en: "We believe in growing together — building long-term relationships with farmers, processors, buyers, and stakeholders." },
  "cv.client": { id: "Fokus pada Klien & Pembeli", en: "Client & Buyer Centricity" },
  "cv.client.desc": { id: "Kami menempatkan klien dan pembeli di pusat setiap keputusan. Kami mendengarkan kebutuhan, spesifikasi, dan tujuan pasar mereka dengan seksama, serta menyelaraskan pengadaan, pengolahan, dan pengiriman untuk memenuhi dan melampaui harapan.", en: "We place our clients and buyers at the heart of every decision. We listen carefully to their needs, specifications, and market objectives, and align our sourcing, processing, and delivery to meet and exceed expectations." },

  // Why Choose Us
  "wcu.label": { id: "Mengapa Kami", en: "Why Choose Us" },
  "wcu.title": { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },
  "wcu.subtitle": { id: "Keunggulan yang menjadikan kami mitra terpercaya untuk produk alam Indonesia", en: "Advantages that make us a trusted partner for Indonesian natural products" },
  "wcu.client": { id: "Pendekatan Berpusat pada Klien", en: "Client-Centric Approach" },
  "wcu.client.desc": { id: "Mengutamakan kebutuhan klien dengan mendengarkan terlebih dahulu — memahami spesifikasi, timeline, dan tujuan pasar sebelum memberikan solusi.", en: "Prioritizing client needs by listening first — understanding specifications, timelines, and market objectives before providing solutions." },
  "wcu.sourcing": { id: "Kemampuan Sourcing Lokal yang Kuat", en: "Strong Local Sourcing Capability" },
  "wcu.sourcing.desc": { id: "Hubungan erat dengan petani dan prosesor di seluruh Indonesia memastikan konsistensi, keterlacakan (traceability), dan fleksibilitas produk.", en: "Close relationships with farmers and processors across Indonesia ensure consistency, traceability, and product flexibility." },
  "wcu.quality": { id: "Standar Kualitas Internasional", en: "International Quality Standards" },
  "wcu.quality.desc": { id: "Setiap produk melewati quality control terstruktur dan memenuhi ekspektasi pembeli serta standar pasar global.", en: "Every product goes through structured quality control and meets buyer expectations and global market standards." },
  "wcu.transparent": { id: "Komunikasi yang Transparan", en: "Transparent Communication" },
  "wcu.transparent.desc": { id: "Komunikasi yang jelas dan terstruktur memberikan keandalan yang bisa diandalkan oleh pembeli.", en: "Clear and structured communication provides the reliability that buyers can count on." },
  "wcu.longterm": { id: "Pendekatan Kemitraan Jangka Panjang", en: "Long-Term Partnership Approach" },
  "wcu.longterm.desc": { id: "Melampaui transaksi biasa — bekerja bersama klien untuk mendukung pertumbuhan berkelanjutan, nilai bersama, dan kepercayaan mutual.", en: "Going beyond ordinary transactions — working alongside clients to support sustainable growth, shared values, and mutual trust." },
  "wcu.global": { id: "Menghubungkan Permintaan Global dengan Potensi Indonesia", en: "Connecting Global Demand with Indonesia's Potential" },
  "wcu.global.desc": { id: "Menjembatani kebutuhan pasar dunia dengan kekayaan sumber daya alam Indonesia secara optimal.", en: "Optimally bridging global market needs with Indonesia's abundant natural resources." },

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
    id: "Kami memasok sarang burung walet premium yang diperoleh dari mitra terpilih dengan pemanenan terkontrol dan pengolahan higienis.",
    en: "We supply premium-grade edible bird nest sourced from selected partners with controlled harvesting and hygienic processing.",
  },
  "prod.bird_nest.tagline": {
    id: "Sarang Burung Walet Premium dengan Standar Higienis Tertinggi",
    en: "Premium Edible Bird Nest with the Highest Hygienic Standards",
  },
  "prod.bird_nest.detail_desc": {
    id: "Kami memasok sarang burung walet kelas premium yang diperoleh dari mitra terpilih dengan pemanenan terkontrol dan pengolahan higienis. Produk dibersihkan, dinilai, dan dikemas dengan hati-hati untuk menjaga kemurnian, nilai gizi, dan tampilan.",
    en: "We supply premium-grade edible bird nest sourced from selected partners with controlled harvesting and hygienic processing. Products are carefully cleaned, graded, and packed to preserve purity, nutritional value, and appearance.",
  },
  "prod.bird_nest.benefit1": {
    id: "Grading premium dengan kemurnian tinggi",
    en: "Premium grading with high purity",
  },
  "prod.bird_nest.benefit2": {
    id: "Pengolahan higienis dan terkontrol",
    en: "Hygienic and controlled processing",
  },
  "prod.bird_nest.benefit3": {
    id: "Dokumentasi siap ekspor dan keterlacakan",
    en: "Export-ready documentation and traceability",
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

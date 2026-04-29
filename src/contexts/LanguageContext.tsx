import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

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
  "hero.badge": {
    id: "Produk Alam Premium dari Indonesia",
    en: "Premium Natural Products from Indonesia",
  },
  "hero.title1": { id: "Kekayaan Alam", en: "Natural Wealth of" },
  "hero.title2": { id: "Nusantara", en: "Nusantara" },
  "hero.desc": {
    id: "Menghadirkan produk alam premium, Essential Oil, Bird Nest, Cocoa Beans, dan Clove, dengan kualitas terbaik dari bumi Indonesia.",
    en: "Delivering premium natural products, Essential Oil, Bird Nest, Cocoa Beans, and Clove, with the finest quality from Indonesia.",
  },
  "hero.cta": { id: "Lihat Produk", en: "View Products" },

  // About
  "about.label": { id: "Tentang Kami", en: "About Us" },
  "about.title": {
    id: "Produk Alam Premium dari Indonesia",
    en: "Premium Natural Products from Indonesia",
  },
  "about.established": { id: "Didirikan Tahun 2020", en: "Founded in 2020" },
  "about.p1": {
    id: "Alba Nusantara Commodity (ALNC) adalah perusahaan sourcing dan perdagangan komoditas Indonesia yang berkomitmen menghadirkan produk pertanian dan alam premium dari jantung Nusantara ke pasar domestik dan global. Dibangun di atas kemitraan lokal yang kuat dan rasa hormat mendalam terhadap sumber daya alam Indonesia, ALNC berperan sebagai jembatan antara produsen terpercaya dan pembeli yang mencari kualitas konsisten, transparansi, dan keandalan.",
    en: "Alba Nusantara Commodity (ALNC) is an Indonesian commodity sourcing and trading company committed to delivering premium agricultural and natural products from the heart of the archipelago to domestic and global markets. Built on strong local partnerships and deep respect for Indonesia's natural resources, ALNC serves as a bridge between trusted producers and buyers seeking consistent quality, transparency, and reliability.",
  },
  "about.p2": {
    id: "Di ALNC, kami percaya bahwa komoditas lebih dari sekadar produk, mereka adalah hasil dari kerja sama antara manusia, tanah, dan warisan budaya. Peran kami adalah memastikan nilai-nilai ini tetap terjaga sambil memenuhi standar pasar modern dan permintaan global.",
    en: "At ALNC, we believe commodities are more than products, they are the result of people, land, and heritage working together. Our role is to ensure these values are preserved while meeting modern market standards and global demand.",
  },
  "about.stat.employees": { id: "Karyawan", en: "Employees" },
  "about.stat.countries": { id: "Negara Ekspor", en: "Export Countries" },
  "about.stat.partners": { id: "Mitra", en: "Partners" },

  // Vision & Mission
  "vm.label": { id: "Visi & Misi", en: "Vision & Mission" },
  "vm.title": { id: "Visi & Misi Kami", en: "Our Vision & Mission" },
  "vm.subtitle": {
    id: "Fondasi yang memandu setiap langkah kami menuju keunggulan",
    en: "The foundation that guides every step towards excellence",
  },
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
  "cv.subtitle": {
    id: "Prinsip fundamental yang menjadi landasan budaya perusahaan",
    en: "Fundamental principles that form the foundation of our company culture",
  },
  "cv.integrity": { id: "Integritas", en: "Integrity" },
  "cv.integrity.desc": {
    id: "Kami menjalankan bisnis dengan kejujuran, transparansi, dan akuntabilitas dalam setiap kemitraan dan transaksi.",
    en: "We conduct our business with honesty, transparency, and accountability in every partnership and transaction.",
  },
  "cv.quality": { id: "Komitmen Kualitas", en: "Quality Commitment" },
  "cv.quality.desc": {
    id: "Kami menjunjung standar kualitas yang ketat untuk memastikan konsistensi, keamanan, dan keandalan dari pengadaan hingga pengiriman.",
    en: "We uphold strict quality standards to ensure consistency, safety, and reliability from sourcing to delivery.",
  },
  "cv.partnership": { id: "Kemitraan", en: "Partnership" },
  "cv.partnership.desc": {
    id: "Kami percaya pada pertumbuhan bersama, membangun hubungan jangka panjang dengan petani, pengolah, pembeli, dan pemangku kepentingan.",
    en: "We believe in growing together, building long-term relationships with farmers, processors, buyers, and stakeholders.",
  },
  "cv.client": {
    id: "Fokus pada Klien & Pembeli",
    en: "Client & Buyer Centricity",
  },
  "cv.client.desc": {
    id: "Kami menempatkan klien dan pembeli di pusat setiap keputusan. Kami mendengarkan kebutuhan, spesifikasi, dan tujuan pasar mereka dengan seksama, serta menyelaraskan pengadaan, pengolahan, dan pengiriman untuk memenuhi dan melampaui harapan.",
    en: "We place our clients and buyers at the heart of every decision. We listen carefully to their needs, specifications, and market objectives, and align our sourcing, processing, and delivery to meet and exceed expectations.",
  },

  // Why Choose Us
  "wcu.label": { id: "Mengapa Kami", en: "Why Choose Us" },
  "wcu.title": { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },
  "wcu.subtitle": {
    id: "Keunggulan yang menjadikan kami mitra terpercaya untuk produk alam Indonesia",
    en: "Advantages that make us a trusted partner for Indonesian natural products",
  },
  "wcu.client": {
    id: "Pendekatan Berpusat pada Klien",
    en: "Client-Centric Approach",
  },
  "wcu.client.desc": {
    id: "Mengutamakan kebutuhan klien dengan mendengarkan terlebih dahulu, memahami spesifikasi, timeline, dan tujuan pasar sebelum memberikan solusi.",
    en: "Prioritizing client needs by listening first, understanding specifications, timelines, and market objectives before providing solutions.",
  },
  "wcu.sourcing": {
    id: "Kemampuan Sourcing Lokal yang Kuat",
    en: "Strong Local Sourcing Capability",
  },
  "wcu.sourcing.desc": {
    id: "Hubungan erat dengan petani dan prosesor di seluruh Indonesia memastikan konsistensi, keterlacakan (traceability), dan fleksibilitas produk.",
    en: "Close relationships with farmers and processors across Indonesia ensure consistency, traceability, and product flexibility.",
  },
  "wcu.quality": {
    id: "Standar Kualitas Internasional",
    en: "International Quality Standards",
  },
  "wcu.quality.desc": {
    id: "Setiap produk melewati quality control terstruktur dan memenuhi ekspektasi pembeli serta standar pasar global.",
    en: "Every product goes through structured quality control and meets buyer expectations and global market standards.",
  },
  "wcu.transparent": {
    id: "Komunikasi yang Transparan",
    en: "Transparent Communication",
  },
  "wcu.transparent.desc": {
    id: "Komunikasi yang jelas dan terstruktur memberikan keandalan yang bisa diandalkan oleh pembeli.",
    en: "Clear and structured communication provides the reliability that buyers can count on.",
  },
  "wcu.longterm": {
    id: "Pendekatan Kemitraan Jangka Panjang",
    en: "Long-Term Partnership Approach",
  },
  "wcu.longterm.desc": {
    id: "Melampaui transaksi biasa, bekerja bersama klien untuk mendukung pertumbuhan berkelanjutan, nilai bersama, dan kepercayaan mutual.",
    en: "Going beyond ordinary transactions, working alongside clients to support sustainable growth, shared values, and mutual trust.",
  },
  "wcu.global": {
    id: "Menghubungkan Permintaan Global dengan Potensi Indonesia",
    en: "Connecting Global Demand with Indonesia's Potential",
  },
  "wcu.global.desc": {
    id: "Menjembatani kebutuhan pasar dunia dengan kekayaan sumber daya alam Indonesia secara optimal.",
    en: "Optimally bridging global market needs with Indonesia's abundant natural resources.",
  },

  // Our Location
  "loc.label": { id: "Area Sumber", en: "Sourcing Areas" },
  "loc.title": { id: "Area Sumber Kami", en: "Our Sourcing Areas" },
  "loc.subtitle": {
    id: "Kami bermitra dengan produsen lokal terpercaya di berbagai wilayah strategis Indonesia untuk menghadirkan komoditas berkualitas terbaik",
    en: "We partner with trusted local producers across Indonesia's key regions to deliver the finest quality commodities",
  },

  // Our Markets
  "mkt.label": { id: "Jangkauan Global", en: "Global Reach" },
  "mkt.title": { id: "Pasar Kami Saat Ini", en: "Our Current Markets" },
  "mkt.subtitle": {
    id: "Produk kami telah dipercaya dan diekspor ke berbagai negara di seluruh dunia",
    en: "Our products are trusted and exported to various countries around the world",
  },
  "mkt.countries": { id: "4+ Negara", en: "4+ Countries" },
  "mkt.growing": {
    id: "Kehadiran Global yang Berkembang",
    en: "Growing Global Presence",
  },

  // Products
  "prod.label": { id: "Produk", en: "Products" },
  "prod.title": { id: "Produk Unggulan Kami", en: "Our Featured Products" },
  "prod.subtitle": {
    id: "Produk alam premium Indonesia yang diproses dengan teknologi modern",
    en: "Premium Indonesian natural products processed with modern technology",
  },
  "prod.essential_oil.tagline": {
    id: "Minyak Atsiri Indonesia Pilihan untuk Kebutuhan Industri dan Komersial",
    en: "Selected Indonesian Essential Oils for Industrial and Commercial Needs",
  },
  "prod.essential_oil.desc": {
    id: "Alba Nusantara Commodity menyediakan rangkaian minyak atsiri Indonesia pilihan yang berasal dari tanaman alami dan diproduksi melalui proses distilasi terkontrol.",
    en: "Alba Nusantara Commodity supplies a selected range of Indonesian essential oils derived from natural botanicals and produced through controlled distillation processes.",
  },
  "prod.essential_oil.detail_desc": {
    id: "Alba Nusantara Commodity menyediakan rangkaian minyak atsiri Indonesia pilihan yang berasal dari tanaman alami dan diproduksi melalui proses distilasi terkontrol. Minyak atsiri kami ditangani dengan fokus pada kemurnian, konsistensi, dan kesesuaian dengan spesifikasi industri dan komersial. Kami saat ini menyuplai minyak atsiri berikut: Citronella Oil (Sereh) yang umum digunakan untuk wewangian, pengusir serangga, dan aplikasi industri. Patchouli Oil (Nilam) yang merupakan bahan utama dalam industri parfum dengan aroma earthy yang khas. Cajuput Oil (Kayu Putih) yang banyak digunakan untuk produk farmasi, perawatan pribadi, dan kesehatan. Crude Eugenol (Daun/Tangkai Cengkeh) yang berasal dari daun dan tangkai cengkeh untuk pemrosesan lebih lanjut dalam aplikasi kimia, farmasi, dan industri.",
    en: "Alba Nusantara Commodity supplies a selected range of Indonesian essential oils derived from natural botanicals and produced through controlled distillation processes. Our essential oils are handled with a focus on purity, consistency, and alignment with industrial and commercial specifications. We currently supply the following essential oils: Citronella Oil (Sereh) commonly used for fragrance, insect repellent, and industrial applications, known for its fresh citrus aroma. Patchouli Oil (Nilam), a key ingredient in the fragrance industry, known for its deep, earthy scent and strong fixative properties. Cajuput Oil (Kayu Putih) widely used for pharmaceutical, personal care, and wellness products, valued for its distinctive aroma and functional properties. Crude Eugenol (Clove Leaf/Stem) derived from clove leaves and stems, primarily used for further processing in chemical, pharmaceutical, and industrial applications.",
  },
  "prod.essential_oil.benefit1": {
    id: "Citronella Oil (Sereh) untuk wewangian, pengusir serangga, dan aplikasi industri",
    en: "Citronella Oil (Sereh) for fragrance, insect repellent, and industrial applications",
  },
  "prod.essential_oil.benefit2": {
    id: "Patchouli Oil (Nilam) bahan utama industri parfum dengan aroma earthy yang khas",
    en: "Patchouli Oil (Nilam), a key ingredient in the fragrance industry with deep earthy scent",
  },
  "prod.essential_oil.benefit3": {
    id: "Cajuput Oil (Kayu Putih) untuk produk farmasi, perawatan pribadi, dan kesehatan",
    en: "Cajuput Oil (Kayu Putih) for pharmaceutical, personal care, and wellness products",
  },
  "prod.essential_oil.benefit4": {
    id: "Crude Eugenol (Daun/Tangkai Cengkeh) untuk pemrosesan kimia, farmasi, dan industri",
    en: "Crude Eugenol (Clove Leaf/Stem) for chemical, pharmaceutical, and industrial processing",
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
  "prod.cocoa.tagline": {
    id: "Biji Kakao Non-Fermentasi Berkualitas dari Indonesia",
    en: "Quality Non-Fermented Cocoa Beans from Indonesia",
  },
  "prod.cocoa_beans.desc": {
    id: "Kami menyuplai biji kakao non-fermentasi yang bersumber dari area pertanian pilihan di Indonesia dengan penanganan pasca-panen yang cermat.",
    en: "We supply non-fermented cocoa beans sourced from selected farming areas in Indonesia with careful post-harvest handling.",
  },
  "prod.cocoa.detail_desc": {
    id: "Kami menyuplai biji kakao non-fermentasi yang bersumber dari area pertanian pilihan di Indonesia. Biji kakao kami ditangani dengan praktik pasca-panen yang cermat, termasuk pengeringan dan sortasi yang tepat, untuk memastikan kualitas yang stabil, kebersihan, dan kesesuaian untuk berbagai kebutuhan pemrosesan industri.",
    en: "We supply non-fermented cocoa beans sourced from selected farming areas in Indonesia. Our cocoa beans are handled with careful post-harvest practices, including proper drying and sorting, to ensure stable quality, cleanliness, and suitability for various industrial processing requirements.",
  },
  "prod.cocoa.benefit1": {
    id: "Biji kakao non-fermentasi",
    en: "Non-fermented cocoa beans",
  },
  "prod.cocoa.benefit2": {
    id: "Dikeringkan dan disortir dengan baik",
    en: "Properly dried and well-sorted",
  },
  "prod.cocoa.benefit3": {
    id: "Kualitas dan pasokan yang konsisten",
    en: "Consistent quality and supply",
  },
  "prod.cocoa.benefit4": {
    id: "Cocok untuk aplikasi industri dan pemrosesan lanjutan",
    en: "Suitable for industrial and further processing applications",
  },
  "prod.clove.desc": {
    id: "Cengkeh kami bersumber dari daerah penghasil utama Indonesia, terutama untuk industri rajangan dan rokok kretek.",
    en: "Our cloves are sourced from Indonesia's major producing regions, primarily supplied for clove cutting (rajangan) and cigarette industries.",
  },
  "prod.clove.tagline": {
    id: "Cengkeh Premium untuk Industri Rajangan dan Rokok Kretek",
    en: "Premium Cloves for Rajangan and Kretek Cigarette Industries",
  },
  "prod.clove.detail_desc": {
    id: "Cengkeh kami bersumber dari daerah penghasil utama Indonesia dan terutama dipasok untuk industri rajangan (clove cutting) dan rokok. Dikenal dengan aroma yang kuat dan kualitas yang konsisten, cengkeh kami dipilih dan ditangani untuk memenuhi persyaratan khusus industri kretek dan aplikasi manufaktur terkait.",
    en: "Our cloves are sourced from Indonesia's major producing regions and are primarily supplied for clove cutting (rajangan) and cigarette industries. Known for their strong aroma and consistent quality, our cloves are selected and handled to meet the specific requirements of kretek and related manufacturing applications.",
  },
  "prod.clove.benefit1": {
    id: "Aroma kuat dan kematangan cengkeh yang konsisten",
    en: "Strong aroma and consistent clove maturity",
  },
  "prod.clove.benefit2": {
    id: "Cocok untuk rajangan dan produksi rokok",
    en: "Suitable for rajangan and cigarette production",
  },
  "prod.clove.benefit3": {
    id: "Kontrol ketat terhadap kadar air dan kualitas",
    en: "Strict moisture and quality control",
  },
  "prod.clove.benefit4": {
    id: "Volume fleksibel untuk permintaan domestik dan ekspor",
    en: "Flexible volumes for domestic and export demand",
  },
  "prod.essential_oil.name": { id: "Minyak Atsiri", en: "Essential Oil" },
  "prod.essential_oil.step1.title": { id: "Pemilihan Bahan Baku", en: "Raw Material Selection" },
  "prod.essential_oil.step1.desc": { id: "Tanaman aromatik dipilih dari petani mitra di berbagai daerah Indonesia. Hanya tanaman dengan kualitas terbaik dan waktu panen optimal yang digunakan.", en: "Aromatic plants are selected from partner farmers across Indonesia. Only the highest quality plants harvested at the optimal time are used." },
  "prod.essential_oil.step2.title": { id: "Pengeringan & Persiapan", en: "Drying & Preparation" },
  "prod.essential_oil.step2.desc": { id: "Bahan baku dikeringkan dengan metode alami atau controlled drying untuk mencapai kadar air ideal sebelum proses distilasi.", en: "Raw materials are dried using natural or controlled drying methods to reach the ideal moisture content before distillation." },
  "prod.essential_oil.step3.title": { id: "Distilasi Uap", en: "Steam Distillation" },
  "prod.essential_oil.step3.desc": { id: "Proses steam distillation dilakukan dengan suhu dan tekanan terkontrol selama 4-8 jam untuk menghasilkan minyak atsiri berkualitas tinggi.", en: "The steam distillation process is carried out under controlled temperature and pressure for 4-8 hours to produce high-quality essential oils." },
  "prod.essential_oil.step4.title": { id: "Filtrasi & Pemurnian", en: "Filtration & Purification" },
  "prod.essential_oil.step4.desc": { id: "Minyak hasil distilasi difiltrasi untuk menghilangkan partikel dan impuritas, menghasilkan essential oil yang jernih dan murni.", en: "Distilled oil is filtered to remove particles and impurities, resulting in clear and pure essential oil." },
  "prod.essential_oil.step5.title": { id: "Quality Control & Testing", en: "Quality Control & Testing" },
  "prod.essential_oil.step5.desc": { id: "Setiap batch diuji di laboratorium untuk parameter GC-MS, specific gravity, refractive index, dan optical rotation sesuai standar ISO.", en: "Each batch is tested in the laboratory for GC-MS, specific gravity, refractive index, and optical rotation parameters according to ISO standards." },
  "prod.essential_oil.step6.title": { id: "Packaging & Distribusi", en: "Packaging & Distribution" },
  "prod.essential_oil.step6.desc": { id: "Essential oil dikemas dalam drum aluminium food-grade dan dikirim ke klien di seluruh dunia dengan dokumentasi lengkap.", en: "Essential oil is packed in food-grade aluminum drums and delivered to clients worldwide with complete documentation." },

  "prod.bird_nest.name": { id: "Sarang Burung Walet", en: "Bird Nest" },
  "prod.bird_nest.step1.title": { id: "Pemanenan dari Rumah Walet", en: "Harvesting from Swiftlet Houses" },
  "prod.bird_nest.step1.desc": { id: "Sarang walet dipanen secara hati-hati dari rumah walet terkelola pada waktu optimal, memastikan populasi walet tetap terjaga.", en: "Bird nests are carefully harvested from managed swiftlet houses at the optimal time, ensuring the swiftlet population is maintained." },
  "prod.bird_nest.step2.title": { id: "Sortasi & Grading Awal", en: "Initial Sorting & Grading" },
  "prod.bird_nest.step2.desc": { id: "Sarang mentah disortir berdasarkan bentuk, ukuran, warna, dan tingkat kebersihan untuk menentukan grade produk akhir.", en: "Raw nests are sorted based on shape, size, color, and cleanliness level to determine the final product grade." },
  "prod.bird_nest.step3.title": { id: "Perendaman & Pembersihan", en: "Soaking & Cleaning" },
  "prod.bird_nest.step3.desc": { id: "Sarang direndam dalam air bersih dan dibersihkan secara manual menggunakan pinset untuk menghilangkan bulu dan kotoran tanpa bahan kimia.", en: "Nests are soaked in clean water and manually cleaned using tweezers to remove feathers and impurities without chemicals." },
  "prod.bird_nest.step4.title": { id: "Quality Inspection", en: "Quality Inspection" },
  "prod.bird_nest.step4.desc": { id: "Setiap sarang diperiksa secara individual di bawah lampu khusus untuk memastikan kebersihan dan keutuhan bentuk sarang.", en: "Each nest is individually inspected under special lighting to ensure cleanliness and the integrity of the nest's shape." },
  "prod.bird_nest.step5.title": { id: "Pengeringan & Pembentukan", en: "Drying & Shaping" },
  "prod.bird_nest.step5.desc": { id: "Sarang yang sudah bersih dikeringkan dengan suhu terkontrol dan dibentuk kembali agar tampilan rapi dan seragam.", en: "Cleaned nests are dried under controlled temperatures and reshaped to achieve a neat and uniform appearance." },
  "prod.bird_nest.step6.title": { id: "Packaging Premium", en: "Premium Packaging" },
  "prod.bird_nest.step6.desc": { id: "Sarang walet dikemas dalam box premium dengan vacuum seal untuk menjaga kualitas dan freshness selama pengiriman.", en: "Bird nests are packed in premium boxes with vacuum seals to maintain quality and freshness during shipment." },

  "prod.cocoa.name": { id: "Biji Kakao", en: "Cocoa Beans" },
  "prod.cocoa.step1.title": { id: "Panen Buah Kakao", en: "Cocoa Pod Harvesting" },
  "prod.cocoa.step1.desc": { id: "Buah kakao yang sudah matang optimal dipanen dari pohon secara selektif. Hanya buah dengan warna dan ukuran tepat yang dipilih.", en: "Optimally ripe cocoa pods are selectively harvested from the trees. Only pods with the right color and size are chosen." },
  "prod.cocoa.step2.title": { id: "Pemecahan & Ekstraksi Biji", en: "Pod Breaking & Bean Extraction" },
  "prod.cocoa.step2.desc": { id: "Buah kakao dipecah dan biji beserta pulpnya diekstraksi secara manual untuk persiapan proses fermentasi.", en: "Cocoa pods are broken and the beans along with their pulp are manually extracted in preparation for fermentation." },
  "prod.cocoa.step3.title": { id: "Fermentasi Terkontrol", en: "Controlled Fermentation" },
  "prod.cocoa.step3.desc": { id: "Biji kakao difermentasi selama 5-7 hari dalam kotak fermentasi kayu dengan pembalikan rutin untuk mengembangkan flavor cokelat.", en: "Cocoa beans are fermented for 5-7 days in wooden fermentation boxes with regular turning to develop the chocolate flavor." },
  "prod.cocoa.step4.title": { id: "Pengeringan Alami", en: "Natural Drying" },
  "prod.cocoa.step4.desc": { id: "Biji kakao hasil fermentasi dijemur di bawah sinar matahari selama 5-7 hari hingga kadar air mencapai 7% untuk penyimpanan optimal.", en: "Fermented cocoa beans are sun-dried for 5-7 days until the moisture content reaches 7% for optimal storage." },
  "prod.cocoa.step5.title": { id: "Sortasi & Grading", en: "Sorting & Grading" },
  "prod.cocoa.step5.desc": { id: "Biji kakao kering disortir berdasarkan ukuran, warna, dan kualitas. Biji cacat dan kulit ari dipisahkan untuk menjamin kualitas ekspor.", en: "Dried cocoa beans are sorted by size, color, and quality. Defective beans and shells are separated to guarantee export quality." },
  "prod.cocoa.step6.title": { id: "Penyimpanan & Ekspor", en: "Storage & Export" },
  "prod.cocoa.step6.desc": { id: "Biji kakao dikemas dalam karung goni 60kg, disimpan di gudang bersuhu terkontrol, dan dikirim via kontainer ke pelabuhan ekspor.", en: "Cocoa beans are packed in 60kg jute bags, stored in temperature-controlled warehouses, and shipped via containers to export ports." },

  "prod.clove.name": { id: "Cengkeh", en: "Clove" },
  "prod.clove.step1.title": { id: "Panen Cengkeh", en: "Clove Harvesting" },
  "prod.clove.step1.desc": { id: "Bunga cengkeh dipanen saat masih kuncup dan berwarna merah muda kecoklatan, tahap optimal untuk mendapatkan kadar eugenol tertinggi.", en: "Clove buds are harvested while still closed and brownish-pink, the optimal stage to obtain the highest eugenol content." },
  "prod.clove.step2.title": { id: "Sortasi Awal", en: "Initial Sorting" },
  "prod.clove.step2.desc": { id: "Cengkeh segar disortir untuk memisahkan tangkai, daun, dan bunga yang tidak memenuhi standar ukuran dan warna.", en: "Fresh cloves are sorted to separate stems, leaves, and buds that do not meet size and color standards." },
  "prod.clove.step3.title": { id: "Pengeringan", en: "Drying" },
  "prod.clove.step3.desc": { id: "Cengkeh dikeringkan dengan metode sun-drying selama 3-5 hari hingga kadar air mencapai 12-14%, menjaga aroma dan warna alami.", en: "Cloves are sun-dried for 3-5 days until the moisture content reaches 12-14%, preserving their natural aroma and color." },
  "prod.clove.step4.title": { id: "Pembersihan & Pemisahan", en: "Cleaning & Separation" },
  "prod.clove.step4.desc": { id: "Cengkeh kering dibersihkan dari debu dan benda asing menggunakan mesin winnowing dan ayakan untuk menghasilkan produk bersih.", en: "Dried cloves are cleaned of dust and foreign matter using winnowing machines and sieves to produce a clean product." },
  "prod.clove.step5.title": { id: "Quality Control", en: "Quality Control" },
  "prod.clove.step5.desc": { id: "Pengujian laboratorium meliputi kadar eugenol, moisture content, volatile oil, dan uji mikrobiologi sesuai standar ASTA.", en: "Laboratory testing includes eugenol content, moisture content, volatile oil, and microbiological tests according to ASTA standards." },
  "prod.clove.step6.title": { id: "Packaging & Pengiriman", en: "Packaging & Shipping" },
  "prod.clove.step6.desc": { id: "Cengkeh dikemas dalam karung jute berlapis PE liner, disimpan di gudang kering, dan diekspor via kontainer reefer jika diperlukan.", en: "Cloves are packed in jute bags with PE liners, stored in dry warehouses, and exported via reefer containers if necessary." },

  "prod.view_detail": {
    id: "Lihat Detail & Proses Produksi →",
    en: "View Details & Production Process →",
  },

  // Footer
  "footer.desc": {
    id: "Perusahaan terkemuka dalam pengolahan dan ekspor produk alam premium Indonesia ke pasar global.",
    en: "A leading company in processing and exporting premium Indonesian natural products to global markets.",
  },
  "footer.quicklinks": { id: "Tautan Cepat", en: "Quick Links" },
  "footer.contact": { id: "Kontak", en: "Contact" },
  "footer.follow": { id: "Ikuti Kami", en: "Follow Us" },
  "footer.cta_label": { id: "Mari Bermitra", en: "Let's Build" },
  "footer.cta_title": {
    id: "Bangun Perdagangan Berkelanjutan Bersama",
    en: "Sustainable Trade Together",
  },
  "footer.cta_desc": {
    id: "Alba Nusantara Commodity menyambut kolaborasi dengan mitra global yang mencari sumber komoditas terpercaya dari Indonesia.",
    en: "Alba Nusantara Commodity welcomes collaboration with global partners seeking reliable sourcing from Indonesia.",
  },
  "footer.cta_button": {
    id: "Mulai kemitraan Anda hari ini",
    en: "Start your partnership today",
  },
  "footer.company_info": {
    id: "Informasi Perusahaan",
    en: "Company Information",
  },
  "footer.phone": { id: "Nomor Telepon", en: "Phone Number" },

  // Product Detail Page
  "detail.back": { id: "Kembali ke Beranda", en: "Back to Home" },
  "detail.view_catalog": {
    id: "Lihat Katalog Produk",
    en: "View Product Catalog",
  },
  "detail.about_product": { id: "Tentang Produk", en: "About Product" },
  "detail.description": { id: "Deskripsi Produk", en: "Product Description" },
  "detail.benefits": { id: "Keunggulan", en: "Benefits" },
  "detail.process_label": { id: "Proses Produksi", en: "Production Process" },
  "detail.process_title": { id: "Proses Produksi", en: "Production Process" },
  "detail.process_subtitle": {
    id: "Tahapan pengolahan terstandar untuk menghasilkan produk berkualitas premium",
    en: "Standardized processing stages to produce premium quality products",
  },
  "detail.stage": { id: "Tahap", en: "Stage" },
  "detail.interested": { id: "Tertarik dengan", en: "Interested in" },
  "detail.cta_desc": {
    id: "Hubungi kami untuk informasi harga, spesifikasi, dan minimum order quantity.",
    en: "Contact us for pricing, specifications, and minimum order quantity information.",
  },
  "detail.contact_us": { id: "Hubungi Kami", en: "Contact Us" },
  "detail.other_products": {
    id: "Lihat Produk Lain",
    en: "View Other Products",
  },
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

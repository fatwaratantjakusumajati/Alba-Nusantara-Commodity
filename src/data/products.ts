import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import detailBirdnest from "@/assets/detail-birdnest.jpg";
import detailCocoa from "@/assets/detail-cocoa.jpg";
import detailClove from "@/assets/detail-clove.jpg";
import detailEssentialOil from "@/assets/detail-essential-oil.jpg";
import { Droplets, Flower2, FlaskConical, ShieldCheck, Package, Truck, Thermometer, Sun, Search, Scissors, TreePine, Bug, Waves, Filter, Bird, Home, ClipboardCheck, Sparkles, Bean, Cherry, Timer, Wind, Warehouse } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ProductStep {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ProductData {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  detailImage?: string;
  description: string[];
  benefits: string[];
  steps: ProductStep[];
}

export const productsData: ProductData[] = [
  {
    slug: "essential-oil",
    name: "Essential Oil",
    tagline: "Minyak Atsiri Murni dari Tanaman Aromatik Pilihan Indonesia",
    image: product1,
    detailImage: detailEssentialOil,
    description: [
      "Essential Oil atau minyak atsiri kami diekstraksi dari tanaman aromatik terbaik Indonesia seperti patchouli, citronella, vetiver, dan clove leaf. Proses distilasi dilakukan dengan teknologi modern untuk menjaga kemurnian dan kualitas aroma.",
      "Produk kami digunakan secara luas dalam industri aromaterapi, kosmetik, farmasi, dan parfum di lebih dari 20 negara. Setiap batch melewati uji laboratorium ketat untuk memastikan kesesuaian dengan standar internasional.",
    ],
    benefits: [
      "100% murni tanpa campuran bahan sintetis",
      "Memenuhi standar ISO 9235 untuk minyak atsiri",
      "Tersedia dalam berbagai grade sesuai kebutuhan industri",
      "Packaging aman untuk pengiriman internasional",
    ],
    steps: [
      { icon: Flower2, title: "Pemilihan Bahan Baku", desc: "Tanaman aromatik dipilih dari petani mitra di berbagai daerah Indonesia. Hanya tanaman dengan kualitas terbaik dan waktu panen optimal yang digunakan." },
      { icon: Sun, title: "Pengeringan & Persiapan", desc: "Bahan baku dikeringkan dengan metode alami atau controlled drying untuk mencapai kadar air ideal sebelum proses distilasi." },
      { icon: Thermometer, title: "Distilasi Uap", desc: "Proses steam distillation dilakukan dengan suhu dan tekanan terkontrol selama 4-8 jam untuk menghasilkan minyak atsiri berkualitas tinggi." },
      { icon: Filter, title: "Filtrasi & Pemurnian", desc: "Minyak hasil distilasi difiltrasi untuk menghilangkan partikel dan impuritas, menghasilkan essential oil yang jernih dan murni." },
      { icon: FlaskConical, title: "Quality Control & Testing", desc: "Setiap batch diuji di laboratorium untuk parameter GC-MS, specific gravity, refractive index, dan optical rotation sesuai standar ISO." },
      { icon: Package, title: "Packaging & Distribusi", desc: "Essential oil dikemas dalam drum aluminium food-grade dan dikirim ke klien di seluruh dunia dengan dokumentasi lengkap." },
    ],
  },
  {
    slug: "bird-nest",
    name: "Bird Nest",
    tagline: "prod.bird_nest.tagline",
    image: product2,
    detailImage: detailBirdnest,
    description: ["prod.bird_nest.detail_desc"],
    benefits: [
      "prod.bird_nest.benefit1",
      "prod.bird_nest.benefit2",
      "prod.bird_nest.benefit3",
    ],
    steps: [
      { icon: Home, title: "Pemanenan dari Rumah Walet", desc: "Sarang walet dipanen secara hati-hati dari rumah walet terkelola pada waktu optimal, memastikan populasi walet tetap terjaga." },
      { icon: Search, title: "Sortasi & Grading Awal", desc: "Sarang mentah disortir berdasarkan bentuk, ukuran, warna, dan tingkat kebersihan untuk menentukan grade produk akhir." },
      { icon: Droplets, title: "Perendaman & Pembersihan", desc: "Sarang direndam dalam air bersih dan dibersihkan secara manual menggunakan pinset untuk menghilangkan bulu dan kotoran tanpa bahan kimia." },
      { icon: ClipboardCheck, title: "Quality Inspection", desc: "Setiap sarang diperiksa secara individual di bawah lampu khusus untuk memastikan kebersihan dan keutuhan bentuk sarang." },
      { icon: Sparkles, title: "Pengeringan & Pembentukan", desc: "Sarang yang sudah bersih dikeringkan dengan suhu terkontrol dan dibentuk kembali agar tampilan rapi dan seragam." },
      { icon: Package, title: "Packaging Premium", desc: "Sarang walet dikemas dalam box premium dengan vacuum seal untuk menjaga kualitas dan freshness selama pengiriman." },
    ],
  },
  {
    slug: "cocoa-beans",
    name: "Cocoa Beans",
    tagline: "Biji Kakao Fermentasi Berkualitas dari Perkebunan Indonesia",
    image: product3,
    detailImage: detailCocoa,
    description: [
      "Cocoa Beans kami berasal dari perkebunan kakao di Sulawesi Selatan, Sumatera Barat, dan Papua — daerah penghasil kakao terbaik Indonesia. Biji kakao kami diproses melalui fermentasi terkontrol untuk menghasilkan flavor cokelat yang khas dan diminati oleh produsen cokelat dunia.",
      "Kami menyuplai biji kakao fermentasi dan non-fermentasi dalam berbagai grade untuk industri cokelat, confectionery, dan kosmetik di Eropa, Amerika, dan Asia.",
    ],
    benefits: [
      "Biji kakao dari daerah penghasil terbaik Indonesia",
      "Fermentasi terkontrol 5-7 hari untuk flavor optimal",
      "Kadar lemak kakao tinggi (50-55%)",
      "Memenuhi standar SNI dan regulasi ekspor internasional",
    ],
    steps: [
      { icon: Cherry, title: "Panen Buah Kakao", desc: "Buah kakao yang sudah matang optimal dipanen dari pohon secara selektif. Hanya buah dengan warna dan ukuran tepat yang dipilih." },
      { icon: Scissors, title: "Pemecahan & Ekstraksi Biji", desc: "Buah kakao dipecah dan biji beserta pulpnya diekstraksi secara manual untuk persiapan proses fermentasi." },
      { icon: Timer, title: "Fermentasi Terkontrol", desc: "Biji kakao difermentasi selama 5-7 hari dalam kotak fermentasi kayu dengan pembalikan rutin untuk mengembangkan flavor cokelat." },
      { icon: Sun, title: "Pengeringan Alami", desc: "Biji kakao hasil fermentasi dijemur di bawah sinar matahari selama 5-7 hari hingga kadar air mencapai 7% untuk penyimpanan optimal." },
      { icon: Search, title: "Sortasi & Grading", desc: "Biji kakao kering disortir berdasarkan ukuran, warna, dan kualitas. Biji cacat dan kulit ari dipisahkan untuk menjamin kualitas ekspor." },
      { icon: Warehouse, title: "Penyimpanan & Ekspor", desc: "Biji kakao dikemas dalam karung goni 60kg, disimpan di gudang bersuhu terkontrol, dan dikirim via kontainer ke pelabuhan ekspor." },
    ],
  },
  {
    slug: "clove",
    name: "Clove",
    tagline: "Cengkeh Premium dengan Kadar Eugenol Tinggi dari Maluku & Sulawesi",
    image: product4,
    detailImage: detailClove,
    description: [
      "Clove atau cengkeh kami berasal dari daerah penghasil cengkeh terbaik di Indonesia — Maluku, Sulawesi Utara, dan Jawa. Cengkeh Indonesia dikenal memiliki kadar eugenol tertinggi di dunia (80-90%), menjadikannya sangat diminati oleh industri makanan, farmasi, dan rokok kretek.",
      "Kami menyediakan whole cloves, clove stems, dan clove oil untuk pasar domestik dan ekspor ke India, Vietnam, Eropa, dan Timur Tengah.",
    ],
    benefits: [
      "Kadar eugenol tinggi (80-90%) dari varietas terbaik Indonesia",
      "Proses pengeringan alami menjaga kualitas aroma",
      "Tersedia: whole cloves, stems, dan clove oil",
      "Memenuhi standar ASTA dan ESA untuk ekspor",
    ],
    steps: [
      { icon: TreePine, title: "Panen Cengkeh", desc: "Bunga cengkeh dipanen saat masih kuncup dan berwarna merah muda kecoklatan — tahap optimal untuk mendapatkan kadar eugenol tertinggi." },
      { icon: Bug, title: "Sortasi Awal", desc: "Cengkeh segar disortir untuk memisahkan tangkai, daun, dan bunga yang tidak memenuhi standar ukuran dan warna." },
      { icon: Sun, title: "Pengeringan", desc: "Cengkeh dikeringkan dengan metode sun-drying selama 3-5 hari hingga kadar air mencapai 12-14%, menjaga aroma dan warna alami." },
      { icon: Wind, title: "Pembersihan & Pemisahan", desc: "Cengkeh kering dibersihkan dari debu dan benda asing menggunakan mesin winnowing dan ayakan untuk menghasilkan produk bersih." },
      { icon: ShieldCheck, title: "Quality Control", desc: "Pengujian laboratorium meliputi kadar eugenol, moisture content, volatile oil, dan uji mikrobiologi sesuai standar ASTA." },
      { icon: Truck, title: "Packaging & Pengiriman", desc: "Cengkeh dikemas dalam karung jute berlapis PE liner, disimpan di gudang kering, dan diekspor via kontainer reefer jika diperlukan." },
    ],
  },
];

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
  catalogPdf?: string;
  description: string[];
  benefits: string[];
  steps: ProductStep[];
}

export const productsData: ProductData[] = [
  {
    slug: "essential-oil",
    name: "prod.essential_oil.name",
    tagline: "prod.essential_oil.tagline",
    image: product1,
    detailImage: detailEssentialOil,
    catalogPdf: "/catalogs/essential-oil-catalog.pdf",
    description: ["prod.essential_oil.detail_desc"],
    benefits: [
      "prod.essential_oil.benefit1",
      "prod.essential_oil.benefit2",
      "prod.essential_oil.benefit3",
      "prod.essential_oil.benefit4",
    ],
    steps: [
      { icon: Flower2, title: "prod.essential_oil.step1.title", desc: "prod.essential_oil.step1.desc" },
      { icon: Sun, title: "prod.essential_oil.step2.title", desc: "prod.essential_oil.step2.desc" },
      { icon: Thermometer, title: "prod.essential_oil.step3.title", desc: "prod.essential_oil.step3.desc" },
      { icon: Filter, title: "prod.essential_oil.step4.title", desc: "prod.essential_oil.step4.desc" },
      { icon: FlaskConical, title: "prod.essential_oil.step5.title", desc: "prod.essential_oil.step5.desc" },
      { icon: Package, title: "prod.essential_oil.step6.title", desc: "prod.essential_oil.step6.desc" },
    ],
  },
  {
    slug: "bird-nest",
    name: "prod.bird_nest.name",
    tagline: "prod.bird_nest.tagline",
    image: product2,
    detailImage: detailBirdnest,
    catalogPdf: "/catalogs/bird-nest-catalog.pdf",
    description: ["prod.bird_nest.detail_desc"],
    benefits: [
      "prod.bird_nest.benefit1",
      "prod.bird_nest.benefit2",
      "prod.bird_nest.benefit3",
    ],
    steps: [
      { icon: Home, title: "prod.bird_nest.step1.title", desc: "prod.bird_nest.step1.desc" },
      { icon: Search, title: "prod.bird_nest.step2.title", desc: "prod.bird_nest.step2.desc" },
      { icon: Droplets, title: "prod.bird_nest.step3.title", desc: "prod.bird_nest.step3.desc" },
      { icon: ClipboardCheck, title: "prod.bird_nest.step4.title", desc: "prod.bird_nest.step4.desc" },
      { icon: Sparkles, title: "prod.bird_nest.step5.title", desc: "prod.bird_nest.step5.desc" },
      { icon: Package, title: "prod.bird_nest.step6.title", desc: "prod.bird_nest.step6.desc" },
    ],
  },
  {
    slug: "cocoa-beans",
    name: "prod.cocoa.name",
    tagline: "prod.cocoa.tagline",
    image: product3,
    detailImage: detailCocoa,
    catalogPdf: "/catalogs/cocoa-beans-catalog.pdf",
    description: ["prod.cocoa.detail_desc"],
    benefits: [
      "prod.cocoa.benefit1",
      "prod.cocoa.benefit2",
      "prod.cocoa.benefit3",
      "prod.cocoa.benefit4",
    ],
    steps: [
      { icon: Cherry, title: "prod.cocoa.step1.title", desc: "prod.cocoa.step1.desc" },
      { icon: Scissors, title: "prod.cocoa.step2.title", desc: "prod.cocoa.step2.desc" },
      { icon: Timer, title: "prod.cocoa.step3.title", desc: "prod.cocoa.step3.desc" },
      { icon: Sun, title: "prod.cocoa.step4.title", desc: "prod.cocoa.step4.desc" },
      { icon: Search, title: "prod.cocoa.step5.title", desc: "prod.cocoa.step5.desc" },
      { icon: Warehouse, title: "prod.cocoa.step6.title", desc: "prod.cocoa.step6.desc" },
    ],
  },
  {
    slug: "clove",
    name: "prod.clove.name",
    tagline: "prod.clove.tagline",
    image: product4,
    detailImage: detailClove,
    catalogPdf: "/catalogs/clove-catalog.pdf",
    description: ["prod.clove.detail_desc"],
    benefits: [
      "prod.clove.benefit1",
      "prod.clove.benefit2",
      "prod.clove.benefit3",
      "prod.clove.benefit4",
    ],
    steps: [
      { icon: TreePine, title: "prod.clove.step1.title", desc: "prod.clove.step1.desc" },
      { icon: Bug, title: "prod.clove.step2.title", desc: "prod.clove.step2.desc" },
      { icon: Sun, title: "prod.clove.step3.title", desc: "prod.clove.step3.desc" },
      { icon: Wind, title: "prod.clove.step4.title", desc: "prod.clove.step4.desc" },
      { icon: ShieldCheck, title: "prod.clove.step5.title", desc: "prod.clove.step5.desc" },
      { icon: Truck, title: "prod.clove.step6.title", desc: "prod.clove.step6.desc" },
    ],
  },
];

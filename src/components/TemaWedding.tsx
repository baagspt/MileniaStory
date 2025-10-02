import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const TemaWedding = () => {
  const [activeCategory, setActiveCategory] = useState("elegant");

  // Sample wedding theme data with categories - 4 per category
  const weddingThemes = [
    // Elegant themes
    {
      id: 1,
      title: "Elegant Gold",
      description: "Klasik dan mewah dengan sentuhan emas",
      image: "/logo.png",
      category: "elegant",
    },
    {
      id: 2,
      title: "Royal Elegance",
      description: "Kemewahan dengan nuansa kerajaan",
      image: "/logo.png",
      category: "elegant",
    },
    {
      id: 3,
      title: "Platinum Class",
      description: "Kesederhanaan mewah dengan sentuhan platinum",
      image: "/logo.png",
      category: "elegant",
    },
    {
      id: 4,
      title: "Diamond Luxury",
      description: "Kilauan diamond yang memukau",
      image: "/logo.png",
      category: "elegant",
    },
    // Romantic themes
    {
      id: 5,
      title: "Romantic Garden",
      description: "Tema taman yang penuh bunga dan warna",
      image: "/logo.png",
      category: "romantic",
    },
    {
      id: 6,
      title: "Enchanted Forest",
      description: "Hutan ajaib dengan sentuhan magis",
      image: "/logo.png",
      category: "romantic",
    },
    {
      id: 7,
      title: "Sunset Love",
      description: "Keindahan matahari terbenam untuk cinta abadi",
      image: "/logo.png",
      category: "romantic",
    },
    {
      id: 8,
      title: "Butterfly Dreams",
      description: "Impian romantis dengan kupu-kupu indah",
      image: "/logo.png",
      category: "romantic",
    },
    // Minimalist themes
    {
      id: 9,
      title: "Minimalist White",
      description: "Sederhana namun elegan dengan warna putih",
      image: "/logo.png",
      category: "minimalist",
    },
    {
      id: 10,
      title: "Clean Lines",
      description: "Desain bersih dengan garis lurus yang elegan",
      image: "/logo.png",
      category: "minimalist",
    },
    {
      id: 11,
      title: "Simple Grace",
      description: "Keanggunan dalam kesederhanaan",
      image: "/logo.png",
      category: "minimalist",
    },
    {
      id: 12,
      title: "Modern Simplicity",
      description: "Kesederhanaan modern yang memukau",
      image: "/logo.png",
      category: "minimalist",
    },
    // Vintage themes
    {
      id: 13,
      title: "Vintage Charm",
      description: "Nuansa klasik dengan sentuhan antik",
      image: "/logo.png",
      category: "vintage",
    },
    {
      id: 14,
      title: "Retro Romance",
      description: "Romansa ala tahun 70-an",
      image: "/logo.png",
      category: "vintage",
    },
    {
      id: 15,
      title: "Classic Memories",
      description: "Kenangan abadi gaya klasik",
      image: "/logo.png",
      category: "vintage",
    },
    {
      id: 16,
      title: "Antique Elegance",
      description: "Kemewahan antik yang tak lekang oleh waktu",
      image: "/logo.png",
      category: "vintage",
    },
  ];

  const filteredThemes = weddingThemes.filter((theme) => theme.category === activeCategory);

  return (
    <section className="relative w-full pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32" style={{ backgroundColor: '#455a64' }}>
      <div className="container px-3 sm:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-3 text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-3xl md:text-5xl font-bold tracking-tight">
              Tema Undangan Pernikahan
            </h2>
            <p className="max-w-[900px] text-white text-xs sm:text-base md:text-lg">
              Pilih tema menarik untuk undangan digital pernikahan Anda dan pesan sekarang
            </p>
          </div>

          {/* Category Filter Menu */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-6">
            {["elegant", "romantic", "minimalist", "vintage"].map(
              (cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="rounded-full text-xs sm:text-sm px-3 sm:px-4"
                  style={{ backgroundColor: activeCategory === cat ? '#eceff1' : '#263238', color: activeCategory === cat ? '#263238' : '#eceff1' }}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              )
            )}
          </div>
        </motion.div>

        {/* Grid: default 2 kolom (mobile), lg:4 (desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredThemes.length > 0 ? (
            filteredThemes.map((theme, index) => (
              <motion.div
                key={theme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden" style={{ backgroundColor: '#263238' }}>
                  {/* Gambar tema */}
                  <div className="w-full h-32 sm:h-40 md:h-48 flex items-center justify-center p-2 sm:p-4 bg-muted">
                    <img
                      src={theme.image || "public/logo.png"}
                      alt={theme.title}
                      className="object-contain max-h-28 sm:max-h-32 md:max-h-40 max-w-full"
                    />
                  </div>

                  <CardContent className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                      {theme.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-muted-foreground">
                      {theme.description}
                    </p>
                    <div className="mt-2 sm:mt-3 md:mt-4 flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm md:text-lg">
                        Rp 100.000
                      </span>
                      <Button
                        size="sm" // Diperbaiki: Dihapus \"
                        className="text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4" // Diperbaiki: Dihapus \"
                        onClick={() => {
                          const message = `Halo, saya ingin memesan tema undangan: *${theme.title}*%0AHarga: *Rp 100.000*%0AMohon informasi lebih lanjut.`;
                          window.open(`https://wa.me/6289528048690?text=${message}`, '_blank');
                        }}
                      >
                        Order{" "}
                        <ShoppingCart className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 sm:py-12">
              <p className="text-muted-foreground text-sm sm:text-lg">
                Tema tidak ditemukan untuk kategori ini
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TemaWedding;
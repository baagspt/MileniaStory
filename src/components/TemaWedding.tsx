import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const TemaWedding = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample wedding theme data with categories
  const weddingThemes = [
    {
      id: 1,
      title: "Elegant Gold",
      description: "Klasik dan mewah dengan sentuhan emas",
      image: "/images/wedding-theme-1.jpg",
      category: "elegant",
    },
    {
      id: 2,
      title: "Romantic Garden",
      description: "Tema taman yang penuh bunga dan warna",
      image: "/images/wedding-theme-2.jpg",
      category: "romantic",
    },
    {
      id: 3,
      title: "Minimalist White",
      description: "Sederhana namun elegan dengan warna putih",
      image: "/images/wedding-theme-3.jpg",
      category: "minimalist",
    },
    {
      id: 4,
      title: "Vintage Charm",
      description: "Nuansa klasik dengan sentuhan antik",
      image: "/images/wedding-theme-4.jpg",
      category: "vintage",
    },
  ];

  const filteredThemes =
    activeCategory === "all"
      ? weddingThemes
      : weddingThemes.filter((theme) => theme.category === activeCategory);

  return (
    <section id="tema-wedding" className="w-full py-10 sm:py-16 lg:py-24">
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
            <p className="max-w-[900px] text-muted-foreground text-xs sm:text-base md:text-lg">
              Pilih tema menarik untuk undangan digital pernikahan Anda
            </p>
          </div>

          {/* Category Filter Menu */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 sm:mt-6">
            {["all", "elegant", "romantic", "minimalist", "vintage"].map(
              (cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="rounded-full text-xs sm:text-sm px-3 sm:px-4"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat === "all"
                    ? "All Themes"
                    : cat.charAt(0).toUpperCase() + cat.slice(1)}
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
                <Card className="overflow-hidden">
                  {/* Gambar tema */}
                  <div className="w-full h-32 sm:h-40 md:h-48 flex items-center justify-center p-2 sm:p-4 bg-muted">
                    <img
                      src={theme.image || "/logo.png"}
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
                        size="sm"
                        className="text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4"
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

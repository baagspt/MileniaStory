import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

// Definisikan Tipe Data untuk Tema agar TypeScript lebih ketat
interface WeddingTheme {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "elegant" | "romantic" | "minimalist" | "vintage";
  previewUrl: string; // Properti Link Preview Ditambahkan
}

const TemaWedding = () => {
  const [activeCategory, setActiveCategory] = useState<WeddingTheme["category"]>("elegant");

  // Sample wedding theme data DENGAN LINK PREVIEW BARU
  const weddingThemes: WeddingTheme[] = [
    // Elegant themes
    { id: 1, title: "Elegant Blue", description: "Klasik dan mewah dengan sentuhan laut", image: "/e1.png", category: "elegant", previewUrl: "https://mileniastory-elegantblue.vercel.app/?to=Milenia%20Story" },
    { id: 2, title: "Elegant Sage", description: "Kemewahan dengan nuansa kerajaan", image: "/e2.png", category: "elegant", previewUrl: "https://mileniastory-elegantsage.vercel.app/?to=Milenia%20Story" },
    { id: 3, title: "Elegant Maroon", description: "Kesederhanaan mewah dengan sentuhan platinum", image: "/e3.png", category: "elegant", previewUrl: "https://mileniastory-elegantmaroon.vercel.app/?to=Milenia%20Story" },
    { id: 4, title: "Diamond Luxury", description: "Kilauan diamond yang memukau", image: "/e1.png", category: "elegant", previewUrl: "https://demo.undangan.co/diamond-luxury" },
    // Romantic themes
    { id: 5, title: "Romantic Garden", description: "Tema taman yang penuh bunga dan warna", image: "/e1.png", category: "romantic", previewUrl: "https://demo.undangan.co/romantic-garden" },
    { id: 6, title: "Enchanted Forest", description: "Hutan ajaib dengan sentuhan magis", image: "/e1.png", category: "romantic", previewUrl: "https://demo.undangan.co/enchanted-forest" },
    { id: 7, title: "Sunset Love", description: "Keindahan matahari terbenam untuk cinta abadi", image: "/e1.png", category: "romantic", previewUrl: "https://demo.undangan.co/sunset-love" },
    { id: 8, title: "Butterfly Dreams", description: "Impian romantis dengan kupu-kupu indah", image: "/e1.png", category: "romantic", previewUrl: "https://demo.undangan.co/butterfly-dreams" },
    // Minimalist themes
    { id: 9, title: "Minimalist White", description: "Sederhana namun elegan dengan warna putih", image: "/e1.png", category: "minimalist", previewUrl: "https://demo.undangan.co/minimalist-white" },
    { id: 10, title: "Clean Lines", description: "Desain bersih dengan garis lurus yang elegan", image: "/e1.png", category: "minimalist", previewUrl: "https://demo.undangan.co/clean-lines" },
    { id: 11, title: "Simple Grace", description: "Keanggunan dalam kesederhanaan", image: "/e1.png", category: "minimalist", previewUrl: "https://demo.undangan.co/simple-grace" },
    { id: 12, title: "Modern Simplicity", description: "Kesederhanaan modern yang memukau", image: "/e1.png", category: "minimalist", previewUrl: "https://demo.undangan.co/modern-simplicity" },
    // Vintage themes
    { id: 13, title: "Vintage Charm", description: "Nuansa klasik dengan sentuhan antik", image: "/e1.png", category: "vintage", previewUrl: "https://demo.undangan.co/vintage-charm" },
    { id: 14, title: "Retro Romance", description: "Romansa ala tahun 70-an", image: "/e1.png", category: "vintage", previewUrl: "https://demo.undangan.co/retro-romance" },
    { id: 15, title: "Classic Memories", description: "Kenangan abadi gaya klasik", image: "/e1.png", category: "vintage", previewUrl: "https://demo.undangan.co/classic-memories" },
    { id: 16, title: "Antique Elegance", description: "Kemewahan antik yang tak lekang oleh waktu", image: "/e1.png", category: "vintage", previewUrl: "https://demo.undangan.co/antique-elegance" },
  ];

  const filteredThemes = weddingThemes.filter((theme) => theme.category === activeCategory);

  // Perubahan dilakukan di sini
  const handlePreview = (url: string) => { 
    // Membuka link preview di tab baru
    window.open(url, '_blank');
  };

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
                  onClick={() => setActiveCategory(cat as WeddingTheme["category"])}
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
                  
                  {/* Gambar tema - Dibuat RELATIVE */}
                  <div className="w-full bg-muted aspect-video relative"> 
                    <img
                      src={theme.image || "public/logo.png"}
                      alt={theme.title}
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* TEKS HARGA */}
                    <span 
                        className="font-bold text-xs sm:text-sm md:text-lg absolute bottom-2 right-2 
                                   bg-white text-gray-900 px-2 py-1 rounded-md shadow-lg" 
                    >
                      Rp 100.000
                    </span>
                  </div>

                  <CardContent className="p-3 sm:p-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 text-white">
                      {theme.title}
                    </h3>
                    <p className="text-[11px] sm:text-sm md:text-base text-white opacity-70"> 
                      {theme.description}
                    </p>
                    <div className="mt-2 sm:mt-3 md:mt-4 flex items-center justify-end"> 
                      {/* Container untuk dua tombol */}
                      <div className="flex space-x-2"> 
                         {/* Tombol Preview */}
                        <Button
                          size="sm"
                          variant="outline" 
                          className="text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4"
                          style={{ backgroundColor: 'transparent', borderColor: '#eceff1', color: '#eceff1' }}
                          onClick={() => handlePreview(theme.previewUrl)} // Perubahan di sini
                        >
                          Preview
                        </Button>

                        {/* Tombol Order yang sudah ada */}
                        <Button
                          size="sm"
                          className="text-[11px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4"
                          onClick={() => {
                            const message = `Halo, saya ingin memesan tema undangan: *${theme.title}*%0AHarga: *Rp 100.000*%0AMohon informasi lebih lanjut.`;
                            window.open(`https://wa.me/6289528048690?text=${message}`, '_blank');
                          }}
                        >
                          Order{" "}
                          <ShoppingCart className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      </div>
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
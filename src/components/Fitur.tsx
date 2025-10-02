import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Fitur = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16" style={{ backgroundColor: '#78909c' }}>
      <div className="container px-3 sm:px-4">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-1 sm:space-y-2">
            {/* Judul utama */}
            <h2 className="text-lg max-sm:text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
              Fitur
            </h2>
            <p className="max-w-[900px] text-white text-[11px] max-sm:text-[10px] sm:text-sm md:text-base">
              Menjelaskan berbagai fitur dari layanan MileniaStory
            </p>
          </div>
        </motion.div>
        
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {[
            { title: "Smart Dashboard", desc: "Dasbor cerdas untuk mengelola undangan" },
            { title: "Unlimited Share", desc: "Berbagi undangan tanpa batas" },
            { title: "Buku Tamu", desc: "Buku tamu digital untuk ucapan" },
            { title: "Custom Tamu", desc: "Kustomisasi daftar tamu sesuai kebutuhan" },
            { title: "Free Ubah Tema", desc: "Ubah tema undangan secara gratis" },
            { title: "Musik Autoplay", desc: "Pemutaran musik otomatis di undangan" },
            { title: "QR Code", desc: "QR Code untuk kemudahan akses" },
            { title: "Layar Sapa", desc: "Layar sapaan untuk menyambut tamu" },
            { title: "Our Story", desc: "Fitur untuk menceritakan kisah cinta Anda" },
            { title: "Amplop Digital", desc: "Amplop digital untuk hadiah pernikahan" },
            { title: "Galeri Foto", desc: "Galeri foto untuk momen spesial Anda" },
            { title: "Live Streaming", desc: "Fitur live streaming acara pernikahan" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col items-center justify-center p-3 max-sm:p-2 text-center border-[#263238]" style={{ backgroundColor: '#263238', borderColor: '#263238' }}>
                <CardContent className="p-0">
                  {/* Judul Card */}
                  <h3 className="text-sm max-sm:text-xs sm:text-base md:text-lg font-bold mb-1">
                    {item.title}
                  </h3>
                  {/* Deskripsi Card */}
                  <p className="text-muted-foreground text-[11px] max-sm:text-[10px] sm:text-xs md:text-sm">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fitur;

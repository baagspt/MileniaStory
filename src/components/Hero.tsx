import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 px-3 sm:px-4">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 sm:space-y-4"
        >
          <h1 className="text-8xl max-sm:text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-foreground drop-shadow-lg">
  Milenia Story
</h1>


          <p className="text-sm max-sm:text-[10px] sm:text-base md:text-xl text-muted-foreground max-w-[600px] mx-auto">
            Buat Undangan Pernikahan Digitalmu Disini 
          </p>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          <div className="relative w-28 h-28 max-sm:w-24 max-sm:h-24 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* Glow behind logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5 blur-2xl sm:blur-3xl rounded-full animate-pulse" />
            <img
              src="/logo.png"
              alt="Logo MileniaStory"
              className="relative w-20 h-20 max-sm:w-16 max-sm:h-16 sm:w-32 sm:h-32 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3 min-[400px]:flex-row">
            <Button className="px-5 py-2 max-sm:px-4 max-sm:py-2 text-sm max-sm:text-[12px] rounded-full font-medium shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
              Pilih Tema
              <MoveRight className="ml-2 h-4 w-4 max-sm:h-3 max-sm:w-3" />
            </Button>
            <Button
              variant="outline"
              className="px-5 py-2 max-sm:px-4 max-sm:py-2 text-sm max-sm:text-[12px] rounded-full font-medium text-foreground border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Hubungi Kami
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

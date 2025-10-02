import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/bg.jpg', '/bg2.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background images with fade effect */}
      {images.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center blur-sm transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}
      {/* Semi-transparent overlay with #263238 color */}
      <div className="absolute inset-0 bg-[#263238] opacity-70"></div>
      {/* Gradient overlay: transparent at top to #263238 at bottom (20% of screen) */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-[#263238] to-transparent opacity-80"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 px-3 sm:px-4">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 sm:space-y-4"
        >
          <h1 className="text-8xl max-sm:text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-[#eceff1] drop-shadow-lg">
  Milenia Story
</h1>


          <p className="text-sm max-sm:text-[10px] sm:text-base md:text-xl text-[#cfd8dc] max-w-[600px] mx-auto">
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
          <div className="relative w-40 h-40 max-sm:w-32 max-sm:h-32 sm:w-64 sm:h-64 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Logo MileniaStory"
              className="relative w-32 h-32 max-sm:w-24 max-sm:h-24 sm:w-48 sm:h-48 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2 sm:gap-3 min-[400px]:flex-row mt-6 sm:mt-8 md:mt-12">
            <Button 
              onClick={() => window.open('http://wa.me/6287851002372', '_blank')}
              className="px-5 py-2 max-sm:px-4 max-sm:py-2 text-sm max-sm:text-[12px] rounded-full font-medium shadow-lg bg-primary hover:bg-primary/90 text-[#263238] transition-all duration-300 hover:scale-105">
              Pesan Sekarang
              <MoveRight className="ml-2 h-4 w-4 max-sm:h-3 max-sm:w-3" />
            </Button>
          </div>
          
          {/* Moving downward arrow */}
          <motion.div 
            className="mt-8 sm:mt-12 text-white flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "loop" 
            }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce"
            >
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

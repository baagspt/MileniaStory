import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t" style={{ backgroundColor: '#263238' }}>
      <motion.div
        className="container px-3 sm:px-4 md:px-6 py-8 sm:py-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo + Nama */}
        <div className="flex items-center space-x-2 mb-3 sm:mb-4">
          <img
            src="/logo.png"
            alt="MileniaStory Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
          />
          <h3 className="text-base sm:text-lg font-semibold text-[#eceff1]">MileniaStory</h3>
        </div>

        {/* Copyright */}
        <div className="border-t mt-5 sm:mt-6 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-[#eceff1] w-full" style={{ borderColor: '#37474f' }}>
          <p>
            © {new Date().getFullYear()} Milenia Story. All rights reserved. Hak cipta dilindungi.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

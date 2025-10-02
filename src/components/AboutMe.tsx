import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#37474f' }}>
      <div className="container px-3 sm:px-4 md:px-6">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-xl max-sm:text-lg sm:text-3xl font-bold tracking-tighter md:text-5xl">
              Milenia Story
            </h2>
            <p className="max-w-[900px] text-white text-[11px] max-sm:text-[10px] sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Cerita indah perjalanan cinta kamu yang siap dibagikan dengan keluarga dan teman terdekat
            </p>
          </div>
        </motion.div>

        {/* Content Card */}
        <div className="mx-auto grid max-w-5xl items-center gap-4 sm:gap-6 py-8 sm:py-12">
          <motion.div 
            className="flex flex-col justify-center space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full flex flex-col border-[#78909c]" style={{ backgroundColor: '#78909c', borderColor: '#78909c' }}>
              <CardContent className="p-3 max-sm:p-2 sm:p-6 flex-1 flex flex-col justify-center">
                <p className="text-[#eceff1] text-[12px] max-sm:text-[10px] sm:text-sm md:text-base leading-relaxed">
                  Milenia Story hadir untuk membantu Anda dalam menyampaikan kabar bahagia kepada keluarga dan sahabat terdekat.
                  Dengan berbagai pilihan tema yang menarik dan fitur-fitur lengkap, kami siap membantu membuat undangan digital 
                  yang unik dan penuh makna.
                </p>
                <br />
                <p className="text-[#eceff1] text-[12px] max-sm:text-[10px] sm:text-sm md:text-base leading-relaxed">
                  Kami berkomitmen untuk memberikan layanan terbaik dengan desain yang elegan, kemudahan dalam penggunaan,
                  dan dukungan teknologi terkini untuk memastikan moment istimewamu dapat dibagikan secara indah dan berkesan.
                </p>
                <br />
                <p className="text-[#eceff1] text-[12px] max-sm:text-[10px] sm:text-sm md:text-base leading-relaxed">
                  Bergabunglah bersama ribuan pengguna yang telah mempercayakan moment spesial mereka kepada Milenia Story,
                  platform undangan digital terpercaya dengan berbagai fitur menarik dan kemudahan dalam berbagi kabar bahagia.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

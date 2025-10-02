const Portfolio = () => {
  // Wedding invitation images for the auto slider
  const invitationImages = [
    "/public/z1.jpg",
    "/public/z1.jpg",
    "/public/z1.jpg",
    "/public/z1.jpg",
    "/public/z1.jpg",
    "/public/z1.jpg"
    ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...invitationImages, ...invitationImages];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 25s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.03);
          filter: brightness(1.1);
        }
      `}</style>
      
      <section className="relative w-full py-10 sm:py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#546e7a' }}>
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-xl max-sm:text-lg sm:text-3xl md:text-5xl font-bold tracking-tighter">
                Galeri Undangan
              </h2>
              <p className="max-w-[900px] text-white text-sm max-sm:text-[12px] sm:text-base md:text-xl/relaxed">
                Berbagai contoh undangan digital yang pernah kami buat
              </p>
            </div>
          </div>
        </div>
        
        {/* Auto Scrolling Image Gallery */}
        <div className="relative w-full overflow-hidden py-6 sm:py-8">
          <div className="scroll-container w-full max-w-7xl mx-auto">
            <div className="infinite-scroll flex gap-4 sm:gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-40 h-52 max-sm:w-36 max-sm:h-48 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={image}
                    alt={`Contoh undangan ${index % invitationImages.length + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-10 bg-gradient-to-t from-muted to-transparent z-10" />
      </section>
    </>
  );
};

export default Portfolio;

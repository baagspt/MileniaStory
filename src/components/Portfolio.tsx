const Portfolio = () => {
  // Wedding invitation images for the auto slider
  const invitationImages = [
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      
      <section className="relative w-full py-10 sm:py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-3 sm:px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center mb-8 sm:mb-12">
            <div className="space-y-1 sm:space-y-2">
              <h2 className="text-xl max-sm:text-lg sm:text-3xl md:text-5xl font-bold tracking-tighter">
                Galeri Undangan
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-sm max-sm:text-[12px] sm:text-base md:text-xl/relaxed">
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
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-muted to-transparent z-10" />
      </section>
    </>
  );
};

export default Portfolio;

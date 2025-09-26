import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {  Mail, MessageCircle, Music } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:contact@mileniastory.com" },
    { name: "TikTok", icon: Music, url: "https://tiktok.com" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-3 sm:px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 text-center mb-6 sm:mb-12">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-3xl md:text-5xl font-bold tracking-tighter">
              Hubungi Kami
            </h2>
            <p className="max-w-[900px] text-muted-foreground text-xs sm:text-base md:text-xl/relaxed">
              Ada pertanyaan seputar undangan digitalmu? Tim kami siap membantu menjawab setiap kebutuhanmu dengan cepat dan tepat.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Form */}
          <Card className="p-2 sm:p-4 md:p-6">
            <CardHeader className="p-2 sm:p-3">
              <CardTitle className="text-sm sm:text-base md:text-lg">
                Kirim Pesan
              </CardTitle>
              <CardDescription className="text-[11px] sm:text-sm">
                Isi formulir di bawah ini dan kami akan segera menghubungimu kembali.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-4">
              <form className="space-y-2 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <Input placeholder="Nama Lengkap" className="h-8 text-xs sm:h-9 sm:text-sm" />
                  <Input placeholder="Alamat Email" type="email" className="h-8 text-xs sm:h-9 sm:text-sm" />
                </div>
                <Textarea
                  placeholder="Pesan Anda..."
                  className="h-16 sm:h-20 md:h-24 text-xs sm:text-sm resize-none"
                />
                <Button className="w-full h-8 text-xs sm:h-9 sm:text-sm">
                  Kirim Pesan
                </Button>
              </form>
              </CardContent>
          </Card>

          {/* Social & Info */}
          <div className="space-y-4 sm:space-y-8">
            {/* Sosial Media */}
            <Card className="p-2 sm:p-4 md:p-6">
              <CardHeader className="p-2 sm:p-3">
                <CardTitle className="text-sm sm:text-base md:text-lg">
                  Ikuti Kami
                </CardTitle>
                <CardDescription className="text-[11px] sm:text-sm">
                  Tetap terhubung dan dapatkan informasi terbaru seputar undangan digital
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 sm:p-4 border rounded-lg hover:bg-accent transition-colors"
                    >
                      <social.icon className="h-4 w-4 sm:h-6 sm:w-6 mb-1" />
                      <span className="text-[10px] sm:text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Info Kontak */}
            <Card className="p-2 sm:p-4 md:p-6">
              <CardHeader className="p-2 sm:p-3">
                <CardTitle className="text-sm sm:text-base md:text-lg">
                  Garansi 100% uang kembali
                </CardTitle>
                <CardDescription className="text-[11px] sm:text-sm">
                  Apabila undangan tidak di kerjakan dalam waktu 7 hari kerja (kecuali hari libur)
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center gap-4 pt-2 flex-wrap">
  <div className="flex flex-col items-center justify-center">
    <img 
      src="/BCA.png" 
      alt="Pembayaran BCA" 
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
    />
  </div>
  <div className="flex flex-col items-center justify-center">
    <img 
      src="/QRIS.png" 
      alt="Pembayaran QRIS" 
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
    />
  </div>
  <div className="flex flex-col items-center justify-center">
    <img 
      src="/Seabank.png" 
      alt="Pembayaran SeaBank" 
      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
    />
  </div>
</CardContent>

            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

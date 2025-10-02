import { useState } from 'react'; // Import useState
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, MessageCircle, Music } from "lucide-react";

const Contact = () => {
  // 1. Definisikan state untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // 2. Handler untuk memperbarui state saat input berubah
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Nomor WhatsApp tujuan
  const whatsappNumber = '6289528048690';

  // 3. Fungsi untuk membuat link WhatsApp pre-filled
  const getWhatsAppLink = () => {
    // Ambil data dari state
    const { name, email, message } = formData;
    
    // Format pesan
    const defaultMessage = `Halo MileniaStory! Saya ${name} (${email}) ingin menghubungi Anda.`;
    const fullMessage = message ? `${defaultMessage}\n\nPesan:\n${message}` : defaultMessage;

    // URL encode pesan agar aman dikirim melalui URL
    const encodedMessage = encodeURIComponent(fullMessage);

    // Buat URL WhatsApp
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "http://instagram.com/mileniastory" },
    { name: "TikTok", icon: Music, url: "https://www.tiktok.com/@mileniastory_" },
    { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/6289528048690" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32" style={{ backgroundColor: '#90a4ae' }}>
      <div className="container px-3 sm:px-4 md:px-6">
        {/* ... Header tetap sama ... */}
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 text-center mb-6 sm:mb-12">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-3xl md:text-5xl font-bold tracking-tighter text-white">
              Hubungi Kami
            </h2>
            <p className="max-w-[900px] text-gray-200 text-xs sm:text-base md:text-xl/relaxed">
              Ada pertanyaan seputar undangan digitalmu? Tim kami siap membantu menjawab setiap kebutuhanmu dengan cepat dan tepat.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Form */}
          <Card className="p-2 sm:p-4 md:p-6" style={{ backgroundColor: '#263238' }}>
            <CardHeader className="p-2 sm:p-3">
              <CardTitle className="text-sm sm:text-base md:text-lg text-white">
                Kirim Pesan
              </CardTitle>
              <CardDescription className="text-[11px] sm:text-sm text-gray-400">
                Isi formulir di bawah ini dan kami akan segera menghubungimu kembali.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-4">
              {/* Kami menggunakan <div> di sini karena button akan berada di dalam <a> */}
              <div className="space-y-2 sm:space-y-4"> 
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <Input 
                    placeholder="Nama Lengkap" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="h-8 text-xs sm:h-9 sm:text-sm border-[#37474f] focus:border-[#37474f] text-white" 
                    style={{ backgroundColor: '#37474f' }} 
                  />
                  <Input 
                    placeholder="Alamat Email" 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="h-8 text-xs sm:h-9 sm:text-sm border-[#37474f] focus:border-[#37474f] text-white" 
                    style={{ backgroundColor: '#37474f' }} 
                  />
                </div>
                <Textarea
                  placeholder="Pesan Anda..."
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="h-16 sm:h-20 md:h-24 text-xs sm:text-sm resize-none border-[#37474f] focus:border-[#37474f] text-white"
                  style={{ backgroundColor: '#37474f' }}
                />
                
                {/* 4. Ganti <form> dan <Button> menjadi <a> yang membungkus <Button> */}
                <a 
                  href={getWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  // Mencegah pengiriman kosong dengan menonaktifkan tombol jika nama atau email kosong
                  className={`block ${!formData.name || !formData.email ? 'pointer-events-none opacity-50' : ''}`}
                >
                  <Button 
                    className="w-full h-8 text-xs sm:h-9 sm:text-sm bg-[#90a4ae] hover:bg-[#b0bec5] text-white"
                    // type="button" agar tidak memicu submit jika menggunakan form
                    type="button" 
                  >
                    Kirim Pesan (WhatsApp)
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* ... Social & Info tetap sama ... */}
          {/* Saya tambahkan text-white pada social links agar terlihat kontras */}
          <div className="space-y-4 sm:space-y-8">
            <Card className="p-2 sm:p-4 md:p-6" style={{ backgroundColor: '#263238' }}>
              <CardHeader className="p-2 sm:p-3">
                <CardTitle className="text-sm sm:text-base md:text-lg text-white">
                  Ikuti Kami
                </CardTitle>
                <CardDescription className="text-[11px] sm:text-sm text-gray-400">
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
                      className="flex flex-col items-center justify-center p-2 sm:p-4 border rounded-lg hover:bg-[#37474f] transition-colors border-[#37474f] text-white"
                    >
                      <social.icon className="h-4 w-4 sm:h-6 sm:w-6 mb-1" />
                      <span className="text-[10px] sm:text-sm">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-2 sm:p-4 md:p-6" style={{ backgroundColor: '#263238' }}>
              <CardHeader className="p-2 sm:p-3">
                <CardTitle className="text-sm sm:text-base md:text-lg text-white">
                  Garansi 100% uang kembali
                </CardTitle>
                <CardDescription className="text-[11px] sm:text-sm text-gray-400">
                  Apabila undangan tidak di kerjakan dalam waktu 7 hari kerja (kecuali hari libur)
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center gap-4 pt-2 flex-wrap">
                {/* ... (Logo pembayaran tetap sama) ... */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
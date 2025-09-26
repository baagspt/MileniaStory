import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, ShoppingCart, Search } from "lucide-react";

interface NavItem {
  title: string;
  url: string;
  submenu?: {
    title: string;
    url: string;
    description?: string;
  }[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: NavItem[];
}

export default function Navbar({ 
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "MileniaStory logo",
    title: "MileniaStory",
  },
  menu = [
    { title: "Beranda", url: "#" },
    { 
      title: "Tema Undangan", 
      url: "#tema-wedding", 
      submenu: [
        { title: "All Themes", url: "#", description: "Lihat semua tema undangan" },
        { title: "Elegant", url: "#", description: "Tema elegan dan mewah" },
        { title: "Romantic", url: "#", description: "Tema romantis penuh cinta" },
        { title: "Minimalist", url: "#", description: "Tema sederhana namun indah" },
        { title: "Vintage", url: "#", description: "Tema klasik dengan sentuhan antik" },
      ]
    },
    { title: "Tentang Kami", url: "#" },
    { title: "Kontak", url: "#" },
  ],
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className="py-0 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="w-8 h-8 object-contain" alt={logo.alt} />
            <span className="font-bold text-lg">{logo.title}</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menu.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors flex items-center"
                      onMouseEnter={() => setOpenDropdown(item.title)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.title}
                    </button>
                    {openDropdown === item.title && (
                      <div 
                        className="absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5"
                        onMouseEnter={() => setOpenDropdown(item.title)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.url}
                              className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <div className="font-semibold">{subItem.title}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground mt-1">{subItem.description}</div>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.url}
                    className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-2">
              {menu.map((item) => (
                <div key={item.title}>
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full text-left px-4 py-2 flex justify-between items-center"
                        onClick={() => toggleDropdown(item.title)}
                      >
                        <span>{item.title}</span>
                        <span>{openDropdown === item.title ? '▲' : '▼'}</span>
                      </button>
                      {openDropdown === item.title && (
                        <div className="pl-6 py-2 space-y-2">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.title}
                              href={subItem.url}
                              className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                            >
                              <div className="font-semibold">{subItem.title}</div>
                              {subItem.description && (
                                <div className="text-xs text-muted-foreground">{subItem.description}</div>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.url}
                      className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
'use client';

import { useEffect, useState } from 'react';
import { Menu, FileText } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/utils';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));

    function handleScroll() {
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 20);

      const current = sections.find((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
      });

      if (current) {
        setActiveSection(current.id);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleNavClick(href) {
    const targetSection = document.querySelector(href);
    if (!targetSection) return;

    const headerHeight = 72;
    const targetPosition = targetSection.offsetTop - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border/60'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent-foreground transition-colors"
        >
          Mohammad<span className="text-accent-foreground"> </span>Sazzad
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                activeSection === link.href.slice(1)
                  ? 'text-accent-foreground bg-accent'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-1">
            <ThemeToggle />
          </div>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="ml-1">
            <Button variant="default" size="sm" className="gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile: Theme toggle + Sheet Trigger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetHeader className="border-b border-border px-5 py-4">
                <SheetTitle className="text-left text-base font-semibold text-foreground">
                  Mohammad<span className="text-accent-foreground">.</span>Sazzad
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        'flex items-center rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        activeSection === link.href.slice(1)
                          ? 'text-accent-foreground bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <div className="mt-3 pt-3 border-t border-border">
                  <SheetClose asChild>
                    <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="w-full gap-2">
                        <FileText className="h-4 w-4" />
                        Download Resume
                      </Button>
                    </a>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

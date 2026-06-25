import { socialLinks, profile } from '@/data/portfolio';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Resume', href: profile.resume, external: true }
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="sm:col-span-1">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Mohammad<span className="text-accent-foreground"> </span>Sazzad
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-xs">
              Full-stack developer who builds real products for real people.
            </p>
            <div className="flex gap-2 mt-4">
              {socialLinks.map((link) => {
                const SIcon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-accent-foreground/30 hover:text-accent-foreground hover:bg-accent transition-all"
                    title={link.label}
                  >
                    <SIcon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-accent-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>sazzad19@student.sust.edu</li>
              <li>Sylhet, Bangladesh</li>
              <li>Open to opportunities</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mohammad Sazzad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowDown, ExternalLink } from 'lucide-react';
import { profile, socialLinks } from '@/data/portfolio';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[72px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50/40 dark:from-sky-950/30 dark:via-background dark:to-indigo-950/30 pointer-events-none" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-sky-100/60 to-transparent dark:from-sky-900/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-100/50 to-transparent dark:from-indigo-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">

            <div>
              <p className="text-sm font-semibold text-accent-foreground tracking-widest uppercase mb-2">Hello, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.08]">
                {profile.name.split(' ')[0]}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
                  {profile.name.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-muted-foreground">{profile.role}</p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground max-w-lg">{profile.summary}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#projects">
                <Button variant="default" size="lg" className="gap-2 shadow-md">
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </a>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Find me on</span>
              <div className="h-px w-8 bg-border" />
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all"
                  title={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-sky-400 via-indigo-400 to-sky-300" />
              {/* Inner shadow ring */}
              <div className="absolute -inset-0.5 rounded-full bg-background" />
              {/* Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full shadow-xl">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

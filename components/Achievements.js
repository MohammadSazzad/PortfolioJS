import { ExternalLink } from 'lucide-react';
import { achievements } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Involvement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">Honors</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Competitions, awards, and certifications that shaped my journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-border/70 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col">
                <CardContent className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 text-amber-600 dark:text-amber-400 ring-1 ring-amber-100 dark:ring-amber-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-xs font-medium text-muted-foreground">{item.meta}</span>
                    {item.link && (
                      <a href={item.link.href} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-accent-foreground hover:text-accent-foreground/80 hover:bg-accent px-2">
                          {item.link.label}
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

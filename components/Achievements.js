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
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Involvement & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Honors</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Competitions, awards, and certifications that shaped my journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="border-slate-200/70 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex flex-col">
                <CardContent className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-50 to-orange-50 text-amber-600 ring-1 ring-amber-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-xs font-medium text-slate-400">{item.meta}</span>
                    {item.link && (
                      <a href={item.link.href} target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="sm" className="h-7 gap-1 text-xs text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-2">
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

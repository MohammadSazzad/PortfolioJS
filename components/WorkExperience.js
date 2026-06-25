import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Where I&apos;ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">worked</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Professional experience building production software for real users.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.company} className="border-border/70 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950 dark:to-indigo-950 text-accent-foreground ring-1 ring-accent">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                        <p className="text-sm font-medium text-accent-foreground">{exp.role}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="shrink-0 gap-1.5 text-xs font-normal text-muted-foreground border-border self-start">
                      <Calendar className="h-3 w-3" />
                      {exp.date}
                    </Badge>
                  </div>

                  {/* Summary */}
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4 ml-[60px]">{exp.summary}</p>

                  {/* Impact List */}
                  <div className="ml-[60px] mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Key Contributions</p>
                    <ul className="space-y-1.5">
                      {exp.impact.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-foreground" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 ml-[60px]">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

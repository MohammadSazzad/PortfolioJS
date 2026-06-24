import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const categoryOrder = ['Featured', 'Full Stack', 'Backend Heavy', 'Commerce', 'AI/ML', 'API'];

const sortedProjects = [...projects].sort(
  (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Work</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Real-world applications I&apos;ve built from the ground up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sortedProjects.map((project) => (
            <Card
              key={project.title}
              className="group border-slate-200/70 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="accent" className="text-[11px] font-semibold uppercase tracking-wider">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="flex flex-col gap-4 p-5 flex-1">
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-sky-600 font-medium">{project.subtitle}</p>
                </div>

                {/* Problem & Outcome */}
                <div className="space-y-2 text-sm text-slate-600 flex-1">
                  <p className="leading-relaxed">{project.problem}</p>
                  <p className="leading-relaxed">{project.outcome}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.links.map((link) => {
                    const isSource = link.label.toLowerCase().includes('source');
                    return (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={isSource ? 'outline' : 'default'}
                          size="sm"
                          className={isSource ? 'gap-1.5 border-slate-300 text-xs' : 'gap-1.5 bg-slate-900 hover:bg-slate-800 text-xs'}
                        >
                          {isSource ? <Code2 className="h-3.5 w-3.5" /> : <ExternalLink className="h-3.5 w-3.5" />}
                          {link.label}
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

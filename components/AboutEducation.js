import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { aboutHighlights, education } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutEducation() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* About */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                About 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                  me
                </span>
              </h2>
            </div>

            <p className="text-base leading-relaxed text-slate-600">
              I&apos;m Mohammad Sazzad, a Software Engineering student and full-stack developer. I like building things that work
              — from database schemas and APIs to frontend interfaces and cloud deployments. Nothing fancy, just solid
              software that solves real problems.
            </p>

            <Separator className="my-4" />

            <ul className="space-y-3">
              {aboutHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Academic <span className="text-sky-600">Background</span>
              </h2>
            </div>

            <div className="space-y-4">
              {education.map((item, index) => (
                <Card key={item.institution} className="border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-50 to-indigo-50 text-sky-600 ring-1 ring-sky-100">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-sky-600 uppercase tracking-wider">{item.degree}</h3>
                        <p className="text-base font-semibold text-slate-800 mt-0.5">{item.institution}</p>
                        <p className="text-sm text-slate-500 mt-1">{item.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

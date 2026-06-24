import { Mail, Phone, MapPin, FileText, Send } from 'lucide-react';
import { profile, socialLinks, contactCards } from '@/data/portfolio';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const iconMap = {
  Mail,
  Phone,
  MapPin,
  WalletCards: FileText
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Connect</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Have a question, opportunity, or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Left: Contact Info */}
          <div className="md:col-span-2 space-y-4">
            {contactCards.map((item) => {
              const Icon = iconMap[item.icon] || Mail;
              const isResume = item.label === 'Resume';
              const card = (
                <Card
                  key={item.label}
                  className={`border-slate-200/70 shadow-sm hover:shadow-md transition-all ${isResume ? 'bg-gradient-to-br from-sky-50 to-indigo-50/50 ring-1 ring-sky-100 cursor-pointer' : ''}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isResume ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-slate-400">{item.label}</p>
                        {item.href && !isResume ? (
                          <a
                            href={item.href}
                            className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-slate-800 truncate">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              if (isResume) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {card}
                  </a>
                );
              }
              return card;
            })}

            {/* Social */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Social</p>
              <div className="flex gap-2">
                {socialLinks.map((link) => {
                  const SIcon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-sky-200 hover:text-sky-600 hover:bg-sky-50 transition-all"
                      title={link.label}
                    >
                      <SIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: CTA Message */}
          <div className="md:col-span-3">
            <Card className="border-slate-200/70 shadow-sm h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center h-full">
                <div className="space-y-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-indigo-50 text-sky-600 ring-1 ring-sky-100">
                    <Send className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Want to work together?</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      I&apos;m currently open to full-stack, backend, and software engineering roles. Whether you have a project,
                      an opportunity, or just want to connect — I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  <Separator />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="mailto:sazzad19@student.sust.edu?subject=Let's Collaborate&body=Hi Mohammad Sazzad,%0D%0A%0D%0AI would like to discuss..."
                    >
                      <Button variant="default" className="bg-slate-900 hover:bg-slate-800 text-white gap-2 w-full sm:w-auto">
                        <Mail className="h-4 w-4" />
                        Send Email
                      </Button>
                    </a>
                    <a href={profile.resume} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="gap-2 border-slate-300 w-full sm:w-auto">
                        <FileText className="h-4 w-4" />
                        Download CV
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

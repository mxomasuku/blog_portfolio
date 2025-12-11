import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  PageTransition,
  StaggerContainer,
  StaggerItem,
  FadeInView,
} from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Resume",
  description: "My professional journey, skills, and experience.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-16 md:py-24">
        <StaggerContainer className="max-w-3xl mb-16 space-y-4">
          <StaggerItem>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="w-8 h-px bg-primary" />
              <span className="font-display text-xs uppercase tracking-widest">
                Resume
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-serif text-display-lg">My Journey</h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A timeline of my professional growth and technical evolution, with a focus on Full-stack development, Flutter, and Systems Design.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Timeline */}
        <div className="max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border group-last:hidden" />

            <div className="space-y-16">


              {/* ShiftCatcher */}
              <FadeInView delay={0.1}>
                <article className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />
                  <span className="hidden md:block absolute left-0 top-0 text-xl font-serif text-muted-foreground/40">01</span>

                  <div className="space-y-6">
                    <div>

                      <Link href="https://shiftcatcher.uk/" target="_blank" className="underline decoration-primary hover:text-primary transition-colors duration-300">
                        <h2 className="text-2xl font-semibold" >ShiftCatcher</h2>
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        Upwork Contract · Nov 2023 - Present
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        I joined ShiftCatcher for my first official development job. Over 2240+ hours, I evolved from a frontend contributor to owning an internal customer-service tool that grew into a customer research and analytics dashboard. This role also gave me my first practical exposure to Flutter in a live product environment.
                      </p>

                      <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-2">2023 – Mid 2024</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Worked with React, Firebase, Chakra UI, Node, Google Cloud, and Shopify.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex gap-2">
                            <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Built a customer-service dashboard that evolved into an internal business management tool.</span>
                          </li>
                          <li className="flex gap-2">
                            <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Learnt to operate in a complex monorepo and collaborate remotely.</span>
                          </li>
                          <li className="flex gap-2">
                            <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Started learning Flutter directly inside the production workflow.</span>
                          </li>
                        </ul>


                      </div>

                      <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-2">Mid 2024 – Mid 2025</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Shifted to self-directed R&D, internal tooling, and mobile development.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex gap-2">
                            <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Strengthened Firebase expertise and scaled Node.js applications.</span>
                          </li>
                          <li className="flex gap-2">
                            <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Committed to mastering Flutter (Udemy course + production support).</span>
                          </li>
                          <li className="flex gap-2">
                            <ArrowUpRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>Converted Figma files into production-ready Flutter components during a redesign.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 p-5 rounded-lg border border-primary/20 bg-primary/5 relative overflow-hidden group">
                        <div className="absolute top-[-10px] right-[-10px] opacity-5 transition-opacity group-hover:opacity-10">
                          <Globe className="w-24 h-24 text-primary" />
                        </div>

                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                          <Globe className="w-4 h-4" />
                          Key Takeaway
                        </h4>
                        <p className="text-sm text-foreground/80 relative z-10 leading-relaxed">
                          My proudest achievement was mastering <strong>asynchronous collaboration</strong> across timezones. This role taught me the critical power of communication and foreplanning in distributed software teams.
                        </p>
                      </div>
                    </div>

                    <div className="border-l-2 border-primary/40 pl-4 py-2 italic text-muted-foreground bg-primary/5 rounded-r-lg">
                      Working as a freelancer here exposed how easily developers can become attached to their own products. This pushed me to study Information Systems to understand the business dynamics behind the software.
                    </div>
                  </div>
                </article>
              </FadeInView>

              {/* Trogern */}
              <FadeInView delay={0.2}>
                <article className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />
                  <span className="hidden md:block absolute left-0 top-0 text-xl font-serif text-muted-foreground/40">02</span>

                  <div className="space-y-4">
                    <div>
                      <Link href="https://trogern-logistics.web.app" target="_blank" className="underline decoration-primary hover:text-primary transition-colors duration-300">
                        <h2 className="text-2xl font-semibold">Trogern <span className="text-muted-foreground font-normal text-lg group-hover:text-primary/80"> — Multi-Tenant Fleet Management System</span></h2>
                      </Link>
                      <p className="text-sm font-medium text-primary mt-1">
                        Founder & Lead Engineer · 2025 - Present
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Building a fleet management platform for the African transport sector, starting with informal taxi fleets and scaling to trucking. This project demonstrates execution across architecture, product integration, DevOps, and business-aligned software delivery.
                    </p>

                    <div>
                      <h3 className="font-semibold text-sm uppercase tracking-wider mb-2">Responsibilities & Outcomes</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-5 marker:text-primary">
                        <li>Designed a multi-tenant architecture supporting companies, drivers, vehicles, service schedules, income logs, expense logs, and live operational data.</li>
                        <li>Built admin dashboards using <span className="text-foreground">React, TypeScript, Shadcn UI, and Firebase</span>.</li>
                        <li>Designing and integrating a Flutter client on top of the same multi-tenant backend to support drivers and operators in the field.</li>
                        <li>Built backend API services using <span className="text-foreground">Node.js, Express, Firebase Admin SDK, Cloud Run, Docker</span>.</li>
                        <li>Implemented authentication, session management, scheduled tasks, and data modeling for real-world fleet operations.</li>
                        <li>Managed the project end-to-end: requirements, architecture, development, testing, and iteration.</li>
                        <li>Applied system design principles (domain separation, clean architecture, scalable Firestore design).</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeInView>

              {/* Other Projects */}
              <FadeInView delay={0.3}>
                <article className="relative pl-8 md:pl-20">
                  <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />
                  <span className="hidden md:block absolute left-0 top-0 text-xl font-serif text-muted-foreground/40">03</span>

                  <h2 className="text-xl font-semibold mb-6">Other Projects & Collaborations</h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="group p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Syrhema</h3>
                      <p className="text-xs text-muted-foreground mb-2">Next.js, Tailwind, Firebase</p>
                      <p className="text-sm text-muted-foreground">Built the company’s digital presence and created an offline-friendly internal system for expense and project tracking.</p>
                    </div>

                    <div className="group p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors">
                      <Link href="https://loodabeats.netlify.app/" target="_blank" className="underline decoration-primary hover:text-primary transition-colors duration-300">
                        <h3 className="font-semibold text-lg transition-colors">Loodabeats</h3>
                      </Link>
                      <p className="text-xs text-muted-foreground mb-2">React, Firebase, Stripe</p>
                      <p className="text-sm text-muted-foreground">Developed an e-commerce system for selling beats with integrated payments and analytics.</p>
                    </div>

                    <div className="group p-4 border border-border rounded-lg bg-background hover:border-primary/50 transition-colors md:col-span-2">
                      <Link href="https://clearsky.app/" target="_blank" className="underline decoration-primary hover:text-primary transition-colors duration-300">
                        <h3 className="font-semibold text-lg transition-colors">Clearsky</h3>
                      </Link>
                      <p className="text-xs text-muted-foreground mb-2">Open Source Contribution</p>
                      <p className="text-sm text-muted-foreground">Contributed to frontend component architecture and modular refactors in a real OSS environment.</p>
                    </div>
                  </div>
                </article>
              </FadeInView>

            </div>
          </div>
        </div>

        <Separator className="my-16 max-w-3xl" />

        {/* Skills & Education Grid */}
        <div className="max-w-3xl grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <FadeInView delay={0.4}>
            <h2 className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Technical Skills
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide">Languages</h3>
                <p className="text-sm text-muted-foreground">TypeScript, Dart, JavaScript, PHP (academic)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide">Mobile</h3>
                <p className="text-sm text-muted-foreground">Flutter (Riverpod, Provider, Navigator 2.0), Clean Architecture patterns</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, Next.js, Tailwind, Chakra UI, Shadcn, Redux, Framer Motion</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Express, Firebase (Auth, Firestore, Storage, Functions), PostgreSQL, REST APIs</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide">Cloud & DevOps</h3>
                <p className="text-sm text-muted-foreground">Google Cloud Run, Firebase Hosting, Docker, CI/CD, Monorepo workflows</p>
              </div>
            </div>
          </FadeInView>

          {/* Education & Experience */}
          <FadeInView delay={0.5}>
            <h2 className="font-display text-xs uppercase tracking-widest text-muted-foreground mb-8">
              Education & Background
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-lg font-medium">BSc Information Systems</h3>
                <p className="text-sm text-primary">Great Zimbabwe University (Ongoing)</p>
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium">Certifications</h3>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Meta Frontend Certificate</li>
                  <li>• Flutter & Dart Complete Guide (Udemy)</li>
                </ul>
              </div>

              <div className="bg-muted/20 p-5 rounded-lg border border-border/50">
                <h3 className="font-semibold text-sm uppercase tracking-wide mb-2 text-foreground">Former Science Teacher</h3>
                <p className="text-sm text-muted-foreground">
                  Former high-school Physics & Chemistry teacher. Provided foundational communication, structured thinking, and instructional design skills useful for technical documentation and team communication.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* CTA */}
        <FadeInView delay={0.6}>
          <div className="max-w-3xl mt-16 p-8 bg-muted/50 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-1">Looking for a versatile engineer?</h3>
                <p className="text-sm text-muted-foreground">
                  I bring a mix of disciplined structure, system thinking, and full-stack execution.
                </p>
              </div>
              <Button asChild>
                <Link href="/contact">
                  Let&apos;s Talk
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeInView>
      </div>
    </PageTransition>
  );
}

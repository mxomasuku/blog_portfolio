"use client";

import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Work = () => {
  const pageTitle = "Work Experience";

  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <section className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        {/* Syrhema */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold">Syrhema Projects</h3>
            <p className="text-sm text-muted-foreground">
              Digital Consultant & Web Developer · 2025
            </p>
            <p className="mt-2 text-sm">
              Led the creation of Syrhema’s first digital identity. From organizing design
              workflows to launching the site, this was my first full local contract —
              proving my ability to build systems in real-world African business contexts.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Clearsky */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold">Clearsky (Open Source)</h3>
            <p className="text-sm text-muted-foreground">
              Volunteer Frontend Contributor · 2025
            </p>
            <p className="mt-2 text-sm">
              Joined via BlueSky. First real open-source contribution beyond tutorial-level code.
              Helped improve frontend component design and modular code practices in a real dev
              environment.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* ShiftCatcher */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold">ShiftCatcher Dashboard</h3>
            <p className="text-sm text-muted-foreground">
              Lead Frontend Dev (Upwork) · 2023–2024
            </p>
            <p className="mt-2 text-sm">
              Hired to build a customer service dashboard. Ended up turning it into a business
              management system. Specialized in data insights, UI state syncing, and scalable
              frontend logic. Stack: React, Firebase, Node, Google Cloud.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Freelance */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold">Freelance Developer</h3>
            <p className="text-sm text-muted-foreground">Upwork · 2022 – Present</p>
            <p className="mt-2 text-sm">
              2,500+ hours logged on Upwork. Focused on startup tooling, dashboards, and business
              systems. I specialize in fast delivery and long-term maintainability using React,
              Firebase, and clean UI logic.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Optional: Military */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold">Military Service</h3>
            <p className="text-sm text-muted-foreground">
              Zimbabwe Defence Forces · Early 2020s
            </p>
            <p className="mt-2 text-sm">
              The army taught me how to work under pressure, eliminate noise, and execute with
              discipline. That edge still shapes how I write code and manage client work today.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Work;
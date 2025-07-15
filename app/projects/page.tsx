"use client";

import PageHeader from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const pageTitle = "Projects";

  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Real World Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Real World Projects</h2>

          {/* Project Card */}
          <Card>
            <CardContent className="pt-6 space-y-2">
              <h3 className="text-lg font-semibold">ShiftCatcher Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                Freelance · Lead Frontend Developer
              </p>
              <p className="text-sm">
                Built a scalable shift & session tracking system using React, Firebase, Chakra UI,
                and Recharts. Managed real-time analytics, state logic, and clean UI design.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge>React</Badge>
                <Badge>Firebase</Badge>
                <Badge>Node.js</Badge>
                <Badge>Chakra UI</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Add more real-world projects here */}
        </div>

        <Separator />

        {/* Personal Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Personal Projects</h2>

          {/* BioSync */}
          <Card>
            <CardContent className="pt-6 space-y-2">
              <h3 className="text-lg font-semibold">BioSync</h3>
              <p className="text-sm text-muted-foreground">
                Solo Project · Health Tracking App (WIP)
              </p>
              <p className="text-sm">
                Built to track medical data like sleep, VO2 max, heart rate, and recovery.
                Uses Flutter + Firebase. Focus on long-term autonomy and doctor-usable insights.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge>Flutter</Badge>
                <Badge>Firebase</Badge>
                <Badge>Dart</Badge>
                <Badge>Clean Architecture</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Add more personal builds (Spotify Clone, Deathstroke, etc.) */}
        </div>
      </section>
    </>
  );
};

export default Projects;
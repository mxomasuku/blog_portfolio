"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

const FunStuff = () => {
  const pageTitle = "Fun Stuff";
  const [open, setOpen] = useState(true);

  return (
    <>
      <PageHeader pageTitle={pageTitle} />

      {/* Modal */}
<Dialog open={open} onOpenChange={setOpen}>
  <div className="fixed inset-0 flex items-center justify-center z-50 px-2 sm:px-0">
    <DialogContent
      className="max-w-3xl w-full border-none p-0 overflow-hidden animate-fadeIn"
      style={{
        backgroundImage: `url(/images/thumbnails/flutter.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/70 text-white p-6 sm:p-8 space-y-4 sm:space-y-6">
        <DialogTitle className="text-lg sm:text-2xl font-bold">
          Welcome to the Chaos
        </DialogTitle>
        <p className="text-sm sm:text-base">
          This page is where I reclaim the portfolio for myself — after all the effort
          trying to impress clients and employers. It will always be a work in progress,
          so don&apos;t worry too much if you click something and it breaks.
        </p>
        <Button
          variant="secondary"
          className="text-sm sm:text-base animate-bounce"
          onClick={() => setOpen(false)}
        >
          Let me in
        </Button>
      </div>
    </DialogContent>
  </div>
</Dialog>

      {/* Main Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Now Playing */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Now Playing</h2>
          <Card className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6">
            <Skeleton className="w-16 h-16 rounded-md" />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm text-muted-foreground">Loading from Spotify...</p>
              <p className="text-lg font-semibold">Track Title</p>
              <p className="text-sm">Artist Name</p>
            </div>
          </Card>
        </div>

        <Separator />

        {/* Playlists */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">My Playlists</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 px-1 sm:px-4 -mx-2 snap-x snap-mandatory">
            {["Gym", "Focus", "Black Metal", "Sleep"].map((playlist) => (
              <Card
                key={playlist}
                className="min-w-[70%] sm:min-w-[200px] snap-start shrink-0"
              >
                <CardContent className="pt-4 space-y-2">
                  <Skeleton className="w-full h-32 rounded-md" />
                  <p className="text-sm font-medium">{playlist} Vibes</p>
                  <Badge variant="secondary">Spotify</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Books */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Books I&apos;m Reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Clean Architecture",
              "Anarchy, State and Utopia",
              "The Psychology of Money",
            ].map((title) => (
              <Card key={title} className="h-full">
                <CardContent className="pt-4 space-y-1">
                  <Skeleton className="w-full h-40 rounded" />
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-xs text-muted-foreground">Currently reading</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Dev Experiments */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Now Experimenting With</h2>
          <Tabs defaultValue="spotify" className="w-full">
            <TabsList>
              <TabsTrigger value="spotify">Spotify API</TabsTrigger>
              <TabsTrigger value="ai">AI Lyrics</TabsTrigger>
              <TabsTrigger value="canvas">Canvas Toy</TabsTrigger>
            </TabsList>
            <TabsContent value="spotify">
              <p className="text-sm mt-4">
                Currently working on a live playlist viewer using Spotify&apos;s Web API + Next.js.
              </p>
            </TabsContent>
            <TabsContent value="ai">
              <p className="text-sm mt-4">
                Building a poetry generator that matches the current Spotify track mood using
                OpenAI + emotion tagging.
              </p>
            </TabsContent>
            <TabsContent value="canvas">
              <p className="text-sm mt-4">
                Trying animated canvas stuff with WebGL + music input.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default FunStuff;
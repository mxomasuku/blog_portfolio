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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const FunStuff = () => {
  const pageTitle = "Fun Stuff";
  const [open, setOpen] = useState(true);

  return (
    <>
      <PageHeader pageTitle={pageTitle} />

      {/* ✅ Intro Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-3xl w-[90vw] h-auto border-none p-0 overflow-hidden z-[60] animate-fadeIn"
          style={{
            backgroundImage: `url("/images/thumbnails/flutter.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black/70 text-white p-6 sm:p-8 space-y-4 sm:space-y-6 pointer-events-auto">
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
      </Dialog>

      {/* 🎯 Main Content */}
      <section>
        {/* Now Playing */}
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Now Playing</h2>
          <Card className="flex flex-col md:flex-row items-center gap-4 p-4 sm:p-6">
            <div className="flex flex-col items-center gap-2">
              <Skeleton className="w-20 h-20 md:w-24 md:h-24 rounded-md" />
              <Image
                src="/icons/spotify-logo.svg"
                alt="Spotify"
                width={60}
                height={20}
                className="opacity-80"
              />
            </div>
            <div className="text-center md:text-left w-full">
              <p className="text-xs text-muted-foreground md:text-sm">Loading from Spotify...</p>
              <p className="text-base font-semibold md:text-lg">Track Title</p>
              <p className="text-sm md:text-base">Artist Name</p>
            </div>
          </Card>
        </div>

        <Separator />

        {/* Playlists */}
        <div className="my-8">
   
              <div className="mb-2  pl-4">
               <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">My Playlists
           
                    </h2>

                        <Image
                      src="/icons/spotify-logo.svg"
                      alt="Spotify"
                      width={80}
                      height={24}
                      className="opacity-70"
                    />

          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 px-1 sm:px-4 -mx-2 snap-x snap-mandatory">
            {[
              { title: "Gym", description: "Aggressive reps & warcries" },
              { title: "Focus", description: "Code mode: No distractions" },
              { title: "Black Metal London In Love", description: "Bleak atmospheres & blast beats" },
              { title: "Sleep", description: "For recovery and calm" },
            ].map(({ title, description }) => (
              <Card
                key={title}
                className="min-w-[180px] sm:min-w-[180px] max-w-[200px] snap-start shrink-0"
              >
                <CardContent className="pt-3 px-3 pb-4 space-y-2">
                  <div className="flex justify-end">
               
                  </div>
                  <Skeleton className="w-full h-24 rounded-md" />
                  <p className="text-xs font-semibold leading-tight line-clamp-2">
                    {title} Vibes
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Books */}
         <div className="my-8">
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
          <div className="my-8">
            
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
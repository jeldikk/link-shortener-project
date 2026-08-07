import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignUpButton } from "@clerk/nextjs";
import { Link2, BarChart3, Shield, Zap, Globe, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Link2,
    title: "Shorten Any URL",
    description:
      "Turn long, unwieldy links into clean, shareable short URLs in seconds.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track clicks, referrers, and geographic data for every link you create.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your shortened link to the clipboard instantly with a single click.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Our redirects are optimised for speed — zero noticeable latency for your visitors.",
  },
  {
    icon: Globe,
    title: "Custom Aliases",
    description:
      "Choose a memorable slug for your links to reinforce your brand.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "All links are stored securely and remain active as long as you need them.",
  },
];

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs">
          <Zap className="size-3" />
          Free to get started
        </Badge>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Short links.{" "}
          <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Big impact.
          </span>
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          Shorten, share, and track your URLs with ease. Link Shortener gives
          you powerful analytics and a clean dashboard — all in one place.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <SignUpButton mode="modal">
            <Button size="lg" className="h-10 px-6">
              Get started for free
            </Button>
          </SignUpButton>
          <Button
            variant="outline"
            size="lg"
            className="h-10 px-6"
            render={<a href="#features" />}
          >
            See features
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="mt-3 text-muted-foreground">
              All the tools to manage and understand your links in one
              dashboard.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="pb-3">
                  <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t px-6 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Create your free account and start shortening links in under a
            minute.
          </p>
          <div className="mt-8">
            <SignUpButton mode="modal">
              <Button size="lg" className="h-10 px-8">
                Create free account
              </Button>
            </SignUpButton>
          </div>
        </div>
      </section>
    </div>
  );
}

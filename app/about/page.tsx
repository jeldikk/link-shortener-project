import {
  Link2,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Copy,
  Users,
  Clock,
} from "lucide-react";

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
      "Turn long, unwieldy links into clean, shareable short URLs in seconds. No account required to try it out.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Track clicks, referrers, and geographic data for every link you create. Understand your audience at a glance.",
  },
  {
    icon: Copy,
    title: "One-Click Copy",
    description:
      "Copy your shortened link to the clipboard instantly with a single click — no fuss, no friction.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Redirects",
    description:
      "Our redirects are optimised for speed — zero noticeable latency for your visitors, anywhere in the world.",
  },
  {
    icon: Globe,
    title: "Custom Aliases",
    description:
      "Choose a memorable slug for your links to reinforce your brand and make sharing even easier.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "All links are stored securely and remain active as long as you need them, backed by enterprise-grade infrastructure.",
  },
  {
    icon: Users,
    title: "Team-Friendly",
    description:
      "Manage links across your organisation with per-user accounts and a shared dashboard view.",
  },
  {
    icon: Clock,
    title: "Link History",
    description:
      "Every link you create is saved to your personal dashboard so you can revisit, edit, or delete it at any time.",
  },
];

const services = [
  {
    title: "Free Tier",
    description:
      "Get started at zero cost. Create unlimited short links, access basic click analytics, and enjoy one-click copy — no credit card needed.",
  },
  {
    title: "Pro Tier",
    description:
      "Unlock advanced analytics, custom aliases, and priority support. Perfect for marketers and power users who need deeper insights.",
  },
  {
    title: "Team Tier",
    description:
      "Collaborate with your whole team under a shared workspace. Centralised link management with role-based access control.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Badge variant="outline" className="gap-1.5 px-3 py-1 text-xs font-[Roboto]">
          <Link2 className="size-3" />
          About Link Shortener
        </Badge>

        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl font-[Roboto]">
          Simple links.{" "}
          <span className="bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent">
            Powerful insights.
          </span>
        </h1>

        <p className="max-w-xl text-base text-muted-foreground sm:text-lg font-[Roboto]">
          Link Shortener is a free, open-source URL management platform built
          for individuals, marketers, and teams. We make it easy to shorten,
          share, and track every link you publish.
        </p>
      </section>

      {/* Mission */}
      <section className="border-t bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-[Roboto]">Our mission</h2>
          <p className="mt-4 text-muted-foreground font-[Roboto]">
            We believe every link you share deserves to be clean, trustworthy,
            and insightful. Our mission is to give everyone — from solo creators
            to enterprise teams — the tools they need to understand and optimise
            their online presence, without the complexity or cost of traditional
            marketing platforms.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight font-[Roboto]">
              Features
            </h2>
            <p className="mt-3 text-muted-foreground font-[Roboto]">
              Everything you need to manage and understand your links in one
              place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title}>
                <CardHeader className="pb-3">
                  <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-base font-[Roboto]">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-[Roboto]">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Pricing tiers */}
      <section className="border-t bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight font-[Roboto]">
              Services &amp; Plans
            </h2>
            <p className="mt-3 text-muted-foreground font-[Roboto]">
              Start free and scale as you grow.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {services.map(({ title, description }) => (
              <Card key={title}>
                <CardHeader>
                  <CardTitle className="font-[Roboto]">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-[Roboto]">{description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

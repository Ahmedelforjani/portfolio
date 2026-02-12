"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilter } from "@/components/project-filter";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRightIcon, MapPinIcon, SendIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? DATA.projects
      : DATA.projects.filter(
          (p) => "category" in p && p.category === activeFilter
        );

  return (
    <main className="flex flex-col min-h-dvh space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1">
              {/* <BlurFadeText
                className="flex items-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                text={DATA.name}
                yOffset={8}
              /> */}
              <div className="flex items-center text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <BlurFadeText
                  className="-translate-y-2!"
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="max-w-[520px] md:text-xl">{DATA.description}</p>
              </BlurFade>
              {/* <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPinIcon className="size-3.5" />
                  <span>{DATA.location}</span>
                </div>
              </BlurFade> */}
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <Avatar className="size-28 border-2 border-border shadow-lg sm:size-32">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <p className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </p>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 7 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 9 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="w-full space-y-8 py-8">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-xs font-medium"
                >
                  My Projects
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Selected Projects
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground sm:text-lg">
                  A curated set of product, platform, and blockchain projects
                  focused on delivery quality and measurable impact.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <ProjectFilter active={activeFilter} onChange={setActiveFilter} />
          </BlurFade>

          <motion.div
            layout
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  // className={

                  // }
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    links={project.links}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="mx-auto max-w-lg">
              <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <SendIcon className="size-5 text-primary" />
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight">
                  Let&apos;s work together
                </h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Have a project in mind or want to discuss an opportunity?
                  I&apos;d love to hear from you.
                </p>
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Send me an email
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

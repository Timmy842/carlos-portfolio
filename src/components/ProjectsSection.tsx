import React from "react";
import { projects } from "@/lib/data";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Github, Shield, Code2 } from "lucide-react";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Projects
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const isSecurity = project.category === "security";
            return (
              <MotionWrapper key={project.title} delay={index * 0.15}>
                <GlassCard
                  className={`group overflow-hidden h-full flex flex-col transition-all duration-300 ${
                    isSecurity
                      ? "hover:border-green-500/40 dark:border-green-500/10"
                      : "hover:border-purple-500/40 dark:border-purple-500/10"
                  }`}
                >
                  <CardHeader
                    className={`${
                      isSecurity
                        ? "bg-gradient-to-r from-green-500/5 to-cyan-500/5"
                        : "bg-gradient-to-r from-purple-500/5 to-pink-500/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle
                        className={`text-center md:text-left transition-colors duration-300 ${
                          isSecurity
                            ? "group-hover:text-green-500"
                            : "group-hover:text-purple-500"
                        }`}
                      >
                        {project.title}
                      </CardTitle>
                      <span
                        className={`flex-shrink-0 flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${
                          isSecurity
                            ? "border-green-500/30 text-green-600 dark:text-green-400 bg-green-500/10"
                            : "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10"
                        }`}
                      >
                        {isSecurity ? (
                          <Shield className="h-3 w-3" />
                        ) : (
                          <Code2 className="h-3 w-3" />
                        )}
                        {isSecurity ? "Security" : "Dev"}
                      </span>
                    </div>

                    {project.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-1.5 py-0.5 rounded bg-muted/80 text-muted-foreground border border-border/50 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="flex-grow mt-2">
                    <ul className="list-disc ml-4 space-y-1 text-sm group-hover:space-y-2 transition-all duration-300">
                      {project.description.map((desc, i) => (
                        <motion.li
                          key={i}
                          className="text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {desc}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter
                    className={`flex justify-center md:justify-start items-center border-t border-border/30 ${
                      isSecurity
                        ? "bg-gradient-to-r from-green-500/5 to-cyan-500/5"
                        : "bg-gradient-to-r from-purple-500/5 to-pink-500/5"
                    }`}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm text-muted-foreground transition-colors group/link pt-8 ${
                        isSecurity
                          ? "hover:text-green-500"
                          : "hover:text-purple-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                      View on GitHub
                    </motion.a>
                  </CardFooter>
                </GlassCard>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

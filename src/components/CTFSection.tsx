import React from "react";
import { ctfPlatforms, certRoadmap } from "@/lib/data";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Target, Flag, Trophy, Shield } from "lucide-react";

function PlatformCard({
  platform,
  index,
}: {
  platform: (typeof ctfPlatforms)[number];
  index: number;
}) {
  const isGreen = platform.color === "green";

  return (
    <MotionWrapper delay={index * 0.15}>
      <motion.a
        href={platform.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.97 }}
        className="block h-full"
      >
        <GlassCard
          className={`p-5 h-full flex flex-col gap-3 cursor-pointer transition-all duration-300 ${
            isGreen
              ? "hover:border-green-500/40 dark:border-green-500/10"
              : "hover:border-red-500/40 dark:border-red-500/10"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold text-sm ${
                isGreen
                  ? "bg-green-500/15 text-green-500 border border-green-500/30"
                  : "bg-red-500/15 text-red-500 border border-red-500/30"
              }`}
            >
              {isGreen ? (
                <Target className="h-5 w-5" />
              ) : (
                <Flag className="h-5 w-5" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-base">{platform.name}</h3>
              <p
                className={`text-xs font-mono ${
                  isGreen ? "text-green-500/80" : "text-red-500/80"
                }`}
              >
                @{platform.username}
              </p>
            </div>
            <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground">{platform.stats}</p>
        </GlassCard>
      </motion.a>
    </MotionWrapper>
  );
}

function RoadmapItem({
  cert,
  index,
}: {
  cert: (typeof certRoadmap)[number];
  index: number;
}) {
  const isGoal = cert.status === "goal";
  const isTarget = cert.status === "target";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start gap-3"
    >
      <div
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          isGoal
            ? "border-yellow-500/60 bg-yellow-500/10"
            : "border-cyan-500/60 bg-cyan-500/10"
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isGoal ? "bg-yellow-500/70" : "bg-cyan-500/70"
          }`}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium leading-tight">{cert.name}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
      </div>
      <span
        className={`flex-shrink-0 text-xs px-2 py-0.5 rounded-full border ${
          isGoal
            ? "border-yellow-500/30 text-yellow-600 dark:text-yellow-400 bg-yellow-500/10"
            : "border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10"
        }`}
      >
        {isGoal ? "Objetivo" : "Próximo"}
      </span>
    </motion.div>
  );
}

export default function CTFSection() {
  return (
    <section id="ctf" className="py-12 relative">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-2 text-center md:text-left flex items-center gap-2">
            <Shield className="h-6 w-6 text-green-500" />
            CTF & Plataformas
          </h2>
          <p className="text-sm text-muted-foreground mb-8 text-center md:text-left">
            Práctica continua en entornos controlados de hacking ético
          </p>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {ctfPlatforms.map((platform, index) => (
            <PlatformCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>

        <MotionWrapper delay={0.2}>
          <GlassCard className="p-5 dark:border-cyan-500/10">
            <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-cyan-500" />
              Roadmap de Certificaciones
            </h3>
            <div className="space-y-4">
              {certRoadmap.map((cert, index) => (
                <RoadmapItem key={cert.name} cert={cert} index={index} />
              ))}
            </div>
          </GlassCard>
        </MotionWrapper>
      </div>
    </section>
  );
}

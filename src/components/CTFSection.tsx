import React from "react";
import { ctfPlatforms, certRoadmap } from "@/lib/data";
import { GlassCard } from "./ui/glass-card";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Target, Flag, Trophy, Shield, Swords } from "lucide-react";

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

export default function CTFSection() {
  const sharedCerts = certRoadmap.filter((c) => c.path === "both");
  const redCerts = certRoadmap.filter((c) => c.path === "red");
  const blueCerts = certRoadmap.filter((c) => c.path === "blue");

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
            <h3 className="text-base font-semibold mb-6 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-cyan-500" />
              Roadmap de Certificaciones
            </h3>

            {/* Shared foundation steps */}
            <div className="space-y-3 mb-6">
              {sharedCerts.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 border-cyan-500/60 bg-cyan-500/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-500/70" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium leading-tight">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/10">
                    Próximo
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Branch split label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-border/50" />
              <span className="text-xs text-muted-foreground px-2 font-mono whitespace-nowrap">
                bifurcación de ruta
              </span>
              <div className="flex-1 h-px bg-border/50" />
            </div>

            {/* Dual path */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Red Team path */}
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Swords className="h-4 w-4 text-red-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
                    Red Team
                  </span>
                </div>
                <div className="space-y-3">
                  {redCerts.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border-2 border-red-500/50 bg-red-500/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium leading-tight">{cert.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Blue Team path */}
              <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Blue Team / SOC
                  </span>
                </div>
                <div className="space-y-3">
                  {blueCerts.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border-2 border-blue-500/50 bg-blue-500/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium leading-tight">{cert.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </MotionWrapper>
      </div>
    </section>
  );
}

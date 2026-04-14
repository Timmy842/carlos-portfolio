import React from "react";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({
  skill,
  index,
  variant = "default",
}: {
  skill: string;
  index: number;
  variant?: "security" | "redteam" | "blueteam" | "default";
}) {
  const colorClass =
    variant === "security"
      ? "border-green-500/20 text-green-700 dark:text-green-400/90 bg-green-500/5"
      : variant === "redteam"
        ? "border-red-500/20 text-red-700 dark:text-red-400/90 bg-red-500/5"
        : variant === "blueteam"
          ? "border-blue-500/20 text-blue-700 dark:text-blue-400/90 bg-blue-500/5"
          : "border-purple-500/10 bg-muted/80";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`px-3 py-1 backdrop-blur-sm rounded-md text-sm border shadow-sm font-mono ${colorClass}`}
    >
      {skill}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-12 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Skills
          </h2>
        </MotionWrapper>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Security section header */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
              Ciberseguridad
            </span>
            <div className="flex-1 h-px bg-green-500/20"></div>
          </div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4 dark:border-green-500/10">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-green-500">◈</span> Core
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.cibersecurityGlobal.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} variant="security" />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4 dark:border-blue-500/10">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-blue-500">◈</span> SOC &amp; SIEM Tools
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.socTools.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} variant="blueteam" />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4 dark:border-blue-500/10">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-blue-500">■</span> Blue Team &amp; Defensive
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.blueTeam.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} variant="blueteam" />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4 dark:border-red-500/10">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-red-500">▶</span> Red Team &amp; Offensive
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.redTeam.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} variant="redteam" />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Development section header */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400">
              Desarrollo
            </span>
            <div className="flex-1 h-px bg-purple-500/20"></div>
          </div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🎨</span> Frontend Development
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.frontendDevelopment.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">⚙️</span> Backend Development
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.backendDevelopment.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🗄️</span> Database & Storage
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.databaseAndStorage.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={skillCategoryVariants}>
            <GlassCard className="p-4">
              <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                <span className="mr-2 text-xl">🧰</span> Tools & Services
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {skills.toolsAndServices.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

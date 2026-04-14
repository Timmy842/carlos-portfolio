import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin, Shield } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Subtle cyber grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.6 0.18 160) 1px, transparent 1px), linear-gradient(90deg, oklch(0.6 0.18 160) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            {/* Available badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Disponible para nuevas oportunidades
            </motion.div>

            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-2 mb-6"
              variants={childVariants}
            >
              <Shield className="h-4 w-4 text-green-500" />
              <p className="text-xl text-muted-foreground font-mono">
                {personalInfo.role}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4 mr-2" />
                {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-green-500/40"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          {/* Terminal-style bio block */}
          <div className="bg-[oklch(0.1_0_0)] dark:bg-[oklch(0.08_0_0)] border border-green-500/20 rounded-lg overflow-hidden shadow-lg shadow-green-500/5">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[oklch(0.15_0_0)] dark:bg-[oklch(0.12_0_0)] border-b border-green-500/15">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              <span className="ml-2 text-xs text-green-500/60 font-mono">~/carlos-garcia — soc-analyst.sh</span>
            </div>
            {/* Terminal content */}
            <div className="p-4 font-mono text-sm space-y-2">
              <div>
                <span className="text-cyan-500/80">carlos</span>
                <span className="text-green-500/60">@</span>
                <span className="text-cyan-500/80">hackwithcarlos</span>
                <span className="text-green-500/60">:~$</span>
                <span className="text-white/80 ml-2">whoami</span>
              </div>
              <p className="text-green-400/90 leading-relaxed pl-2">
                {personalInfo.description}
              </p>
              <div className="pt-1">
                <span className="text-cyan-500/80">carlos</span>
                <span className="text-green-500/60">@</span>
                <span className="text-cyan-500/80">hackwithcarlos</span>
                <span className="text-green-500/60">:~$</span>
                <span className="text-white/80 ml-2">cat skills.txt | grep SOC</span>
              </div>
              <div className="pl-2 flex flex-wrap gap-x-4 gap-y-1">
                {["SIEM", "Splunk", "ELK Stack", "Wazuh", "Incident Response", "Threat Hunting", "Log Analysis", "IOC Analysis", "Wireshark", "MITRE ATT&CK"].map((s) => (
                  <span key={s} className="text-blue-400/80 text-xs">✓ {s}</span>
                ))}
              </div>
              <div>
                <span className="text-cyan-500/80">carlos</span>
                <span className="text-green-500/60">@</span>
                <span className="text-cyan-500/80">hackwithcarlos</span>
                <span className="text-green-500/60">:~$</span>
                <span className="terminal-cursor text-white/50 ml-2"></span>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}

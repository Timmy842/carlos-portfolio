import React from "react";
import { awards } from "@/lib/data";
import { Trophy, ExternalLink, Shield, Code2 } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

const securityCerts = awards.filter((a) =>
  a.skills.some((s) =>
    ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "SQL Injection"].includes(s)
  )
);
const devCerts = awards.filter(
  (a) =>
    !a.skills.some((s) =>
      ["Metasploit", "Burp Suite", "Nmap", "Wireshark", "SQL Injection"].includes(s)
    )
);

function CertCard({
  certification,
  index,
  isSecurity,
}: {
  certification: (typeof awards)[number];
  index: number;
  isSecurity: boolean;
}) {
  return (
    <MotionWrapper key={certification.name + certification.date} delay={index * 0.1}>
      <GlassCard
        className={`p-4 transition-all duration-300 flex flex-col h-full ${
          isSecurity
            ? "dark:border-green-500/10 hover:border-green-500/30"
            : "dark:border-blue-500/10 hover:border-blue-500/30"
        }`}
      >
        <div className="flex items-start gap-2 mb-2">
          <motion.div
            whileHover={{ rotate: 20 }}
            transition={{ type: "spring", stiffness: 500 }}
            className={`flex-shrink-0 flex items-center justify-center rounded-full p-1.5 ${
              isSecurity
                ? "bg-gradient-to-r from-green-500 to-cyan-500"
                : "bg-gradient-to-r from-blue-500 to-purple-500"
            }`}
          >
            {isSecurity ? (
              <Shield className="h-4 w-4 text-white" />
            ) : (
              <Trophy className="h-4 w-4 text-white" />
            )}
          </motion.div>
          <h3 className="font-medium text-sm leading-tight">{certification.name}</h3>
        </div>

        <p className="text-xs text-muted-foreground mb-2 pl-8">
          {certification.institution}
        </p>

        {certification.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3 pl-8">
            {certification.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className={`text-xs px-1.5 py-0.5 rounded border font-mono ${
                  isSecurity
                    ? "border-green-500/20 text-green-600 dark:text-green-400/80 bg-green-500/5"
                    : "border-blue-500/20 text-blue-600 dark:text-blue-400/80 bg-blue-500/5"
                }`}
              >
                {skill}
              </span>
            ))}
            {certification.skills.length > 5 && (
              <span className="text-xs text-muted-foreground px-1.5 py-0.5">
                +{certification.skills.length - 5} more
              </span>
            )}
          </div>
        )}

        <div className="flex justify-between items-center mt-auto">
          <span className="text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md">
            {certification.date}
          </span>
          <motion.a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full border transition-colors ${
              isSecurity
                ? "border-green-500/30 hover:bg-green-500/10 text-green-600 dark:text-green-400"
                : "border-blue-500/30 hover:bg-blue-500/10 text-blue-600 dark:text-blue-400"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink className="h-3 w-3" />
            Ver credencial
          </motion.a>
        </div>
      </GlassCard>
    </MotionWrapper>
  );
}

export default function AwardsSection() {
  return (
    <section
      id="awards"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            Certifications
          </h2>
        </MotionWrapper>

        {securityCerts.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4 text-green-500" />
              <h3 className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">
                Ciberseguridad
              </h3>
              <div className="flex-1 h-px bg-green-500/20"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {securityCerts.map((cert, index) => (
                <CertCard
                  key={cert.name + cert.date}
                  certification={cert}
                  index={index}
                  isSecurity={true}
                />
              ))}
            </div>
          </div>
        )}

        {devCerts.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-4 w-4 text-blue-500" />
              <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Desarrollo
              </h3>
              <div className="flex-1 h-px bg-blue-500/20"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {devCerts.map((cert, index) => (
                <CertCard
                  key={cert.name + cert.date}
                  certification={cert}
                  index={index}
                  isSecurity={false}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

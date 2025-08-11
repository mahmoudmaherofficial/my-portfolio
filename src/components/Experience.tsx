/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function Experience() {
  const { t } = useTranslation();

  const experiences: any = t("experiences", { returnObjects: true });

  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-text mb-12">
          {t("experience")}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative border-l border-border pl-8">
          {experiences.map((exp: any, index: number) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.01 }} className="mb-10 relative">
              <span className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                <FaBriefcase size={14} />
              </span>

              <h3 className="text-xl font-semibold text-text">{exp.role}</h3>
              <p className="text-text-muted text-sm mb-1">{exp.company}</p>
              <span className="text-xs text-accent">{exp.period}</span>
              <p className="text-text-muted mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

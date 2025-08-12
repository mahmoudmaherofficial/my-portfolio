import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiBootstrap, SiExpress } from "react-icons/si";
import Spikes from "./utils/Spikes/Spikes";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-text" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-text" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <section id="skills" className="py-16 bg-bg-secondary">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-text">
            {t("skills")}
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex flex-col items-center p-6 bg-bg rounded-2xl border border-border shadow-lg cursor-pointer hover:shadow-xl transition">
                <motion.div whileHover={{ rotate: -5 }} className="text-5xl mb-3">
                  {skill.icon}
                </motion.div>
                <span className="text-text-muted font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Spikes />
    </>
  );
}

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-bg-secondary py-6 mt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Text */}
        <motion.p variants={itemVariants} className="text-text-muted text-sm text-center md:text-left">
          © {new Date().getFullYear()} {t("footer_rights")}
        </motion.p>

        {/* Links */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-text-muted">
          <a href="#" className="hover:text-primary transition">
            {t("nav_home")}
          </a>
          <a href="#about" className="hover:text-primary transition">
            {t("nav_about")}
          </a>
          <a href="#projects" className="hover:text-primary transition">
            {t("nav_projects")}
          </a>
          <a href="#skills" className="hover:text-primary transition">
            {t("skills")}
          </a>
          <a href="#experience" className="hover:text-primary transition">
            {t("experience")}
          </a>
          <a href="#contact" className="hover:text-primary transition">
            {t("nav_contact")}
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-4 text-xl text-text-muted">
          <a title="Email" href="mailto:mahmoudmaherofficial@gmail.com" className="hover:text-primary transition">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoudmaherofficial2/"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/mahmoudmaherofficial"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition">
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}

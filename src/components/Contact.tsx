import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_bto2puk", // استبدل بـ Service ID
        "template_28h2e28", // استبدل بـ Template ID
        {
          title:'Email from portfolio',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "A3cdoYYySRN2G3gXe" // استبدل بـ Public Key
      )
      .then(
        () => {
          alert(t("contact_success"));
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert(t("contact_error"));
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-text mb-12">
          {t("contact_title")}
        </motion.h2>

        {/* Contact Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row justify-center gap-8 mb-12">
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="mailto:mahmoudmaherofficial@gmail.com"
            className="flex items-center gap-3 text-text-muted hover:text-primary transition">
            <FaEnvelope className="text-2xl" />
            {t("contact_email")}
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/mahmoudmaherofficial2/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-muted hover:text-primary transition">
            <FaLinkedin className="text-2xl" />
            {t("contact_linkedin")}
          </motion.a>

          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            href="https://github.com/mahmoudmaherofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-muted hover:text-primary transition">
            <FaGithub className="text-2xl" />
            {t("contact_github")}
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg mx-auto bg-bg-secondary p-6 rounded-2xl shadow-lg">
          <motion.input
            name="name"
            value={formData.name}
            onChange={handleChange}
            variants={itemVariants}
            type="text"
            placeholder={t("contact_name")}
            className="w-full mb-4 px-4 py-2 border border-border rounded-lg bg-transparent text-text"
            required
          />
          <motion.input
            name="email"
            value={formData.email}
            onChange={handleChange}
            variants={itemVariants}
            type="email"
            placeholder={t("contact_email_placeholder")}
            className="w-full mb-4 px-4 py-2 border border-border rounded-lg bg-transparent text-text"
            required
          />
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            variants={itemVariants}
            placeholder={t("contact_message")}
            rows={5}
            className="w-full mb-4 px-4 py-2 border border-border rounded-lg bg-transparent text-text"
            required></motion.textarea>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-semibold">
            {t("contact_send")}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

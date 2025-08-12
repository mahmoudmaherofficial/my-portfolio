import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "LuxeLane Store",
      description: t("project_1"),
      image: "/luxelane-thumbnail.webp",
      live: "https://code404.site",
      github: "https://github.com/mahmoudmaherofficial/luxelane-frontend",
    },
    {
      title: "Cell Store",
      description: t("project_2"),
      image: "/cellstore-thumbnail.webp",
      live: "https://cell-store.netlify.app/",
      github: "https://github.com/mahmoudmaherofficial/new-cell-store",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-text">
          {t("projects")}
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-bg-secondary border border-border rounded-lg overflow-hidden transition-all shadow hover:shadow-lg hover:-translate-y-1 duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-top" loading="lazy" />
              <div className="p-5 flex flex-col">
                <h3 className="text-xl font-semibold text-text mb-2">{project.title}</h3>
                <p className="text-text-muted flex-grow">{project.description}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:underline">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-1 text-accent hover:underline">
                    <FontAwesomeIcon icon={faGithub} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

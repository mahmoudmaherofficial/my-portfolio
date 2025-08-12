// About.tsx
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { LuCode, LuSquareTerminal, LuRocket } from "react-icons/lu";
import Spikes from "./utils/Spikes/Spikes";

const cards = [
  { key: "about_card_1", icon: LuCode },
  { key: "about_card_2", icon: LuSquareTerminal },
  { key: "about_card_3", icon: LuRocket },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="bg-bg-secondary py-16">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Image - smaller & responsive */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="flex justify-center">
              <img
                src={t("about_img")}
                alt="About Me"
                className="object-cover h-48 sm:h-56 md:h-72"
                loading="lazy"
              />
            </motion.div>
      
            {/* Cards */}
            <div className="flex flex-col gap-6">
              {cards.map((c, idx) => {
                const Icon = c.icon;
                return (
                  <motion.article
                    key={c.key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 ,transition:{ delay: idx * 0.15, duration: 0.3 } }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      transition: { duration: 0.3, delay: 0 }, // instant hover, no delay
                    }}
                    className="flex items-center gap-4 p-5 transition-all rounded-lg bg-bg hover:shadow-lg">
                    <div className="flex items-center justify-center text-2xl rounded-md w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 text-accent">
                      <Icon />
                    </div>
                    <p className="text-base text-text-muted sm:text-lg">{t(c.key)}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
        <Spikes />
    </>
  );
}

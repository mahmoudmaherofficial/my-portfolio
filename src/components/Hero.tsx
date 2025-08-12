import { useTranslation } from "react-i18next";
import Button from "./Button";
import Typewriter from "./utils/typeWriter";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative content-center min-h-[calc(100vh-70px)] mt-[70px] py-5 md:py-10 lg:py-0">
      <div className="background"></div>
      <div className="container flex flex-col-reverse items-center gap-5 px-6 lg:px-16 lg:flex-row justify-evenly">
        {/* Text */}
        <div className="z-10 flex-1 basis-4/5">
          <h1 className="flex flex-col lg:items-center mb-4 text-4xl font-bold lg:gap-2 lg:flex-row lg:text-5xl text-text">
            <span>{t("welcome")}</span>
            <Typewriter
              words={[t("name"), ...t("title").split(" ")]}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
            />
          </h1>
          <p className="mb-6 text-lg text-text-muted">{t("about")}</p>
          <a href="#projects">
            <Button>{t("button")}</Button>
          </a>
        </div>

        {/* Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative inline-block p-3 overflow-hidden lg:p-4 rounded-xl">
            <div
              className={`absolute top-1/2 left-1/2 w-1/2 h-[150%] -translate-x-1/2 -translate-y-1/2 ${t(
                "hero_img_bg"
              )} bg-gradient-to-br from-indigo-600 to-teal-500 rounded-2xl z-0`}
            />
            <img
              src="/me.webp"
              alt="Mahmoud"
              loading="lazy"
              className="relative z-10 w-full max-w-[400px] rounded-xl bg-bg transition-transform duration-300 hover:scale-103"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

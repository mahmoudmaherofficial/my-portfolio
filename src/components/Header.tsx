import { useTranslation } from "react-i18next";
import ThemeToggle from "./utils/ThemeToggle";
import LanguageToggle from "./utils/LanguageToggle";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 z-[999] w-full bg-bg-transparent backdrop-blur-2xl border-b border-border shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
          {t("logo")}
        </div>

        {/* Always visible toggles */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

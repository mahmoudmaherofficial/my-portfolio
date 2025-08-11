import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          logo: "mm.",
          hero_img_bg: "-rotate-[35deg]",
          welcome: "Hello, I'm",
          about: "A passionate Web Developer crafting beautiful & performant websites.",
          name: "Mahmoud Maher",
          title: "Frontend Developer",
          button: "View my work",
          about_img: "/about-en.svg",
          about_card_1:
            "I’m a frontend developer who enjoys turning designs into smooth, responsive, and interactive websites.",
          about_card_2:
            "I work with modern tools and frameworks to build clean, user-friendly interfaces that work on any device.",
          about_card_3:
            "I’m always learning new ways to make the web faster, better, and more enjoyable for everyone.",
          projects: "My Projects",
          project_1:
            "A modern online clothing store built with Next.js, Express, and MongoDB, delivering a seamless shopping experience. Includes a powerful Admin Dashboard to manage products, orders, and users with ease — designed for speed, flexibility, and scalability.",
          project_2:
            "A responsive phone showcase website built with React and Bootstrap. Displays a collection of mobile devices with their descriptions and features. Designed purely for presentation without a backend, focusing on clean UI and smooth browsing experience.",
          skills: "Skills & Technologies",
          experience: "Experience",
          experiences: [
            {
              role: "Frontend Developer",
              company: "Freelance",
              period: "2025 – Present",
              description:
                "Building responsive, user-friendly websites using React, Next.js, and Tailwind CSS."
            },
            {
              role: "Frontend Developer Intern",
              company: "NTG Clarity",
              period: "2024",
              description:
                "Completed a frontend development internship focusing on building and optimizing web interfaces using React, JavaScript, and modern UI frameworks."
            },
            {
              role: "Full-Stack Developer",
              company: "Personal Projects",
              period: "2022 – 2023",
              description:
                "Developed full-stack applications with Next.js, Express, and MongoDB, including admin dashboards."
            },
            {
              role: "Intern Developer",
              company: "Tech Startup",
              period: "2021",
              description:
                "Contributed to front-end features and improved UI performance using modern frameworks."
            }
          ],
          contact_title: "Get in Touch",
          contact_email: "mahmoudmaherofficial",
          contact_linkedin: "My LinkedIn",
          contact_github: "My GitHub",
          contact_name: "Your Name",
          contact_email_placeholder: "Your Email",
          contact_message: "Your Message",
          contact_send: "Send Message",
          contact_success: "Your message has been sent successfully!",
          contact_error: "Failed to send your message. Please try again.",
          "footer_rights": "All rights reserved.",
          nav_about: "About Me",
          "nav_home": "Home",
          "nav_projects": "Projects",
          "nav_contact": "Contact"

        }
      },
      ar: {
        translation: {
          logo: "محمود ماهر",
          hero_img_bg: "rotate-[35deg]",
          welcome: "مرحباً، أنا",
          about: "أنا مطور ويب شغوف أصنع مواقع جميلة وعالية الأداء.",
          name: "محمود ماهر",
          title: "مطور واجهات-أمامية",
          button: "شاهد أعمالي",
          about_img: "/about-ar.svg",
          about_card_1:
            "أنا مطور واجهة أمامية أستمتع بتحويل التصميمات إلى مواقع ويب سلسة ومتجاوبة وتفاعلية.",
          about_card_2:
            "أعمل مع الأدوات والأطر الحديثة لبناء واجهات نظيفة وسهلة الاستخدام تعمل على أي جهاز.",
          about_card_3:
            "أتعلم دائمًا طرقًا جديدة لجعل الويب أسرع وأفضل وأكثر متعة للجميع.",
          projects: "مشاريعي",
          project_1:
            "متجر ملابس عصري عبر الإنترنت تم تطويره باستخدام Next.js وExpress وMongoDB، يقدم تجربة تسوق سلسة وسريعة. مزود بلوحة تحكم إدارية قوية لإدارة المنتجات والطلبات والمستخدمين بسهولة، مع تصميم مرن وقابلية عالية للتوسع.",
          project_2:
            "موقع عرض تفاعلي للهواتف المحمولة تم تطويره باستخدام React وBootstrap، يعرض مجموعة من الأجهزة مع وصفها وميزاتها. مخصص للعرض فقط بدون باك إند، مع واجهة نظيفة وتجربة تصفح سلسة.",
          skills: "المهارات والتقنيات",
          experience: "الخبرات",
          experiences: [
            {
              role: "مطور واجهات أمامية",
              company: "عمل حر",
              period: "2023 – الآن",
              description:
                "بناء مواقع متجاوبة وسهلة الاستخدام باستخدام React و Next.js و Tailwind CSS."
            },
            {
              role: "متدرب مطور واجهات أمامية",
              company: "شركة NTG Clarity",
              period: "2024",
              description:
                "أكملت تدريباً في تطوير الواجهات الأمامية، ركز على بناء وتحسين واجهات الويب باستخدام React وJavaScript وأطر عمل واجهات حديثة."
            },
            {
              role: "مطور متكامل",
              company: "مشاريع شخصية",
              period: "2022 – 2023",
              description:
                "تطوير تطبيقات متكاملة باستخدام Next.js و Express و MongoDB مع لوحات تحكم إدارية."
            },
            {
              role: "متدرب تطوير",
              company: "شركة ناشئة",
              period: "2021",
              description:
                "المساهمة في تطوير الواجهات الأمامية وتحسين الأداء باستخدام تقنيات حديثة."
            }
          ],
          contact_title: "تواصل معي",
          contact_email: "mahmoudmaherofficial",
          contact_linkedin: "لينكدإن الخاص بي",
          contact_github: "حساب GitHub",
          contact_name: "اسمك",
          contact_email_placeholder: "بريدك الإلكتروني",
          contact_message: "رسالتك",
          contact_send: "إرسال الرسالة",
          contact_success: "تم إرسال رسالتك بنجاح!",
          contact_error: "فشل في إرسال الرسالة. حاول مرة أخرى.",
          "footer_rights": "جميع الحقوق محفوظة.",
          nav_about: "عني",
          "nav_home": "الرئيسية",
          "nav_projects": "المشاريع",
          "nav_contact": "تواصل"
        }
      }
    },
    fallbackLng: "en",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng"
    },
    interpolation: {
      escapeValue: false
    },
    lng: localStorage.getItem("i18nextLng") || "en" // default to en if no stored lang
  });

export default i18n;

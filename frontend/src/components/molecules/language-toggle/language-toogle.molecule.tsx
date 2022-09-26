import { useState, useEffect } from "react";
import { Button } from "@/components/atoms";
import { useRouter } from "next/router";
import { image } from "@/commons/images";

const languages: Record<string, any> = {
  vi: {
    name: "Tiếng Việt",
    flag: image.flagVietNam,
  },
  en: {
    name: "English",
    flag: image.flagUsa,
  },
};

const LanguageToogle = () => {
  const [mounted, setMounted] = useState(false);
  const { locale } = useRouter();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <Button
        className="w-28 h-8 bg-gray-50 rounded dark:bg-slate-800 flex flex-row space-x-1 items-center justify-start px-2 hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
      >
        <img
          src={languages[locale as string].flag}
          className="w-5 h-5 rounded-full"
        />
        <span>{languages[locale as string].name}</span>
      </Button>
      <div
        className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        id="language-dropdown-menu"
      >
        <ul className="py-1" role="none">
          {Object.keys(languages).map((item, key) => (
            <li key={key}>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  {languages[item].name}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { LanguageToogle };

import Link from "next/link";

import { useLocale } from "@lib/hooks/useLocale";

const PoweredByCal = () => {
  const { t } = useLocale();
  return (
    <div className="text-xs text-center sm:text-right p-1">
      <Link href={`https://cal.com?utm_source=embed&utm_medium=powered-by-button`}>
        <a target="_blank" className="dark:text-white text-gray-500 opacity-50 hover:opacity-100">
          {t("powered_by")}{" "}
          <img
            className="dark:hidden w-auto inline h-[10px] relative -mt-px"
            src="https://149474761.v2.pressablecdn.com/wp-content/themes/six-usm/assets/img/6ix-logo-square.png"
            alt="Cal.6ix.com Logo"
          />
          <img
            className="hidden dark:inline w-auto h-[10px] relativ -mt-px"
            src="https://149474761.v2.pressablecdn.com/wp-content/themes/six-usm/assets/img/6ix-logo-square.png"
            alt="Cal.6ix.com Logo"
          />
        </a>
      </Link>
    </div>
  );
};

export default PoweredByCal;

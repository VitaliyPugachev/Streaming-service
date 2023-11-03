import cls from './LanguageSwitcher.module.scss';
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
         await i18n.changeLanguage(i18n.language === 'en' ? 'ru': 'en' )
    }

    return (
        <div
            className={cls.LanguageSwitcher}
            onClick={() => toggleLanguage()}
        >
            {t('LANGUAGE')}
        </div>
    )
}

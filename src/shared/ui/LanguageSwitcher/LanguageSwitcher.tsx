import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };


    return (
        <div
            className={cls.LanguageSwitcher}
            onClick={() => toggleLanguage()}
        >
            {t('LANGUAGE')}
        </div>
    );
});

import { useTranslation } from 'react-i18next';
import {memo, useCallback, useState} from 'react';
import cls from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = memo(() => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('RU');

    const toggleLanguage = useCallback(async () => {
        setLang(lang === 'RU' ? 'EN' : 'RU')
        if (i18n.changeLanguage) {
            await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
        }
    }, []);


    return (
        <div
            className={cls.LanguageSwitcher}
            onClick={() => toggleLanguage()}
        >
            {t('EN')}
        </div>
    );
});

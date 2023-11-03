import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/eng/translation.json'
import ru from './locales/ru/translation.json'

const defaultLanguage = 'en'

export const defaultNamespace = 'default'

export const resources = {
    'en': {
        [defaultNamespace]: en,
    },
    'ru': {
        [defaultNamespace]: ru,
    },
}

i18n.use(LanguageDetector)
    .use(initReactI18next).init({
    defaultNS: defaultNamespace,
    ns: [defaultNamespace],
    resources,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
        escapeValue: false,
    },
})

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENUS from './locales/en_us/en_us.json';
import PTBR from './locales/pt_br/pt_br.json';

const resources = {
    'en-us': ENUS,
    'pt-BR': PTBR
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng:navigator.language,
        interpolation: {
            escapeValue: false,
        }
    })
export default i18n;
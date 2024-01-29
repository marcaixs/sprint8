import { useTranslation } from 'react-i18next'
import enFlag from '../assets/img/eng.png'
import espFlag from '../assets/img/esp.png'
import catFlag from '../assets/img/cat.png'

type Locales = {
    [key: string]: {
      flag: string;
      title: string;
    };
  };

const locales: Locales = {
    en: { flag: enFlag, title: 'English' },
    esp: { flag: espFlag, title: 'Spanish' },
    cat: { flag: catFlag, title: 'Catalan' }
}
const Languages: React.FC = () => {
    const { i18n } = useTranslation();
    return (
        <div className='flex gap-2 my-2'>           
            {Object.keys(locales).map((locale) => (
                <div key={locale} className="w-9">
                    <button type="submit" onClick={() => i18n.changeLanguage(locale)}>
                        <img src={locales[locale].flag} alt={locales[locale].title} />
                    </button>
                </div>
            ))}            
        </div>
    );
};

export default Languages;
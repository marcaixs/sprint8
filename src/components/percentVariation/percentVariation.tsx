import { useElements } from "../../context/Context";
import { useTranslation } from 'react-i18next'


const PercentVariation = (): JSX.Element => {
    const {  percentageChange, sign } = useElements();
    const { t } = useTranslation();

    
    return (        
        <div className="text-xl font-bold text-black pb-5">
            <p>{sign}{percentageChange}%</p>
            <p>{t('RespecteAhir')}</p>
        </div>
    )    
}

export default PercentVariation
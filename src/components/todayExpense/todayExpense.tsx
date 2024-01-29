import { useElements } from "../../context/Context";



const TodayExpense = (): JSX.Element => {
    const { todayExpense } = useElements()
   
    return (        
        <div>
            <p className="text-3xl font-bold text-black pb-5">{todayExpense}€</p>
        </div>
    )    
}

export default TodayExpense
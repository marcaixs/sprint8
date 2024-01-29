import { createContext, ReactNode, useContext, useState } from "react";
import { useTranslation } from 'react-i18next'

const Context = createContext<ContextProps | undefined>(undefined)

export const useElements: () => ContextProps = (): ContextProps => { // eslint-disable-line react-refresh/only-export-components
  const context = useContext(Context)
  if (context == null) {
    throw new Error('useElements must be used within a ContextProvider')
  }
  return context
}

interface Props{
    children: ReactNode
}

interface ContextProps {
  weeksArray: WeekExpenses[],
  totalWeekBalance: number,
  todayExpense: number,
  yesterdayExpense: number,
  percentageChange: number
  daysData: string[],
  expensesDayData: number[],
  sign: string,
  currentWeek: number,
  changeWeek: (direction: 'next' | 'prev') => void
}

interface WeekExpenses {    
  [key: string]: number
  Monday: number
  Tuesday: number
  Wednesday: number
  Thursday: number
  Friday: number
  Saturday: number
  Sunday: number
}

export const ContextProvider: React.FC<Props> = ({children}) =>{
   const {t} = useTranslation();
   const [currentWeek, setCurrentWeek] = useState(0);

    const weeksArray: WeekExpenses[] = [
      {         
        Monday: 360,
        Tuesday: 220,
        Wednesday: 530,
        Thursday: 125,
        Friday: 465,
        Saturday: 140,
        Sunday: 350
    },
    {         
        Monday: 270,
        Tuesday: 520,
        Wednesday: 630,
        Thursday: 390,
        Friday: 105,
        Saturday: 80,
        Sunday: 360
    },
    {         
        Monday: 560,
        Tuesday: 230,
        Wednesday: 405,
        Thursday: 600,
        Friday: 190,
        Saturday: 300,
        Sunday: 580
    },
    {         
        Monday: 150,
        Tuesday: 320,
        Wednesday: 230,
        Thursday: 35,
        Friday: 240,
        Saturday: 85,
        Sunday: 35
    },
  ]

    const calculateWeekBalance = (week: WeekExpenses): number => {
      return Object.values(week).reduce((total, current) => total + current, 0);
    };
    const totalWeekBalance = calculateWeekBalance(weeksArray[currentWeek]);

    

    const getExpenseForDay = (dayIndex: number): number => {
      const adjustedIndex = (dayIndex === -1 || dayIndex === 0) ? 6 : dayIndex - 1;
      const day = Object.keys(weeksArray[currentWeek])[adjustedIndex];    
      return weeksArray[currentWeek][day];
    };
    const todayExpense = getExpenseForDay(new Date().getDay());
    const yesterdayExpense = getExpenseForDay(new Date().getDay() - 1);

    
    //Get the percentage change
    const calculatePercentageChange = (currentValue: number, previousValue: number): number => {
      return ((currentValue - previousValue) / previousValue) * 100;
    };
  
    const percentageChange = Number(calculatePercentageChange(todayExpense, yesterdayExpense).toFixed(2));
    const sign = percentageChange > 0 ? '+' : ''
    

    const daysData = Object.keys(weeksArray[currentWeek]).map(day => t(`days.${day}`));
    const expensesDayData = Object.values(weeksArray[currentWeek]);
    
   
    const changeWeek = (direction: 'next' | 'prev'): void => {
      const newWeek = direction === 'next' ? currentWeek + 1 : currentWeek - 1;
  
      if (newWeek >= 0 && newWeek < weeksArray.length) {
        setCurrentWeek(newWeek);
      }
    };

    const contextValue: ContextProps = {
        weeksArray,
        totalWeekBalance,
        todayExpense,
        yesterdayExpense,
        percentageChange,
        daysData,
        expensesDayData,
        sign,
        currentWeek,
        changeWeek
    }
       
    return (
      
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )
}

export default Context
/* eslint-disable react-refresh/only-export-components */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { useElements } from '../../context/Context'
  import TodayExpense from '../todayExpense/todayExpense'
  import PercentVariation from '../percentVariation/percentVariation'
  import { useTranslation } from 'react-i18next'

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  //Options
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false
      },
      
      
    },
    scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        }
      }
  };
  
  //Graphics
  export function Graphics() {
  const { daysData, expensesDayData } = useElements();
  const { t } = useTranslation();
  
  const data = {
    labels: daysData,
    datasets: [
      {
        label: 'Expenses',
        data: expensesDayData,
        backgroundColor: '#ea775c',
        hoverBackgroundColor: '#74b5bf',
      },
    ],
  };
    return (
        <div className='w-2/5 mx-auto bg-white rounded-3xl p-10 mt-5 font-sans' >
          <p className='text-3xl font-bold  text-black pb-5'>{t('DespesesSetmana')}</p>
          <Bar options={options} data={data} />
          <div className='my-5 border-t border-slate-300'></div>
          <p >{t('DespesesAvui')}</p>
          <div className='flex justify-between mt-3'>
            <TodayExpense/>
            <PercentVariation/>
          </div>            
        </div>
    )
    
    
  }
  
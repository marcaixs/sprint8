import './App.css'
import { ContextProvider } from './context/Context'
import ExpenseBalance from './components/expenseBalance/expenseBalance'
import { Graphics } from './components/graphic/graphic'
import { Suspense } from 'react'


function App() {
  
  return (
    <ContextProvider>      
      <ExpenseBalance/>
      <Graphics/>      
    </ContextProvider>
  )
}

export default function WrappedApp(){
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
    </Suspense>
  )
}


import { render } from '@testing-library/react';
import TodayExpenses from '../todayExpense/todayExpense';
import { ContextProvider } from '../../context/Context';

describe('TodayExpenses', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should render the component', () => {
      render(
        <ContextProvider>
          <TodayExpenses />
        </ContextProvider>
      );
  
  
    });
  });
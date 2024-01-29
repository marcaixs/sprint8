import { render } from '@testing-library/react';
import ExpenseBalance from '../expenseBalance/expenseBalance';


jest.mock('../../context/Context', () => ({
  useElements: jest.fn(() => ({
    totalWeekBalance: 100, 
  })),
}));

describe('ExpenseBalance Component', () => {
  it('should render ExpenseBalance component', () => {
    const { getByText } = render(<ExpenseBalance />);

  
    expect(getByText('Balanç total')).toBeTruthy();
   
  });
});

import { render } from '@testing-library/react';
import { Graphics } from '../graphic/graphic';
import { ContextProvider } from '../../context/Context';

describe('GraphicExpenses', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should render the component', () => {
      render(
        <ContextProvider>
          <Graphics />
        </ContextProvider>
      );
  
  
    });
  });
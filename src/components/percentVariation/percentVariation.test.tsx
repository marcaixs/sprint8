
import { render } from '@testing-library/react';
import PercentVariation from '../percentVariation/percentVariation';
import { ContextProvider } from '../../context/Context';

describe('PercentVariation', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });
  
    it('should render the component', () => {
      render(
        <ContextProvider>
          <PercentVariation />
        </ContextProvider>
      );
  
  
    });
  });
import { render as rtlRender, fireEvent, waitFor } from '@testing-library/react';
import TestWrapper from './wrapper';

/* eslint-disable import/prefer-default-export */
export function render(ui, options = {}) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return rtlRender(<TestWrapper {...options}>{ui}</TestWrapper>);
}

// Export all the utilities from react-testing-library, test-data-bot, and waait
export { fireEvent, waitFor };
export { build, fake, sequence } from 'test-data-bot';
export { default as delay } from 'waait';

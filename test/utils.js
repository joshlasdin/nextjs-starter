import React from 'react';
import { render as rtlRender, fireEvent, wait } from '@testing-library/react';
import TestWrapper from './wrapper';

/* eslint-disable import/prefer-default-export */
export function render(ui, options = {}) {
    return rtlRender(<TestWrapper {...options}>{ui}</TestWrapper>);
}

// Export all the utilities from react-testing-library, test-data-bot, and waait
export { fireEvent, wait };
export { build, fake, sequence } from 'test-data-bot';
export { default as delay } from 'waait';

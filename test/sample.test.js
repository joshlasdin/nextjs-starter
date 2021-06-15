import { render } from '@test/utils';

import IndexPage from 'pages/index';

it('renders the index page', () => {
  const test = render(<IndexPage />);
  expect(test).not.toThrow();
});

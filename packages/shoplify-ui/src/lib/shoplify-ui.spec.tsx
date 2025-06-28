import { render } from '@testing-library/react';

import ShoplifyUi from './shoplify-ui';

describe('ShoplifyUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShoplifyUi />);
    expect(baseElement).toBeTruthy();
  });
});

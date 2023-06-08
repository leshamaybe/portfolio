import Social from './Social';
import { render } from '@testing-library/react';

describe('Social', () => {
    it('Social renders correctly', () => {
        const { container } = render(<Social />);
        expect(container).toMatchSnapshot();
    });
});

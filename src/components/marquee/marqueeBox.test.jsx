import MarqueeBox from './MarqueeBox';
import { render } from '@testing-library/react';

describe('MarqueeBox', () => {
    it('MarqueeBox renders correctly', () => {
        const { container } = render(<MarqueeBox />);
        expect(container).toMatchSnapshot();
    });
});

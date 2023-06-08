import Error from './Error';
import { render } from '@testing-library/react';

describe('Error', () => {
    it('Error renders correctly', async () => {
        const { container } = render(<Error />);
        expect(container).toMatchSnapshot();
    });
});

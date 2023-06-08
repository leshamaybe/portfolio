import Header from './Header';
import { render, waitFor } from '@testing-library/react';

describe('Header', () => {
    it('Header renders correctly', async () => {
        const { container } = render(<Header />);

        await waitFor(() => {
            expect(container).toMatchSnapshot();
        });
    });
});

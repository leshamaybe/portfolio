import Layout from './Layout';
import { render, waitFor, screen } from '@testing-library/react';

describe('Layout', () => {
    it('Layout renders correctly', async () => {
        const { container } = render(<Layout />);
        await waitFor(() => {
            expect(container).toMatchSnapshot();
        });
    });
});

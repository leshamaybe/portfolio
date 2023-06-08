import Logo from './Logo';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Logo', () => {
    const fireResize = (width) => {
        window.innerWidth = width;
        window.dispatchEvent(new Event('resize'));
    };

    it('have a text', () => {
        render(<Logo />);

        const logoText = screen.getByText(/leshamaybe/i);

        expect(logoText).toBeInTheDocument();
    });

    it('have a logo', async () => {
        render(<Logo />);

        const logoSvg = screen.getByTestId('Logo');

        expect(logoSvg).toBeInTheDocument();
    });

    it("have't a logo if window size less then 480", async () => {
        render(<Logo />);

        const logoSvg = screen.getByTestId('Logo');

        await waitFor(() => {
            fireResize(480);
        });

        expect(logoSvg).not.toBeInTheDocument();
    });
});

import Logo from './Logo';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Logo', () => {
    it('have a text', () => {
        render(<Logo />);

        const logoText = screen.getByText(/leshamaybe/i);

        expect(logoText).toBeInTheDocument();
    });
});

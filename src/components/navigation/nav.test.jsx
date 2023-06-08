import Nav from './Nav';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Nav', () => {
    it('Nav renders correctly', () => {
        const { container } = render(<Nav />);

        expect(container).toMatchSnapshot();
    });
});

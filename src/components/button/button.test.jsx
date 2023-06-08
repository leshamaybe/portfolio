import Button from './Button';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Button', () => {
    it('Button renders correctly', async () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
});

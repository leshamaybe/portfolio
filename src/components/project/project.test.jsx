import Project from './Projects';
import { render } from '@testing-library/react';

describe('Project', () => {
    it('Project renders correctly', () => {
        const { container } = render(<Project />);
        expect(container).toMatchSnapshot();
    });
});

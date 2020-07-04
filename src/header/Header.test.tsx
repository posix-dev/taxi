import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';
import renderer, {act} from "react-test-renderer";

describe('renders learn react link', () => {
    const {getByTestId, getByText} = render(<Header/>);

    describe('init renders correctly', () => {
        expect(getByTestId('map')).toHaveTextContent("Карта");
        expect(getByTestId('profile')).toHaveTextContent("Профиль");
        expect(getByTestId('logout')).toHaveTextContent("Войти");

        it('snapshot test passed', () => {
            const tree = renderer.create(<Header/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

});

import React from 'react';
import renderer, {act} from 'react-test-renderer';
import {render, cleanup, fireEvent} from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
    const {getByTestId} = render(<Login/>);
    describe('init renders correctly', () => {
        expect(getByTestId('login')).toHaveTextContent("Имя пользователя");
        expect(getByTestId('myPassword')).toHaveTextContent("Пароль");
        expect(getByTestId('loginSubmit')).toBeTruthy();
        expect(getByTestId('loginSubmit')).toHaveAttribute("data-testid");

        it('snapshot test passed', () => {
            const tree = renderer.create(<Login/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('check init state', () => {
        it('expect correct change state when we fill email', () => {
            const mockedFunction = jest.fn();
            const input = getByTestId('login');
            input.onchange = mockedFunction;
            act(() => {
                fireEvent.change(input, {target: {value: 'My new value'}});
            });
            expect(mockedFunction).toHaveBeenCalled();
        });
    });
});

afterEach(cleanup);

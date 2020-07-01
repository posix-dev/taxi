import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent, getAllByTestId} from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
    describe('init', () => {
        const {getByTestId, getByText} = render(<Login/>);

        it('email input should display default value', () => {
            expect(getByTestId('login')).toHaveTextContent("Имя пользователя");
        });
        it('password input should display default value', () => {
            expect(getByTestId('myPassword')).toHaveTextContent("Пароль");
        });
        it('submit button is exist', () => {
            expect(getByTestId('loginSubmit')).toBeTruthy();
        });
        it('submit button has testId', () => {
            expect(getByTestId('loginSubmit')).toHaveAttribute("data-testid");
        });
        it('renders correctly', () => {
            const tree = renderer.create(<Login/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});

afterEach(cleanup);

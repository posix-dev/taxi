import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup, fireEvent, getAllByTestId} from '@testing-library/react';
import Registration from './Registration';

describe('Login', () => {
    describe('init', () => {
        const {getByTestId, getByText} = render(<Registration/>);

        it('email input should display default value', () => {
            expect(getByTestId('email')).toHaveTextContent("Адрес электронной почты");
        });
        it('password input should display default value', () => {
            expect(getByTestId('password')).toHaveTextContent("Пароль");
        });
        it('name input should display default value', () => {
            expect(getByTestId('name')).toHaveTextContent("Имя");
        });
        it('second name input should display default value', () => {
            expect(getByTestId('secondName')).toHaveTextContent("Фамилия");
        });
        it('submit button is exist', () => {
            expect(getByTestId('registrationSubmit')).toBeTruthy();
        });
        it('submit button has testId', () => {
            expect(getByTestId('registrationSubmit')).toHaveAttribute("data-testid");
        });
        it('renders correctly', () => {
            const tree = renderer.create(<Registration/>).toJSON();
            expect(tree).toMatchSnapshot();
        });
    })
});

afterEach(cleanup);

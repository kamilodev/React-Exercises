import React from 'react'
import {LoginScreen} from '../../../components/login/LoginScreen'
import {mount} from "enzyme";
import {AuthContext} from "../../../auth/AuthContext";
import {types} from "../../../types/types";

describe('Pruebas en <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>
)

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de realizar el dispatch y la navegacion', () => {
        const handleClick = wrapper.find('button').prop('onClick')

        handleClick()

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Camilo'
            }
        })

        expect(history.replace).toHaveBeenCalledWith('/')
        localStorage.setItem('lastPath', '/marvel')
        handleClick()
        expect(history.replace).toHaveBeenCalledWith('/marvel')
    })
})

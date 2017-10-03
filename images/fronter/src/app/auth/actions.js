import axios from 'axios'
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

// ..
import * as enums from './enums'

/**
 * server errors massage
 */

export const clearErrorsAction = () => {
    return async (dispatch) => {
        await dispatch({ type: enums.CLEAR_SERVER_ERRORS })
    }
}


/**
 * Sign in
 */
export const signinAction = (props) => {
    const { email, password } = props
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/auth/signin', { email, password })
            localStorage.setItem('user', JSON.stringify(res.data))
            await dispatch({ type: enums.SIGNIN_SUCCESS })
            await dispatch(push('/dashboard'))            
        } catch(err) {
            console.log(err)
            dispatch({
                type: enums.SIGNIN_FAIL,
                payload: "Email or password isn't right",
            })
        }
    }           
}

/**
 * Sign out
 */
export const actionSignout = () => {
    return async (dispatch) => {
        localStorage.clear()
        await dispatch({type: enums.SIGNOUT})
    }
}


/**
 * Sign up
 */
export const signupAction = (props) => {
    return async (dispatch) => {
        try {
            await axios.post('/api/auth/signup', props)
            await dispatch({ type: enums.SIGNUP_SUCCESS })
            await dispatch(push(`/auth/signup/waitconfirm?email=${props.email}`))
        } catch(err) {
            await dispatch({
                type: enums.SIGNUP_FAIL,
                payload: err.response.data.error,
            })
        }
    }
}

/**
 * verification code
 */
export const actionResendcode = (props) => {
  return async (dispatch) => {
    try {
        await axios.post('/api/auth/resendcode', props)
        await dispatch({ type: enums.RESENDCODE_SUCCESS })
    }catch(err){
        await dispatch({
            type: enums.RESENDCODE_FAIL,
            payload: err.response.data,
        })
    }
  }
}

export const actionVerifycode = (props) => {
  return async (dispatch) => {
    try {
        console.log('actionVerifycode')
        await axios.post('/api/auth/verifycode', props)
        // await dispatch({ type: enums.VERIFYCODE_SUCCESS })
    }catch(err){
        console.log(err)
        await dispatch({
            type: enums.VERIFYCODE_FAIL,
            payload: err.response.data,
        })
    }
  }
}



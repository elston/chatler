import * as enums from './enums'

// ...
export default (state = {}, action) => {

    // ...
    switch(action.type) {

        /**
         * server errors massage
         */
        case enums.CLEAR_SERVER_ERRORS:
            return { ...state, error: {} }

        /**
         * auth
         */
        case enums.SIGNIN_SUCCESS:
            return { ...state, authenticated: true, error: {} }

        case enums.SIGNIN_FAIL:
            return { ...state, authenticated: false, error: { signin: action.payload } }

        /**
         * signout
         */
        case enums.SIGNOUT:
            return { ...state, authenticated: false, error: {} }

        /**
         * sign up
         */ 
        case enums.SIGNUP_SUCCESS:
            return { ...state, signup: true, error: {} }

        case enums.SIGNUP_FAIL:
            return { ...state, signup: false, error: { signup: action.payload }}

        /**
         * resend code
         */ 
        case enums.RESENDCODE_SUCCESS:
            return { ...state, resendcode:true, error: {}}

        case enums.RESENDCODE_FAIL:
            return { ...state, resendcode:false, error: { resendcode: action.payload }}


        /*
        *   verify code
        */
        case enums.VERIFYCODE_SUCCESS:
            return { ...state, verifycode:true, error: {}}

        case enums.VERIFYCODE_FAIL:
            return { ...state, verifycode:false, error: { verifycode: action.payload }}        

    }

    // ...
    return state
}
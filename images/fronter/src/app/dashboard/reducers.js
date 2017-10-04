import * as enums from './enums'

export default (state = {}, action) => {
    switch(action.type) {

        case enums.ON_LINE_USER:
            return { ...state, usersCount: action.payload }

    }
    return state
}

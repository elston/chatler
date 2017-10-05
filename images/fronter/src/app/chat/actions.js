import * as enums from './enums'

export const actionOnlineUsers = (data) => {
    const { onlineUsers } = data
    return async (dispatch) => {
        await dispatch({ 
            type: enums.ON_LINE_USER ,
            payload: onlineUsers,
        })
    }
}


export const actionReceiveMessage = (props) => {
    return async (dispatch) => {
        await dispatch({
            type: enums.ON_MESSAGE ,
            payload: props,
        })
    }
}
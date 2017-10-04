import * as enums from './enums'

export const onlineUsers = (data) => {
    const { onlineUsers } = data
    // console.log(data)    
    return async (dispatch) => {
        await dispatch({ 
            type: enums.ON_LINE_USER ,
            payload: onlineUsers,
        })
    }
}
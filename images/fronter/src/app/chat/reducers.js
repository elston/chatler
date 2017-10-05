import * as enums from './enums'

export default (state = {}, action) => {
  switch(action.type) {

    case enums.ON_LINE_USER:
      return { ...state, onlineUsers: action.payload }
    
    case enums.ON_MESSAGE:
      const { messages=[] } = state
      return { ...state, messages: [...messages, action.payload] }  
  }
  return state
}

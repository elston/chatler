import React from 'react'
import PropTypes from 'prop-types'

const MessageListItem = (props) => {
  const { message } = props
  return (
    <li>
      { message.text } (<i>{ message.user.email }</i>)
    </li>
  )
}

MessageListItem.propTypes = {
  message: PropTypes.object.isRequired,
}

export default MessageListItem
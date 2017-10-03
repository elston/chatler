import React, { Component } from 'react'

// ...
export class plextForm extends Component {

    // ..
    constructor(props) {
        super(props)
    }

    // ..
    renderField({ input, type, placeholder, meta: { touched, error } }){
        // ..
        let errorClassName = ''
        let errorHelper = ''    
        // ..
        if (touched && error){
            errorClassName  = 'has-error' 
            errorHelper = (<div className="form-error">{error}</div>)
        }
        // ..
        return (
            <div className={`input-group ${errorClassName}`}>
                <input type={type} placeholder={placeholder} {...input} />
                { errorHelper }
            </div>
        )
    }
  
}
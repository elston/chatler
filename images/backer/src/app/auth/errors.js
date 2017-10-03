import ExtendableError from 'es6-error'

export class ResendCodeError extends ExtendableError {
    constructor(message) {
        super(message)
        this.code = 422
    }    
}

export class VerifyCodeError extends ExtendableError {
    constructor(message, allowresend=false) {
        super(message)
        this.code = 422
        this.allowresend = allowresend
    }    
}
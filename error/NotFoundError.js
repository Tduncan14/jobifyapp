import {StatusCodes} from 'http-status-codes'
import CustomAPIError from './CustomApiError.js'


class  NotFoundError extends CustomAPIError {

    constructor(message){
         super(message)


         this.statusCode = StatusCodes.BAD_REQUEST
    }






}

export default NotFoundError
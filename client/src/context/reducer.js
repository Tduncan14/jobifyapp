import { DISPLAY_ALERT,CLEAR_ALERT ,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR} from "./action";



const reducer = (state,action) => {

    if(action.type === DISPLAY_ALERT){

        return {...state,showAlert:true, alertType:'alert-danger', alertText:"Please provide all values!"}
    }


    if(action.type === CLEAR_ALERT){
        return {...state,showAlert:false,alertType:'', alertText:" "}
    }

    if(action.type === REGISTER_USER_BEGIN){
        return{...state, isLoading:true}
    }

    if(action.type === REGISTER_USER_SUCCESS){
        
        return {...state, isLoading:false,token:action.payload,
             user:action.payload.user,
             userLocation:action.payload.location,
             jobLocation:action.payload.location,
             showAlert:true,
             alertType:'success',
             alertText:'User created'
            }
    }



    if(action.type === REGISTER_USER_ERROR){
         
        return {
            ...state,
            isLoading:false,
            showAlert:true,
            alertType:'danger',
            alertText: action.payload.msg
        }
    }
}


export default reducer
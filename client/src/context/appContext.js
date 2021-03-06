import React,{useState,useReducer, useContent, useContext} from 'react';
import reducer from './reducer';
import { DISPLAY_ALERT,CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR} from './action';
import axios from 'axios'





const intialState = {

    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:'',
    user:null,
    token:'',
    userLocation:'',
    jobLocation:''

}

const AppContext = React.createContext()




const AppProvider = ({children })  => {

    const [state,dispatch] = useReducer(reducer,intialState);

    const displayAlert = () => {

        dispatch({type:DISPLAY_ALERT})

        clearAlert()


    }

    const clearAlert = () => {

        setTimeout(() =>{

            dispatch({type:CLEAR_ALERT})

        },3000)





    }


    const registerUser = async (currentUser) => {
        dispatch({type:REGISTER_USER_BEGIN})

        try{
            const response = await axios.post('http://localhost:5000/api/v1/auth/register',currentUser)
            console.log(response)
            const {user,token,location} =response.data;

            dispatch({type:REGISTER_USER_SUCCESS, payload:{user,token,location}})
            //local storage
        }
        catch(err){

            console.log(err.response);

            dispatch({type:REGISTER_USER_ERROR,payload:{msg:err}})
        }

        clearAlert()
    }


    



    return <AppContext.Provider value ={{...state,displayAlert,registerUser}}>
        {children}
    </AppContext.Provider>
}


const useAppContext = () => {

    return useContext(AppContext)
}


export {AppProvider,intialState,useAppContext}
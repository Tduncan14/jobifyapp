import React,{useState,useReducer, useContent, useContext} from 'react';
import reducer from './reducer';


const intialState = {

    isLoading:false,
    showAlert:false,
    alertText:'',
    alertType:''
}

const AppContext = React.createContext()




const AppProvider = ({children })  => {

    const [state,setState] = useState(intialState);


    return <AppContext.Provider value ={{...state}}>
        {children}
    </AppContext.Provider>
}


const useAppContext = () => {

    return useContext(AppContext)
}


export {AppProvider,intialState,useAppContext}
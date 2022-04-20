import {useEffect,useState} from 'react';
import Wrapper from '../wrappers/RegisterPage';
import {Logo,FormRow,Alert} from '../components/index';
import { useAppContext } from '../context/appContext';

const intitialState = {
    name:'',
    email:'',
    password:'',
    isMember:false,
}

const Register = () => {


    const [ values, setValues] = useState(intitialState);

    // global state and useNavigate


    const {isLoading,showAlert,displayAlert,registerUser} = useAppContext()

    console.log(values.isMember,'the beginning')


    const toggleMember = () => {

        setValues({...values, isMember: !values.isMember})

        
    }



    const handleChange = (e) => {

        setValues({...values,[e.target.name]:e.target.value})
    }


    const onSubmit =  async (e) => {
        e.preventDefault();
        const{name,email,password, isMember} = values;

        if(!email || !password ||  !name){
            displayAlert()
            return
        }

        const currentUser = {name,email,password}


        if(isMember){
            
            console.log('already a member',values)
        }
        else{
            await registerUser(currentUser)
            console.log(registerUser)
            setValues({...values, isMember:true})
         
        }
        


      
    }



    return (
     <Wrapper className="full-page">
         <form className="form" >
              {/* <Logo /> */}
              <h3>{!values.isMember ? "Register": "Login" }</h3>
              {showAlert && <Alert />}

               {!values.isMember && (

             <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>

               )}

              {/* name inpute */}

         
             

              <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>


              <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>

               <button type="submit" className="btn btn-block" onClick={onSubmit} disabled={values.isMember}>
                   submit
               </button>


               <p>
                   {values.isMember ? 'Already a member' : 'Not a member?'} 
                   <button type="button" onClick={toggleMember} className="member-btn">
                         {values.isMember ? 'Login' :'Register'}
                   </button>
               </p>

         </form>
     </Wrapper>
    )



}



export default Register
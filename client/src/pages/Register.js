import {useEffect,useState} from 'react';
import Wrapper from '../wrappers/RegisterPage';
import {Logo,FormRow,Alert} from '../components/index';

const intitialState = {
    name:'',
    email:'',
    password:'',
    isMember:'true',
    showAlert:true
}

const Register = () => {


    const [ values, setValues] = useState(intitialState);

    // global state and useNavigate


    const toggleMember = () => {

        setValues({...values, isMember: !values.isMember})

        
    }



    const handleChange = (e) => {

        console.log(e.target)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }



    return (
     <Wrapper className="full-page">
         <form className="form" onSubmit={onSubmit}>
              <Logo />
              <h3>{!values.isMember ? "Login": "Register" }</h3>

               {values.isMember && (

             <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>

               )}

              {/* name inpute */}

         
             

              <FormRow type="email" name="email" value={values.email} handleChange={handleChange}/>


              <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>

               <button type="submit" className="btn btn-block">
                   submit
               </button>


               <p>
                   {values.isMember ? 'Not a member' : 'Already a member?'} 
                   <button type="button" onClick={toggleMember} className="member-btn">
                         {values.isMember ? 'Register' :'Login'}
                   </button>
               </p>

         </form>
     </Wrapper>
    )



}



export default Register
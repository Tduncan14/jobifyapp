import React from 'react';
import main from '../assets/images/main-alternative.svg';
import styled from  'styled-components'
import Logo from '../components/Logo' 
import {Link} from 'react-router-dom';



const Landing = () => {



    return(
        <Wrapper>
      <nav>
        {/* <Logo /> */}
     
      </nav>

      <div className="container page">
        <div className="info">
          <h1>Job<span>Finder</span> App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis velit aliquid error vitae eligendi delectus maxime soluta est labore beatae molestias repudiandae provident et quas nemo, minima vel consectetur.
          
        </p>

        <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>

    

          <img src={main} alt="job hunt" className=" img main-img"/>
         
      </div>
      </Wrapper>
  

    )








}




const Wrapper = styled.main`

nav{
    width:var(--fluid-width);
    max-width:var(--max-width);
    margin:0 auto;
    height: var(--nav-height);
    display:flex;
    align-items:center;

}
  
  
.page{
    min-height: calc(100vh - var(--nav));
    display:grid;
    align-items:center;
    margin-top:-3rem;

}


  h1{
      font-weight:700;


      span{
          color:var(--primary-500);
      }
  }

  p{
      color:var(--grey-600);
  }
    

  .main-img{
      display:none;
  }

  @media only screen and (min-width: 992px) {
      .page{
          grid-template-columns: 1fr 1fr;
          column-gap:3rem;
      }


      .main-img{
          display:block;
      }
  }
  
  
  
`

export default Landing;
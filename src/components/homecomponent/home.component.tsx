import React from 'react'

import { Link } from 'react-router-dom';
import { NavComponent } from '../nav/nav.component';

export class HomeComponent extends React.Component {

    //render is one of the lifecycle methods of react
    //render will be called anytime a react component or any data in it changes

    render(){
        return(
           

            <div>
                <NavComponent/><br/>
                  
                   
                   <h1>Welcome to Employment Reimbursement System</h1>

                   <Link to='/login'>Login</Link>

            </div>




        )
    }
}
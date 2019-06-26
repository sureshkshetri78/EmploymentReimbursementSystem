import React from 'react'

import { Link } from 'react-router-dom';
import { NavLogOutComponent } from '../navlogout/navlogout.component';

// import axios from 'axios'


export class ReimbursementByStatusComponent extends React.Component<any, any>  {

    
    constructor(props: any) {
        super(props);
        this.state = {
            reimbursement: null
        }
    }

    

    getReimbursementByStatus = async () => {

        console.log('trying to get individual reimbursement')
        console.log(this.props) 

        try {
            let id = this.props.match.params.status_id
            const response = await fetch('http://localhost:9050/reimbursements/status/' + id, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })

            console.log(response);

           
            if (response.status === 200) {
                const resBody = await response.json()
                // resBody is an array of all Users
                console.log(resBody)

                this.setState({
                    reimbursement : resBody
                })
                // this.props.history.push('/users')

                // } else {
                //     document.getElementById('error-message').innerText = 'You Can\'t login right now'
            } else if (response.status === 401) {
                alert('Unauthorized, please login first!')
            }




        } catch (err) {
            console.log(err);
        }
    }


    //call the function getAllUsers() after first time render the page, this is the second time render the getAllUsers()
    componentDidMount() {
        this.getReimbursementByStatus()
    }

    


    render() {
        console.log(this.state) 

        return (
            <div className ="user"> 
            <NavLogOutComponent />  
            
            <br/><br/><h1>I am an individual user</h1><br/><br/>
             {/* we need && to check the this.state.user to see if it is truthy because we render this first time,
             the initial state is null if not check then break in the first time*/}
             {/* <p>{this.state.user && this.state.user.username}</p> */}
            {/* we can not put object directly in the Dom, we need JSON.stringify to transfer to "json" string
             to display in the browser */}
            {/* {JSON.stringify(this.state)} */}
             
            <h4 className="center">Find reimbursement by Status: {this.state.reimbursement && this.state.reimbursement.reimbursement_id}</h4>
            <p>Amount: {this.state.reimbursement && this.state.reimbursement.amount}</p>
            <p>Author: {this.state.reimbursement && this.state.reimbursement.author}</p>
            <p>DateResolved: {this.state.reimbursement && this.state.reimbursement.date_resolved}</p>
            <p>DateSubmitted: {this.state.reimbursement && this.state.reimbursement.date_submitted}</p>
            <p>Description: {this.state.reimbursement && this.state.reimbursement.description}</p>
            <p>ReimbursementId: {this.state.reimbursement && this.state.reimbursement.reimbursement_id}</p>
            <p>Resolver: {this.state.reimbursement && this.state.reimbursement.resolver}</p>
            <p>Status: {this.state.reimbursement && this.state.reimbursement.status}</p>
            <p>Type: {this.state.reimbursement && this.state.reimbursement.type}</p>

            <button className="btn btn-primary">
                <Link to='/reimbursements/status/' style={{color:"black", textDecoration:"none"}}>Go back to reimbursements</Link>
                </button>
            </div>
        )
    }
}
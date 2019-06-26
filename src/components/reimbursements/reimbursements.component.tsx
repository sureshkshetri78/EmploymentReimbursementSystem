import React from 'react'
import { Reimbursement } from '../../models/reimbursement';
import { NavLogOutComponent } from '../navlogout/navlogout.component';
import { Link } from 'react-router-dom'


interface IReimbursementsState {
    reimbursements: Reimbursement[]
}


export class ReimbursementsComponent extends React.Component<any, IReimbursementsState> {

    constructor(props: any) {
        super(props);
        this.state = {
            reimbursements: []
        }
    }
   

    getAllReimbursements = async () => {

        console.log('trying to get all reimbursements')
        console.log(this.props) 
        
        try {
            
            const response = await fetch('http://localhost:9050/reimbursements/status', {
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
                    reimbursements : resBody
                })
               
            } else if (response.status === 401) {
                alert('Unauthorized, please login first!')
            }




        } catch (err) {
            console.log(err);
        }
    }


    //call the function getAllUsers() after first time render the page, this is the second time render the getAllUsers()
    componentDidMount() {
        this.getAllReimbursements()
    }

    render() {
        const { reimbursements } = this.state
        const reimStatus =['pending', 'approved', 'Denied']
        return (
            
            <div className="getAllReimbursements">
                <NavLogOutComponent />
                <h1>Showing all reimbursements</h1><br/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Reimbursement ID</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Date Submitted</th>
                            <th>Date Resolved</th>
                            <th>Description</th>
                            <th>Resolver</th>
                            <th>Status</th>
                            <th>Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reimbursements.map((reimbursement) => {
                            return (
                                <tr key={reimbursement.reimbursement_id}>
                                    <td>{reimbursement.reimbursement_id}</td>
                                    <td>{reimbursement.author}</td>
                                    <td>{reimbursement.amount}</td>
                                    <td>{reimbursement.date_submitted}</td>
                                    <td>{reimbursement.date_resolved}</td>
                                    <td>{reimbursement.description}</td>
                                    <td>{reimbursement.resolver}</td>
                                
                                    <td><Link to={'/reimbursements/status/' + reimbursement.status}>{reimStatus[reimbursement.status - 1]}</Link></td>
                                    <td>{reimbursement.type}</td>
                                    <td><button className="btn btn-primary"><Link to={'/reimbursements/modify/' + reimbursement.reimbursement_id} style={{color:"white", textDecoration:"none"}}>Modify</Link></button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
 
                    
                
            </div>
                
            )
    }
}
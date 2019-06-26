import React from 'react'
import { User } from '../../models/user';
import { NavLogOutComponent } from '../navlogout/navlogout.component';
import { Link } from 'react-router-dom'
// import { NavComponent } from '../nav/nav.component';


interface IUsersState {
    users: User[]
}


export class UsersComponent extends React.Component<any, IUsersState> {

    constructor(props: any) {
        super(props);
        this.state = {
            users: []
        }
    }

    getAllUsers = async () => {

        console.log('trying to get all users')


        try {

            const response = await fetch('http://localhost:9050/users', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                }
            })

            console.log(response);

            // if(response.status === 401){
            //     this.setState({
            //         errorMessage:'Invalid Credentials'
            //     })
            // } else 
            if (response.status === 200) {
                const resBody = await response.json()
                // resBody is an array of all Users
                console.log(resBody)

                this.setState({
                    users : resBody
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
        this.getAllUsers()
    }

    render() {
        const { users } = this.state
        return (
            
            <div className="getAllUsers">
                <NavLogOutComponent />
                <h1>All Users</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Username</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.user_id}>
                                    <td><Link to={'/users/' + user.user_id}>{user.user_id}</Link></td>
                                    <td><Link to={'/reimbursements/author/userid/' + user.user_id}>{user.username}</Link></td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                
                <br/><br/><br/>

               
                    <button className="btn btn-primary"><Link to={'/reimbursements/'} style={{color:"white", textDecoration:"none"}}> Submit Your Reimbursement</Link></button>
                

                {/* <h1>Get reimbursement by status</h1>
                <ul>
                    <li><Link to={'/reimbursements/status' + this.state.reimbursement.status}>Pending</Link></li>
                    <li>Approved</li>
                    <li>Denied</li>
                </ul> */}
            </div>
                
            )
    }
}
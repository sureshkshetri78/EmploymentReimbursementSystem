import React from 'react'
import { NavLogOutComponent } from '../navlogout/navlogout.component';


export class SubmitReimbursementComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            author: '',
            amount: '',
            date_submitted: '',
            date_resolved: '',
            description: '',
            resolver: '',
            status: '',
            type: ''
        }
    }

    changeHandler = (e: { target: { name: any; value: any; }; }) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log(this.state)

        let newReimbursement = {
            author: this.state.author,
            amount: this.state.amount,
            date_submitted: this.state.date_submitted,
            date_resolved: this.state.date_resolved,
            description: this.state.description,
            resolver: this.state.resolver,
            status: this.state.status,
            type: this.state.type
        }

        try {

            const response = await fetch('http://localhost:9050/reimbursements', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(newReimbursement),
                headers: {
                    'content-type': 'application/json'
                }
            })



            console.log(response);

            
            if (response.status === 200) {
                const resBody = await response.json()
                // resBody is an array of all Users
                console.log(resBody)
            }

            
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const { author, amount, date_submitted, date_resolved, description, resolver, status,type } = this.state
        return (

            <div className="submitReimbursement">
                <NavLogOutComponent />

                <h1>Submit your reimbursement </h1>
                <form onSubmit={this.submitHandler} style={{ width: "35%", marginLeft: "3%" }}>
                    <div className="form-group" >
                        <label htmlFor="inputAuthor" style={{ float: "left" }}>Author</label>
                        <input type="text" name="author" value={author} onChange={this.changeHandler} className="form-control" id="inputAuthor" placeholder="Author" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAmount" style={{ float: "left" }}>Amount</label>
                        <input type="text" name="amount" value={amount} onChange={this.changeHandler} className="form-control" id="inputAmount" placeholder="Amount" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateSubmitted" style={{ float: "left" }}>Date Submitted</label>
                        <input type="text" name="date_submitted" value={date_submitted} onChange={this.changeHandler} className="form-control" id="inputDateSubmitted" placeholder="Date Submitted" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDateResolved" style={{ float: "left" }}>Date Resolved</label>
                        <input type="text" name="date_resolved" value={date_resolved} onChange={this.changeHandler} className="form-control" id="inputDateResolved" placeholder="Date Resolved" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputDescription" style={{ float: "left" }}>Description</label>
                        <input type="text" name="description" value={description} onChange={this.changeHandler} className="form-control" id="inputDescription" placeholder="Description" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputResolver" style={{ float: "left" }}>Resolver</label>
                        <input type="text" name="resolver" value={resolver} onChange={this.changeHandler} className="form-control" id="inputResolver" placeholder="Resolver" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputStatus" style={{ float: "left" }}>Status</label>
                        <input type="text" name="status" value={status} onChange={this.changeHandler} className="form-control" id="inputStatus" placeholder="Status" />

                    </div>

                    <div className="form-group">
                        <label htmlFor="inputType" style={{ float: "left" }}>Type</label>
                        <input type="text" name="type" value={type} onChange={this.changeHandler} className="form-control" id="inputType" placeholder="Type" />

                    </div>


                    <button type="submit" className="btn btn-primary" style={{ float: "left" }}>Submit</button>
                </form>

                <br /><br /><br />


                

            </div>

        )
    }
}

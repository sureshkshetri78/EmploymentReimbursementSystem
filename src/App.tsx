import React from 'react';
import './include/bootstrap'
import './App.css';

import { SignInComponent } from './components/signin/signin.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/homecomponent/home.component'
import { UsersComponent } from './components/userscomponent/users.component';
import { LogOutComponent } from './components/logoutcomponent/logout.component';
import { UserComponent } from './components/usercomponent/user.component';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { ReimbursementByUserComponent } from './components/reimbursememntbyuser/reimbursementbyuser.component';
import { ReimbursementByStatusComponent } from './components/reimbursementbystatus/reimbursementbystatus.component';
import { SubmitReimbursementComponent } from './components/submitreimbursement/submitreimbursement.component';
import { adminUsersComponent } from './components/adminusers/adminusers.components';
import { UpdateUserComponent } from './components/updateuser/updateuser.component';
import { UpdateReimbursementComponent } from './components/updatereimbursement/updatereimbursement.component';



const App: React.FC = () => {
  return (
    <BrowserRouter>
    
    <div className="App">
    
  
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path = '/user' component= {UserComponent}/>
        <Route path='/login' component={SignInComponent}/>
        <Route path='/home' component={HomeComponent}/>
        <Route exact path='/reimbursements/status' component={ReimbursementsComponent}/>
        {/*             we use render instead of component to give props in a route  */}
        {/* This is an example of a higher order component That is a component that wraps around another one and adds some functionality */}
        <Route exact path='/users' component={UsersComponent}/>  
        <Route path='/logout' component={LogOutComponent}/>
        <Route exact path='/users/:user_id' component={UserComponent}/>
        <Route path='/reimbursements/status/:status_id'  component={ReimbursementByStatusComponent}/>
        <Route path='/reimbursements/author/userid/:user_id'  component={ReimbursementByUserComponent}/>
        <Route exact path='/reimbursements'  component={SubmitReimbursementComponent}/>
        <Route path='/admin/users' component={adminUsersComponent}/>
        <Route exact path='/users/modify/:user_id' component={UpdateUserComponent}/>
        <Route exact path='/reimbursements/modify/:reimbursement_id' component={UpdateReimbursementComponent}/>
        <Route path = '/reimbursement' component= {ReimbursementsComponent}/>
        
      
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
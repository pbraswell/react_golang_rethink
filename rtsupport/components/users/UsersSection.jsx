import React, {Component} from 'react';
import UserForm from './UserForm.jsx';
import UserList from './UserLIst.jsx';

class UsersSection extends Component {
  render(){
    return(
      <div className='support panel panel-primary'>
        <div className='panel-heading'>
          <strong>Users</strong>
        </div>
        <div className='panel-body users'>
            <UserList {...this.props}/>
            <UserForm {...this.props}/>
        </div>
      </div>
    )
  }
}

UsersSection.propTypes = {
  users: React.PropTypes.array.isRequired,
  addUser: React.PropTypes.func.isRequired
}

export default UsersSection

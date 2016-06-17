import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UsersSection from './users/UsersSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      users: []
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    // TODO: Send this state to the server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: Get the latest messages from this channel from the server
  }
  addUser(name){
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});
  }
  render(){
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel = {this.addChannel.bind(this)}
            setChannel = {this.setChannel.bind(this)}
          />
          <UsersSection
            {...this.state}
            addUser = {this.addUser.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App

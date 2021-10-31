import React, { Component } from 'react';
import liff from '@line/liff';
import './Nav.css';

const liffId = '1656504242-NvmJWeO5';

class Login extends Component {


  constructor(props) {
    super(props);
    

    this.state = {
      pictureUrl: ''
    };
  }

  componentDidMount = async() => {
    await liff.init({ liffId: `${liffId}` }).catch(err=>{throw err});
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        pictureUrl: getProfile.pictureUrl,
      });
    }else{
      liff.login();
    }
  }
 

  render() {
    return (
      <div className="nav">
        {/* <header className="App-header">
          <div className="support"> */}
            <img
            className="nav_logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix_logo"
            
            />
           
            <img className="nav_profile_pic" alt='pic' src={this.state.pictureUrl} />
          </div>
    //     </header>
    //   </div>
    );
  }
}

export default Login;
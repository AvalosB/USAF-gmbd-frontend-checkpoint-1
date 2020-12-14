import './App.css';
import { Component } from 'react';
import NavigationBar from './components/nav-bar'
import { BrowserRouter as Router,
          Route,
          Link,
          Switch } from 'react-router-dom';

class App extends Component {
  state = { 
    isLoggedIn: false
   };
  
  logIn = (event) => {
    event.preventDefault()
    console.log("function has been run");
    this.setState({isLoggedIn: true})
  }


  render() {
   
   const loginScreenCondition = this.state.isLoggedIn ? 
    <div className="browsing-movies-all">browsing movies all</div>
    :
    (
       <form onSubmit={this.logIn} className="login-main-section">
         <label className='email-Label'>Email:</label>
         <input type='text' className='email-Input' placeholder="Email" />
         <label className='password-Label'>Password:</label>
         <input type='text' className='password-Input' placeholder="Password" />
         <button className='login-Button' type='submit' >Login</button>
      </form>
   )

    return (
      <div>
        <NavigationBar />
        {loginScreenCondition}
      </div>
    )
  }
}

export default App;

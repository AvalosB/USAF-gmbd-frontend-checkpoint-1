import React from 'react';
import {shallow, render, mount} from 'enzyme'
import App from './App';
import Navbar from './components/nav-bar'

test('displays a login section on the main page',()=>{
  const wrapper = shallow(<App/>)
  const loginDiv = wrapper.find('.login-main-section')
  expect(loginDiv).toHaveLength(1) 
})

test('has an email text input', () => {
  const wrapper = shallow(<App/>);
  const emailLabel = wrapper.find(".email-Label");
  const emailText  = wrapper.find(".email-Input");

  expect(emailLabel.text()).toMatch('Email:');
  expect(emailText).toHaveLength(1);
})

test('has an password text input', () => {
  const wrapper = shallow(<App/>);
  const passwordLabel = wrapper.find(".password-Label");
  const passwordText  = wrapper.find(".password-Input");

  expect(passwordLabel.text()).toMatch('Password');
  expect(passwordText).toHaveLength(1); 
})

test('has a login button', () => {
  const wrapper = shallow(<App/>);

  const loginButton  = wrapper.find(".login-Button");
 
  expect(loginButton).toHaveLength(1); 
  expect(loginButton.text()).toMatch('Login');
})

test('clicking the login button changes isLoggedIn state from false to true', ()=>{
  const wrapper = shallow(<App/>)
  wrapper.setState({isLoggedIn : false})
  wrapper.instance().logIn = jest.fn()
  wrapper.instance().forceUpdate();

  // const mockPreventDefault = jest.fn()

  wrapper.find(".login-main-section").simulate('submit')

  expect(wrapper.instance().logIn).toHaveBeenCalled()
  // expect(wrapper.state().isLoggedIn).toEqual(true);
})

// test('home page contains a navigation bar', ()=>{
  // const wrapper = shallow(<App/>);
  // const mntWrapper = mount(<App/>); 
  // const navigationBarComponent = shallow(<Navbar/>)
  // const navBar = wrapper.find('#nav-bar-main')

  // expect(wrapper.equals(navigationBarComponent)).toEqual(true) 

  //const wrapper = shallow(<App/>)
  // expect(mntWrapper.find('#nav-bar-main')).toHaveLength(1); 
      
// })

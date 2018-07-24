import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import configureStore from 'redux-mock-store'

// create any initial state needed
const initialState = {};
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();
let wrapper;
let store;

it('renders without crashing', () => {
  const div = document.createElement('div');
  beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState)
    wrapper = shallow(<App store={store}/>)
    ReactDOM.render( <App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});

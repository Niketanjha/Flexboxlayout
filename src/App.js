import React from 'react';
import './App.css'
import Flexbox2 from './Components/Flexbox2'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Flexbox1 from './Components/Flexbox1';

class App extends React.Component{
  render(){
    return(
      <div>
        <div style={{display:"flex",justifyContent:"space-around",width:"100vw"}}>
          <a href="/">Flex 1</a>
          <a href="/flexbox2">Flex 2</a>
          <a href="/flexbox3">Flex 3</a>
          <a href="/flexbox4">Flex 4</a>
        </div>
        <Switch>
          <Route exact path='/' component={Flexbox1}></Route>
          <Route exact path="/flexbox2" component={Flexbox2}></Route>
          <Route exact path='/flexbox3' ></Route>
        </Switch>
      </div>
    );
  }
}
export default App;
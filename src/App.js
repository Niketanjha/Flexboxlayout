import React from 'react';
import './App.css'

class App extends React.Component{
  render(){
    return(
      <div className="mainClass">
        <div className="headerClass">
          <span className="textClass">Header</span>
        </div>
        <div className="middleClass">
          <div className="articleClass">
            <span className="textClass">Article</span>
          </div>
          <div className="asideClass">
            <span className="textClass">Aside</span>
          </div>
          <div className="Nav">
            <span className="textClass" >Nav</span>
          </div>
        </div>
        <div className="footerClass">
          <span className="textClass">Footer</span>
        </div>
      </div>
    );
  }
}
export default App;
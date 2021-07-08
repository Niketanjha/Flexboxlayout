import React from 'react';
import './Flexbox2.css'

class Flexbox2 extends React.Component{
  render(){
    return(
      <div className="mainClass2">
        <div className="Nav2">
            <span className="textClass2" >Nav</span>
          </div>
          
        <div className="headerClass2">
          <span className="textClass2">Header2</span>
        </div>
        <div className="middleClass2">
          <div className="articleClass2">
            <span className="textClass2">Article</span>
          </div>
          <div className="asideClass2">
            <span className="textClass2">Aside</span>
          </div>
        </div>
        
        <div className="footerClass2">
          <span className="textClass2">Footer</span>
        </div>
      </div>
    );
  }
}
export default Flexbox2;
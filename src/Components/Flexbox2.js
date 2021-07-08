import React from 'react';
import './Flexbox2.css'

class Flexbox2 extends React.Component{
  render(){
    return(
      <div className="mainClass2">
        <div className="column1">
          <div className="Nav1">  
            <span className="textClass2" >Nav</span>
          </div> 
        </div>
        <div className="column2">
          <div className="headerClass1">
            <span className="textClass2">Header2</span>
          </div>
          <div className="downDiv">
            <div className="div1">
              <div className="articleClass2">
                <span className="textClass2">Article</span>
              </div>
              <div className="footerClass2">
                <span className="textClass2">Footer</span>
              </div>
            </div>
            <div className="div2">
              <div className="asideClass2">
                <span className="textClass2">Aside</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Flexbox2;
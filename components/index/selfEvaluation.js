import React from 'react';

class SelfEvaluation extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <p className="hing-div__evaluation">
      {this.props.evaluation}
      <style jsx>
      {`
      .hing-div__evaluation{
        box-sizing: border-box;
        max-width: 600px;
        margin: 0 auto;
        padding: 10px 20px;
      }
      `}
      </style>
      </p>
    );
  }
}

export default SelfEvaluation;
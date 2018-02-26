import React from 'react';

class SelfEvaluation extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="hing-div__selfevaluation">
      <h4>自我评价</h4>
      <ul>
      {
        this.props.evaluation.map( (val, index) => (
          <li key={index} className="hing-li__evaluation" dangerouslySetInnerHTML={{__html:val}}></li>
        ))
      }
      </ul>
      <style jsx>
      {`
      .hing-div__selfevaluation{
        max-width: 600px;
        box-sizing: border-box;
        padding:0 20px;
        margin-left: auto;
        margin-right: auto;
      }
      .hing-p__evaluation{
        box-sizing: border-box;
        max-width: 600px;
        margin: 0 auto;
      }
      `}
      </style>
      </div>
    );
  }
}

export default SelfEvaluation;
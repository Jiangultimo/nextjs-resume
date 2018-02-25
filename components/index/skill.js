import React from 'react';

class Skill extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const {title, val} = this.props.skill;
    return (
      <div className="hing-div__skill">
      <h4>{title}</h4>
      <ul>
      {
        val.map( (val, index) => {
          return (<li className="" key={index}>{val}</li>)
        })
      }
      </ul>
      <style jsx>
      {`
      .hing-div__skill{
        width: 100%;
        padding:0 20px;
        list-style:
      }
      `}
      </style>
      </div>
    )
  }
}

export default Skill;
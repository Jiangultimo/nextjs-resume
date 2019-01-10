import React from 'react';

import Header from './Header';

class Layout extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    // <Header intro={intro} style={style}/>
    // const {intro, style} = this.props;
    return(
      <div className="hing-div__wrapper clearfix">
        {this.props.children}
        <style jsx>
          {`
            .hing-div__wrapper{
              width: 100%;
            }
            `}
          </style>
          <style jsx global>
            {`
              body{
                margin: 0;
                font-size: 14px;
              }
              h4{
                font-size: 16px;
              }
              .clearfix{}
              .clearfix::after{
                clear: both;
                content:'';
                display: table;
                visibility: hidden;
              }
              a{
                color: #A5DEE4;
              }
              `}
            </style>
          </div>
    )
  }
}

export default Layout;

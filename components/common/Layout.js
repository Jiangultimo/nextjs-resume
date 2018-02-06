import React from 'react';

import Header from './Header';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        const {intro, style} = this.props;
        return(
            <div className="hing-div__wrapper clearfix">
                <Header intro={intro} style={style}/>
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
                }
                .clearfix{}
                .clearfix::after{
                    clear: both;
                    content:'';
                    display: table;
                    visibility: hidden;
                }
            `}
            </style>
            </div>
        )
    }
}

export default Layout;
import React from 'react';

import Header from './Header';

class Layout extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="hing-div__wrapper">
                <Header />
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
            `}
            </style>
            </div>
        )
    }
}

export default Layout;
import React from 'react';

class Content extends React.Component{
    static async getinitialProps({req}){
    }
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="hing-div__content">
            i am index content
            <style jsx>
            {`
            .hing-div__content{
                float: right;
            }
            `}
            </style>
            </div>
        )
    }
}

export default Content;
import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            headerHeight: 400
        }
    }
    componentDidMount(){
        console.log(window.innerHeight);
        this.setState({
            headerHeight: window.innerHeight
        })
        console.log(this.props);
    }
    render(){
        const {headerHeight} = this.state;
        const {intro, style} = this.props;
        const { widthUnit } = style;
        return (
            <header className="hing-header__wrapper">
                <img className="hing-img__avatar" src="../static/avatar.jpg" alt="我自己" />
                <div className="hing-div__intro">
                    <dl className="hing-dl__group">
                        {intro.map((val, index) => (
                            <dd className="hing-dd__item" key={val.key}>{val.val}</dd>
                        ))}
                    </dl>
                </div>
            <style jsx>
            {`
            .hing-header__wrapper{
                width: 200px;
                float: left;
                background-color: #5DAC81;
            }
            .hing-img__avatar{
                width: 200px;
            }
            .hing-dl__group{
                margin: 0;
                width: 100%;
            }
            .hing-dd__item{
                padding: 10px;
                font-size: 14px;
                color:#FCFAF2;
                margin:0;
            }
            @media (max-width:750px){
                .hing-header__wrapper{
                    width: 100%;
                    height: ${600/widthUnit}vw;
                }
                .hing-img__avatar{
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                    width: ${400/widthUnit}vw;
                }
                .hing-dd__item{
                    padding: ${20/widthUnit}vw;
                    font-size: ${28/widthUnit}vw;
                }
            }
            `}
            </style>
            </header>
        );
    }
}

export default Header;
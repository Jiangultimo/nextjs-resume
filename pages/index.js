import React, {Component} from 'react';
import Layout from '../components/common/Layout';
const ReactMarkDown = require('react-markdown');

class Index extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputStr: '',
      pageHeight: 0
    }
  }
  componentDidMount () {
    this.setState({
      pageHeight: window.innerHeight
    })
  }
  handleInput (e) {
    this.setState({
      inputStr: e.target.value
    })
  }
  render () {
    return (
      <Layout>
        <div className="hing-div__editor clearfix">
          <textarea className="hing-textarea__editor" val={this.state.inputStr} onInput={(e) => this.handleInput(e)}/>
          <div className="hing-markdown__preview">
            <ReactMarkDown source={this.state.inputStr} />
          </div>
          <style jsx>
            {`
              .hing-div__editor{
                width: 100%;
              }
              .hing-textarea__editor{
                box-sizing: border-box;
                width: 50%;
                float: left;
                height: ${this.state.pageHeight}px;
                border: none;
                border-right: 1px solid #e3e3e3;
                resize: none;
                outline: none;
                padding: 5px;
              }
              .hing-markdown__preview{
                width: 50%;
                padding: 5px;
                box-sizing: border-box;
                float:right;
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
}

export default Index;

import React from 'react';

import Layout from '../components/common/Layout';
import Content from '../components/index/content';

/**
 * getInitialProps can not be used in children components. Only in pages.
 */
class Index extends React.Component {
    static async getInitialProps( context ){
        const {intro} = context.query.resume;
        return {
            intro
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {intro} = this.props;
        return (
            <Layout intro={intro}>
                <Content />
            </Layout>
        )
    }
}

export default Index;
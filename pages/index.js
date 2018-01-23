import React from 'react';

import Layout from '../components/common/Layout';
import Content from '../components/index/content';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout>
                <Content />
            </Layout>
        )
    }
}

export default Index;
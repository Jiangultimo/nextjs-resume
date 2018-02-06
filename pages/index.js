import React from 'react';
import Head from 'next/head';

import Layout from '../components/common/Layout';
import Content from '../components/index/content';

/**
 * getInitialProps can not be used in children components. Only in pages.
 */
class Index extends React.Component {
    static async getInitialProps( { query } ){
        const {intro} = query.resume.resume;
        const style = query.style;
        return {
            intro,
            style
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {intro, style} = this.props;
        return (
            <Layout intro={intro} style={style}>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <Content />
            </Layout>
        )
    }
}

export default Index;
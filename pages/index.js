import React from 'react';
import Head from 'next/head';

import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import Content from '../components/index/content';

/**
 * getInitialProps can not be used in children components. Only in pages.
 */
class Index extends React.Component {
    static async getInitialProps( { query } ){
        console.log(query.info);
        const {intro, resume} = query.info.data;
        const style = query.style;
        return {
            intro,
            resume,
            style
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {intro, style, resume} = this.props;
        return (
            <Layout>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <Header intro={intro} style={style} />
                <Content resume={resume} />
            </Layout>
        )
    }
}

export default Index;
import React, { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
// import SEO from './SEO'
import { ApolloProvider } from "@apollo/react-hooks";
// import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga';
// import { GTM_ID, TRACKING_ID } from '../../utils/config';
import client from 'ApolloClient/client';
import GoTop from './GoTop';

// const TRACKING_ID =TRACKINGID; // OUR_TRACKING_ID
//   ReactGA.initialize(TRACKING_ID);

// const tagManagerArgs = {
//   gtmId:GTM_ID
// }
// TagManager.initialize(tagManagerArgs)



const Layout = ({ children,pageName }) => {
    // useEffect(() => {
    //     ReactGA.pageview(window.location.pathname + window.location.search);
    //   }, []);
    // window.dataLayer.push({
    //     event: 'pageview',
    //     page: {
    //         url: window.location.pathname,
    //         title: pageName
    //     }
    //   });

    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                {/* <SEO pageName={pageName}/> */}
                {children}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </RecoilRoot>
        </ApolloProvider>
    )
}

export default Layout

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Layout from '../layouts/Layout';
//import Title from '../components/common/Title';

const HomePage = (props) => (
    <Layout>
        Home
    </Layout>
);

const mapStateToProps = (state) => ({
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
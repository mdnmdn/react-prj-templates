import React from 'react';
import Layout from '../layouts/Layout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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
import React from 'react';
import Layout from '../layouts/Layout';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const Login = (props) => (
    <Layout>
        Login
    </Layout>
);

const mapStateToProps = (state) => ({
  });
  
const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
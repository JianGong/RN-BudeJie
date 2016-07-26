/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, qqLogin, sinaLogin, tecentLogin, goToRegister } from '../../../../../framework/redux/actions/Actions';
import { MODAL, DISMISS, CAN_FOCUS } from '../../../../../framework/redux/actions/ActionsType';
import styles from '../../../../../styles/Main';
import Images from '../../../../constant/Images';
import LoginView from '../view/LoginView';
import Dimensions from 'Dimensions';

var { width, height } = Dimensions.get('window');

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        const { dispatch, userInfo } = this.props;
        return (
            <LoginView
                width={width}
                canFocus={this.props.canFocus}
                dismiss={this.props.dismiss}
                login={() => {
                    dispatch(login({userName: 'zhangsan', password: '123'}));
                }}
                qqLogin={() => {
                    dispatch(qqLogin({userName: 'lisi', password: '123'}));
                }}
                sinaLogin={() => {
                    dispatch(sinaLogin({userName: 'wangwu', password: '123'}));
                }}
                tecentLogin={() => {
                    dispatch(tecentLogin({userName: 'zhaoliu', password: '123'}));
                }}
            />
        );
    }
}

LoginContainer.propTypes = {
    userInfo: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { loginReducer } = state;
    return {
        userInfo: loginReducer.userInfo
    };
}

export default connect(mapStateToProps)(LoginContainer);

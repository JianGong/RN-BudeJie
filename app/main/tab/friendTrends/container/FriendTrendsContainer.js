/* jshint esversion: 6 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { modal, dismiss } from '../../../../framework/redux/actions/Actions';
import { MODAL, DISMISS } from '../../../../framework/redux/actions/ActionsType';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleFriendTrendsLeftComponent, BackButtonComponent, TitleBarFriendTrendsComponent } from '../../../components/title/Title';
import FriendTrendsView from '../view/FriendTrendsView';

class FriendTrendsContainer extends React.Component {

    initFriendTrendsView() {
        const { dispatch, modalVisible } = this.props;
        return (
            <FriendTrendsView
                animationType='slide'
                transparent={false}
                modalVisible={modalVisible}
                loginOrRegister={() => {
                    dispatch(modal(!modalVisible));
                }}
                dismiss={() => {
                    dispatch(dismiss(!modalVisible));
                }}
            />
        );
    }

    render() {
        return (
            <Router
                route={this.initFriendTrendsView.bind(this)}
                backButtonComponent={BackButtonComponent}
                leftBarComponent={TitleFriendTrendsLeftComponent}
                titleBarComponent={TitleBarFriendTrendsComponent}
            />
        );
    }
}

FriendTrendsContainer.propTypes = {
    modalVisible: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { friendTrendsReducer } = state;
    return {
        modalVisible: friendTrendsReducer.modalVisible
    };
}

export default connect(mapStateToProps)(FriendTrendsContainer);

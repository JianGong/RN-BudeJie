/* jshint esversion: 6 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { goToTag } from '../../../../framework/redux/actions/Actions';
import styles from '../../../../styles/Main';
import Router from '../../../components/Router';
import { TitleTagLeftComponent, BackButtonComponent, TitleBarNewComponent } from '../../../components/title/Title';
import NewView from '../view/NewView';

class NewContainer extends React.Component {
    constructor(props) {
        super(props);


    }

    leftBarComponent() {
        const { dispatch } = this.props;
        return (
            <TitleTagLeftComponent
                onPress={() => {
                    dispatch(goToTag());
                }}
            />
        );
    }

    render() {
        return (
            <Router
                route={NewView}
                backButtonComponent={BackButtonComponent}
                leftBarComponent={this.leftBarComponent.bind(this)}
                titleBarComponent={TitleBarNewComponent}
            />
        );
    }
}


NewContainer.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const { essenceAndNewReducer } = state;
    return {
        
    };
}

export default connect(mapStateToProps)(NewContainer);

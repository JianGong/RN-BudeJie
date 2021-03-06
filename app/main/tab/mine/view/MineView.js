/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Color from '../../../constant/Color';
import Button from '../../../components/Button';
import LoginContainer from '../../common/login/container/LoginContainer';
import {
    View,
    ListView,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal,
    PixelRatio
} from 'react-native';

class MineView extends React.Component {
    constructor(props) {
        super(props);

        const data = [
            {
                type: 'login',
                image: Images.random,
                title: '登录/注册'
            },
            {
                type: 'download_offline',
                title: '离线下载'
            }
        ];

        var dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows(data)
        };

        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
    }

    renderRow(rowData) {
        return (
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center',  width: this.props.width, height: 44, borderTopWidth: 1 / PixelRatio.get(), borderBottomWidth: 1 / PixelRatio.get(), borderColor: Color.defaultColor }}
                    onPress={this.props.onItemPress.bind(this, rowData)}
                >
                    {
                        rowData.image ? <Image source={{uri: rowData.image}} style={{ marginLeft: 10, width: 33, height: 33 }} /> : <View />
                    }
                    <Text style={[styles.commonText, { fontSize: 16, marginLeft: 10 }]}>
                        {rowData.title}
                    </Text>
                    <Image source={{uri: Images.arrow}} style={{ position: 'absolute', top: 12, right: 10, marginRight: 10, width: 15, height: 21 }} />
                </TouchableOpacity>
                <View
                    style={{ marginTop: 20 }}
                />
            </View>
        );
    }

    renderFooter() {
        if (this.props.dataList) {
            const maxColumns = 4;
            const width = this.props.width / maxColumns;
            const height = width;
            return (
                <ScrollView
                    style={{ backgroundColor: 'white' }}
                    contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    {this.props.dataList.map(rowData => {
                        return (
                            <Button
                                key={rowData.id}
                                isVertical={true}
                                title={rowData.name}
                                leftImage={rowData.icon}
                                highlightLeftImage={rowData.icon}
                                leftImageStyle={{ width: 44, height: 44 }}
                                highlightTitleColor='red'
                                titleStyle={{ fontSize: 16 }}
                                style={{ width: width, height: height, borderTopWidth: 1 / PixelRatio.get(), borderBottomWidth: 1 / PixelRatio.get(), borderLeftWidth: 1 / PixelRatio.get(), borderRightWidth: 1 / PixelRatio.get(), borderColor: Color.defaultColor }}
                                onPress={this.props.onFooterItemPress.bind(this, rowData)}
                            />
                        );
                    })}
                </ScrollView>
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={false}
                    visible={this.props.modalVisible}
                    onShow={this.props.onShow}
                >
                    <LoginContainer
                        canFocus={this.props.canFocus}
                    />
                </Modal>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }
}

export default MineView;

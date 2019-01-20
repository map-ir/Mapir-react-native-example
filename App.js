
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Mapir from 'mapir-react-native-sdk'

type Props = {};
export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                <Mapir
                    accessToken={'adsfdfdfgfgfghfh'}
                    zoomLevel={13}
                    centerCoordinate={[51.422548, 35.732573]}
                    style={styles.container}>
                </Mapir>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
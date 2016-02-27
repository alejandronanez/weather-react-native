import React, {
    AppRegistry,
    MapView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Api from './src/api';

const Weather = React.createClass({
    getInitialState() {
        return {
            pin: {
                longitude: 0,
                latitude: 0
            },
            city: '',
            temperature: '',
            description: ''
        }
    },
    onRegionChangeComplete({longitude, latitude}) {
        const pin = {longitude, latitude};
        this.setState({pin});

        Api(pin).then((data) => {
            this.setState(data);
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    annotations={[this.state.pin]}
                    onRegionChangeComplete={this.onRegionChangeComplete}>
                </MapView>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.state.city}</Text>
                    <Text style={styles.text}>{this.state.temperature}</Text>
                    <Text style={styles.text}>{this.state.description}</Text>
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1, // To actually show things - Entire screen
        justifyContent: 'center', // things center on the page
        alignItems: 'stretch', // Each individual item stretchs from left to right,
        backgroundColor: '#F5FCFF'
    },
    map: {
        flex: 2, // 2/3
        marginTop: 30
    },
    textWrapper: {
        flex: 1, // 1/3
        alignItems: 'center'
    },
    text: {
        fontSize: 30
    }
});

AppRegistry.registerComponent('weather', () => Weather);

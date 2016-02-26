import React, {
    AppRegistry,
    MapView,
    View,
    StyleSheet
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
            <MapView
                style={styles.map}
                annotations={[this.state.pin]}
                onRegionChangeComplete={this.onRegionChangeComplete}>
            </MapView>
        );
    }
});

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

AppRegistry.registerComponent('weather', () => Weather);

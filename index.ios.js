import React, {
    AppRegistry,
    MapView,
    View,
    StyleSheet
} from 'react-native';

const Weather = React.createClass({
    getInitialState() {
        return {
            pins: []
        }
    },
    onRegionChangeComplete({longitude, latitude}) {
        const pins = this.state.pins.concat({longitude, latitude});
        this.setState({pins});
    },
    render() {
        return (
            <MapView
                style={styles.map}
                annotations={this.state.pins}
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

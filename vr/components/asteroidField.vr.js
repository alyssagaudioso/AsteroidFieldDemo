import React, { Component } from 'react';
import { AppRegistry, asset, Pano, VideoPano, Text, View, Sphere, PointLight, AmbientLight, Animated, Model } from 'react-vr';
import Asteroid from './asteroid.vr.js'

export default class AsteroidField extends Component {
    render() {
        let numAsteroids = this.props.numAsteroids ? this.props.numAsteroids : 50;
        let asteroids = [];
        for(let i=0; i<numAsteroids; i++){
            asteroids.push(<Asteroid key={i}/>)
        }
        return (
            <View>
                {asteroids}
            </View>
        )
    }
}
import React, { Component } from 'react';
import { AppRegistry, asset, Pano, VideoPano, Text, View, Sphere, PointLight, AmbientLight, Animated, Model } from 'react-vr';
import { Easing } from 'react-native';

export default class Asteroid extends Component {
    constructor() {
        super();
        this.state = {
            x: -200, 
            y: -200,
            delay: 0,
            scale: 1,
            model: 1,
            translateZ: new Animated.Value(4000)
        }
        this.translateAsteroid = this.translateAsteroid.bind(this);
        this.randomize = this.randomize.bind(this);
    }
    translateAsteroid() {
        Animated.timing(this.state.translateZ, {
        toValue: -4000,
        duration: 4000,
        delay: this.state.delay,
        easing: Easing.linear
        }).start( () => {
            this.setState({translateZ: new Animated.Value(2000)});
            this.randomize();
        });
    }
    randomize() {
        let x = Math.floor( Math.random() * 600 - 300 );
        let y = Math.floor( Math.random() * 600 - 300 );
        let delay = Math.floor( Math.random() * 20000 );
        let duration = Math.floor( Math.random() * 50000 - 40000 );
        let scale = Math.floor( Math.random() * 3 + 1 );
        let model = Math.floor( Math.random() * 3 + 1 );
        this.setState({x, y, delay, duration, scale, model}, () => this.translateAsteroid())
    }
    componentDidMount() {
        this.randomize();
    }


    render() {
        return (
            <Animated.View
                style={{
                    transform: [ 
                        { translateX: this.state.x },
                        { translateY: this.state.y },
                        { translateZ: this.state.translateZ }, 
                        { scale: this.state.scale }
                    ]
                }}
            >
                <Model
                    texture='http://i.imgur.com/NxNaanH.jpg'
                    source={{
                        obj: asset('asteroid'+this.state.model+'.obj')
                    }}
                />
            </Animated.View>
        )
    }
}
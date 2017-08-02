import React from 'react';
import { AppRegistry, asset, Pano, VideoPano, Text, View, Sphere, PointLight, AmbientLight, Animated, Model } from 'react-vr';
import { Easing } from 'react-native';
import AsteroidField from './vr/components/asteroidField.vr.js'

export default class reactVRDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      rotationY: new Animated.Value(0),
    }
    this.rotateEarth = this.rotateEarth.bind(this);
  }

  rotateEarth() {
    Animated.timing(this.state.rotationY, {
      toValue: this.state.rotationY._value + 360,
      duration: 4000,
      easing: Easing.linear
    }).start( () => {
      this.rotateEarth();
    });
  }

  componentDidMount() {
    this.rotateEarth();
  }

  render() {
    return (
      <View>

        <VideoPano loop = {true} source={{ uri: ('../static_assets/space.mp4') }}></VideoPano>

        <Animated.View 
          style={{
            transform: [ 
              { translate: [0, 0, -3] },
              { rotateY: this.state.rotationY }
            ]
          }}
        >

          <Sphere
            widthSegments={50}
            heightSegments={20}
            texture='http://i.imgur.com/zNBDyNj.png'
          />

        </Animated.View>

     
          {/*<Model
              source={{
                obj: asset('asteroid1.obj')
              }}
              texture='http://i.imgur.com/NxNaanH.jpg'
              style={{
                transform: [
                  { translate: [-100, -25, -125] }
                ]
              }}
          />*/}

        <AsteroidField/>

      </View>
    );
  }
}

AppRegistry.registerComponent('reactVRDemo', () => reactVRDemo);

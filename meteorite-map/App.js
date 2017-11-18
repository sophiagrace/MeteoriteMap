import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
// import { MapView } from 'expo';
import axios from 'axios';

export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
      axios.get('https://data.nasa.gov/resource/gh4g-9sfh.json')
      .then(resp => {
        val = Object.prototype.toString.call(resp);
        console.log('HEYYYYYY GET UR DATA', val);
        this.setState({ data: resp.data });
      })
      .catch((err) => {
          console.log('ERROR it fucked up', err)
      })
    }

    render() {
      console.log("STATE", this.state.data[1]);
      return (
        <ScrollView contentContainerStyle={styles.container}>
          {this.state.data.map(elt => (<Text key={elt["name"]}> {elt["name"]} </Text>)) || 'u fucked up haha'}
        </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });

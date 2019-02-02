import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Button, Provider as PaperProvider, Card, Title, Paragraph, TextInput } from 'react-native-paper';

var d;
var nd;
var duration;
var total;
var t;

const msToTime = (duration) => {
    var minutes = parseInt((duration / (1000 * 60)) % 60);
    var hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    var seconds = parseInt((duration / 1000) % 60);

    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ':' + seconds;
}

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          start: null,
          end: null,
          total: null,
        };
      }

      startTime = () => {
          d = new Date();
          this.setState({start: d.getHours() +':'+ d.getMinutes() +':'+ d.getSeconds()})
      }

      endTime = () => {
        nd = new Date();
        this.setState({end: nd.getHours() +':'+ nd.getMinutes() +':'+ nd.getSeconds()})
    }

    totalTime = () => {
        duration = nd - d
        this.setState({total: msToTime(duration)})
    }

    clearTime = () => {
        this.setState({start: null})
        this.setState({end: null})
        this.setState({total: null})
    }

    render() {
      return (
        <PaperProvider>
            
            <Button style={ styles.button }  mode="contained" onPress={this.startTime}>
            Start
            </Button>
            <Button style={ styles.button }  mode="contained" onPress={this.endTime}>
            End
            </Button>
            <Button style={ styles.button }  mode="contained" onPress={this.totalTime}>
            Total
            </Button>
            <Card>
                <Card.Content>
                <Title>Start at: {this.state.start}</Title>
                <Title>End at: {this.state.end}</Title>
                <Title>Total time spend: {this.state.total}</Title>
                </Card.Content>
            </Card>
            <Button style={ styles.button }  mode="contained" onPress={this.clearTime}>
            Clear
            </Button>
        </PaperProvider>
      );
    }
  }

  const styles = StyleSheet.create({
    button: {
      margin: '5%',
      height: '10%',
      padding: 10
    },
  });
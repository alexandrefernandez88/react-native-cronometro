import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      txtBotao: 'COMEÇAR',
      tempo: 0
    }
    this.timer = null;

    this.comecar = this.comecar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  comecar() {
    if (this.timer != null) {
      // timer está rodando ... tem que parar
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        txtBotao: 'CONTINUAR',
        tempo: this.state.numero
      })
    }
    else {
      // vai começar a contar o tempo
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)
      this.setState({ txtBotao: 'PARAR' })
      this.teste();
    }
  }

  teste() {

  }

  zerar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
      txtBotao: 'COMEÇAR',
      tempo: 0
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/cronometro.png')} />
        <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.comecar}>
            <Text style={styles.btnText}>{this.state.txtBotao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.zerar}>
            <Text style={styles.btnText}>ZERAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timerTxt}>Tempo registrado:</Text>
        <Text style={styles.timerTxt2}>{this.state.tempo.toFixed(1)}</Text>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: -170
  },
  btnArea: {
    backgroundColor: '#00aeef',
    flexDirection: 'row',
    height: '100',
    marginTop: 80
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 50,
    margin: 20,
    borderRadius: 25
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
    textAlign: 'center'
  },
  timerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'yellow'
  },
  timerTxt2: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 5,
    color: 'yellow'
  },
});

export default App;
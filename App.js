import React, {Component} from 'react';
import { 
  StyleSheet,
  FlatList
} from 'react-native';
import Post from './src/components/Post'

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super()
    this.state = {
      fotos : []
    }
  }

  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(res => res.json())
    .then(json => this.setState({fotos: json}))
  }

  render() {
    const fotos = [
      {id:1, usuario:'Kennedy', profile:'1.jpg', post:'1.jpg'},
      {id:2, usuario:'Dean', profile:'2.png', post:'2.png'},
      {id:3, usuario:'Castiel', profile:'3.png', post:'3.jpg'}
    ]
    return (
        <FlatList style={styles.container}
          keyExtractor={item => String(item.id)} 
          data={this.state.fotos}
          renderItem={({item}) => <Post foto={item} />}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

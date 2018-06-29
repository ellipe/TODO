import React,  {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title';
import List from './components/List';
import Input from './components/Input';

const elements = [{
  "text": "STAT RX USA LLC"
}, {
  "text": "NANOPOLY CO., LTD."
}, {
  "text": "Pacifica Inc."
}]

export default class App extends Component {
  state = {
    items: []
  }

  // remove an element from the list.
  removeItem = (index) => {
    this.setState({
        items: this.state.items.filter((item, i) => i !== index)
    })
  }

  // add an element to the list
  addItem = (text) => {
    const {items} = this.state
    
    let el = {}
    el.id = this.state.items.length + 1
    el.text = text

    this.setState({
      items: [...items, el]
    })
  }


  componentDidMount(){
    this.setState({
      items: elements
    })
  }

  render() {
    const { items } = this.state
    return (
      <View style={styles.container}>
        <Title>
          To-Do List
        </Title>
        <Input 
          onChange={this.addItem}
        />
        <List 
          items={items}
          onPressItem={this.removeItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
})

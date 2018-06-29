import React, {Component} from 'react'
import { StyleSheet, TextInput } from 'react-native';

class Input extends Component {

    state = {
        text: ''
    }
    onChangeText = (text) => this.setState({ text })

    onSubmitEditing = () => {
        this.props.onChange(this.state.text)
        this.setState({ text: '' })
    }

    render(){
        const {text} = this.state
        return(
            <TextInput
            style={styles.input}
            placeholder="Las tareas van aqui!"
            onChangeText={this.onChangeText}
            onSubmitEditing={this.onSubmitEditing}
            value={text}
            />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
        backgroundColor: '#eee'
    },
})

export default Input

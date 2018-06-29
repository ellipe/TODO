import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = (props) => (
    <View style={styles.header}>
        <Text style={styles.title}>
            {props.children}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        borderBottomWidth: 2, 
        borderColor: '#2d98da',    
        backgroundColor: '#3867d6',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
})

export default Title
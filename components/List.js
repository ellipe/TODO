import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';


const List = ({items, onPressItem}) => (
    <ScrollView style={styles.list}>
        {items.map((item, index)=>(
            <TouchableOpacity
                style={styles.item}
                key={index}
                onPress={() => onPressItem(index)}
                >

                <Text>
                    {item.text}
                </Text>

            </TouchableOpacity>
        ))}
    </ScrollView>
)

const styles = StyleSheet.create({
    list : {
        paddingTop: 10,
        backgroundColor: '#fafafa',
    },
    item: {
        borderBottomWidth: 0.3,
        borderColor: '#d6d7da',    
        padding: 15,
    },
})

export default List;
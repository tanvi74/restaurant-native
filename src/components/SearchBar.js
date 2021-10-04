import React, {useState} from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
// import { Feather } from '@expo/vector-icons'; 

export default function SearchBar({term, onTermChange, onTermSubmit}) 
{

    return (
        <View style={styles.backgroundStyle}>
            {/* <Feather name="search" style= {styles.iconStyle} /> */}
            <TextInput 
                placeholder="Search"
                style= {styles.inputStyle}
                value={term}
                // onChangeText={newTerm => onTermChange(newTerm)}
                onChangeText={onTermChange}
                autoCorrect={false}
                autoCapitalize="none"
                // onEndEditing={() => onTermSubmit("submittes")}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#F0EEED",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',

    },
    inputStyle: {
        // borderColor: "black",
        // borderWidth: 1,
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
        color: "black"
    }
});

import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NavBar() {
    return (
        <View
            style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: '#fff',
                width:'100%',
            }}
        >
            <Icon.Button name="home" size={35} backgroundColor="#fff" color="#36454F" style={{ margin: 8, flex: 1, marginLeft: 15, }}>
                {/* <Text>Home</Text> */}
            </Icon.Button>
            <Icon.Button name="th-list" size={35} backgroundColor="#fff" color="#36454F" style={{ margin: 8 }}></Icon.Button>
            <Icon.Button name="envelope-o" size={35} backgroundColor="#fff" color="#36454F" style={{ margin: 8 }}></Icon.Button>
            <Icon.Button name="user-circle" size={35} backgroundColor="#fff" color="#36454F" style={{ margin: 8 }}></Icon.Button>
            <Icon.Button name="question-circle-o" size={35} backgroundColor="#fff" color="#36454F" style={{ margin: 8 }}></Icon.Button>
        </View>
    )
}
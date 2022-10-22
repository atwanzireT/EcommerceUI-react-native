import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Products = [
    {
        img: require("../assets/products/bag.jpg"),
        name: "Bag",
        price: 37000
    },
    {
        img: require("../assets/products/pixels.jpg"),
        name: "Frameless TV Pixels",
        price: 550000
    },
    {
        img: require("../assets/products/samsung.jpg"),
        name: "Samsung Galaxy A03",
        price: 455000
    },
    {
        img: require("../assets/products/tv.jpg"),
        name: "40 inch Pixels TV",
        price: 755000
    },
]
export default function HandPicked() {
    return (
        <View>
            <View
                style={{
                    backgroundColor: "#df4759",
                    color: "#fff",
                    width: "100%",
                    height: 70,
                    flexDirection: 'row',
                }}
            >
                <Icon size={45} style={{ marginTop: 10, marginLeft: 20 }} name="flash" backgroundColor="#df4759" color='#fff' solid></Icon>

                <View
                    style={{
                        marginHorizontal: 10,
                        marginTop: 10,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 22,
                        }}
                    >HandPicked</Text>
                    <Text
                        style={{
                            color: '#fff'
                        }}
                    >upto 40% discount off</Text>
                </View>
            </View>
            {/* items */}
            <ScrollView
                style={{
                    margin: 10
                }}
                horizontal
                showsHorizontalScrollIndicator = {false}
            >
                {Products.map((flash, index) => (
                    <View key = {index}
                    style = {{
                        margin: 10,
                    }}>
                        <Image
                            source={flash.img}
                            style={{
                                width: 100,
                                height: 150,
                            }}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                width: 100

                            }}
                        >{flash.name}</Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '900',

                            }}>UGX {flash.price}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
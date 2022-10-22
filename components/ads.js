import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Posters = [
    {
        image: require("../assets/posters/jpay.png")
    },
    {
        image: require("../assets/posters/stabex.png")
    },
    {
        image: require("../assets/posters/hpupdates.png")
    },
]

const AdsItems = [
    {
        image: require("../assets/ads/callorder.png")
    },
    {
        image: require("../assets/ads/entzone.png")
    },
    {
        image: require("../assets/ads/flashsales.png")
    },
    {
        image: require("../assets/ads/foodfest.png")
    },
    {
        image: require("../assets/ads/mania.png")
    },
    {
        image: require("../assets/ads/shoppingfest.png")
    },
    {
        image: require("../assets/ads/techupdates.png")
    },
]

export default function Ads() {
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    Posters.map((poster, index) => (
                        <View
                            key={index}
                        >
                            <Image
                                source={poster.image}
                                style={{
                                    height: 180,
                                    width: 395,
                                    margin: 10,
                                    borderRadius: 10,
                                }}
                            />
                        </View>
                    ))
                }
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    AdsItems.map((ad, index) => (
                        <View
                            key={index}
                        >
                            <Image
                                source={ad.image}
                                style={{
                                    height: 70,
                                    width: 70,
                                    margin: 2,
                                    borderRadius: 10,
                                }}
                            />
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}
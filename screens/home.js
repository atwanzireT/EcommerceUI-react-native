import React from "react";
import { ScrollView, View } from "react-native";
import Ads from "../components/ads";
import FlashSale from "../components/flashsale";
import HandPicked from "../components/handpicked";
import SearchTool from "../components/searchTool";

export default function Home() {
    return (
        <View>
            <SearchTool />
            <ScrollView>
                <View>
                    <Ads />
                </View>
                <FlashSale />
                <HandPicked />
            </ScrollView>
        </View>
    )
}
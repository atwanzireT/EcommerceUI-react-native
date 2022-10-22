import React from 'react'
import { TextInput, View, Text } from 'react-native'

export default function SearchTool() {
    return (
        <View>
            <TextInput
                style={{ height: 40, borderColor:'orange', borderWidth:5, textAlign:'center' }}
                placeholder="Search on Jumia"
            />
            {/* Banner */}
            <View style ={{
                alignItems: 'center',
                backgroundColor: 'orange',
            }}>
                <Text
                style ={{
                    padding: 10,
                    color: 'white',
                }}
                >
                    UG SHOPPING FESTIVAL
                </Text>
            </View>
        </View>
    )
}
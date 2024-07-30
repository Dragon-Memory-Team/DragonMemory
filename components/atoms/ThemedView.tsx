import { useApplicationContext } from "@/contexts/ApplicationContext";
import React from "react";
import { View } from "react-native";

export default function ThemedView({children}: {children: React.ReactNode}) {
    const {theme} = useApplicationContext();
    return <View style={{
        backgroundColor: theme.backgound,
        width: '100%',
        height: '100%'
    }}>
        {children}
    </View>
}
import { useApplicationContext } from "@/contexts/ApplicationContext";
import Deck from "@/models/Deck";
import { View, Text, Image } from "react-native";
import ThemedText from "./ThemedText";
import Notebook from '@/assets/images/notebook.svg';

export default function DeckCover({model}: {model: Deck}) {
    const {theme,fonts} = useApplicationContext();
    return <View style={{
        backgroundColor: theme.accent,
        height: 250,
        width: '100%',
        borderRadius: 16,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'space-around',
        padding: 20
    }}>
        <View style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20
        }}>
            <Notebook />
        </View>
        <ThemedText style={{
            color: theme.headerBackground,
            fontFamily: fonts.bold,
            fontSize: 16,
            marginBottom: 10
        }}>{model.name}</ThemedText>
        <ThemedText style={{
            color: theme.headerBackground,
            fontSize: 14
        }}>{`${model.quantity.toString()} Cartas`}</ThemedText>
    </View>
}
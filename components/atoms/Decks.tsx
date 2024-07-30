import { FlatList, View } from "react-native";
import DeckCover from "./DeckCover";
import Deck from "@/models/Deck";

export default function Decks({decks}: {decks: Deck[]}) {
    console.log(decks);
    return <FlatList
        ItemSeparatorComponent={() => <View style={{
            margin: 20
        }} />}
        showsVerticalScrollIndicator={false}
        data={decks}
        renderItem={({item}) => <DeckCover model={item}></DeckCover>}
    />
}
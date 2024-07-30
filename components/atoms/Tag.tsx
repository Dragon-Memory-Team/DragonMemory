import { useApplicationContext } from "@/contexts/ApplicationContext";
import TagModel from "@/models/TagModel";
import { View, Text } from "react-native";
import Label from '@/assets/images/label.svg';

export default function Tag({ model }: { model: TagModel }) {
    const { theme } = useApplicationContext();
    return <View style={{
        minWidth: 100,
        height: 50,
        borderRadius: 18,
        backgroundColor: theme.headerBackground,
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginStart: 5,
            marginEnd: 15
        }}>
            <Label></Label>
            <Text>{model.name}</Text>
        </View>
    </View>
}
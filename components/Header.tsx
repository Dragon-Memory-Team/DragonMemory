import { View, Image } from "react-native";
import ThemedText from "./atoms/ThemedText";
import { useApplicationContext } from "@/contexts/ApplicationContext";

export default function Header() {
    const { theme } = useApplicationContext();
    return <View style={{
        backgroundColor: theme.headerBackground,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 39,
        paddingVertical: 29,
    }}>
        <View>
            <ThemedText style={{
                fontSize: 16,
                color: theme.lowForeground,
                marginBottom: 2
            }}>Olá,</ThemedText>
            <ThemedText style={{
                fontSize: 24,
                color: theme.foreground
            }}>Leonardo 👋</ThemedText>
        </View>
        <Image width={44} height={46} source={require("../assets/images/man.png")} />
    </View>
}
import Fonts from "@/constants/Fonts";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

export default function ThemedText({children, style = {}}: {children: string, style?: StyleProp<TextStyle>}) {
    const ctx = useApplicationContext();
    const {text} = stylesheetFactory(ctx.fonts);
    return <Text style={[text, style]}>
        {children}
    </Text>
}

const stylesheetFactory = (font: Fonts) => StyleSheet.create({
    text: {
        fontFamily: font.regular
    }
})
import ThemedText from "./ThemedText";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import Fonts from "@/constants/Fonts";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { Theme } from "@/constants/Theme";

export default function ThemedSubtitle({children, style = {}}: {children: string, style?: StyleProp<TextStyle>}) {
    const ctx = useApplicationContext();
    const styleText = stylesheetFactory(ctx.fonts, ctx.theme);
    return <ThemedText style={[styleText.subtitle, style]}>
        {children}
    </ThemedText>
}

const stylesheetFactory = (fonts: Fonts, theme: Theme) => StyleSheet.create({
    subtitle: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: theme.foreground
    }
})
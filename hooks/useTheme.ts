import DarkTheme from "@/constants/DarkTheme";
import { Theme } from "@/constants/Theme";
import WhiteTheme from "@/constants/WhiteTheme";
import { ColorSchemeName, useColorScheme } from "react-native";

export default function useTheme(themeProvider: () => ColorSchemeName): Theme {
    const colorScheme = themeProvider();
    return colorScheme == 'dark' ? DarkTheme: WhiteTheme;
}
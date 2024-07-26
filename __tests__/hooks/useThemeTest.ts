import DarkTheme from "@/constants/DarkTheme";
import WhiteTheme from "@/constants/WhiteTheme";
import useTheme from "@/hooks/useTheme";
import { ColorSchemeName } from "react-native";

describe('useTheme Test', () => {
    it('has all properties truly and correct defined', () => {
        const possibleReturns = [
            'dark',
            'light',
            undefined,
            null
        ] as ColorSchemeName[];
        possibleReturns.forEach(pr => {
            const theme = useTheme(() => pr);
            expect(theme).not.toBeNull();
            for(const color in theme) {
                expect(color).not.toBeUndefined();
                expect(color).not.toBeNull();
                expect(color).not.toBeFalsy();
            }
            const baseColorScheme = pr == 'dark' ? DarkTheme: WhiteTheme;
            expect(theme.backgound).toBe(baseColorScheme.backgound);
            expect(theme.accent).toBe(baseColorScheme.accent);
            expect(theme.foreground).toBe(baseColorScheme.foreground);
        })
        
    });
});
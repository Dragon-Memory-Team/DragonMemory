import Fonts from '@/constants/Fonts';
import { useFonts, Rubik_400Regular, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { useEffect } from 'react';
export default function useRubikFont(executeAtChange: () => void): {loaded: boolean, error: Error | null, fonts: Fonts} {
    const [loaded, error] = useFonts({
        Rubik_400Regular,
        Rubik_700Bold
    });
    useEffect(() => {
        executeAtChange();
    }, [loaded, error]);
    return {
        loaded,
        error: error,
        fonts: {
            regular: 'Rubik_400Regular',
            bold: 'Rubik_700Bold'
        }
    }
}
import ApplicationContextProvider from '@/components/providers/ApplicationContextProvider';
import useRubikFont from '@/hooks/useRubikFont';
import useTheme from '@/hooks/useTheme';
import { SplashScreen, Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const theme = useTheme(useColorScheme);
    const { loaded, error, fonts } = useRubikFont(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    });
    if (!loaded && !error) {
        return null;
    }
    return (
        <SafeAreaView style={{
            height: '100%'
        }}>
            <RootSiblingParent>
                <ApplicationContextProvider fonts={fonts} theme={theme}>
                    <Stack 
                        screenOptions={{
                            headerShown: false,
                        }} 
                        initialRouteName='sign-in'
                    >
                        <Stack.Screen name='sign-in'/>
                    </Stack>
                </ApplicationContextProvider>
            </RootSiblingParent>
        </SafeAreaView>
    );
}
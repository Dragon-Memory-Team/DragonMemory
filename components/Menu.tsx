import { StyleSheet, useColorScheme, View } from "react-native";
import MaterialUI from '@expo/vector-icons/MaterialIcons';
import useTheme from "@/hooks/useTheme";
import { usePathname, useRouter } from "expo-router";


export default function Menu() {
    const theme = useTheme(useColorScheme);
    const path = usePathname();
    const router = useRouter();
    const goTo = (pathname: string) => {
        router.navigate(pathname);
    }
    return (
        <View style={stylesheet.container}>
            <MaterialUI
                onPress={() => goTo('/')}
                color={path == '/' ? theme.accent : theme.lowAccent}
                size={36}
                name='list-alt' />
            <MaterialUI
                onPress={() => goTo('/create')}
                color={path == '/create' ? theme.accent : theme.lowAccent}
                size={36}
                name='library-add' />
            <MaterialUI
                onPress={() => goTo('/settings')}
                color={path == '/settings' ? theme.accent : theme.lowAccent}
                size={36}
                name='settings' />
        </View>
    )
}

const stylesheet = StyleSheet.create({
    container: {
        height: 88,
        backgroundColor: 'white',
        position: 'absolute',
        width: '100%',
        bottom: 0,
        borderTopEndRadius: 18,
        borderTopLeftRadius: 18,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});
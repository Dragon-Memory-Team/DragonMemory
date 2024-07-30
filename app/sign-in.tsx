import ThemedText from "@/components/atoms/ThemedText";
import { useApplicationContext } from "@/contexts/ApplicationContext";
import { router } from 'expo-router';
import { Button, Pressable, TextInput, View } from "react-native";

export default function Page() {
    const { theme, fonts, auth } = useApplicationContext();
    
    const signIn = () => {
        auth.signIn("mock", "mock");
        router.replace('/')
    }
    return <View style={{
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        gap: 20
    }}>
        <ThemedText style={{
            fontSize: 20,
            fontFamily: fonts.bold,
            color: theme.title,
            textAlign: 'center'
        }}>Bem-Vindo 👋</ThemedText>
        <ThemedText style={{
            fontSize: 16,
            color: theme.title,
            marginBottom: 15,
            textAlign: 'center'
        }}>Autentique-se para continuar</ThemedText>
        <View>
            <ThemedText style={{
                paddingLeft: 10
            }}>Username</ThemedText>
            <TextInput style={{
                width: '100%',
                marginTop: 10,
                height: 50,
                borderColor: theme.foreground,
                borderRadius: 8,
                borderWidth: 1,
                paddingLeft: 10
            }} placeholder="Digte o seu username" />
        </View>
        <View style={{
            marginBottom: 10
        }}>
            <ThemedText style={{
                paddingLeft: 10
            }}>Senha</ThemedText>
            <TextInput secureTextEntry={true} style={{
                width: '100%',
                marginTop: 10,
                height: 50,
                borderColor: theme.foreground,
                borderRadius: 8,
                borderWidth: 1,
                paddingLeft: 10
            }} placeholder="********" />
        </View>
        <Button title="Entrar" onPress={signIn} color={theme.accent} />
    </View>
}
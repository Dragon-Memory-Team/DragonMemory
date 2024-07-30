import Menu from '@/components/Menu';
import { useApplicationContext } from '@/contexts/ApplicationContext';
import { Redirect, Stack } from 'expo-router';

export default function HomeLayout() {
    const {auth} = useApplicationContext();
    const {session} = auth;
    if(!session) {
        return <Redirect href={"/sign-in"} />
    }
    return (
        <>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='index'></Stack.Screen>
            </Stack>
            <Menu />
        </>
    );
}
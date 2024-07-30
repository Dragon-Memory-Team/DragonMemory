interface AuthContext {
    signIn: (username: string, password: string) => void,
    session?: string
}
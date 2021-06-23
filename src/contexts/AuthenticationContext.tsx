import { createContext, ReactNode, useState } from 'react';

interface AuthenticationContextData {
    user: object;
}

interface AuthenticationProviderProps {
    children: ReactNode;
}

export const AuthenticationContext = createContext<AuthenticationContextData>({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
    const [user, setUser] = useState({});

    return (
        <AuthenticationContext.Provider value={{
            user
        }}>
            { children}
        </AuthenticationContext.Provider>
    );
}
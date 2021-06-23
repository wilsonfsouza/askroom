import { createContext, ReactNode, useCallback, useState } from 'react';
import { firebase, auth } from '../services/firebase';

type User = {
    id: string;
    name: string;
    avatar: string;
}

interface AuthenticationContextData {
    user: User | undefined;
    signInWithGoogle: () => void;
}

interface AuthenticationProviderProps {
    children: ReactNode;
}

export const AuthenticationContext = createContext<AuthenticationContextData>({} as AuthenticationContextData);

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
    const [user, setUser] = useState<User>();

    const signInWithGoogle = useCallback(() => {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            if (result.user) {
                const { displayName, photoURL, uid } = result.user;

                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account.')
                }

                const formatedUser = {
                    id: uid,
                    name: displayName,
                    avatar: photoURL,
                }

                setUser(formatedUser);
            }
            console.log(result);
        });
    }, []);

    return (
        <AuthenticationContext.Provider value={{
            user,
            signInWithGoogle
        }}>
            { children}
        </AuthenticationContext.Provider>
    );
}
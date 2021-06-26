import { useContext } from "react";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

export function useAuthentication() {
    const context = useContext(AuthenticationContext);

    if (!context) {
        throw new Error('useAuthentication hook must be used within the AuthenticationContext.')
    }

    return context;
}
import { Button } from "../components/Button";
import { LoginContainer } from "../components/Layout/LoginContainer";
import { MainPartialContainer } from "../components/Layout/MainPartialContainer";
import { SpashIllustration } from "../components/SplashIllustration";
import { FaGoogle } from 'react-icons/fa';
import { RoomForm } from "../components/RoomForm";
import styles from '../styles/pages/home.module.scss';

export function Home() {
    return (
        <LoginContainer>
            <SpashIllustration />
            <MainPartialContainer>
                <Button leftIcon={FaGoogle} className={styles.createRoom}>
                    Create your room with Google
                </Button>
                <div className={styles.separator}>or join a room</div>
                <RoomForm inputPlaceholder="Enter the room number" />
            </MainPartialContainer>
        </LoginContainer>
    );
}
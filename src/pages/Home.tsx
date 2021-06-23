import { useHistory } from 'react-router-dom';
import { Button } from "../components/Button";
import { LoginContainer } from "../components/Layout/LoginContainer";
import { MainPartialContainer } from "../components/Layout/MainPartialContainer";
import { SpashIllustration } from "../components/SplashIllustration";
import { FaGoogle } from 'react-icons/fa';
import { RoomForm } from "../components/RoomForm";
import styles from '../styles/pages/home.module.scss';
import { BsBoxArrowInRight } from "react-icons/bs";
import { useAuthentication } from '../hooks/useAuthentication';

export function Home() {
    const history = useHistory();

    const { signInWithGoogle } = useAuthentication();

    function handleCreateNewRoom() {
        signInWithGoogle();
        history.push('/rooms/new');
    }

    return (
        <LoginContainer>
            <SpashIllustration />
            <MainPartialContainer>
                <Button leftIcon={FaGoogle} className={styles.createRoom} onClick={handleCreateNewRoom}>
                    Create your room with Google
                </Button>
                <div className={styles.separator}>or join a room</div>
                <RoomForm inputPlaceholder="Enter the room number">
                    <Button type="submit" leftIcon={BsBoxArrowInRight}>Join a room</Button>
                </RoomForm>
            </MainPartialContainer>
        </LoginContainer>
    );
}
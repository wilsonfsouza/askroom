import { Link } from 'react-router-dom';
import { LoginContainer } from "../components/Layout/LoginContainer";
import { MainPartialContainer } from "../components/Layout/MainPartialContainer";
import { SpashIllustration } from "../components/SplashIllustration";
import { RoomForm } from "../components/RoomForm";
import styles from '../styles/pages/newRoom.module.scss';
import { Button } from "../components/Button";

export function NewRoom() {
    return (
        <LoginContainer>
            <SpashIllustration />
            <MainPartialContainer>
                <h2 className={styles.newRoomTitle}>Create a new room</h2>
                <RoomForm inputPlaceholder="Enter room name">
                    <Button type="submit">Create a room</Button>
                </RoomForm>
                <p className={styles.newRoomParagraph}>
                    Would you like to join an existent room? <Link to="/">Click here</Link>
                </p>
            </MainPartialContainer>
        </LoginContainer>
    );
}

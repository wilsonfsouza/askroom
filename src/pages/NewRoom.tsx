import { Link, useHistory } from 'react-router-dom';
import { LoginContainer } from "../components/Layout/LoginContainer";
import { MainPartialContainer } from "../components/Layout/MainPartialContainer";
import { SpashIllustration } from "../components/SplashIllustration";
import { RoomForm } from "../components/RoomForm";
import styles from '../styles/pages/newRoom.module.scss';
import { Button } from "../components/Button";
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { useAuthentication } from '../hooks/useAuthentication';

export function NewRoom() {
    const history = useHistory();

    const { user } = useAuthentication();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <LoginContainer>
            <SpashIllustration />
            <MainPartialContainer>
                <h2 className={styles.newRoomTitle}>Create a new room</h2>
                <RoomForm onSubmit={handleCreateRoom}>
                    <input
                        type="text"
                        placeholder="Enter room name"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                    />
                    <Button type="submit">Create a room</Button>
                </RoomForm>
                <p className={styles.newRoomParagraph}>
                    Would you like to join an existent room? <Link to="/">Click here</Link>
                </p>
            </MainPartialContainer>
        </LoginContainer>
    );
}

import { useHistory } from 'react-router-dom';
import { Button } from "../components/Button";
import { LoginContainer } from "../components/Layout/LoginContainer";
import { MainPartialContainer } from "../components/Layout/MainPartialContainer";
import { SpashIllustration } from "../components/SplashIllustration";
import { FaGoogle } from 'react-icons/fa';
import { RoomForm } from "../components/RoomForm";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useAuthentication } from '../hooks/useAuthentication';
import styles from '../styles/pages/home.module.scss';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';

export function Home() {
    const history = useHistory();

    const { user, signInWithGoogle } = useAuthentication();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateNewRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists.');
            return;
        }

        history.push(`/rooms/${roomCode}`)
    }

    return (
        <LoginContainer>
            <SpashIllustration />
            <MainPartialContainer>
                <Button leftIcon={FaGoogle} className={styles.createRoom} onClick={handleCreateNewRoom}>
                    Create your room with Google
                </Button>
                <div className={styles.separator}>or join a room</div>
                <RoomForm onSubmit={handleJoinRoom}>
                    <input
                        type="text"
                        placeholder="Enter the room number"
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                    />
                    <Button type="submit" leftIcon={BsBoxArrowInRight}>Join a room</Button>
                </RoomForm>
            </MainPartialContainer>
        </LoginContainer>
    );
}
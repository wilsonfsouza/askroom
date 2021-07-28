import { FormEvent, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Question } from '../components/Question';
import { useAuthentication } from '../hooks/useAuthentication';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import styles from '../styles/pages/room.module.scss';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const { user } = useAuthentication();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { questions, title } = useRoom(roomId)

    return (
        <div>
            <Header code={roomId} isAdminRoom={true} />
            <main className={styles.content}>
                <div className={styles.roomTitle}>
                    <h1>Room {title}</h1>
                    {questions.length > 0 && (<span>{questions.length} question(s)</span>)}
                </div>

                <div className={styles.questionList}>
                    {questions.map((question) => (
                        <Question
                            key={question.id}
                            author={question.author}
                            content={question.content}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}
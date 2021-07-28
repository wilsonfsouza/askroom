import styles from './styles.module.scss';

type Author = {
    name: string;
    avatar: string;
}

interface QuestionProps {
    content: string;
    author: Author;
}

export function Question({ content, author }: QuestionProps) {
    const { name, avatar } = author;

    return (
        <div className={styles.questionContainer}>
            <p>{content}</p>

            <footer>
                <div className={styles.userInfo}>
                    <img src={avatar} alt={name} />
                    <span>{name}</span>
                </div>
                <div></div>
            </footer>
        </div>
    );
}
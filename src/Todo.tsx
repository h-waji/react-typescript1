import { TodoType } from './types/todo';

// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
export const Todo = (props: Omit<TodoType, "id">) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "🐹" : "🌻";
    return <p>{`${completeMark} Title: ${title}, UserID: ${userId}`}</p>
}

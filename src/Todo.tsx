import { FC } from "react";
import { TodoType } from './types/todo';

// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
export const Todo: FC<Omit<TodoType, "id">> = (props) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "🐹" : "🌻";
    return <p>{`${completeMark} Title: ${title}, UserID: ${userId}`}</p>
}

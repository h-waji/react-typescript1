type TodoType = {
    userId: number;
    title: string;
    completed?: boolean;
}

export const Todo = (props: TodoType) => {
    const { title, userId, completed = false } = props;
    const completeMark = completed ? "🐹" : "🌻";
    return <p>{`${completeMark} Title: ${title}, UserID: ${userId}`}</p>
}

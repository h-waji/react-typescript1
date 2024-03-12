export const Todo = (props) => {
    const { title, userid } = props;
    return <p>{`Title: ${title}, UserID: ${userid}`}</p>
}
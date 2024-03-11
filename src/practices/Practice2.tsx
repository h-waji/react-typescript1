export const Practice2= () => {
    const getTotalFee = (num: number): number => {
        const total: number = num * 1.1;
        console.log(total);
        return total;
    }

    const onClickPractice = () => getTotalFee(1000);

    return (
        <div>
            <p>Specify the return value type.</p>
            <button onClick={onClickPractice}>Fire!</button>
        </div>
    );
};

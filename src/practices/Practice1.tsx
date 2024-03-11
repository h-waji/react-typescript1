export const Practice1 = () => {
    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        console.log(total);
    }

    // const onClickPractice = () => calcTotalFee('1,000'); => Error
    const onClickPractice = () => calcTotalFee(1000);

    return (
        <div>
            <p>Specify the argument types.</p>
            <button onClick={onClickPractice}>Fire!</button>
        </div>
    );
};

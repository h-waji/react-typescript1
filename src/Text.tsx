import { FC } from "react";

type Props = {
    color: string;
    fontSize: string;
}

export const Text: FC<Props> = (props: Props) => {
    const { color, fontSize } = props;
    return <h1 style={{ color, fontSize }}>📖Code monkey🙈🙊🙉</h1>;
};

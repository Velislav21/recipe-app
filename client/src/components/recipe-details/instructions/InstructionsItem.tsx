type InstructionsItemProps = {
    instruction: string;
    number: number;
};

export default function InstructionsItem({
    instruction,
    number,
}: InstructionsItemProps) {
    return (
        <li>
            <span>{number}</span>
            <span>{instruction}</span>
        </li>
    );
}

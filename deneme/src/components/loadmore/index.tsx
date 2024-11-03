import Button from "../button";


type Props = {
    limit: number;
    handleClick: () => void;
}

const LoadMore = ({ limit, handleClick }: Props) => {
    return (
        <div>{limit < 30 && (
            <Button handleClick={handleClick} title="Devamını Yükle" />
        )}
        </div>
    );
};

export default LoadMore;
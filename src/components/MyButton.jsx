
export function MyButton({ link, name }) {
    return (
        <a href={link} style={{ margin: '0 5px' }}>
            <button>{name}</button>
        </a>
    );
}

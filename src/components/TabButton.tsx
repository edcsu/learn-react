
export default function TabButton(props: any) {

    return (
        <li>
            <button className={props.isSelected ? 'active' : ''} onClick={props.onSelect}>
            {props.children}
            </button>
        </li>
    )
}
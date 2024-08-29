
export default function TabButton(props: any) {
    function handleClick() {
        console.log('Tab clicked')
    }

    return (
        <li>
            <button onClick={handleClick}>
            {props.children}
            </button>
        </li>
    )
}
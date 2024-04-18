export default function Message()
{
    function handleClick()
    {
        console.log("You clicked the button");
    }
    return <button onClick={handleClick}>Click here to see the message</button>
}
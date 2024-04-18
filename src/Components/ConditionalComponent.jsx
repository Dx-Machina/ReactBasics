import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent()
{
    let condition = true;
    //let message;
    // if (condition)
    // {
    //     message = <Welcome />
    // }
    // else
    // {
    //     message = <Code />
    //}
    //return message;
    return condition ? <Welcome /> : <Code />;
}
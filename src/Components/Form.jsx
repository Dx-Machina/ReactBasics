export default function Form()
{
    const [firstname, setFirstname] = useState({fname:"",lname:""}); //not a good practice to create a "state" for each input field, instead use a single state for the form

    // function write(text)
    // {
    //     setFirstname(text);
    // }
    // function displayEvent(e)
    // {
    //     console.log(e);
    // }
    return <div>
        <form>
            
            <input 
                type="text" 
                value={name.fname} 
                onChange={(e)=>setName({...name, fname: e.target.value})} 
            />
            <br />

            <label >Lastname:</label>
            <input
                type="text" 
                value={name.lname} 
                onChange={(e)=>setName({...name, lname:e.target.value})} 
            />
            <button onClick={handleClick(e)}>Submit</button>
        </form>
    </div>
}
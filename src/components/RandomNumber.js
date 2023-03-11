import {useState} from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

function RandomNumber({maxNum}) {
    const [number, setNumber] = useState(generateRandomNumber(maxNum));
    const changeRandomNumber = () => {
        setNumber(generateRandomNumber(maxNum))
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={changeRandomNumber}>Generate random number</button>
        </div>
    );
}

export default RandomNumber;
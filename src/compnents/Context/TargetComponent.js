import { useContext } from "react";
import ExampleContext from "./ExampleContext";

const A = () => {
    const x = useContext(ExampleContext)
    return <h1>Hello, {x.name}</h1>
}

export default A;
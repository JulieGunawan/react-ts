import { PersonProps } from "../components/Person.types";
const Person = (props: PersonProps) => {
    return (
        <>
            <div>{props.name.first}</div>
        </>
    )
};

export default Person;
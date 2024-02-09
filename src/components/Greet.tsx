import Person from "../components/Person";

type GreetProps = {
    // person: Person;
    name:string;
    messageCount: number;
    isLogin: boolean;
}

export const Greet = (props: GreetProps) => {
    return (
        <>
       
        {props.isLogin ? <h1>Welcome ${props.name}, you have ${props.messageCount} unread messages</h1> : <h1>Welcome Guest</h1>}
        </>
    )
}
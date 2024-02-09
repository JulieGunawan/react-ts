type PersonsListProps = {
    names: {
        first: string;
        last: string;
    }[]
}
export const PersonList = (props: PersonsListProps) =>{
    return(
        <>
           {props.names.map((name) => {
                return (
                    <h2 key={name.first}>{name.first} {name.last}</h2>)
                })}
                
        </>
    )
}
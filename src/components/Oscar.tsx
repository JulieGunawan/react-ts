type OscarProps = {
    children: React.ReactNode
}
export const Oscar = (props:OscarProps) =>{
    return(
        <>
            <h3>{props.children}</h3>
        </>
    )
}
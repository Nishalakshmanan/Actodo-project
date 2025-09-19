function Card(props){
    return(
        <div style={{backgroundColor:props.bgcolor}} className=" px-6 py-3 flex-grow text-center rounded-md sm:px-10 sm:py-5">
         <h1 className="text-2xl font-medium">{props.title}</h1>
         <p>{props.subtitle}</p>
        </div>
    )
}
export default Card
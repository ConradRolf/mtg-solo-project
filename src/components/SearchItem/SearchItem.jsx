

function SearchItem(props) {

    return (
        <>
        <h4>{props.card.name}</h4>
        <img src={props.card.imageURL}/>
        </>
    )
}

export default SearchItem
const Card = () => {

    return (
        <div className={CardStyles.cardContainer} style={inlineExample}>
        <h4>Gracias, {name}!</h4>
        <h4>Tu color favorito es el: {colorFavorito} {modelName}.</h4>
        </div>
    )
}

export default Card
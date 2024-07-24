import "./Banner.css"

// https://community.kde.org/images.community/thumb/4/40/Mascot_konqi.png/360px-Mascot_konqi.png?20170108205743

function Banner(props) {
    return (
        <figure className="banner">
            <img src={props.imagem}/>
            <figcaption id="texto">{props.legenda}</figcaption>
        </figure>
    );
}

export default Banner;
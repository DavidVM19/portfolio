import Back from '../../../resources/background.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home__background">
                <img src={Back} alt="background" />
            </div>
            <div className="home__presentation">
                <strong>David Valenzuela Martinez</strong>
                <p>Développeur Junior FullStack</p>
                <p>Pays Basque / Sud Landes</p>
            </div>
        </div>

    )
}

export default Home;
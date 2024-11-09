import team1 from '../../assets/images/1.png'
import team2 from '../../assets/images/12.png'
import team3 from '../../assets/images/9.png'
import team4 from '../../assets/images/5.png'

//style
import './ourLeader.scss'

const OurLeader = () => {
    return (
        <div className="our-leader">
            <div className="container">
                <div className="content">
                    <h2>Meet our leader</h2>
                    <p>Beratung’s global leadership is comprised of several key entities, including the managing partner, the Shareholders Council (elected board of directors), the Acceleration Team (global leadership team), and the leaders of various offices and practices.</p>
                    <div className="cards">
                        <div>
                            <span className="img-card">
                                <img src={team2} alt="" />
                            </span>
                            <h5>Maverick Nguyen</h5>
                            <p>Graphic Designer</p>
                        </div>
                        <div>
                            <span className="img-card">
                                <img src={team4} alt="" />
                            </span>
                            <h5>Georgina Smith</h5>
                            <p>CEO - Marketting</p>
                        </div>
                        <div>
                            <span className="img-card">
                                <img src={team3} alt="" />
                            </span>
                            <h5>Benjamin Pavard</h5>
                            <p>CEM - digiNova</p>
                        </div>
                        <div>
                            <span className="img-card">
                                <img src={team4} alt="" />
                            </span>
                            <h5>Christina Rodriguez</h5>
                            <p>Photographer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurLeader
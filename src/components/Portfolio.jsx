import { portofolioList } from '../data/DataPortfolio'
import '../styles/Portfolio.css'
import { Link } from 'react-router-dom'

function Portfolio() {
  return (
    <section id="portofolio">
        <div className="wrapper">
            <h3>Portfolio</h3>
            <div className="grid">
                {
                    portofolioList.map((item)=> {
                        return (
                            <div className="item" key={item.id}>
                                <Link to={`/portofolio/${item.id}`}>
                                    <img src={item.image} alt="" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Portfolio
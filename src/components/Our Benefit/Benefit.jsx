import './benefit.scss'

const Benefit = () => {
    return (
        <div className='our-benefit'>
            <div className="container">
                <h2>Our Benefit</h2>
                <div className="cards">
                    <div className='benefit-card col-lg-4 col-sm-12'>
                        <div>
                            <h5>Enhanced Decision-Making</h5>
                            <p>Leverage AI data analysis capabilities to make informed and strategic decisions that drive growth.</p>
                        </div>
                        <div>
                            <h5>Predictive Analytics</h5>
                            <p>Anticipate market trends and customer behavior patterns to stay ahead of the competition.</p>
                        </div>
                    </div>
                    <div className='benefit-card col-lg-4 col-sm-12'>
                        <div>
                            <h5>Efficient Operations</h5>
                            <p>Automate repetitive tasks, streamline processes, and optimize resource allocation, leading to increased efficiency.</p>
                        </div>
                        <div>
                            <h5>Data-driven Insights</h5>
                            <p>Extract valuable insights from large datasets, enabling you to uncover hidden opportunities and address challenges.</p>
                        </div>
                    </div>
                    <div className='benefit-card col-lg-4 col-sm-12 last-card '>
                        <div>
                            <h5>24/7 Availability</h5>
                            <p>AI-powered systems can provide seamless customer support and engagement around the clock.</p>
                        </div>
                        <div>
                            <h5>Cost Savings</h5>
                            <p>Reduce operational costs by automating manual tasks and enhancing resource allocation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit
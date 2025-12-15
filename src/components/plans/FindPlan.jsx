import { useState, useEffect } from 'react';
import PayMonthly from './payType/PayMonthly';
import './findPlans.scss'
import PayYearly from './payType/PayYearly';
const FindPlan = () => {

    const [activeBtn, setActiveBtn] = useState(null);
    const toggleFilter = (button) => {
        setActiveBtn(button)
    }

    useEffect(() => {
        toggleFilter("btn1")
    }, [])

    return (
        <div className='findPlan'>
            <div className="container">
                <div className="content d-flex flex-wrap align-items-center justify-content-between gap-4">
                    <div className="findPlanHead container-sm pb-4 col-lg-4 col-sm-12">
                        <h2 className='text-white'>Find Your Right Plan</h2>
                        <p className='plan-description'>We offer a variety of pricing packages to meet the unique needs of our services. Contact us today to discuss which package is right for you.</p>
                        <div className="btns">
                            <button className={activeBtn === 'btn1' ? 'active' : ''} onClick={() => toggleFilter("btn1")}>Pay Monthly</button>
                            <button className={activeBtn === 'btn2' ? 'active' : ''} onClick={() => toggleFilter("btn2")}>Pay Yearly</button>
                        </div>
                    </div>
                    {activeBtn === "btn1" ? <PayMonthly /> : <PayYearly />}
                </div>
            </div>
        </div>
    )
}

export default FindPlan;
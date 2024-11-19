import useIntersectionFade from '../../Hooks/useIntersectionFade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked, faBox, faBolt } from '@fortawesome/free-solid-svg-icons'

//style
import './intelligent.scss'

const IntelligentSolutions = () => {

    const { addToRefs } = useIntersectionFade();

    return (
        <div className="intelligent_solutions">
            <div className="container">
                <div className="content d-flex flex-wrap">
                    <div className="intelligent_text col-lg-6">
                        <h2 ref={addToRefs}>Intelligent Solutions For Enhanced Customer</h2>
                        <div className="solutions_types" ref={addToRefs}>
                            <div className="choose">
                                <span><FontAwesomeIcon icon={faBoxesStacked} /></span>
                                <div>
                                    <h5>Choose Your Style</h5>
                                    <p>Online banking allows you to manage your finances from anywhere, anytime.</p>
                                </div>
                            </div>
                            <div className="choose">
                                <span><FontAwesomeIcon icon={faBox} /></span>
                                <div>
                                    <h5>Customize And Personalize</h5>
                                    <p>Empowering you to achieve your goals with precision and efficiency.</p>
                                </div>
                            </div>
                            <div className="choose">
                                <span><FontAwesomeIcon icon={faBolt} /></span>
                                <div>
                                    <h5>Fine-Tune And Refine</h5>
                                    <p>Embark on a journey of discovery and engagement with our dynamic content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intelligent_img col-lg-6">
                        <p ref={addToRefs}>Power up your website with our advanced chat bot that offers image and video tools, as well as quick and accurate question answering capabilities</p>
                        <div className="intelligent_bg" ref={addToRefs}>
                            <div className="intelligent_content">
                                <div className="business_problem">
                                    <p>1.77k+</p>
                                    <p>Business Problem</p>
                                </div>
                                <div className="business_setup">
                                    <p>2.3k+</p>
                                    <p>Business Setup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntelligentSolutions
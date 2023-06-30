import './About.css'
import image from '../../assets/about.jpg'

function About() {
    return (
        <div className='about-container'>
            <div className="about-text">
                <h2>About Us</h2>
                <p className="about-content">
                    Welcome to SuperbShorts, your premier destination for exceptional YouTube Shorts production. We specialize in transforming lengthy videos into captivating short-form content that captivates and engages viewers. 
                    <br />
                    <br />
                    With our expertise and dedication, we help you make a powerful impression in the world of YouTube Shorts.
                </p>
            </div>
            <div className="image-div">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default About
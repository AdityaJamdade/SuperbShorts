import './Services.css'
import image from '../../assets/about.jpg'

const Services = () => {
    return (
        <div className='services'>
            <h1 className="our-serivces-header">
                Our Services
            </h1>
            <div className="services-menu">
            <div className="service">
                    <img className='service-image' src={image} alt="converting long form videos to short form" />
                    <div className="service-content">
                        <h2 className='service-header'>Long Form Videos to Insightful Short content</h2>
                        <p>Creating the engaging short form videos using long format videos available.</p>
                        <button className='service-button'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="service">
                    <img className='service-image' src={image} alt="Generating and adding live captions" />
                    <div className="service-content">
                        <h2 className='service-header'>Generating live captions with different styles</h2>
                        <p>We can add quality captions for your video with the style you agree with!</p>
                        <button className='service-button'>
                            Learn More
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services
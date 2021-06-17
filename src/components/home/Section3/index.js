/* import external modules */
import { Carousel } from 'react-responsive-carousel'

/* import internal modules */
import Testimonial from './Testimonial'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Section3 = () => (
  <Carousel showThumbs={false} showIndicators={true} autoPlay>
    <div>
      <Testimonial />
    </div>
    <div>
      <Testimonial />
    </div>
    <div>
      <Testimonial />
    </div>
  </Carousel>
)

export default Section3

import { FaArrowRight } from 'react-icons/fa';

export default function Hero(){
    return(
        <section  className='hero container d-flex align-items-end justify-content-end p-4'> 
                    <p className="back-color text-decoration-underline"> SEE NEW COLLECTION</p>  
             <div className='back-color'> <FaArrowRight />  </div>     
        </section>
    )
}
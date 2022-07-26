import { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa'
import './Card.css'

function Card() {

    const [advices, setAdvices] = useState([])

    const baseURL = 'https://api.adviceslip.com/advice'

    async function findAllAdvices () {
    const response = await fetch(baseURL);
    const advices = await response.json();
    setAdvices([advices.slip])
    }
    console.log("slip",advices)

    useEffect(() => {
        findAllAdvices()
    }, [])


  return (
    <div className='container_Advices'>
        {advices.map((advice, index) => (
        <div key={index} className='card_Advices'>
            <p className='text_Advice'>
                {`"${advice.advice}"`}
            </p>  
        </div>      
        )
        
        )}
        
    </div>
  )
}

export default Card
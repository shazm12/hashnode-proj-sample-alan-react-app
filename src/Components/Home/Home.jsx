import React,{useEffect} from 'react'
import './Home.css';
import alanBtn from '@alan-ai/alan-sdk-web';

const Home = () => {
  useEffect(() => {
      alanBtn({
        key: "ba2c2647d1d476d917adb0629e9efccb2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command }) => {
          if(command === 'navigate') {
            window.location.href(`http://127.0.0.1:5173/products`);
          }
        }
      })
  },[])
  return (
    <>
    <div className='main__container'>
        <div className='main__title'>
            <h1 className='main__title-text'>Welcome to this Sample Ecommerce Shop</h1>
        </div>
        <div className='main__description'>
            <p className='main__description-text'>Use our chatbot to ask questions about our shop and also to navigate to pages and such.</p>

        </div>
    </div>
    </>
  )
}

export default Home;
import React from 'react'
import { Header } from './Header'
import hero from '../assets/hero.png'
import { Title } from './Title'
export const Hero = () => {
  return (
    <div className='b-gradient'>
        <Header/>
        <div className="p-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                <Title text="Invest Smarter, Save Better, Live Freer"/>
                <p className="lead mt-3">
                    Explore a world of tailored financial solutions designed to help you achieve your dreams.
                </p>
                <div className="mt-4">
                    <button className="btn btn-primary btn-lg mx-2">Explore Our Products</button>
                    <button className="btn btn-outline-light btn-lg mx-2">Start Your Journey</button>
                </div>
                </div>
                <div className="col-lg-6">
                    <div className='d-flex'>
                        <img src={hero} alt="" className='mx-auto img-fluid rounded-4' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

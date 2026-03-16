import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <a href="https://zerodha-dashboard-fb5x.onrender.com">
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"18%", margin: "0 auto"}}>Go to Dashboard</button></a>
            </div>
        </div>
     );
}

export default Hero;
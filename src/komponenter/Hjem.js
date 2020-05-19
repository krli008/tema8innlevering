import React from 'react'
import Footer from './footerStuff/Footer'
import { Route } from 'react-router-dom'

//Akkurat nå fører alle bottonsene til Nyhet siden

const Hjem = () => {
    return(
        <section className='HomePage'>
            <div className='bildeforside'>
                <img src="./img/forsidebilde1.jpeg" alt="to kvinner" />
                <h1 className='firstWord'>Summer <br></br> Cravings</h1>
            </div>

            <article className="tips1">
                <p>Fri frakt når du bestiller for over 300kr</p>
                <p>90 dager gratis retur </p>
            </article>

        
            <article className='forslag'>
            <div> 
                <img src="./img/jeans1.jpeg" alt="jeans" />
                <h1>Bukser</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
            <div>
                <img src="./img/shoes1.jpeg" alt="shoes" />
                <h1>Sko</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
            <div>
                <img src="./img/topp1.jpg" alt="tshirt" />
                <h1>Topper</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
            <div>
                <img src="./img/dress.jpeg" alt="dress" />
                <h1>kjoler</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
        </article>

        <article className='nytt1'>
            <img src="./img/forsidebilde2.jpeg" alt="bilde2forside" />
            <h1>Dess up <br></br> to stay in</h1>
            <img src="./img/forsidebilde3.jpeg" alt="bilde3forside" />
        </article>

        <footer>
            <Footer />
        </footer>
        
        </section>

    )
}

export default Hjem
import React from 'react'
import Footer from './footerStuff/Footer'
import { Route } from 'react-router-dom'

//Akkurat nå fører alle bottonsene til Nyhet siden

const Hjem = () => {
    return(
        <section className='HomePage'>
            <div className='bildeforside'>
                <img src="https://images.unsplash.com/photo-1552160753-117159821e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
                <h1 className='firstWord'>Summer <br></br> Cravings</h1>
            </div>

            <article className="tips1">
                <p>Fri frakt når du bestiller for over 300kr</p>
                <p>90 dager gratis retur </p>
            </article>

        
            <article className='forslag'>
            <div> 
                <img src="https://images.unsplash.com/photo-1547410701-73b5a0ada51d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" />
                <h1>Bukser</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1553545985-1e0d8781d5db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80" />
                <h1>Sko</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
            <div>
                <img src="https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200501hm1135.jpg"/>
                <h1>Topper</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1500643752441-4dc90cda350a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=657&q=80"/>
                <h1>kjoler</h1>
                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('/Nyhet') }}
                >Shop her</button>
                )} />
            </div>
        </article>

        <article className='nytt1'>
            <img src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            <h1>Dess up <br></br> to stay in</h1>
            <img src="https://images.unsplash.com/photo-1550614412-40be4484c638?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
        </article>

        <footer>
            <Footer />
        </footer>
        
        </section>

    )
}

export default Hjem
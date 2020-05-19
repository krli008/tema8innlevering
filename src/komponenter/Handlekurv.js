import React from 'react'
import './ProductsInfo/handekurvCss.css'

//Ikke fått til å legge varer i handlekurven

const Handlekurv = () => {
    return(
        <section className='handekurvLayout'>
            <div className='varerHandlekurv'>
                <h1>Her kommer alt du har lagt til i handekurven</h1>
            </div>
            <form className='infoHandle'> 
                <h1>Mine opplysninger</h1>
                <br />
                <input placeholder="Fornavn"></input>
                <br />
                <input placeholder="Etternavn"></input>
                <br/>
                <input placeholder="Email"></input>
                <br />
                <input placeholder="Telefon nr"></input>
                <br />
                <input placeholder="Adresse"></input>
                <br />
                <input placeholder="Post kode"></input>
                <br/>
                <button>Gå videre til betaling</button>
            </form>
        </section>
    )
}

export default Handlekurv
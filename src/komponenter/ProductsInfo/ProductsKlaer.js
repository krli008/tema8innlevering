import React, { useState }  from 'react';
import './overlay.css'


const ProductsKlaer = (props) => {

    const [valgt, setValgt] = useState({})
    const [overlaySynlig, setOverlaySynlig] = useState(false)

    const edreSynlig = () => {
        setOverlaySynlig(!overlaySynlig)
    }

    const fjern = () => {
        setOverlaySynlig(false)
    }

    const lagTekst = (klaerProductsList) => {
        edreSynlig();
        setValgt(klaerProductsList)
    }

    return(
        <section onclick={ fjern } className='produkter'>
        <div onClick={ () => lagTekst()} className='product'>
            <img src={props.Image} alt="{bilde av plag}"/>
            <h4>{props.Navn}</h4>
            <h5>Pris {props.Pris}</h5>
        </div>

        <div className='overlay' style={{ display: overlaySynlig ? 'grid' : 'none'}}>
            <p className='xknap' onClick={fjern}>X</p>
            <img className='bildeProd' src={props.Image} alt="{bilde av plag}"/>
            <h4 className='infoProd'>{props.Navn}</h4>
            <h5 className='infoProd'>Pris {props.Pris}</h5>
            <h5 className='infoProd'>Størrelse</h5>
            <h4 className='infoProd'>{props.Størrelse}</h4>
            <button>Legg til i handlekurven</button>
        </div>
        </section>
    )
}

export default ProductsKlaer
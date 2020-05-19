import React from 'react'
import './footer.css'


const Footer = () => {
    return(
<article className='footer'>
            <div>
                <h1>Hjelp</h1>
                <br/>
                <p>Kundeservice</p>
                <br />
                <p>Vilkår og betingelser</p>
                <br />
                <p>Integritetspolicy</p>
                <br />
                <p>Cookies</p>
                <br />
                <p>Angrerett og retur</p>
            </div>
            <div>
            <h1>Informasjon</h1>
                <br/>
                <p>Jobb i (NETTSIDEN SITT NAVN)</p>
                <br />
                <p>Om (NETTSIDEN SITT NAVN)</p>
                <br />
                <p>Investor Relations</p>
            </div>
            <div>
            <h1>Følg Oss</h1>
                <br/>
                <p>Facebook</p>
                <br />
                <p>Instagram</p>
                <br />
                <p>Youtube</p>
                <br />
            </div>
            <div>
                <h1>Nyhetsbrev</h1>
                <br />
                <input placeholder='email@adresse.com' />
                <button>Enter</button>
                <br />
                <p>Bli først med siste nytt og få fantastiske tilbud</p>
            </div>
        </article>
    )
}

export default Footer
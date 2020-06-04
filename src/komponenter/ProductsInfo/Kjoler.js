import React, { useState, useEffect} from 'react';
import ProductsKlaer from './ProductsKlaer'
import './ProductsCss.css'

const klaerProductsList = [
    {
        "Id": 1,
        "Navn": "GONNA BREAK EVERY RULE MIDI DRESS RED",
        "Kategori": "Kjole",
        "Pris": "750 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191212hm67203.jpg"
    },
    {
        "Id":2,
        "Navn": "I GUARANTEE IT DOES DRESS YELLOW",
        "Kategori": "Topp",
        "Pris": "580 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200117hm0975.jpg"
    },
    {
        "Navn": "EXETER DRESS WHITE",
        "Kategori": "Kjole",
        "Pris": "550 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/h/m/hm1908160874.jpg"
    },
    {
        "Navn": "SEE YOU WATCHING ME DRESS BLUE",
        "Kategori": "Kjole",
        "Pris": "600 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191031hm01891.jpg"
    },
    {
        "Navn": "WALK THAT WALK DRESS BLUE",
        "Kategori": "Kjole",
        "Pris": "650 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/190920hm31611.jpg"
    },
    {
        "Navn": "THE ESSENTIAL RIB TANK DRESS BLUSH",
        "Kategori": "Kjole",
        "Pris": "340 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/h/m/hm_191010_1227.jpg"
    },
    {
        "Navn": "AFTER ALL THIS TIME DRESS PEACH",
        "Kategori": "Kjole",
        "Pris": "450 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191004hm36393.jpg"
    },
    {
        "Navn": "MOSSMAN CHANGE OF HEART DRESS JADE",
        "Kategori": "Kjole",
        "Pris": "430 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191004hm34957.jpg"
    },
    {
        "Navn": "ZESTY DRESS BLACK",
        "Kategori": "Kjole",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200207hm0046.jpg"
    },
    {
        "Navn": "ZESTY DRESS ROSE",
        "Kategori": "Kjole",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200207hm_part377653.jpg"
    },
    {
        "Navn": "FAVOURITE THINGS DRESS BABY BLUE",
        "Kategori": "Kjole",
        "Pris": "400 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191011hm37437.jpg"
    },
    {
        "Navn": "LIONESS FENG SHUI MINI DRESS BLUE",
        "Kategori": "Kjole",
        "Pris": "700 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/190801hm12495.jpg"
    },
    {
        "Navn": "CANDY HEARTS DRESS RUST",
        "Kategori": "Kjole",
        "Pris": "500 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200104hm2294.jpg"
    },
    {
        "Navn": "MOSSMAN I’M YOUR LADY MINI DRESS MUSTARD",
        "Kategori": "Kjole",
        "Pris": "340 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/190301hm0037.jpg"
    },
    {
        "Navn": "MOSSMAN CHANGE OF HEART DRESS WHITE",
        "Kategori": "Kjole",
        "Pris": "340 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191004hm34784.jpg"
    },
    {
        "Navn": "LITTLE DITTY CROP SAGE",
        "Kategori": "Topp",
        "Pris": "200 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200501hm1115.jpg"
    },
    {
        "Navn": "FINDING FRANCES CROP WHITE",
        "Kategori": "Topp",
        "Pris": "200 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200207hm_part277302_1.jpg"
    },
    {
        "Navn": "GET OUTTA MY DREAMS CROP PINK",
        "Kategori": "Topp",
        "Pris": "250 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200214hm_pt279643_1_1.jpg"
    },
    {
        "Navn": "I BELIEVE IN DESTINY CROP PINK",
        "Kategori": "Topp",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191017_part244244.jpg"
    },
    {
        "Navn": "LAY DOWN THE RULES TOP WHITE",
        "Kategori": "Topp",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191004hm36788.jpg"
    },
    {
        "Navn": "CARRY ME FORWARD TOP BLACK",
        "Kategori": "Topp",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191025hm47463.jpg"
    },
    {
        "Navn": "JUST ANOTHER SUNDAY KNIT TOP BLUE",
        "Kategori": "Topp",
        "Pris": "250 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/191212hm_part268660_1.jpg"
    },
    {
        "Navn": "LIPSTICK KISSES THROUGH THE PHONE CROP AQUA",
        "Kategori": "Topp",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200501hm2094.jpg"
    },
    {
        "Navn": "SNDYS DANY BODYSUIT PINK",
        "Kategori": "Topp",
        "Pris": "250 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200501hm2112.jpg"
    },
    {
        "Navn": "SNDYS DANY BODYSUIT BLACK",
        "Kategori": "Topp",
        "Pris": "250 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/1/9/190719hm_pt29521.jpg"
    },
    {
        "Navn": "DRENCHED IN WINE KNIT TOP WHITE",
        "Kategori": "Topp",
        "Pris": "350 Kr",
        "Størrelse": ["xs", "s", "m", "l", "xl"],
        "Image": "https://cdn1.hellomolly.com/media/catalog/product/cache/1/small_image/667x1001/c96a280f94e22e3ee3823dd0a1a87606/2/0/200214hm_pt279599_1_1.jpg"
    }
]

const Kjoler = (props) => {

    function highlightHandler (highlightedBtnId, containerId) {
        const klaerBtnCluster = document.getElementById('klaerDiv');

        if(containerId == 'klaerDiv') {
            for (var i = 0; i<klaerBtnCluster.getElementsByTagName('BUTTON').length; i++) {
                const currentBtn = klaerBtnCluster.getElementsByTagName("BUTTON") [i]
                if (currentBtn.className == 'highlightBtn') {
                    currentBtn.className = ' ';
                } else {
                    if (currentBtn.id==highlightedBtnId) {
                        currentBtn.className = 'highlightBtn';
                    } else {
                        currentBtn.className = ' ';
                    }
                }
            }
        } else if (containerId == 'all'){
            for ( var i = 0; i <klaerBtnCluster.getElementsByTagName('BUTTON').length; i++){
                const currentBtn = klaerBtnCluster.getElementsByTagName('button') [i]
                currentBtn.className = '' ;
            }
        }
    }

    var KlesplagProd = klaerProductsList
    var [products, filterProducts] = useState(KlesplagProd)

    const [klaer, setKlaer] = useState('all');

    useEffect( () => {
        filterKlaerProducts ();
    }, [klaer] )

    var changeValg = (typeklaer) => {
        setKlaer(typeklaer);
    }

    function filterKlaerProducts() {
        var copyKlaerProducts = [...KlesplagProd]
        if (klaer === 'all') {
            console.log('1')
            filterProducts(klaerProductsList)
            return;
        }
    }

    return(
        <article className='nyhetSide'>
            <div className='leftSideBar'>
                <div className='leftSideBarTitle'>
                    <h1>Nyheter</h1>
                    <h3>Kategorier</h3>
                </div>
                <div className='leftSideBarKat'>

                <Route render={({ history}) => (
                <button type='button' onClick={() => { history.push('Kjoler') }}    
                >Kjoler Prøve</button>
                )} />

                    <button id='btn-alle-valgt' onClick={ () => {
                        highlightHandler('btn-alle-valgt', 'all')
                        changeValg('all')
                    }}>Vis alt</button>

                    <button id='btn-kjole-valgt' onClick={ () => {
                        highlightHandler('btn-kjole-valgt', 'klaerDiv')
                        changeValg('KjoleValg');
                    }}>Kjole</button>

                    <button id="btn-topp-valgt" onClick={ () => {
                        highlightHandler('btn-topp-valgt', 'klaerDiv')
                        changeValg('ToppValg');
                    } }>Topp</button>

                    <button id="btn-sko-valgt" onClick={ () => {
                        highlightHandler('btn-sko-valgt', 'klaerDiv')
                        changeValg('SkoValg');
                    } }>Sko</button>

<                   button id="btn-bukse-valgt" onClick={ () => {
                        highlightHandler('btn-bukse-valgt', 'klaerDiv')
                        changeValg('BukseValg');
                    } }>Bukse</button>
                </div>
            </div> 

            <div className='productsShow-columns'>
                {products.map(
                    (product, i)  =>
                    <ProductsKlaer
                    key={i}
                    Image={product.Image}
                    Navn={product.Navn}
                    Pris={product.Pris}
                    />                    
                )
                }
            </div>
        </article>

    )
}

export default Kjoler
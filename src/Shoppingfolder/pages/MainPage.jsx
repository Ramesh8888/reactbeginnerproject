import React,{useState} from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Collections from '../component/Collections'
import Footer from '../component/Footer'
import {Gents, Ladies} from '../data'
import { Childrens } from '../data'
import WomenCollection from '../component/WomenCollection'

const Mainpage =()=>
{
    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [womenfashion, setWomenfashion] = useState(Ladies)
    console.log(Gents)
    console.log(Ladies)
    return (
        <div>
            <Header/>
            <Banner/>
            <Collections gentsFashion={gentsFashion}/>
            <WomenCollection womenfashion ={womenfashion}/>
            <Footer/>
        </div>
    )
}
export default Mainpage
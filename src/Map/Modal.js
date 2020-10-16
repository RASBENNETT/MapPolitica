import React from "react"
import "../map-style.css"
import * as svgs from "../CountryComponents/index.js"
import CloseButtonSvgOn from "../CountryComponents/CloseButtonOn"
import CloseButtonSvgOff from "../CountryComponents/CloseButtonOff"

const Modal = ({info, setSelectedCountry}) => {

    let Svg = null
    let currencies = null
    let languages = null
    if (info) {
        const [fst, ...rest] = info.alpha3Code
        const correctedCode = [fst, rest.join('').toLowerCase()].join('')
        Svg = svgs[correctedCode]

        currencies = info.currencies.map(currency => {
             return (
                 <div>
                     <div>currency: {currency.name}</div>
                     <div>symbol: {currency.symbol}</div>
                 </div>
             )
        })

        languages = info.languages.map(language => {
            return (
                <div>
                    <span>{language.name} </span>
                    <span> ({ language.nativeName })</span>
                </div>
            )
        })
    }

    return (
        info ? 
        <div className="modal">

            <Svg height="8vh" width="14vw" fill="black"></Svg>

            <div className="info-bit">
                Name : {info.name}
            </div> 

            <div>
                Native Name : {info.nativeName}
            </div>
            <div>
                Region : {info.region}
            </div>
            <div>
                Area (m2) : {info.area}
            </div>

            <div className="info-bit">
                Capital : {info.capital}
            </div>

            <div className="info-bit">
                Population : {info.population}
            </div>

            <div className="info-bit">
                {currencies}
            </div>

            <div>
                Language(s) : {languages}
            </div>

            <div>
                Top level domain : {info.topLevelDomain[0]}
            </div>

            <img src={info.flag} alt="Flag" className="modal-flag"/>

            <CloseButtonSvgOff onClick={() => setSelectedCountry(null)} className="close-modal-button"></CloseButtonSvgOff>
            {/* <button onClick={() => setSelectedCountry(null)} className="close-modal-button"></button> */}
        </div>
        : null
    )

}

export default Modal;
import React from "react"
import "../map-style.css"
import SvgMap from "../CountryComponents/Map.js"
import * as svgies from "../CountryComponents/index.js"
import CloseButtonSvg from "../CountryComponents/CloseButton"


const Modal = ({info, setSelectedCountry}) => {

    // const svgs = SvgMap().props.children.props.children
    // let selectedSvg = null
    let Svg = null
    if (info) {
        const [fst, ...rest] = info.alpha3Code
        const correctedCode = [fst, rest.join('').toLowerCase()].join('')
        console.log(correctedCode);
        
        Svg = svgies[correctedCode]
        console.log(Svg);
        // selectedSvg = svgs.find(svg => svg.props.id === info.alpha3Code)
    }
    // console.log(selectedSvg);

    return (
        info ? 
        <div className="modal">

            <Svg height="19vh" width="23vw" fill="black"></Svg>


            <div className="info-bit">
                Name : {info.name}
            </div> 

            <div>
                Native Name : {info.nativeName}
            </div>

            <div className="info-bit">
                Capital : {info.capital}
            </div>

            <div className="info-bit">
                Population : {info.population}
            </div>

            <img src={info.flag} alt="Flag" className="modal-flag"/>

            <CloseButtonSvg onClick={() => setSelectedCountry(null)} className="close-modal-button"></CloseButtonSvg>
            {/* <button onClick={() => setSelectedCountry(null)} className="close-modal-button"></button> */}
        </div>
        : null
    )

}

export default Modal;
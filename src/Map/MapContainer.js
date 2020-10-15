import React, {useState, useEffect} from "react"
import SvgMap from "../CountryComponents/Map.js"
import useWindowDimensions from "../dimensionWorker"
import Modal from "./Modal"

const MapContainer = () => {

    const { height, width } = useWindowDimensions();

    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState([])

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
         .then(res => res.json())
         .then(res => {
            const countries = {}
            res.forEach(country => countries[country.alpha3Code] = country)
            setCountries(countries)
         })
    },[])

    return(
    <div>
        <SvgMap width={width/1.5} height={height/1.5} onClick={(e) => setSelectedCountry(e.target.id.split("_")[0])} />
        {selectedCountry ? <Modal country={selectedCountry} info={countries[selectedCountry]} setSelectedCountry={setSelectedCountry} /> : null}
    </div>
    )
}

export default MapContainer


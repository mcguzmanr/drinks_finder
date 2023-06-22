
import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()


// eslint-disable-next-line react/prop-types
const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([])
    const [dataDrink, setDataDrink] = useState(true)
    const [modal, setModal] = useState(false)
    const [ bebidaId, setBebidaId ] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if(!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

                const { data } = await axios(url)

                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    }, [bebidaId])


    const queryDrinksByIngredient = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}` 
            const { data } = await axios(url)
            if(data != '') {
                setBebidas(data.drinks)
            } else{
                setDataDrink(false)
            }  

        } catch (error) {
            console.log(error)
        }
    }


    const queryDrinksByCategory = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${datos.categoria}` 
            
            const { data } = await axios(url)
            setBebidas(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }



    const handleModalClick = () => {
        setModal(!modal)
    }
    
    const handleBebidaClick = id => {
        setBebidaId(id)
    }
    return (
        <BebidasContext.Provider
            value={{
                bebidas,
                handleModalClick,
                modal,
                handleBebidaClick,
                receta,
                cargando,
                queryDrinksByIngredient,
                queryDrinksByCategory,
                dataDrink,
                setDataDrink
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}
export {
    BebidasProvider 
}

export default BebidasContext

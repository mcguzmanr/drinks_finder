
import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando} = useBebidas()

    const mostrarIngradientes = () => {
        let ingredients = []

        for(let i = 1; i < 16;  i++){
            if(receta[`strIngredient${i}`]){
                ingredients.push(
                    
                    <li key ={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }
    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image 
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta $receta.strDrink`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-3">
                        <h2>Instructions</h2>
                        {receta.strInstructions}
                        <h2>Ingredients and amounts</h2>
                        {mostrarIngradientes()}
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida

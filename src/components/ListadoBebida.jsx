import { Row } from "react-bootstrap"
import ModalNoData from "./ModalNoData"
import useBebidas from "../hooks/useBebidas"
import Bebida from "./Bebida"

const ListadoBebidas = () => {

    const { bebidas, dataDrink } = useBebidas()
    return (
        dataDrink ? (
            <Row className="mt-5">
                {bebidas.map(bebida => (
                    <Bebida 
                        key={bebida.idDrink}
                        bebida={bebida}
                    /> 
                ))}
            </Row>
        ) : (
            <ModalNoData />
        )

    )
}

export default ListadoBebidas

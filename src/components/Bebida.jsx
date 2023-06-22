/* eslint-disable react/prop-types */
import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

// eslint-disable-next-line react/prop-types
const Bebida = ({bebida}) => {

    const { handleModalClick, handleBebidaClick } = useBebidas()
    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`Imagen de ${bebida.strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{bebida.strDrink}</Card.Title>
                    
                    <Button
                        variant={'outline-danger'}
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleModalClick()
                            handleBebidaClick(bebida.idDrink)
                        }}
                    >
                        How to prepare this drink
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida

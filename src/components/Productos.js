import { Component } from 'react'
import Producto from './Producto'

//en este proyecto vamos a aplicar estilo en línea
const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}


class Productos extends Component {
    render(){
        const { productos, agregarAlCarro } = this.props

        return(
          <div style={styles.productos}>
            {productos.map(producto =>
                <Producto
                //agregarAlCarro={()=> agregarAlCarro()}-> no se ejecutaría al estar envuelta en una función anónima
                    agregarAlCarro={agregarAlCarro}
                    key={productos.name}
                    producto={producto}
                />
            )}
          </div>
        )
    }
}

export default Productos
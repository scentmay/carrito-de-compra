import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/images/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/images/productos/arbejas.jpg' },
      { name: 'Lechuga', price: 500, img: '/images/productos/lechuga.jpg' }
    ],
    carro: [],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) => {
    //Comprobamos si ya existe el producto en el carro para añadirlo o crear uno nuevo
    //primero necesitamos traer nuestro carro y lo sacamos del state
    const { carro } = this.state
    //miramos si dentro de ese carro hay un item q contenga el mismo nombre que nuestro producto, en el caso que así sea, ejecutamos la lógica de añadir 1 a la cantidad
    if (carro.find(x=>x.name === producto.name)) {
      //definimos un nuevo carro de compras en base al existente y preguntamos si coinicide el nombre con el producto q estamso iterando
      //en caso afirmativo añadimos el producto al carro aumentando en 1 la cantidad
      //en caso negativo, devolvemos el mismo elemento
      const newCarro = carro.map (x=> (x.name === producto.name) ? ({
        ...x,
        cantidad: x.cantidad +1
      })
      : x)
      //return para q no siga ejecutando
      return this.setState({carro: newCarro})
    }

    
    //caso q no se ejecute el if ejecutamos esta parte del código
    //utilizamos return para que corte la ejecución, por si hubiera más líneas de código por debajo (aunque ene ste caso no las hay)
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }


  mostrarCarro = () => {
    if(!this.state.carro.length) {
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }


  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro} />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>



      </div>
    )
  }
}

export default App;

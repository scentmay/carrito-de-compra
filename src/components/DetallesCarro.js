import { Component } from 'react'

const styles = {
    detallescarro: {
        // con la siguiente línea nos aseguramos que el componente tape lo que haya detrás
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul:{
        margin: 0,
        padding: 0
    },
    li:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #ccc'
    }
}

class Detallescarro extends Component {
    render(){
        const { carro } = this.props
        return(
            <div style={styles.detallescarro}>
                <ul style={styles.ul}>
                    {carro.map(x =>
                        <li style={styles.li} key={x.name}>
                            {x.name}
                            <img alt={x.name} src={x.img} width= '50' height='32' />
                            <span>{x.cantidad}</span>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Detallescarro
import { Component } from 'react'

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        width: '1200px'
    }
}


class Layout extends Component {
    render(){
        return(
            // vamos a hacer 2 div, el más externo para centrar contenido, el siguiente para asignar un ancho de 1200px
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout
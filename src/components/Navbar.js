import { Component } from 'react'
import Logo from './Logo'
import Carro from './Carro'


const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        padding: '0 50px',
        postion: 'relative',
        borderBottom: '1px solid #ccc'
    }
}

class Navbar extends Component {
    render(){

        const { carro } = this.props

        return(
            <nav style={styles.navbar}>
                <Logo />
                <Carro carro={carro}/>
            </nav>   
        )
    }
}

export default Navbar
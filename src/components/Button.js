import { Component } from 'react'

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '10px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render(){
        console.log(this.props)
        return(
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button
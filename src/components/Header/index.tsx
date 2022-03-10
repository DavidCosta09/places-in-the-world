import './styles.scss'
import Logo from '../../assets/logo.png'

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="header__content">
                <img className='header___content__img' src={Logo} alt="" />    
            </div>    
        </div>

    )
}

export {HeaderComponent}
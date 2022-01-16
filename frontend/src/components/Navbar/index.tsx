import { ReactComponent as GitHubIcon } from 'assets/img/Vector.svg';
import './style.css';
function Navbar() {
    return (

        <header>
            <nav className="container">
                <div className='dsmovie-nav-content'>
                    <h1>DsMovie</h1>
                    <a href="https://github.com/AbmaelFerreira"></a>

                    <div className='dsmovie-contact-container'>
                        <GitHubIcon />
                        <p className='dsmovie-contact-link'>/DevSuperior</p>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
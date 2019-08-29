import * as React from 'react';
import Login from "../Login";
import Button from '../Button';
import Modal from '../Modal';


export const Header: React.FunctionComponent = () => {
    const[modalOpen, setModalOpen] = React.useState(true);
    const isLogin = false;
    const handleToggle = () => {
        console.log(modalOpen);
        setModalOpen(!modalOpen);
    }
    return(
    <div className="header">
        <div className="header__nav">
            {modalOpen && 
            <Modal isOpen={modalOpen}>
                <div onClick={() => setModalOpen(!modalOpen)} className="modal__close">&times;</div>
               <Login handleToggle={handleToggle} />    
            </Modal>
                }
            <div className="header__logo">LOGO</div>
            <ul className="header__links">
                <li><a href="/" >Home</a></li>
                <li><a href="/" >Rooms</a></li>
                <li><a href="/" >About</a></li>
            </ul>
            <div className="header__right"  onClick={handleToggle}>
                {isLogin ? <img src={require('../../assets/images/avatar.jpeg')} alt="avatar" /> :
                <div className="header__right--log" >Login</div>
                }
            </div> 
        </div>
    </div>
    
)};

export default Header;
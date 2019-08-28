
/* const HeaderStyle = `
li {
    list-style: none;
    margin: 5px 0;
  }
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #efefef;
}

` */
const Header: React.FunctionComponent = () => (
    <>
 
        <div className="header">
            <div className="header__logo">LOGO</div>
            <ul className="header__links">
                <li><a href="/" >Home</a></li>
                <li><a href="/" >Rooms</a></li>
                <li><a href="/" >About</a></li>
            </ul>
            <div className="header__avatar">Avatar</div>
        </div>
    </>
)


export default Header;
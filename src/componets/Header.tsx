import { MdShoppingCart, MdAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        Shopping List
      </div>
      <div></div>
      <div className="menu">
        <MdAccountCircle size={35} onMouseEnter={() => alert('not supported yet')} />
        <MdShoppingCart size={35} onMouseEnter={() => alert('not supported yet')} />
      </div>
    </div>
  )
}

export default Header
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="nav">
        <h1 className="heading">Restaurant APP</h1>
        <div class="carting">
        <img src="/cart.jpg" alt="Cart-icon" className="cart" />
        <span>Your Cart</span>
        </div>
      </div>
      <img src="/restaurent_head.jpg" className="rest-bground" alt="restaurant-background" />
    </div>
  );
}

export default Header;

function CartItem({cartItems}) {
  return (
    <>
        <div className="cartItem">
          <img
            src={cartItems.photo}
            alt="cartItem"
            width="100%"
          />
          <h3> {cartItems.name} </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nesciunt cumque dicta debitis consectetur iste, reiciendis minima eveniet inventore!...</p>
          <button>Read More</button>
        </div>
    </>
  )
};

export default CartItem;
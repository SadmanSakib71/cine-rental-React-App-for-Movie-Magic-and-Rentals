import { useContext } from "react";
import { toast } from "react-toastify";
import checkout from "../../assets/icons/checkout.svg";
import { MovieContext } from "../../context/AllContext";
import CartItems from "./CartItems";

const CartDetails = ({ onClose }) => {
  const { cartData, setCartData } = useContext(MovieContext);

  const handleRemoveCart = (cartItemId) => {
    const filteredItem = cartData.filter((item) => item.id !== cartItemId);
    setCartData([...filteredItem]);
    toast.error("Removed an item successfully");
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-105 sm:max-w-150 lg:max-w-197.5 p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
              Your Carts
            </h2>
            {cartData.length === 0 ? (
              <p className="text-3xl">No Data Added</p>
            ) : (
              <>
                {" "}
                {cartData.map((cartItem) => (
                  <CartItems
                    key={cartItem.id}
                    cartItem={cartItem}
                    onDelete={handleRemoveCart}
                  />
                ))}
              </>
            )}

            <div className="flex items-center justify-end gap-2">
              <a
                className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
                href="#"
              >
                <img src={checkout} width="24" height="24" alt="" />
                <span>Checkout</span>
              </a>
              <a
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                href="#"
                onClick={onClose}
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

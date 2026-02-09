import deleteIcon from "../../assets//delete.svg";
import { getImageUrl } from "../../utills/cine-util";

const CartItems = ({ cartItem, onDelete }) => {
  return (
    <div>
      <div className="space-y-8 lg:space-y-12 max-h-112.5 overflow-auto mb-10 lg:mb-14">
        <div className="grid grid-cols-[1fr_auto] gap-4">
          <div className="flex items-center gap-4">
            <img
              className="rounded overflow-hidden"
              src={getImageUrl(cartItem.cover)}
              width={50}
              height={50}
              alt={cartItem.title}
            />
            <div>
              <h3 className="text-base md:text-xl font-bold">
                {cartItem.title}
              </h3>
              <p className="max-md:text-xs text-[#575A6E]">{cartItem.genre}</p>
              <span className="max-md:text-xs">${cartItem.price}</span>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <button
              className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white cursor-pointer"
              onClick={() => onDelete(cartItem.id)}
            >
              <img className="w-5 h-5" src={deleteIcon} alt="" />
              <span className="max-md:hidden">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

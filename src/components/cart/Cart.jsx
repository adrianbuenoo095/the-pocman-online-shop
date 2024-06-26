import {faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext} from "react";
import CartItem from "./CardItem";
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";
import {MultiContext} from "../../utils/MultiContext.jsx";

const Cart = () => {
    const illustrations = useFetchIllustrations()
    const {shopContext : ShopContext} = useContext(MultiContext);
    const {cartItems} = ShopContext;
    console.log("cartItems",cartItems);


    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
            </div>
            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                <div className="flex items-start justify-between">
                                    <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping
                                        Cart</h2>
                                    <div className="ml-3 flex h-7 items-center">
                                        <span className="absolute -inset-0.5"></span>
                                        <span className="sr-only">Close panel</span>
                                        <FontAwesomeIcon className="h-6 w-6" icon={faX}/>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <div className="flow-root">
                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                            {!illustrations && illustrations.map((illustration) => {
                                                if (cartItems[illustration.id] !== 0) {
                                                    return (
                                                        <CartItem key={illustration.id} data={illustration}/>
                                                    );
                                                }
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>0</p>
                                </div>
                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at
                                    checkout.</p>
                                <div className="mt-6">
                                    <a href="#"
                                       className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                                </div>
                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                    <p>
                                        or
                                        <button type="button"
                                                className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Continue Shopping
                                            <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
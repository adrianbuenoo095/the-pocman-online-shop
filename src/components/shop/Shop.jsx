import { useContext } from "react";
import { Link } from "react-router-dom";
import ShopItem from "./ShopItem";
import {useFetchIllustrations} from "../../hooks/useFetchIllustrations.js";

const Shop = () => {
    const illustrations = useFetchIllustrations()
    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-fuchsia-600">The Pocman Illustration</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Are you who you want to be?</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center" >
                    {illustrations && illustrations.map((illustration) => (
                        <div key={illustration.id}>
                            <Link to={`/illustrations/${illustration.id}`}>
                                <ShopItem id={illustration.id} title={illustration.title} description={illustration.description} price={illustration.price} url={illustration.image} />
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </>);

}

export default Shop;
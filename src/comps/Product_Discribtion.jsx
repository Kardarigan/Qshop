import React from "react";
import Brands from "./assets/all_brands"
import Products from "./functions/Products";

export default function Product_Discribtion(props) {
    const { product } = props;
    const thisBrand = Brands.filter((brand) => brand.brand === product.brand)[0];


    return (
        <section className="discribtion py-5">
            <hr />
            <div className="row py-5">
                <div className="col-lg-6">
                    <div className="p-2">
                        <h4 className="pb-2">. Discribtion</h4>
                        <hr className="mt-0 mb-5" />

                        <p>{product.describe}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-2">
                        <h4 className="pb-2">. Details</h4>
                        <hr className="mt-0 mb-5" />

                        <ul className="allDetails">
                            <li><span>Fabric :</span><span>{product.fabric}</span></li>
                            <hr />
                            <li><span>Brand :</span><span>{product.brand}</span></li>
                            <hr />
                            <li><span>Gender :</span><span>{product.category}</span></li>
                            <hr />
                            <li><span>Last Price :</span><span>${product.price}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row py-5 brand">
                <div className="col-lg-6">
                    <div className="p-2">
                        <h4 className="pb-2">. About this Brand</h4>
                        <hr className="mt-0 mb-5" />
                        <p>{thisBrand.about}</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="p-2">
                        <img src={thisBrand.cover} alt={thisBrand.brand} className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="related">
                <h3>. RELATED PRODUCTS</h3>
                <hr />
                <div className="row gy-3">
                    <Products category={product.category} brand={product.brand} slice="4" />
                </div>
            </div>
        </section>
    );
}
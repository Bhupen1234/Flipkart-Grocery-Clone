import React from 'react';
import "./ProductCategory.css";
import ProductsData from "../../ProductsData/Products.json";
import Popup from 'reactjs-popup';
import ProductNameToolTip from '../ProductNameToolTip/ProductNameToolTip';

interface ProductType {
    name: string;
    subcategories: string[];
}

interface ProductCategoryType {
    category: string;
    image: string;
    items: ProductType[];
}

const ProductCategory: React.FC = () => {
    return (
        <div className="products-container">
            {
                ProductsData.products.map((product: ProductCategoryType, index: number) => {
                    return (
                        <Popup
                            key={index}
                            trigger={(open: boolean) => (
                                <div style={{ cursor: "pointer" }}>
                                    <img src={product.image} alt={product.category} width={60} height={60} />
                                    <p style={{ fontWeight: 500, fontSize: "14px" }}>{product.category}</p>
                                </div>
                            )}
                            position="bottom center"
                            on={["hover", "focus"]}
                            closeOnDocumentClick
                            arrow={true}
                        >
                            <ProductNameToolTip items={product.items} />
                        </Popup>
                    )
                })
            }
        </div>
    );
}

export default ProductCategory;


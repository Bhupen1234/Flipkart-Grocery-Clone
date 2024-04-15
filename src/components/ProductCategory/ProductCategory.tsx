import React, { useState } from 'react';
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
    const [hoveredCategories, setHoveredCategories] = useState<boolean[]>(
        Array(ProductsData.products.length).fill(false)
      );
    
      const handleMouseEnter = (index: number) => {
        setHoveredCategories((prevState) => {
          const newState = [...prevState];
          newState[index] = true;
          return newState;
        });
      };
    
      const handleMouseLeave = (index: number) => {
        setHoveredCategories((prevState) => {
          const newState = [...prevState];
          newState[index] = false;
          return newState;
        });
      };
    return (
        <div className="products-container">
            {
                ProductsData.products.map((product: ProductCategoryType, index: number) => {
                    return (
                        <Popup
                            key={index}
                            trigger={(open: boolean) => (
                                <div style={{ cursor: "pointer" ,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} onMouseOver={() => handleMouseEnter(index)}
                                 onMouseOut={() => handleMouseLeave(index)}>
                                    <img src={product.image} alt={product.category} width={60} height={60} />
                                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"5px"}}>
                                    <p style={{ fontWeight: 500, fontSize: "14px" }}>{product.category}</p>
                                    <i className={`fa-solid fa-chevron-down ${hoveredCategories[index] ? 'fa-rotate-180' : ''} fa-xs`} style={{color: "black"}}></i>
                                    </div>
                                    
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


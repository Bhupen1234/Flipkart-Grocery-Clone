import React from 'react';
import "./ProductNameToolTip.css";
import Popup from 'reactjs-popup';

interface ItemType {
    name: string;
    subcategories: string[];
}

interface ItemsType {
    items: ItemType[];
}

const ProductNameToolTip: React.FC<ItemsType> = ({ items }) => {
    return (
        <div className="items-container">
            {
                items.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <Popup
                                trigger={<div className="product-name-tooltip">{item.name}</div>}
                                position="right center"
                                on={["hover", "focus"]}
                                closeOnDocumentClick
                                arrow={true}
                            >
                                <div className='item-subcategory-container'>
                                    <h3 style={{ color: "rgb(216, 213, 213)", padding: "22px", paddingBottom: "0px" }}>More in {item.name}</h3>
                                    {item.subcategories.map((subcategory, subIndex) => {
                                        return (
                                            <div key={subIndex} className='item-subcategory'>
                                                {subcategory}
                                            </div>
                                        )
                                    })}
                                </div>
                            </Popup>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductNameToolTip;

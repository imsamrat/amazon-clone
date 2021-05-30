import React, { useEffect } from 'react';
import Fakedata from '../../../Fakedata/Fakedata';
import Item from './Item';

const Shop = () => {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        setItems(Fakedata);
    }, []);
    return (
        <div className="d-flex justify-content-center">
            <div className="container">
                <div className="row mt-3 pt-3">
                    {
                        items.map(item => (<Item key={item.id} item={item}></Item>))
                    }
                </div>
            </div >
        </div >
    );
};

export default Shop;
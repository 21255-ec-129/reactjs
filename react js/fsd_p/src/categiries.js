import { useEffect, useState } from "react";
import axios from "axios";
import './pro.css';

function Categories() {
    const [data, setData] = useState([]);
    const [cnt, setCnt] = useState(0);
    const api = 'https://fakestoreapi.com/products';

    useEffect(() => {
        getProductlist();
    }, [cnt]);

    const getProductlist = () => {
        axios.get(api).then((response) => {
            setData(response.data);
        });
    }

    // Group products by category
    const groupedProducts = data.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});
    return (
        <>
            <p>{cnt}</p>
            <button onClick={() => setCnt(cnt + 1)}>count</button>
            <div className="products-list">
                {Object.keys(groupedProducts).map((category, index) => (
                    <div key={index}>
                        <h2>{category}</h2>
                        <div className="horizontal-list">
                            {groupedProducts[category].map((product, i) => (
                                <div className="card" key={i}>
                                    <img src={product.image} alt={product.title} />
                                    <p>{product.title}</p>
                                    <p>{product.price}</p>
                                    <p>{product.category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Categories;
import { price } from "../../assets/data";
import "./CardPrice.css";

export const CardPrice = () => {
    return (
        <div className="card-price-wrapper">
            <h2 className="card-price-wrapper__title">Стоимость</h2>
           
            <div className="card-price-container">
                {
                    price.map((el, i) => {
                        return <div className="card-price-block" key={i}>
                            <h3 className="card-price-block__title">{el.title}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
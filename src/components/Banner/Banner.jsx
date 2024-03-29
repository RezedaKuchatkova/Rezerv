import { useState } from "react";
import { banner } from "../../assets/data";
import { Button } from "../Button/Button";
import arrowLeft from "../../assets/images/arrow-l.svg";
import arrowRight from "../../assets/images/arrow-r.svg";
import "./Banner.css";

export const Banner = ({ setIsModal, isTryFree }) => {
    const [calc, setCalc] = useState(0);
    const next = () => {
        let tmp = calc;
        ++tmp >= banner.length ? setCalc(0) : setCalc(calc + 1);
    }
    const prev = () => {
        let tmp = calc;
        --tmp < 0 ? setCalc(banner.length - 1) : setCalc(calc - 1);
    }
    return (
        <div className="banner-wrapper">
           
            <div className="banner">
                <div className="banner__left-block">
                    <h1 className="banner__title">{banner[calc].title}</h1>
                    <p className="banner__text">{banner[calc].text}</p>
                    <Button
                        text={"Попробовать бесплатно"}
                        setIsModal={setIsModal}
                        isTryFree={isTryFree}
                    />
                </div>
                <div className="banner__right-block">
                    <img src={banner[calc].image} alt="Фото" />
                </div>
            </div>
         
        </div>
    )
}
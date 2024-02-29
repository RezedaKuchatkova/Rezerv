import { Layout } from "../components/Layout/Layout";
import { Location } from "../components/Location/Location";
import tg from "../assets/images/tg.svg";

export const Contacts = () => {
    return (
        <div className="location">
            <Layout>
                <Location />
            </Layout>
            <div className="footer__info">
                <p className="footer__info-rules">2024 Ed Space. Все права защищены</p>
                <div className="footer__network-block">
                    
                <a className="footer__network footer__network_tg" >
                    
                    <img src={tg} alt="Тг" /></a>
                </div>
            </div>
        </div>
    )
}
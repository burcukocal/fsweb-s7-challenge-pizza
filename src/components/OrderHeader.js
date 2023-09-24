import React from "react"
import halfPizza from "../Assets/adv-aseets/adv-form-banner.png"

const OrderHeader = (props) => {

    const { selectedPizzaPrice } = props;

    return (
        <div className="order-hero">
            <div className="image-container">
                <img src={halfPizza} alt="Half Pizza" className="centered-image" />
            </div>
            <div className="order-hero-container">
                <p className="mt-3 mb-3">Anasayfa - Seçenekler - <span style={{ color: "#CE2829" }}>Sipariş Oluştur</span></p>
                <h3 className="mb-3 mt-1 font-medium text-2xl">Position Absolute Acılı Pizza</h3>
                <div className="mb-3">
                    <div className="order-item w-full">
                        <p className="food-info-price">{selectedPizzaPrice}₺</p>
                        <div >
                            <p>4.9</p>
                            <p>(200)</p>
                        </div>

                    </div>
                </div>
                <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>
        </div>
    )
}

export default OrderHeader;
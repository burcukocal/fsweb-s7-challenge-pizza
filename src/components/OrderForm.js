import React, { useState } from "react";
import banner from "../Assets/adv-aseets/adv-form-banner.png";
import "./OrderForm.css";
import { NavLink, Link } from "react-router-dom";
import { Col, Row, Form, FormFeedback, FormGroup, Input, Label, Button } from "reactstrap";

const OrderForm = () => {
    const size = ["S", "M", "L"];
    const extras = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Doamtes", "Zeytin", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Mantar", "Ananas", "Kabak"];
    const pizza = {
        name: "Position Absolute Acı Pizza",
        size: "",
        price: 85.50,
        thickness: "",
        extras: [],
        count: 1,
        point: 4.9,
        comment: 200,
    };
    const errorPizza = {
        name: "",
        size: "",
        dough: "",
        extra: "",
        count: "",
        special: "",
    };

    const [order, setOrder] = useState(pizza);
    const [orderError, setOrderError] = useState(errorPizza);
    const [count, setCount] = useState(pizza.count);
    const [totalPrice, setTotalPrice] = useState(pizza.price);
    const [extraPrice, setExtraPrice] = useState(0);
    const [valid, setValid] = useState(false);

    const submitHandler = () => {

    }
    const changeHandler = () => {

    }

    const plus = () => {
        setCount(count + parseInt(1));
        setOrder({ ...order, count: count })
    };
    const minus = () => {
        count > 1 ? setCount(count - parseInt(1)) : setCount(1)
        setOrder({ ...order, count: count })
    };

    return (
        <>
            <div className="order">
                <header>
                    <img src={banner} />
                    <div className="order-tag">
                        <NavLink to="/" >Anasayfa - </NavLink>
                        <NavLink to="/pizza">Seçenekler - </NavLink>
                        <NavLink to="/pizza" style={{ fontWeight: "bold" }}>Sipariş Oluştur</NavLink>
                    </div>
                </header>

                <div className="order-name">
                    <div className="order-info">
                        <h3>{pizza.name}</h3>
                        <div className="point">
                            <h2>{pizza.price}₺</h2>
                            <div>
                                <p>{pizza.point}</p>
                                <p>({pizza.comment})</p>
                            </div>
                        </div>
                        <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                    </div>
                </div>
                <div className="order-dough">
                    <Form id="pizza-form">
                        <div style={{ marginBottom: "10%" }}>
                            <Row>
                                <Col>
                                    <div className="size-form">
                                        <h3>Boyut Seç <span>*</span></h3>
                                        <div className="size">
                                            {size.map((item, index) => (
                                                <FormGroup check key={index} className="radio_buttons" style={{ marginTop: "5%" }}>
                                                    <Label className="size-label" htmlFor={"radio-1-" + index}>
                                                        <Input className="size-radio"
                                                            id={"radio-1-" + index}
                                                            name="size"
                                                            type="radio"
                                                            onChange={changeHandler}
                                                            value={item}
                                                            check />
                                                        {item}
                                                    </Label>
                                                    <FormFeedback></FormFeedback>
                                                </FormGroup>
                                            ))}
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="dough-form">
                                        <h3>Hamur Seç <span>*</span></h3>
                                        <div className="dough">
                                            <Label className="dough-label" check>
                                                <Input type="select" name="dough" className="dropdown-dough" id="dropdown" onChange={changeHandler} style={{ backgroundColor: "#FAF7F2", color: "#5F5F5F", width: "15vw" }}>
                                                    <option>-Hamur Kalınlığı Seç-</option>
                                                    <option value="extra-ince">Extra İnce</option>
                                                    <option value="ince">İnce</option>
                                                    <option value="normal">Normal</option>
                                                </Input>
                                            </Label>
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="extras-form">
                            <h3>Ek Malzemeler</h3>
                            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                            <div className="extras">
                                {extras.map((item, index) => (
                                    <FormGroup check key={index} className="extra">
                                        <Input className="extra-box"
                                            id={"check-1-" + index}
                                            name="size"
                                            type="checkbox"
                                            onChange={changeHandler}
                                            value={item}
                                            check
                                            style={{ width: "45px", height: "45px", backgroundColor: "#FAF7F2" }}
                                        />
                                        <Label className="extra-label" htmlFor={"check-1-" + index}>{item}</Label>
                                        <FormFeedback></FormFeedback>
                                    </FormGroup>
                                ))}
                            </div>

                            <div className="form-final">
                                <h3>Sipariş Notu</h3>
                                <br />
                                <Input type="text" name="name" value={order.special} data-cy="special" size="lg" placeholder="Siparişine eklemek istediğin bir not var mı?" />
                                <br /><hr /> <br />
                            </div>

                            <div className="order-total">
                                <div className="order-counter">
                                    <Button size="lg" onClick={minus}>-</Button>
                                    <div>
                                        {count}
                                    </div>
                                    <Button size="lg" onClick={plus}>+</Button>
                                </div>

                                <div className="finally">
                                    <div className="order-total-right">
                                        <h3>Sipariş Toplamı</h3>
                                        <div className="total">
                                            <p >Seçimler</p>
                                            <p>{extraPrice}₺</p>
                                            <p style={{  color: "#CE2829", fontWeight: "bold" }}>Toplam</p>
                                            <p style={{ color: "#CE2829", fontWeight: "bold" }}>{totalPrice}₺</p>
                                        </div>

                                        <div className="button">
                                            <Link to="/success">
                                                <Button id="order-button" color="warning" type="submit" disabled={!valid} data-cy="secondButton"
                                                    style={{ width: "25vw", height: "62px", borderRadius: "6px" }}>
                                                    SİPARİŞ VER
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </Form>

                </div>



            </div>
        </>
    )

}

export default OrderForm;
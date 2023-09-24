import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "yup-phone-lite";
import axios from "axios";
import { Col, FormGroup, Input, Label, Row, Card, CardText, FormFeedback } from "reactstrap";
import OrderHeader from "./OrderHeader";
import "../style/OrderPage.css"
import { useHistory } from 'react-router-dom';
import { foodName, size, topping, dough } from "../data/OrderData";

const ProductPageForm = () => {
    const [pizzaForm, setPizzaForm] = useState({
        size: size[0].value,
        count:"",
        dough: "",
        topping: [],
        note: "",
        foodName: foodName[0].value,
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const [formErrs, setFormErrs] = useState({
        dough: "",
        topping: [],
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const [totalAmount, setTotalAmount] = useState(null);
    const [valid, setValid] = useState(false);
    const [additionalCost, setAdditionalCost] = useState(0);
    const history = useHistory(); 
    const [selectedPizzaPrice, setSelectedPizzaPrice] = useState(null);
    const [count, setCount] = useState(1);

    const plusCount = () => {
        setCount(count + parseInt(1));
        setPizzaForm({ ...pizzaForm, count: count })
    };
    const minusCount = () => {
        count > 1 ? setCount(count - parseInt(1)) : setCount(1)
        setPizzaForm({ ...pizzaForm, count: count })
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const selectedSize = size.find((s) => s.value === pizzaForm.size);
        if (selectedSize) {
            setTotalAmount(selectedSize.basePrice);
            setSelectedPizzaPrice(selectedSize.basePrice);
        }
    }, [pizzaForm.size]);

    const pizzaFormSchema = Yup.object().shape({
        topping: Yup.array()
            .min(4, "En az 4 seçim yapmalısınız.")
            .max(10, "En fazla 10 seçim yapabilirsiniz.")
            .test("values", "Geçersiz", (value) => {
                const availableToppings = topping.map((item) => item.value);
                return value.every((item) => availableToppings.includes(item));
            }),
        name: Yup.string().min(2, "En az 2 karakter girmelisiniz.").required("Lütfen isminizi giriniz."),
        dough: Yup.string().required("Lütfen hamur kalınlığını seçiniz."),
        email: Yup.string().email("Lütfen geçerli bir email adresi giriniz.").required(),
        phone: Yup.string().phone("TR", "Lütfen telefon numaranızı giriniz.").required(),
        address: Yup.string().min(15, "Lütfen geçerli bir adres giriniz.").required("Lütfen adresinizi giriniz.")
    });

    useEffect(() => {
        pizzaFormSchema.isValid(pizzaForm).then((valid) => setValid(valid));
    }, [pizzaForm]);

    const toppingCheckbox = (e) => {
        const selectedTopping = e.target.value;

        setPizzaForm((prevState) => {
            let updatedToppings;
            if (prevState.topping.includes(selectedTopping)) {
                updatedToppings = prevState.topping.filter(
                    (topping) => topping !== selectedTopping
                );
            } else {
                if (prevState.topping.length < 10) {
                    updatedToppings = [...prevState.topping, selectedTopping];
                } else {
                    updatedToppings = prevState.topping;
                }
            }

            const selectedCheckboxCount = updatedToppings.length;

            if (selectedCheckboxCount >= 4 && selectedCheckboxCount <= 10) {
                setValid(true);
            } else {
                setValid(false);
            }

            return {
                ...prevState,
                topping: updatedToppings,
            };
        });
    };

    useEffect(() => {
        setAdditionalCost(pizzaForm.topping.length * 5);
    }, [pizzaForm.topping]);

    useEffect(() => {
        const selectedSize = size.find((s) => s.value === pizzaForm.size);
        const additionalCost = (pizzaForm.topping.length * 5) * count;
        setTotalAmount(selectedSize.basePrice + additionalCost);
    }, [pizzaForm.size, pizzaForm.topping]);


    const inputChangeHandler = (e) => {
        const { name, value } = e.target;

        Yup.reach(pizzaFormSchema, name)
            .validate(value)
            .then(() => {
                setFormErrs((prevState) => ({ ...prevState, [name]: "" }));
            })
            .catch((err) => {
                setFormErrs((prevState) => ({ ...prevState, [name]: err.errors[0] }));
            });

        setPizzaForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(pizzaForm);
        console.log(foodName)
        history.push('/success', { formData: pizzaForm, totalAmount: totalAmount, additionalCost: additionalCost, count: count, foodName: pizzaForm.foodName });
    };

    return (
        <>
            <OrderHeader pizzaForm={pizzaForm} selectedPizzaPrice={selectedPizzaPrice} />
            <div className="order-page-container">
                <form id="pizza-form" onSubmit={submitHandler}>
                    <Row className="size-dough">
                        <Col className="mb-10">
                            <div className="mb-3">
                                <h5 className="font-medium text-lg">Boyut Seç <span style={{color: "red"}}>*</span></h5>
                            </div>

                            <div className="radio-div">
                                {size.map((i) => (
                                    <>
                                        <FormGroup check>
                                            <Label check className="radio-button">
                                                <Input
                                                    data-cy="input-size"
                                                    checked={pizzaForm.size === i.value}
                                                    onChange={(e) => setPizzaForm((prevState) => ({ ...prevState, size: e.target.value }))}
                                                    name="size"
                                                    id="size"
                                                    type="radio"
                                                    value={i.value} />
                                                <span className="radio-button">{i.label}</span>
                                            </Label>
                                        </FormGroup>
                                    </>
                                ))}
                            </div>
                        </Col>
                        <Col className="mb-10">
                            <div className="mb-3">
                                <h5 className="font-medium text-lg">Hamur Seç <span style={{color: "red"}}>*</span></h5>
                            </div>

                            <div className="radio-div1 form-group col-md-10">
                                <select
                                    data-cy="input-dough"
                                    id="dough"
                                    className="form-control"
                                    value={pizzaForm.dough}
                                    onChange={(e) => setPizzaForm((prevState) => ({ ...prevState, dough: e.target.value }))}>
                                    <option
                                        value=""
                                        disabled
                                        defaultValue>Hamur Kalınlığını Seçiniz
                                    </option>
                                    {dough.map((i) => (
                                        <option
                                            invalid={!!formErrs.dough}
                                            valid={!!pizzaForm.dough && !formErrs.dough}
                                            key={i.value}
                                            value={i.value}>{i.label}
                                        </option>
                                    ))}
                                </select>
                                <FormFeedback>{formErrs.dough}</FormFeedback>
                            </div>
                        </Col>
                    </Row>

                    <Row className="topping-section">
                        <Col className="mb-10">
                            <h5 className="font-medium text-lg mb-4">Ek Malzemeler</h5>
                            <p className="mb-4">En az 4, en fazla 10 malzeme seçebilirsiniz. (+5₺)</p>

                            <div className="topping">
                                {topping.map((i) => (
                                    <>
                                        <FormGroup check>
                                            <Label className="font-medium" check>
                                                <Input
                                                    data-cy="input-topping"
                                                    name="topping"
                                                    id="topping"
                                                    type="checkbox"
                                                    value={i.value}
                                                    onChange={toppingCheckbox}
                                                    disabled={pizzaForm.topping.length >= 10 && !pizzaForm.topping.includes(i.value)}
                                                    invalid={!!formErrs.topping} />
                                                {i.label}
                                                <FormFeedback>{formErrs.topping}</FormFeedback>
                                            </Label>
                                        </FormGroup>
                                    </>
                                ))}
                            </div>

                        </Col>
                    </Row>

                    <Row className="order-note">
                        <Col>
                            <FormGroup>
                                <h5 className="font-medium text-lg mb-2">Sipariş Notu</h5>
                                <Input
                                    data-cy="input-note"
                                    type="textarea"
                                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                                    name="note"
                                    id="note"
                                    value={pizzaForm.note}
                                    onChange={(e) => setPizzaForm((prevState) => ({ ...prevState, note: e.target.value }))} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <hr></hr>

                    <Row className="customer-form mb-5 mt-5">
                        <h5 className="font-medium text-2xl mb-4">Teslimat Bilgileri</h5>
                        <Col>
                            <FormGroup>
                                <Label htmlFor="name">Adınız
                                    <Input
                                        data-cy="input-name"
                                        placeholder="Lütfen adınızı giriniz"
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={pizzaForm.name}
                                        onChange={inputChangeHandler}
                                        invalid={!!formErrs.name}
                                        valid={!!pizzaForm.name && !formErrs.name} />
                                    <FormFeedback>{formErrs.name}</FormFeedback>
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="email">Email Adresiniz
                                    <Input
                                        data-cy="input-email"
                                        placeholder="Lütfen email adresinizi giriniz"
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={pizzaForm.email}
                                        onChange={inputChangeHandler}
                                        invalid={!!formErrs.email}
                                        valid={!!pizzaForm.email && !formErrs.email} />
                                    <FormFeedback>{formErrs.email}</FormFeedback>
                                </Label>
                            </FormGroup>
                        </Col>

                        <Col>
                            <FormGroup>
                                <Label htmlFor="phone">Telefon Numaranız
                                    <Input
                                        data-cy="input-phone"
                                        placeholder="Ör: 5551234567"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={pizzaForm.phone}
                                        onChange={inputChangeHandler}
                                        invalid={!!formErrs.phone}
                                        valid={!!pizzaForm.phone && !formErrs.phone} />
                                    <FormFeedback>{formErrs.phone}</FormFeedback>
                                </Label>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="address">Adresiniz
                                    <Input
                                        className="address"
                                        placeholder="Lütfen tam adresinizi giriniz"
                                        data-cy="input-address"
                                        type="textarea"
                                        id="address"
                                        name="address"
                                        value={pizzaForm.address}
                                        onChange={inputChangeHandler}
                                        invalid={!!formErrs.address}
                                        valid={!!pizzaForm.address && !formErrs.address} />
                                    <FormFeedback>{formErrs.address}</FormFeedback>
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="total-section">
                        <Col>
                            <div className="count-select">
                                <span onClick={minusCount}>-</span><span>{count}</span><span onClick={plusCount}>+</span>
                            </div>
                        </Col>
                        <Col>
                            <Card body className="totals">
                                <CardText>
                                    <table className="total-table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5 className="font-bold text-lg mb-2">Sipariş Toplamı</h5>
                                                </td>
                                            </tr>
                                            <tr className="total-checked font-medium text-lg mb-2">
                                                <td>
                                                    <h6>Seçimler:</h6>
                                                </td>
                                                <td>
                                                    <h6>{(count * additionalCost).toFixed(2)}₺</h6>
                                                </td>
                                            </tr>
                                            <tr className="total-amount font-medium text-lg mb-2">
                                                <td>
                                                    <h6>Toplam:</h6>
                                                </td>
                                                <td>
                                                    <h6>{((count * selectedPizzaPrice) + (additionalCost * count)).toFixed(2)}₺</h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </CardText>

                                <button
                                    data-cy="input-submit"
                                    type="submit"
                                    id="order-button"
                                    disabled={!valid}>
                                    SİPARİŞ VER
                                </button>
                            </Card>
                        </Col>
                    </Row>
                </form>
            </div>
        </>
    )
}

export default ProductPageForm;
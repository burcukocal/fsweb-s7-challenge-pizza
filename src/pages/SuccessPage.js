import React, { useEffect } from 'react';
import logo from "../Assets/logo.svg";
import { Link } from 'react-router-dom';
import "../style/Success.css"
import { useLocation } from 'react-router-dom';
import { Card, CardText } from 'reactstrap';

const SuccessPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const location = useLocation();
    const { formData, totalAmount, additionalCost, count } = location.state;

    console.log(formData);

    let orderNote = null;
    if (formData.note !== "") {
        orderNote = <p>Sipariş Notu: <span>{formData.note}</span></p>;
    }

    return (<>
        <div className="success-header">
            <Link to="/">
                <img alt="Teknolojik Yemekler" src={logo} />
            </Link></div>
        <div className='success-main'>
            <div className='success-container'>
                <div className="success-order">
                    <div>
                        <p>lezzetin yolda</p>
                        <h2>SİPARİŞ ALINDI </h2>
                    </div>
                </div>
                <p className='thanks-name text-center text-2xl mb-3'>Siparişin için teşekkürler <span>{formData.name}</span>. Yemeğini özenle hazırlıyoruz, en kısa sürede teslim edilecektir..</p>
                <div className='summary'>
                    <h4 className='text-center mb-1 mt-5 font-medium text-2xl'>{formData.foodName}</h4>

                    <div className="itemized">
                        <p>Boyut: <span>{formData.size}</span></p>
                        <p>Hamur: <span>{formData.dough}</span></p>
                        <p>Ek Malzemeler: <span>{formData.topping.join(", ")}</span></p>
                        {orderNote}
                        <hr style={{ marginTop: "10%" }}></hr>
                        <h4 className='mt-3 text-lg font-bold'>Teslimat Bilgileri</h4>
                        <p>İsim: <span>{formData.name}</span></p>
                        <p>Email: <span style={{ textTransform: "none" }}>{formData.email}</span></p>
                        <p>Telefon: <span>{formData.phone}</span></p>
                        <p>Adres: <span>{formData.address}</span></p>
                    </div>
                    <Card body className="summary-card">
                        <CardText>
                            <table className="total-table">
                                <tbody>
                                    <tr>
                                        <td><h5 className='font-medium text-lg mb-2'>Sipariş Toplamı</h5></td>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr className="checked-summary">
                                        <td><h6 className=' text-lg mb-2'>Seçimler:</h6></td>
                                        <td><h6 className=' text-lg mb-2 font-medium'>{(count * additionalCost).toFixed(2)}₺</h6></td>
                                    </tr>
                                    <tr className="total-summary">
                                        <td><h6 className=' text-lg mb-2'>Toplam:</h6></td>
                                        <td><h6 className=' text-lg mb-2 font-medium'>{(count * totalAmount).toFixed(2)}₺</h6></td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardText>
                    </Card>

                </div>
            </div>
        </div>
    </>
    );
};

export default SuccessPage;
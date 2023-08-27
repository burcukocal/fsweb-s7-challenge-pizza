import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import logo from "../Assets/logo.svg";
import nav1 from "../Assets/adv-aseets/icons/1.svg";
import nav2 from "../Assets/adv-aseets/icons/2.svg";
import nav3 from "../Assets/adv-aseets/icons/3.svg";
import nav4 from "../Assets/adv-aseets/icons/4.svg";
import nav5 from "../Assets/adv-aseets/icons/5.svg";
import nav6 from "../Assets/adv-aseets/icons/6.svg";
import address from "../Assets/adv-aseets/icons/icon-1.png";
import mail from "../Assets/adv-aseets/icons/icon-2.png";
import phone from "../Assets/adv-aseets/icons/icon-3.png";
import insta1 from "../Assets/adv-aseets/insta/li-0.png";
import insta2 from "../Assets/adv-aseets/insta/li-1.png";
import insta3 from "../Assets/adv-aseets/insta/li-2.png";
import insta4 from "../Assets/adv-aseets/insta/li-3.png";
import insta5 from "../Assets/adv-aseets/insta/li-4.png";
import insta6 from "../Assets/adv-aseets/insta/li-5.png";

const HomePage = ({ menuItems }) => {
    return (
        <>
            <div className="home">
                <div>
                    <img src={logo} />
                    <h3>fırsatı kaçırma</h3>
                    <h2>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</h2>
                    <Link to="/pizza" id="order-pizza">ACIKTIM</Link>
                </div>
            </div>

            <div className="nav-section">
                <li>
                    <img src={nav1} />
                    <p>YENİ! Kore</p>
                </li>
                <li>
                    <img src={nav2} />
                    <p>Pizza</p>
                </li>
                <li>
                    <img src={nav3} />
                    <p>Burger</p>
                </li>
                <li>
                    <img src={nav4} />
                    <p>Kızartmalar</p>
                </li>
                <li>
                    <img src={nav5} />
                    <p>Fast food</p>
                </li>
                <li>
                    <img src={nav6} />
                    <p>Gazlı İçecek</p>
                </li>
            </div>

            <div className="home-menu">
                <div className="menu-box">
                    <Row>
                        <Col xs="12" lg="6">
                            <div className="box1">
                                <h2>Özel <br /> Lezzetus</h2>
                                <p>Position: Absolute Acı Burger</p>
                                <br />
                                <Link to="/pizza" className="order">Sipariş Ver</Link>
                            </div>
                        </Col>
                        <Col>
                            <div className="boxes">
                                <div className="box2">
                                    <h2>Hackathlon <br /> Burger Menü</h2>
                                    <br />
                                    <Link to="/pizza" className="order">Sipariş Ver</Link>
                                </div>
                                <div className="box3">
                                    <h2><span>Çoooook</span> hızlı <br /> npm gibi kurye</h2>
                                    <br />
                                    <Link to="/pizza" className="order">Sipariş Ver</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="menu-info">
                    <h3>en çok paketlenen ürünler</h3>
                    <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
                    <div className="menu-section">
                        <button>
                            <img src={nav1} />
                            <p>Ramen</p>
                        </button>
                        <button>
                            <img src={nav2} />
                            <p>Pizza</p>
                        </button>
                        <button>
                            <img src={nav3} />
                            <p>Burger</p>
                        </button>
                        <button>
                            <img src={nav4} />
                            <p>French fries</p>
                        </button>
                        <button>
                            <img src={nav5} />
                            <p>Fast food</p>
                        </button>
                        <button>
                            <img src={nav6} />
                            <p>Soft drinks</p>
                        </button>
                    </div>
                    <div className="menu-items">
                        <Row>
                            {menuItems.map((item, id) => (
                                <Col>
                                    <div className="item-cards" key={id}>
                                        <img src={item.img} />
                                        <h3>{item.name}</h3>
                                        <div className="item-info">
                                            <span>{item.point}</span>
                                            <span>({item.comment})</span>
                                            <span>{item.price}₺</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
                <footer>
                    <div className="footer">
                        <Row>
                            <Col>
                                <div className="contact">
                                    <h1>Teknolojik <br /> Yemekler</h1>
                                    <li>
                                        <img src={address} />
                                        <p>341 Londonderry Road, <br /> İstanbul Türkiye</p>
                                    </li>

                                    <li>
                                        <img src={mail} />
                                        <p>aciktim@teknolojikyemekler.com</p>
                                    </li>

                                    <li>
                                        <img src={phone} />
                                        <p>+90 216 123 45 67</p>
                                    </li>

                                </div>
                            </Col>
                            <Col>
                                <div className="contents">
                                    <h3>Sıccacık Menuler</h3>
                                    <p>5 Kişilik Hackathlon Pizza</p>
                                    <p>useEffect Tavuklu Pizza</p>
                                    <p>Beyaz Console Frosty</p>
                                    <p>Testler Geçti Mutlu Burger</p>
                                    <p>Position Absolute Acı Burger</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="instagram">
                                    <h3>Instagram</h3>
                                    <div className="icons">
                                        <Row>
                                            <Col>
                                                <img src={insta1} />
                                                <img src={insta2} />
                                            </Col>
                                            <Col>
                                                <img src={insta3} />
                                                <img src={insta4} />
                                            </Col>
                                            <Col>
                                                <img src={insta5} />
                                                <img src={insta6} />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="copyright">
                            <hr />
                            <p>@ 2023 Teknolojil Yemekler</p>
                        </div>
                    </div>
                </footer>


            </div>
        </>
    )
}

export default HomePage;
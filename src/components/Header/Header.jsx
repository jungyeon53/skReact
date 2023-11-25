// Header.jsx
import '../style.scss';
import { Container, Nav, NavLink, Navbar } from "react-bootstrap";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    }

    const handleMouseOut = () => {
        setHover(false);
    }

    return (
        <div className="App">
            <Navbar bg="white" data-bs-theme="white" className={hover ? 'bigmenu hover' : 'bigmenu'} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Container>

                    <Navbar.Brand href="/">B</Navbar.Brand>
                    <Nav className="me-auto flex gap-3">
                        <Nav.Link href="/product">상품서비스</Nav.Link>
                        <Nav.Link href="/directshop">B 다이렉트샵</Nav.Link>
                        <Nav.Link href="/service">혜택</Nav.Link>
                        <Nav.Link href="/support">고객지원</Nav.Link>
                        <Nav.Link href="/mypage">MY</Nav.Link>
                    </Nav>
                    
                    <div className="d-flex">
                        <NavLink><FontAwesomeIcon icon={faUser} className='icons' style={{color: "#454545"}} /></NavLink>
                        <NavLink><FontAwesomeIcon icon={faMagnifyingGlass} className='icons' style={{color: "#454545"}}/></NavLink>
                        <NavLink><FontAwesomeIcon icon={faBars} className='icons' style={{color: "#454545"}}/></NavLink>
                    </div>
                </Container>
            </Navbar>
            <div className={`menu ${hover ? 'd-b' : 'd-n'}`}>
                <hr className='hr-2' />
                <Container>
                    <div className="d-flex">
                        <ul>
                            <li className='title'>인터넷</li>
                            <li>요금제</li>
                            <li>부가서비스</li>
                        </ul>
                        <ul>
                            <li className='title'>Btv</li>
                            <li>요금제</li>
                            <li>채널안내</li>
                            <li>콘텐츠 안내</li>
                            <li>B tv 주요서비스</li>
                        </ul>
                        <ul>
                            <li className='title'>B tv pop</li>
                            <li>요금제</li>
                            <li>부가서비스</li>
                            <li>채널안내</li>
                            <li>콘텐츠안내</li>
                            <li>B tv pop 주요서비스</li>
                        </ul>
                        <ul>
                            <li className='title'>B tv cable</li>
                            <li>요금제</li>
                            <li>부가서비스</li>
                            <li>채널안내</li>
                        </ul>
                        <ul>
                            <li className='title'>전화</li>
                            <li>요금제</li>
                            <li>부가서비스</li>
                        </ul>
                        <ul>
                            <li className='title'>소상공인상품</li>
                            <li>성공Dream플러스</li>
                            <li>B tv 우리동네 광고</li>
                        </ul>
                    </div>
                </Container>
                <hr className='hr-2' />
            </div>
        </div>
    );
}

export default Header;

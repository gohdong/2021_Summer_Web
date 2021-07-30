'use strict';

class FooterTop extends React.Component {
    render() {
        return (
            <div className="footer-top">
                <div className="footer-inner">
                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="15.28" stroke="white" strokeWidth="1.44"></circle>
                        <path
                            d="M4.76758 18.7603C6.21782 18.7603 7.53398 18.3792 8.50646 17.76C9.47894 18.3792 10.7951 18.7603 12.2453 18.7603C13.6956 18.7603 15.0117 18.3792 15.9842 17.76C16.9567 18.3792 18.2729 18.7603 19.7231 18.7603C21.1733 18.7603 22.4895 18.3792 23.462 17.76C24.4345 18.3792 25.7506 18.7603 27.2009 18.7603M24.8316 22.4967H24.7477C23.8482 22.4189 23.0402 22.3072 22.4041 22.0272C21.5711 22.3936 20.4437 22.6192 19.2018 22.6192C17.9599 22.6192 16.8325 22.3936 15.9996 22.0272C15.1666 22.3936 14.0396 22.6192 12.7973 22.6192C11.5554 22.6192 10.4281 22.3936 9.5951 22.0272C8.95862 22.3072 8.15062 22.4189 7.25078 22.4967H7.16758M19.9996 26.1744H19.9116C19.6137 26.217 19.3042 26.2717 18.9865 26.2717C17.8447 26.2717 16.8089 26.1302 16.0431 25.6768C15.2773 26.1302 14.2415 26.2717 13.0997 26.2717C12.7509 26.2717 12.4117 26.2122 12.0873 26.1613L11.9996 26.1606"
                            stroke="white"></path>
                    </svg>

                    <div className="footer-menu-container">
                        <dl className="footer-menu">
                            <dt>서핏</dt>
                            <dl><a href="#">홈 피드</a></dl>
                            <dl><a href="#">디렉토리</a></dl>
                            <dl><a href="#">채용</a></dl>
                        </dl>
                        <dl className="footer-menu">
                            <dt>비즈니스</dt>
                            <dl><a href="#">기업 서비스</a></dl>
                            <dl><a href="#">채용 광고</a></dl>
                            <dl><a href="#">디스플레이 광고</a></dl>
                            <dl><a href="#">제휴 문의</a></dl>
                        </dl>
                        <dl className="footer-menu">
                            <dt>지원 및 소개</dt>
                            <dl><a href="#">헬프 센터</a></dl>
                            <dl><a href="#">서비스 피드백</a></dl>
                            <dl><a href="#">서핏 합류하기 😎</a></dl>
                            <dl><a href="#">블로그</a> · <a href="#">페이스북</a></dl>
                        </dl>
                        <dl className="footer-menu">
                            <dt>새 탭에서 시작</dt>
                            <dl><img src="../images/chrome.png" alt="chrome" className="footer-icon"/><a
                                href="#">Chrome</a></dl>
                            <dl><img src="../images/whale.png" alt="whale" className="footer-icon"/><a
                                href="#">Whale</a></dl>
                            <dl><img src="../images/edge.png" alt="edge" className="footer-icon"/><a href="#">Edge</a>
                            </dl>
                            <dl><img src="../images/safari.png" alt="safari" className="footer-icon"/><a
                                href="#">Safari</a></dl>
                            <dl><img src="../images/firefox.png" alt="firefox" className="footer-icon"/><a
                                href="#">Firefox</a></dl>
                        </dl>
                    </div>

                </div>
            </div>
        );
    }
}

class FooterBottom extends React.Component {
    render() {
        return (
            <div className="footer-bottom">
                <div className="footer-inner">
                    <div className="footer-info-container">
                        <ul className="footer-info">
                            <li>주식회사 가나다라마바 (대표:홍길동)<span></span></li>
                            <li>010-1234-5678<span></span></li>
                            <li><a href="mailto:abc123@abcd.com">abc123@abcd.com</a><span></span></li>
                            <li><a
                                href="#">이용약관</a><span></span></li>
                            <li><a href="#">개인정보보호방침</a></li>
                        </ul>
                        <ul className="footer-info">
                            <li>안양 오피스(HQ) : 대한민국 경기도 안양시</li>
                        </ul>
                        <ul className="footer-info">
                            <li>서울 오피스(Branch) : 대한민국 서울특별시</li>
                        </ul>
                        <ul className="footer-info">
                            <li>사업자등록번호 111-22-33333<span></span></li>
                            <li>통신판매 제0000-XXXX-0000호<span></span></li>
                            <li>직업정보 J000000000000</li>
                        </ul>
                    </div>
                    <div className="footer-copyright">
                        <p>@ GOHDONG. Cloned Surfit.io.</p>
                    </div>
                </div>
            </div>
        );
    }
}


class Footer extends React.Component {
    render() {
        return (
            <div>
                <FooterTop/>
                <hr className="footer-hr"/>
                <FooterBottom/>
            </div>
        );
    }
}


ReactDOM.render(<Footer/>, document.getElementsByTagName('footer')[0]);
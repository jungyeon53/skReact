import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }} className='custom'>
            <Card.Title className='text-center internet'>500M 인터넷 <br />+ B tv All</Card.Title>
            <div className="want">
                <Card.Img className='recomimg' variant="top" src="../img/products/ico_recom_prod_01.svg" /></div>
            <Card.Body>
                <Card.Text>
                    <div class="price d-flex justify-content-center gap-3">
                        <del class="month">월 61,050원</del>
                        <strong class="rate">월 31,350원</strong>
                    </div>
                    <ul class="benefit">
                        <li className='path'>- 모두 안심/ 원격 케어/ 파워 백신 서비스 중 택 1</li>
                        <li className='path'>- 3년 약정, 온라인할인, 더슬림요금제</li>
                        <li className='path'>- 휴대폰 1회선결합 할인 기준, VAT 포함가</li>
                    </ul>
                </Card.Text>
                <div className="d-flex gap-3">
                    <Button className='onebtn'>가입상담</Button>
                    <Button className='onebtn'>바로가입</Button>
                </div>
                <Button variant="outline-primary" className='twobtn'>상품자세히보기</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;
import { Container, Button } from 'react-bootstrap';
import '../style.scss';
import Card from 'react-bootstrap/Card';


function CardCustom() {
  return (
    <Container>
      <Card>
        <Card.Body>

          <div className="d-flex gap-5">
            <h2 className='title-t'>이런 상품을 <br />찾고 계신가요?</h2>
            <div className='choice mt-2'>
              <a href="#"><img src="../img/icon/ico_1.svg" alt="" /></a>
              <p className='text-center mt-4'>인터넷</p>
            </div>
            <div className='choice mt-2'>
            <a href="#"><img src="../img/icon/ico_2.svg" alt="" /></a>
              <p className='text-center mt-4'>B tv</p>
            </div>
            <div className='choice mt-2'>
            <a href="#"><img src="../img/icon/ico_3.svg" alt="" /></a>
              <p className='text-center mt-4'>B tv pop</p>
            </div>
            <div className='choice mt-2'>
            <a href="#"><img src="../img/icon/ico_4.svg" alt="" /></a>
              <p className='text-center mt-4'>B tv cable</p>
            </div>
            <div className='choice mt-2'>
            <a href="#"><img src="../img/icon/ico_5.svg" alt="" /></a>
              <p className='text-center mt-4'>전화</p>
            </div>
          </div>
        </Card.Body>
      </Card>


        <div className="section d-flex justify-content-around">
          <h2>즐겨찾는 메뉴</h2>
          <div className="btn5">
            <Button variant="outline-secondary" className='btn5' size="lg">요금조회</Button>
            <Button variant="outline-secondary" className='btn5' size="lg">자동납부신청</Button>
            <Button variant="outline-secondary" className='btn5' size="lg">실시간 편셩표</Button>
            <Button variant="outline-secondary" className='btn5' size="lg">서비스가능지역조회</Button>
            <Button variant="outline-secondary" className='btn5' size="lg">B 다이렉트샵</Button>
          </div>
        </div>

    </Container>
  );
}

export default CardCustom;
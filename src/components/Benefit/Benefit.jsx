import { Container } from 'react-bootstrap';
import '../style.scss';
import Card from 'react-bootstrap/Card';

function BodyOnlyExample() {
  return (
    <div className="sectionbene">
      <Container>
          <h2 className='benefitCard'>혜택</h2>
          </Container>
      <Container className='d-flex gap-5'>
        <Card className='benecard1'>
            <Card.Body>
              <div className='choice mt-2'>
                <a href="#" ><img src="../img/benefit/img_main_benefit_01.png" alt="" /></a>
                <div className="text-center">
                  <p className='mt-4'>요즘우리집결합</p>
                  <h5>더 많이 할인받는 <br />유무선 결합 혜택</h5>
                </div>
              </div>
            </Card.Body>
        </Card>
        <Card className='benecard2'>

            <Card.Body>
              <div className='choice mt-2'>
                <a href="#"><img src="../img/benefit/img_main_benefit_02.png" alt="" /></a>
                <div className="text-center">
                  <p className='mt-4'>요즘가족결합</p>
                  <h5>더 많이 할인받는 <br />유무선 결합 혜택</h5>
                </div>
              </div>
            </Card.Body>
        </Card>
        <Card className='benecard3'>

            <Card.Body>
              <div className='choice mt-2'>
                <a href="#"><img src="../img/benefit/img_main_benefit_03.png" alt="" /></a>
                <div className="text-center">
                  <p className='mt-4'>더슬림 요금제</p>
                  <h5>더 많이 할인받는 <br />유무선 결합 혜택</h5>
                </div>
              </div>
            </Card.Body>

        </Card>
        <Card className='benecard4'>
            <Card.Body>
              <div className='choice mt-2'>
                <div className="text-center">
                  <a href="#"><img src="../img/benefit/img_main_benefit_04.png" alt="" /></a>
                  <p className='mt-4'>제휴카드</p>
                  <h5>더 많이 할인받는 <br />유무선 결합 혜택</h5>
                </div>
              </div>
            </Card.Body>

        </Card>
      </Container>
    </div>
  );
}

export default BodyOnlyExample;
import { Container } from 'react-bootstrap';
import '../style.scss';
import Card from 'react-bootstrap/Card';

function BodyOnlyExample() {
  return (
    <Container>
    <h2>혜택</h2>
    <div className='d-flex gap-5'>
        <img src="https://placehold.co/310x330" alt="" />
        <img src="https://placehold.co/310x330" alt="" />
        <img src="https://placehold.co/310x330" alt="" />
        <img src="https://placehold.co/310x330" alt="" />
        </div>
        </Container>
  );
}

export default BodyOnlyExample;
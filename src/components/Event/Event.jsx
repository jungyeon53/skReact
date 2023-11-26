import { Container } from "react-bootstrap";

function Event(){
    return(
        <>
            <Container>
            <h2 className="mb-4">HOT & NEWS</h2>
            <div className="d-flex gap-3">
                <img src="../img/smallbanner/img_hotnew_01.png" alt="" />
                <img src="../img/smallbanner/img_hotnew_02.png" alt="" />
                <img src="../img/smallbanner/img_hotnew_03.png" alt="" />
            </div>
            </Container>
        </>
    )
}

export default Event;
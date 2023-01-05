import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Frame11.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export function Frame11() {
    return (
        <Card className="frame11">
            <Card.Body className="frame11Card">
                <div className="left">
                    <img alt="img" src="/img/logo1.svg" />
                    <InputGroup>
                        <Form.Control
                            aria-label="Example text with button addon"
                            aria-describedby="basic-addon1"
                            placeholder="Serach any things"
                        />
                        <Button variant="outline-secondary" id="button-addon1">
                            Button
                        </Button>
                    </InputGroup>
                </div>
                <div className="right">
                    <span>
                        <img alt="img" src="/img/user.svg" />
                        Sign in
                    </span>
                    <span>
                        <img alt="img" src="/img/heart.svg" />
                        <span className="circle0">0</span>
                    </span>
                    <span>
                        <img alt="img" src="/img/shopping-cart.svg" />
                        <span className="circle0">0</span>
                    </span>
                </div>
            </Card.Body>
        </Card>
    );
}

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../css/Frame4.css";

export function Frame4() {
    return (
        <Card className="frame4">
            <Card.Body>Need help? Call us: (+98) 0234 456 789</Card.Body>
            <div className="d-flex">
                <Card.Body>
                    <img alt="img" src="/img/OurStoreIcone.svg" /> Our store
                </Card.Body>
                <Card.Body>
                    <img alt="img" src="/img/group.svg" />
                    Track your order
                </Card.Body>
            </div>
        </Card>
    );
}

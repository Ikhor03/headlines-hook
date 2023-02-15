import { useEffect, useState } from "react";
import { Card, Col, Form, Row, Button, Container } from "react-bootstrap";
import dataHeadlines from "./headlines.json"


const Cards = () => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');


    const inputHandler = (e) => {
        setValue(e.target.value)
    }

    const searchHandler = (artikel) => {
        let is = artikel.title.toLowerCase().includes(value.toLowerCase());
        if (!is) {
            return 'hide'
        } else {
            return ''
        }

    }

    //get data json lokal
    useEffect(() => {
        let article = dataHeadlines.articles
        setData(article)
    }, [data])

    const render = () => {
        let printCard = (data.map((artikel, key) => {
            return (
                <Col key={key} xs lg="5" className={`mb-3 ${searchHandler(artikel)}`}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={artikel.urlToImage} />
                        <Card.Body>
                            <Card.Title className="news-card-title card-title h6 fw-semibold">{artikel.title}</Card.Title>
                            <span className="card-text"><small className="news-card-author text-muted mb-3">{artikel.author}</small></span> <br />
                            <span className="card-text"><small className="news-card-date text-muted mb-3">{artikel.publishedAt}</small></span>
                            <Card.Text className="news-card-text card-text text-truncate">{artikel.description}</Card.Text>
                            <a className="news-url-link btn btn-warning" href={artikel.url} target="_blank" rel='noreferrer'>Read more..</a>
                        </Card.Body>
                    </Card>
                </Col>
            )

        }))


        return printCard;
    }

    return (
        <div>
            <Container fluid className="mt-2">
                <Form className="d-flex">
                    <Form.Control
                        onInput={inputHandler}
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="light">Search</Button>
                </Form>
                <p className="headline-badge mt-2 fw-bold text-white offset-1 fs-4"><span className="badge bg-warning">Headlines</span>
                    today</p>
            </Container>

            <Row className="justify-content-md-center">
                {render()}
            </Row>
        </div>
    )
}

export default Cards;
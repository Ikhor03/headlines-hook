import { Component } from "react";
import { Card, Col, Form, Row, Button, Container } from "react-bootstrap";
import NotFound from "./alert";
import dataHeadlines from "./headlines.json"


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: '',
            url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=8f7c365e620944dea3d407af962acc45',
            err: false
        }

        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler(e) {
        this.setState({
            value: e.target.value
        })
    }

    searchHandler(artikel, value) {
        let is = artikel.title.toLowerCase().includes(value.toLowerCase());
        if (!is) {
            return 'hide'
        } else {
            return ''
        }
    }

    //fetching API
    // async componentDidMount() {
    //     const { url } = this.state;
    //     await fetch(url)
    //         .then(res => res.json())
    //         .then((data) => {
    //             let article = data.articles;
    //             this.setState({
    //                 data: article
    //             })
    //         })
    //         .catch(() => {
    //             this.setState({ err: true })
    //         })
    // }

    //get data json lokal
    async componentDidMount() {
        let article = dataHeadlines.articles
        this.setState({data : article})
    }


    //live search mengacu pada data API
    // async componentDidUpdate() {
    //     const { value, url } = this.state;
    //     if (!value) {
    //         await fetch(url)
    //             .then(res => res.json())
    //             .then((data) => {
    //                 let article = data.articles;
    //                 this.setState({
    //                     data: article
    //                 })
    //             })
    //     } else {
    //         await fetch(`https://newsapi.org/v2/everything?q=${value}&sortBy=relevancy&apiKey=1ec087e86b5143d28480549839fbe11c`)
    //             .then(res => res.json())
    //             .then((data) => {
    //                 let article = data.articles;
    //                 this.setState({
    //                     data: article
    //                 })
    //             })
    //     }
    // }

    render() {
        const { data, value, err } = this.state;
        let printCard = (data.map((artikel, key) => {
            return (
                <Col key={key} xs lg="5" className={`mb-3 ${this.searchHandler(artikel, value)}`}>
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

        let error;
        let loading;
        if (err) {
            error = <NotFound />
        }

        return (
            <div>
                <Container fluid className="mt-2">
                    <Form className="d-flex">
                        <Form.Control
                            onInput={this.inputHandler}
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
                    {error}
                    {loading}
                    {printCard}
                </Row>
            </div>
        )
    }
}

export default Cards;
import { Component } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
// import NotFound, { Loading } from "./alert";


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: '',
            hide: 'hide',
            url: 'https://newsapi.org/v2/top-headlines?country=id&apiKey=1ec087e86b5143d28480549839fbe11c'
        }

        this.inputHandler = this.inputHandler.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this);
    }

    inputHandler(e) {
        this.setState({
            value: e.target.value
        }, (() => {
            const { value } = this.state;
            if (!value) {
                this.setState({
                    url: 'https://newsapi.org/v2/top-headlines?country=id&apiKey=1ec087e86b5143d28480549839fbe11c'
                })
                console.log('kosong');
            } else {
                this.setState({
                    url: 'https://newsapi.org/v2/everything?q=tesla&from=2023-01-07&sortBy=publishedAt&apiKey=1ec087e86b5143d28480549839fbe11c'
                })
                console.log(value);
            }

        }))


    }

    async componentDidMount() {

        await fetch(this.state.url)
            .then(res => res.json())
            .then((data) => {
                let article = data.articles;
                this.setState({
                    data: article
                })
            })
    }

    //NOTES: COBA PAKAI KONSEP WILL UNMOUNT UNTUK LIVESEARCH

    render() {
        const { data } = this.state;
        let printCard = (data.map((artikel, key) => {
            return (
                <Col key={key} xs lg="5" className={`mb-3` }>
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

        return (
            <div>
                <Form>
                    <Form.Control onInput={this.inputHandler} value={this.state.value} type="text" placeholder="Find some insight..." className="mt-3" />
                    <p className="headline-badge mt-2 fw-bold text-white offset-1 fs-4"><span className="badge bg-warning">Headlines</span>
                        today</p>
                </Form>
                <Row className="justify-content-md-center">
                    {printCard}
                </Row>
            </div>
        )
    }
}

export default Cards;
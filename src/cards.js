import { Component } from "react";
import { Card, Col } from "react-bootstrap";
// import NotFound, { Loading } from "./alert";


class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'https://newsapi.org/v2/top-headlines?country=id&apiKey=1ec087e86b5143d28480549839fbe11c',
            data: {}
        }
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then((data) => {
                let article = data.articles;
                // article.map(e => console.log(e))
                this.setState({
                    data: article
                })
            })
    }


    render() {
        console.log(this.state.data); // NOTE: Sudah dapat datanya, tinggal di akses dan dimasukkan ke DOM
        return (
            <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title className="news-card-title card-title h6 fw-semibold">title</Card.Title>
                        <span className="card-text"><small className="news-card-author text-muted mb-3">tanggal</small></span>
                        <span className="card-text"><small className="news-card-date text-muted mb-3">tanggal</small></span>
                        <Card.Text className="news-card-text card-text text-truncate">deskripsi</Card.Text>
                        <a className="news-url-link btn btn-warning" href='https://' target="_blank" rel='noreferrer'>Read more..</a>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default Cards;
import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import NotFound, { Loading } from "./alert";
const url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=1ec087e86b5143d28480549839fbe11c';


async function printCards(url) {

    let article = [];
    const getData = () => {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                article.push(data.articles);
            })
        return article;
    }


    return getData()

}
printCards(url);


class Cards extends Component {
    
    render() {
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
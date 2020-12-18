/* /pages/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useState } from 'react';
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Col,
    Button,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Row, InputGroup, InputGroupAddon, Input,
} from 'reactstrap';

const CAROUSEL = gql`
  {
    carousels {
      id
      name
      description
      image {
        url
      }
    }
  }
`;
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const mystyle ={textAlign: "center"}

function Home() {
    const {data} = useQuery(CAROUSEL);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

// return(
//     <div>
//       {data && (
//         <>
//           {data.carousels.map((res) => (
//             <div>{res.id} {res.name} </div>
//           ))}
//         </>
//       )}
//     </div>

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }


  const slides = items.map((item) => {
    return (

      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        //key={`${API_URL}${item.image[0].url}`}
      >
        <img style={{width:"100%", height:"300px",margin:"20px 30px"}}src={item.src} alt={item.name} />
        <CarouselCaption captionText={item.description} captionHeader={item.description} />
      </CarouselItem>


    );
  });

  return (
  <>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <Container style={mystyle}>
      <p >Đăng kí khóa học ngay hôm nay
        <Button color="primary" href="/register">Đăng kí ngay</Button>
      </p>
        <br/>
        <h1 style={mystyle}>One Consistent Enterprise Experience.</h1>
      <Row>

      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>

      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        </CardBody>
      </Card>
      </Col>
      <Col md={3}>
      <Card>
        <CardImg top width="100%" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>

    </Row>
    </Container>
    <br></br>
    <div style={{backgroundColor:"#f4f4f8"}}>
        <br/>
        <Container>
        <Row>

            <Col md={4}>
      <Card style={{backgroundColor:"transparent"}}>
        <CardImg height="100px" top width="100%" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/Gartner.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
            <Col md={4}>
      <Card style={{backgroundColor:"transparent"}}>
        <CardImg height="100px" top width="100%" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/trustradiusLogo.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
            <Col md={4}>
      <Card style={{backgroundColor:"transparent"}}>
        <CardImg height="100px" top width="100%" src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/g2crowd.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>

          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </Col>
        </Row>
        <br/>
      </Container>
    </div>
      <div>
          <br/>
          <h1 style={mystyle}>Why us?</h1>
          <br/>
          <br/>
          <Container>
              <Row>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_1.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_2.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_3.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_4.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_5.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
          <Col md={4}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/icon_1.png" alt="">
             </img>
              <p>One consistent enterprise experience for all use cases</p>
          </Col>
              </Row>
          </Container>
      </div>
      <div style={{backgroundColor:"#f4f4f8"}}>
        <br/>
        <Container>
            <h1 style={mystyle}>Dạy học online</h1>
        <Row>
            <Col md={3}>
             <img src="https://zoom.us/docs/image/new/home/logo-sn.png" alt="">
             </img>
          </Col>
            <Col md={3}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/8LogoTrendMicro.jpg" alt="">
             </img>
          </Col>
            <Col md={3}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/rakuten.png" alt="">
             </img>
          </Col>
            <Col md={3}>
             <img src="https://d24cgw3uvb9a9h.cloudfront.net/static/94123/image/new/home/logo-logitech.png" alt="">
             </img>
          </Col>
        </Row>
            <br/>
            <div style={mystyle}>
            <Button color="primary" href="/register">Dạy thử</Button>
            <Button color="warning" href="/register">Đăng kí dạy học</Button>
            </div>
        </Container>
      <br/>
      <br/>
      </div>

      <style jsx>
          {`
          Card{
            backgroundColor:transparent;
          `}
      </style>

  </>
  );
};
export default Home;
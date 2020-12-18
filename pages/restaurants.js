/* /pages/restaurants.js */
import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";



import Cart from "../components/cart/";
import AppContext from "../context/AppContext";

import {
    Container,
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Col,
    Row,
} from "reactstrap";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
const GET_MONHOC = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      roles {
        id
        name
        description        
      }
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

function Restaurants() {
    const appContext = useContext(AppContext);
    const router = useRouter();
    const { loading, error, data } = useQuery(GET_MONHOC, {
        variables: { id: router.query.id },
    });

    if (error) return "Error Loading Dishes";
    if (loading) return <h1>Loading ...</h1>;
    if (data.restaurant) {
        const { restaurant } = data;
        return (
            <>
            <aside style={{float:"right"}}><Cart /></aside>
            <Container>
            <h1>{restaurant.name}</h1>
            <Row>
            {restaurant.dishes.map((res) => (
                    <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
            <Card style={{ margin: "0 10px" }}>
    <CardImg
        top={true}
        style={{ height: 250 }}
        src={`${API_URL}${res.image[0].url}`}
        />
        <CardBody>
        <CardTitle>{res.name}</CardTitle>
        <CardText>{res.description}</CardText>
        <CardText>{res.price} vnd</CardText>
        </CardBody>
        <div className="card-footer">
            <Button
        outline
        color="primary"
        onClick={() => appContext.addItem(res)}
    >
        + Add To Cart
        </Button>

        <style jsx>
        {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
    </style>
        </div>
        </Card>
        </Col>
    ))}
    <Col xs="3" style={{ padding: 0 }}>
    <div>
        </div>
        </Col>

        {restaurant.roles.map((res) => (
                    <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
            <Card style={{ margin: "0 10px" }}>

        <CardBody>
        <CardTitle>{res.name}</CardTitle>
        <CardText>{res.description}</CardText>

        </CardBody>
        <div className="card-footer">
            <Button
        outline
        color="primary"
        onClick={() => appContext.addItem(res)}
    >
        + Add To Cart
        </Button>

        <style jsx>
        {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
    </style>
        </div>
        </Card>
        </Col>
    ))}
    <Col xs="3" style={{ padding: 0 }}>
    <div>
        </div>
        </Col>
        </Row>
        </Container>

        </>

    );
    }
    return <h1>Add Dishes</h1>;
}
export default Restaurants;
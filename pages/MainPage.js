import React, { useState } from "react";

import { Container,Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import RestaurantList from "../components/RestaurantList";



const MainPage = () => {


    const [query, updateQuery] = useState("");
    return (
        <Container className="noidung">
        <div className="container-fluid">
        <Row>
        <Col>
        <div className="search">
        <InputGroup>
        <InputGroupAddon addonType="append"> Search </InputGroupAddon>
        <Input
    onChange={e => updateQuery(e.target.value.toLocaleLowerCase())}
    value={query}
    />
    </InputGroup>
    </div>
    <RestaurantList search={query} />
    </Col>
    </Row>
    <style jsx>
    {`
          .search {
            margin: 20px auto;
            width: 500px;
          },
          .noidung{
            height:500px;
          }

        
        `}
</style>
    </div>
    </Container>
);
}
    export default MainPage;
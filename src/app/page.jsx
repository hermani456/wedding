import React from "react";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <>
      <Hero />
      <Container>
        <Form />
        <Gallery />
      </Container>
    </>
  );
};

export default page;

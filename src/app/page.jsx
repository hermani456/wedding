import React from "react";
import Template from "./components/Template";
import Container from "./components/Container";
import Hero from "./components/Hero";
import Form from "./components/Form";

// const page = async () => {
//   return (
//     <div className="flex">
//       <Template />
//     </div>
//   );
// };

// export default page;

const page = () => {
  return (
    <>
      <Hero />
      <Container>
        <Form />
      </Container>
    </>
  );
};

export default page;

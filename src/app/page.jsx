import Container from "./components/Container";
import Card from "./components/Card";

const Page = () => {
  return (
    <Container>
      <section>
        <h1>hola</h1>
        <Card title="Card 1" content="Content 1" />
      </section>
    </Container>
  );
}

export default Page;
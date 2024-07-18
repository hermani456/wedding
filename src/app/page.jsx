import Container from "./components/Container";
import Card from "./components/Card";

const Page = () => {
  return (
    <div className="bg-cuatro h-screen">
      <Container>
        <section>
          <h1>hola</h1>
          <Card title="Card 1" content="Content 1" />
        </section>
      </Container>
    </div>
  );
};

export default Page;

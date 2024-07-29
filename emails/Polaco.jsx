import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults = {
  tips: [
    {
      id: 1,
      description:
        'To find a specific phrase, enter it in quotes: "local storage"',
    },
    {
      id: 1,
      description:
        "To search within specific tag(s), enter them in square brackets: [javascript]",
    },
    {
      id: 1,
      description:
        'Combine them to get even more precise results - [javascript] "local storage" searches for the phrase “local storage” in questions that have the [javascript] tag',
    },
  ],
};

export const Polaco = ({ guest, companion }) => (
  <Html>
    <Head />
    <Preview>You're Invited to Celebrate Our Wedding!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
                Nasze wyjątkowe przyjęcie <br /> czeka na Naszych wyjątkowych
                gości 🌸
              </Heading>
              <Text style={headerContentSubtitle}>
                Zaproszenie na ślub Arancibia i Sujkowskiej
              </Text>
            </Column>
            <Column style={headerImageContainer}>
              <Img
                style={headerImage}
                width={340}
                src={`https://i.imgur.com/8Vvjpyh.png`}
              />
            </Column>
          </Row>
        </Section>

        <Section style={content}>
          <Heading as="h2" style={title}>
            Drodzy {guest} {companion && `and ${companion}`}
          </Heading>
          <Text style={paragraph2}>
            My, Maria Sujkowska i Diego Eduardo Arancibia Palacios, z
            przyjemnością zapraszamy Was na świętowanie Naszego ślubu. Będzie
            dla Nas zaszczytem, jeśli będziecie mogli być z Nami w tym
            wyjątkowym dniu.
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            Uroczystość odbędzie się 14 września 2024 r. (sobota) w Kormoran
            MediSpa (ul. Kościelna 16, 76-212 Rowy, Polska) i przyjęcie weselne
            rozpocznie się o godzinie 16:00. Prosimy o potwierdzenie obecności
            do 15 sierpnia, informując nas o tym telefonicznie lub e-mailem.
            <br />
            <br /> Maria: +48 881 559 378 | maria.sujkowska@gmail.com <br />{" "}
            Diego: +56 9 3574 9805 | diegoarancibiapalacios@gmail.com
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            Jeśli masz/macie specjalne zapotrzebowanie (dieta, alergie,
            ograniczona sprawność ruchowa lub inne), napisz do nas e-mail z
            wyprzedzeniem, abyśmy mogli je uwzględnić i zapewnić wszystkim
            wspólną zabawę. Należy pamiętać, że zakwaterowanie dla zaproszonych
            gości i ich towarzysza jest zapewnione na 13 i 14 września w Rowach,
            w Luna Port lub Domki Scandinavia. Jeśli planujesz zostać na dwa
            dni, daj nam znać jak najszybciej. Biorąc pod uwagę Wydarzenie
            Integracyjno - Powitalne 13 września (piątek), chcielibyśmy wiedzieć
            z wyprzedzeniem, czy Ty i Twój towarzysz będziecie uczestniczyć —
            będzie to okazja do wspólnego przeżycia wspaniałych chwil przed
            naszym głównym wydarzeniem.
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            Twoja obecność na naszym ślubie to najwspanialszy prezent ze
            wszystkich. Jeśli jednak chcesz nas uhonorować prezentem, upominek
            pieniężny będzie mile widziany. Na przyjęciu będzie dostępna
            „skrzynka upominkowa”, w której możesz złożyć swój wkład i najlepsze
            życzenia. Jeśli potrzebujesz informacji o lokalnych usługach opieki
            nad dziećmi, daj nam znać. Dress Code: strój formalny / koktajlowy,
            mężczyźni z krawatem.
          </Text>
          <Hr style={divider} />
          <Heading as="h2" style={title}>
            Z miłością, <br />
            Maria i Diego
          </Heading>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          Otrzymujesz ten e-mail, ponieważ zostałeś zaproszony na nasz ślub. To
          Twoje wirtualne zaproszenie – zadbaj o naszą Planetę. Jeśli
          zaznaczyłeś, że potrzebujesz zaproszenia w formie papierowej, zostanie
          ono wysłane na Twój adres domowy.
        </Text>

        {/* <Link href="https://yme.cl" style={footerLink}>
          Visit Yme.cL{" "}
        </Link> */}
      </Section>
    </Body>
  </Html>
);

Polaco.PreviewProps = {
  tips: PropDefaults.tips,
};

export default Polaco;

const main = {
  backgroundColor: "#f3f3f5",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const headerContent = { padding: "20px 30px 15px" };

const headerContentTitle = {
  color: "#fff",
  fontSize: "27px",
  fontWeight: "semibold",
  lineHeight: "27px",
};

const headerContentSubtitle = {
  color: "#fff",
  fontSize: "17px",
};

const headerImageContainer = {
  padding: "30px 10px",
};

const headerImage = {
  maxWidth: "100%",
};

const title = {
  margin: "0 0 15px",
  fontWeight: "bold",
  fontSize: "15px",
  lineHeight: "21px",
  color: "#0c0d0e",
};

const paragraph = {
  fontSize: "15px",
  lineHeight: "21px",
  color: "#3c3f44",
};
const paragraph2 = {
  fontSize: "13px",
  lineHeight: "21px",
  color: "#3c3f44",
  fontWeight: 600,
};

const divider = {
  margin: "30px 0",
};

const container = {
  width: "680px",
  maxWidth: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
};

const footer = {
  width: "680px",
  maxWidth: "100%",
  margin: "32px auto 0 auto",
  padding: "0 30px",
};

const content = {
  padding: "30px 30px 40px 30px",
};

const logo = {
  display: "flex",
  background: "#f3f3f5",
  padding: "20px 30px",
};

const header = {
  borderRadius: "5px 5px 0 0",
  display: "flex",
  flexDireciont: "column",
  backgroundColor: "#2b2d6e",
};

const buttonContainer = {
  marginTop: "24px",
  display: "block",
};

const button = {
  backgroundColor: "#0095ff",
  border: "1px solid #0077cc",
  fontSize: "17px",
  lineHeight: "17px",
  padding: "13px 17px",
  borderRadius: "4px",
  maxWidth: "120px",
  color: "#fff",
};

const footerDivider = {
  ...divider,
  borderColor: "#d6d8db",
};

const footerText = {
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
  margin: "0",
};

const footerLink = {
  display: "inline-block",
  color: "#9199a1",
  textDecoration: "underline",
  fontSize: "12px",
  marginRight: "10px",
  marginBottom: "0",
  marginTop: "8px",
};

const footerAddress = {
  margin: "4px 0",
  fontSize: "12px",
  lineHeight: "15px",
  color: "#9199a1",
};

const footerHeart = {
  borderRadius: "1px",
  border: "1px solid #d6d9dc",
  padding: "4px 6px 3px 6px",
  fontSize: "11px",
  lineHeight: "11px",
  fontFamily: "Consolas,monospace",
  color: "#e06c77",
  maxWidth: "min-content",
  margin: "0 0 32px 0",
};

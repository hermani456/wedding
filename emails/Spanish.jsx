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

export const Spanish = ({ guest, companion }) => (
  <Html>
    <Head />
    <Preview>You're Invited to Celebrate Our Wedding!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
                Nuestra celebración especial <br /> espera a nuestros invitados
                más especiales 🌸
              </Heading>
              <Text style={headerContentSubtitle}>
                Invitación de boda de Arancibia - Sujkowska
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
            Estimados {guest} {companion && `and ${companion}`}
          </Heading>
          <Text style={paragraph2}>
            Nosotros, Maria Sujkowska y Diego Eduardo Arancibia Palacios,
            estamos encantados de invitarlos a celebrar nuestra boda. Sería un
            honor para nosotros tenerlos con nosotros en este día tan especial.
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            La celebración se llevará a cabo el 14 de septiembre de 2024
            (sábado), en Kormoran MediSpa (Kościelna 16, 76-212 Rowy, Polonia),
            donde la recepción de la boda comenzará a las 4:00 p. m. Por favor,
            confirmen su asistencia antes del 15 de agosto, avisándonos por
            teléfono o correo electrónico.
            <br />
            <br /> Maria: +48 881 559 378 | maria.sujkowska@gmail.com <br />{" "}
            Diego: +56 9 3574 9805 | diegoarancibiapalacios@gmail.com
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            Si tienes algún requisito especial (dieta, alergias, movilidad
            reducida u otro), escríbenos con antelación para que podamos tenerlo
            en cuenta y asegurarnos de que todos disfruten juntos. Ten en cuenta
            que el alojamiento para los invitados y su acompañante está
            reservado para el 13 y 14 de septiembre en Rowy, Luna Port o Domki
            Scandinavia. Si tienes pensado quedarte dos días, avísanos lo antes
            posible. Teniendo en cuenta el Evento de Bienvenida el 13 de
            septiembre (viernes), nos gustaría saber con antelación si tú y tu
            acompañante participarán; será una oportunidad de compartir una gran
            experiencia juntos antes de nuestro evento principal.
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            Tu presencia en nuestra boda es el mejor regalo de todos. Sin
            embargo, si deseas honorarnos con un regalo, un regalo en efectivo
            sería muy bienvenido. En la recepción habrá una "caja de regalos"
            disponible para tu contribución y tus mejores deseos. Si necesitas
            información sobre servicios de niñera locales, infórmanos. Código de
            vestimenta: Formal con corbata
          </Text>
          <Hr style={divider} />
          <Heading as="h2" style={title}>
            Con mucho cariño, <br />
            Maria y Diego
          </Heading>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          Recibiste este correo electrónico porque estas invitado a nuestra
          boda. Es su invitación virtual - cuida a nuestra Planeta. Si indicó
          que necesita una invitación en papel, se le enviará a su domicilio.
        </Text>

        {/* <Link href="https://yme.cl" style={footerLink}>
          Visit Yme.cL{" "}
        </Link> */}
      </Section>
    </Body>
  </Html>
);

Spanish.PreviewProps = {
  tips: PropDefaults.tips,
};

export default Spanish;

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

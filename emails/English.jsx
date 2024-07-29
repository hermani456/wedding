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

export const English = ({ guest, companion }) => (
  <Html>
    <Head />
    <Preview>You're Invited to Celebrate Our Wedding!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Row>
            <Column style={headerContent}>
              <Heading style={headerContentTitle}>
                Our Special Celebration <br /> Awaits Our Most Special Guests 🌸
              </Heading>
              <Text style={headerContentSubtitle}>
                Arancibia-Sujkowska's Wedding Invitation
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
            Dear {guest} {companion && `and ${companion}`}
          </Heading>
          <Text style={paragraph2}>
            Us, Maria Sujkowska and Diego Eduardo Arancibia Palacios, we are
            thrilled to invite you to celebrate our wedding. It would be our
            honour to have you with us on this special day.
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            The celebration will take place on the 14th of September 2024
            (Saturday), at Kormoran MediSpa (Kościelna 16, 76-212 Rowy, Poland),
            where the wedding reception will start from 4PM. Please RSVP until
            15th of August, by letting us know by phone or email. <br /><br /> Maria:
            +48 881 559 378 | maria.sujkowska@gmail.com <br /> Diego: +56 9 3574
            9805 | diegoarancibiapalacios@gmail.com
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            If you have any special requirements (diet, allergies, reduced
            mobility, or other), please email us in advance so we can consider
            them and ensure everyone enjoys together. Please note, that
            accommodation for the invitees and their companion is secured for
            the 13th and 14th of September at Rowy, at Luna Port or Domki
            Scandinavia. If you are planning to stay for two days, please let us
            know as soon as possible. Considering the Welcome Event on September
            13th (Friday), we would like to know in advance if you and your
            companion will be participating - it will be a chance to share a
            great experience together prior to our main event.
          </Text>
          {/* <Hr style={divider} /> */}
          <Text style={paragraph2}>
            Your presence at our wedding is the greatest gift of all. However,
            if you wish to honour us with a gift, a cash gift would be very
            welcome. A “gift box” will be available at the reception for your
            contribution and best wishes. If you need information on local
            babysitting services, please let us know. Dress Code : Cocktail
            attire , men with ties
          </Text>
          <Hr style={divider} />
          <Heading as="h2" style={title}>
            With love, <br />
            Maria and Diego
          </Heading>
        </Section>
      </Container>

      <Section style={footer}>
        <Text style={footerText}>
          You´re receiving this email because you were invited to our wedding.
          It's your virtual invitation – take care of our Planet. If you
          indicated that you need a paper invitation – it will be sent to your
          home address.
        </Text>

        {/* <Link href="https://yme.cl" style={footerLink}>
          Visit Yme.cL{" "}
        </Link> */}
      </Section>
    </Body>
  </Html>
);

English.PreviewProps = {
  tips: PropDefaults.tips,
};

export default English;

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

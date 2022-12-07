import { Container, Content, Header } from "rsuite";
import Cards from "../components/Cards/Cards";
import FooterComponent from "../components/Footer/FooterComponent";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Navigation from "../components/Navbar/Navigation";


function Home() {
  return (
    <Container >
      <Navigation />
      <Header><Hero /></Header>
      <Content>

        <Cards />
        <Intro />
      </Content>

      <FooterComponent />
    </Container>
  )
}

export default Home;
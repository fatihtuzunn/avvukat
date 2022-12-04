import { Container, Content, Header } from "rsuite";
import Cards from "../components/Cards/Cards";
import FooterComponent from "../components/Footer/FooterComponent";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Navigation from "../components/Navbar/Navigation";


function Home() {
  return (
    <Container>
      <Header><Hero /></Header>
      <Content>
        <Cards />
        <Intro />
      </Content>


    </Container>
  )
}

export default Home;
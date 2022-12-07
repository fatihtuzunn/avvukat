import React from 'react';
import { Button, Col, Container, Grid, Row } from 'rsuite';
import Logo from '../Logo/Logo';
import styles from "./Hero.module.scss"
const Hero = () => {
    const img = "https://images.unsplash.com/photo-1606323518213-ba20fcddec0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

    return (
        <Container className={styles.hero}>

            <Grid style={{ marginTop: "50px" }}>
                <Row class="row">
                    <Col xs={24} sm={24} md={12} className={styles.leftCol}>
                        <p class={styles.kicker}>Kullanışlı hukuk teknolojileri</p>
                        <Logo margin="20px 0 10px 30px" />
                        <h1 class={styles.jumbo}>Hukuki belge otomasyonu.</h1> <br />

                        <h5>Hızlı ve zahmetsizce hukuki belgelerinizi oluşturun, zamandan ve kaynaklardan tasarruf edin. </h5>
                        <br />
                        <Button href="#" appearance="primary"><i class="fa-solid fa-download" target="_blank"></i> &nbsp;Download</Button>
                        <Button href="#" class="btn btn-secondary" target="_blank"><i class="fa-brands fa-github"></i> &nbsp;View on GitHub</Button>
                    </Col>

                    <Col xs={24} sm={24} md={12}>
                        <div className={styles.glitch}>
                            <div className={`${styles.channel} ${styles.r}`}></div>
                            <div className={`${styles.channel} ${styles.g}`}></div>
                            <div className={`${styles.channel} ${styles.b}`}></div>
                        </div>

                    </Col>
                </Row>
            </Grid>
        </Container>


    );
}

export default Hero;

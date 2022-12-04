import React from 'react';
import { Button, Col, Container, Grid, Row } from 'rsuite';
import styles from "./Hero.module.scss"
const Hero = () => {
    const img = "https://images.unsplash.com/photo-1606323518213-ba20fcddec0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

    return (


        <section id={styles.hero}>
            <div className={styles.glitch}>
                <div className={`${styles.channel} ${styles.r}`}></div>
                <div className={`${styles.channel} ${styles.g}`}></div>
                <div className={`${styles.channel} ${styles.b}`}></div>
            </div>





            <Container className={styles.container}>

                <Grid>
                    <Row class="row">
                        <Col xs={24} sm={24} md={12} >
                            <p class={styles.kicker}>A trusted Digital Agency</p>
                            <h1 class={styles.jumbo}>Hukukla ilgili <br />dijital çözümler.</h1>

                            <p>We build effective strategies to help you reach customers and prospects across the entire web. This is a free and open source landing page template.</p>

                            <Button href="#" appearance="primary"><i class="fa-solid fa-download" target="_blank"></i> &nbsp;Download</Button>
                            <Button href="#" class="btn btn-secondary" target="_blank"><i class="fa-brands fa-github"></i> &nbsp;View on GitHub</Button>
                        </Col>

                        <Col xs={24} sm={24} md={12}>


                        </Col>
                    </Row>
                </Grid>
            </Container>
        </section>

    );
}

export default Hero;

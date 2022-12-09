import React from 'react';
import { Button, Col, Container, Grid, IconButton, Row } from 'rsuite';
import PageEndIcon from '@rsuite/icons/PageEnd';
import Logo from '../Logo/Logo';
import styles from "./Hero.module.scss"
import { useMediaQuery } from 'react-responsive';
const Hero = () => {
    const img = "https://images.unsplash.com/photo-1606323518213-ba20fcddec0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <Container className={styles.hero}>

            <Grid style={{ marginTop: "50px" }}>
                <Row class="row">
                    <Col xs={24} sm={24} md={12} className={styles.leftCol}>
                        <p className="kicker">Kullanışlı hukuk teknolojileri</p>
                        <Logo margin={isTabletOrMobile ? "0" : "15px 0 10px 35px"} />
                        <h1 class={styles.jumbo}>Hukuki belge otomasyonu.</h1>

                        <p className='toptitle'>Hızlı ve zahmetsizce hukuki belgelerinizi oluşturun, zamandan ve kaynaklardan tasarruf edin. </p>
                        <br /><br />
                        <IconButton size='xl' appearance="ghost" color="blue" icon={<PageEndIcon />} href="/uygulama/editor">
                            Şimdi ücretsiz dene
                        </IconButton>
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

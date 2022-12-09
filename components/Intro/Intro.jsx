import Image from 'next/image';
import React from 'react';
import { Col, Container, Grid, Panel, PanelGroup, Row } from 'rsuite';
import styles from "./Intro.module.scss"

const Intro = () => {
    return (
        <>
            <section id={styles.intro}>
                <Container >
                    <Grid>
                        <Row className={styles.row}>
                            <Col xs={24} sm={24} md={12}>
                                <p className="kicker">Let&apos;s Connect</p>
                                <h2>Getting you connected <br />to your audience.</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <PanelGroup accordion className={styles.accordion}>
                                    <Panel header="Panel title" collapsible bordered>
                                        <div class="a-panel">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non sint sequi ipsa laudantium, a
                                                iure rem vel nemo soluta temporibus, consectetur at corrupti aspernatur maxime, iusto neque
                                                blanditiis deleniti.</p>
                                        </div>
                                    </Panel>
                                    <Panel header="Panel title" bordered collapsible >
                                        <div class="a-panel">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non sint sequi ipsa laudantium, a
                                                iure rem vel nemo soluta temporibus, consectetur at corrupti aspernatur maxime, iusto neque
                                                blanditiis deleniti.</p>
                                        </div>
                                    </Panel>
                                    <Panel header="Panel title" collapsible bordered>
                                        <div className="a-panel" >
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur non sint sequi ipsa laudantium, a
                                                iure rem vel nemo soluta temporibus, consectetur at corrupti aspernatur maxime, iusto neque
                                                blanditiis deleniti.</p>
                                        </div>
                                    </Panel>
                                </PanelGroup>

                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                <img src="https://assets.codepen.io/772926/section-img-01.png" className={styles.imgRight} alt="" />
                            </Col>
                        </Row>
                    </Grid>
                </Container>
            </section>

            <section id={styles.features}>
                <Container >
                    <Grid>
                        <Row  >


                            <Col xs={24} sm={24} md={12}>
                                <img src="https://assets.codepen.io/772926/section-img-02.png" className={styles.imgLeft} alt="Intro image" />
                            </Col>

                            <Col xs={24} sm={24} md={12}>
                                <p className="kicker">Fully Intergrated</p>
                                <h2>Work with tools you <br />already use.</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            </Col>
                        </Row>
                    </Grid>
                </Container>
            </section>
        </>
    );
}

export default Intro;

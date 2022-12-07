import React from 'react';
import { Col, Footer, Grid, Row } from 'rsuite';
import styles from "./Footer.module.scss"


const FooterComponent = () => {
    return (

        <Footer className={styles.footer}>
            <div class="container">
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <h3>Company</h3>

                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Careers</a>
                                </li>
                                <li>
                                    <a href="#">Brand Center</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6}>
                            <h3>Help Center</h3>

                            <ul>
                                <li>
                                    <a href="#">Discord Server</a>
                                </li>
                                <li>
                                    <a href="#">Twitter</a>
                                </li>
                                <li>
                                    <a href="#">Facebook</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6}>
                            <h3>Legal</h3>

                            <ul>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Licensing</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                            </ul>
                        </Col>
                        <Col sm={6}>



                            <p><small>© 2021-2022 Remedy™. All Rights Reserved. A free and open source landing page template.</small></p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        </Footer>
    );
}

export default FooterComponent;

import {
    Col,
    Container,
    Grid,
    Row,
    Content,
    IconButton,
    Modal,
    Footer,
    Stack,
    Panel,
} from "rsuite";
import FormInput from "../../components/Uygulama/Input/FormInput";
import Preview from "../../components/Uygulama/Preview/Preview";
import { useMediaQuery } from "react-responsive";
import { Image } from "@rsuite/icons";
import { useState } from "react";
import Link from "next/link";

function Index() {
    const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
    return (
        <div className="dilekce">
            <Container>
                <Content>
                    <Grid
                        style={{ width: "100%", padding: isBigScreen ? "1rem" : "1rem 0.5rem", }}
                    >
                        <Row>
                            <Col
                                md={14}
                                style={{
                                    height: "calc(100vh - 3rem)",
                                    overflowY: "scroll",
                                    boxShadow: "5px 0px 5px -5px rgba(0,0,0,0.75)"
                                }}
                            >

                                <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Templates</h2>
                                <Stack wrap spacing={50} justifyContent="center">
                                    <Link href="uygulama/Dilekce">
                                        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                            <img src="https://via.placeholder.com/240x240" height="240" />
                                            <Panel header="RSUITE">
                                                <p>
                                                    <small>
                                                        A suite of React components, sensible UI design, and a friendly development experience.
                                                    </small>
                                                </p>
                                            </Panel>
                                        </Panel>
                                    </Link>
                                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                        <img src="https://via.placeholder.com/240x240" height="240" />
                                        <Panel header="RSUITE">
                                            <p>
                                                <small>
                                                    A suite of React components, sensible UI design, and a friendly development experience.
                                                </small>
                                            </p>
                                        </Panel>
                                    </Panel>
                                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                        <img src="https://via.placeholder.com/240x240" height="240" />
                                        <Panel header="RSUITE">
                                            <p>
                                                <small>
                                                    A suite of React components, sensible UI design, and a friendly development experience.
                                                </small>
                                            </p>
                                        </Panel>
                                    </Panel>
                                    <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                        <img src="https://via.placeholder.com/240x240" height="240" />
                                        <Panel header="RSUITE">
                                            <p>
                                                <small>
                                                    A suite of React components, sensible UI design, and a friendly development experience.
                                                </small>
                                            </p>
                                        </Panel>
                                    </Panel>
                                </Stack>

                            </Col>
                            {isBigScreen ? (
                                <Col md={10}>
                                    <Preview />
                                </Col>
                            ) : (
                                ""
                            )}
                        </Row>
                    </Grid>
                </Content>



            </Container>


        </div>
    );
}

export default Index;


import React from "react";

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
import Preview from "../../../components/Uygulama/Preview/Preview";
import { useMediaQuery } from "react-responsive";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BasitImage from "../../../assets/images/Basit.png"
import DavaImage from "../../../assets/images/Dava.png"
import SidenavComp from "../../../components/Uygulama/Sidenav/SidenavComp";

function Index() {
    const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });


    return (
        <div className="dilekce">


            <SidenavComp />




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
                                    <Link href="editor/Dilekce">
                                        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                            <div style={{ height: "250px", width: "240px", position: "relative" }}><Image src={BasitImage} fill /></div>
                                            <Panel header="Basit Dilekçe">
                                                <p>
                                                    <small>
                                                        A suite of React components, sensible UI design, and a friendly development experience.
                                                    </small>
                                                </p>
                                            </Panel>
                                        </Panel>
                                    </Link>
                                    <Link href="editor/Dava">
                                        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
                                            <div style={{ height: "250px", width: "240px", position: "relative" }}><Image src={DavaImage} fill /></div>
                                            <Panel header="Dava Dilekçesi">
                                                <p>
                                                    <small>
                                                        A suite of React components, sensible UI design, and a friendly development experience.
                                                    </small>
                                                </p>
                                            </Panel>
                                        </Panel>
                                    </Link>
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

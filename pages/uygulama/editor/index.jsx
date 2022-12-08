
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
import { Image } from "@rsuite/icons";
import { useState } from "react";
import Link from "next/link";

import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

function Index() {
    const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
    const [expanded, setExpanded] = useState(true);
    const [activeKey, setActiveKey] = useState('1');

    return (
        <div className="dilekce">



            <div style={{ width: 240, position: "absolute", zIndex: 999, left: "-40px", top: "20%" }}>

                <Sidenav expanded={false} defaultOpenKeys={['3', '4']}>
                    <Sidenav.Body>
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                User Group
                            </Nav.Item>
                            <Nav.Menu placement="rightStart" eventKey="3" title="Advanced" icon={<MagicIcon />}>
                                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu
                                placement="rightStart"
                                eventKey="4"
                                title="Settings"
                                icon={<GearCircleIcon />}
                            >
                                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                                <Nav.Menu eventKey="4-5" title="Custom Action">
                                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                                </Nav.Menu>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>
                    <Sidenav.Toggle style={{ position: "absolute", left: "40px", top: "-45px" }} expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
                </Sidenav>
            </div>



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
                                            <Image src="https://via.placeholder.com/240x240" height="240" />
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
                                            <Image src="https://via.placeholder.com/240x240" height="240" />
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

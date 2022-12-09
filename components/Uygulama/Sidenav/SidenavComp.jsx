import { Sidenav, Nav, Toggle } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import React from 'react';
import { useState } from 'react';

const SidenavComp = () => {
    const [expanded, setExpanded] = useState(false);
    const [activeKey, setActiveKey] = useState('1');

    return (
        <div>

            <div style={{ width: 240, position: "absolute", zIndex: 999, left: "-40px", top: "20%" }}>

                <Sidenav expanded={expanded} defaultOpenKeys={['3', '4']}>
                    <Sidenav.Body>
                        <Nav activeKey={activeKey} onSelect={setActiveKey}>
                            <Nav.Item href='/' eventKey="1" icon={<DashboardIcon />}>
                                Dashboard
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<GroupIcon />}>
                                User Group
                            </Nav.Item>
                            <Nav.Menu placement="rightStart" eventKey="3" title="Uygulama" icon={<MagicIcon />}>
                                <Nav.Item href="/uygulama/editor" eventKey="3-1">Templates</Nav.Item>
                                <Nav.Item href="/uygulama/editor/Dava" eventKey="3-2">Dava Dilekçesi</Nav.Item>
                                <Nav.Item href="/uygulama/editor/Dilekce" eventKey="3-3">Basit Dilekçe</Nav.Item>

                            </Nav.Menu>

                        </Nav>
                    </Sidenav.Body>
                    <Sidenav.Toggle style={{ position: "absolute", left: "40px", top: "-45px" }} expanded={expanded} onToggle={expanded => setExpanded(expanded)} />
                </Sidenav>
            </div>
        </div>
    );
}

export default SidenavComp;



import React, { useState } from "react";
import { Col, Form, IconButton, Input, Row, Checkbox, RadioGroup, Radio, DatePicker, Toggle, ButtonToolbar, Button } from "rsuite";
import { Edit, UserInfo } from "@rsuite/icons";
import MiscInputs from "../sub-components/MiscInputs";
import { otherInputs } from "../../../assets/MiscInputList";
import { useDispatch, useSelector } from "react-redux";
import {
    changeDavali,
    changeDavaci,
    changeMahkeme,
    changeName,
    changeAdress,
    changeAltust,
    changeTc,
    changeCountry,
    changePhone,
    changeText,
    changeDate,
    changeURL

} from "../../../store/davaSlice";
import { useMediaQuery } from "react-responsive";
import ListViewPanel from "../sub-components/ListViewPanel";
import { data } from "../../../assets/data";
import SidebarComponent from "../Sidebar/SidebarComponent";
import Links from "../sub-components/modal_content/Links";



function DavaInput(props) {
    const [text, setText] = useState("");
    const [checked, setChecked] = useState(true);
    const [davaci, setDavaci] = useState({
        isim: "",
        tc: "",
        adres: ""
    });
    const [davali, setDavali] = useState({
        isim: "",
        tc: "",
        adres: ""
    });
    const [vekil, setVekil] = useState({
        isim: "",
        tc: "",
        adres: ""
    });


    {/* responsive react*/ } const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
    const dispatch = useDispatch();
    const state = useSelector(state => state.dilekce)

    const handleDavaciChange = (e) => {
        console.log(e, this)
        const { name, value } = e.target;
        setDavaci({ ...davaci, [name]: value });
    };

    const handleDavaciSubmit = (e) => {

        console.log(davaci)
        // set data to store on submit
        dispatch(changeDavaci(davaci));

    };

    const handleDavaliChange = (e) => {
        console.log(e, this)
        const { name, value } = e.target;
        setDavali({ ...davali, [name]: value });
    };

    const handleDavaliSubmit = (e) => {

        console.log(davali)
        // set data to store on submit
        dispatch(changeDavali(davali));

    };
    const handleVekilChange = (e) => {
        console.log(e, this)
        const { name, value } = e.target;
        setVekil({ ...vekil, [name]: value });
    };

    const handleVekilSubmit = (e) => {

        console.log(vekil)
        // set data to store on submit
        dispatch(changeVekil(vekil));

    };

    const styles = {
        title: { fontSize: "large", fontWeight: "600" },
    };

    const handleTextareaInput = (arg) => {
        var len = arg.split(" ").length;
        if (len > 60) {
            alert("Word limit crossed!");
        } else {
            setText(arg);
            dispatch(changeText(arg));
        }
    };


    const handleChange = () => {

        setChecked(!checked);
        console.log(checked)
        dispatch(changeTc(checked))
    };




    const handleAltust = (e) => {
        console.log(e)
        dispatch(changeAltust(e))

    };



    return (
        <div style={{ padding: isBigScreen ? "2rem" : "1rem" }}>

            {/* Başlık  */}
            <Row>
                <Col xs={24} sm={9}>
                    <Form fluid>
                        <span style={styles.title}>Mahkeme</span>
                        <br />
                        <Form.Control onChange={e => dispatch(changeMahkeme(e))} /><br /></Form>
                </Col>
                <Col xs={24} sm={5}>
                    <Form>
                        <span style={styles.title}>Tarih</span>
                        <br />
                        <DatePicker format="dd/MM/yyyy" onChange={(date) => {
                            const dateString = new Date(date).toLocaleDateString("tr-TR")
                            dispatch(changeDate(dateString))
                        }} /></Form>
                </Col>
                <Col xs={24} sm={10}>
                    <Form fluid>
                        <span style={styles.title}>Konu</span>
                        <br />
                        <Form.Control onChange={e => dispatch(changeMahkeme(e))} /><br /></Form>
                </Col>
            </Row>

            <Row>
                <Col xs={24} sm={8}>
                    <Form onSubmit={handleDavaciSubmit} >
                        <Form.Group controlId="isim">
                            <Form.ControlLabel>Davacı İsim</Form.ControlLabel>
                            <input class="rs-input" name="isim" onChange={handleDavaciChange} />
                        </Form.Group>
                        <Form.Group controlId="tc">
                            <Form.ControlLabel>Davacı TC</Form.ControlLabel>
                            <input class="rs-input" name="tc" onChange={handleDavaciChange} />
                        </Form.Group>

                        <Form.Group controlId="textarea">
                            <Form.ControlLabel>Textarea</Form.ControlLabel>
                            <textarea class="rs-input" rows={2} name="adres" onChange={handleDavaciChange} />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" type="submit">Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={24} sm={8}>
                    <Form onSubmit={handleDavaliSubmit}>
                        <Form.Group controlId="isim">
                            <Form.ControlLabel>Davalı İsim</Form.ControlLabel>
                            <input class="rs-input" name="isim" onChange={handleDavaliChange} />
                        </Form.Group>
                        <Form.Group controlId="tc">
                            <Form.ControlLabel>Davalı TC</Form.ControlLabel>
                            <input class="rs-input" name="tc" onChange={handleDavaliChange} />
                        </Form.Group>

                        <Form.Group controlId="textarea">
                            <Form.ControlLabel>Textarea</Form.ControlLabel>
                            <textarea class="rs-input" rows={2} name="adres" onChange={handleDavaliChange} />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" type="submit">Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={24} sm={8}>
                    <Form onSubmit={handleVekilSubmit}>
                        <Form.Group controlId="isim">
                            <Form.ControlLabel>Vekil İsim</Form.ControlLabel>
                            <input class="rs-input" name="isim" onChange={handleVekilChange} />
                        </Form.Group>
                        <Form.Group controlId="tc">
                            <Form.ControlLabel>Vekil TC</Form.ControlLabel>
                            <input class="rs-input" name="tc" onChange={handleVekilChange} />
                        </Form.Group>

                        <Form.Group controlId="textarea">
                            <Form.ControlLabel>Textarea</Form.ControlLabel>
                            <textarea class="rs-input" rows={2} name="adres" onChange={handleVekilChange} />
                        </Form.Group>
                        <Form.Group>
                            <ButtonToolbar>
                                <Button appearance="primary" type="submit">Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Form>
                <br /><br />

                <MiscInputs
                    key="aaa"
                    title="Açıklamalar"
                    desc="Dava Açıklamaları"
                    buttonText="Gir"
                    modal={<Links />}
                    source="links"
                    task={changeURL}
                />


                {/* İletişim bilgileri  */}
                <Form.Group>
                    <span style={styles.title}>İletişim Bilgileri</span>
                    <p style={{ paddingTop: "0.5rem" }}>Sizin hakkınızdaki bilgiler</p>
                    <br />

                    <Row>
                        <Col xs={24} sm={12}>
                            <Form.ControlLabel>İsim-Soyisim</Form.ControlLabel>
                            <Input onChange={(e) => dispatch(changeName(e))} />
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.ControlLabel>Adres</Form.ControlLabel>
                            <Input onChange={(e) => dispatch(changeAdress(e))} />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col xs={24} sm={12}>
                            <Form.ControlLabel>Telefon Numarası</Form.ControlLabel>
                            <Input
                                type={"tel" /* type = tel allows for auto fill */}
                                onChange={(e) => dispatch(changePhone(e))}

                            />
                        </Col>
                        <Col xs={24} sm={12}>
                            <Form.ControlLabel>TC Kimlik</Form.ControlLabel>
                            <Input onChange={(e) => dispatch(changeCountry(e))} type="text" />
                        </Col>
                    </Row>
                </Form.Group>
                <br />

                {/* Yazı kısmı */}
                <Form.Group>
                    <p style={styles.title}>Metin</p>
                    <p>
                        İlgili makama yazacağınız dilekçe metni.
                        60 kelimeyi geçmeyecek şekilde.
                        ({text.length ? text.split(" ").length : 0} / 60)
                    </p>
                    <br />
                    <textarea
                        value={state.text}
                        onChange={(e) => handleTextareaInput(e.target.value)}
                        className="txt rs-input"
                        rows={10}
                    ></textarea>


                    <RadioGroup name="radioList" inline onChange={handleAltust}>
                        <Radio value="alt">Alt Makama</Radio>
                        <Radio value="ust">Üst Makama</Radio>

                    </RadioGroup>

                </Form.Group>



                {/* other inputs */}
                <Form.Group>
                    {otherInputs.map((item) => (
                        <MiscInputs
                            key={item.title}
                            title={item.title}
                            desc={item.desc}
                            buttonText={item.buttonText}
                            modal={item.modal}
                            source={item.source}
                            task={item.task}
                        />
                    ))}
                </Form.Group>

                {/* Örnek dilekçeler */}
                <SidebarComponent />

            </Form>
        </div>
    );
}

export default DavaInput;

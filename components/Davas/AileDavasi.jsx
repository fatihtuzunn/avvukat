import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Checkbox, Col, FlexboxGrid, Form, Grid, Input, Row, SelectPicker, Toggle } from 'rsuite';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import { sehirler } from './sehir';



const AileDavasi = () => {
    const [es, setEs] = useState("");

    const [ortak, setOrtak] = useState("");
    const [kira, setKira] = useState(false);


    return (
        <div>
            <FlexboxGrid justify="center">

                <FlexboxGridItem colspan={12} as={Col}  >
                    <Form>
                        <br />
                        {/* <label htmlFor="">Davanın konusu terekenin tespit edilmesi ile mi ilgili?</label>
                            <Toggle onChange={setKira}></Toggle>
                            <br />*/}
                        <Form.Group >
                            <Form.HelpText >Madde 168 - Boşanma veya ayrılık davalarında yetkili mahkeme, eşlerden birinin yerleşim yeri veya davadan önce son defa altı aydan beri birlikte oturdukları yer mahkemesidir.</Form.HelpText>

                            <br />

                            <Form.ControlLabel>Eşlerden Birinin Yerleşim Yeri</Form.ControlLabel>

                            <SelectPicker onChange={setEs} data={sehirler.map(item => ({ label: item.name, value: item.name }))} style={{ width: 224 }} />

                            <br />

                            < Form.ControlLabel>Davadan Önce Eşlerin Aralıksız 6 Ay Birlikte Kaldıkları Yer</Form.ControlLabel>

                            <SelectPicker onChange={setOrtak} data={sehirler.map(item => ({ label: item.name, value: item.name }))} style={{ width: 224 }} />
                        </Form.Group>



                    </Form>
                </FlexboxGridItem>
            </FlexboxGrid>
            <br />

            <Grid >

                <Row style={{ height: "20rem", marginTop: "3rem" }}>

                    <Col sm={24} xs={24} md={12} style={{ textAlign: "center", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
                        <h1 className='title' >Görevli Mahkeme</h1>
                        <br />

                        <>
                            <p>Aile Mahkemesi</p>
                            <Form.HelpText>Aile Mahkemesi olmayan yerlerde ; <b>Asliye Hukuk Mahkemeleri Aile Mahkemesi sıfatıyla</b></Form.HelpText>

                        </>
                    </Col>

                    <Col sm={24} xs={24} md={12} style={{ textAlign: "center", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
                        <h1 className='title'  >Yetkili Mahkeme</h1>
                        <br />

                        <p>{es}</p>
                        <br />
                        <p>{ortak}</p>


                    </Col>
                </Row>




            </Grid>
        </div >
    );
}

export default AileDavasi;

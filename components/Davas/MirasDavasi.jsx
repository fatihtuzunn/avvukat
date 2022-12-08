import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Checkbox, Col, FlexboxGrid, Form, Grid, Input, Row, SelectPicker, Toggle } from 'rsuite';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import { sehirler } from './sehir';



const MirasDavasi = () => {
    const [olen, setOlen] = useState("");

    const [geciciYeri, setGeciciYeri] = useState("");
    const [kira, setKira] = useState(false);


    return (
        <div>

            <FlexboxGrid justify='center'>
                <FlexboxGridItem colspan={12}  >
                    <Form >
                        <br />
                        <Form.Group>
                            <p>Davanın konusu terekenin tespit edilmesi ile mi ilgili?</p>
                            <Toggle onChange={setKira}></Toggle>
                        </Form.Group>
                        <br />
                        <Form.Group >
                            <Form.ControlLabel>Miras Bırakan Kişinin Yerleşim Yeri</Form.ControlLabel>
                            <Form.HelpText>TMK Madde 576 - &quot;Miras, malvarlığının tamamı için mirasbırakanın yerleşim yerinde açılır. Mirasbırakanın tasarruflarının iptali veya tenkisi, mirasın paylaştırılması ve miras sebebiyle istihkak davaları bu yerleşim yeri mahkemesinde görülür.&quot;</Form.HelpText>
                            <br />
                            <SelectPicker onChange={setOlen} data={sehirler.map(item => ({ label: item.name, value: item.name }))} style={{ width: 224 }} />

                        </Form.Group>



                    </Form>
                </FlexboxGridItem>
            </FlexboxGrid>
            <br />
            <Grid>
                <Row>
                    <Col sm={24} xs={24} md={12} style={{ textAlign: "center", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
                        <h1 className='title' >Görevli Mahkeme</h1>
                        <br />
                        {kira ?
                            <>
                                <p>Sulh Hukuk Mahkemesi</p>
                                <Form.HelpText>HMK 383 &quot;Çekişmesiz yargı işlerinde görevli mahkeme, aksine bir düzenleme bulunmadığı sürece sulh hukuk mahkemesidir.&quot;</Form.HelpText>

                            </> : "Asliye Hukuk Mahkemesi"}
                    </Col>

                    <Col sm={24} xs={24} md={12} style={{ textAlign: "center", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
                        <h1 className='title'  >Yetkili Mahkeme</h1>
                        <br />

                        <p>{olen}</p>



                    </Col>
                </Row>
            </Grid>
        </div >
    );
}

export default MirasDavasi;

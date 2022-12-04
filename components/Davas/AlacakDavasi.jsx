import React from 'react';
import { useState, useEffect } from 'react';
import { Button, ButtonGroup, Checkbox, Col, FlexboxGrid, Form, Grid, Input, Panel, Row, SelectPicker, Toggle } from 'rsuite';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import { sehirler } from './sehir';



const AlacakDavasi = () => {
    const [davali, setDavali] = useState("");
    const [davaci, setDavaci] = useState("");
    const [gecici, setGecici] = useState(false);
    const [geciciYeri, setGeciciYeri] = useState("");
    const [kira, setKira] = useState(false);


    return (
        <div>

            <FlexboxGrid justify="center">
                <FlexboxGridItem colspan={12}>
                    <Form >
                        <br />
                        <label htmlFor="kira">Alacak kira alacağı mı?</label>
                        <Toggle name="kira" onChange={setKira}></Toggle>

                        <br />
                        <br />
                        <FlexboxGrid justify='space-between'>
                            <FlexboxGridItem>
                                <Form.Group >
                                    <Form.ControlLabel>Davalının Yerleşim Yeri</Form.ControlLabel> <br />
                                    <SelectPicker onChange={setDavali} data={sehirler.map(item => ({ label: item.name, value: item.name }))} style={{ width: 224 }} />

                                </Form.Group>
                            </FlexboxGridItem>
                            <FlexboxGridItem>
                                <Form.Group >
                                    <Form.ControlLabel>Davacının Yerleşim Yeri</Form.ControlLabel> <br />
                                    <SelectPicker onChange={setDavaci} data={sehirler.map(item => ({ label: item.name, value: item.name }))} style={{ width: 224 }} />
                                </Form.Group>
                            </FlexboxGridItem>
                        </FlexboxGrid>
                        <br />
                        <Form.Group >
                            <label>
                                Davalı;
                                memur, işçi, öğrenci, asker gibi, bir yerde geçici olarak oturuyor ve
                                orada bulunmaları uzunca bir süre devam edebilecek mi?
                            </label>
                            <Toggle onChange={setGecici} />

                        </Form.Group>
                        {gecici &&
                            <>
                                <Form.ControlLabel>Davalının Oturduğu Yer</Form.ControlLabel> <br />
                                <SelectPicker onChange={setGeciciYeri} data={sehirler.map(item => ({ label: item.name, value: item.name }))} style={{ width: 224 }} />
                            </>
                        }
                    </Form>
                </FlexboxGridItem>
            </FlexboxGrid>

            <Grid>
                <Row style={{ height: "20rem", marginTop: "3rem" }}>
                    <Col sm={24} xs={24} md={12} style={{ textAlign: "center", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
                        <h1 className='title' >Görevli Mahkeme</h1>
                        <br />
                        {kira ? <>
                            <p>Sulh Hukuk Mahkemesi</p>
                            <br />
                            <Form.HelpText > MADDE 4- (1) Sulh hukuk mahkemeleri, dava konusunun değer veya tutarına
                                bakılmaksızın;
                                a) Kiralanan taşınmazların, 9/6/1932 tarihli ve 2004 sayılı İcra ve İflas Kanununa göre
                                ilamsız icra yoluyla tahliyesine ilişkin hükümler ayrık olmak üzere, <b>kira ilişkisinden doğan
                                    alacak davaları</b> da dâhil olmak üzere tüm uyuşmazlıkları konu alan davalar ile bu davalara
                                karşı açılan davaları...
                                görürler.
                            </Form.HelpText>
                        </> :

                            <>
                                <p>Asliye Hukuk Mahkemesi</p>
                                <Form.HelpText>HMK MADDE 2- (1) Dava konusunun değer ve miktarına bakılmaksızın malvarlığı
                                    haklarına ilişkin davalarla, şahıs varlığına ilişkin davalarda görevli mahkeme, aksine bir
                                    düzenleme bulunmadıkça asliye hukuk mahkemesidir.</Form.HelpText>
                            </>}

                    </Col>

                    <Col sm={24} xs={24} md={12} style={{ textAlign: "center", boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.24)" }}>
                        <h1 className='title'  >Yetkili Mahkeme</h1>
                        <br />

                        <ol>
                            {(davali.length > 0) && <li>{davali}</li>}
                            {(geciciYeri.length > 0) && <li>{geciciYeri}</li>}

                        </ol>


                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default AlacakDavasi;

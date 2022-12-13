import React, { useState, useEffect } from 'react';
import { AutoComplete, Col, Container, Content, Divider, Grid, Row, Stack } from 'rsuite';



const data = [{
    id: 0,
    dava: "Adam Öldürme",
},
{
    id: 1,
    dava: "Göçmen Kaçakcılığı",
},
{
    id: 2,
    dava: "İnsan Ticareti",
},

]


const sucDB = {
    adamOldurme: {
        korunanHukukiDeger: "yaşama hakkı (hayat hakkı)",
        maddiUnsur: {
            fail: "Herkes",
            magdur: "Öldürülen insan",
            konu: "Yaşayan bir insan.",
            fiil: "Serbest hareketli bir suçtur. İcrai bir suçtur. Fiil, öldürme açısından elverişli olmalıdır.",
            netice: "Kasten öldürme suçu, neticeli bir suçtur. Bu netice ise yaşayan bir kimsenin ölmesidir. Kasten öldürme suçu açısından her zaman netice gerçekleşmez, bu halde teşebbüs açısından bir değerlendirme yapmamız gerekir",
            nedensellik: "Neticeli suçlarda fiil ve netice arasında nedensellik bağı bulunmalıdır.Ölüme neden olan nedenler birden fazla ise bu takdirde nedensellik bağına bağlı bir tartışma yapılması gerekebilir",
            isnadiyet: (<p>Bir hareketin suçun konusu bakımından izin verilen riski aşan bir tehlike doğurması ve bu tehlikenin tipe uygun netice olarak gerçekleşmesi halinde netice, objektif olarak faile isnad edilir.
                <br />
                Belirli durumlarda ise objektif isnadiyet ortadan kalkar. <br />
                Bu haller; tehlikenin hukuken önem taşımayacak ölçüde artırıldığı haller, risk azaltıcı haller, izin verilen risk halleri, tehlikenin netice olarak gerçekleşmediği haller, normun koruma alanına girmeyen haller ve hukuka uygun alternatif davranışlardır.
            </p>)
        },
        maneviUnsur: "Kasten öldürme suçunun manevi unsuru, isminden de anlaşılacağı üzere kasttır.",
        nitelikliUnsur: (<p>
            Madde 82 - “(1) Kasten öldürme suçunun; <br />
            a) Tasarlayarak, <br />
            b) Canavarca hisle veya eziyet çektirerek, <br />
            c) Yangın, su baskını, tahrip, batırma veya bombalama ya da nükleer, biyolojik veya kimyasalsilah kullanmak suretiyle, d) Üstsoy veya altsoydan birine ya da eş veya kardeşe karşı, e) Çocuğa ya da beden veya ruh bakımından kendisini savunamayacak durumda bulunan kişiye karşı, f) Gebe olduğu bilinen kadına karşı, g) Kişinin yerine getirdiği kamu görevi nedeniyle, h) Bir suçu gizlemek, delillerini ortadan kaldırmak veya işlenmesini kolaylaştırmak ya da yakalanmamak amacıyla, i) (Ek:29/6/2005 -5377/9 md.)Bir suçu işleyememekten dolayı duyduğu infialle,
            j) Kan gütme saikiyle, <br />
            k) Töre saikiyle,
            (2) İşlenmesi halinde, kişi ağırlaştırılmış müebbet hapis cezası ile cezalandırılır.

        </p>),
        ozelGorunus: {
            tesebbus: "Kasten öldürme suçu, neticeli bir suç olup ölümün gerçekleşmesiyle suç tamamlanır. Ancak öldürme kastıyla gerçekleştirilen fiilin sonucunda ölüm gerçekleşmez ise bu defa teşebbüs açısından bir değerlendirme yapılması gerekmektedir.",
            istirak: "Kasten öldürme suçunda genel iştirak hükümlerinin tamamı söz konusu olabilir. Faillik açısından hem müşterek faillik hem de dolaylı faillik ortaya çıkabilir. ",
            ictima: "Suç şayet kasten öldürme ise ne zincirleme suç ne de aynı neviden fikri içtima söz konusu olacaktır. Bu iki istisnanın dayanağı TCK m.43/3 hükmüdür. arklı neviden fikri içtima halinde cezası ağır olan suçtan cezalandırma yapılır."
        }

    },

    gocmenKacakciligi: {
        korunanHukukiDeger: "Karma niteliktedir. Göçmenlerin hakları + uluslarası toplum",
        maddiUnsur: {
            fail: "Herkes",
            magdur: "Göçmenler",
            konu: "Göçmen, mülteci, sınırmacı",
            fiil: <p>
                Seçimlik hareketli bir suçtur. <br />
                1-Bir yabancıyı yasal olmayan yollarla ülkeye sokmak. <br />
                2-Bir yabancının yasal olmayan şekilde ülkede kalmasına imkan sağlamak. <br />
                3-Türk vatandaşı yada yabancının yasal olmayan yollarla ülkeden çıkmasına imkan sağlamak.
            </p>,
            netice: "Kasten öldürme suçu, neticeli bir suçtur. Bu netice ise yaşayan bir kimsenin ölmesidir. Kasten öldürme suçu açısından her zaman netice gerçekleşmez, bu halde teşebbüs açısından bir değerlendirme yapmamız gerekir",
            nedensellik: "Neticeli suçlarda fiil ve netice arasında nedensellik bağı bulunmalıdır.Ölüme neden olan nedenler birden fazla ise bu takdirde nedensellik bağına bağlı bir tartışma yapılması gerekebilir",
            isnadiyet: <p> Bir hareketin suçun konusu bakımından izin verilen riski aşan bir tehlike doğurması ve bu tehlikenin tipe uygun netice olarak gerçekleşmesi halinde netice, objektif olarak faile isnad edilir. <br />
                Belirli durumlarda ise objektif isnadiyet ortadan kalkar. <br />
                Bu haller; tehlikenin hukuken önem taşımayacak ölçüde artırıldığı haller, <br />
                risk azaltıcı haller,<br />
                izin verilen risk halleri, <br />
                tehlikenin netice olarak gerçekleşmediği haller, <br />
                normun koruma alanına girmeyen haller ve hukuka uygun alternatif davranışlardır.</p>

        },
        maneviUnsur: "Kasten öldürme suçunun manevi unsuru, isminden de anlaşılacağı üzere kasttır.",
        nitelikliUnsur: (
            <p>1-Suçun, mağdurların; hayatı bakımından bir tehlike oluşturması hâlinde, verilecek ceza yarısından üçte ikisine kadar artırılır. <br />
                2-Suçun, mağdurların; onur kırıcı bir muameleye maruz bırakılarak işlenmesi, hâlinde, verilecek ceza yarısından üçte ikisine kadar artırılır. <br />
                3-Suçun bir örgütün faaliyeti çerçevesinde işlenmesi
            </p>),
        ozelGorunus: {
            tesebbus: "Göçmen kaçakçılığı suçu teşebbüs aşamasında kalmış olsa bile tamamlanmış gibi cezaya hükmedilmektedir.",
            istirak: "Bu suça iştirakin her hali mümkündür.Bu suç bakımından suçun konusu olan göçmenlerin göçmen kaçakçılığı suçuna azmettirme veya yardım etme sebebiyle sorumluluğu bulunmamaktadır.",
            ictima: "Suçun faili göçmen kaçakçılığı suçunu değişik zamanlarda birden fazla kez işlediyse bu durumda zincirleme suç hükümleri uygulama alanı bulmaktadır. Ancak tek bir hareketle birden fazla göçmen ülke dışına çıkarılıyor veya ülke içine alınıyorsa bu durumda göçmenler suçun mağdurunu değil suçun konusunu oluşturduğundan zincirleme suç hükümleri uygulama alanı bulmayacaktır."
        }
    },


    insanTicareti: {
        korunanHukukiDeger: <p>
            Karma niteliktedir; <br />
            kamu düzeni <br />
            insan onuru <br />
            genel ahlak <br />
        </p>,
        maddiUnsur: {
            fail: "Herkes olabilir.",
            magdur: "Herkes olabilir.",
            konu: "İnsandır.",
            fiil:
                <div >
                    <p>Bu suç seçimlik hareketli bir suçtur. <br />
                        Sadece bu haraketleri gerçekleştirmek de suçun oluşması için yeterli değildir. Araç fiillerin gerçekleşmesi gerekir. <br />
                        Araç fiiller; </p>
                    <ul>
                        <li>  Mağdurun iradesini etkilemek için tehdit, baskı, cebir veya şiddet uygulamak,</li>
                        <li>Nüfuzu kötüye kullanmak suretiyle rızasını almak,</li>
                        <li>Kandırmak (hileli davranışlar sergilemek) suretiyle mağdurun rızasını almak,</li>
                        <li>Kişiler üzerindeki denetim olanaklarından veya çaresizliklerinden yararlanarak rızalarını elde etmek.</li>

                    </ul>

                    <p>Zorla çalıştırmak, hizmet ettirmek, fuhuş yaptırmak veya esarete tâbi kılmak ya da vücut organlarının verilmesini sağlamak maksadıyla işlenen şu seçimlik hareketler suça vücut verir:</p>
                    <ul>
                        <li>Bir kimseyi ülkeye sokma veya ülke dışına çıkarma,</li>
                        <li>Bir kimseyi yukarıda belirtilen amaçlar için tedarik etme veya kaçırma,</li>
                        <li>Bir kimseyi yukarıda belirtilen amaçlar için bir yerden başka bir yere götürme, sevk etme veya barındırma.</li>
                    </ul>

                </div>,
            netice: "",
            nedensellik: "",
            isnadiyet: ""

        },
        maneviUnsur: <p>İnsan ticareti suçu kasten işlenebilen bir suç tipidir. Fakat kanun koyucu bazı suçlarda özel kastın varlığını aramıştır. Bu suç bakımından da özel kastın varlığı aranır. Kanun suçun oluşması bakımından zorla çalıştırmak, hizmet ettirmek, fuhuş yaptırmak veya esarete tabi kılmak ya da vücut organlarının verilmesini sağlamak maksadını aramıştır. Şayet fail sayılan maksatlardan birini gütmüyorsa insan ticareti suçundan dolayı cezalandırılamayacaktır.</p>,
        nitelikliUnsur: ""
        ,
        ozelGorunus: {
            tesebbus: <div ><p>İnsan ticareti suçu failin TCK’nın 80. Maddesinde belirtilen araçların kullanılması suretiyle mağdurun ülkeye sokulması, ülke dışına çıkarılması, tedarik edilmesi, kaçırılması, bir yerden bir başka yere götürülmesi, sevk edilmesi ya da barındırılması hareketlerinden birinin yapılmasıyla tamamlanır.</p><p >Suçun teşebbüs halinde kalması için yukarıda belirttiğimiz araç fiillere başvurulmasına rağmen asıl fiillerin gerçekleşmemiş olması gerekir. Bu gibi durumlarda faile verilecek cezada indirim yapılır. İndirim oranı TCK’nın 35. Maddesine göre belirlenir.</p></div>,
            istirak: "",
            ictima: ""
        }
    }
}


const CezaOzel = () => {


    const [dava, setDava] = useState("");
    const [deneme, setdeneme] = useState({
        korunanHukukiDeger: "",
        maddiUnsur: {
            fail: "",
            magdur: "",
            konu: "",
            fiil: "",
            netice: "",
            nedensellik: "",
            isnadiyet: ""

        },
        maneviUnsur: "",
        nitelikliUnsur: ""
        ,
        ozelGorunus: {
            tesebbus: "",
            istirak: "",
            ictima: ""
        }
    });


    useEffect(() => {
        switch (dava) {
            case "Adam Öldürme":
                setdeneme(sucDB.adamOldurme)
                break;
            case "Göçmen Kaçakcılığı":
                setdeneme(sucDB.gocmenKacakciligi)
                break;
            case "İnsan Ticareti":
                setdeneme(sucDB.insanTicareti)
                break;
            default:
                break;
        }
    });


    useEffect(() => {

        console.log(dava)

    }, [dava]);

    return (



        <div className='cezaOzel'>
            <Container>
                <Content>
                    <Stack justifyContent='center' direction="column" >

                        <h1>Suç Genel Teorisi</h1>
                        <br />
                        <h5>Hangi suçu</h5>
                        <AutoComplete data={data.map(a => a.dava)} onSelect={setDava} style={{ width: 224 }} />
                        <Divider />

                    </Stack>

                    <Grid className="tablo" >

                        <h1>{dava} Suçu</h1>

                        <Row style={{ textAlign: "center" }}>
                            <h3 >Korunan Hukuki Değer</h3>
                            <div >{deneme.korunanHukukiDeger}</div>
                        </Row>
                        <Row style={{ borderTop: "5px solid", }}>
                            <h3 >Suçun Temel Unsurları</h3>
                            <Divider />
                            <Row xs={24} sm={24} md={8} style={{}}>
                                <h5>Maddi Unsurlar</h5>
                                <Col xs={24} sm={24} md={6} >
                                    <span style={{ fontWeight: "600" }}>Fail:</span> <div>{deneme.maddiUnsur.fail} </div>
                                </Col>
                                <Col xs={24} sm={24} md={6} >
                                    <span style={{ fontWeight: "600" }}>Mağdur:</span> <div> {deneme.maddiUnsur.magdur}</div>
                                </Col>
                                <Col xs={24} sm={24} md={6} >
                                    <span style={{ fontWeight: "600" }}>Konu:</span> <div>{deneme.maddiUnsur.konu}</div>
                                </Col>
                                <Col xs={24} sm={24} md={6} >
                                    <span style={{ fontWeight: "600" }}>Fiil:</span> <div>{deneme.maddiUnsur.fiil}</div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: "20px" }}>
                                <Col xs={24} sm={24} md={8}>
                                    <span style={{ fontWeight: "600" }}>Netice:</span> <div>{deneme.maddiUnsur.netice}</div>
                                </Col>
                                <Col xs={24} sm={24} md={8}>
                                    <span style={{ fontWeight: "600" }}>Nedensellik:</span> <div>{deneme.maddiUnsur.nedensellik}</div>
                                </Col>
                                <Col xs={24} sm={24} md={8}>
                                    <span style={{ fontWeight: "600" }}>İsnadiyet:</span> <div>{deneme.maddiUnsur.isnadiyet}</div>
                                </Col>
                            </Row >
                            <Row style={{ marginTop: "10px", borderTop: "5px solid" }}>
                                <Col xs={24} sm={24} md={12}>
                                    <h5>Manevi Unsurlar</h5>
                                    <div>{deneme.maneviUnsur}</div>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <h5>Hukuka aykırılık unsuru</h5>
                                </Col>

                            </Row>
                        </Row>
                        <Row style={{ borderTop: "5px solid", }}>
                            <Col sm="16"><h3>Suçun Nitelikli Unsurları</h3>
                                <div>{deneme.nitelikliUnsur}</div>
                            </Col>
                            <Col sm="8">
                                <h3>Kusurluluk</h3>
                            </Col>
                        </Row>

                        <Row style={{ borderTop: "5px solid", }}>
                            <h3>Suçun Özel Görünüş Biçimleri</h3>
                            <Divider />
                            <Col sm={8}> <h5>Teşebbüs</h5> <br /> {deneme.ozelGorunus.tesebbus}</Col>
                            <Col sm={8}><h5>İştirak</h5> <br />{deneme.ozelGorunus.istirak}</Col>
                            <Col sm={8}><h5>İçtima</h5> <br />{deneme.ozelGorunus.ictima}</Col>
                        </Row>

                    </Grid>
                </Content>
            </Container>
        </div>
    );
}

export default CezaOzel;

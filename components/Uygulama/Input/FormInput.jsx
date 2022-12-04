import { useState } from "react";
import { Col, Form, IconButton, Input, Row, Checkbox, RadioGroup, Radio, DatePicker, Toggle } from "rsuite";
import { Edit, UserInfo } from "@rsuite/icons";
import MiscInputs from "../sub-components/MiscInputs";
import { otherInputs } from "../../../assets/MiscInputList";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMakam,
  changeAltMakam,
  changeName,
  changeAdress,
  changeAltust,
  changeTc,
  changeCountry,
  changePhone,
  changeText,
  changeDate

} from "../../../store/dilekceSlice";
import { useMediaQuery } from "react-responsive";
import ListViewPanel from "../sub-components/ListViewPanel";
import { data } from "../../../assets/data";
import SidebarComponent from "../Sidebar/SidebarComponent";
function FormInput(props) {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const state = useSelector(state => state.dilekce)

  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

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

  const handleMakamChange = (e) => {
    /*let wordsMakam = e.split(" ");
    let makamName = "";
    if (e.length)
      wordsMakam.map(word => {
        makamName += word[0].toUpperCase() + word.slice(1).toLowerCase() + " "
      }
      );
    console.log(makamName)
    console.log*/

    dispatch(changeMakam(e))
  };

  return (
    <div style={{ padding: isBigScreen ? "2rem" : "1rem" }}>


      <Form>


        {/* Başlık  */}
        <Form.Group>
          <span style={styles.title}>Başlık</span>
          <br />

          <Toggle onChange={handleChange} size="lg" checkedChildren="TC ibaresi" unCheckedChildren="TC ibaresi" />

          <br />
          <Row>
            <Form.ControlLabel>Gönderilecek Makam</Form.ControlLabel>
            <Input value={state.makam} onChange={handleMakamChange} />

            <Form.ControlLabel>Alt Makam</Form.ControlLabel>
            <Input value={state.altMakam} onChange={(e) => dispatch(changeAltMakam(e))} />
          </Row>
        </Form.Group>

        {/* TARİH  */}
        <Form.Group>
          <span style={styles.title}>Tarih</span>
          <br />
          <DatePicker format="dd/MM/yyyy" onChange={(date) => {
            const dateString = new Date(date).toLocaleDateString("tr-TR")
            dispatch(changeDate(dateString))
          }} />
        </Form.Group>

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

export default FormInput;

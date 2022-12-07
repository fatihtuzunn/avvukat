import { useState, useEffect } from "react";
import { Col, Form, Input, Row, SelectPicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { changeTemp } from "../../../../store/davaSlice";
import "react-datalist-input/dist/styles.css";

function Links(props) {
  const editData = useSelector((state) => state["dava"].editData);

  const dispatch = useDispatch();
  useEffect(() => {
    let data = {
      site: site,
      link: link,
    };
    dispatch(changeTemp({ data: data, disabled: !check() }));
  });
  const [site, setSite] = useState(editData.site ? editData.site : "");
  const [link, setLink] = useState(editData.link ? editData.link : "");

  const check = () => {
    return Boolean(site.length && link.length);
  };
  return (
    <Form.Group>
      <Row style={{ width: "99%", height: "6rem" }}>
        <Col xs={24} sm={24}>
          <Form.ControlLabel>Site</Form.ControlLabel>
          <Form.Control
            placeholder="Site"
            value={site}
            style={{ marginTop: "0.5rem" }}
            onChange={(item) => setSite(item)}

          />
        </Col>
        <Col xs={24} sm={24}>
          <Form.ControlLabel>Link</Form.ControlLabel>
          <textarea
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="txt rs-input"
            rows={10}
          ></textarea>

        </Col>
      </Row>
      <br />
      <Form.HelpText>All fields are required.</Form.HelpText>
    </Form.Group>
  );
}

export default Links;

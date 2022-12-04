import { Panel } from "rsuite";

function ListViewPanel(props) {

  return (
    <Panel
      onClick={props.onClick}
      header={props.title} bordered style={{ width: "100%", cursor: "pointer" }} >
      {props.content}
    </Panel>
  );
}

export default ListViewPanel;

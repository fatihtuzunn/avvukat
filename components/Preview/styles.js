const styles = {
  curtain: {
    position: "absolute",
    background: "white",
    width: "100%",
    height: "100%",
    zIndex: "9999",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    transitionDuration: "500ms",
  },
  curtainTitle: {
    fontSize: "large",
    fontWeight: "600",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  outerDiv: {
    background: "#EEF5FF",
    height: "calc(100vh - 3rem)",
    width: "100%",
    display: "flow-root",
    borderRadius: "5px",
  },


  page: {
    fontFamily: "'Times New Roman', Times, serif",
    color: "black",
    fontSize: "12pt",
    background: "#FFFFFF",
    width: "21cm",
    height: "29,7cm",
    display: "flex",
    transformOrigin: "top left",
    overflow: "hidden",
  },



  hide: {
    display: "none",
  },
  title: {

    textAlign: "center",
    fontWeight: "600",
    color: "#000",
  },

  smallText: {


    paddingTop: "0.25rem",
  },



  date: {
    position: "absolute",
    top: "10%",
    right: "10%",
  },

  makam: {

    position: "absolute",
    top: "15%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    maxWidth: "90%",
    wordWrap: "break-word",

  },

  name: {

    position: "absolute",
    bottom: "35%",
    right: "20%",
  },




  contacts: {

    position: "absolute",
    top: "60%",
    left: "15%",
    display: "flex",
    flexDirection: "column",
    lineHeight: "1.5",
    maxWidth: "12.5rem",
    wordWrap: "break-word",
    fontWeight: "400"
  },

  profile: {

    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    width: "75%",
    overflowWrap: "break-word",
    textAlign: "justify",
    textJustify: "inter-word",

  },


  ekler: {
    position: "absolute",
    top: "85%",
    left: "15%",
  },

  employment: {
    marginTop: "1rem",
    display: "block",
    position: "relative",
    height: "fit-content",
  },
  listFix: {
    marginLeft: "0.3rem",
  },
  pushRight: {
    marginLeft: "1rem",
  },

  urlHeading: {
    fontSize: "12.4px",
    fontWeight: "600",
  },
  urlHolder: {
    paddingTop: "1.125rem",
  },
  urlTitle: {
    fontWeight: "500",
    fontSize: "10px",
    color: "#3B67F6",
  },

};

export default styles;

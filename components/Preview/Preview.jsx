import styles from "./styles";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, IconButton } from "rsuite";
import { useReactToPrint } from "react-to-print";
import { ArrowLeft, ArrowRight, FileDownload, Gear } from "@rsuite/icons";

function Preview(props) {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

  const compRef = useRef();
  /* const [fontSize, setFontSize] = useState("5rem") */
  const [scale, setscale] = useState(window.screen.width / (4 * 650));
  const [isPrinting, setIsPrinting] = useState(false);

  const state = useSelector((state) => state["dilekce"]);

  useEffect(() => {

    /*
        var wordsMakam = state.makam.split(" ");
        var size = 2.5;
        if (state.makam.length <= 40 && state.makam.length > 20) {
          size = 2;
        } else {
          //console.log(false);
          wordsMakam.forEach((word) => {
            if (word.length * 0.75 > size) size = word.length * 0.85;
          });
          if (size > 10) { size = 4; }
        }
    
        if (state.makam.length < 80 && state.makam.length > 40) {
          size = 1.8;
        }
        setFontSize(`${size}rem`);*/


  }, [
    window.screen.width,
    state.makam,
    state.altMakam,
    state.name,
    state.adress,
    state.tc,
    state.altust,
    state.text,
    state.date,
  ]);




  const setPrint = () => {
    console.log(state);
    setIsPrinting(true);
    setscale(1);
    setTimeout(() => {
      handlePrint();
    }, 100);

    setTimeout(() => {
      setIsPrinting(false);
      setscale(window.screen.width / (4 * 800));
    }, 1000);
  };
  const handlePrint = useReactToPrint({
    content: () => compRef.current,
    documentTitle: "Dilekce",

    copyStyles: true,


  });
  return (
    <>



      <IconButton
        icon={<FileDownload />}
        circle
        size="lg"
        className="fab"
        appearance="primary"
        onClick={() => {
          setPrint();
        }}
        style={{
          position: "absolute",
          bottom: isBigScreen ? "1rem" : "1.75rem",
          right: isBigScreen ? "1rem" : "0.75rem",
          zIndex: "999999",
          fontSize: isBigScreen ? "unset" : "25px",
        }}
      ></IconButton>



      <div style={isPrinting ? styles.curtain : styles.hide}>
        <div style={styles.curtainTitle}>
          <Gear pulse style={{ fontSize: "1.5em", margin: "0.5rem" }} />{" "}
          Preparing your document...
        </div>
        <br />
        <div
          style={{
            fontSize: "18px",
          }}
        >
          Set the size to ISO A4
        </div>
      </div>


      <div
        id="scroll"
        style={{
          ...styles.outerDiv,
          height: !isPrinting
            ? isBigScreen
              ? "calc(100vh - 3rem)"
              : "70vh"
            : "calc(100vh - 3rem)",
          overflowY: isPrinting ? "visible" : "scroll",
        }}
      >


        {/* KAĞIT
        
            minHeight: isPrinting ? `${1050 * pages}px` : `${1088 * pages}px`,
          
        */}
        <div
          ref={compRef}
          style={{
            ...styles.page,
            transform: !isPrinting
              ? isBigScreen
                ? `scale(${scale})`
                : "scale(0.3)"
              : `scale(1)`,
            margin: !isPrinting ? isBigScreen
              ? `calc(50vh - ${(1088 / 1.85) * scale}px) calc(20vw - ${(800 / 2) * scale}px)`
              : "calc(33vh - 160px) calc(51vw - 165px)"
              : "0px",
          }}
        >

          <div

            id="page"
          >

            <div style={styles.date}> <span style={styles.title}>{state.date}</span></div>

            <div style={state.makam.length ? styles.makam : styles.hide}>

              <p style={{ ...styles.title }}>{state.tc && "T.C"}</p>
              <p style={{ ...styles.title, margin: "0 !important" }}>{state.makam} <br /> {state.altMakam}</p>
            </div>



            <div style={{ display: "flex" }}>


              <div style={state.name.length ? styles.name : styles.hide}>İsim: <br />{state.name}</div>

              <div style={styles.contacts}>
                <span style={styles.title}>İletişim:</span> <br /> <br />
                <span>{state.adress}</span>
                <br />
                <span>{state.phone}</span>
                <span style={state.country.length ? styles.smallText : styles.hide}><b>TC Kimlik No:</b> <br /> {state.country}</span>
              </div>
            </div>



            <div style={state.text.length ? styles.profile : styles.hide}>
              <p style={styles.smallText}>{state.text} </p>
              <p style={styles.smallText}>{state.altust == "alt" ? "Gereğini rica ederim." : "Gereğini arz ederim."} </p>
            </div>







            <div style={{ minHeight: "1050px" }}>

              <div style={state.urls.length ? styles.urlHolder : styles.hide}>
                <p>
                  <span style={styles.urlHeading}>URLs</span>
                </p>
                {state.urls.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      paddingTop: "5px",
                      lineHeight: "1",
                      maxWidth: "13rem",
                      wordWrap: "break-word",
                    }}
                  >
                    <span style={styles.urlTitle}>{item.site}: </span>
                    <span style={styles.smallerText}>
                      {item.link}
                    </span>
                    <br />
                  </div>
                ))}
              </div>
              <br />
              <div style={state.ekler.length ? styles.ekler : styles.hide}>
                <span style={styles.title}>Ekler</span>
                <div style={{ paddingTop: "0.65rem" }}>
                  {state.ekler
                    .slice(0, state.ekler.length - 1)
                    .map((item, i) => (
                      <>
                        <span style={styles.smallText} key={i}>{item}</span>
                        <br />
                      </>
                    ))}
                  <span style={styles.smallText}>
                    {state.ekler[state.ekler.length - 1]}
                  </span>
                </div>
              </div>







            </div>




          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;

import styles from "./Preview.module.scss";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, FlexboxGrid, IconButton } from "rsuite";
import { useReactToPrint } from "react-to-print";
import { ArrowLeft, ArrowRight, FileDownload, Gear } from "@rsuite/icons";

function DavaPreview(props) {
    const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });

    const compRef = useRef();
    /* const [fontSize, setFontSize] = useState("5rem") */
    const [scale, setscale] = useState(window.screen.width / (4 * 650));
    const [isPrinting, setIsPrinting] = useState(false);

    const state = useSelector((state) => state["dava"]);






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



            <div className={isPrinting ? styles.curtain : styles.hide}>
                <div className={styles.curtainTitle}>
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
                className={styles.outerDiv}
                style={{

                    height: !isPrinting
                        ? isBigScreen
                            ? "100vh"
                            : "70vh"
                        : "100vh",
                    overflowY: isPrinting ? "visible" : "scroll",
                }}
            >


                {/* KAĞIT
        
            minHeight: isPrinting ? `${1050 * pages}px` : `${1088 * pages}px`,
          
        */}
                <div
                    ref={compRef}
                    className={styles.page}
                    style={{

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

                    <div id="page">

                        <div className={styles.makam} style={{ top: "3.5cm" }}>
                            <p className={styles.title}>{state.mahkeme} &nbsp; Hakimliğine</p>


                        </div>

                        <div className={styles.date} style={{ margin: "50px 50px 0 0" }}> <span className={styles.title}>{state.date}</span></div>


                        <div className={styles.davaDilekcesi}>

                            <div className={styles.kunye}>
                                {state.davali.isim} {state.davali.tc}{state.davali.adres}
                                <FlexboxGrid className="davaci">
                                    <p className={styles.title} >Davacı: &nbsp;</p>
                                    <div>{state.davaci.isim} (TC kimlik no:{state.davaci.tc}) <br /> {state.davaci.adres}</div>
                                </FlexboxGrid>

                                <FlexboxGrid className="vekil">
                                    <p className={styles.title} >Vekili: &nbsp;</p>
                                    <div>{state.vekil.isim} (TC kimlik no:{state.vekil.tc}) <br /> {state.vekil.adres}</div>
                                </FlexboxGrid>

                                <FlexboxGrid className="davali">
                                    <p className={styles.title} >Davalı: &nbsp;</p>
                                    <div>{state.davali.isim} (TC kimlik no:{state.davali.tc}) <br /> {state.davali.adres}</div>
                                </FlexboxGrid>

                                <FlexboxGrid className="konu">
                                    <p className={styles.title} >Konusu: &nbsp;</p>
                                    <div>{state.konu} </div>
                                </FlexboxGrid>


                            </div>
                            <div className={state.urls.length ? styles.aciklamalar : styles.hide}>
                                <p>
                                    <span className={styles.title}>Açıklamalar</span>
                                </p>
                                {state.urls.map((item, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            paddingTop: "5px",
                                            lineHeight: "1",

                                            wordWrap: "break-word",
                                        }}
                                    >
                                        <span className={styles.title}>{i + 1}. </span>
                                        <span className={styles.smallerText}>
                                            {item.link}
                                        </span>
                                        <br />
                                    </div>
                                ))}
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}

export default DavaPreview;

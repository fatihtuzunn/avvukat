import React from 'react';
import styles from "./Logo.module.scss"

const Logo = (props) => {

    const size = {
        width: props.width,
        height: props.height,
        textAlign: props.textAlign,
        margin: props.margin,
        fontSize: props.fontSize
    }
    return (

        <>
            <div style={{ margin: size.margin }} className={styles.logo}>
                <h1 style={{ fontSize: size.fontSize, textAlign: size.textAlign }}>Avvukat</h1>
            </div>
        </>
    );
}

export default Logo;

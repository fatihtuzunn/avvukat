import React from 'react';
import styles from "./Logo.module.scss"

const Logo = (props) => {

    const size = {
        width: props.width,
        height: props.height,
        textAlign: props.textAlign,
        margin: props.margin
    }
    return (

        <>
            <div style={{ margin: size.margin }} className={styles.logo}>
                <h1 style={{ textAlign: size.textAlign }}>Avvukat</h1>
            </div>
        </>
    );
}

export default Logo;

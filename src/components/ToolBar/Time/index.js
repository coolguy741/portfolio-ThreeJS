import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import styles from "../../../styles/toolbar.module.scss"
import axios from "axios"

const Time = props => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const fullTime = `${hours}:${minutes}`

    return (
        <div
            className={`${styles.time} ${
                props.isDarkMode ? styles.timedark : ""
            }`}
        >
            <span className={styles.span}>{fullTime}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarkMode: state.darkMode,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDarkModeToggle: () => dispatch({ type: "TOGGLE" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Time)

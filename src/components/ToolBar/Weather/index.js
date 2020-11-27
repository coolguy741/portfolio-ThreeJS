import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import axios from "axios"
import styles from "../../../styles/toolbar.module.scss"

const Time = props => {
    const [weather, setWeather] = useState({
        temp: null,
        desc: null,
    })

    const cityName = "Canmore"

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.GATSBY_WEATHER_API}`
            )
            .then(response => {
                setWeather({
                    temp: Math.round(response.data.main.temp - 273.15),
                    desc: response.data.weather[0].main,
                })
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className={styles.weather}>
            <div className={styles.iconContainer}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 158.16 144.48"
                    width="40"
                >
                    <path
                        className={styles.themePickerPath}
                        d="M79,144.45q-33.75,0-67.49,0c-4.13,0-7.67-1.15-9.8-4.79a11.88,11.88,0,0,1-1.63-5.63Q-.06,72.19,0,10.32A9.91,9.91,0,0,1,10.08.08c10.33-.15,20.67,0,31-.06,3.17,0,5.31,1.8,7,4.14s3.53,5.05,5.18,7.65a4.1,4.1,0,0,0,3.94,2q44.62-.07,89.24,0c7.64,0,11.67,4,11.67,11.73q0,53.63,0,107.24c0,7.7-4,11.72-11.67,11.72Q112.73,144.47,79,144.45ZM79.18,37.8H12.43c-4.84,0-5.58.75-5.58,5.69q0,44.25,0,88.49c0,4.89.77,5.66,5.63,5.66q66.61,0,133.23,0c4.76,0,5.6-.81,5.6-5.46v-89c0-4.57-.84-5.39-5.39-5.39Zm72.13-6.69V25.9c0-4.49-.75-5.22-5.25-5.23-29.66,0-59.32-.05-89,.07A10.35,10.35,0,0,1,47.8,16c-1.69-2.47-3.2-5.08-5.06-7.42A4.92,4.92,0,0,0,39.45,6.9c-9.33-.13-18.66-.09-28-.06C8,6.84,6.87,8,6.85,11.52c0,5.83,0,11.66,0,17.49,0,.73.11,1.45.15,2.1Z"
                    />
                    <path
                        className={styles.themePickerPath}
                        d="M96.38,95.21l13.08,7.55A33.73,33.73,0,0,0,81.68,54.63v15.1a18.69,18.69,0,0,1,14.7,25.48Z"
                    />
                    <path
                        className={styles.themePickerPath}
                        d="M51.31,107.27a33.67,33.67,0,0,0,55.54,0L93.77,99.71a18.62,18.62,0,0,1-29.38,0Z"
                    />
                    <path
                        className={styles.themePickerPath}
                        d="M76.48,54.63A33.67,33.67,0,0,0,45.42,88.21a33.32,33.32,0,0,0,3.28,14.55l13.08-7.55a18.67,18.67,0,0,1,14.7-25.48Z"
                    />
                </svg>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        theme: state.theme,
    }
}

export default connect(mapStateToProps)(Time)

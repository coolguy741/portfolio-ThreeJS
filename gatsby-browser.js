import React from "react"

import { createStore } from "redux"
import reducer from "./src/store/reducer"
import { Provider } from "react-redux"
import "./src/components/layout.scss"

const store = createStore(reducer)

console.log(document.getElementsByClassName("loader-logo")[0].style)

export const onClientEntry = () => {
    document.getElementById("loader-wrapper").style.display = "block"
}
export const onPreRouteUpdate = () => {
    document.getElementById("loader-wrapper").style.display = "block"
}
export const onRouteUpdateDelayed = () => {
    document.getElementById("loader-wrapper").style.display = "block"
}
export const onRouteUpdate = () => {
    document.getElementById("loader-wrapper").style.transition =
        "background-color 1.5s"

    document.getElementById("loader-logo").style.transition =
        "fill-opacity 1.5s"

    document.getElementsByClassName("loader-logo")[0].style.transition =
        "fill-opacity 1.5s"

    document.getElementsByClassName("loader-logo")[1].style.transition =
        "fill-opacity 1.5s"

    setTimeout(() => {
        document.getElementsByClassName("loader-logo")[0].style.fillOpacity = 0
        document.getElementsByClassName("loader-logo")[1].style.fillOpacity = 0
        document.getElementById("loader-logo").style.fillOpacity = 0
    }, 1000)

    setTimeout(() => {
        document.getElementById("loader-wrapper").style.backgroundColor =
            "transparent"
    }, 2000)

    setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none"
    }, 3000)
}

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>{element}</Provider>
)

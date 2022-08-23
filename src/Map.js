import React from "react"
import { useEffect } from 'react'
export default function Map() {
    useEffect(() => {
        // Mapquest/API Key
        window.L.mapquest.key = 'SbABP9Vr89Ox8a38s29QPLUQm51xa784';
        // Map Declaration
        let map = window.L.mapquest.map('map', {
            center: [37.7749, -122.4194],
            layers: window.L.mapquest.tileLayer('map'),
            zoom: 12
        });
        // Map Navigation Control (zoom in/out)
        map.addControl(window.L.mapquest.geocodingControl({
            position: 'topleft'
        }))
    }, [])
    return (
        <div id="map" styles="width: 100%; height: 530px;"></div>
    )
}
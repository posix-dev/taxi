import React, {useLayoutEffect, useRef, useState} from 'react';
import mapboxgl from "mapbox-gl";
import Header from "../header/Header";
import settings from "../constants/settings";
import {useStyles} from "./useStyles";

interface MapProps {
    // navigate: (page: string) => void
}

interface MapState {

}

const Map: React.FC<MapProps> = () => {
    const [mapState, setMapState] = useState(settings.map);
    const classes = useStyles();
    const mapContainer: React.RefObject<HTMLDivElement> = useRef(null);

    useLayoutEffect(() => {
        if (!mapContainer.current) {
            return;
        }
        const map = new mapboxgl.Map({
            center: [settings.map.defCenter[0], settings.map.defCenter[1]],
            zoom: settings.map.defZoom,
            container: mapContainer.current as HTMLElement,
            style: settings.map.style,
            accessToken: settings.map.API_KEY,
        });
    });
    return (
        <div>
            <Header/>
            <div className={classes.mapWrapper} ref={mapContainer}/>
        </div>
    );
    // }
};

export default Map;
import React, {PureComponent} from 'react';
import mapboxgl from "mapbox-gl";
import Header from "../Header/Header";
import settings from "../../constants/settings";
import {useStyles} from "./useStyles";
import {connect} from "react-redux";
import {isProfileFilled} from "../../modules/Profile";
import {FillInPaymentInfoWindow} from "../FillInPaymentInfoWindow";
import Order from "../Order";
import {getRoute} from "../../modules/Order";
import {withStyles} from "@material-ui/core";

class Map extends PureComponent<any> {
    map: any = null;
    mapContainer: any = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = settings.map.API_KEY;
        this.map = new mapboxgl.Map({
            center: [settings.map.defCenter[0], settings.map.defCenter[1]],
            zoom: settings.map.defZoom,
            container: this.mapContainer.current as HTMLElement,
            style: settings.map.style,
            accessToken: settings.map.API_KEY,
        });
    }

    componentDidUpdate() {
        const {route} = this.props;

        if (route.length) {
            this.updateMap(route);
        } else {
            this.clearMap();
        }
    }

    componentWillUnmount() {
        this.map.remove();
    }

    clearMap = () => {
        const mapLayer = this.map.getLayer("route");

        if (mapLayer) {
            this.map.removeLayer("route");
            this.map.removeSource("route");
        }
    };

    updateMap = (route: any) => {
        this.clearMap();

        this.map.addLayer({
            id: "route",
            type: "line",
            source: {
                type: "geojson",
                data: {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: route
                    }
                }
            },
            layout: {
                "line-join": "round",
                "line-cap": "round"
            },
            paint: {
                "line-color": settings.map.lineColor,
                "line-width": settings.map.lineWidth
            }
        });
        this.map.flyTo({center: route[0], zoom: settings.map.defZoom});
    };

    render(): React.ReactElement {
        const {classes, isProfileFilled} = this.props;

        return (
            <div>
                <Header/>
                {isProfileFilled ? <Order/> : <FillInPaymentInfoWindow/>}
                <div className={classes.mapWrapper} ref={this.mapContainer}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        isProfileFilled: isProfileFilled(state),
        route: getRoute(state)
    })
)(withStyles(useStyles, {withTheme: true})(Map));
import React from 'react';
import Header from "../header/Header";

interface MapProps {
    navigate: (page: string) => void
}

interface MapState {

}

class Map extends React.Component<MapProps, MapState> {

    render(): React.ReactElement {
        return (
            <div>
                <Header navigate={this.props.navigate}/>
                Map
            </div>
        );
    }
}

export default Map;
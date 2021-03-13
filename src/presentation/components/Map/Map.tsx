import React from 'react';
import {Helmet} from 'react-helmet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { Articles } from '../../../core/article';

interface Props {
 articles: Articles;
}

const PureMap = ({
    articles,
}: Props) => {
    // this is the default position sujjested by react leaflet, in London, but we could change this to whatever seemed resonable
    const defaultPosition = [51.505, -0.09];
    const position = articles.length > 1 ? [articles[0].location?.latitude, articles[0].location?.longitude] : defaultPosition;

    return (
        <>
            {/* setup for leaflet */}
            <Helmet>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
                integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
                crossOrigin=""/>
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossOrigin=""></script>
            </Helmet>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{height: '250px'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {articles.map((article) => (
                    <Marker position={[article.location?.latitude, article.location?.longitude]}  key={article.id}>
                        <Popup>
                            {article.title}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}

PureMap.displayName = 'Map';

export default PureMap;
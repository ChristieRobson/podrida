import React from 'react';
import {Helmet} from 'react-helmet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from  'react-router-dom';
import type { Articles } from '../../../core/article';

interface Props {
 articles: Articles;
}

const PureMap = ({
    articles,
}: Props) => {
    // this is the default position sujjested by react leaflet, in London, but we could change this to whatever seemed resonable
    const defaultPosition = [51.505, -0.09];
    const lat = articles.length > 1 ? articles[0].location?.latitude : defaultPosition[0];
    const lon = articles.length > 1 ? articles[0].location?.longitude : defaultPosition[1];
    return (
        <>
            {/* setup for leaflet */}
            <Helmet>
                <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                crossOrigin=""></script>
            </Helmet>
            <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={false} style={{height: '250px'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {articles.map((article) => (
                    <Marker position={[article.location?.latitude, article.location?.longitude]}  key={article.id}>
                        <Popup>
                            <Link to={`/article/${article.id}`}>{article.title}</Link>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}

PureMap.displayName = 'Map';

export default PureMap;
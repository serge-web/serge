import React, { Fragment } from 'react';
import { Marker } from 'react-leaflet';
import RouteData, { RouteStep } from '../types/route-data';
import L from 'leaflet';
import svgIcon from './create-marker';
import calculatePolylineAngle from './calculate-polyline-angle';

const title = (num: number) => {
    if (num < 10)
        return `0${num}`;
    else
        return num;
};

const createTurnMarkers = (routes: RouteData, type: string, color: string) =>
    routes.steps.map((rte: RouteStep, index: number) => {
        let angle;

        if (index > 0) {
            const segment = [routes.steps[index - 1].position, rte.position];
            angle = Math.abs(calculatePolylineAngle(segment));
        }

        return (
            <Fragment key={index}>
                <Marker key={`${type}_text_turns_${rte}`} position={rte.position} width="2" icon={L.divIcon({
                    html: `<text>T${title(index + 1)}: ${rte.status.state} @ ${rte.status.speedKts}kts</text>`,
                    iconSize: [300, 20]
                })} />
                <Marker key={`${type}_turns_${rte}`} position={rte.position} width="2" icon={L.divIcon({
                    html: svgIcon(color, angle || 0),
                    iconSize: [30, 20]
                })} />
            </Fragment>
        );
    });

export default createTurnMarkers;
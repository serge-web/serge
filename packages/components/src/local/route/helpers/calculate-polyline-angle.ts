import { LatLng } from "leaflet";

const calculatePolylineAngle = (polyline: LatLng[]) => {
    const shape = polyline;
    const firstpoint = shape[0];
    const lastpoint = shape[polyline.length - 1];
    const radian = Math.atan((lastpoint.lat - firstpoint.lat) / (lastpoint.lng - firstpoint.lng));
    const degrees = Math.round(radian * 180 / Math.PI);
    return degrees;
}

export default calculatePolylineAngle;
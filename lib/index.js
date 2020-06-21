"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFirestoreDocsToGeojson = void 0;
function formatFirestoreDocsToGeojson(data, metadata) {
    // Create a feature collection
    const featureCollection = {
        type: 'FeatureCollection',
        features: [],
        metadata: metadata || {},
    };
    featureCollection.features = data
        .sort((a, b) => (a.timestamp > b.timestamp ? 1 : -1))
        .map((model) => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [model.data.coordinates.longitude, model.data.coordinates.latitude],
            },
            properties: {
                id: model.id,
                edgeDeviceId: model.data.edgeDeviceId,
                timestamp: model.timestamp,
            },
        };
    });
    return featureCollection;
}
exports.formatFirestoreDocsToGeojson = formatFirestoreDocsToGeojson;

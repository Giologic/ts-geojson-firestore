import { IMetaFeatureCollection, ITelemetryModel } from './types';

export function formatFirestoreDocsToGeojson(data: ITelemetryModel[], metadata: object): IMetaFeatureCollection {
  // Create a feature collection

  const featureCollection: IMetaFeatureCollection = {
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

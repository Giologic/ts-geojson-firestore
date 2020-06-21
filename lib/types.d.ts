import { FeatureCollection } from 'geojson';
export declare type IMetadata = {
    [name: string]: any;
} | null;
export interface IMetaFeatureCollection extends FeatureCollection {
    /**
     * Metadata for the feature collection
     */
    metadata: IMetadata;
}
/**
 * Edge device coordinate data
 */
export interface ITelemetryCoordinates {
    /**
     * Latitude position
     */
    latitude: number;
    /**
     * Longitude position
     */
    longitude: number;
}
/**
 * A data model which contains telemetry data (coordinates) and associated edge device
 */
export interface ITelemetryDataModel {
    /**
     * A value that identifies the edge device associated to this data model
     */
    edgeDeviceId: string;
    /**
     * Coordinates of the edge device
     */
    coordinates: ITelemetryCoordinates;
}
/**
 * A firestore document model which contains all telemetry data and its unique identifier
 */
export interface ITelemetryModel {
    /**
     * Id that uniquely identified the firestore telemetry collection
     */
    id: string;
    /**
     * Data associated with this document model
     */
    data: ITelemetryDataModel;
    /**
     * Timestamp of this document model
     */
    timestamp: number;
}
/**
 * Feature types for feature collection
 */
export declare enum EFeatureType {
    point = "point",
    linestring = "linestring"
}

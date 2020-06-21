import { formatFirestoreDocsToGeojson } from '../index';

const dummyData = [
  {
    id: 'LRm2oa3gXqJUX2hebKck',
    timestamp: 1,
    data: {
      edgeDeviceId: 'bt-2',
      coordinates: {
        longitude: 113.12345,
        latitude: 14.12345,
      },
    },
  },
  {
    id: 'JFyCP5V8FokfL1O1mrL9',
    data: {
      edgeDeviceId: 'bt-2',
      coordinates: {
        latitude: 14.12345,
        longitude: 113.12345,
      },
    },
    timestamp: 2,
  },
  {
    id: '5eBdC8qcP8rATjwPhoDT',
    timestamp: 3,
    data: {
      edgeDeviceId: '223472',
      coordinates: {
        latitude: 14.12345,
        longitude: 113.12345,
      },
    },
  },
  {
    id: 'BxGuiJ9DOeVnWbGo2CF1',
    timestamp: 4,
    data: {
      edgeDeviceId: '223472',
      coordinates: {
        latitude: 14.12345,
        longitude: 113.12345,
      },
    },
  },
  {
    id: '5tzsCK2nww5IQ5bZrSGS',
    timestamp: 5,
    data: {
      coordinates: {
        latitude: 14.12345,
        longitude: 113.12345,
      },
      edgeDeviceId: '223472',
    },
  },
];

test('Feature collection is defined', () => {
  expect(formatFirestoreDocsToGeojson(dummyData, {})).toBeDefined();
});

test('Metadata gets updated', () => {
  expect(formatFirestoreDocsToGeojson(dummyData, { gatewayId: 'test-gateway' }).metadata).toMatchObject({
    gatewayId: 'test-gateway',
  });
});

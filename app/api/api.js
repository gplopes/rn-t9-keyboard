import mockServer from "../../server/mockServer";

export const fetchKeys = () => mockServer.keys();
export const decodeWords = (encodeKeys) => mockServer.decode(encodeKeys);

import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "c051d80ff38546afae1cb47635d08ad6";
const token =
  "007eJxTYHis+D7XRFyg2b6j/MubU9X+8eKXEzf+OtO41rDJ0GZKxQsFhpTEZCOLJBPTFHOLVJM0o8Qkw6RUAxNTC1MLgzRTYxOzXUYeyVYtnsnXbDpYGBkgEMRnZihPyWJgAABzFSCr";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "wdj";

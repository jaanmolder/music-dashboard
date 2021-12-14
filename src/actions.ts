import { Dispatch } from "redux";

const apikey = "0JIWxBrWrDwCSXZzhD9HKwPngGfGc9fq";

export const GET_ALL_MUSIC_EVENTS = "GET_ALL_MUSIC_EVENTS";

export const fetchHandler = async (
    url: RequestInfo,
    config: RequestInit | undefined
) => {
  let res = null;
  try {
    const response = await fetch(url, config);

    res = await response.json();
  } catch (error) {
    console.log(error);
  }
  return res;
};


export const getMusicEvents = async () => {
  const config = {};
  let res;

  try {
    res = await fetchHandler(
      `/discovery/v2/events?countryCode=FI&classificationId=KZFzniwnSyZfZ7v7nJ&apikey=${apikey}`,
      config
    );
  } catch (error) {
    // console.log(error);
  }

  // return {
  //   type: GET_ALL_MUSIC_EVENTS,
  //   payload: res
  // };
  return res;
};

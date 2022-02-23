import fetch from "node-fetch";

const APP_CONFIG_LAYER_HOST = "localhost:2772";
const APP_CONFIG_APPLICATION_ID = "kcamp2022";
const APP_CONFIG_ENVIRONMENT_ID = "dev";
const APP_CONFIG_CONFIG_ID = "k-camp-ff-profile";

const configUrl = `http://${APP_CONFIG_LAYER_HOST}/applications/${APP_CONFIG_APPLICATION_ID}/environments/${APP_CONFIG_ENVIRONMENT_ID}/configurations/${APP_CONFIG_CONFIG_ID}`;

exports.main = async (event) => {
  try {
    const rq = await fetch(configUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          config: await rq.json(),
        },
        null,
        2
      ),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          message: "Something went worng",
          input: event,
        },
        null,
        2
      ),
    };
  }
};

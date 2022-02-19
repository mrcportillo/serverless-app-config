import fetch from "node-fetch";

const APP_CONFIG_LAYER_HOST = "localhost:2772";
const APP_CONFIG_APPLICATION_ID = "jj2wbav";
const APP_CONFIG_ENVIRONMENT_ID = "08o0gsc";
const AOO_CONFIG_CONFIG_ID = "2wa5i6i";

const configUrl = `http://${APP_CONFIG_LAYER_HOST}/applications/${APP_CONFIG_APPLICATION_ID}/environments/${APP_CONFIG_ENVIRONMENT_ID}/configurations/${AOO_CONFIG_CONFIG_ID}`;

exports.main = async (event) => {
  try {
    const rq = await fetch(configUrl);
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Go Serverless v2.0! Your function executed successfully!",
          config: rq,
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

type Auth =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

const sendAuth = (eventType: Auth["type"], payload?: any) => {};

/* *
 * Prevent from passing non existing prop to sendAuth function
*/

sendAuth("SIGN_OUT", { userId: "123" });
sendAuth("LOG_IN", { userId: "123" });

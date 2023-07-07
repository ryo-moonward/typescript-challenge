type SolutionAuth =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

const solutionSendAuth = <T extends SolutionAuth["type"]>(
  ...args: Extract<SolutionAuth, { type: T }> extends {
    payload: infer TPayload;
  }
    ? [type: T, payload: TPayload]
    : [type: T]
) => {};

/* *
 * Prevent from passing non existing prop to sendAuth function
*/

solutionSendAuth("SIGN_OUT");
solutionSendAuth("LOG_IN", { userId: "123" });

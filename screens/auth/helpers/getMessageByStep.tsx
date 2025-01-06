export const getMessageByStep = (step: number) => {
  switch (step) {
    case 0:
    case 1:
      return "Connecting to the Server";
    case 2:
      return "Establishing a Secure Connection";
    case 3:
      return "Checking for an Account";
    case 4:
      return "Done!";
    default:
      return "";
  }
};

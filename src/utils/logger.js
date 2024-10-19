function logInfo(message) {
  console.log(`[INFO]: ${message}`);
}

function logError(error) {
  console.error(`[ERROR]: ${error}`);
}

export default { logInfo, logError };

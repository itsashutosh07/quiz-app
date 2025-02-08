/**
 * Logs informational messages.
 * @param {string} message - The info message.
 * @param {...any} data - Additional data to log.
 */
export const logInfo = (message, ...data) => {
  console.info(`[INFO] ${message}`, ...data);
};

/**
 * Logs warning messages.
 * @param {string} message - The warning message.
 * @param {...any} data - Additional data to log.
 */
export const logWarn = (message, ...data) => {
  console.warn(`[WARN] ${message}`, ...data);
};

/**
 * Logs error messages.
 * @param {string} message - The error message.
 * @param {...any} data - Additional data to log.
 */
export const logError = (message, ...data) => {
  console.error(`[ERROR] ${message}`, ...data);
};

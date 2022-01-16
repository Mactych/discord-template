const Logger = {};
for (const type of ["error", "warn", "log"]) {
    Logger[type] = function(title, log) {
        console[type](`${title}: ${log}`);
    }
}
exports = module.exports = Logger;
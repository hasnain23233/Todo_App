
exports.errorhandle = (req, res, next) => {
    res.status(404).json({ message: "404 Page not found" });
};

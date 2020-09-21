export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Sexy Site";
    next();
};

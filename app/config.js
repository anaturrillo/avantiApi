"use strict";
exports.__esModule = true;
var apiConfig = {
    dev: {
        dbPassword: '',
        port: 5000
    }
};
var config = apiConfig[process.env.ENV] || apiConfig.dev;
exports["default"] = config;

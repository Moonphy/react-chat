const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    {
        name: 'database',
        type: String,
    }, {
        name: 'jwtSecret',
        type: String,
    }, {
        name: 'qiniuAccessKey',
        type: String,
        defaultValue: '0EEgKBI9Drcism2Mjf-2th_t2diD9QvdsfPu7pe8',
    }, {
        name: 'qiniuSecretKey',
        type: String,
        defaultValue: 'eDwMi6PDOZN7RryhLAhCj0v3pRiFT7XXFU3wtVt-',
    }, {
        name: 'qiniuBucket',
        type: String,
        defaultValue: 'wechat',
    }, {
        name: 'qiniuUrlPrefix',
        type: String,
        defaultValue: 'pcvjzktss.bkt.clouddn.com',
    }, {
        name: 'allowOrigin',
        type: String,
        multiple: true,
    }, {
        name: 'publicPath',
        type: String,
    }, {
        name: 'subDirectory',
        type: String,
    }, {
        name: 'port',
        type: Number,
    }, {
        name: 'administrator',
        type: String,
    },
];
module.exports = commandLineArgs(optionDefinitions);

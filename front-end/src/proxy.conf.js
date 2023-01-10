const PROXY_CONFIG = [
  {
    context: ['/'],
    target: 'http://localhost:5000/login',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;

const PROXY_CONFIG = [
  {
    context: [
      "/api",
    ],
    target: "https://127.0.0.1:7277",
    secure: false
  }
]

module.exports = PROXY_CONFIG;


/*target: "https://localhost:7277" <- changed from this*/

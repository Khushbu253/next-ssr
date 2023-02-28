module.exports = {
    target: "serverless",
    functions: {
      hello: {
        handler: "index.js",
        timeout: 30,
      },
    },
  };

  
  
  
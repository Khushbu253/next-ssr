module.exports = {
    target: "serverless",
    functions: {
        getServerSideProps: {
        handler: "index.js",
        timeout: 30,
      },
    },
  };

  
  
  
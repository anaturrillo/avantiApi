const apiConfig = {
  dev: {
      dbPassword: 'vV0xOJqdrrgmEZEM',
      port: 5000
  }
};

const config = apiConfig[process.env.ENV] || apiConfig.dev;

export default config

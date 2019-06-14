# AVANTI

## Config
Agregar un archivo config.ts en ```/app``` con la siguiente estructura:


```
const apiConfig = {
  dev: {
      dbPassword: 'string',
      port: 'int'
  }
};

const config = apiConfig[process.env.ENV] || apiConfig.dev;

export default config
```

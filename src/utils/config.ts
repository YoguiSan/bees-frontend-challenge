interface ConfigInterface {
  baseURL: string,
}

const Config:ConfigInterface = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

console.log('base URL', Config.baseURL)

export default Config;

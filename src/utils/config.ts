interface ConfigInterface {
  baseURL: string,
}

const Config:ConfigInterface = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

export default Config;

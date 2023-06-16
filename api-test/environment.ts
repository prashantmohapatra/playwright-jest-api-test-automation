const env = process.env.ENVIRONMENT !== undefined ? process.env.ENVIRONMENT : '';
console.log(`Environment under test: ${env}`);

const dev = {
    BASE_URL: "https://jsonplaceholder.typicode.com"
};

const test = {
    BASE_URL: "https://jsonplaceholder.typicode.com"
};

const release = {
    BASE_URL: "https://jsonplaceholder.typicode.com"
};

const environment = {
    dev,
    test,
    release,
};

class ConfigManager {
    config: Record<string, any>;

    constructor(config: Record<string, any>) {
        this.config = config;
    }

    public getConfig(env: string): any {
        return this.config[env];
    }
}

const configManager = new ConfigManager(environment);

export const ENV = configManager.getConfig(env);

console.log("ENVIRONMENT: ", ENV);
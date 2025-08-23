export class EnvUtils {
    static getEnvFilePath(): string {
        return `.env.${process.env.NODE_ENV}`;
    }

    static isProd() {
        return process.env.NODE_ENV === 'prod';
    }
}

export class EnvUtils {
    static getEnvFilePath(): string {
        return `.env.${process.env.NODE_ENV}`;
    }
}

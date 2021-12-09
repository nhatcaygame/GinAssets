declare class AssetsManager {
    dir: string;
    loaded:boolean;
    data: Record<string, string>;
    constructor(dir: string);
    load():Promise<void>;
    clear(): void;
    get(name: string): string;
    set(name: string,data:string): string;
    get size(): number;
};
declare const __default: {
    font:AssetsManager;
    image:AssetsManager;
    data:AssetsManager;
    utils: {
        AssetsManager: typeof AssetsManager;
    };
};
export = __default;
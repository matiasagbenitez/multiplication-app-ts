import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileName: string;
    fileDestination: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        // repository: StorageRepository  
    ) { }

    execute({ fileContent, fileName, fileDestination }: Options): boolean {
        try {
            fs.mkdirSync(`outputs/${fileDestination}`, { recursive: true });
            fs.writeFileSync(`outputs/${fileDestination}/${fileName}.txt`, fileContent);
            return true;
        } catch (error) {
            // console.log({ error });
            return false;
        }
    }
}
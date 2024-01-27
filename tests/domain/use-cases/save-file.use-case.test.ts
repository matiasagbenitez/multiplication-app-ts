import { SaveFile } from '../../../src/domain/use-cases/save-file.use-case';
import fs from 'fs';

describe('SaveFileUseCase', () => {

    const options = {
        fileContent: 'test fileContent',
        fileName: 'test fileName',
        fileDestination: 'test fileDestination'
    }

    afterEach(() => {
        const outputFolderExists = fs.existsSync('outputs');
        if (outputFolderExists) fs.rmSync('outputs', { recursive: true });

        const customOutputFolderExists = fs.existsSync(options.fileDestination);
        if (customOutputFolderExists) fs.rmSync(options.fileDestination, { recursive: true });

    });

    test('should save file with default values', () => {

        const saveFile = new SaveFile();
        const result = saveFile.execute(options);
        const fileExists = fs.existsSync(`outputs/${options.fileDestination}/${options.fileName}.txt`);
        const fileContent = fs.readFileSync(`outputs/${options.fileDestination}/${options.fileName}.txt`, { encoding: 'utf-8' });

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toBe(options.fileContent);
    });

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            // Sobreescribimos la implementación del mkdir
            () => { throw new Error('This is a custom error message from testing') }
        );

        const result = saveFile.execute(options);
        expect(result).toBeFalsy();
        mkdirSpy.mockRestore();
    });

    test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            // Sobreescribimos la implementación del mkdir
            () => { throw new Error('This is a custom error message from testing') }
        );

        const result = saveFile.execute(options);
        expect(result).toBeFalsy();
        writeFileSpy.mockRestore();
    });


})
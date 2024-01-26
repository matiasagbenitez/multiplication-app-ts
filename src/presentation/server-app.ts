import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp {
    static run({ base, limit, showTable, name, destination }: RunOptions) {
        console.log('Server running...');

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileName: name,
            fileDestination: destination,
        });

        if (showTable) {
            console.log(table);
        }

        if (wasCreated) {
            console.log("¡Archivo creado con éxito!");
        } else {
            console.log("¡Ocurrió un error al crear el archivo!");
        }
    }
}
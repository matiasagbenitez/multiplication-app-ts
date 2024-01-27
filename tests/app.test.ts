import { ServerApp } from "../src/presentation/server-app";

describe('pruebas en el app.test', () => {
    test('should call Server.run with values', async () => {
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;

        process.argv = [
            'node',
            'app',
            '-b',
            '10',
            '-l',
            '10',
            '-s',
            '-d',
            'test-destination',
            '-n',
            'test-name'
        ];

        await import('../src/app');

        expect(serverRunMock).toHaveBeenCalledTimes(1);

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 10,
            limit: 10,
            showTable: true,
            destination: 'test-destination',
            name: 'test-name'
        });
    })
})
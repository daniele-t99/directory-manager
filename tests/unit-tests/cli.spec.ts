import 'jest';
import { createDir, createFile, listDirCont } from '../../src';
import { rmSync, existsSync } from 'fs';

describe('List method', ()=>{

    it('should show dir list when valid filepath is given', async()=>{
        const payload = "C:/Users/turcato_d/Desktop/";
        const list = await listDirCont(payload);
        expect(list).not.toBeNull;
    });

    it('should show src dir when only -l option is given', async()=>{ 
        const list = await listDirCont(__dirname);
        expect(list).not.toBeNull;
    })
})

describe('mkdir method', ()=> {

    it('should create a directory in the given empty filepath', async()=>{
        if(!existsSync("C:/Users/turcato_d/Desktop/Kymos/directory-manager/tests/unit-tests/testing-folder")){
            const payload = "C:/Users/turcato_d/Desktop/Kymos/directory-manager/tests/unit-tests/testing-folder";
            const consoleSpy = jest.spyOn(console, 'log');
            await createDir(payload);
            expect(consoleSpy).toHaveBeenCalledWith("The directory has been created successfully");
        }
    })
})

describe('touch method', ()=>{

    it('should create an empty txt file in the given filepath', async()=>{
        const payload = "C:/Users/turcato_d/Desktop/Kymos/directory-manager/tests/unit-tests/new-file-testing.txt";
        const consoleSpy = jest.spyOn(console, 'log');
        await createFile(payload);
        expect(consoleSpy).toHaveBeenCalledWith("An empty file has been created");
    })
})
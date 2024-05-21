import 'jest';
import { listDirCont } from '../../src';

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

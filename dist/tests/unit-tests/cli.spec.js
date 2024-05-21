"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const src_1 = require("../../src");
const fs_1 = require("fs");
describe('List method', () => {
    it('should show dir list when valid filepath is given', () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = "C:/Users/turcato_d/Desktop/";
        const list = yield (0, src_1.listDirCont)(payload);
        expect(list).not.toBeNull;
    }));
    it('should show src dir when only -l option is given', () => __awaiter(void 0, void 0, void 0, function* () {
        const list = yield (0, src_1.listDirCont)(__dirname);
        expect(list).not.toBeNull;
    }));
});
describe('mkdir method', () => {
    it('should create a directory in the given empty filepath', () => __awaiter(void 0, void 0, void 0, function* () {
        if (!(0, fs_1.existsSync)("C:/Users/turcato_d/Desktop/Kymos/directory-manager/tests/unit-tests/testing-folder")) {
            const payload = "C:/Users/turcato_d/Desktop/Kymos/directory-manager/tests/unit-tests/testing-folder";
            const consoleSpy = jest.spyOn(console, 'log');
            yield (0, src_1.createDir)(payload);
            expect(consoleSpy).toHaveBeenCalledWith("The directory has been created successfully");
        }
    }));
});
//# sourceMappingURL=cli.spec.js.map
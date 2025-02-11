export let fsMocks;

export const resetFsMocks = () => {
  fsMocks = {
    copy: jest.fn(),
    copySync: jest.fn(),
    removeSync: jest.fn(),
    writeFile: jest.fn(),
    existsSync: jest.fn().mockReturnValue('MOCK'),
    mkdirsSync: jest.fn(),
    readFileSync: jest.fn()
      .mockReturnValueOnce('outputDir/MOCK-VIDEO-1.webm')
      .mockReturnValueOnce('outputDir/MOCK-VIDEO-1.webm')
      .mockReturnValueOnce('outputDir/MOCK-VIDEO-1.webm')
      .mockReturnValueOnce('outputDir/MOCK-VIDEO-2.webm')
      .mockReturnValueOnce('outputDir/MOCK-VIDEO-2.webm')
      .mockReturnValueOnce('outputDir/MOCK-VIDEO-2.webm'),
    readdirSync: jest.fn().mockReturnValue(['MOCK-ALLURE-1.webm', 'MOCK-ALLURE-2.webm']),
    statSync: jest.fn().mockReturnValue(({ size: 128 })),
  };
};

resetFsMocks();

export default {
  copy(...args) { fsMocks.copy(...args); },
  copySync(...args) { fsMocks.copySync(...args); },
  removeSync(...args) { fsMocks.removeSync(...args); },
  existsSync(...args) { return fsMocks.existsSync(...args); },
  mkdirsSync(...args) { fsMocks.mkdirsSync(...args); },
  readFileSync(...args) { return fsMocks.readFileSync(...args); },
  readdirSync(...args) { return fsMocks.readdirSync(...args); },
  statSync(...args) { return fsMocks.statSync(...args); },
  writeFile(...args) { return fsMocks.writeFile(...args); },
};

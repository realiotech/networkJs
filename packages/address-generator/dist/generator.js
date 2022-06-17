"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMnemonic = void 0;
const wallet_1 = require("@ethersproject/wallet");
const generateMnemonic = () => {
    const wallet = wallet_1.Wallet.createRandom();
    return wallet.mnemonic.phrase;
};
exports.generateMnemonic = generateMnemonic;
//# sourceMappingURL=generator.js.map
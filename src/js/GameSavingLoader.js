import read from "../js/reader"
import json from "../js/parser"

export default class GameSavingLoader {
    static async load() {
        try {
            const data = await read();
            const value = await json(data);
            return JSON.parse(value);
        } 
        catch (e) {
            throw new Error('error')
        }
    }
} 
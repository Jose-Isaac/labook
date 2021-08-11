"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrations = void 0;
const connection_1 = __importDefault(require("./connection"));
const migrations = () => {
    connection_1.default
        .raw(`
          CREATE TABLE IF NOT EXISTS labook_users(
             id VARCHAR(255) PRIMARY KEY,
             name VARCHAR(255) NOT NULL,
             email VARCHAR(255) UNIQUE NOT NULL,
             password VARCHAR(255) NOT NULL
          );
    
          CREATE TABLE IF NOT EXISTS labook_posts(
             id VARCHAR(255) PRIMARY KEY,
             photo VARCHAR(255) NOT NULL,
             description VARCHAR(255) NOT NULL,
             type ENUM("normal","event") DEFAULT "normal",
             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
             author_id VARCHAR(255),
             FOREIGN KEY (author_id) REFERENCES labook_users (id)
          )
       `)
        .then(() => { console.log('Migrations executed with successfully'); })
        .catch(console.log);
};
exports.migrations = migrations;
//# sourceMappingURL=migrations.js.map
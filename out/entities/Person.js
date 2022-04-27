"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEntity_1 = __importDefault(require("./BaseEntity"));
const decorators_1 = require("../decorators");
let Person = class Person extends BaseEntity_1.default {
};
__decorate([
    decorators_1.id,
    __metadata("design:type", String)
], Person.prototype, "id", void 0);
__decorate([
    decorators_1.persist,
    decorators_1.required,
    decorators_1.length(3, 100),
    __metadata("design:type", String)
], Person.prototype, "firstName", void 0);
__decorate([
    decorators_1.persist,
    decorators_1.required,
    decorators_1.length(3, 100),
    __metadata("design:type", String)
], Person.prototype, "lastName", void 0);
__decorate([
    decorators_1.persist,
    decorators_1.required,
    decorators_1.isEmail,
    __metadata("design:type", String)
], Person.prototype, "email", void 0);
__decorate([
    decorators_1.persist,
    __metadata("design:type", String)
], Person.prototype, "department", void 0);
__decorate([
    decorators_1.persist,
    decorators_1.required,
    decorators_1.isPhone,
    __metadata("design:type", String)
], Person.prototype, "mobileNumber", void 0);
__decorate([
    decorators_1.persist,
    decorators_1.required,
    decorators_1.isInteger(1, 120),
    __metadata("design:type", Number)
], Person.prototype, "age", void 0);
Person = __decorate([
    decorators_1.entity("people")
], Person);
exports.default = Person;
//# sourceMappingURL=Person.js.map
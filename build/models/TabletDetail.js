"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabletDetail = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let TabletDetail = exports.TabletDetail = class TabletDetail extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "namespaceId", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    })
], TabletDetail.prototype, "capacityAvailable", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "capacity", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
    })
], TabletDetail.prototype, "priceRegular", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.INTEGER,
    })
], TabletDetail.prototype, "priceDiscount", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    })
], TabletDetail.prototype, "colorsAvailable", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "color", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    })
], TabletDetail.prototype, "images", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSON),
    })
], TabletDetail.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "screen", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "resolution", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "processor", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "ram", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "camera", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
    })
], TabletDetail.prototype, "zoom", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    })
], TabletDetail.prototype, "cell", void 0);
exports.TabletDetail = TabletDetail = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'tabletdetails',
        createdAt: false,
        updatedAt: false,
    })
], TabletDetail);

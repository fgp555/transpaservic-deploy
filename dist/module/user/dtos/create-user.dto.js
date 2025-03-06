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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100, { message: 'First name should be less than 100 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(100, { message: 'Last name should be less than 100 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Invalid email format' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Email should be less than 255 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'Password should be at least 6 characters long' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Password should be less than 20 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, {
        message: 'Confirm password should be at least 6 characters long',
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: 'Confirm password should be less than 20 characters',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.IsDateString)({}, { message: 'Birthdate must be a valid date format' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: 'nDni should be exactly 8 digits' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nDni", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255, { message: 'Image URL should be less than 255 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isAdmin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Specialization should be less than 255 characters',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Specialization should be less than 255 characters',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "specialization", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000, { message: 'Bio should be less than 1000 characters' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "bio", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['woman', 'man'], {
        message: 'Gender must be either "woman" or "man"',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
//# sourceMappingURL=create-user.dto.js.map
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    birthdate: string;
    nDni: string;
    image?: string;
    isAdmin?: boolean;
    title?: string;
    specialization?: string;
    bio?: string;
    gender?: 'woman' | 'man';
}

const TUserType = {
    ATHLETE: 'athlete',
    ADMIN: 'admin',
} as const;

export type TUserType = typeof TUserType[keyof typeof TUserType];

export interface IUser {
    username: string;
    email: string;
    type: TUserType;
    uid: string;
}
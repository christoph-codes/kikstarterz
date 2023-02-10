import { IUser } from "./userTypes";

const subscriptionType = {
    FREE: 'FREE',
    PREMIUM: 'PREMIUM',
} as const;

export type TSubscriptionType = typeof subscriptionType[keyof typeof subscriptionType];

export type TVideoUrl = {
    youtube: string;
    hudl: string;
}

export interface IAthlete {
    uid: IUser['uid'];
    fname: string;
    lname: string;
    height?: string;
    weight?: string;
    class?: string;
    profilePhoto?: string;
    hometown?: string;
    studying?: string;
    sports?: string[];
    currentTeams?: string[];
    gpa?: number;
    sat?: number;
    act?: number;
    honorsClasses?: number;
    apClasses?: number;
    highlightVideoUrl?: TVideoUrl | string;
    actionPhotoUrl?: string;
    subscriptionType: TSubscriptionType;
}

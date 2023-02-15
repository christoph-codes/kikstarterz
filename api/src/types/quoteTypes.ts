
const quoteType = {
    TEXT: 'TEXT',
    MEDIA: 'MEDIA',
    ACTIVITY: 'ACTIVITY',
} as const;

export type TQuoteType = typeof quoteType[keyof typeof quoteType];

export interface IQuote {
    uid: string;
    type: TQuoteType;
    date: Date;
    fireCount: number;
    message: string;
    authorId: string;
}
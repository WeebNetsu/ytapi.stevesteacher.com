import { QuoteModel } from '../../models/quotes';

const quoteData: QuoteModel[] = [
    {
        _id: '0300d826-6dbc-4b67-a57a-5f8741ff891b',
        quote: "What doesn't kill us makes us stronger.",
        author: {
            language: 'German',
            name: 'Friedrich Nietzsche',
            ageOfDeath: 55,
            dateOfBirth: new Date('15 October 1844'),
        },
        user: {
            type: 'user',
            username: 'Carlos277',
            verified: false,
        },
    },
    {
        _id: 'b9f7e30b-dde3-4db4-a48c-a31bab84a1c0',
        quote: 'Innovation distinguishes between a leader and a follower.',
        author: {
            language: 'English',
            name: 'Steve Jobs',
            ageOfDeath: 56,
            dateOfBirth: new Date('24 February 1955'),
        },
        user: {
            type: 'user',
            username: null,
            verified: false,
        },
    },
    {
        _id: 'a659665b-96c2-4d77-ac87-044a5b162171',
        quote: 'It is not the critic who counts: not the man who points out how the strong man stumbles or where the doer of deeds could have done better.',
        author: {
            language: 'English',
            name: 'Eleanor Roosevelt',
            ageOfDeath: 68,
            dateOfBirth: new Date('11 October 1884'),
        },
        user: {
            type: 'moderator',
            username: 'jane123',
            verified: true,
        },
    },
    {
        _id: '0837cf7f-bbfb-4745-a894-441bf6d47708',
        quote: 'When you undervalue what you do, the world will undervalue who you are.',
        author: {
            language: 'English',
            name: 'Oprah Winfrey',
            ageOfDeath: undefined, // Author is still alive
            dateOfBirth: new Date('25 September 1954'),
        },
        user: {
            type: 'moderator',
            username: 'jane123',
            verified: true,
        },
    },
];

export default quoteData;

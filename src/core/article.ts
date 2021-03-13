type Image = {
    uid: string,
    files: {
        original: string,
        large: string,
        medium: string,
        small: string,
    },
    dimensions: {
        width: number,
        height: number,
    }
}

type User = {
    id: number
    first_name: string,
    current_avatar: {
        original: string,
        large: string,
        small: string,
    },
    roles: Array<string>,
    location: {
        latitude: number,
        longitude: number,
    },
    rating: {
        rating: number,
        number: number,
    },
    verifications: Array<{
        method: string,
    }>
}

export type Article = {
    id: number,
    title: string,
    description: string,
    donation_description: string,
    collection: {
        id: number,
    },
    section: string // would make sense to be limited values but test data just has product in it "product",
    location: {
        latitude: number,
        longitude: number,
        distance: number,
        town: string,
        country: string,
    },
    collection_note: string,
    value: {
        price: number,
        currency: string,
        payment_type: string,
    },
    created_at: string, // dateString
    updated_at: string, // dateString
    status: string,
    expiry: string, // dateString
    reactions: {
        likes: number,
        by_user: boolean,
        views: number,
        impressions: number
    },
    is_owner: boolean,
    conversations: {
        linked: number,
        request_id: null | number, //best guess is that it will be a number if not null, it always appears null in test data
    },
    photos: Array<Image>,
    images: Array<Image>,
    user: User,
    first: boolean,
    last_listed: string, //datestring
    pickups: {
        multiple: false,
        users: Array<number>, //best guess that this would be an array of user ids which are numeric
        items: number,
    },
    veteran_delay: number,
}

export type Articles = Array<Article>;

export {};
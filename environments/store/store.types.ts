export type api = {}

export type oink = {
    key: string,
    profileId: string,
    createDate: Date,
    text: string,
    images: string[]
}

export type profile = {
    key: string,
    displayName: null | string,
    bio: null | string,
    coverImg: string,
    profileImg: string,
    followerIds: string[],
    followingIds: string[],
    oinkIds: string[]
}

export type store = {
    feed: oink[],
    profile: profile | undefined,
    following: profile[],
}
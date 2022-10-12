export type schema = {
    key: string,
    displayName: null | string,
    bio: null | string,
    coverImg: Blob,
    profileImg: Blob,
    followerIds: string[],
    followingIds: string[],
    oinkIds: string[]
}
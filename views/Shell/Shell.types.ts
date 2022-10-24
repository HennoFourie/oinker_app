export type api = {
    login: () => Promise<void>,
    logout: () => Promise<void>,
    getUser: () => Promise<any>,
    getToken: () => Promise<any>,
    handleUrlCallback: () => Promise<void>,
}

export type store = {
    login: () => Promise<void>,
}

export type active = 'feed' | 'following' | 'profile' | null
export type props = { children: JSX.Element, active: active, title: string }
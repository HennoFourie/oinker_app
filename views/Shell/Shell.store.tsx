import { createStore as createZustandStore, StoreApi } from 'zustand'
import { createContext } from 'react'
import * as types from './Shell.types'
import createClient from '@auth0/auth0-spa-js'

export const context = createContext({} as StoreApi<types.store>)
export const { Provider } = context

const createTypedStore = createZustandStore<types.store>()

export const createApi = (): types.api => {
    const init = createClient({
        domain: '<AUTH0_DOMAIN>',
        client_id: '<AUTH0_CLIENT_ID>',
        redirect_uri: '<MY_CALLBACK_URL>'
      });

      return {
        login: async () => {
            const client = await init
            await client.loginWithRedirect()
        },
        logout: async () => {
            const client = await init
            await client.logout()
        },
        getUser: async () => {
            const client = await init
            return await client.getUser()
        },
        getToken: async () => {
            const client = await init
            return client.getTokenSilently()
        }, 
        handleUrlCallback: async () => {
            const client = await init
            const response = await client.handleRedirectCallback()
            console.log(response)
        }, 
      }
}

export const createStore = (api: types.api): StoreApi<types.store> => {
    const store = createTypedStore(() => ({
        login: () => api.login(),
    }))

    const mount = async () => {
        try {
            await api.handleUrlCallback()
            const response = await api.getUser()
            console.log(response)
        } catch (error) {
            console.warn(error)
        }
    }
    
    mount() 
    return store
}

export const Container = (props: {children: JSX.Element }) => {
    const { children } = props
    const store = createStore(createApi())
    return <Provider value={store}>{children}</Provider>
}
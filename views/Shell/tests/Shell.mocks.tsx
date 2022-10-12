import { createStore, Provider } from '../Shell.store'
import * as types from '../Shell.types'

const mockPromise = <T extends object>(response: T): Promise<T> => new Promise((resolve) => {
    setTimeout(() => resolve(response), 2000)
})

const API: types.api = {}

export const MockContainer = (props: { children: JSX.Element }) => {
    const { children } = props
    const store = createStore(API)
    return <Provider value={store}>{children}</Provider>
}
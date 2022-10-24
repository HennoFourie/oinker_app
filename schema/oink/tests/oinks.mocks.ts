import { faker } from '@faker-js/faker'
import * as types from '../oink.types'

export const OINK_IDS = faker.datatype.array(300).map(() => faker.datatype.uuid())

const getImage = () => `https://picsum.photos/id/${faker.datatype.number({min: 100, max: 200})}/600/600`

export const createMockOink = (props?: {
    id?: string,
    profileIds?: string[],
}): types.schema => {
    const { id, profileIds } = props || {}

    return {
        key: id || faker.datatype.uuid(),
        createDate: faker.date.past(),
        image: faker.datatype.boolean() ? null : getImage(),
        profileId: profileIds ? faker.helpers.arrayElement(profileIds) : faker.datatype.uuid(),
        text: faker.lorem.sentence(),
    }
}
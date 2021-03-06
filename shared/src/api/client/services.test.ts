import { NEVER } from 'rxjs'
import { Services } from './services'

describe('Services', () => {
    it('initializes empty services', () => {
        // tslint:disable-next-line:no-unused-expression
        new Services({
            settings: NEVER,
            updateSettings: () => Promise.reject(new Error('not implemented')),
            queryGraphQL: () => NEVER,
            getScriptURLForExtension: scriptURL => scriptURL,
            clientApplication: 'sourcegraph',
        })
    })
})

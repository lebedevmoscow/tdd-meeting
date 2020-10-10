import React from 'react'
import { shallow, configure } from 'enzyme'
import Gift from './Gift'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter(), disableLifecycleMethods: true })

describe('<Gift />', () => {
    const gift = shallow(<Gift />)

    it('renders properly', () => {
        expect(gift).toMatchSnapshot()
    })

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' })
    })

    describe('when typing into the person input', () => {
        const person = 'Uncle'

        beforeEach(() => {
            gift.find('.input-person').simulate('change', {
                target: { value: person },
            })
        })
        it('updates the person in `stat`', () => {
            expect(gift.state().person).toEqual(person)
        })
    })
})
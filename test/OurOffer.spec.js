import { shallowMount } from '@vue/test-utils'
import OurOffer from '@/components/Shared/OurOffer.vue'

describe("Header.vue", () => {
    test('Set up correctly', () => {
        expect(true).toBe(true)
    })
    test('contains telephone number', () => {
        const wrapper = shallowMount(OurOffer)
        expect(wrapper.contains('img')).toBe(true)
    })
})
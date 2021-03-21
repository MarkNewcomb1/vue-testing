// write tests here
import AppHeader from '@/components/AppHeader'
// the component must be mounted to test it
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
    test('If user is not logged in, do not show log in button', () => {
        // it's "wrapper" because it wraps the component in functions that help test
        const wrapper = mount(AppHeader);
        expect(wrapper.find('button').isVisible()).toBe(false);   
    })

    test('If user is logged in, show log in button', async () => {
        const wrapper = mount(AppHeader);
        wrapper.setData({ loggedIn: true });
        await wrapper.vm.$nextTick();
        expect(wrapper.find('button').isVisible()).toBe(true);
    })
})
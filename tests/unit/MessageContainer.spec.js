describe('MessageContainer', () => {
    it('Wraps MessageDisplay component', () => {
        const wrapper = mount(MessageContainer, {
            stubs: {
                // example of a stub: MessageDisplay is itself a whole component that
                // calls an API, but here we don't want to mount that - just its parent.
                // So, we stub out what the MessageDisplay component would output instead of
                // its code to make that paragraph tag and text happen. 
                MessageDisplay: '<p data-testid="message">Hello from the db!</p>'
            }
        })

        const message = wrapper.find('[data-testid="message"]').element.textContent
        expect(message).toEqual('Hello from the db!')
    })
})
import { describe, it, expect } from 'vitest'
import { trigger, on } from './index.ts'

describe('trigger function', () => {
    it('should dispatch a custom event with the given name and data', () => {
        const eventName = 'test-event'
        const eventData = { key: 'value' }

        let receivedData: any = null

        // Listen for the event
        on(eventName, (data) => {
            receivedData = data
        })

        // Trigger the event
        trigger(eventName, eventData)

        // Check that the listener received the data
        expect(receivedData).toBe(eventData)
    })
})
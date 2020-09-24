import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('test assistant', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './styled-text-test.sketch'),
    Assistant,
  )
  expect(violations).toHaveLength(3)
  expect(violations[0].message).toBe('Text Layer “Unstyled Text” is not using a Style')
  expect(ruleErrors).toHaveLength(0)
})

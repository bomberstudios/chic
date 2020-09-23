import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const textLayerNoUnstyled: RuleDefinition = {
  rule: async (context) => {
    context.utils.report('Hello world')
  },
  name: 'chic/text-layer-no-unstyled',
  title: 'Text Layer No Unstyled',
  description: 'Reports Text Layers not using Text Styles',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'chic',
    rules: [textLayerNoUnstyled],
    config: {
      rules: {
        'chic/text-layer-no-unstyled': { active: true },
      },
    },
  }
}

export default assistant

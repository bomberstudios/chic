import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const textLayerNoUnstyled: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context
    for (const text of utils.objects.text) {
      if (text.sharedStyleID == undefined) {
        utils.report(`Text Layer “${text.name}” is not using a Style`, text)
      }
    }
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

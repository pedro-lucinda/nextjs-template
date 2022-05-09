import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '..'

/*
  # DOCS:
    * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
    * More on args: https://storybook.js.org/docs/react/writing-stories/args
    * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

*/

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Secondary',
}

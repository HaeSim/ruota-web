import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "버튼",
    variant: "default",
  },
}

export const Destructive: Story = {
  args: {
    children: "삭제",
    variant: "destructive",
  },
}

export const Outline: Story = {
  args: {
    children: "아웃라인",
    variant: "outline",
  },
}

export const Secondary: Story = {
  args: {
    children: "보조",
    variant: "secondary",
  },
}

export const Ghost: Story = {
  args: {
    children: "고스트",
    variant: "ghost",
  },
}

export const Link: Story = {
  args: {
    children: "링크",
    variant: "link",
  },
}

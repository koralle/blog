import { defineProperties } from '@vanilla-extract/sprinkles'

const spacing = {
  0: '0',
  auto: 'auto',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2lg': '32px',
  '2xl': '48px',
  '4lg': '64px',
} as const

const spacingProperties = defineProperties({
  properties: {
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingRight: spacing,
    paddingLeft: spacing,
    paddingBlock: spacing,
    paddingBlockStart: spacing,
    paddingBlockEnd: spacing,
    paddingInline: spacing,
    paddingInlineStart: spacing,
    paddingInlineEnd: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginRight: spacing,
    marginLeft: spacing,
    marginBlock: spacing,
    marginBlockStart: spacing,
    marginBlockEnd: spacing,
    marginInline: spacing,
    marginInlineStart: spacing,
    marginInlineEnd: spacing,
  },
  shorthands: {
    padding: ['paddingBlock', 'paddingInline'],
    margin: ['marginBlock', 'marginInline'],
    pbs: ['paddingBlockStart'],
    pbe: ['paddingBlockEnd'],
    pis: ['paddingInlineStart'],
    pie: ['paddingInlineEnd'],
    pi: ['paddingInline'],
    pb: ['paddingBlock'],
    mbs: ['marginBlockStart'],
    mbe: ['marginBlockEnd'],
    mis: ['marginInlineStart'],
    mie: ['marginInlineEnd'],
    mi: ['marginInline'],
    mb: ['marginBlock'],
  },
})

export { spacingProperties, spacing }

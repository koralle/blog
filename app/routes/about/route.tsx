import { Box, Heading, Text } from '@radix-ui/themes'

const About = () => {
  return (
    <Box asChild>
      <article>
        <header>
          <Heading>
            <Text weight="bold">このブログについて</Text>
          </Heading>
        </header>
        <section>
          <p>
            <Text>T.B.D</Text>
          </p>
        </section>
      </article>
    </Box>
  )
}

export default About

import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/coms-home.png'
import thumbadulting101 from '../public/images/works/adulting101-home.png'
import thumbFakeFace from '../public/images/works/fakeface-home.png'
import thumbHandGesture from '../public/images/works/handgesture-home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="COMS" title="Lorem ipsum" thumbnail={thumbComs}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Adulting101"
            title="Lorem ipsum"
            thumbnail={thumbadulting101}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fakeface"
            title="Lorem ipsum"
            thumbnail={thumbFakeFace}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Lorem ipsum" thumbnail={thumbHandGesture} title="Lorem ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

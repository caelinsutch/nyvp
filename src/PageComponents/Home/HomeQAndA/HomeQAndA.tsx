import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

const HomeQAndA: React.FC = () => {
  const {
    contentfulHomePage: { questionAndAnswers },
  } = useStaticQuery(
    graphql`
      query HomeQAndA {
        contentfulHomePage {
          questionAndAnswers {
            question
            answer {
              answer
            }
          }
        }
      }
    `,
  );

  return (
    <Box
      as="section"
      minH="100vh"
      py={8}
      backgroundImage={'url("/images/qAndABackground.svg")'}
      backgroundPosition="bottom"
      backgroundSize="contain"
    >
      <Container px={4} maxWidth="800px">
        <Heading as="h2" size="3xl" textAlign="center">
          Q&A
        </Heading>
        <Accordion mt={8} defaultIndex={[0]} allowMultiple>
          {questionAndAnswers.map(({ question, answer: { answer } }: any) => (
            <AccordionItem key={question + answer}>
              <AccordionButton py={3}>
                <Box flex="1" textAlign="left">
                  <Heading as="h3" size="sm">
                    {question}
                  </Heading>
                </Box>

                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default HomeQAndA;

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  Section,
  Grid,
  Container,
  Wrapper,
  Heading,
  Body,
  Flex,
} from "@psu-flex/core-ui";
import { BradTestProps } from "./BradTestTypes";

export const BradTest = ({ heading, body }: BradTestProps) => {
  return (
    <Container>
      <Wrapper>
        <Flex
          direction="column"
          extraSx={{ backgroundColor: "nittanyNavy", padding: "20px" }}
        >
          <Heading
            extraSx={{
              marginTop: ["8px", "15px", "20px", "40px"],
            }}
            variant={32}
            color={"white"}
          >
            {heading}
          </Heading>
          <Body variant={18}>{body}</Body>
        </Flex>
      </Wrapper>
    </Container>
  );
};

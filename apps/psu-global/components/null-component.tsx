import { BackgroundWrapper, Body, Wrapper } from "@psu-flex/psu-global-ui";
import { JsonApiResource } from "next-drupal";

export function NullComponent({ type, ...props }: JsonApiResource) {
  return (
    <BackgroundWrapper variant="limestoneMaxLight">
      <Wrapper>
        <Body>The <strong>{type}</strong> component has not been created yet.</Body>
      </Wrapper>
    </BackgroundWrapper>
  )
}

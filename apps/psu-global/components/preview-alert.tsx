import * as React from "react"
import { useRouter } from "next/router"
import { Body, Flex, Link, Wrapper } from "@psu-flex/psu-global-ui"

export function PreviewAlert() {
  const { isPreview } = useRouter()
  const [showPreviewAlert, setShowPreviewAlert] = React.useState<boolean>(false)

  React.useEffect(() => {
    setShowPreviewAlert(isPreview && window.top === window.self)
  }, [isPreview])

  if (!showPreviewAlert) {
    return null
  }

  return (
    <div sx={{
      backgroundColor: 'coalyGray',
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      py: 3,
    }}>
      <Wrapper>
        <Flex justifyContent="center">
          {/* @ts-ignore */}
          <Body variant={15} color='limestoneGray'>
            This page is a preview.{" "}
            <Link color="white" underline="always" to="/api/exit-preview">Click here</Link>{" "}
            to exit preview mode.
          </Body>
        </Flex>
      </Wrapper>
    </div>
  )
}

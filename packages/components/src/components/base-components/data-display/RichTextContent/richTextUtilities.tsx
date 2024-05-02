import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { Callout } from '../Callout/Callout';

//returns the component that matches the entryType, and passes the fields to the component
export const getEmbeddedEntryBlocks = (
  entryType: string,
  fields: any
): JSX.Element | null => {
  switch (entryType) {
    case 'callout':
      return <Callout {...fields} />;
    case 'buttonGroup': {
      const ctaText = fields?.primaryButton?.fields?.title;
      const ctaTo = fields?.primaryButton?.fields?.to;
      const secondaryCtaText = fields?.secondaryButton?.fields?.title;
      const secondaryCtaTo = fields?.secondaryButton?.fields?.to;
      const buttonGroupProps = {
        ctaText,
        ctaTo,
        secondaryCtaText,
        secondaryCtaTo,
        withIconCta: true,
      };
      return (
        <ButtonGroup extraSx={{ my: [4, 5, 5, 6] }} {...buttonGroupProps} />
      );
    }
    default:
      return null;
  }
};

// Function to populate slots
export const populateMobileTableSlots = (
  item,
  offCanvasRef,
  mobileTableHeads
) => {
  const offCanvas: any = offCanvasRef.current;
  if (offCanvas) {
    const tableCells = item.props.children;
    tableCells.forEach((cell, index) => {
      const slotDdContent = cell?.props?.children[0]?.props?.children[0][1];
      if (slotDdContent) {
        const newDt = document.createElement('dt');
        newDt.classList.add('rt-tbl-modal-dt');
        newDt.textContent = mobileTableHeads[index];
        offCanvas.appendChild(newDt);
        const newDd = document.createElement('dd');
        newDd.classList.add('rt-tbl-modal-dd');
        newDd.textContent = slotDdContent;
        offCanvas.appendChild(newDd);
      }
    });
  }
};

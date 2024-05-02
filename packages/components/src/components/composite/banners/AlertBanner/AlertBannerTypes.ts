import { RichTextJsonStructure } from '../../../../../../common/src/types/richtext-json';

export interface AlertBannerProps {
  /**Severity of alert. This prop controls the background color, icon, and open/closed state automatically */
  severity: 'urgent' | 'immediate' | 'nonEmergency' | 'allClear' | string;
  /**Text displayed when alert is open. Should be rich text coming from cms*/
  openText: RichTextJsonStructure;
  /**Text displayed when alert is closed.*/
  closedText: string;
  /**Text displayed to show the date the alert was published.*/
  publishedOn: string;
}

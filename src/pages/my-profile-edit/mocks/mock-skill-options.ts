import type { SuccessResponse } from '@shared/api/types';
import type { Option } from '@shared/types/common';

export interface FieldSkillItemResponse {
  field: Option;
  skills: Option[];
}

interface FieldSkillResponseData {
  items: FieldSkillItemResponse[];
}

export type FieldSkillResponse = SuccessResponse<FieldSkillResponseData>;

export const MOCK_FIELD_SKILL_RESPONSE: FieldSkillResponse = {
  status: 200,
  msg: 'OK',
  data: {
    items: [
      {
        field: { id: 100, name: '기획/마케팅' },
        skills: [
          { id: 1001, name: 'GA4' },
          { id: 1002, name: 'Google Trends' },
          { id: 1003, name: 'SEMrush' },
          { id: 1004, name: 'Ahrefs' },
          { id: 1005, name: 'Meta Ads Manager' },
          { id: 1006, name: 'Google Ads' },
          { id: 1007, name: 'Notion' },
          { id: 1008, name: 'Miro' },
          { id: 1009, name: 'Slack' },
          { id: 1010, name: 'Mailchimp' },
          { id: 1011, name: 'HubSpot' },
          { id: 1012, name: 'Canva' },
          { id: 1013, name: 'Amplitude' },
          { id: 1014, name: 'Mixpanel' },
          { id: 1015, name: 'Excel' },
        ],
      },
      {
        field: { id: 200, name: '예술' },
        skills: [
          { id: 2001, name: 'Premiere Pro' },
          { id: 2002, name: 'After Effects' },
          { id: 2003, name: 'DaVinci Resolve' },
          { id: 2004, name: 'Lightroom' },
          { id: 2005, name: 'Photoshop' },
          { id: 2006, name: 'Ableton Live' },
          { id: 2007, name: 'Logic Pro' },
          { id: 2008, name: 'Pro Tools' },
          { id: 2009, name: 'Storyboard' },
          { id: 2010, name: 'Lighting Design' },
        ],
      },
      {
        field: { id: 300, name: '개발' },
        skills: [
          { id: 3001, name: 'React' },
          { id: 3002, name: 'TypeScript' },
          { id: 3003, name: 'JavaScript' },
          { id: 3004, name: 'Next.js' },
          { id: 3005, name: 'Vanilla Extract' },
          { id: 3006, name: 'Node.js' },
          { id: 3007, name: 'NestJS' },
          { id: 3008, name: 'Spring Boot' },
          { id: 3009, name: 'MySQL' },
          { id: 3010, name: 'MongoDB' },
          { id: 3011, name: 'React Native' },
          { id: 3012, name: 'Flutter' },
          { id: 3013, name: 'Python' },
          { id: 3014, name: 'FastAPI' },
          { id: 3015, name: 'PyTorch' },
          { id: 3016, name: 'TensorFlow' },
          { id: 3017, name: 'Arduino' },
          { id: 3018, name: 'Raspberry Pi' },
          { id: 3019, name: 'C' },
          { id: 3020, name: 'C++' },
        ],
      },
      {
        field: { id: 400, name: '디자인' },
        skills: [
          { id: 4001, name: 'Figma' },
          { id: 4002, name: 'Photoshop' },
          { id: 4003, name: 'Illustrator' },
          { id: 4004, name: 'After Effects' },
          { id: 4005, name: 'Framer' },
          { id: 4006, name: 'ProtoPie' },
          { id: 4007, name: 'Indesign' },
          { id: 4008, name: 'Blender' },
          { id: 4009, name: 'Design System' },
          { id: 4010, name: 'Typography' },
        ],
      },
    ],
  },
};

import { BiChurch } from 'react-icons/bi';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiGuideLine } from 'react-icons/ri';

const links = [
  { id: 1, text: '교회소개', path: 'intro-church', icon: <BiChurch /> },
  {
    id: 2,
    text: '담임목사소개',
    path: 'intro-senior-pastor',
    icon: <BsFillFileEarmarkPersonFill />,
  },
  {
    id: 3,
    text: '원로목사소개',
    path: 'intro-old-pastor',
    icon: <BsFileEarmarkPerson />,
  },
  {
    id: 4,
    text: '섬기는 분',
    path: 'intro-worship-people',
    icon: <BsFillPeopleFill />,
  },
  {
    id: 5,
    text: '안내',
    path: 'intro-worship-people',
    icon: <RiGuideLine />,
  },
];

export default links;

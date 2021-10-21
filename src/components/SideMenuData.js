import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: 'Me',
        path: '#me',
        icon: <BsIcons.BsFillPersonLinesFill />,
        cname: 'nav-text'
    },
    {
        title: 'Experience',
        path: '#experience',
        icon: <MdIcons.MdWork />,
        cname: 'nav-text',
    },
    {
        title: 'Education',
        path: '#education',
        icon: <MdIcons.MdSchool />,
        cname: 'nav-text',
    },
    {
        title: 'Skills',
        path: '#skills',
        icon: <FaIcons.FaToolbox />,
        cname: 'nav-text',
    },
    {
        title: 'Languages',
        path: '#languages',
        icon: <FaIcons.FaLanguage />,
        cname: 'nav-text',
    },
    {
        title: 'Contact',
        path: '#contact',
        icon: <FaIcons.FaUserPlus />,
        cname: 'nav-text',
    },
];
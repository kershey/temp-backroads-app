import img1 from './images/tour-1.jpeg';
import img2 from './images/tour-2.jpeg';
import img3 from './images/tour-3.jpeg';

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.squarespace.com',
    icon: 'fab fa-squarespace',
  },
];

<article className='service'>
  <span className='service-icon'>
    <i className='fas fa-wallet fa-fw'></i>
  </span>
  <div className='service-info'>
    <h4 className='service-title'>saving money</h4>
    <p className='service-text'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
      officia.
    </p>
  </div>
</article>;

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: 'from $2100',
  },
  {
    id: 2,
    img: img2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis',
    location: 'indonesia',
    duration: '11 days',
    cost: 'from $1400',
  },
  {
    id: 3,
    img: img3,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '20 days',
    cost: 'from $3300',
  },
];

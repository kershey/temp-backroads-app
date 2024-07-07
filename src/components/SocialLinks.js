import { socialLinks } from '../data';
import SocialLink from './SocialLink';
const SocialLinks = () => {
  return (
    <ul className='nav-icons'>
      {socialLinks.map((link) => {
        // const { id, href, icon } = link;
        return <SocialLink key={link.id} {...link} itemClass='nav-icon' />;
      })}
    </ul>
  );
};
export default SocialLinks;

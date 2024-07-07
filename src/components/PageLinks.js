import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((links) => {
        return <PageLink key={links.id} {...links} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default PageLinks;

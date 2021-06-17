// @ts-nocheck
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MainNavigationProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MainNavigation = (props: MainNavigationProps): JSX.Element => (
  <nav id="topNav" className="header__container__content__menu">
    <a href="#">Schedule</a>
    <a href="#">Speakers</a>
    <a href="#">Vendors</a>
    <a href="#">Map</a>
    <a href="#">Shop</a>
    <a href="#">News</a>
    <a href="#" className="btn--main">
      Book Tickets
    </a>
  </nav>
);

export default MainNavigation;
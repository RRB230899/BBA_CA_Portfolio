import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import Logo from './partials/Logo';

const propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  location: PropTypes.object.isRequired
};

const defaultProps = {
  active: false,
  navPosition: '',
  hideNav: false,
  bottomOuterDivider: false,
  bottomDivider: false
};

class Header extends React.Component {
  state = {
    isActive: false,
    showScrollTop: false
  };

  nav = React.createRef();
  hamburger = React.createRef();

  componentDidMount() {
    this.props.active && this.openMenu();
    document.addEventListener('keydown', this.keyPress);
    document.addEventListener('click', this.clickOutside);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress);
    document.removeEventListener('click', this.clickOutside);
    window.removeEventListener('scroll', this.handleScroll);
    this.closeMenu();
  }

  openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    this.nav.current.style.maxHeight = this.nav.current.scrollHeight + 'px';
    this.setState({ isActive: true });
  }

  closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    this.nav.current && (this.nav.current.style.maxHeight = null);
    this.setState({ isActive: false });
  }

  keyPress = (e) => {
    this.state.isActive && e.keyCode === 27 && this.closeMenu();
  }

  clickOutside = (e) => {
    if (!this.nav.current) return;
    if (!this.state.isActive || this.nav.current.contains(e.target) || e.target === this.hamburger.current) return;
    this.closeMenu();
  }

  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({ showScrollTop: scrollTop > 200 });
  }

  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 50; // adjust if your header height changes
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      this.closeMenu();
    }
  }

  navigateOrScroll = (id) => {
    if (window.location.pathname === '/') {
      // Already on home page: scroll directly
      this.scrollToSection(id);
    } else {
      // Navigate to home page first, then scroll
      window.location.href = `/#${id}`;
    }
  }

  render() {
    const { className, navPosition, hideNav, bottomOuterDivider, bottomDivider, location, ...props } = this.props;
    const isHomePage = location.pathname === '/';
    const isSecondaryPage = location.pathname === '/secondary';

    const classes = classNames(
      'site-header',
      bottomOuterDivider && 'has-bottom-divider',
      className
    );

    return (
      <>
        <header {...props} className={classes}>
          <div className="container">
            <div className={classNames('site-header-inner', bottomDivider && 'has-bottom-divider')}>
              <Logo />
              {!hideNav && (
                <>
                  <button
                    ref={this.hamburger}
                    className="header-nav-toggle"
                    onClick={this.state.isActive ? this.closeMenu : this.openMenu}
                  >
                    <span className="screen-reader">Menu</span>
                    <span className="hamburger">
                      <span className="hamburger-inner"></span>
                    </span>
                  </button>
                  <nav ref={this.nav} className={classNames('header-nav', this.state.isActive && 'is-active')}>
                    <div className="header-nav-inner">
                      <ul className={classNames('list-reset text-xs', navPosition && `header-nav-${navPosition}`)}>
                        {/* Home link only on secondary page */}
                        {isSecondaryPage && (
                          <li>
                            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
                          </li>
                        )}

                        {/* About and Services: clickable from any page */}
                        <li>
                          <a href="/#about" onClick={(e) => { e.preventDefault(); this.navigateOrScroll('about'); }}>About</a>
                        </li>
                        <li>
                          <a href="/#services" onClick={(e) => { e.preventDefault(); this.navigateOrScroll('services'); }}>Services</a>
                        </li>

                        {/* Contact: scroll on the same page */}
                        <li>
                          <a href="#contact" onClick={(e) => { e.preventDefault(); this.scrollToSection('contact'); }}>Contact</a>
                        </li>

                        {/* Testimonials and Team: secondary page */}
                        <li>
                          <a href="/secondary#testimonials" onClick={(e) => { e.preventDefault(); window.location.href = '/secondary#testimonials'; }}>Testimonials</a>
                        </li>
                        <li>
                          <a href="/secondary#team" onClick={(e) => { e.preventDefault(); window.location.href = '/secondary#team'; }}>Team</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Scroll to Top Button */}
        {this.state.showScrollTop && (
          <button
            className="scroll-to-top"
            onClick={this.scrollToTop}
          >
            ↑
          </button>
        )}
      </>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default withRouter(Header);

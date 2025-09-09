import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Team extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Get to know us',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/Rohit_Bajaj_Team.png')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      CA Rohit Rajkumar Bajaj
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      B.Com, FCA
                    </div>
                    <p className="m-0 text-sm">
                    Mr. Rohit Bajaj, a member of ICAI since 2015 (Membership No. 168078), is a seasoned expert in Income Tax with extensive experience in audits for both corporate and non-corporate clients. A graduate of Nagpur University, he not only handles complex tax cases but also serves as a trusted financial advisor, guiding clients through critical financial decisions. Beyond his technical expertise, he plays a key role in strengthening client relationships and driving the firm’s growth, making him an invaluable asset to both the firm and its clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/Shaanu_Team.png')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      CA Shanu Amol Bose
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      B.Com, FCA
                    </div>
                    <p className="m-0 text-sm">
                    Mr. Shanu Bose, an ICAI member since 2015 (Membership No. 169835), is a seasoned expert in audits, including Statutory, Tax, Internal, and Bank Audits. A graduate of Nagpur University, he also specializes in GST compliance, helping businesses navigate complex regulations effortlessly. His sharp analytical skills and deep industry knowledge make him a trusted advisor in financial audits and taxation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/Rakesh_Team.png')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      CA Rakesh Raju Agrawal
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      B.Com, FCA, D.I.S.A., F.A.T.A.
                    </div>
                    <p className="m-0 text-sm">
                    Mr. Rakesh Agrawal, a member of ICAI since 2019 (Membership No. 188459), efficiently manages the day-to-day operations of the firm, ensuring timely and high-quality service delivery to clients. A graduate of Nagpur University, he has also completed the Certificate Course on Concurrent Audit of Banks by ICAI, further strengthening his expertise in audit and financial operations. His dedication and organizational skills make him a key contributor to the firm’s success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    {/* <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/Rohit_Bajaj_Team.png')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div> */}
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Sachin Belorkar
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      B.Com, LLB
                    </div>
                    <p className="m-0 text-sm">
                    Mr. Sachin Belorkar, an esteemed Associate with over 11 years of experience, is a seasoned expert in Labour Law, specializing in compliance with the Establishment Compliance, Factory Act, BOCW Act, EPF Act, ESIC Act, Contract Labour Act, Gratuity Act, and Bonus Act. He has successfully managed over 200 government audits and inspections, bringing practical knowledge and strategic insight to our team. Mr. Belorkar oversees our firm’s labour law compliance operations, ensuring seamless regulatory adherence and safeguarding client interests. His dedication to excellence makes him a pivotal part of our firm's trusted reputation in labour law.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    {/* <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/Rohit_Bajaj_Team.png')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div> */}
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Tejram Padole
                    </h5>
                    <div className="team-item-role text-xs fw-600 mb-8">
                      CS
                    </div>
                    <p className="m-0 text-sm">
                    Mr. Tejram P., an esteemed Associate and an Associate Member of ICSI, holds a B.Com from Nagpur University and specializes in Company Law, SEBI Regulations, and the LLP Act. With expertise in Secretarial Audit, he ensures businesses adhere to corporate governance standards. Known for his meticulous approach to regulatory compliance, Mr. Tejram also provides strategic investment insights in equities. Since joining ICSI, his dedication to excellence and client success has made him a trusted advisor and valuable asset to our firm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
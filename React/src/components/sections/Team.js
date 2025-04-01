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
                      Mr. Rohit Bajaj has been enrolled as a member of ICAI
                      in the year 2015 with Membership No. 168078. He has
                      done his graduation from Nagpur University.
                      He has been involved in the audit of major corporate and
                      non-corporate clients. He is an expert in Income Tax
                      matters having rich experience in the field. He also
                      handles Income Tax related cases.
                      He is majorly concerned with maintaining public
                      relations and ensuring profile growth of the firm.
                      Additionally, he also holds experience as a financial
                      advisor/consultant of our clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-02.jpg')}
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
                      Mr. Shanu Bose has been enrolled as a member of ICAI
                      in the year 2015 with Membership No. 169835. He has
                      done his graduation from Nagpur University.
                      He has rich experience in various types of audit which
                      includes Statutory Audit, Concurrent Audit, Tax Audit,
                      Internal Audit, Co-operative Society Audit, Bank Audits
                      etc.
                      He also has expert knowledge about the newly
                      introduced Goods & Services Tax (GST).
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/team-member-03.jpg')}
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
                      Mr. Rakesh Agrawal has been enrolled as a member of
                      ICAI in the year 2019 with Membership No. 188459. He
                      has done his graduation from Nagpur University.
                      He has been handling the day-to-day working of the firm
                      efficiently and ensuring timely delivery of quality service
                      to our clients.
                      He has completed Certificate Course on Concurrent
                      Audit of Banks conducted by ICAI.
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
                      B.Com, FCA
                    </div>
                    <p className="m-0 text-sm">
                      Mr. Sachin Belorkar, an esteemed Associate with our firm, whose expertise in Labour Law
                      serves as a cornerstone in ensuring meticulous compliance with various statutory regulations.
                      With a rich experience spanning over 11 years, Mr. Singh is a seasoned expert in navigating the
                      intricacies of labor laws, including Establishment Compliance, Factory Act, BOCW Act, EPF Act,
                      ESIC Act, Contract Labour Act, Gratuity Act, and Bonus Act.
                      Having successfully managed and resolved over 200 cases of Government audits and
                      inspections, Mr. Singh brings a wealth of practical knowledge and strategic insight to our team.
                      His adept handling of complex compliance matters reflects his commitment to upholding the
                      highest standards of legal adherence and ethical practice.
                      In his role as an Associate, Mr. Singh oversees the labor law compliance operations of our firm,
                      ensuring seamless adherence to regulatory frameworks and safeguarding the interests of our
                      clients. With his dedication to excellence and unwavering focus on compliance, Mr. Akshaibar
                      Singh plays a pivotal role in fortifying our firm's reputation as a trusted advisor in the realm of
                      labor law.
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
                      Tejram P., an esteemed Associate with our firm, and a distinguished Associate Member of the
                      Institute of Company Secretaries of India (ICSI). With a solid foundation in commerce, holding a
                      B.Com degree from Kerala University, Mr. Pranesh brings forth a wealth of expertise in
                      Company Law, SEBI Regulations, and the LLP Act.
                      Mr. Pranesh has established himself as a trusted authority in the field of corporate governance
                      and compliance. His meticulous approach to navigating complex regulatory frameworks has
                      earned him recognition as a leading practitioner in Trivandrum, India.
                      With specialized skills in Secretarial Audit, Mr. Pranesh ensures that businesses adhere to
                      stringent corporate governance standards, safeguarding their legal and ethical integrity.
                      Additionally, his adeptness in providing investment opportunities in equities underscores his
                      holistic approach to client service, offering strategic insights beyond regulatory compliance.
                      Since joining the Institute of Company Secretaries of India in March 2020, Mr. Pranesh has
                      demonstrated a steadfast commitment to excellence, reflected in his membership. His
                      dedication to professional development and his unwavering focus on client success make him
                      a valuable asset to our firm and a trusted advisor to our esteemed clientele.
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
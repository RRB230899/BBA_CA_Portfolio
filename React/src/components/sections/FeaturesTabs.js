import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Tabs, { TabList, Tab, TabPanel } from './../elements/Tabs';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class FeaturesTabs extends React.Component {

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
      'features-tabs section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tabs-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Built exclusively for you',
      paragraph: "It's a one stop destination. You name it, we've got it. From Financial Audits, Risk Assessments, and Performance Reporting, to Compliance, planning, and global tax solutions, Digital transformation, business process optimization, and technology strategy, Mergers, acquisitions, and risk management consulting, ESG strategy, sustainable finance, and climate impact solutions."
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Tabs active="tab-a">
              <TabList>
                <Tab tabId="tab-a">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-01.svg').default}
                      alt="Tab icon 01"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Assurance Services
                  </div>
                </Tab>
                <Tab tabId="tab-b">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-02.svg').default}
                      alt="Tab icon 02"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Tax Advisory
                  </div>                  
                </Tab>
                <Tab tabId="tab-c">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-03.svg').default}
                      alt="Tab icon 03"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Consultancy
                  </div>                  
                </Tab>
                <Tab tabId="tab-d">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-04.svg').default}
                      alt="Tab icon 04"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Advisory Services
                  </div>
                </Tab> 
                <Tab tabId="tab-e">
                  <div className="features-tabs-tab-image mb-12">
                    <Image
                      src={require('./../../assets/images/features-tabs-icon-04.svg').default}
                      alt="Tab icon 05"
                      width={56}
                      height={56} />
                  </div>
                  <div className="text-color-high fw-600 text-sm">
                    Sustainability Advisory
                  </div>
                </Tab>               
              </TabList>
              <TabPanel id="tab-a">
                {/* <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 01"
                  width={896}
                  height={504} /> */}
              </TabPanel>
              <TabPanel id="tab-b">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 02"
                  width={896}
                  height={504} />
              </TabPanel>
              <TabPanel id="tab-c">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 03"
                  width={896}
                  height={504} />
              </TabPanel>
              <TabPanel id="tab-d">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 04"
                  width={896}
                  height={504} />
              </TabPanel>
              <TabPanel id="tab-e">
                <Image
                  className="has-shadow"
                  src={require('./../../assets/images/features-tabs-image.png')}
                  alt="Features tabs image 04"
                  width={896}
                  height={504} />
              </TabPanel>              
            </Tabs>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTabs.propTypes = propTypes;
FeaturesTabs.defaultProps = defaultProps;

export default FeaturesTabs;
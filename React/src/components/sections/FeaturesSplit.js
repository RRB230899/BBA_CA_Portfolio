import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Our Approach to Excellence',
      paragraph: 'BBA & Associates delivers high-quality professional services with integrity, confidentiality, and practical expertise to help businesses operate efficiently and compliantly in India.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Audit & Compliance
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Conduct statutory audits, internal audits, and compliance reviews for Indian businesses, ensuring adherence to laws like GST, Companies Act, and income tax regulations.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/Audit&Compliance.jpg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Tax Advisory
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Provide expert advice on GST, corporate tax planning, and income tax optimization, helping Indian companies legally minimize tax liabilities and maintain cash flow efficiency.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/Tax Advisory.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-container=".split-item">
                    Virtual CFO Services
                  </h3>
                  <p className="m-0 reveal-from-bottom" data-reveal-delay="100" data-reveal-container=".split-item">
                    Act as your outsourced CFO, managing accounting, cash flow, financial planning, and reporting, enabling Indian SMEs and corporates to make informed business decisions.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/Virtual CFO Services.jpg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
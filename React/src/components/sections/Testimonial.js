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

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Testimonials',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} tag="h1" className="center-content invert-color" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    {/* <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-01.jpg')}
                        alt="Testimonial 01"
                        width={48}
                        height={48} />
                    </div> */}
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                    "Expanding to India brought unexpected challenges, especially with regulatory requirements. BBA and Associates quickly identified a workaround for an environmental clearance, securing it in just a week. They also helped us access tax incentives, cutting our setup costs by 12%. Thanks to their expertise and proactive support, our operations in India are running smoothly. BBA and Associates were an invaluable partner in our expansion."
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link fw-600">
                    — Lighting & Energy Conservation Australia Pty Ltd
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    {/* <div className="testimonial-item-image"> */}
                      {/* <Image
                        src={require('./../../assets/images/testimonial-image-02.jpg')}
                        alt="Testimonial 02"
                        width={48}
                        height={48} /> */}
                    {/* </div> */}
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      "Setting up our subsidiary in India seemed daunting, but BBA and Associates handled everything seamlessly. From company registration to regulatory compliance, they navigated every challenge with precision. They expedited key approvals, ensured tax compliance, and streamlined legal formalities, saving us both time and costs. With their support, our India operations are fully functional without hassle. BBA and Associates are truly the go-to partners for international businesses."
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link fw-600">
                      — NX Gen Inventors LLP (Australia Subsidiary)
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-container=".tiles-wrap" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-16">
                    {/* <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/testimonial-image-03.jpg')}
                        alt="Testimonial 03"
                        width={48}
                        height={48} />
                    </div> */}
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      "Managing finances efficiently was crucial for our growth, and BBA and Associates provided expert guidance. They optimized our financial structure, secured cost-effective funding options, and ensured compliance with all regulations. Their strategic advice helped improve cash flow and reduce financial risks. We now operate with greater financial stability and confidence. BBA and Associates are invaluable partners in financial consultancy."
                    </p>
                  </div>
                  <div className="testimonial-item-footer text-xs fw-500 mt-32 mb-0 has-top-divider">
                    <span className="testimonial-item-link fw-600">
                    — Ashirwad Industries Pvt. Ltd. (Nagpur)
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
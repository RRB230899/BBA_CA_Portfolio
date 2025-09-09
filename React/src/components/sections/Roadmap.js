import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Roadmap',
      // paragraph: 'Founded by CA Rohit Bajaj and CA Shanu Bose in 2017'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="2017">
                Founded by CA Rohit Bajaj and CA Shanu Bose. Initial focus on auditing, tax advisory, and compliance services.
              </TimelineItem>
              <TimelineItem title="2018">
                Onboarded first key clients in auditing, tax advisory, and compliance services, establishing strong foundational processes.
              </TimelineItem>
              <TimelineItem title="2019">
                The working horizon of the firm got new dimensions with the joining of CA Rakesh Agrawal.
              </TimelineItem>
              <TimelineItem title="2019">  
                Launched consultancy services including business process optimization and regulatory compliance for domestic and overseas clients.
              </TimelineItem> 
              <TimelineItem title="2021">
                Launched sustainability and advisory services to assist clients with compliance in emerging regulatory frameworks such as GST, RERA, and other nation-building initiatives.
              </TimelineItem>
              <TimelineItem title="2025">
                Focus on becoming a one-stop destination for clients by providing unmatched professional services, upholding ICAI principles, and contributing to nation-building through skilled application of expertise.
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
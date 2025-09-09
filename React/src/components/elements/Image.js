import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string // optional placeholder src
}

const defaultProps = {
  src: undefined,
  width: undefined,
  height: undefined,
  alt: undefined,
  className: '',
  placeholder: ''
}

class Image extends React.Component {
  state = {
    isLoaded: false,
    currentSrc: this.props.placeholder || this.props.src
  };

  handleLoad = () => {
    const { placeholder, src } = this.props;
    if (placeholder && !this.state.isLoaded) {
      // Switch from placeholder to real image
      this.setState({ currentSrc: src });
    }
    this.setState({ isLoaded: true });
  }

  render() {
    const { width, height, alt, className, ...props } = this.props;
    const { currentSrc } = this.state;

    return (
      <img
        {...props}
        src={currentSrc}
        width={width}
        height={height}
        alt={alt}
        className={className}
        onLoad={this.handleLoad}
      />
    );
  }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;

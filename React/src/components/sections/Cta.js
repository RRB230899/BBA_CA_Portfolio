import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import axios from 'axios';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Email regex (basic but reliable)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    // Client-side validation
    if (!formData.name.trim()) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Message cannot be empty');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        'https://bba-ca-portfolio.onrender.com/contact',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess(`Thank you, ${res.data.name}. We will contact you shortly.`);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(''), 5000);
    } catch (err) {
      setError(err.response?.data?.detail || 'Something went wrong!');
      setTimeout(() => setError(''), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section {...props} className={outerClasses} id="contact">
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Get in touch!</h3>
          </div>
          <form className="cta-action" onSubmit={handleSubmit} noValidate>
            <div className="form-group mb-16">
              <Input
                id="name"
                name="name"
                type="text"
                label="Name"
                labelHidden
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-16">
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                labelHidden
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group mb-16">
              <textarea
                id="message"
                name="message"
                className="contact-input"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="button"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>

            {success && <p className="success">{success}</p>}
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;

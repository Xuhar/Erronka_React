import React, { useState } from 'react';

const FIELD_CONFIG = {
  name: {
    label: 'Name',
    type: 'text',
    placeholder: 'Enter name',
    required: true
  },
  email: {
    label: 'Email address',
    type: 'email',
    placeholder: 'Enter email',
    required: true,
    helpText: "We'll never share your email with anyone else."
  },
  message: {
    label: 'Message',
    type: 'textarea',
    placeholder: 'Write your message here...',
    rows: 5,
    required: true,
    className: 'msg'
  },
  terms: {
    label: 'Check me out',
    type: 'checkbox'
  },
  username: {
    label: 'Name or email',
    type: 'text',
    placeholder: 'Enter you name or email',
    required: true
  },
  password: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    required: true
  }
};

const Form = ({ fields = [], onSubmit, title, secondaryButton, submitText = "Send", className = "" }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const config = FIELD_CONFIG[fieldName];
    
    if (config.required && !value) {
      return `${config.label} is required`;
    }
    
    if (config.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }
    
    return null;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    const error = validateField(name, fieldValue);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    let isValid = true;

    fields.forEach(fieldName => {
      const value = formData[fieldName];
      const error = validateField(fieldName, value);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid && onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className={`contact-form ${className}`}>
      {title && <h1 className="text-center">{title}</h1>}
      
      {fields.map((fieldName) => {
        const field = FIELD_CONFIG[fieldName];
        
        return (
          <div key={fieldName} className={`form-group my-2 ${field.className || ''}`}>
            {field.type === 'checkbox' ? (
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={fieldName}
                  name={fieldName}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={fieldName}>
                  {field.label}
                </label>
              </div>
            ) : (
              <>
                <label 
                  className={field.required ? 'required-label' : ''} 
                  htmlFor={fieldName}
                >
                  {field.label}
                </label>
                
                {field.type === 'textarea' ? (
                  <textarea
                    className="form-control"
                    id={fieldName}
                    name={fieldName}
                    rows={field.rows || 3}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    value={formData[fieldName] || ''}
                  />
                ) : (
                  <input
                    type={field.type}
                    className="form-control"
                    id={fieldName}
                    name={fieldName}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    value={formData[fieldName] || ''}
                    aria-describedby={field.helpText ? `${fieldName}Help` : undefined}
                  />
                )}
                
                {field.helpText && (
                  <small id={`${fieldName}Help`} className="form-text text-muted">
                    {field.helpText}
                  </small>
                )}
                
                {errors[fieldName] && (
                  <small className="form-text text-danger">
                    {errors[fieldName]}
                  </small>
                )}
              </>
            )}
          </div>
        );
      })}
      
      <div className={secondaryButton ? "regist" : ""}>
        {secondaryButton && (
          <a href={secondaryButton.href} className="btn btn-secondary">
            {secondaryButton.text}
          </a>
        )}
        <button type="button" onClick={handleSubmit} className="btn btn-primary">
          {submitText}
        </button>
      </div>
    </div>
  );
};

export default Form;
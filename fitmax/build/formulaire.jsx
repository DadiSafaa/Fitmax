import React, { useState } from 'react';

const SignInForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        age: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to the server
        console.log(formData);
    };

    return (
        <form id='contactform' onSubmit={handleSubmit}>
            <ul className="form-cover">
                <li className="inp-name">
                    <label>Name * (required)</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </li>
                <li className="inp-email">
                    <label>E-mail * (required)</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </li>
                <li className="inp-password">
                    <label>Password * (required)</label>
                    <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                </li>
                <li className="inp-phone">
                    <label>Phone Number * (required)</label>
                    <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                </li>
                <li className="inp-gender">
                    <label>Gender * (required)</label>
                    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </li>
                <li className="inp-age">
                    <label>Age * (required)</label>
                    <input id="age" type="number" name="age" value={formData.age} onChange={handleChange} required />
                </li>
            </ul>
            <div className="checkbox-wrap">
                <div className="checkbox-cover">
                    <input type="checkbox" required />
                    <p>By using this form you agree with the storage and handling of your data by this website.</p>
                </div>
            </div>
            <div className="btn-form-cover">
                <button id="#submit" type="submit" className="btn">Submit</button>
            </div>
        </form>
    );
};

export default SignInForm;

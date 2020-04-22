import React from 'react'
import './mkPay.css'
import useInput from './hooks/input-hook'

const FormPayment = (props) => {


    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');
    const [email, bindEmail, resetEmail] = useInput('');
    const [password, bindPassword, resetPassword] = useInput('');
    const [gender, bindGender, resetGender] = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Submitting Name ${firstName} ${lastName} ${email} ${password} ${gender}`);
        resetFirstName();
        resetLastName();
        resetEmail();
        resetPassword();
        resetGender();
    }

    return (
        <div className="form-wrapper">
            <h1>Make Payment</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        {...bindFirstName}
                    />

                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        placeholder="Last Name"
                        type="text"
                        name="lastName"
                        {...bindLastName}
                    />

                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        {...bindEmail}
                    />

                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        placeholder="Password"
                        type="password"
                        name="password"
                        {...bindPassword}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Gender</label>
                    <select
                        {...bindGender}
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="createAccount">
                    <button type="submit">Pay with Click!</button>
                    <small>Already Have an Account?</small>
                </div>
            </form>
        </div>
    )
}
export default FormPayment;
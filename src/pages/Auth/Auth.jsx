import React from 'react';
import { useForm } from 'react-hook-form';

export default function Auth() {
    const [newAccount, setNewAccount] = React.useState(false);
    const onSubmit = data => {
        if (newAccount) {

        }
    }
    const { register, handleSubmit, errors } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email"
                       placeholder="Email"
                       {...register("email", { required: true })}
                       required
                />
                { errors.email && <span role="alert">Field is required!</span> }
                <input type="password"
                       placeholder="Password"
                       {...register("password", { required: true })}
                       required
                />
                { errors.password && <span role="alert">Max length exceeded</span> }
                <button type="submit">
                    { newAccount ? "Create Account" : "Log in"}
                </button>
            </form>
            <div>
                <button type="button">Continue with google</button>
                <button type="button">Continue with github</button>
            </div>
        </>
    )
}


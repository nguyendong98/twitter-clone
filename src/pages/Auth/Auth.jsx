import React from 'react';
import { useForm } from 'react-hook-form';
import { authService, firebaseInstance } from 'fbase';

export default function Auth() {
    const [newAccount, setNewAccount] = React.useState(true);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async data => {
        try {
            if (newAccount) {
                console.log(data)
                await authService.createUserWithEmailAndPassword(data.email, data.password);
            } else await authService.signInWithEmailAndPassword(data.email, data.password);
        } catch (e) {
            console.log(e);
        }

    }
    const onSocialClick = async e => {
        let provider;
        if (e.target.name === 'google') {
            provider = new firebaseInstance.auth.GoogleAuthProvider()
        } else {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Email"
                       {...register("email", {
                           required: "Email is required!",
                           })}
                />
                { errors.email && <small>{errors.email.message}</small> }
                <input type="password"
                       placeholder="Password"
                       {...register('password', { required: "Password is required!" })}

                />
                { errors.password  && <small>{errors.password.message}</small> }
                <button type="submit">
                    { newAccount ? "Create Account" : "Log in"}
                </button>
            </form>
            <div>
                <button type="button" name="google" onClick={onSocialClick}>Continue with google</button>
                <button type="button" name="github" onClick={onSocialClick}>Continue with github</button>
            </div>
        </>
    )
}


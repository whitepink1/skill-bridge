import {redirect} from 'next/navigation';

export default function AuthPage() {
    //checking isAuth
    redirect('/auth/sign-in');
};
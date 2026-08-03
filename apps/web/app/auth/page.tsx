import {redirect} from 'next/navigation';

export default function AuthPage() {
    //checking isAuth
    return redirect('/auth/sign-in');
};
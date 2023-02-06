import { useRouter } from 'next/router';

const ProfilePage = () => {
    const { userID } = useRouter().query;
    return (
        <main>
            <h1>Profile Page for {userID}</h1>
        </main>
    )
}; 

export default ProfilePage;
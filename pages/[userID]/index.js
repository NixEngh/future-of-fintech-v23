import { useRouter } from 'next/router';
import { Header } from "../../components/Header";

const ProfilePage = () => {
    const { userID } = useRouter().query;
    return (
        <main>
            <Header />
            <h1>Profile Page for {userID}</h1>
        </main>
    )
}; 

export default ProfilePage;
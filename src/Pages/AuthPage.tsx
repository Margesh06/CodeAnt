import Leftside from "../Components/Signin/Leftside.tsx"
import Rightside from "../Components/Signin/Rightside.tsx";
const AuthPage = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <Leftside />
            <Rightside />
        </div>
    );
};

export default AuthPage;
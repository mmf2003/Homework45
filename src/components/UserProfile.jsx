import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/appSlice";

function UserProfile() {
    const user = useSelector(selectUser);

    return (
        <div className="user-profile">
            <h3>User Profile</h3>

            <p>
                <strong>Name:</strong> {user.name}
            </p>

            <p>
                <strong>Email:</strong> {user.email}
            </p>

            <p>
                <strong>Role:</strong> {user.role}
            </p>
        </div>
    );
}

export default UserProfile;

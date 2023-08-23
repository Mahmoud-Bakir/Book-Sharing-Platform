import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.svg";
import "./style.css";
import "../ProfileHeader/style.css";

const ProfileHeader = ({user}) => {
  const navigater = useNavigate()
  const logout = () => navigater("/");
  const handleLogout =  () => {
    localStorage.clear()
    logout()
  }

  return (
    <>
      <div className="profile-head">
        <div className="profile-image">
          <img src={profile} alt="" />
        </div>
        <div className="details-container">
          {user ? (
            <>
              <div className="profile-details">
                <span>{user.first_name} {user.last_name}</span>
              </div>
              <div className="profile-details">
                {user.books && (
                  <span>Posts : {user.books.length}</span>
                )}
                {user.followers && (
                  <span>Followers : {user.followers.length} </span>
                )}
                {user.following && (
                  <span>Following : {user.following.length} </span>
                )}
              </div>
              <div className="profile-details">
                <button className="button-profile" onClick={handleLogout}>
                  Sign out
                </button>
              </div>
            </>
          ) : (
            <p>Loading user profile...</p>
          )}
        </div>
      </div>
    </>
    )}
  export default ProfileHeader

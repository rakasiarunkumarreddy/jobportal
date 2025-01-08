import React, { useState, useEffect } from "react";
import { db2, ref, get, update } from "../../firebase";
import { storage, uploadBytes, getDownloadURL } from "../../firebase";
import "./ProfilePage.css";
import NavbarComp from "../dashborad/navbar";
import FooterComp from "../dashborad/footer";

function ProfilePage() {
  const storedProfile = localStorage.getItem("userProfile");
  const userContext = storedProfile ? JSON.parse(storedProfile) : null;

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    profilePic: "",
  });
  const [profilePic, setProfilePic] = useState(null);
  const [previewPic, setPreviewPic] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userContext && userContext.email) {
        const dbRef = ref(db2, "hiringpartner");
        const snapshot = await get(dbRef);
        const data = snapshot.val();

        const user = Object.values(data).find(
          (item) => item.email === userContext.email
        );

        if (user) {
          console.log("Fetched user details:", user);
          setUserDetails(user);
          setPreviewPic(user.profilePic || "");
        }
      }
    };

    fetchUserData();
  }, [userContext]);

  useEffect(() => {
    console.log("Updated userDetails:", userDetails);
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setPreviewPic(URL.createObjectURL(file));
    }
  };

  const handleProfilePicUpload = async () => {
    if (profilePic) {
      try {
        const storageRef = ref(storage, `profile_pics/${userContext.email}`);
        await uploadBytes(storageRef, profilePic);
        const downloadURL = await getDownloadURL(storageRef);
        userDetails.profilePic = downloadURL;
        await update(ref(db2, `hiringpartner/${userContext.email}`), {
          profilePic: downloadURL,
        });
        setPreviewPic(downloadURL);
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    try {
      await update(ref(db2, `hiringpartner/${userContext.email}`), userDetails);
      await handleProfilePicUpload();
      setIsEditing(false);
      localStorage.setItem("userProfile", JSON.stringify(userDetails));
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user details:", error);
      setMessage("Error updating profile. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <>
      <NavbarComp />
      <div className="profile-body">
        <div className="profile-page">
          <div className="profile-header">
            <h2>Profile Page</h2>
          </div>

          <div className="profile-container">
            <div className="profile-sidebar">
              <img
                src={previewPic || "https://via.placeholder.com/150"}
                alt="Profile"
                className="profile-picture"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </div>

            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                  pattern="[0-9]{10}"
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  value={userDetails.role}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company Name:</label>
                <input
                  type="text"
                  name="company"
                  value={userDetails.company}
                  onChange={handleChange}
                  disabled={!isEditing}
                  required
                />
              </div>
              {isEditing ? (
                <button type="submit" className="save-btn" disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              ) : (
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </form>
          </div>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default ProfilePage;

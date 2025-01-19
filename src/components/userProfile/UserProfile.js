import "./UserProfile.css";

const UserProfile = () => {
    return (
        <div className="profile-container">
            <aside className="profile-sidebar">
                <ul>
                    <li className="active">
                        <i className="icon"></i> Profile
                    </li>
                    <li>
                        <i className="icon"></i> Projects
                    </li>
                    <li>
                        <i className="icon"></i> Settings
                    </li>
                </ul>
            </aside>
            <main className="profile-details">
                <div className="profile-card">
                    <div className="profile-avatar">
                        <div className="circle">J</div>
                    </div>
                    <h2 className="profile-name">John Snow</h2>
                    <p className="profile-email">johnsnowgot@gmail.com</p>
                    <p className="profile-phone">(321) 456 7898</p>
                    <p className="profile-bio">Lorem ipsum Dolar sit amet sit Dolar amet ipsum</p>
                </div>
            </main>
        </div>
    );
}

export default UserProfile;
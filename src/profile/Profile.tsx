import React from 'react';
import Header from "../header/Header";

interface ProfileProps {
}

interface ProfileState {

}

class Profile extends React.Component<ProfileProps, ProfileState> {

    render(): React.ReactElement {
        return (
            <div>
                <Header />
                Profile
            </div>
        );
    }
}

export default Profile;
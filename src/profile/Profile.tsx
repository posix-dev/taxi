import React from 'react';
import Header from "../header/Header";

interface ProfileProps {
    navigate: (page: string) => void
}

interface ProfileState {

}

class Profile extends React.Component<ProfileProps, ProfileState> {

    render(): React.ReactElement {
        return (
            <div>
                <Header navigate={this.props.navigate}/>
                Profile
            </div>
        );
    }
}

export default Profile;
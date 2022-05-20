import React from 'react';
import { Avatar } from 'primereact/avatar';

const UserImage = () => {
    return (
        <div>
            <div className="grid">
                <div className="col-12 md:col-4">
                    <Avatar image="images/avatar/amyelsner.png" className="mr-2" size="xlarge" shape="circle" />
                </div>
            </div>
        </div>
    );
}
export default UserImage
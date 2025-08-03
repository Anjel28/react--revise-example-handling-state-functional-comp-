import React from 'react';

interface IProps{
    profilePhotoUrl: string,
    name: string,
    bio:string,
    friendCount:number,
    coverPhotoUrl:string,
    isVerified?: boolean,
    joinDate?: string,
    location?: string,
    onFollow?: ()=> void,
}
let FunProfile: React.FC<IProps> = ({ profilePhotoUrl, name,bio,  friendCount, coverPhotoUrl='', isVerified=false, location='', joinDate='',onFollow}) => {
 


    return(
        <>
        <div className="container row card p-4">
            <div className="btn btn-success m-2">
                <div className="row card p-4">
 {coverPhotoUrl && (
                    <div className="cover-photo-container mb-3">
                        <img src={coverPhotoUrl} alt={`${name}'s cover`} className="cover-photo w-100" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                    </div>
                    
                )}
                </div>
                </div>

        <div className="profile-info-container">
            <div className="profile-photo-container">
                <div className="btn btn-danger">
                    <div className="row card p-3">
            <img src={profilePhotoUrl} alt={name} className="profilePhoto"></img>
              {isVerified && (
                                    <span className="verified-badge" title="Verified">
                                        ✓
                                    </span>
                                )}
            </div>
            </div>
            </div>
           </div>

            <div className="profile-detail">
                    <div className="btn btn-success mt-3">
                        <div className="row card p-2">
                            <h1 className="profile-name">
                                {name}
                                {isVerified && <span className="ms-2">✓</span>}
                                </h1>
                            {bio && <p className="profile-bio">{bio}</p>}
                            {location && <p className="profile-location">📍 {location}</p>}
                            {joinDate && <p className="join-date">Joined: {joinDate}</p>}
                            <p className="friend-count">Friends: {friendCount}</p>
                            {onFollow && (
                                <button className="btn btn-primary mt-2" onClick={onFollow}>
                                    Follow
                                </button>
                            )}
                        </div>
                    </div>
                </div>

           <div className="profile-nav">
            <div className="btn btn-primary mt-3">
                <div className="row card p-4">
            <nav>
                <ul>
                    <li className="active">
                         Posts

                    </li>
                    <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
            <li>Videos</li>
            <li>More</li>
                </ul>
            </nav>
            </div>
            </div>

           </div>
</div>

        
       
        </>
    )
}


export default FunProfile;
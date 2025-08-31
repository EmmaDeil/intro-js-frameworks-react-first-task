import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, description }) => (
  <div className="profile-card">
    <img src={image} alt={name} className="profile-card__image" />
    <h2 className="profile-card__name">{name}</h2>
    <p className="profile-card__description">{description}</p>
  </div>
);

export default ProfileCard;
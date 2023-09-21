/* eslint-disable react/prop-types */


const ProfileCard = ({ firstName, lastName, dateOfBirth, gender }) => {
  return (
    <div className="bg-white w-1/3 rounded-lg shadow-lg p-6">
        <h1 className="font-bold text-lg text-center mb-5">Student Information</h1>
      <div className="text-gray-600">First name: {firstName}</div>
      <div className="text-gray-600">Last name: {lastName}</div>
      <div className="text-gray-600">Date of Birth: {dateOfBirth}</div>
      <div className="text-gray-600">Gender: {gender}</div>
    </div>
  );
};

export default ProfileCard;
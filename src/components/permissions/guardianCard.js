/* eslint-disable react/prop-types */


const GuardianCard = ({ firstName, lastName, email, phone, relation }) => {
    return (
      <div className="bg-white w-1/3 rounded-lg shadow-lg p-6">
          <h1 className="font-bold text-lg text-center mb-5">Guardian Information</h1>
        <div className="text-gray-600">First name: {firstName}</div>
        <div className="text-gray-600">Last name: {lastName}</div>
        <div className="text-gray-600">Email: {email}</div>
        <div className="text-gray-600">Phone: {phone}</div>
        <div className="text-gray-600">Relationship: {relation}</div>
      </div>
    );
  };
  
  export default GuardianCard;
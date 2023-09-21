import ProfileCard from './dataCard';
import GuardianCard from './guardianCard';
import studentProfile from '../../assets/marie 1.png'
export default function NewPermission(){
    const profileData = {
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: 'January 1, 1990',
        gender: 'Male',
      };
      const guardianData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'doe@example.com',
        phone: '+250788987678',
        relation: 'parent'
      };
    return(
        
        <div className="flex justify-between p-4">
         
          <ProfileCard {...profileData} />
          <GuardianCard {...guardianData} />
          <div className="bg-white w-1/4 rounded-lg shadow-lg p-6">
          <h1 className="font-bold text-lg text-center mb-5">Student Profile</h1>
          <img src={studentProfile} alt='student' className='w-1/2 mx-auto mb-3' />
          <p className="text-center">last updated 3 minutes ago</p>
          </div>
      </div>
    )
}
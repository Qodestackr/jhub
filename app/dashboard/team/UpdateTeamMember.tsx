'use client';
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

const UpdateTeamMember = ({ categories }) => {
  const [category, setCategory] = useState('EXECUTIVE');
  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');
  const [description, setDescription] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleMemberNameChange = (e) => setMemberName(e.target.value);
  const handleMemberRoleChange = (e) => setMemberRole(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTwitterLinkChange = (e) => setTwitterLink(e.target.value);
  const handleFacebookLinkChange = (e) => setFacebookLink(e.target.value);
  const handleLinkedInLinkChange = (e) => setLinkedInLink(e.target.value);

  const handleAddTeamMember = async () => {
    try {
      // Create a new team member object based on the form inputs
      const newTeamMember = {
        memberName,
        memberRole,
        description,
        twitterLink,
        facebookLink,
        linkedInLink
      };

      // Add the new team member to the corresponding category in the existing categories object
      categories[category].push(newTeamMember);

      // Update the Firestore collection with the new team member
      const categoryRef = collection(db, 'teamMembers', category);
      await addDoc(categoryRef, newTeamMember);

      // Log the updated categories object (for demonstration purposes)
      console.log('Updated categories:', categories);

      // You might want to do something after a successful addition, like updating the UI.
    } catch (error) {
      console.error('Error adding team member: ', error.message);
    }
  };

  return (
    <div className="w-full border-stroke dark:border-strokedark">
      {/* ... Other code ... */}
      <div className="md:w-1/2 lg:w-2/3 w-full md:pl-8 mt-4 md:mt-0">
        <div className="w-full  shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Add a New Team Member
          </p>
          {/* ... Other code ... */}
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Member Name
              </label>
              <input
                type="text"
                value={memberName}
                onChange={handleMemberNameChange}
                // ... Other input attributes
              />
            </div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">
                Member Role
              </label>
              <input
                type="text"
                value={memberRole}
                onChange={handleMemberRoleChange}
                // ... Other input attributes
              />
            </div>
            {/* ... Repeat similar code for other fields ... */}
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              onClick={handleAddTeamMember}
              className="mt-9 text-base w-full font-semibold leading-none text-white py-4 px-10 bg-main rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
            >
              Add Team Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTeamMember;

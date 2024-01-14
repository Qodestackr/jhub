'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { AlertDanger, AlertSuccess } from '../../../components/alerts';
import { formatBytes } from '../../../utils';

const TeamMemberForm = () => {
  const [category, setCategory] = useState('EXECUTIVE');
  const [image, setImage] = useState<File | null>(null);
  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');
  const [description, setDescription] = useState('');
  const [twitterLink, setTwitterLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');

  const [addMemberSuccess, setAddMemberSuccess] = useState(false);
  const [addMemberError, setAddMemberError] = useState(false);

  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setImage(file); // For file to send to storage
      setSelectedFile(file); // For preview
    }
  };

  const handleMemberNameChange = (e: any) => setMemberName(e.target.value);
  const handleMemberRoleChange = (e: any) => setMemberRole(e.target.value);
  const handleDescriptionChange = (e: any) => setDescription(e.target.value);
  const handleTwitterLinkChange = (e: any) => setTwitterLink(e.target.value);
  const handleFacebookLinkChange = (e: any) => setFacebookLink(e.target.value);
  const handleLinkedInLinkChange = (e: any) => setLinkedInLink(e.target.value);

  const handleAddTeamMember = async () => {
    try {
      if (!memberName || !memberRole || !image) {
        console.error('Please fill out all required fields.');
        setAddMemberError(true);
        setTimeout(() => setAddMemberError(false), 3000);
        return;
      }

      const docRef = await addDoc(collection(db, 'TeamMembers'), {
        memberName,
        category,
        imageUrl: '',
        memberRole,
        description,
        twitterLink,
        facebookLink,
        linkedInLink
      });

      console.log('Document written with ID: ', docRef.id);
      const imageRef = ref(storage, `teamMembers/${docRef?.id}/${image.name}`); // Upload the image to Cloud Storage
      const uploadTask = uploadBytesResumable(imageRef, image); // Upload the file and metadata

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          setUploadProgress(progress);

          // You can update your progress bar here
          // For example, if you have an HTML progress element with ID 'uploader':
          // const uploader = document.getElementById('uploader');
          // uploader.value = progress;
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        async () => {
          // Image upload complete
          console.log('Image uploaded successfully!');

          // Get the download URL of the uploaded image
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateDoc(doc(collection(db, 'TeamMembers'), docRef.id), {
            imageUrl: downloadURL
          });

          setUploadProgress(0);

          // You might want to do something after a successful upload, like enabling a button
        }
      );

      setAddMemberSuccess(true);

      setTimeout(() => setAddMemberSuccess(false), 3000);
    } catch (e) {
      console.error('Error adding document: ', e);
      setAddMemberError(true);
      setTimeout(() => setAddMemberError(false), 3000);
    }
  };

  return (
    <div className="w-full border-stroke dark:border-strokedark mx-auto container">
      <div className="w-full  shadow rounded py-12 lg:px-28 px-8">
        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700 mb-4">
          Add a New Team Member
        </p>

        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4">
          <div className="w-full flex flex-col mt-8">
            <label
              htmlFor="member-categories"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Category
            </label>
            <select
              id="member-categories"
              className="w-full mt-1 cursor-pointer rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={category}
              onChange={handleCategoryChange}
              //   className="bg-gray-50 border py-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="EXECUTIVE">EXECUTIVE</option>
              <option value="ADVISORY BOARD">ADVISORY BOARD</option>
              <option value="SECRETARIAT">SECRETARIAT</option>
              <option value="DEV TEAM">DEV TEAM</option>
            </select>
          </div>

          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              Enter Full Name
            </label>

            <input
              type="text"
              placeholder="Member Full Name"
              value={memberName}
              required
              onChange={handleMemberNameChange}
              className="w-full mt-1 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              Member Role
            </label>
            <input
              type="text"
              placeholder="Role"
              value={memberRole}
              onChange={handleMemberRoleChange}
              className="w-full mt-1 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center justify-center w-full my-3">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-6 h-6 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {selectedFile && (
          <div className="flex items-center justify-center flex-col w-full my-3 border-gray-200 bg-graydark py-3 rounded-md">
            <div className="w-40 h-30 overflow-hidden bg-gray-200 rounded-lg dark:bg-gray-700">
              <Image
                width={100}
                height={200}
                className="object-cover w-full h-full"
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
              />
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex font-normal text-gray-500 dark:text-gray-400 gap-2">
              <p className="font-medium underline">{selectedFile.name}</p>
              {'-'}
              <p className="font-medium underline text-success">
                {formatBytes(selectedFile.size)}
              </p>
            </div>
          </div>
        )}

        {uploadProgress > 0 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-[#2ecc71] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full"
              style={{ width: uploadProgress ? `${uploadProgress}%` : '0%' }}
            >{`${uploadProgress}%`}</div>
            Uploaded successfully...
          </div>
        )}

        <div className="w-full flex flex-col mt-8">
          <label className="text-base font-semibold leading-none text-gray-800">
            Description
          </label>
          <textarea
            id="member-description"
            className="w-full mt-1 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            placeholder="Write Something here..."
            required
            onChange={handleDescriptionChange}
          ></textarea>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4">
          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              Twitter Link
            </label>

            <input
              type="text"
              placeholder="Twitter link"
              value={twitterLink}
              required
              onChange={handleTwitterLinkChange}
              className="w-full mt-1 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              Facebook Link
            </label>

            <input
              type="text"
              placeholder="Facebook Link"
              value={facebookLink}
              required
              onChange={handleFacebookLinkChange}
              className="w-full mt-1 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <div className="w-full flex flex-col mt-8">
            <label className="text-base font-semibold leading-none text-gray-800">
              LinkedIn Link
            </label>

            <input
              type="text"
              placeholder="Enter LinkedIn Link"
              value={linkedInLink}
              required
              onChange={handleLinkedInLinkChange}
              className="w-full mt-1 rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            onClick={handleAddTeamMember}
            className="mt-9 text-base w-full font-semibold leading-none text-white py-4 px-10 bg-success rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
          >
            Add Team Member
          </button>
        </div>
        <div className="mt-4">
          {addMemberError && <AlertDanger />}
          {addMemberSuccess && <AlertSuccess />}
          {/* <AlertDanger />
          <AlertSuccess /> */}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberForm;

import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";

const UserProfile = ({ info, onSave, back }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(info);

  useEffect(() => { setUserData(info); }, [info]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(userData);
    setIsEditing(false);
  };
 const handleBack=()=>{
 back(null);
 }
  if (!info) return null;

  return (<div className="flex flex-col container mx-auto p-4 bg-blue-50 rounded border">
  <button onClick={handleBack} className="flex items-center m-4 px-2 py-1 gap-1 font-semibold bg-green-100 rounded-md"><IoIosArrowRoundBack /><span>Back</span></button>
    <div className="p-4 flex flex-col lg:flex-row gap-10">
      <div className="text-center lg:w-1/4 ">
        <img
          src={info.image}
          alt={info.name}
          className="w-40 h-40 rounded-full bg-gray-200 mx-auto"
        />
        <p className="font-semibold text-2xl pt-4 ">{info.name}</p>
          <div className="border-none flex flex-col justify-center items-center">
            {isEditing ? (
              <input
                type="text"
                name="role"
                value={userData.role}
                onChange={handleInputChange}
                className="font-semibold text-lg border-b-2 mt-2 rounded w-40 h-10"
              />
            ) : (
              <p className="font-semibold text-xl text-gray-500">{info.role}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                name="status"
                value={userData.status}
                onChange={handleInputChange}
                className="font-semibold text-lg border-b-2 rounded mt-2 w-40 h-10 mb-2"
              />
            ) : (
              <p
                className={`pb-1 text-gray-600 ${
                  info.status === "Active" ? "text-green-600" : "text-red-600"
                }`}
              >
                {info.status}
              </p>
            )}
          </div>
          <hr />
        <div className="flex justify-center gap-1 items-center mt-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="text-white bg-green-500 px-2 py-1 rounded"
                >
                  Save
                </button>{" "}
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-red-600 rounded px-2 py-1 text-white">
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className=" flex justify-center items-center gap-1 bg-blue-500 rounded px-2 py-1 text-white"
              ><GrEdit />
                <span>Edit</span>
              </button>
            )}
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
        <div className="border rounded-md p-4 shadow">
          <h1 className="font-semibold text-lg pb-1">Bio</h1>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">Age:</span>
            <span>{info.bio.age}</span>
          </p>
          <p className="text-gray-600 flex">
            <span className="w-[30%]">Email:</span>
            <span>{info.email}</span>
          </p>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">Phone:</span>
            <span>{info.bio.phone}</span>
          </p>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">Date of Joining:</span>
            <span>{info.bio.dateOfJoining}</span>
          </p>
        </div>
        <div className="border rounded-md p-4 shadow">
          <h1 className="font-semibold text-lg pb-1">Address</h1>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">State:</span>
            <span>{info.address.state}</span>
          </p>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">Pincode:</span>
            <span>{info.address.pincode}</span>
          </p>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">Area:</span>
            <span>{info.address.area}</span>
          </p>
          <p className="text-gray-600 flex">
            <span className="w-[40%]">Building/House:</span>
            <span>{info.address.buildingHouse}</span>
          </p>
        </div>
        <div className="border rounded-md p-4 shadow">
          <h1 className="font-semibold text-lg pb-1">Qualifications</h1>
          {info.qualifications.map((qualification, index) => (
            <p className="text-gray-600" key={index}>
              {qualification}
            </p>
          ))}
        </div>
        <div className="border rounded-md p-4 shadow">
          <h1 className="font-semibold text-lg pb-1">Skills</h1>
          {info.skills.map((skill, index) => (
            <p className="text-gray-600" key={index}>
              {skill}
            </p>
          ))}
        </div>
        <div className="border rounded-md p-4 shadow">
          <h1 className="font-semibold text-lg pb-1">Experience</h1>
          {info.experience.map((experience, index) => (
            <p className="text-gray-600" key={index}>
              {experience}
            </p>
          ))}
        </div>
        <div className="border rounded-md p-4 shadow">
          <h1 className="font-semibold text-lg pb-1">Languages Spoken</h1>
          {info.languagesSpoken.map((language, index) => (
            <p className="text-gray-600" key={index}>
              {language}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>);
};

export default UserProfile;

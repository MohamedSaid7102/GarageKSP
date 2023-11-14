import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../../axiosConfig";
import { TagsInput } from "react-tag-input-component";

export const SendCV = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [contactInfo, setContactInfo] = useState([]);

  const [formData, setFormData] = useState({
    job_announcement_id: jobId,
    name: "",
    email: "",
    birth_date: "",
    experience_years: "",
    cv: null,
  });

  const resetFormData = () => {
    setFormData({
      job_announcement_id: jobId,
      name: "",
      email: "",
      birth_date: "",
      experience_years: "",
      cv: null,
    });
    setSelectedSkills([]);
    setContactInfo([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  // const formDataHasGaps = () => {
  //   return (
  //     formData.name.length == 0 ||
  //     formData.email.length == 0 ||
  //     formData.birth_date.length == 0 ||
  //     formData.experience_years.length == 0 ||
  //     formData.cv == null ||
  //     selectedSkills.length == 0 ||
  //     contactInfo.length == 0
  //   );
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (formDataHasGaps()) {
    //   console.log("Fill all inputs !", formData, contactInfo, selectedSkills);
    //   return; /* If there are any inputs that hasn't been filed */
    // }

    try {
      // Create a new FormData object to handle file uploads
      const formDataToSend = new FormData();
      formDataToSend.append("job_announcement_id", jobId);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("birth_date", formData.birth_date);
      formDataToSend.append("experience_years", formData.experience_years);
      contactInfo.forEach((contact, index) => {
        formDataToSend.append(`contact_info[${index}]`, contact);
      });
      selectedSkills.forEach((skill, index) => {
        formDataToSend.append(`technical_skills[${index}]`, skill);
      });
      formDataToSend.append("cv", formData.cv);

      // const newFormData = formData;
      // newFormData.contact_info = contactInfo;
      // newFormData.technical_skills = selectedSkills;

      // // console.log(newFormData, formData, formDataToSend)
      // console.log("newFormData", newFormData);

      await instance.post("/users/applicants", formDataToSend);
      // console.log("Message submitted:", response.data);
      resetFormData();
      navigate(-1, { replace: true });
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "1000px", margin: "5rem auto" }}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            name="birth_date"
            value={formData.birth_date}
            onChange={handleInputChange}
            placeholder="Birth Date"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            min={0}
            className="form-control"
            name="experience_years"
            value={formData.experience_years}
            onChange={handleInputChange}
            placeholder="experience_years"
          />
        </div>
        <div className="mb-3">
          <TagsInput
            value={selectedSkills}
            onChange={setSelectedSkills}
            name="skills"
            className="form-control"
            placeHolder={`Skills`}
          />
        </div>
        <div className="mb-3">
          <TagsInput
            value={contactInfo}
            onChange={setContactInfo}
            name="contact"
            className="form-control"
            placeHolder={`Contact Info`}
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            name="cv"
            onChange={handleFileChange}
          />
        </div>
        {/* <button onClick={handleSubmit}>hhhhh</button> */}
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

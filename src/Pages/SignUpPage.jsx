import { useState } from "react";
import { useNavigate } from "react-router";

const SignUpPage = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    userId: "",
    userName: "",
    email: "",
    fname: "",
    mname: "",
    lname: "",
    password: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipcode: "",
    role: "Patron",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function postData(Data) {
    const response = fetch("https://localhost:7247/api/User", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(Data),
    }).then(() => {
      console.log("Created");
      alert("Signed Up Successfully");
      navigate("/");
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = response.text();
    console.log("Response:", responseData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    postData(formData);
    // try {
    //   const response = await axios.post(
    //     "https://localhost:7247/api/User",
    //     formData
    //   );
    //   console.log("Form submitted:", response.data);
    //   // handle success
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   // handle error
    // }
  };

  return (
    <div
      className="flex justify-start items-center h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/src/assets/images/bgSignUp.avif')" }}
    >
      <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-sm w-full ml-20 top-[40px] relative shadow-[#f0dca6]">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.fname}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lname}
            className="input input-bordered w-full bg-inherit active:bg-transparent hover:bg-transparent"
          />
          <input
            type="text"
            name="mname"
            placeholder="Middle Name"
            onChange={handleChange}
            value={formData.mname}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={formData.username}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phone}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            onChange={handleChange}
            value={formData.street}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            onChange={handleChange}
            value={formData.zipcode}
            className="input input-bordered w-full bg-inherit"
          />
          <input
            type="text"
            name="city"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.city}
            className="input input-bordered w-full bg-inherit active:bg-transparent hover:bg-transparent"
          />

          <button
            type="submit"
            className="btn btn-primary font-bold
            hover:bg-[#f0dca6] hover:text-black px-4 py-2 rounded-lg "
            onClick={() => {
              handleSubmit();
              // navigate("/");
            }}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

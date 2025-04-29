import React from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "../ThemeContext";
import { ContactFormData } from "@/data/ContactFormTypes";

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  };

  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-slate-950 " : "bg-slate-100  "
        } flex flex-col items-center rounded-xl p-7 `}
      >
        <div
          className={`${
            isDarkMode
              ? "from-blue-300  to-amber-500"
              : "from-amber-300 to-amber-500"
          } bg-clip-text w-full bg-gradient-to-r text-transparent text-5xl font-bold `}
        >
          {" "}
          Reach Out!
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-9 block w-full overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:w-full sm:w-auto">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First Name is required" })}
              className={`${
                isDarkMode
                  ? "bg-black border-blue-500 text-white"
                  : "bg-slate-100 border-amber-500 text-slate-700"
              } flex-2 px-7 py-3 rounded-xl border-[1.5px] border-opacity-55 outline-none w-full `}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}

            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last Name is required" })}
              className={`${
                isDarkMode
                  ? "bg-black border-blue-500 text-white"
                  : "bg-slate-100 border-amber-500 text-slate-700"
              } flex-2 px-7 py-3 rounded-xl border-[1.7px] border-opacity-55 outline-none w-full`}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-4 md:w-full sm:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`${
                isDarkMode
                  ? "bg-black border-blue-500 text-white"
                  : "bg-slate-100 border-amber-500 text-slate-700"
              } flex-1 px-7 py-3 rounded-xl border-[1.5px] border-opacity-55 outline-none w-full md:w-full sm:w-auto`}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className={`${
                isDarkMode
                  ? "bg-black border-blue-500 text-white"
                  : "bg-slate-100 border-amber-500 text-slate-700"
              } rounded-xl flex-1 px-7 py-3 border-[1.5px] border-opacity-55 outline-none w-full`}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <select
            {...register("service", { required: "Please select a service" })}
            className={`${
              isDarkMode
                ? "bg-black-100 text-slate-100 placeholder:text-slate-100 border-blue-500"
                : "bg-slate-100 text-slate-500 placeholder:text-slate-500 border-amber-500"
            } w-full mt-5 rounded-xl border-[1.7px] h-11 outline-none`}
          >
            <option disabled value="">
              Select an option
            </option>
            <option value="web design">Web Design</option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="full-stack">Fullstack Development</option>
          </select>
          {errors.service && (
            <p className="text-red-500">{errors.service.message}</p>
          )}

          <textarea
            rows={20}
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className={`${
              isDarkMode
                ? "bg-black-100 text-slate-100 placeholder:text-slate-100 border-blue-500"
                : "bg-slate-100 text-slate-500 placeholder:text-slate-500 border-amber-500"
            } w-full mt-5 rounded-xl border-[1.7px] h-[10rem] outline-none placeholder:p-5`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <div className="mt-5 flex justify-center items-center mx-auto">
            <button
              type="submit"
              className={`${
                isDarkMode
                  ? "bg-gradient-to-r text-blue-950 hover:border-blue-500 hover:border-opacity-70 outline-none border-[1.5px] border-blue-700 hover:text-blue-700 hover:brightness-125 from-blue-100 to bg-blue-500 hover:bg-amber-500"
                  : "text-slate-700 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-400 hover:brightness-110 hover:text-white"
              } px-7 py-3 bg transition-all duration-150 rounded-xl text-base font-semibold`}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

import TitleText from "@/components/custom/TitleText";
import useWeb3forms from "@web3forms/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [alert, setAlert] = useState(false);

  const { submit: onSubmit } = useWeb3forms({
    access_key: import.meta.env.VITE_ACCESS_KEY,
    settings: {
      from_name: "Naing Aung Zaw's Portfolio",
      subject: "Contact",
    },

    onSuccess: (msg, data) => {
      console.log(msg, data);
      setAlert(true);
      reset();
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    },
    onError: (msg, data) => {
      console.log(msg, data);
    },
  });
  return (
    <div className="md:px-[220px] px-10 " id="contact">
      <TitleText title="How Can You Reach Me"></TitleText>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-start justify-between md:flex-row flex-col gap-10 mt-12"
      >
        <div className="grid md:w-[60vw] w-[80vw]">
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_ACCESS_KEY}
          ></input>
          <input
            type="text"
            className="glassmorphism bg-transparent py-5 mb-8 rounded-md text-white/55 px-5  outline-none"
            placeholder="Name"
            {...register("name")}
          />
          <input
            type="email"
            className="glassmorphism bg-transparent py-5 mb-8 rounded-md text-white/55 px-5  outline-none"
            placeholder="Email"
            {...register("email")}
          />
        </div>

        <div>
          <textarea
            className="glassmorphism bg-transparent py-5 md:w-[30vw] w-[80vw] mb-5 rounded-md text-white/55 px-5  outline-none"
            rows={5}
            placeholder="Message..."
            {...register("message")}
          ></textarea>
          <button
            type="submit"
            className="glassmorphism bg-transparent py-5 w-[80vw] md:w-[30vw] rounded-md text-white/55 px-5  outline-none hover:border-white hover:text-white"
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
                xmlns="<http://www.w3.org/2000/svg>"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
          <div
            id="toast-simple"
            className={`fixed ${
              alert ? "bottom-5" : "bottom-[-400px]"
            } transition-all duration-500 right-5 flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800`}
            role="alert"
          >
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="pl-4 text-sm font-normal">
              Message sent successfully.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;

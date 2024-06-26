"use client";
import { createUser } from "@/utils/actions";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type='submit'
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize'
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const initialState = {
  message: "",
  resetKey: Date.now().toString(),
};

const Form = () => {
  const [state, formAction] = useFormState(createUser, initialState);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      setMessage(state.message);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <>
      <form
        action={formAction}
        className='flex flex-col shadow-md max-w-lg p-8 gap-y-4'
        key={state?.resetKey?.toString()}
      >
        {showMessage && (
          <h2 className='text-green-500 text-center'>{message}</h2>
        )}
        <input
          type='text'
          name='firstName'
          required
          className='border shadow rounded py-2 px-3 text-gray-900'
        />
        <input
          type='text'
          name='lastName'
          required
          className='border shadow rounded py-2 px-3 text-gray-900'
        />
        <SubmitBtn />
      </form>
    </>
  );
};
export default Form;

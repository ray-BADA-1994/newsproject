import { useRef } from "react";

export const Subscribe = () => {
  const emailRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
      }}
      className="flex flex-col md:flex-row justify-between items-center w-full py-3 px-5 mt-10 border-2 border-[#dd3418] "
    >
      <p className="text-[#dd3418] mb-3 md:mb-0  font-normal text-lg">
        For Update-to-date News, pls subscribe!
      </p>
      <div className="input-group text-black">
        <input
          type="email"
          className="input w-[80%] md:w-[350px]"
          ref={emailRef}
          id="Email"
          name="Email"
          placeholder="Your email address"
          autoComplete="off"
        />
        <input className="button--submit" value="Subscribe" type="submit" />
      </div>
    </form>
  );
};

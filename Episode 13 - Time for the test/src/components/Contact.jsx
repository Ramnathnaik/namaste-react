const Contact = () => {
  return (
    <div className="contact-div flex flex-col items-center">
      <h1 className="font-semibold text-xl m-4">Contact Us</h1>
      <form className="flex flex-col">
        <input
          type="text"
          name="username"
          className="border border-solid border-black p-2 rounded-xl mb-2"
        />
        <input
          type="text"
          name="description"
          className="border border-solid border-black p-2 rounded-xl mb-2"
        />
        <button className="bg-slate-600 p-2 shadow-lg rounded-xl text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

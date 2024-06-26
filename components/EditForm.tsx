const EditForm = () => {
  return (
    <form>
      <input type='text' name='fisrtName' id='' />
      <input type='text' name='lastName' id='' />
      <button
        type='submit'
        className='text-white bg-green-500 hover:bg-green-700  rounded px-4 py-2'
      >
        edit
      </button>
    </form>
  );
};
export default EditForm;

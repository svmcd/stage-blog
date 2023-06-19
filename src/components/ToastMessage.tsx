export const ToastMessage = ({
  title,
  text,
  borderColor,
}: {
  title: string;
  text: string;
  borderColor: string;
}) => {
  return (
    <>
      <div
        className={`fixed bottom-0 w-full box-static z-30 max-w-sm sm:max-w-lg inset-x-0 mx-auto border-solid border-2 ${borderColor}`}
      >
        <h1 className="font-bold text-lg">{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

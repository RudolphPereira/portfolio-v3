type Props = {
  title?: string;
};

function TitleBox({ title }: Props) {
  return (
    <div className="titleBox">
      <h2 className=" text-3xl sm:text-4xl font-medium text-center sm:leading-12">
        {title}
      </h2>
    </div>
  );
}

export default TitleBox;

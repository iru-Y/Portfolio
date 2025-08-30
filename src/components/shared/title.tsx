export default function TitleComponent({
  title,
  subTitle,
  highlight,
  description,
}: {
  title: string;
  subTitle: string;
  highlight: string;
  description?: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img
            src="assets/img/asterisk.png"
            width={20}
            height={20}
            alt="asterisco"
          />
          <h1 className="text-secondary font-montserrat font-medium">
            {title}
          </h1>
        </div>
        <h2 className="font-roboto font-medium text-3xl">
          {subTitle}
          <span className="font-playfair italic text-secondary">
            {highlight}
          </span>
        </h2>
        <h3 className="font-roboto text-1xl font-medium">{description}</h3>
      </div>
    </>
  );
}

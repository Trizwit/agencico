import Link from "next/link";

const ClientLogoItem = (props) => {
  return (
    <>
      <div className="ag-client-logobox">
        <Link href="/">
          <img src={props.img} alt="" style={{ maxWidth: "300px" }} />
        </Link>
      </div>
    </>
  );
};
export default ClientLogoItem;

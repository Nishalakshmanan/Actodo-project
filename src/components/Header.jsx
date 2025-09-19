function Header(props) {
  return (
    <>
      <h1 className="text-3xl font-medium ">Hello {props.name}!</h1>
      <p className=" whitespace-nowrap text-[13.2px] xs:text-base">I help you manage your activities :)</p>
    </>
  );
}
export default Header

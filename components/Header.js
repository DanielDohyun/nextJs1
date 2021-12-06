import headerStyle from "../styles/Header.module.css";

const Header = () => {
  //example of inline conditional styling
  //   const x = 5;
  //   return (
  //     <div>
  //       <h1 className="title">
  //         <span>First NextJs</span> App
  //       </h1>
  //       <style jsx>
  //         {`
  //           .title {
  //             color: ${x > 4 ? "red" : "blue"};
  //           }
  //         `}
  //       </style>
  //     </div>
  //   );

  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>First NextJs</span> App
      </h1>
      <p className={headerStyle.description}>
        Keep up to date with the latest tech
      </p>
    </div>
  );
};

export default Header;

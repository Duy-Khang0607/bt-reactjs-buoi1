import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <h1> A warm welcome!</h1>
        <p>
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <a href="https://startbootstrap.com/previews/heroic-features">
          Call to action
        </a>
      </div>
    </div>
  );
}
export default Banner;

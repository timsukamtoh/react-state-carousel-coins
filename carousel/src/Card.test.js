import { render } from "@testing-library/react";
import Card from "./Card.js";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption="test" src="url" currNum={1} totalNum={3} />);
});

describe("snapshot tests", function () {
  it("initial snapshot", function () {
    const { container } = render(<Card caption="test" src="url" currNum={1} totalNum={3}/>);
    expect(container).toMatchSnapshot();
  });
});
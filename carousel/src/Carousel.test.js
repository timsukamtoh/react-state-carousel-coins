import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


describe("carousel arrows work", function () {
  it("works when you click on the right arrow", function () {
    const { container } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
  });


  it("works when you click on the left arrow", function () {
    const { container, debug } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();

    // move backward in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    // expect the second image to show, but not the first
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
  });

  it("loops forward", function () {
    const { container, debug } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);

    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).not.toBeInTheDocument();
  });

  it("loops backward", function () {
    const { container, debug } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the second
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).not.toBeInTheDocument();

    // move backward in the carousel
    const leftArrow = container.querySelector(".bi-arrow-left-circle");
    fireEvent.click(leftArrow);

    expect(
      container.querySelector('img[alt="testing image 3"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).not.toBeInTheDocument();
  });
});

describe("smoke tests", function () {
  it("renders carousel without crashing", function () {
    // this is a low-value test, but better than nothing
    render(<Carousel photos={[{}]} title="test" />);
  });
});


describe("snapshot tests", function () {
  it("initial snapshot", function () {
    const { container } = render(<Carousel photos={TEST_IMAGES} title="test" />);

    expect(container).toMatchSnapshot();
  });

  it("second snapshot", function () {
    const { container } = render(<Carousel photos={TEST_IMAGES} title="test" />);
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    expect(container).toMatchSnapshot();
  });


});



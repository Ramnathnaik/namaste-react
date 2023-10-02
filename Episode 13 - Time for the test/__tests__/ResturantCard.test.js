import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResturantCard, {
  withPromotedLabel,
} from "../src/components/ResturantCard";
import MOCK_DATA from "../mocks/resturantCard.json";

test("Should load the resturant card", () => {
  render(<ResturantCard resturantData={MOCK_DATA.info} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();
});

it("Should load good rated restuarant component", () => {
  const ResturantWithGoodRating = withPromotedLabel(ResturantCard);
  render(<ResturantWithGoodRating resturantData={MOCK_DATA.info} />);

  const name = screen.getByText("Good rated");

  expect(name).toBeInTheDocument();
});

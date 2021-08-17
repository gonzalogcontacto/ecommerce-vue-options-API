import { render, screen } from "@testing-library/vue";
import Article from "@/components/Article";
import { getArticle } from "../../repositories/articlesRepository.js";
import { generateArticle } from "../factories/article";

jest.mock("../../repositories/articlesRepository.js");

describe("Article component", () => {
  beforeAll(() => jest.useFakeTimers());
  afterAll(() => jest.useRealTimers());

  it("should display the article content", async () => {
    const article = generateArticle();
    getArticle.mockResolvedValueOnce(article);

    render(Article);

    const title = await screen.findByRole("heading", {
      name: article.title,
    });
    expect(title).toBeInTheDocument();

    const content = screen.getByText(article.body);
    expect(content).toBeInTheDocument();
  });


});
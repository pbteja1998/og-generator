import { GetCSSFn, ILayout, LayoutComponent } from "../types";
import { getFormattedDate } from "../utils/format-date";

const getCSS: GetCSSFn = config => {
  return ``;
};

const Component: LayoutComponent = ({ config }) => {
  const author = config.author;
  const authorImage = config.authorImage;
  const authorBio = config.authorBio;
  const count = config.count;
  const logo = config.logo;

  return (
    <>
      {logo && <img className="w-auto h-10" src={logo} alt="" />}
      <div className="flex items-start gap-16 mt-16">
        <div>
          {author && (
            <p className="max-w-2xl text-6xl font-bold tracking-tight text-gray-900">
              {author}
            </p>
          )}
          {authorBio && (
            <p className="max-w-2xl mt-6 text-2xl font-medium leading-relaxed text-gray-500">
              {authorBio}
            </p>
          )}
          <p className="mt-8 text-2xl font-semibold text-gray-900">
            Total {count} articles written
          </p>
        </div>
        <div>
          <div
            className="relative mx-auto"
            style={{ width: "275px", height: "275px" }}
          >
            <div
              className="bg-conic-gradient absolute rounded-full rotate-180 opacity-30 blur-lg"
              style={{
                filter: "blur(16px)",
                top: "-0.125rem",
                bottom: "-0.125rem",
                right: "-0.125rem",
                left: "-0.125rem",
              }}
            ></div>
            <img
              className="flex-shrink-0 relative object-cover rounded-full bg-gray-200 border-8 border-gray-50"
              src={authorImage}
              alt=""
              style={{ width: "275px", height: "275px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const featherAuthorLayout: ILayout = {
  name: "author",
  properties: [
    {
      name: "count",
      type: "number",
      default: "23",
      placeholder: "Number of articles",
    },
    {
      name: "author",
      type: "text",
      default: "Floyd Miles",
      placeholder: "Author Name",
    },
    {
      name: "authorBio",
      type: "text",
      default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit alias velit similique illum rem consequatur fuga quidem sed. `,
      placeholder: "Author Bio",
    },
    {
      name: "authorImage",
      type: "text",
      default:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      placeholder: "Author Image URL",
    },
    {
      name: "logo",
      type: "text",
      default:
        "https://d33wubrfki0l68.cloudfront.net/bd041a453e81e75ada1030d5498ade1f8e6f78fc/7b60b/images/airtable-logo.png",
      placeholder: "Logo URL",
    },
  ],
  getCSS,
  Component,
};
